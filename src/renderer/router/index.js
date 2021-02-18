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
      path: '/dev/timestamp',
      name: 'timestamp',
      component: require('@/views/dev/Timestamp.vue').default
    },
    {
      path: '/dev/md5',
      name: 'md5',
      component: require('@/views/dev/Md5.vue').default
    },
    {
      path: '/dev/b64',
      name: 'b64',
      component: require('@/views/dev/B64.vue').default
    },
    {
      path: '/dev/unicode-zh',
      name: 'unicodeZh',
      component: require('@/views/dev/UnicodeZh.vue').default
    },
    {
      path: '/dev/uuid',
      name: 'uuid',
      component: require('@/views/dev/Uuid.vue').default
    },
    {
      path: '/dev/byte-calc',
      name: 'byteCalc',
      component: require('@/views/dev/ByteCalc.vue').default
    },
    {
      path: '/dev/url-encode-decode',
      name: 'urlEncodeDecode',
      component: require('@/views/dev/UrlEncodeDecode.vue').default
    },
    {
      path: '/dev/byte-count',
      name: 'byteCount',
      component: require('@/views/dev/ByteCount.vue').default
    },
    {
      path: '/dev/char-count',
      name: 'charCount',
      component: require('@/views/dev/CharCount.vue').default
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
