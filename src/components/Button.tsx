import { ReactNode } from "react"
import { Property } from "csstype"

interface ButtonProps {
    children: ReactNode
    onClick: () => void
    outline?: true
    fullWidth?: true
    textAlign?: Property.TextAlign
}

export default function Button({
    children,
    onClick,
    outline,
    textAlign = "center",
    fullWidth,
}: ButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`${
                outline ? "outline outline-primary outline-1 bg-white" : "bg-primary text-white"
            } ${fullWidth && "w-full"} px-6 py-3 rounded-md`}
            style={{
                textAlign,
            }}
        >
            {children}
        </button>
    )
}
