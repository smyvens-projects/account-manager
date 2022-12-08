import { ChangeEvent } from "react"

interface InputProps {
    placeholder: string
    type: "email" | "password" | "text"
    onChange: (element: ChangeEvent<HTMLInputElement>) => void
}

export default function Input({ placeholder, type, onChange }: InputProps) {
    return (
        <div className="w-full">
            <input
                placeholder={placeholder}
                type={type}
                onChange={onChange}
                className="w-full outline outline-1 outline-gray-300 rounded-md py-3 px-6"
            />
        </div>
    )
}
