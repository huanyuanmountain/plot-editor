import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        fileName: 'plotConfig',
        currentSelectingPlotId: 'empty-1',
        plotData: {
            author: '不是剑客',
            version: '0.0.1',
            person: [],
            plot: {
                'empty-1': {
                    id: 'empty-1',
                    name: '',
                    type: '',
                    event: [],
                    dialog: [],
                }
            }
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
        },
        addPlot(state) {
            const id = 'rd_' + Math.floor(Math.random() * 10000)
            const item = {
                id,
                name: '',
                type: '',
                event: [],
                dialog: [],
            }
            state.plotData.plot[id] = item
            // console.log(state.plotData.plot)
        },
        selectPlot(state, id) {
            state.currentSelectingPlotId = id
        },
        removePlot(state, id) {
            delete state.plotData.plot[id]
        },
        addDialog(state) {

            const id = state.currentSelectingPlotId
            const dialogItem = {
                personId: '0',
                dialog: ''
            }
            if (id) {
                state.plotData.plot[id].dialog.push(dialogItem)
            } else {
                // todo: 弹窗，请先选择一段剧情
            }
        }
    },
})