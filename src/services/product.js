import { PRODUCT_API } from '@/config/api'
import { http } from '@/utils'


export const productService = {
    getProduct(query = '', signal) {
        return http.get(`${PRODUCT_API}${query}`, { signal })
    }
}