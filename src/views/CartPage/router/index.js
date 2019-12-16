export default {
  path: 'shoppingcart',
  name: 'shoppingcart',
  component: () => import('..'),
  meta: {
    isAuth: true
  }
}
