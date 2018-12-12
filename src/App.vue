<template>
  <div id="app">
    <keep-alive>
      <!-- <router-view></router-view> -->
    </keep-alive>
    <router-view></router-view>
  </div>
</template>

<style lang="stylus">
#app {
  height: 100%;
  width: 100%;
}
</style>

<script>
    export default {
      data () {
          return{

          }
    },
    mounted(){
        // this.loadPage('index')
    }
  }
</script>
