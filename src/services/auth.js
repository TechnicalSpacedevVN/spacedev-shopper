import { AUTHEN_API } from "@/config/api"
import { http } from "@/utils"

export const authService = {
    loginByCode(data) {
        return http.post(`${AUTHEN_API}/login-by-code`, data)
    }
}