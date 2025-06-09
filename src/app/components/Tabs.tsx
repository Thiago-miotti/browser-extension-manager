import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation";
import ButtonTab from "./ButtonTab";

interface TabsProps {
    currentSelectedTab: string;
}

export default function Tabs({ currentSelectedTab }: TabsProps) {
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        const newSearchParams = new URLSearchParams(searchParams.toString());
        if (currentSelectedTab && currentSelectedTab !== 'all') {
            newSearchParams.set('tab', currentSelectedTab);
        } else {
            newSearchParams.delete('tab');
        }

        if (searchParams.get('tab') !== currentSelectedTab) {
            router.replace(`?${newSearchParams.toString()}`);
        }
    }, [currentSelectedTab, router, searchParams]);

    const handleTabClick = (tabName: string) => {
        const newSearchParams = new URLSearchParams(searchParams.toString());
        if (tabName !== 'all') {
            newSearchParams.set('tab', tabName);
        } else {
            newSearchParams.delete('tab');
        }
        router.push(`?${newSearchParams.toString()}`);
    };

    return (
        <div className="flex flex-col gap-6 md:gap-0 md:flex-row items-center justify-between">
            <p className="text-preset-1 text-neutral-900 dark:text-neutral-0">Extensions List</p>
            <div className="flex gap-2.5 ">
                <ButtonTab
                    tabName="all"
                    selectedTab={currentSelectedTab}
                    onClick={handleTabClick}
                >
                    All
                </ButtonTab>
                <ButtonTab
                    tabName="active"
                    selectedTab={currentSelectedTab}
                    onClick={handleTabClick}
                >
                    Active
                </ButtonTab>
                <ButtonTab
                    tabName="inactive"
                    selectedTab={currentSelectedTab}
                    onClick={handleTabClick}
                >
                    Inactive
                </ButtonTab>
            </div>
        </div>
    )
}