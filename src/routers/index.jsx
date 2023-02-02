import { MainLayout } from "@/layouts/MainLayout";
import { HomePage } from "@/pages";
import { Page404 } from "@/pages/404";

export const routes = [
    {
        element: <MainLayout />,
        children: [
            {
                element: <HomePage />,
                path: '/'
            },
            {
                element: <Page404 />,
                path: '*'
            }
        ]
    },

]