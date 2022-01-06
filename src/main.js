import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import BootstrapVue from 'bootstrap-vue'
import vueHeadful from 'vue-headful';
import VueParticles from 'vue-particles'
import VueApexCharts from 'vue-apexcharts'

Vue.component('vue-headful', vueHeadful);
Vue.use(BootstrapVue)
Vue.use(VueParticles)
Vue.use(VueApexCharts)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')

