<template>
  <div>
    <h1 class="title">对话编辑</h1>
    <el-container>
      <el-aside>
        <el-row>
          <!-- <el-col :span="5"> -->
          <el-button
            id="plot-id-tag"
            @click="handleAddPlot"
            type="primary"
            icon="el-icon-circle-plus"
            size="mini"
          >增加剧情</el-button>
          <!-- </el-col> -->
        </el-row>

        <br />

        <el-row class="search-layer">
          <el-col :span="6">
            <div id="search-title">搜索:</div>
          </el-col>

          <el-col :span="18">
            <el-input placeholder="请输入 id" size="mini" clearable></el-input>
          </el-col>
        </el-row>

        <br />

        <el-row v-for="(id, index) in idList" :key="id + index">
          <el-tag
            id="plot-id-tag"
            size="medium"
            :effect="currentSelectingPlotId == id ? 'light':'plain'"
            @close="handleRemovePlot(id)"
            @click="handleSelectPlot(id)"
            closable
          >{{ '剧情 '+ id }}</el-tag>
        </el-row>
      </el-aside>

      <el-divider id="split-line" direction="vertical"></el-divider>

      <el-main v-if="currentSelectingPlotId">
        <el-row>
          <el-col :span="5">
            <el-button @click="addDialog" type="info" icon="el-icon-circle-plus" size="mini">增加一条对话</el-button>
          </el-col>
          <el-col :span="10">
            <el-tag type="success" size="small" effect="light">剧情 id：{{currentSelectingPlotId}}</el-tag>
          </el-col>
        </el-row>

        <el-table :data="currentDialog">
          <el-table-column label="人物">
            <template slot-scope="scope">
              <el-select
                :value="scope.row.personId"
                @change="handleSelectPerson($event, scope.$index)"
                placeholder="选择人物"
              >
                <el-option
                  v-for="item in personSelectOption"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </template>
          </el-table-column>

          <el-table-column label="对话">
            <template slot-scope="scope">
              <el-input
                @input="handleChangeDialogContent($event, scope.$index)"
                :value="scope.row.dialog"
                placeholder="对话内容"
                clearable
              ></el-input>
            </template>
          </el-table-column>

          <el-table-column label="删除">
            <template slot-scope="scope">
              <el-button
                @click="removeDialog(scope.$index)"
                type="danger"
                icon="el-icon-delete-solid"
                size="mini"
              >删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'dialogEdit',
  data() {
    return {
      idList: [],
      currentPlot: {},
      currentDialog: [],
    }
  },

  computed: {
    ...mapState(['currentSelectingPlotId']),
    ...mapState({
      plot: state => state.plotData.plot,
      personList: state => state.plotData.person,
    }),

    personSelectOption() {
      return this.personList.map(el => {
        const item = {
          value: el.id,
          label: el.name
        }
        return item
      })
    }
  },

  watch: {

  },

  mounted() {
    this.refreshData()
  },

  methods: {
    ...mapMutations(['addPlot', 'removePlot', 'selectPlot', 'addDialog', 'removeDialog', 'changeDialogPerson', 'changeDialogContent']),

    handleAddPlot() {
      this.addPlot()
      this.refreshData()
    },

    handleRemovePlot(id) {
      this.removePlot(id)
      this.refreshData()
    },

    handleSelectPlot(id) {
      this.selectPlot(id)
      this.refreshData()
    },

    handleSelectPerson(selectTarget, index) {
      const parm = {
        index,
        personId: selectTarget
      }
      this.changeDialogPerson(parm)
    },

    handleChangeDialogContent(inputTarget, index) {
      const parm = {
        index,
        content: inputTarget
      }
      this.changeDialogContent(parm)
    },

    refreshData() {
      this.idList = Object.keys(this.plot)

      if (this.currentSelectingPlotId) {
        this.currentDialog = this.plot[this.currentSelectingPlotId].dialog
      }
    }

  }
}
</script>
  
<style>
#plot-id-tag {
  width: 80%;
  margin-top: 6px;
}
.search-layer {
  margin: 5px;
}
#search-title {
  margin-top: 5px;
  font-size: 13px;
}
#split-line {
  height: unset;
  background-color: rgb(102, 178, 255);
}
</style>