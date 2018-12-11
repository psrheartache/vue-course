<template>
    <div id='mobanApp'>{{ appName }} -> {{ appNameWithVersion }}
      <a-input :value="jk" @input="jkChange"></a-input>
      <h1>哈哈：{{ jk }}</h1>
      <h1>{{ firstLetter }}</h1>
      <h1> {{ appVersion }}</h1>
      <button @click="changeAppName">修改appName</button>
      <h1> {{ userName }}</h1>
      <button @click="changeUserName">修改userName</button>
      <button @click="registerModule">动态注册模块</button>
      <p v-for="(li , index) in todoList" :key="index"> {{ li }}</p>
       <p v-for="(li , index) in todoListUser" :key="index+100"> {{ li }}</p>
    </div>
</template>
<script>
import AInput from '_c/AInput'
import { mapState , mapGetters , mapMutations, mapActions } from 'vuex'
// import { createNamespacedHelpers } from 'vuex'
// const { mapState } = createNamespacedHelpers('user')

export default {
  components: {
    AInput
  },
  props:{},
  data() {
    return {

    };
  },
  computed: {
    // ...mapState({
    //   appName: state => state.appName,
    //   userName: state => state.user.userName
    // })

    ...mapState('user',{
      userName: state => state.userName,
      todoListUser: state => state.todo ? state.todo.todoListUser : []
    }),

    ...mapState({
      appVersion: state => state.appVersion,
      todoList: state => state.todo ? state.todo.todoList : [],
      jk: state => state.jk,
    }),

    valueLastLetter ()  {
      // return this.inputValue.substr(-1, 1)
    },

    // appNameWithVersion () {
    //   return this.$store.getters.appNameVersion
    // },

    ...mapGetters([
      'appNameWithVersion',
    ]),

    ...mapGetters('user',[
      'firstLetter',
    ]),

    // 展开数组解构
    // ...mapState([
    //   'appName'
    // ])

    // 单个引入
    // userName ()  {
    //    reture this.$store.state.user.uesrName
    // }

    appName ()  {
       return this.$store.state.appName
    }

      //  appName: {
      //     set: function (newVlaue) {

      //     },
      //     get: function () {
      //         return ;
      //     }
      //  }
  },
  watch: {},
  methods: {
        ...mapMutations('user',[
          'SET_USER_NAME',
        ]),

        ...mapMutations([
          'SET_APP_NAME',
          'SET_APP_VERSION',
          'SET_JK'
        ]),

        ...mapActions([
            'updateAppName'
        ]),

      changeAppName(){
          // this.$store.commit('SET_APP_NAME',{};
          // this.$store.commit('SET_APP_NAME','newAppName')
          // this.$store.commit('SET_APP_VERSION')
          this.SET_APP_NAME('newAppName');
          this.SET_APP_VERSION();
          // this.$store.commit({
          //     type: 'SET_APP_NAME',  //type是调用方法名称
          //     appName: 'newAppName'  //传参变量
          // })
      },
      changeUserName(){
        // this.$store.dispatch('')  // dispath触发actions
        this.SET_USER_NAME('HAHA');
        this.updateAppName();
      },
      registerModule () {
        this.$store.registerModule('todo',  {
            state:{
                todoList: [
                    '学习mutations',
                    '学习actions'
                ]
            }
        })

        this.$store.registerModule(['user','todo'],  {
            state:{
                todoListUser: [
                    '学习mutationsUser',
                    '学习actionsUser'
                ]
            }
        })
      },
      jkChange (val) {
          this.SET_JK(val)
      }
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

<style>
    #mobanApp{
      height 100%
      width  100%
    }

    input{
          border: 1px solid red;
          padding: 0 5px;
    }
</style>
