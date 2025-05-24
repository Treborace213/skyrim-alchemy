import { useCombobox } from "downshift";
import { useMemo, useState } from "react";
import { Effect } from "@/types/Effect";

interface EffectSelectorProps {
    effectsToList : Effect[];
    returnedEffect: (results: Effect | null) => void;
}

const EffectSelector: React.FC<EffectSelectorProps> = ({ effectsToList, returnedEffect }) => {
    const [inputValue, setInputValue] = useState("");

    const setInputAndSyncEffect = (value: string) => {
        setInputValue(value)

        const effect = effectsToList.find(
            (effect) => effect.name.toLowerCase() === value.toLowerCase()
        ) ?? null;

        returnedEffect(effect);
    }

    const filteredItems = useMemo(() => {
        return effectsToList.filter((effect) =>
            effect.name.toLowerCase().includes(inputValue.toLowerCase())
        );
    }, [inputValue, effectsToList]);

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
        <div className="m-1 w-full">
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

export default EffectSelector;