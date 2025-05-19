import { useState, useEffect } from 'react';
import { dataManager } from '@/classes/DataManager';

const useDataManager = () => {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        if (!dataManager.loaded) {
            async function fetchData() {
                await dataManager.loadData();
                setLoaded(true);
            }

            fetchData();
        }
        else setLoaded(true);
    }, []);

    return loaded ? { dataManager, } : { dataManager: null };
};

export default useDataManager;