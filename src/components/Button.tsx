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
                outline
                    ? "outline outline-slate-300 outline-1 bg-white hover:bg-slate-200"
                    : "bg-primary text-white hover:bg-opacity-75"
            } ${
                fullWidth && "w-full"
            } px-6 py-3 rounded-md border-none [transition:_background-color_.3s_ease-in-out] active:translate-y-1`}
        >
            {children}
        </button>
    )
}
