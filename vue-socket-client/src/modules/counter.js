const counterModule = {
    state: {
        count: 0,
    },

    // las mutaciones, seran ejecutadas por Node.js, deben comenzar por SOCKET_
    mutations: {
        SOCKET_COUNTER_INCREMENT (state, counter){
            state.count = counter[0];
        },
        SOCKET_COUNTER_DECREMENT (state, counter){
            state.count = counter[0];
        }
    },

    // actions, accionesdesde nuestra app al servidor de Node.js con socket.io, Deben comenzar por socket_
    actions: {
        socket_increment: ({state, rootState}) => {
            rootState.io.emit('increment', state.count) //emitimos al server el evento increment
        },
        socket_decrement: ({state, rootState}) => {
            rootState.io.emit('decrement', state.count) //emitimos al server el evento increment
        }
    },
    getters: {
        count (state) {
            return state.count;
        }
    }
}

export default counterModule;
