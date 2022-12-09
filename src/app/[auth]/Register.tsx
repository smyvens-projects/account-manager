import Link from "next/link"
import { useState } from "react"
import Button from "~/components/Button"
import Input from "~/components/Input"
import { RiContactsLine } from "react-icons/ri"
import { MdOutlineAlternateEmail } from "react-icons/md"
import { FiEye, FiEyeOff } from "react-icons/fi"

export default function Register() {
    const [error, setError] = useState("")
    const [showPassword, setShowPassword] = useState<false | "password" | "confirmPassword">(false)
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
                icon={{ name: RiContactsLine }}
            />
            <Input
                type="email"
                placeholder="email@example.com"
                onChange={({ target }) => setUserInfo({ ...userInfo, email: target.value })}
                icon={{ name: MdOutlineAlternateEmail }}
            />
            <Input
                type={showPassword === "password" ? "text" : "password"}
                placeholder="Password"
                onChange={({ target }) => setUserInfo({ ...userInfo, email: target.value })}
                icon={{
                    name: showPassword === "password" ? FiEyeOff : FiEye,
                    onClick: () => {
                        setShowPassword(showPassword !== "password" ? "password" : false)
                    },
                }}
            />
            <Input
                type={showPassword === "confirmPassword" ? "text" : "password"}
                placeholder="Confirm password"
                onChange={({ target }) => setUserInfo({ ...userInfo, email: target.value })}
                icon={{
                    name: showPassword === "confirmPassword" ? FiEyeOff : FiEye,
                    onClick: () => {
                        setShowPassword(
                            showPassword !== "confirmPassword" ? "confirmPassword" : false
                        )
                    },
                }}
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
