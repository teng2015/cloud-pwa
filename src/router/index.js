import Vue from 'vue'
import Router from 'vue-router'
import Folder from '../components/folder/Folder'
import Favorite from '../components/favorite/Favorite'
import Group from '../components/group/Group'
import Hot from '../components/hot/Hot'
import Square from '../components/square/Square'
import User from '@/components/user/User'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/folder',
      name: 'Folder',
      component: Folder
    },
    {
      path: '/favorite',
      name: 'Favorite',
      component: Favorite
    },
    {
      path: '/group',
      name: 'Group',
      component: Group
    },
    {
      path: '/hot',
      name: 'Hot',
      component: Hot
    },
    {
      path: '/square',
      name: 'Square',
      component: Square
    },
    {
      path: '/user',
      name: 'User',
      component: User
    }
  ]
})
