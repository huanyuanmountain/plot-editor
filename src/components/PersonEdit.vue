<template>
  <div>
    <h3 class="title">人物编辑</h3>
    <br />
    <el-row>
      <el-col :span="5">
        <el-button
          @click="addPersonToList"
          class="button"
          type="primary"
          icon="el-icon-circle-plus"
          size="mini"
        >增加人物</el-button>
      </el-col>
    </el-row>

    <el-table :data="personList">
      <el-table-column label="编号">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column label="名称" width="110">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>

      <el-table-column label="头像 Url">
        <template slot-scope="scope">
          <span>{{ scope.row.avatar }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'personEditor',
  computed: {
    ...mapState({
      personList: state => state.plotData.person,
    })
  },
  methods: {
    ...mapMutations(['addPersonToList'])
  }

}
</script>
  
<style>
</style>