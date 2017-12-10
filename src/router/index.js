import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'


import HomeView from '../components/home/homeView.vue'
import smgyView from '../components/home/smgyView.vue'
import gmcgView from '../components/home/gmcgView.vue'
import yptjView from '../components/home/yptjView.vue'
import rankingView from '../components/Ranking/rankingView.vue'
//import statisticsView from '../components/statistics/statisticsView'
import MeView from '../components/me/meView.vue'
import grdaView from '../components/me/grdaView.vue'
import scydView from '../components/me/scydView.vue'
import gzView from '../components/me/gzView.vue'
import jysqView from '../components/me/jysqView.vue'
import detailsView from '../components/details/detailsView.vue'

Vue.use(Router)

export default new Router({
  routes: [
   {
      path: '/',
      component: HomeView
    },
    {
      path: '/home',
      component: HomeView
    },
//  {
//    path: '/statistics',
//    component: statisticsView
//  },
    {
      path: '/me',
      component: MeView
    },
    {
      path: '/da',
      component: grdaView
    },
    {
      path: '/scyd',
      component: scydView
    },
    {
      path: '/gz',
      component: gzView
    },
    {
      path: '/jysq',
      component: jysqView
    },
    {
      path: '/smgy',
      component: smgyView
    },
    {
      path: '/gmcg',
      component: gmcgView
    },
    {
      path: '/ranking',
      component: rankingView
    },
    {
      path: '/yptj',
      component: yptjView
    },
    {
      path: '/details',
      component: detailsView
    }
    
  
  ]
})
