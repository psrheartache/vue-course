import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import CountTo from 'components/count-to'

import 'common/stylus/base.styl'

if (process.env.NODE_ENV !== 'production') require('./mock')

Vue.config.productionTip = false
Vue.prototype.loadPage = function (url,data)  {
    this.$router.push({name: url, params: data})
}

// let list = [{name: 'lili'},{name:'lulu'}]
// const getLiEleArr = (h) => {
//   return list.map(item => h('li',{
//       on: {
//         'click':  (event) =>{
//             console.log(event)
//             event.stopPropagation()
//           }
//         },
//         key: `list_item_${index}`,
//       }, item.name))
// }

new Vue({
  router,
  store,
  render: h => h(App)

  // render: h => {
  //   return h('div', {
  //     attrs: {
  //       id: 'box',
  //     },
  //     style: {
  //       color: 'pink'
  //     }
  //   }, 'CHEN')
  // }

  // render: h=> {
  //   return h(CountTo,{
  //       'class': 'count-to',
  //       attrs:{},
  //       style:{},
  //       // 'class': ['count-to', true ? 'aa' : 'bb'],
  //       // 'class':  {'count-to':true}
  //       props: {
  //         endVal: 100,
  //       },
  //       domProps:{
  //         // innerHTML:  '123'
  //       },
  //       on: {
  //         'on-animation-end': (val) => {
  //             console.log('animation end')
  //         }
  //       },
  //       nativeOn: {
  //         'click': () => {
  //           console.log('click!')
  //         }
  //       },
  //       directives: [],
  //       scopedSlots:{},
  //       slot: '',
  //       key: '',
  //       ref: '',
  //   })
  // }

  // render: h => ('div',[h('span','111'),h('span','222')])
  // render: h => ('div',[
  //     h('ul', {
  //       on: {
  //         'click':  (event) =>{
  //             console.log(event)
  //         }
  //       }
  //     }, getLiEleArr)
  // ])
}).$mount('#app')
