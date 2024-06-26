'use client'

import { useTheme } from "next-themes";
import { ModeToggle } from "./ModeToggle";
import Image from 'next/image'
import logoDark from '@/assets/img/to-dark-theme-logo.png'
import logoLight from '@/assets/img/to-light-theme-logo.png'
import ActiveLink from "./ActiveLink";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function NavMenu() {

    const { theme } = useTheme()
    const [imageUrl, setImageUrl] = useState(logoDark)

    const themeTeste = theme

    useEffect(() => {
        if (theme === "light") {
            setImageUrl(logoLight);
        } else if (theme === "dark" || theme === "system") {
            setImageUrl(logoDark);
        }
    }, [themeTeste])

    const pathname = usePathname()

    const isActive = (path: string) => {
        return pathname === path
    }

    return <nav className="w-full h-[50px] flex items-center justify-center border-b-2 border-gray-950 dark:border-slate-300">
        <div className="w-[1600px] px-[18px] flex items-center justify-between">
            <div className="flex justify-center items-center">
                <div>
                    <Image
                        src={imageUrl}
                        width={180}
                        height={180}
                        alt="Picture of the author"
                    />
                </div>

                {/* <ActiveLink className="ml-[30px]" href="/rsa" active={isActive('/rsa')}>RSA Encrypt/Decrypt</ActiveLink> */}
                {/* <ActiveLink className="ml-[15px]" href="/jwt" active={isActive('/jwt')}>JWT Encode/Decode</ActiveLink> */}
            </div>
            <div className="">
                <ModeToggle />
            </div>
        </div>
    </nav>
}