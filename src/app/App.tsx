"use client"

import { Session } from "next-auth"
import { SessionProvider, signOut } from "next-auth/react"
import Button from "~/components/Button"

interface AppProps {
    session: Session
}

export default function App({ session }: AppProps) {
    return (
        <SessionProvider basePath="/account/api/auth" session={session}>
            <div className="w-full h-screen flex items-center justify-center flex-col gap-5">
                <h1 className="bold text-6xl font-serif text-secondary capitalize">
                    {session.user?.name}
                </h1>
                <Button onClick={() => signOut()}>Logout</Button>
            </div>
        </SessionProvider>
    )
}
