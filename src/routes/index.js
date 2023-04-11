import Home from '../pages/Home/index';
import SearchResult from '../pages/SearchResult/index';
import Commit from '../pages/Commit/index';

export const publicPages = [
   { path: '/', component: Home },
   { path: '/user/:user_id', component: SearchResult },
   { path: '/user/repo/commits/:payload', component: Commit},
];

export const privatePages = [];
