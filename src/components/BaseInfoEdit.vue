<template>
  <div>
    <el-input @input="changeFileName" :value="fileName" placeholder="设置文件名"></el-input>
    <el-input @input="changeAuthor" :value="author" placeholder="请设置作者"></el-input>
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
      author: state => state.plotData.author
    })
  },
  methods: {
    ...mapMutations(['changeFileName', 'changeAuthor']),

  }
}
</script>
  
<style>
</style>