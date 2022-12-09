import { signIn } from "next-auth/react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import router from "next/router"
import { useState } from "react"
import Button from "~/components/Button"
import Input from "~/components/Input"

export default function Login() {
    const searchParams = useSearchParams()
    const [error, setError] = useState("")
    const [userInfo, setUserInfo] = useState({ email: "", password: "" })

    const handleLogin = async () => {
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
        <>
            <h3 className="empty:before:inline-block text-red-500 text-lg">{error}</h3>
            <Input
                type="email"
                placeholder="email@example.com"
                onChange={({ target }) => setUserInfo({ ...userInfo, email: target.value })}
            />
            <Input
                type="password"
                placeholder="*********"
                onChange={({ target }) => setUserInfo({ ...userInfo, email: target.value })}
            />
            <Button onClick={handleLogin} fullWidth>
                Sign In
            </Button>
            <h3>
                Don&apos; have an account? <Link href="/account/register">Register</Link>
            </h3>
        </>
    )
}
