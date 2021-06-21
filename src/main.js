import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    total: 0,
    orignalTotal: 0,
    items: [
      
    ],
  },
  mutations: {
    increment(state, id) {
      console.log(state.items);
      for (let index = 0; index < state.items.length; index++) {
        const item = state.items[index];
        if(item.id === id) {
          item.amount++;
          let total = Number(state.total);
          let discount = Number(item.discount);
          total += discount;
          state.total = total.toFixed(2);

          let orignalTotal = Number(state.orignalTotal);
          let price = Number(item.price);
          orignalTotal += price;
          state.orignalTotal = orignalTotal.toFixed(2);
        }
      }
    },

    decrease(state, id) {
      for (let index = 0; index < state.items.length; index++) {
        const item = state.items[index];
        if(item.id === id) {
          item.amount--;
          let total = Number(state.total);
          let discount = Number(item.discount);
          total -= discount;
          state.total = total.toFixed(2);

          let orignalTotal = Number(state.orignalTotal);
          let price = Number(item.price);
          orignalTotal -= price;
          state.orignalTotal = orignalTotal.toFixed(2);
        }
      }
    },

    addItem(state, newItem) {
      let found = false
      for (let index = 0; index < state.items.length; index++) {
        const item = state.items[index];
        if(item.id === newItem.id) {
          item.amount++;
          let total = Number(state.total);
          let discount = Number(item.discount);
          total += discount;
          state.total = total.toFixed(2);

          let orignalTotal = Number(state.orignalTotal);
          let price = Number(item.price);
          orignalTotal += price;
          state.orignalTotal = orignalTotal.toFixed(2);
          found = true;
        }
      }

      if(!found) {
        state.items.push(newItem);
        let total = Number(state.total);
        let discount = Number(newItem.discount);
        total += discount;
        state.total = total.toFixed(2);

        let orignalTotal = Number(state.orignalTotal);
        let price = Number(newItem.price);
        orignalTotal += price;
        state.orignalTotal = orignalTotal.toFixed(2);
      }
    },

    removeItem(state, oldItemId) {
      for (let index = 0; index < state.items.length; index++) {
        const item = state.items[index];
        if(item.id === oldItemId) {
          state.items.splice(index, 1);
          let total = Number(state.total);
          let discount = Number(item.discount);
          let amount = Number(item.amount);
          total -= discount * amount;
          state.total = total.toFixed(2);

          let orignalTotal = Number(state.orignalTotal);
          let price = Number(item.price);
          orignalTotal -= price * amount;
          state.orignalTotal = orignalTotal.toFixed(2);
        }
      }
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
