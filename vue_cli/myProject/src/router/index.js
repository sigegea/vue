import Vue from 'vue'
import Router from 'vue-router'
import header from '@/components/common/Header'
import footer from '@/components/common/Footer'
import movie from '@/components/movie/Movie'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: movie
    }
  ]
})
