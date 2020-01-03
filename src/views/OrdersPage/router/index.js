export default {
  path: 'orders',
  name: 'orders',
  component: () => import('..'),
  meta: {
    isAuth: true
  }
}
