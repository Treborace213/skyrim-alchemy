import { useCombobox } from "downshift";
import { useMemo, useState } from "react";
import { useDataManager } from "@/context/DataManagerContext";
import { Effect } from "@/types/Effect";

interface EffectFilterProps {
    returnedEffect: (results: Effect | null) => void;
}

const EffectFilter: React.FC<EffectFilterProps> = ({ returnedEffect }) => {
    const dataManager = useDataManager();
    const [inputValue, setInputValue] = useState("");

    const setInputAndSyncEffect = (value: string) => {
        setInputValue(value)

        const effect = dataManager.effects.find(
            (effect) => effect.name.toLowerCase() === value.toLowerCase()
        ) ?? null;

        returnedEffect(effect);
    }

    const filteredItems = useMemo(() => {
        return dataManager.effects.filter((effect) =>
            effect.name.toLowerCase().includes(inputValue.toLowerCase())
        );
    }, [inputValue, dataManager.effects]);

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
            setInputAndSyncEffect(inputValue)
        },
        itemToString: (item) => item?.name ?? "",
    });

    return (
        <div className="m-1 w-8/10">
            <input
                {...getInputProps()}
                placeholder="Select effect"
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