import BlogPage from "../pages/BlogPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";

const publicRouter = [
  { path: '/', component: HomePage },
  { path: '/contact', component: ContactPage },
  { path: '/blog', component: BlogPage },
  { path: '/shop', component: ShopPage },
]
const privateRouter = {

}

export { publicRouter, privateRouter };