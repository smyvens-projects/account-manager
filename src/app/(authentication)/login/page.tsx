"use client"

import { signIn } from "next-auth/react"
import Link from "next/link"
import Button from "~/components/Button"
import Input from "~/components/Input"

export default function Page() {
    return (
        <div className="flex flex-col justify-center gap-4 w-96">
            <Input placeholder="Email" type="email" />
            <Input placeholder="Password" type="password" />

            <Link href="/account/login">
                <h4 className="text-primary">Forgot password?</h4>
            </Link>

            <Button onClick={() => signIn("google")}>Login</Button>

            <h4 className="text-center">
                Don&apos; have an account?{" "}
                <Link href="/account/register" className="text-primary">
                    Register
                </Link>
            </h4>
        </div>
    )
}
