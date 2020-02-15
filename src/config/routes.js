import loadable from "@loadable/component";

export default [
  {
    path: "/",
    exact: true,
    title: "Home",
    navbar: true,
    component: () => loadable(() => import("../pages/Dashboard/Dashboard"))
  },
  {
    path: "/login",
    title: "Login",
    navbar: true,
    component: () => loadable(() => import("../pages/Login/Login"))
  },
  {
    path: "/register",
    title: "Register",
    navbar: true,
    component: () => loadable(() => import("../pages/Register/Register"))
  },
  {
    path: "/products",
    title: "Products",
    navbar: true,
    component: () => loadable(() => import("../pages/Products/Products"))
  },
  {
    path: "/product/:slug",
    title: "Product Detail",
    navbar: true,
    component: () =>
      loadable(() => import("../pages/ProductDetail/ProductDetail"))
  },
  {
    path: "/add/address",
    title: "Add Address",
    navbar: true,
    component: () => loadable(() => import("../pages/AddAddress/AddAddress"))
  },
  {
    path: "/address",
    title: "Addresses",
    navbar: true,
    component: () => loadable(() => import("../pages/MyAddress/MyAddress"))
  }
];
