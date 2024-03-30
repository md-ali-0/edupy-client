"use client"

import { AuthContext } from "@/provider/Provider";
import { useContext } from "react";

const useAuth = () => {
    const userInfo = useContext(AuthContext);

    if (!userInfo) {
        throw new Error("useAuth must be used within an AuthProvider");
    }

    return userInfo;
};

export default useAuth;