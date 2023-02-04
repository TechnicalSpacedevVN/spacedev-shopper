import { cn } from "@/utils"
import { ErrorText, FieldStyle } from "./style"
import { useId } from "react"

export const Field = ({ label, error, onChange, ...props }) => {
    const id = useId()

    const _onChange = (ev) => {
        onChange?.(ev.target.value)
    }

    return (
        <FieldStyle className={cn("form-group relative", { error })}>
            <label className="sr-only" htmlFor={id}>
                {label}
            </label>
            <input {...props} onChange={_onChange} className="form-control form-control-sm" id={id}/>
            {error && <ErrorText>{error}</ErrorText>}
        </FieldStyle>
    )
}
