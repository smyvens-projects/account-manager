"use client"

import { signIn } from "next-auth/react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"
import Button from "~/components/Button"
import Input from "~/components/Input"

export default function Page() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [userInfo, setUserInfo] = useState({ email: "", password: "" })
    const [error, setError] = useState("")

    const handleSignIn = async () => {
        setError("")

        const response = await signIn("credentials", {
            ...userInfo,
            redirect: false,
        })

        if (!response?.ok) {
            setError(response?.error || "")
        } else {
            router.push(searchParams.get("callbackUrl") || "/account")
        }
    }

    return (
        <div className="flex flex-col justify-center gap-4 w-96">
            <h4 className="text-red-500 empty:before:inline-block text-center">{error}</h4>

            <Input
                placeholder="Email"
                type="email"
                onChange={({ target }) => {
                    setUserInfo({ ...userInfo, email: target.value })
                }}
            />
            <Input
                placeholder="Password"
                type="password"
                onChange={({ target }) => {
                    setUserInfo({ ...userInfo, password: target.value })
                }}
            />

            <Link href="/account/login">
                <h4 className="text-primary">Forgot password?</h4>
            </Link>

            <Button onClick={handleSignIn}>Login</Button>

            <h4 className="text-center">
                Don&apos; have an account?{" "}
                <Link href="/account/register" className="text-primary">
                    Register
                </Link>
            </h4>
        </div>
    )
}
