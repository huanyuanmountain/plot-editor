<template>
  <div>
    <h1 class="title">对话编辑</h1>
    <el-container>
      <el-aside>
        <el-row>
          <el-col :span="5">
            <el-button
              @click="handleAddPlot"
              type="primary"
              icon="el-icon-circle-plus"
              size="mini"
            >增加剧情</el-button>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <div>搜索</div>
          </el-col>

          <el-col :span="18">
            <el-input placeholder="请输入 id" size="mini" clearable></el-input>
          </el-col>
        </el-row>

        <br />

        <el-row v-for="(id, index) in idList" :key="id + index">
          <el-tag size="medium" effect="plain">{{ id + ' 事件' }}</el-tag>
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

  },

  methods: {
    ...mapMutations(['addPlot']),
    handleAddPlot() {
      this.addPlot()
      this.idList = Object.keys(this.plot)
    }
  }
}
</script>
  
<style>
</style>