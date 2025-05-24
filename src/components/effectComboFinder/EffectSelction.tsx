import { Effect } from "@/types/Effect"
import EffectFilter from "../search/EffectSelector"
import { useState } from "react";

interface EffectSelectorProps {
    onChange: (selectedEffects: (Effect|null)[]) => void;
}

const EffectSelector: React.FC<EffectSelectorProps> = ({ onChange }) => {
    const [selectedEffects, setSelectedEffects] = useState<(Effect | null)[]>([null])

      const handleEffectChange = (index: number, newEffect: Effect | null) => {
        const updated = [...selectedEffects];
        updated[index] = newEffect;
        setSelectedEffects(updated);
        onChange(updated);
    };

    return (
        <div>
            {selectedEffects.map((_, index) => (
                <EffectFilter key={index} returnedEffect={(e) => handleEffectChange(index, e)}/>
            ))}
        </div>
    )
}

export default EffectSelector;