import Vue from 'vue'
import Router from 'vue-router'
import ViewRegexp from '@/views/ViewRegexp'

Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '/',
      name: 'Home',
      redirect: '/regexp'
    },
    {
      path: '/regexp',
      name: 'ViewRegexp',
      component: ViewRegexp
    }
  ]
})
