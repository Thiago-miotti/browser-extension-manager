"use client"
import { useEffect, useState } from "react";
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

export default function Home() {
  const [extensions, setExtensions] = useState<Extension[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExtensions = async () => {
      try {
        const response = await fetch('http://localhost:3000/extensions');

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Extension[] = await response.json();
        setExtensions(data);
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
      <Tabs />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {extensions.map((extension) => (
          <Card
            key={extension.id}
            title={extension.title}
            description={extension.description}
            icon={extension.icon}
            initialIsOn={extension.isOn}
          />
        ))}
      </div>
    </div>
  );
}
