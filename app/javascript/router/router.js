import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardIndex from '../MainPage/dashboardIndex'
import Store from '../store/store.js'
import Heatmap from '../heatmap/HeatmapPage.vue'

Vue.use(VueRouter)

  const routes = [
    { path: '/', name: 'dashboardIndex', component: dashboardIndex },
    { path: '/api/v1/articles/:id', name: 'HeatmapPage', component: HeatmapPage }
    ];

  export default new VueRouter({ routes });
