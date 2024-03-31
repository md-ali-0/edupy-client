"use client"

import { FC, ReactNode, createContext, useState } from "react";

interface ProviderProps {
    children: ReactNode;
}

interface sideBarContextProps {
    sidebarOpen: boolean;
    setSidebarOpen: (open: boolean) => void;
}

export const SideBarContext = createContext<sideBarContextProps | null>(null);

const SidebarProvider: FC<ProviderProps> = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

    const info = {
        sidebarOpen,
        setSidebarOpen,
    };
    return (
        <SideBarContext.Provider value={info}>
            {children}
        </SideBarContext.Provider>
    );
};

export default SidebarProvider;
