<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转</button>
    <button @click="handleClick('replace')">替换</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  // beforeRouteEnert: (to, from,  next) => {
  //     //  const leave = confirm('您确定要离开当前页面吗?')
  //     //  if (leave) next()
  //     //  else next(false)
  // },
  // beforeRouteLeave: (to, from,  next) => {
  //      const leave = confirm('您确定要离开当前页面吗?')
  //      if (leave) next()
  //      else next(false)
  // },
  methods:{
    handleClick (type) {
      //this.$router.go(1) //前进一页
      //this.$router.go(-1) //后退一页
      if  (type === 'back') this.$router.back()
      //else if (type === 'push') this.$router.push('/parent') 
      else if (type === 'push') this.$router.push({
        //path:`/argu/${name}`
        name:'argu',
        params:{
          name:'CYF'
        }
        // query:{
        //   name:'CYF'
        // }
      })
      //后退无法回退，替换了页面不是切换。
      else if (type === 'replace') this.$router.replace({
        name:'parent'
      })  
    }
  }
}
</script>
