<template>
  <div >
    <!--底部tab栏-->
    <mt-tabbar v-model="selected">
      <mt-tab-item id="Home">
        <img slot="icon" :src="selected=='Home'?'../../../static/img/ic_index_p.png':'../../../static/img/ic_index.png'">
        首页
      </mt-tab-item>
      <mt-tab-item id="CalTool">
        <img slot="icon"  :src="selected=='CalTool'?'../../../static/img/ic_calc_p.png':'../../../static/img/ic_calc.png'">
        计算工具
      </mt-tab-item>
      <mt-tab-item id="ProTool">
        <img slot="icon" :src="selected=='ProTool'?'../../../static/img/ic_major_p.png':'../../../static/img/ic_major.png'">
        专业工具
      </mt-tab-item>
      <mt-tab-item id="Profile">
        <img slot="icon" :src="selected=='Profile'?'../../../static/img/ic_my_p.png':'../../../static/img/ic_my.png'">
        我的
      </mt-tab-item>
    </mt-tabbar>

  </div>
</template>

<script>
export default {
  name: 'FooterGuider',
  data () {
    return {
      selected: 'Home'
    }
  },

  watch: {
    selected:function (newV, oldV) {

      this.$router.push({
        name: newV
      })

    }
  }
}
</script>

<style scoped>
  .mint-tabbar{
    position: fixed;
    bottom: 0;
    width: 100%;
  }
</style>
