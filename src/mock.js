import Mock from 'mockjs'

const Random = Mock.Random

// 登录
Mock.mock('/api/login', 'post', (option) => {
  let { username, password } = JSON.parse(option.body)
  return (username === 'admin' && password === 'admin')
})

// 用户数据
const taskList = () => {
  let users = []
  for (let i = 0; i < 10; i++) {
    let user = {
 
      "ID": 1,
    "name": "模拟流程"+i+1,
    "jobType": "任务类别111",
    "jobName": "任务"+i+1,
    "jobDescription": "",
    "jobVersion": "",
    "triggerWay": "",
    "startTime": Random.date('yyyy-MM-dd'),
    "endTime": Random.date('yyyy-MM-dd'),
    "jobState": "成功",
    "createBy": Random.cname(),
    "approvalTime":Random.date('yyyy-MM-dd') ,


    }
    users.push(user)
  }
  return users
}
Mock.mock('/api/taskList', taskList)

