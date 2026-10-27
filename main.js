import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './mock/index.js'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'

// // 开发环境才启用 Mock
// if (process.env.NODE_ENV === 'development') {
//   require('./mock/index.js')
// }

export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
