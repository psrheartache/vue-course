<template>
  <cube-select
    v-model="value"
    :title="title"
    :options="options"
    :placeholder="placeholder"
    :auto-pop="autoPop"
    :disabled="disabled"
    @change="change"
  >
  </cube-select>
</template>

<script>
export default {
  name: 'v-selectbox',
  props: {
    selectTitle: {
      type: [String],
      default: ''
    },
    tip: {
      type: [String],
      default: ''
    },
    selectData: {
      default: '',
    },
  },
  components: {

  },
  data() {
    return {
      options: [2013, 2014, 2015, 2016, 2017, 2018],
      value: '',
      title: this.selectTitle,
      placeholder: this.tip,
      autoPop: false,
      disabled: false
    }
  },
  computed: {

  },
  watch: {

  },
  methods: {
    change(value, index, text) {
      console.log('change', value, index, text)
    }
  },
}
</script>
<style lang='stylus' scoped>
    >>>
    .cube-select {
      text-align: center;
      height: 100%
      line-height: 1

      & .cube-select-icon {
        right:  inherit;
        margin-left: 8px;
        border-width: 6px 6px 0 6px;
      }

      & .cube-select-placeholder,& .cube-select-text{
        color:  #000;
        font-size: 20px
      }

      // &:after {
      //   border-radius: 0
      //   border-left: none
      //   border-right: none
      // }
    }
</style>
