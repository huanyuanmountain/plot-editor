<template>
  <el-aside>
    <el-menu default-active="2" class :default-openeds="['1']">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>基本编辑</span>
        </template>

        <el-menu-item-group>
          <router-link tag="el-menu-item" class="link" to="/home/info">基本信息</router-link>

          <router-link tag="el-menu-item" class="link" to="/home/person">人物编辑</router-link>

          <router-link tag="el-menu-item" class="link" to="/home/dialog">对话编辑</router-link>

          <router-link tag="el-menu-item" class="link" to="/home/event">事件编辑</router-link>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
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
.el-aside {
  width: 160px !important;
  overflow: hidden;
}
</style>