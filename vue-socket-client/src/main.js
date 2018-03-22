import Vue from 'vue'
import router from './router'
import App from './App.vue'
import Vuex from 'vuex'
import VueSocketio from 'vue-socket.io'

Vue.use(Vuex);

import counterModule from '@/modules/counter'
import chatModule from '@/modules/chat'

const store = new Vuex.Store({
    state: {
        io: {

        }
    },
    mutations: {
        setSocket: (state, socket) => {
            state.io = socket;
            console.log("socket Conectado");
        }
    },
    modules: {
        counterModule,
        chatModule,
    }
});

Vue.use(VueSocketio, 'http://localhost:5000/', store);

new Vue({
    el: '#app',
    store,
    router,
    // en cada carga, definimos un socket para este cliente
    beforeCreate (){
        store.commit('setSocket', this.$socket);
    },
    render: h => h(App)
})