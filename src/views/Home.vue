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

    <el-footer style="border-top: 1px solid gray"></el-footer>
  </el-container>
</template>

<script>
import PHeader from '../components/PHeader'
import PAside from '../components/PAside'

export default {
  name: "Home",
  data() {
    return {
    }
  },
  computed: {

  },
  methods: {

  },
  components: {
    PHeader,
    PAside
  }
}
</script>

<style scoped>
.el-container {
  height: 100%;
}
.el-main {
  padding: 0;
}
el-container > .el-menu-vertical-demo.el-menu {
  padding: 0;
}
</style>