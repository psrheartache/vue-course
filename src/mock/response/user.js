import Mock from 'mockjs'

const Random = Mock.Random

export const getUserInfo = (options) =>  {
    const template = {
      'name|2-4': 'chen',
      'name2|5':'Cyf',
      'age|+2': 18,
      'num|4-10': 0,
      'float|3-10.2-5': 0,
      'bool|1': true, // 1/2
      'bool2|1-9': true, // 1/10
      'obj|2': {
        a:'aa',
        b:'bb',
        c:'cc'
      },
      'obj|1-2': {
        a:'aa',
        b:'bb',
        c:'cc'
      },
      'arr|2-4':[1,2,3],
      'arr2|2':['a','b'],
      // 'func':() => {
      //     return 'this is funcs'
      // },
      // 'reg': /[1-9][a-Z]/,
      // email:Random.email,
      email:Mock.mock('@email'),
      range: Random.range(3, 10, 2),
      date: Random.date('yyyy-MM-dd'),
      time: Random.time('HH:mm'),
      dateTime: Random.datetime('yyyy-MM-dd HH:mm'),
      now: Random.now('hour','yyyy-MM-dd HH:mm'),
      img: Random.image('100x200','#0f0','#fff','png','测试图片'),
      img_base64: Random.dataImage('100x200','CHEN'),
      color: Random.color(),
      cword: Random.cword('我爱大菠萝',2,5),
      cname: Random.cname(),
      url:  Random.tld(),
      email:  Random.email('cyf.com'),
      region: Random.region(),
      province: Random.province(),
      city: Random.city(true),
      county: Random.county(true),
      zip: Random.zip(),
      upperFirstLetter: Random.capitalize('chen'),  //英文首字母大写
      upperWord: Random.upper('str'), //全部daxie
      lowerWord: Random.lower('STR'), //全部小写
      pick: Random.pick([1,2,3,4]),  //挑选
      shuffle: Random.shuffle([1,2,3,4]), //打乱
      guid: Random.guid(),
      idCard: Random.id(),
      fruit: Random.fruit(),
      fruit: '@fruit'
    }

    // let i = 3
    // let arr = []
    // while (i--) {
    //     arr.push.template
    // }
    return Mock.mock(template)
}
