import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation";
import ButtonTab from "./ButtonTab";

export default function Tabs() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [selectedTab, setSelectedTab] = useState(() => {
        return searchParams.get('tab') || 'all';
    });

    useEffect(() => {
        const newSearchParams = new URLSearchParams(searchParams.toString());

        if (selectedTab && selectedTab !== 'all') {
            newSearchParams.set('tab', selectedTab);
        } else {
            newSearchParams.delete('tab');
        }

        router.replace(`?${newSearchParams.toString()}`);
    }, [selectedTab, router, searchParams]);

    const handleTabClick = (tabName: string) => {
        setSelectedTab(tabName);
    };

    return (
        <div className="flex flex-col gap-6 md:gap-0 md:flex-row items-center justify-between">
            <p className="text-preset-1 text-neutral-900 dark:text-neutral-0">Extensions List</p>
            <div className="flex gap-2.5 ">
                <ButtonTab
                    tabName="all"
                    selectedTab={selectedTab}
                    onClick={handleTabClick}
                >
                    All
                </ButtonTab>
                <ButtonTab
                    tabName="active"
                    selectedTab={selectedTab}
                    onClick={handleTabClick}
                >
                    Active
                </ButtonTab>
                <ButtonTab
                    tabName="inactive"
                    selectedTab={selectedTab}
                    onClick={handleTabClick}
                >
                    Inactive
                </ButtonTab>
            </div>
        </div>
    )
}