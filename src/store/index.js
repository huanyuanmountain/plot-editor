import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        fileName: 'plotConfig',
        plotData: {
            author: '不是剑客',
            version: '0.0.1',
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
        },
        changeVersion(state, version) {
            state.plotData.version = version
        },
        addPerson(state) {
            const personItem = {
                id: '',
                name: '',
                avatar: ''
            }
            state.plotData.person.push(personItem)
        }
    },
})