'use client'

import useDataManager from "@/hooks/useDataManager";
import { Effect } from "@/types/effect";
import { useEffect, useState } from "react";

interface EffectFilterProps {
    onSelectedChange: (results: Effect[]) => void;
}

const EffectFilter: React.FC<EffectFilterProps> = ({ onSelectedChange }) => {
    const { dataManager } = useDataManager();
    const [effectListFilter, setEffectListFilter] = useState("");
    const [selectedEffects, setSelectedEffects] = useState<Effect[]>([]);

    const [searchIsFocused, setSearchIsFocused] = useState(false);

    useEffect(() => {
        onSelectedChange(selectedEffects);
    }, [selectedEffects]);

    return (
        <div className="relative">
            <input
                className="border-2 rounded-md w-full"
                placeholder="Filter Effects"
                value={effectListFilter}
                onChange={(e) => setEffectListFilter(e.target.value)}
                onFocus={() => setSearchIsFocused(true)}
                onBlur={() => setTimeout(() => setSearchIsFocused(false), 150)}
            />

            <button onClick={() => setSelectedEffects([])}>Clear selection</button>

            {searchIsFocused && (
                <ul className="max-h-64 overflow-auto border border-gray-300 rounded-md z-10"
                    onMouseDown={(e) => e.preventDefault()}
                >
                    {dataManager?.effects
                        .filter((effect) =>
                            effect.name.toLowerCase().includes(effectListFilter.toLowerCase())
                        )
                        .map((effect) => (
                            <li
                                key={effect.name}
                                onClick={() =>
                                    setSelectedEffects(selectedEffects.includes(effect)
                                        ? selectedEffects.filter((e) => e !== effect)
                                        : [...selectedEffects, effect])
                                }
                                className={`px-3 py-1 cursor-pointer ${selectedEffects.includes(effect)
                                    ? "bg-cyan-900 text-white"
                                    : "hover:bg-gray-100"
                                    }`}
                            >
                                {effect.name}
                            </li>
                        ))}
                </ul>
            )}
        </div>
    );
};

export default EffectFilter;