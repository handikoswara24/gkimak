'use client'

import React, { useEffect, useState } from 'react'

const ThemeButton = () => {
    const [currentClass, setCurrentClass] = useState<"ri-moon-line" | "ri-sun-line">("ri-moon-line");
    const darkTheme = 'dark-theme'



    // We obtain the current theme that the interface has by validating the dark-theme class
    const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'

    useEffect(() => {
        // Previously selected topic (if user selected)
        const selectedTheme = localStorage.getItem('selected-theme')
        const selectedIcon = localStorage.getItem('selected-icon')
        document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
        if (selectedIcon && selectedIcon !== "ri-moon-line") {
            setCurrentClass("ri-sun-line");
        }
    }, []);

    const onClickIcon = () => {
        // Add or remove the dark / icon theme
        document.body.classList.toggle(darkTheme)
        if (currentClass === "ri-moon-line") {
            setCurrentClass("ri-sun-line");
            localStorage.setItem('selected-icon', "ri-sun-line");
        }
        else {
            setCurrentClass("ri-moon-line")
            localStorage.setItem('selected-icon', "ri-moon-line");
        }
        // We save the theme and the current icon that the user chose
        localStorage.setItem('selected-theme', getCurrentTheme())
    }

    return (
        <div className="nav__dark">
            <span className="change-theme-name">Dark mode</span>
            <i className={`change-theme ${currentClass}`} id="theme-button" onClick={() => onClickIcon()}></i>
        </div>
    )
}

export default ThemeButton