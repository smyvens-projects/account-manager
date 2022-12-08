"use client"

import Link from "next/link"
import { useState } from "react"
import Button from "~/components/Button"
import Input from "~/components/Input"

export default function Page() {
    const [error, setError] = useState("")
    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const handleSignUp = () => {
        setError("")
    }

    return (
        <form className="flex flex-col justify-center gap-4 w-96">
            <h4 className="text-red-500 empty:before:inline-block text-center">{error}</h4>

            <Input
                placeholder="Name"
                type="text"
                onChange={({ target }) => setUserInfo({ ...userInfo, name: target.value })}
            />
            <Input
                placeholder="Email"
                type="email"
                onChange={({ target }) => setUserInfo({ ...userInfo, email: target.value })}
            />
            <Input
                placeholder="Password"
                type="password"
                onChange={({ target }) => setUserInfo({ ...userInfo, password: target.value })}
            />
            <Input
                placeholder="Confirm password"
                type="password"
                onChange={({ target }) =>
                    setUserInfo({ ...userInfo, confirmPassword: target.value })
                }
            />

            <Button onClick={handleSignUp}>Create Account</Button>

            <h4 className="text-center">
                Already have an account?{" "}
                <Link href="/account/login" className="text-primary">
                    Login
                </Link>
            </h4>
        </form>
    )
}
