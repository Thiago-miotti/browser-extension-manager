"use client";
import { useSearchParams } from "next/navigation";
import { Suspense, useMemo } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import { Extension } from "./types/Extension";


const mockData = {
  "extensions": [
    {
      "id": 1,
      "title": "DevLens",
      "description": "Quickly inspect page layouts and visualize element boundaries.",
      "isOn": true,
      "icon": "DevLens"
    },
    {
      "id": 2,
      "title": "StyleSpy",
      "description": "Instantly analyze and copy CSS from any webpage element.",
      "isOn": false,
      "icon": "StyleSpy"
    },
    {
      "id": 3,
      "title": "SpeedBoost",
      "description": "Optimizes browser resource usage to accelerate page loading.",
      "isOn": false,
      "icon": "SpeedBoost"
    },
    {
      "id": 4,
      "title": "JSONWizard",
      "description": "Formats, validates, and prettifies JSON responses in-browser.",
      "isOn": true,
      "icon": "JsonWizard"
    },
    {
      "id": 5,
      "title": "TabMaster Pro",
      "description": "Organizes browser tabs into groups and sessions.",
      "isOn": true,
      "icon": "TabMasterPro"
    },
    {
      "id": 6,
      "title": "ViewportBuddy",
      "description": "Simulates various screen resolutions directly within the browser.",
      "isOn": false,
      "icon": "ViewPortBuddy"
    },
    {
      "id": 7,
      "title": "Markup Notes",
      "description": "Enables annotation and notes directly onto webpages for collaborative debugging.",
      "isOn": true,
      "icon": "MarkupNotes"
    },
    {
      "id": 8,
      "title": "GridGuides",
      "description": "Overlay customizable grids and alignment guides on any webpage.",
      "isOn": false,
      "icon": "GridGuides"
    },
    {
      "id": 9,
      "title": "PalettePicker",
      "description": "Instantly extracts color palettes from any webpage.",
      "isOn": true,
      "icon": "PalletePicker"
    },
    {
      "id": 10,
      "title": "LinkChecker",
      "description": "Scans and highlights broken links on any page.",
      "isOn": false,
      "icon": "LinkChecker"
    },
    {
      "id": 11,
      "title": "DOM Snapshot",
      "description": "Capture and export DOM structures quickly.",
      "isOn": false,
      "icon": "DomSnapshot"
    },
    {
      "id": 12,
      "title": "ConsolePlus",
      "description": "Enhanced developer console with advanced filtering and logging.",
      "isOn": false,
      "icon": "ConsolePlus"
    }
  ]
};



function ExtensionGrid({ allExtensions }: { allExtensions: Extension[] }) {
  const searchParams = useSearchParams();
  const selectedTab = searchParams.get('tab') || 'all';

  const filteredExtensions = useMemo(() => {
    if (!allExtensions) return [];
    if (selectedTab === 'active') {
      return allExtensions.filter(ext => ext.isOn);
    } else if (selectedTab === 'inactive') {
      return allExtensions.filter(ext => !ext.isOn);
    } else {
      return allExtensions;
    }
  }, [allExtensions, selectedTab]);

  return (
    <>
      <Tabs currentSelectedTab={selectedTab} />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredExtensions.map((extension) => (
          <Card
            key={extension.id}
            title={extension.title}
            description={extension.description}
            icon={extension.icon}
            initialIsOn={extension.isOn}
          />
        ))}
      </div>
    </>
  );
}


export default function Home() {
  const allExtensions = mockData.extensions;

  return (
    <div className="space-y-10 md:space-y-16">
      <Header />
      <Suspense fallback={<div>Carregando...</div>}>
        <ExtensionGrid allExtensions={allExtensions} />
      </Suspense>
    </div>
  );
}