import Meals from '../../../views/MealsPage/router'

export default {
  path: '/menu',
  component: () => import('../'),
  redirect: '/menu/meals',
  children: [Meals]
}
