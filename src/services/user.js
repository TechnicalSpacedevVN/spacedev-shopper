import { USER_API, http } from "@/utils"

export const userService = {
    register(data) {
        return http.post(`${USER_API}/register`, data)
    },
    getUser() {
        return http.get(`${USER_API}`)
    },
    updateProfile(data) {
        return http.patch(`${USER_API}`, data)
    },
    changePassword(data) {
        return http.post(`${USER_API}/change-password`, data)
    },


    getAddress(query = '') {
        return http.get(`${USER_API}/address${query}`)
    },
    getAddressDetail(id) {
        return http.get(`${USER_API}/address/${id}`)
    },
    addAddress(data) {
        return http.post(`${USER_API}/address`, data)
    },
    editAddress(id, data) {
        return http.patch(`${USER_API}/address/${id}`, data)
    },
    removeAddress(id) {
        return http.delete(`${USER_API}/address/${id}`)
    }
}