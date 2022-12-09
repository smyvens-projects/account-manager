import Link from "next/link"
import { useState } from "react"
import Button from "~/components/Button"
import Input from "~/components/Input"

export default function Register() {
    const [error, setError] = useState("")
    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const handleSignUp = async () => {
        setError("")
    }

    return (
        <>
            <h3 className="empty:before:inline-block text-red-500 text-lg">{error}</h3>
            <Input
                type="text"
                placeholder="Full name"
                onChange={({ target }) => setUserInfo({ ...userInfo, email: target.value })}
            />
            <Input
                type="email"
                placeholder="email@example.com"
                onChange={({ target }) => setUserInfo({ ...userInfo, email: target.value })}
            />
            <Input
                type="password"
                placeholder="Password"
                onChange={({ target }) => setUserInfo({ ...userInfo, email: target.value })}
            />
            <Input
                type="password"
                placeholder="Confirm password"
                onChange={({ target }) => setUserInfo({ ...userInfo, email: target.value })}
            />
            <Button onClick={handleSignUp} fullWidth>
                Create Account
            </Button>

            <h3>
                Already have an account? <Link href="/account/login">Login</Link>
            </h3>
        </>
    )
}
