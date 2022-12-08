"use client"

import { Session } from "next-auth"
import { SessionProvider, signIn } from "next-auth/react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { ReactNode, useEffect, useState } from "react"
import Button from "~/components/Button"
import googleLogo from "~/images/google-logo.png"
import HorizontalLine from "./HorizontalLine"

interface AuthenticationProps {
    children: ReactNode
    session: Session | null
}

export default function Authentication({ children, session }: AuthenticationProps) {
    const pathname = usePathname()
    const [rendered, setRendered] = useState(false)

    useEffect(() => {
        setRendered(true)
    }, [])
    return (
        <SessionProvider basePath="/account/api/auth" session={session}>
            <div className="flex items-center justify-center w-full h-screen">
                <div className="bg-gray-100 rounded-xl w-fit p-10">
                    <div className="flex flex-col items-center justify-center w-96 gap-5">
                        <h1 className="capitalize text-5xl font-bold mb-5">
                            {rendered && pathname?.split("/")[2]}
                        </h1>

                        <div>{children}</div>

                        <div className="flex items-center justify-center gap-4 w-full">
                            <HorizontalLine />
                            <h2>OR</h2>
                            <HorizontalLine />
                        </div>

                        <Button onClick={() => signIn("google")} outline fullWidth textAlign="left">
                            <span className="flex items-center justify-start gap-3">
                                <Image src={googleLogo} alt="" priority className="w-5" />
                                <h3>Continue with Google</h3>
                            </span>
                        </Button>
                    </div>
                </div>
            </div>
        </SessionProvider>
    )
}
