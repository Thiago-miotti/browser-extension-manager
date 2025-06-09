import React from 'react'

type tabNames = 'all' | 'active' | 'inactive'

type ButtonTabProps = {
    tabName: tabNames;
    selectedTab: string;
    onClick: (tabName: string) => void;
    children: React.ReactNode;
}

export default function ButtonTab({ tabName, selectedTab, onClick, children }: ButtonTabProps) {
    const isSelected = selectedTab === tabName;

    const buttonClasses = `
        py-2.5
        px-5
        rounded-3xl
        cursor-pointer
        text-preset-3
        transition-colors duration-200 ease-in-out 
        ${isSelected
            ? 'bg-red-700 text-neutral-0'
            : 'bg-neutral-0 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-0 border border-neutral-200 dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-600'
        }
    `;

    return (
        <button
            onClick={() => onClick(tabName)}
            className={buttonClasses}
        >
            {children}
        </button>
    )
}