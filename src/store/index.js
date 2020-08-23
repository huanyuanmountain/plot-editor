import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        fileName: 'plotConfig',
        plotData: {
            person: [],
            plot: {}
        }
    },
    mutations: {

    },
})