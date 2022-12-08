import { unstable_getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import App from "./App"

export default async function Page() {
    const session = await unstable_getServerSession()

    if (!session) {
        redirect("/account/login")
    }
    return <App session={session} />
}
