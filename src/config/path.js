const PROFILE = '/ca-nhan'

export const PATH = {
    Home: '/',
    Product: '/san-pham',
    ProductDetail: '/:slug',
    Category: '/:slug/:id',
    Profile: {
        index: PROFILE,
        Order: PROFILE + '/don-hang',
        Wishlist: PROFILE + '/san-pham-yeu-thich',
        Address: PROFILE + '/so-dia-chi',
        Payment: PROFILE + '/so-thanh-toan'
    },
    Account: '/tai-khoan'
}