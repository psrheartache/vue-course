<template>
  <div class='banner'>
    <cube-slide
      ref="slide"
      :showDots="dotShow"
      :data="items"
      @change="changePage"
    >
      <cube-slide-item
        v-for="(item, index) in items"
        :key="index"
        @click.native="clickHandler(item, index)"
      >
        <a :href="item.url">
          <img :src="item.image">
        </a>
      </cube-slide-item>
    </cube-slide>
  </div>
</template>

<script>
export default {
  name: 'v-banner',
  prop: {

  },
  components: {

  },
  data() {
    return {
      dotShow:  true,
      items: [
        {
          url: '',
          image: require('./banner01.png')
        },
        {
          url: '',
          image: require('./banner02.png')
        },
      ]
    }
  },
  computed: {

  },
  watch: {

  },
  methods: {
    changePage(current) {
      console.log('当前轮播图序号为:' + current)
    },
    clickHandler(item, index) {
      console.log(item, index)
    }
  },
}
</script>
<style lang='stylus' scoped>
.banner{
  height: 400px
  width: 100%
  overflow: hidden
}
>>>

.cube-slide-item
  &img{
      width 100%
  }

</style>
