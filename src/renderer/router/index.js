import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('@/views/Home.vue').default
    },
    {
      path: '/dev',
      name: 'dev',
      component: require('@/views/Dev.vue').default
    },
    {
      path: '/dev/json-format',
      name: 'jsonFormat',
      component: require('@/views/dev/JsonFormat.vue').default
    },
    {
      path: '/dev/uuid',
      name: 'uuid',
      component: require('@/views/dev/Uuid.vue').default
    },
    {
      path: '/dev/byte-calc',
      name: 'uuid',
      component: require('@/views/dev/ByteCalc.vue').default
    },
    {
      path: '/dev/char-calc',
      name: 'uuid',
      component: require('@/views/dev/CharCalc.vue').default
    },
    {
      path: '/sys-info/basic',
      name: 'sysInfoBasic',
      component: require('@/views/sysInfo/Basic.vue').default
    },
    {
      path: '/sys-info/monitor',
      name: 'sysInfoMonitor',
      component: require('@/views/sysInfo/Monitor.vue').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
