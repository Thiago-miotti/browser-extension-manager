import * as  Switch from '@radix-ui/react-switch';
import React, { useState } from 'react'
import { IconComponentName, iconMap } from '../utils/iconMap';

type CardProps = {
    title: string;
    description: string;
    icon: IconComponentName;
    initialIsOn: boolean;
}

export default function Card({ title, description, initialIsOn, icon }: CardProps) {
    const [isSwitchOn, setIsSwitchOn] = useState(initialIsOn);

    const IconComponent = iconMap[icon];
    return (
        <div className='max-w-96 min-h-[200px] flex flex-col justify-between p-5 rounded-[20px] bg-neutral-0 dark:bg-neutral-800 shadow-md border border-neutral-200 dark:border-neutral-600'>
            <div className='flex gap-4'>
                <div className='w-[60px] h-[50px] rounded-xl flex items-center justify-center'>
                    {IconComponent && (
                        <IconComponent />
                    )}
                </div>
                <div>
                    <p className='text-preset-2 text-neutral-900 dark:text-neutral-0'>{title}</p>
                    <span className='text-neutral-600 dark:text-neutral-300 text-preset-5'>{description}</span>
                </div>
            </div>

            <footer className='flex items-center justify-between'>
                <button className="bg-transparent px-4 py-2 border border-neutral-300 text-neutral-900 dark:text-neutral-0 text-preset-6 rounded-full cursor-pointer">Remove</button>
                <Switch.Root
                    checked={isSwitchOn}
                    onCheckedChange={setIsSwitchOn}
                    className="
                        w-[42px] h-[25px] 
                        bg-neutral-300 dark:bg-neutral-600 // Cor de fundo da trilha (desligado)
                        rounded-full // Deixa a trilha arredondada
                        relative // Necessário para posicionar o thumb
                        dark:data-[state=checked]:bg-red-400 // Cor de fundo da trilha (ligado)
                        data-[state=checked]:bg-red-700 // Cor de fundo da trilha (ligado)
                        outline-none cursor-default // Remove outline padrão e cursor
                        transition-colors duration-200 // Transição para cor de fundo
                    "
                    id="airplane-mode"
                >
                    <Switch.Thumb
                        className="
                            block w-[21px] h-[21px] 
                            bg-neutral-0 // Cor do polegar
                            rounded-full // Deixa o polegar redondo
                            transition-transform duration-200 // Transição para o movimento
                            translate-x-0.5 // Posição inicial (levemente à direita)
                            data-[state=checked]:translate-x-[19px] // Posição quando ligado (deslocado para a direita)
                            will-change-transform // Otimização para animação
                        "
                    />
                </Switch.Root>
            </footer>

        </div>
    )
}