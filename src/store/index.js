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
        addPersonToList(state) {
            const id = state.plotData.person.length + 1
            const personItem = {
                id: id,
                name: '',
                avatar: ''
            }
            state.plotData.person.push(personItem)
        },
        changePersonList(state, parm) {
            state.playerList[parm.index].role = parm.role
        },
        removePerson(state, index) {
            state.plotData.person.splice(index, 1)
            state.plotData.person.forEach((el, i) => el.id = String(i + 1))
        },
        changePersonName(state, parm) {
            const { target, index } = parm
            state.plotData.person[index].name = target
        },
        changeAvatar(state, parm) {
            const { target, index } = parm
            state.plotData.person[index].avatar = target
        }
    },
})