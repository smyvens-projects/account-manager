interface InputProps {
    placeholder: string
    type: "email" | "password" | "text"
}

export default function Input({ placeholder, type }: InputProps) {
    return (
        <div className="w-full">
            <input
                placeholder={placeholder}
                type={type}
                className="w-full outline outline-1 outline-gray-300 rounded-md py-3 px-6"
            />
        </div>
    )
}
