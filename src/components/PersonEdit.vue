<template>
  <div>
    <h3 class="title">人物编辑</h3>
    <br />
    <el-row>
      <el-col :span="5">
        <el-button
          @click="addPersonToList"
          type="primary"
          icon="el-icon-circle-plus"
          size="mini"
        >增加人物</el-button>
      </el-col>
    </el-row>

    <el-table :data="personList">
      <el-table-column label="编号 id">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column label="名称">
        <template slot-scope="scope">
          <el-input
            @input="handleChangeName($event, scope.$index)"
            :value="scope.row.name"
            placeholder="人物名称"
            clearable
          ></el-input>
        </template>
      </el-table-column>

      <el-table-column label="头像路径">
        <template slot-scope="scope">
          <el-input
            @input="handleChangeAvatar($event, scope.$index)"
            :value="scope.row.avatar"
            placeholder="头像 url"
            clearable
          ></el-input>
        </template>
      </el-table-column>

      <el-table-column label="删除">
        <template slot-scope="scope">
          <el-button
            @click="removePerson(scope.$index)"
            type="danger"
            icon="el-icon-delete-solid"
            size="mini"
          >删除</el-button>
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
    ...mapMutations(['addPersonToList', 'changePersonName', 'changeAvatar', 'removePerson']),
    handleChangeName(target, index) {
      const parm = {
        index,
        target
      }
      this.changePersonName(parm)
    },
    handleChangeAvatar(target, index) {
      const parm = {
        index,
        target
      }
      this.changeAvatar(parm)
    },
  }

}
</script>
  
<style>
</style>