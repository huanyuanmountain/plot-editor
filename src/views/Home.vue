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
/*整体显示区域布局样式*/
.el-container {
  height: 100%;
}
.el-main {
  padding: 0;
}
/*左边导航栏具体样式*/
.el-menu-vertical-demo.el-menu {
  padding-left: 20px;
  text-align: left;
  height: 100%;
  padding: 0;
}
el-container > .el-menu-vertical-demo.el-menu {
  padding: 0;
}
.el-submenu .el-menu-item,
.el-menu-item {
  min-width: 30px;
}
.el-menu-item {
  padding: 0;
}
</style>