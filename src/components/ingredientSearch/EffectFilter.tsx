import { useCombobox } from "downshift";
import { useEffect, useMemo, useState } from "react";
import useDataManager from "@/hooks/useDataManager";
import { Effect } from "@/types/effect";

interface EffectFilterProps {
    onChange: (results: Effect | null) => void;
}

const EffectFilter: React.FC<EffectFilterProps> = ({ onChange }) => {
    const { dataManager } = useDataManager();
    const [inputValue, setInputValue] = useState("");

    const allItems: Effect[] = dataManager?.effects ?? [];

    // Sync onChange with exact effect match from input (if any found, else null).
    useEffect(() => {
        const effect = allItems.find(
            (effect) => effect.name.toLowerCase() === inputValue.toLowerCase()
        ) ?? null;

        onChange(effect);
    }, [inputValue])

    const filteredItems = useMemo(() => {
        return allItems.filter((effect) =>
            effect.name.toLowerCase().includes(inputValue.toLowerCase())
        );
    }, [allItems, inputValue]);

    const {
        isOpen,
        getMenuProps,
        getInputProps,
        getItemProps,
    } = useCombobox<Effect>({
        items: filteredItems,
        inputValue,
        onInputValueChange: ({ inputValue }) => {
            const value = inputValue;
            setInputValue(value);
        },
        itemToString: (item) => item?.name ?? "",
    });

    return (
        <div>
            <input {...getInputProps()} placeholder="Filter for effect..." />
            <ul {...getMenuProps()} >
                {isOpen &&
                    filteredItems.map((item, index) => (
                        <li
                            key={item.name}
                            {...getItemProps({ item, index })}
                            className={`hover:bg-hlt`}
                        >
                            {item.name}
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default EffectFilter;