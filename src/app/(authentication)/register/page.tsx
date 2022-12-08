"use client"

import Link from "next/link"
import Button from "~/components/Button"
import Input from "~/components/Input"

export default function Page() {
    return (
        <div className="flex flex-col justify-center gap-4 w-96">
            <Input placeholder="Name" type="text" />
            <Input placeholder="Email" type="email" />
            <Input placeholder="Password" type="password" />
            <Input placeholder="Confirm password" type="password" />

            <Button onClick={() => {}}>Create Account</Button>

            <h4 className="text-center">
                Already have an account?{" "}
                <Link href="/account/login" className="text-primary">
                    Login
                </Link>
            </h4>
        </div>
    )
}
