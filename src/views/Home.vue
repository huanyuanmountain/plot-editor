<template>
  <el-container>
    <p-header />

    <el-main>
      <el-container>
        <p-aside />

        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-main>

    <el-footer>
      <p-footer></p-footer>
    </el-footer>
  </el-container>
</template>

<script>
import PHeader from '../components/PHeader'
import PAside from '../components/PAside'
import PFooter from '../components/PFooter'

export default {
  name: "Home",
  components: {
    PHeader,
    PAside,
    PFooter
  }
}
</script>

<style scoped>
.el-container {
  height: 100%;
}
.el-main {
  padding: 5px;
}
.el-footer {
  border-top: 1px solid rgb(64, 158, 255);
}
</style>