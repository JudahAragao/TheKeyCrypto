import { cn } from "@/lib/utils"
import Link from "next/link"

type ActiveLinkProps = {
    href: string
    active?: boolean
    children: any,
    className: string
}

export default function ActiveLink({ className, children, href, active }: ActiveLinkProps) {
    return <Link
        href={href}
        className={cn([
            'flex items-center px-3 py-2 rounded-md',
            active && 'font-semibold underline',
            className,
        ])}
    >
        {children}
    </Link>
}