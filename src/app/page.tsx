"use client";
import { Suspense, useEffect, useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Card from "./components/Card";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import { IconComponentName } from "./utils/iconMap";

interface Extension {
  id: number;
  title: string;
  description: string;
  isOn: boolean;
  icon: IconComponentName;
}

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
  const [allExtensions, setAllExtensions] = useState<Extension[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExtensions = async () => {
      try {
        const response = await fetch("/extensions.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setAllExtensions(data.extensions);
      } catch (err) {
        console.error("Failed to fetch extensions:", err);
        setError("Falha ao carregar extensões. Verifique sua conexão ou o servidor.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchExtensions();
  }, []);

  return (
    <div className="space-y-10 md:space-y-16">
      <Header />
      <Suspense fallback={<div>Carregando...</div>}>
        <ExtensionGrid allExtensions={allExtensions} />
      </Suspense>
    </div>
  );
}