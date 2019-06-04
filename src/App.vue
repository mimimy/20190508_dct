<template>
  <div id="app">
    <router-view/>
    <FooterGuider v-show="$route.meta.showFooter"></FooterGuider>
  </div>
</template>

<script>

  import  FooterGuider from './components/FooterGuider/FooterGuider'
  import {mapActions} from 'vuex'
export default {
  name: 'App',
  components: {FooterGuider},
  mounted(){

    this.getUserInfo()

  },
  methods: {
    ...mapActions(['getUserInfo'])
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
}
  body{
    margin: 0;
    padding: 0;
    width: 100%;
  }
</style>
