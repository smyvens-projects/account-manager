import { unstable_getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { ReactNode } from "react"
import Authentication from "./Authentication"

interface LayoutProps {
    children: ReactNode
}

export default async function Layout({ children }: LayoutProps) {
    const session = await unstable_getServerSession()

    if (session) {
        redirect("/account")
    }
    return <Authentication session={session}>{children}</Authentication>
}
