import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '/sb',
      name: 'sb-page',
      component: require('@/components/SbPage').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
