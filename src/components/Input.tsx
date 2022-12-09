import { ChangeEvent } from "react"
import { IconType } from "react-icons/lib"

interface InputProps {
    placeholder: string
    type: "email" | "password" | "text"
    onChange: (element: ChangeEvent<HTMLInputElement>) => void
    icon?: {
        name: IconType
        onClick?: () => void
    }
}

export default function Input({ placeholder, type, onChange, icon }: InputProps) {
    return (
        <div className="relative w-full">
            <input
                placeholder={placeholder}
                type={type}
                onChange={onChange}
                className="w-full outline outline-1 outline-gray-300 border-none rounded-md py-3 pl-6 pr-12 text-gray-500 focus:bg-slate-200"
            />
            {icon && (
                <span className="flex items-center justify-center h-full absolute top-0 right-0 mr-5">
                    <icon.name
                        size={20}
                        className={`text-slate-500 ${icon.onClick && "cursor-pointer"}`}
                        onClick={icon.onClick}
                    />
                </span>
            )}
        </div>
    )
}
