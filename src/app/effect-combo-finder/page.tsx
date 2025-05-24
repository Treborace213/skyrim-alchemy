'use client'

import EffectSelectorBlock from "@/components/search/EffectSelectorBlock";
import { Effect } from "@/types/Effect";
import { useState } from "react";

export default function PotionFinderPage() {
    const [selectedEffects, setSelectedEffects] = useState<(Effect | null)[]>([])

    return (
        <div>
            <EffectSelectorBlock onChange={(e) => setSelectedEffects(e)}/>
        </div>
    );
}