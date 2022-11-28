import HomePage from 'pages/home-page/page/index';
import TestPage from 'pages/test-page/page/index';
import ProductDetail from 'pages/product-detail/page/index';
import { BasicRoute } from 'components/elements/AppRouter';
import Layout from 'components/layouts/Layout';

export const routes: BasicRoute[] = [
    {
        path: '/',
        component: Layout,
        exact: false,
        routes: [
            {path: '/', component: HomePage, exact: true},
            {path: '/test', component: TestPage, exact: true},
            {path: '/product-detail', component: ProductDetail, exact: true}
        ]
    }
]