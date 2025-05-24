'use client'

import EffectSelector from "@/components/effectComboFinder/EffectSelction";
import { useDataManager } from "@/context/DataManagerContext";
import { Effect } from "@/types/Effect";
import { useEffect, useState } from "react";

export default function potionFinderPage() {
    const dataManager = useDataManager();
    const [selectedEffects, setSelectedEffects] = useState<(Effect | null)[]>([])

    useEffect(() => {
        console.log(selectedEffects[0]);
    }, [selectedEffects])

    return (
        <div>
            <EffectSelector  onChange={(e) => setSelectedEffects(e)}/>
        </div>
    );
}