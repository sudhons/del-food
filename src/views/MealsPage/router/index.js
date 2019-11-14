export default {
  path: 'meals',
  name: 'meals',
  component: () => import('..'),
  meta: {
    isAuth: true
  }
}
