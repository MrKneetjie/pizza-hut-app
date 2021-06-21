import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import PartyPage from '../views/PartyPage.vue'
import TruckPage from '../views/TruckPage.vue'
import MapPage from '../views/MapPage.vue'
import NormalOrderPage from '../views/NormalOrderPage.vue'
import LastChancePage from '../views/LastChancePage.vue'
import TrackTracePage from '../views/TrackTracePage.vue'
import PartyBoxPage from '../views/PartyBoxPage.vue'
import GiantPage from '../views/GiantPage.vue'
import DIYPage from '../views/DIYPage.vue'
import BasketPage from '../views/BasketPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Homepage',
    component: HomePage
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.addRoute({ path: '/login', component: LoginPage })
router.addRoute({ path: '/party', component: PartyPage })
router.addRoute({ path: '/truck', component: TruckPage })
router.addRoute({ path: '/map', component: MapPage })
router.addRoute({ path: '/normalorder', component: NormalOrderPage })
router.addRoute({ path: '/lastchance', component: LastChancePage })
router.addRoute({ path: '/tracktrace', component: TrackTracePage })
router.addRoute({ path: '/partybox', component: PartyBoxPage })
router.addRoute({ path: '/giant', component: GiantPage })
router.addRoute({ path: '/diy', component: DIYPage })
router.addRoute({ path: '/basket', component: BasketPage })

export default router
