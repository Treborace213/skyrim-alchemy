'use client'

import { DataManager, dataManager } from "@/classes/DataManager";
import LoadingScreen from "@/components/LoadingScreen";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";

type DataManagerContextType = {
    dataManager: DataManager | null;
}

const DataManagerContext = createContext<DataManagerContextType | undefined>(undefined);

const DataManagerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (!dataManager.loaded) {
            dataManager.loadData().then(() => setLoaded(true));
        }
        else {
            setLoaded(true);
        }
    }, [])

    if (!loaded) return (<LoadingScreen />)

    return (
        <DataManagerContext.Provider value={{ dataManager }}>
            {children}
        </DataManagerContext.Provider>
    );
};

const useDataManager = (): DataManager => {
    const context = useContext(DataManagerContext);
    if (!context || !context.dataManager) {
        throw new Error("useDataManager must be used inside a <DataManagerProvider> and after data is loaded");
    }
    return context.dataManager;
};

export { DataManagerProvider, useDataManager }