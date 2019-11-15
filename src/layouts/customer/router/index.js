import Meals from '../../../views/MealsPage/router'
import Drinks from '../../../views/DrinksPage/router'
import Desserts from '../../../views/DessertsPage/router'

export default {
  path: '/menu',
  component: () => import('../'),
  redirect: '/menu/meals',
  children: [Meals, Drinks, Desserts]
}
