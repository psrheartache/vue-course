<template>
  <div>
      <slot name="left"></slot>
      <span :class="countClass" :id="eleId" ref="number"></span>
      <slot name="right"></slot>
  </div>
</template>

<script>
import CountUp from 'countup'
export default {
  name: 'count-to',
  components: {},
  props: {
    /**
       *  @description 起始值
       */
    startVal: {
      type: Number,
      default: 0,
    },
    /**
       *  @description 最终值
       */
    endVal: {
      type: Number,
      required: true, //必须传参
    },
    /**
       *  @description 小数点后保留几位小数
       */
    decimals: {
        type: Number,
        default:  0,
    },
    /**
       *  @description 渐变时长
       */
    duration: {
      type: Number,
      default: 1,
    },
    /**
       *  @description 是否使用变速效果
       */
    useEasing: {
      type: Boolean,
      default: true
    },
    /**
       *  @description 数字是否分组
       */
    useGrouping: {
      type: Boolean,
      default: true
    },
    /**
       *  @description 分组符号
       */
    separator: {
      type: String,
      default: ','
    },
    /**
       *  @description 整数小数分隔符号
       */
    decimal: {
      type: String,
      default: '.'
    },
    /**
       *  @description 动画延迟
       */
    delay: {
        type: Number,
        default:  0,
    },
    className: {
        type: String,
        default: '',
    },
  },
  data() {
    return {
      counter:{

      },
    };
  },
  computed: {
    eleId () {
       return 'count_up_${this._uid}'
    },
    countClass () {
       return [
         'count-to-number',
         this.className,
       ]
    }
  },
  watch: {
      endVal (newVal, oldVal) {
        this.counter.update(newVal)
        this.emitEndEvent()
      }
  },
  methods: {
      getCount () {
        return this.$refs.number.innerText
      },
      emitEndEvent () {
        setTimeout(() => {
           this.$emit('on-animation-end',Number(this.getCount()))
        }, this.duration * 1000);
      }
  },
  mounted() {
      this.$nextTick(() =>  {
        this.counter = new CountUp(this.eleId, this.startVal,  this.endVal, this.duration, {
            useEasing: this.useEasing,
            useGrouping: this.useGrouping,
            separator: this.separator,
            decimal: this.decimal
        })

        setTimeout(() => {
          this.counter.start()
        }, this.delay);
      })
  }
}
</script>
<style lang='stylus' scoped>
    @import './count-to.styl'
</style>
