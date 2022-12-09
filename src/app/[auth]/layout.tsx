import { unstable_getServerSession } from "next-auth/next"
import { notFound, redirect } from "next/navigation"
import { ReactNode, ReactElement } from "react"

interface LayoutProps {
    params: {
        auth: string
    }
    children: ReactElement<ReactNode>
}

export default async function Layout({ params, children }: LayoutProps) {
    // since this a dynamic segment, only show pages for login and register
    if (!["login", "register"].includes(params.auth)) {
        return notFound()
    }

    // check if the user is logged in, if they are then send them back to the main page
    const session = await unstable_getServerSession()
    if (session) {
        redirect("/account")
    }

    return children
}

// export async function generateStaticParams() {
//     return [{ auth: "login" }, { auth: "register" }]
// }
