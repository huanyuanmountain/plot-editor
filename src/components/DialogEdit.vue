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
            effect="plain"
            @close="handleRemovePlot(id)"
            closable
          >{{ '剧情 '+ id }}</el-tag>
        </el-row>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'dialogEdit',
  data() {
    return {
      idList: []
    }
  },

  computed: {
    ...mapState(['currentSelectingPlotId']),
    ...mapState({
      plot: state => state.plotData.plot
    }),
  },

  watch: {

  },

  mounted() {
    this.refreshIdList()
  },

  methods: {
    ...mapMutations(['addPlot', 'removePlot']),

    handleAddPlot() {
      this.addPlot()
      this.refreshIdList()
    },

    handleRemovePlot(id) {
      this.removePlot(id)
      this.refreshIdList()
    },

    refreshIdList() {
      this.idList = Object.keys(this.plot)
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
</style>