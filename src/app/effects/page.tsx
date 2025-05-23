'use client'

import EffectsBlock from "@/components/EffectsBlock";
import useDataManager from "@/hooks/useDataManager";
import { useMemo, useState } from "react";

export default function EffectsPage() {
    const { dataManager } = useDataManager();
    const [inputText, setInputText] = useState("");

    const effectList = useMemo(() => {
        return dataManager?.effects.filter((e) => e.name.toLowerCase().includes(inputText.toLowerCase())) ?? [];
    }, [dataManager, inputText])

    if (!dataManager) return <div>Loading...</div>

    return (
        <div className="flex flex-col items-center">
            <input
                placeholder="Filter effect"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="search-bar w-min-80 w-8/10"
            />

            <EffectsBlock effects={effectList} />
        </div>
    );
}