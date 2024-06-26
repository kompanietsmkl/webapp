"use client";

import EmojiPicker, { Theme } from "emoji-picker-react";
import { useTheme } from "next-themes";

import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from "./ui/popover";

interface IconPickerProps {
    onChange: (icon: string) => void;
    children: React.ReactNode;
    asChild: boolean;
};

export const IconPicker = ({
    onChange,
    children,
    asChild
}: IconPickerProps) => {
    const { resolvedTheme } = useTheme();
    const currentTheme = (resolvedTheme ||"light") as keyof typeof themeMap
    
    const themeMap = {
        light: Theme.LIGHT,
        dark: Theme.DARK
    };

    const theme = themeMap[currentTheme];

    return (
        <Popover>
            <PopoverTrigger asChild>
                {children}
            </PopoverTrigger>
            <PopoverContent
                className="w-full p-0 border-none shadow-none"
            >
                <EmojiPicker
                    height={350}
                    theme={theme}
                    onEmojiClick={(data) => onChange(data.emoji)}
                />
            </PopoverContent>
        </Popover>
    )
}

