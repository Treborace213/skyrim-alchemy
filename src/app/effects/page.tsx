'use client'

import EffectsBlock from "@/components/EffectsBlock";
import useDataManager from "@/hooks/useDataManager";

export default function EffectsPage() {
    const { dataManager } = useDataManager();

    if (!dataManager) return <div>Loading...</div>

    return (
        <EffectsBlock effects={dataManager.effects} />
    );
}