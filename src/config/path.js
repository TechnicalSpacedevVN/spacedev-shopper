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
        NewAddress: PROFILE + '/so-dia-chi/new',
        EditAddress: PROFILE + '/so-dia-chi/edit/:id',
        Payment: PROFILE + '/so-thanh-toan'
    },
    Account: '/tai-khoan'
}