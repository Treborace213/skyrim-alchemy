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
            <div className="flex">
                <input
                    className="border-2 rounded-md flex-grow"
                    placeholder="Filter Effects"
                    value={effectListFilter}
                    onChange={(e) => setEffectListFilter(e.target.value)}
                    onFocus={() => setSearchIsFocused(true)}
                    onBlur={() => setTimeout(() => setSearchIsFocused(false), 150)}
                />

                <button
                    onClick={() => setSelectedEffects([])}
                >
                    Clear selection
                </button>
            </div>

            {/* Dropdown list of effects */}
            {searchIsFocused && (
                <ul className="max-h-64 overflow-auto border rounded-md"
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
                                    ? "bg-hlt hover:bg-hlt-tint"
                                    : "hover:bg-tint-bg"
                                    }`}
                            >
                                {effect.name}
                            </li>
                        ))
                    }
                </ul>
            )}

            {/* List of selected effects */}
            {(selectedEffects.length == 0) ? (
                <p> No effects being filtered </p>

            ) : selectedEffects.map((effect, index) =>
                <div
                    key={effect.name}
                    className={`justify-center border rounded-3xl inline-flex p-2 m-1 ${effect.isPos ? "pos" : "neg"}`}
                >
                    {effect.name}
                    <span
                        onClick={() =>
                            setSelectedEffects(
                                selectedEffects.slice(0, index).concat(selectedEffects.slice(index + 1))
                            )
                        }
                        className={`ml-2 w-6 h-6 flex justify-center rounded-full cursor-pointer
                            ${effect.isPos ? "bg-pos-tint hover:bg-pos-hlt" : "bg-neg-tint hover:bg-neg-hlt"}`}
                    >
                        &times;
                    </span>
                </div>
            )}
        </div>
    );
};

export default EffectFilter;