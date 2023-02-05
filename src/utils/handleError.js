import { message } from "antd"

export const handleError = (err, key) => {
    console.error(err)
    if(err.response?.data?.message || err?.message) {
        message.error({
            content: err?.response?.data?.message || err?.message,
            key
        })
    }
}