import { Effect } from "@/types/Effect"
import EffectFilter from "./EffectSelector"
import { useState } from "react";

interface EffectSelectorBlockProps {
    onChange: (selectedEffects: (Effect | null)[]) => void;
    size?: number;
    className?: string;
}

const EffectSelectorBlock: React.FC<EffectSelectorBlockProps> = ({ onChange, size = 1, className }) => {
    const [selectedEffects, setSelectedEffects] = useState<(Effect | null)[]>(() => Array(size).fill(null))

    const handleEffectChange = (index: number, newEffect: Effect | null) => {
        const updated = [...selectedEffects];
        updated[index] = newEffect;
        setSelectedEffects(updated);
        onChange(updated);
    };

    return (
        <div className={className ?? ""}>
            {selectedEffects.map((_, index) => (
                <EffectFilter key={index} returnedEffect={(e) => handleEffectChange(index, e)} />
            ))}
        </div>
    )
}

export default EffectSelectorBlock;