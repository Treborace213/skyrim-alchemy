import { useCombobox } from "downshift";
import { useEffect, useMemo, useState } from "react";
import { useDataManager } from "@/context/DataManagerContext";
import { Effect } from "@/types/Effect";

interface EffectFilterProps {
    onSubmit: (results: Effect | null) => void;
}

const EffectFilter: React.FC<EffectFilterProps> = ({ onSubmit }) => {
    const dataManager = useDataManager();
    const [inputValue, setInputValue] = useState("");

    const allItems: Effect[] = dataManager.effects;

    // Sync onChange with exact effect match from input (if any found, else null).
    useEffect(() => {
        const effect = allItems.find(
            (effect) => effect.name.toLowerCase() === inputValue.toLowerCase()
        ) ?? null;

        onSubmit(effect);
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
        highlightedIndex,
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
        <div className="m-1 w-8/10">
            <input
                {...getInputProps()}
                placeholder="Filter effect"
                className="border-b-1 w-full"
            />
            <ul
                {...getMenuProps()}
                className="overflow-y-auto max-h-60 absolute bg-menu rounded-md border-2 w-58 px-2 py-1 -translate-x-0.5 z-10"
                style={{ display: isOpen ? "block" : "none" }} // Hide the <ul> if the list is not open.
            >
                {isOpen && filteredItems.map((item, index) => (
                    <li
                        key={item.name}
                        {...getItemProps({ item, index })}
                        className={`${highlightedIndex === index ? "bg-hlt" : ""}`}
                    >
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>

    );
};

export default EffectFilter;