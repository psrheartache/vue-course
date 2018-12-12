<template>
  <ul>
    <li v-for="(item, index) in list" :key="`item_${index}`">
        <span v-if="!render">{{ item.name }}</span>
        <render-dom v-else :render-func="render" :name="item.name"></render-dom>
        <!-- <slot :number="num"></slot> -->
    </li>
  </ul>
</template>

<script>
import RenderDom from 'components/render-dom'
export default {
  name: 'list',
  props: {
    list: {
      type: Array,
      default: () => []
    },
    render: {
      type: Function,
      default: () => {}
    }
  },
  components: {
    RenderDom
  }
}
</script>
