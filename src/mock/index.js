import Mock from 'mockjs'
import { getUserInfo } from './response/user'

// Mock.mock('http://localhost:3000/getUserInfo','post', getUserInfo)
// Mock.mock(/\/getUserInfo/,'post', {name:'chen'})
Mock.mock(/\/getUserInfo/,'post', getUserInfo)

const Random = Mock.Random

Mock.setup({
  timeout: 0
})

Random.extend({
    fruit () {
        const fruit = ['apple', 'peach', 'lemon']
        return this.pick(fruit)
    }
})

export default Mock
