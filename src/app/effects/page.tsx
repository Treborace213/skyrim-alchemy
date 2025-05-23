'use client'

import EffectsBlock from "@/components/effects/EffectsBlock";
import { useDataManager } from "@/context/DataManagerContext";
import { useMemo, useState } from "react";

export default function EffectsPage() {
    const dataManager = useDataManager();
    const [inputText, setInputText] = useState("");

    const effectList = useMemo(() => {
        return dataManager.effects.filter((e) => e.name.toLowerCase().includes(inputText.toLowerCase()));
    }, [dataManager, inputText])

    return (
        <div className="flex flex-col items-center w-page-min gap-4">
            <input
                placeholder="Filter effect"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="search-bar w-min-80 w-full"
            />

            <EffectsBlock effects={effectList} />
        </div>
    );
}