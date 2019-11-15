export default {
  path: 'desserts',
  name: 'desserts',
  component: () => import('..'),
  meta: {
    isAuth: true
  }
}
