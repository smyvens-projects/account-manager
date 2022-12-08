import { ReactNode } from "react"

interface ButtonProps {
    children: ReactNode
    onClick: () => void
    outline?: true
    fullWidth?: true
}

export default function Button({ children, onClick, outline, fullWidth }: ButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`${
                outline ? "outline outline-primary outline-1 bg-white" : "bg-primary text-white"
            } ${fullWidth && "w-full"} px-6 py-3 rounded-md`}
        >
            {children}
        </button>
    )
}
