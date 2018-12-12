<template>
    <div>
      <list :list="list" :render="renderFunc">
          <!-- <count-to slot-scope="count" :endVal="count.number"></count-to> -->
      </list>
    </div>
</template>

<script>
import List from 'components/list'
import CountTo from 'components/count-to'
export default {
  data() {
      return{
        list:  [{name:'lili' },{name:'lulu'}]
      }
  },
  components: {
    List,
    CountTo
  },
   methods: {
    //  renderFunc (h, name) {
    //     return h('i',{
    //       style: {
    //           color: 'pink'
    //       }
    //     }, name)
    //  }


    // JSX函数
    renderFunc (h, name) {
        return (
            <i on-click={this.handleClick} style={{ color:'red'}}>{name}</i>
            // <CountTo nativeOn-click={this.handleClick} on-on-animation-end={this.handleClick} on-click={this.handleClick} style={{ color:'red'}}>{name}</CountTo>
        )
     },
     handleClick () {
       console.log(event)
     }
  }
}
</script>
