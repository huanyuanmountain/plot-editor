<template>
  <el-aside>
    <el-col :span="12">
      <el-menu default-active="2" class :default-openeds="['1']">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span>基本编辑</span>
          </template>

          <el-menu-item-group>
            <!-- <el-menu-item index="1-1"> -->
            <router-link tag="el-menu-item" class="link" to="/home/person">人物编辑</router-link>
            <!-- </el-menu-item> -->

            <!-- <el-menu-item index="1-2"> -->
            <router-link tag="el-menu-item" class="link" to="/home/dialog">对话编辑</router-link>
            <!-- </el-menu-item> -->

            <!-- <el-menu-item index="1-2"> -->
            <router-link tag="el-menu-item" class="link" to="/home/event">事件编辑</router-link>
            <!-- </el-menu-item> -->
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-aside>
</template>

<script>

export default {
  name: '',
  data() {
    return {

    }
  },

  computed: {

  },

  mounted() {
  },

  methods: {

  }
}
</script>
  
<style>
.el-menu {
  padding: 0;
}
.el-submenu .el-menu-item,
.el-menu-item {
  min-width: 50px;
}
.el-menu-item {
  padding: 0;
}
</style>