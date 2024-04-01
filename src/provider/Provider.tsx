"use client";
import { useRouter } from "next/navigation";
import { FC, ReactNode, createContext, useEffect, useState } from "react";

interface ProviderProps {
    children: ReactNode;
}
interface ContextProps {
    login: (email: string, password: string) => Promise<any>;
    signUp: (
        name: string,
        username: string,
        email: string,
        password: string
    ) => Promise<any>;
    logout: () => Promise<void>;
    user: any;
    isLoading: boolean;
}
export const AuthContext = createContext<ContextProps | null>(null);

const Provider: FC<ProviderProps> = ({ children }) => {
    const router = useRouter()
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const login = async (email: string, password: string) => {
        const response = await fetch("https://edupy-server.vercel.app/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });
        if (response.status == 500) {
            return false;
        }
        const result = await response.json();

        await fetch("/api/session", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(result.token),
        });

        localStorage.setItem("token", result.token);
        setUser(result.user);
        setIsLoading(false);
        return result;
    };
    const signUp = async (
        name: string,
        username: string,
        email: string,
        password: string
    ) => {
        const response = await fetch(
            "https://edupy-server.vercel.app/register",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, username, email, password }),
            }
        );
        const result = await response.json();
        await fetch("/api/session", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(result.token),
        });
        localStorage.setItem("token", result.token);
        setIsLoading(false);
        setUser(result.user);
        return result;
    };

    const logout = async () => {
        await fetch("/api/logout")
        setUser(null);
        localStorage.removeItem("token");
        setIsLoading(false);
        router.push('/login')
    };

    useEffect(() => {
        const unSubscribe = async () => {
            setIsLoading(true);
            const token = localStorage.getItem("token");
            if (token) {
                try {
                    const response = await fetch(
                        "https://edupy-server.vercel.app/token-verify",
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({ token }),
                        }
                    );
                    const result = await response.json();
                    
                    if (result) {
                        await fetch("/api/session", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(token),
                        });
                    }
                    setUser(result);
                    if (response.status === 401) {
                        await fetch("/api/logout")
                        setUser(null);
                        localStorage.removeItem("token");
                    }
                } catch (error) {
                    console.error("Token verification failed:", error);
                    await fetch("/api/logout")
                    setUser(null);
                    localStorage.removeItem("token");
                } finally {
                    setIsLoading(false);
                }
            } else {
                await fetch("/api/logout")
                setUser(null);
                setIsLoading(false);
            }
        };

        unSubscribe();
    }, []);

    const userInfo = {
        login,
        signUp,
        logout,
        user,
        isLoading,
    };
    return (
        <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    );
};

export default Provider;
