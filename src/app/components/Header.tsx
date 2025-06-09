
import { Moon, Sun } from "lucide-react";
import Logo from "../assets/Logo";
import { useState } from "react";

export default function Header() {
  const [isDark, setIsDark] = useState(false)

  return (
    <div className="min-h-[74px] bg-neutral-0 dark:bg-neutral-800 rounded-3xl px-4 flex items-center justify-between">
      <Logo />
      <button onClick={() => {
        setIsDark(!isDark)
        document.documentElement.classList.toggle("dark")
      }} className="bg-[#EEE] hover:bg-neutral-300 dark:bg-neutral-700 hover:dark:bg-neutral-600 w-[50px] h-[50px] flex items-center justify-center rounded-xl cursor-pointer">
        {isDark ? (
          <Sun className="text-neutral-0" />
        ) : (
          <Moon className="text-neutral-900" />
        )}
      </button>
    </div>
  )
}