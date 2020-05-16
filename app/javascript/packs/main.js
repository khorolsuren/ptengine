// <div id='hello'>
//  {{message}}
//  <app></app>
// </div>

import Vue from 'vue'
import App from '../app.vue'
import Router from '../router/router.js'
import Store from '../store/store.js'

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#hello',
    router: Router,
    store: Store,
    render: h => h(App)
  })
})
