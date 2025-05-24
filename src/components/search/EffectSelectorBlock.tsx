import { Effect } from "@/types/Effect"
import { useMemo, useState } from "react";
import EffectSelector from "./EffectSelector";
import { PlusIcon, XCircleIcon } from "@heroicons/react/16/solid";
import { useDataManager } from "@/context/DataManagerContext";

interface EffectSelectorBlockProps {
    onChange: (selectedEffects: (Effect | null)[]) => void;
    size: number;
}

const EffectSelectorBlock: React.FC<EffectSelectorBlockProps> = ({ onChange, size }) => {
    const dataManager = useDataManager();
    const [selectedEffects, setSelectedEffects] = useState<(Effect | null)[]>(() => Array(size).fill(null))

    const effectsToList = useMemo(() => {
        return dataManager.effects.filter((effect) => !selectedEffects.includes(effect));
    }, [selectedEffects])

    const handleEffectChange = (index: number, newEffect: Effect | null) => {
        const updated = [...selectedEffects];
        updated[index] = newEffect;
        setSelectedEffects(updated);
        onChange(updated);
    };

    return (
        <div className={"bg-menu pt-2 pb-3.5 px-7 m-1 border rounded-lg w-75"}>
            {selectedEffects.map((_, index) => (
                <div key={index} className="flex items-center">
                    <EffectSelector effectsToList={effectsToList} returnedEffect={(e) => handleEffectChange(index, e)} />
                </div>
            ))}
        </div>
    )
}

export default EffectSelectorBlock;