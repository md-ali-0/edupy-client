"use client"

import Link from "next/link";
import { FC, createElement } from "react";
import * as Lucide from "react-icons/lu";

interface MenuItem {
    name: string;
    icon: keyof typeof Lucide;
    path: string;
}

interface SideBarMenuItemProps {
    menu: MenuItem;
}

const SideBarMenuItem: FC<SideBarMenuItemProps> = ({ menu }) => {
    const { name, icon, path } = menu;
    return (
        <li className="py-0.5">
            <Link
                href={path}
                className="sideLink"
            >
                {createElement(Lucide[icon])}
                {name}
            </Link>
        </li>
    );
};

export default SideBarMenuItem;
