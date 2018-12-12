<template>
    <div id="indexApp">
      <v-header header-title='武汉城管厕所管理' :back="false"></v-header>
      <v-banner></v-banner>
      <div class="route-area">
           <div v-for="(indexIcon,index) in icon" :key="index" class="route-item" @click="loadPage(indexIcon.name)"><img :src="indexIcon.url"><b>{{ indexIcon.title }}</b></div>
      </div>
    </div>
</template>

<style lang="stylus">
#indexApp{
  height: 100%;
  width: 100%;
}

.route-area {
  width 100%
  height 644px
  display flex
  flex-direction row
  flex-wrap wrap
  text-align center
  & .route-item{
    cursor pointer
    margin-top 100px
    height 50%
    width 33.3%
    & img{
      width: 136px
      height: 136px
    }
    & b{
      display block
      font-weight bold
      font-size 38px
      line-height 98px
    }
  }
}
</style>

<script>
    import VHeader from 'components/header'
    import VBanner from 'components/banner'


    export default {
      data () {
          return{
          icon: [{
              name: 'moban',
              title:  '公厕一张图',
              url:  require('../assets/ycyzt.png'),
            },
            {
              name: '404-error',
              title: '一侧一档',
              url:  require('../assets/ycyd.png')
            },
            {
              name: 'odor',
              title: '臭气警告',
              url:  require('../assets/cqgj.png')
            },
            {
              name: 'render-page',
              title: '实时监测',
              url:  require('../assets/ssjc.png')
            },
            {
              name: 'adasd',
              title: '统计分析',
              url:  require('../assets/tjfx.png')
            },
            {
              name: 'more',
              title: '更多',
              url:  require('../assets/gd.png')
            }],
        }
      },
      components: {
          VHeader,
          VBanner
      }
    }
</script>
