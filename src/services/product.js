import { PRODUCT_API } from '@/config/api'
import { http } from '@/utils'


export const productService = {
    getProduct(query = '', signal) {
        return http.get(`${PRODUCT_API}${query}`, { signal })
    },
    getCategories() {
        return http.get(`${PRODUCT_API}/categories`)
    },

    getWishlist(query = '') {
        return http.get(`${PRODUCT_API}/wishlist${query}`)
    },
    addWishlist(productId) {
        return http.post(`${PRODUCT_API}/wishlist/${productId}`)
    },
    removeWishlist(productId) {
        return http.delete(`${PRODUCT_API}/wishlist/${productId}`)
    }
}