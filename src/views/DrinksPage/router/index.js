export default {
  path: 'drinks',
  name: 'drinks',
  component: () => import('..'),
  meta: {
    isAuth: true
  }
}
