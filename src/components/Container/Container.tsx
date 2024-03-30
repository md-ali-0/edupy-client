"use client"

import { FC, ReactNode } from "react";

interface Container {
    children: ReactNode;
}

const Container: FC<Container> = ({ children }) => {
    return <div className="container mx-auto px-3">{children}</div>;
};

export default Container;
