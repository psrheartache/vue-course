<template>
  <h1 class="header" :class="{'back' : back}">{{ headerTitle }} <i class="cubeic-back" @click="goback">返回</i></h1>
</template>

<script>
export default {
  name: 'v-header',
  props: {
    headerTitle:{
      type: [String, Number],
      default: ''
    },
    back: {
      type: [Boolean],
      default: ''
    }
  },
  components: {

  },
  data() {
    return {
    }
  },
  computed: {

  },
  watch: {

  },
  methods: {
    goback(){
      this.$router.go(-1)
    }
  },
}
</script>
<style lang='stylus' scoped>
    .header {
      position: relative
      -webkit-backface-visibility: hidden
      backface-visibility: hidden
      z-index: 5
      height 44px
      width  100%
      line-height 44px
      text-align center
      font-weight bold
      margin: 20px 0

      i {
         display none
        }

    &.back > i  {
         display block
         position: absolute
         top: 0
         left: 0
         padding: 0 15px
         color: #000
        //  color: #fc9153
      }
  }
</style>
