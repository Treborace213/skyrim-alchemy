'use client'

import useDataManager from "@/hooks/useDataManager";
import { Effect } from "@/types/effect";
import { useEffect, useState } from "react";

interface EffectFilterProps {
    onSelectedChange: (results: Effect[]) => void;
}

const EffectFilter: React.FC<EffectFilterProps> = ({ onSelectedChange }) => {
    const { dataManager } = useDataManager();
    const [effectListFilter, setEffectListFilter] = useState("")
    const [selectedEffects, setSelectedEffects] = useState<Effect[]>([])

    useEffect(() => {
        onSelectedChange(selectedEffects);
    }, [selectedEffects])

    return (
        <div>
            <input className="border-2 rounded-md" placeholder="Filter Effects" value={effectListFilter} onChange={(e) => setEffectListFilter(e.target.value)} />
            <button onClick={() => setSelectedEffects([])}>Clear selection</button>
            <ul>
                {dataManager?.effects
                    .filter((effect) => effect.name.toLowerCase().includes(effectListFilter.toLowerCase()))
                    .map((effect) => (
                        <li
                            key={effect.name}
                            onClick={() => setSelectedEffects(selectedEffects.includes(effect) ? selectedEffects.filter(e => e !== effect) : [...selectedEffects, effect])}
                            className={selectedEffects.includes(effect) ? "bg-cyan-900" : ""}
                        >
                            {effect.name}
                        </li>
                    ))}
            </ul>
        </div>
    )
}

export default EffectFilter;