export const getAppName = () => {
    return new Promise((resolve, rejects) => {
        const err = null
        setTimeout(() => {
          if(!err) resolve({ code:200, info:{ appName: '我是异步'} })
          else reject(err)
        })
    })
}
