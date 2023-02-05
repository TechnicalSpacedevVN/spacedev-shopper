import { PATH } from "@/config";
import { ProfileLayout } from "@/layouts/ProfileLayout";
import { Profile } from "@/pages/ca-nhan";
import { Order } from "@/pages/ca-nhan/don-hang";
import { WishlistPage } from "@/pages/ca-nhan/san-pham-yeu-thich";

export const profile = [
    {
        element: <ProfileLayout />,
        children: [
            {
                element: <Profile />,
                index: true
            },
            {
                element: <WishlistPage />,
                path: PATH.Profile.Wishlist
            },
            {
                element: <Order />,
                path: PATH.Profile.Order
            }
        ]
    }
]