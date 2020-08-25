<template>
  <div>
    <h3>文件基本信息</h3>
    <br />
    <el-row>
      <el-col class="input-title" :span="3">文件名：</el-col>
      <el-col :span="5">
        <el-input @input="changeFileName" :value="fileName" placeholder="请输入文件名" clearable></el-input>
      </el-col>
    </el-row>
    <br />
    <el-row>
      <el-col class="input-title" :span="3">作者：</el-col>
      <el-col :span="5">
        <el-input @input="changeAuthor" :value="author" placeholder="请设置作者" clearable></el-input>
      </el-col>
    </el-row>
    <br />
    <el-row>
      <el-col class="input-title" :span="3">版本：</el-col>
      <el-col :span="5">
        <el-input @input="changeVersion" :value="version" placeholder="请设置版本号" clearable></el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'baseInfoEdit',
  data() {
    return {

    }
  },
  computed: {
    ...mapState(['fileName']),
    ...mapState({
      author: state => state.plotData.author,
      version: state => state.plotData.version
    })
  },
  methods: {
    ...mapMutations(['changeFileName', 'changeAuthor', 'changeVersion']),

  }
}
</script>
  
<style>
.input-title {
  margin-top: 9px;
}
</style>