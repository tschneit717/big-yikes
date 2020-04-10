import Vue from "vue"

import vueCustomElement from "vue-custom-element"
import BigYikes from './BigYikes.vue'

Vue.use(vueCustomElement)
Vue.customElement("bigyikes-component", BigYikes)