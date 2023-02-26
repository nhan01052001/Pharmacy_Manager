import Home from '../page/home/Home';
import Login from '../page/login';
import Detail from '../page/detail';

// không cần đăng nhập vẫn xem được
const publicRoutes = [
    { path: '/login', component: Login, layout: null },
    { path: '/', component: Home },
    { path: '/detail', component: Detail },
];

// sẽ phải yêu cầu đăng nhập
const privateRoutes = [];

export { publicRoutes, privateRoutes };
