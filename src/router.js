import Vue from 'vue'
import Router from 'vue-router'
import EventList from './views/EventList.vue'
import EventCreate from './views/EventCreate.vue'
import EventShow from './views/EventShow.vue'
import NotFoundComponent from './components/NotFoundComponent.vue'
// import User from './views/User.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventList
    },
    {
      path: '/event/:id',
      name: 'event-show',
      component: EventShow,
      props: true
      // alias: '/about'
    },
    {
      path: '/event/create',
      name: 'event-create',
      component: EventCreate
    },
    // {
    //   path: '/user/:username',
    //   name: 'user',
    //   component: User,
    //   props: true
    // }
    // {
    //   path: '/about',
    //   redirect: { name: 'about' }
    // }

    // 404 fallback
    {
      path: '*',
      component: NotFoundComponent
    }
  ]
})
