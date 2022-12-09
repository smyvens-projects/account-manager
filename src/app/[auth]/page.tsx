"use client"

import { SessionProvider, signIn } from "next-auth/react"
import Image from "next/image"
import Button from "~/components/Button"
import GoogleLogo from "~/images/google-logo.png"
import Login from "./Login"
import Register from "./Register"

interface PageProps {
    params: {
        auth: "login" | "register"
    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Page({ params }: PageProps) {
    return (
        <div className="flex w-full min-h-screen flex-col items-center justify-center">
            <SessionProvider basePath="/account/api/auth">
                <div className="bg-slate-100 p-10 rounded-lg flex items-center justify-center gap-3 flex-col w-full sm:w-[30rem]">
                    <h1 className="text-5xl capitalize font-bold font-sans">{params.auth}</h1>
                    {params.auth === "login" ? <Login /> : <Register />}
                    <div className="flex items-center justify-center gap-3 w-full">
                        <hr className="w-full border-t-2" />
                        <h2>OR</h2>
                        <hr className="w-full border-t-2" />
                    </div>
                    <Button onClick={() => signIn("google")} fullWidth outline>
                        <span className="flex items-center justify-center gap-2">
                            <Image src={GoogleLogo} alt="google logo" priority className="w-5" />
                            <span>Sign in with Google</span>
                        </span>
                    </Button>
                </div>
            </SessionProvider>
        </div>
    )
}
