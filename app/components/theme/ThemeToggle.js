'use client';
import { useTheme } from "@/app/context/theme";
import { useEffect, useState } from 'react';

export default function ThemeToogle() {
    const { theme, toggleTheme } = useTheme();
    // state
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <>
            {mounted && (
                <button className="nav-link" onClick={toggleTheme}>
                    {theme === 'light' ? '🌙': '🌞'}
                </button>)}
        </>
    );
}