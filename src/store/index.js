import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        fileName: 'plotConfig',
        plotData: {
            author: '不是剑客',
            person: [],
            plot: {}
        }
    },
    mutations: {
        changeFileName(state, fileName) {
            state.fileName = fileName
        },
        changeAuthor(state, author) {
            state.plotData.author = author
        }
    },
})