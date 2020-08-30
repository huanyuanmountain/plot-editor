import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        fileName: 'plotConfig',
        currentSelectingPlotId: '',
        plotData: {
            author: '不是剑客',
            version: '0.0.1',
            person: [
                {
                    id: '1',
                    name: '旁白兔',
                    avatar: 'avatar/aside'
                }
            ],
            plot: {

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
            const id = String(state.plotData.person.length + 1)
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
            state.currentSelectingPlotId = ''
        },

        addDialog(state) {
            const id = state.currentSelectingPlotId
            const dialogItem = {
                personId: '1',
                dialog: ''
            }

            state.plotData.plot[id].dialog.push(dialogItem)
        },

        removeDialog(state, index) {
            const id = state.currentSelectingPlotId
            const dialogArr = state.plotData.plot[id].dialog
            dialogArr.splice(index, 1)
        },

        changeDialogPerson(state, parm) {
            const { index, personId } = parm
            const plotId = state.currentSelectingPlotId
            const dialogArr = state.plotData.plot[plotId].dialog
            dialogArr[index].personId = personId
        },

        changeDialogContent(state, parm) {
            const { index, content } = parm
            const plotId = state.currentSelectingPlotId
            const dialogArr = state.plotData.plot[plotId].dialog
            dialogArr[index].dialog = content
        }
    },
})