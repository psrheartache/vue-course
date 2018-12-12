<template>
  <div id="odorApp">
        <v-header header-title='臭气警告' :back="true"></v-header>
        <div class="select-area clearfix">
            <div class="select-item"><v-selectbox tip="行政区划" select-title="请选择行政区划"></v-selectbox></div>
            <div class="select-item"><v-selectbox tip="类别" select-title="请选择厕所类别"></v-selectbox></div>
        </div>
  </div>
</template>

<script>
import VHeader from 'components/header'
import VSelectbox from 'components/selectbox'

export default {
  components: {
    VHeader,
    VSelectbox
  },
  props:{},
  data() {
    return {

    };
  },
  computed: {},
  watch: {},
  methods: {

  },
  created() {

  },
  mounted() {

  },
  beforeCreate() { },
  beforeMount() { },
  beforeUpdate() { },
  updated() { },
  beforeDestroy() { },
  destroyed() { },
  activated() { },
}
</script>
<style lang='stylus' scoped>
#odorApp{
  height 100%
  width  100%
}

.select-area{
    height: 88px
    line-height:  44px
    width: 100%

    & .select-item{
        height: 100%
        width:  50%
        float:  left
    }
}
</style>
