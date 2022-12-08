"use client"

import { Session } from "next-auth"
import { SessionProvider, signOut } from "next-auth/react"

interface AppProps {
    session: Session
}

export default function App({ session }: AppProps) {
    return (
        <SessionProvider basePath="/account/api/auth" session={session}>
            <div className="w-full h-screen flex items-center justify-center flex-col">
                <h1 className="bold text-6xl font-serif text-primary">{session.user?.name}</h1>
                <button type="button" onClick={() => signOut()}>
                    Logout
                </button>
            </div>
        </SessionProvider>
    )
}
