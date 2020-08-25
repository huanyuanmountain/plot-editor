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

    <el-footer></el-footer>
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
  padding: 5px;
}
el-container > .el-menu-vertical-demo.el-menu {
  padding: 0;
}
.el-footer {
  border-top: 1px solid rgb(64, 158, 255);
}
</style>