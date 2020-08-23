<template>
  <el-header>
    <el-row :gutter="6">
      <el-col :span="5">
        <h1 class="title">剧情编辑器</h1>
      </el-col>

      <el-col :span="8">
        <el-button
          @click="handleDownloadConfig"
          class="button"
          type="primary"
          icon="el-icon-download"
          size="mini"
        >导出配置</el-button>
        <el-button
          @click="handleUploadConfig"
          class="button"
          type="primary"
          icon="el-icon-upload"
          size="mini"
        >上传配置</el-button>
      </el-col>

      <el-col :span="8"></el-col>
    </el-row>
  </el-header>
</template>

<script>
import { uploadJsonFile, downloadJsonFile } from '../assets/js/fileHelper'
import { mapState } from 'vuex'

export default {
  name: '',
  data() {
    return {

    }
  },

  computed: {
    ...mapState(['fileName', 'plotData'])
  },

  mounted() {

  },

  methods: {
    handleDownloadConfig() {
      const content = JSON.stringify(this.plotData)
      downloadJsonFile(content, this.fileName)
    },

    handleUploadConfig() {
      uploadJsonFile()
        .then()
    }

  }
}
</script>
  
<style>
.el-header {
  border-bottom: 1px solid rgb(64, 158, 255);
  height: 50px;
}
.title {
  color: gray;
  font-size: 25px;
}
.button {
  margin-top: 15px;
}
</style>