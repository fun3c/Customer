import Mock from 'mockjs'

const Random = Mock.Random

// 登录
Mock.mock('/api/login', 'post', (option) => {
  let { username, password } = JSON.parse(option.body)
  return (username === 'admin' && password === 'admin')
})
// const jobTypeList = [{id:0,cont:'编辑中'}, {id:1,cont:'执行中'}, {id:2,cont:'审批中'}, {id:3,cont:'待执行'}, {id:4,cont:'待审批'}, {id:5,cont:'已中止'}, {id:6,cont:'已停止'}, {id:7,cont:'已完成'}, {id:8,cont:'已到期'}]
const jobTypeList = ['编辑中', '待审批', '审批中', '待执行', '执行中', '已中止', '已停止', '已完成', '已到期']
// 用户数据
const taskList = () => {
  let users = []
  for (let i = 0; i < 9; i++) {
    let user = {
      "ID": 1,
      "name": "模拟流程" + i + 1,
      "jobType": jobTypeList[Math.round(Math.random() * 5)],
      //任务类别
      "category": "类别" + i,
      "jobName": "任务" + i + 1,
      "jobDescription": "",
      "jobVersion": "",
      "triggerWay": "",
      "startTime": Random.date('yyyy-MM-dd'),
      "endTime": Random.date('yyyy-MM-dd'),
      "jobState": "成功",
      "createBy": Random.cname(),
      "approvalTime": Random.date('yyyy-MM-dd'),
    }
    users.push(user)
  }
  return users
}
const queryList = (taskquerylist) => {
  let taskquerylistfu = JSON.parse(taskquerylist.body)
  let users = []
  let user = {
    "ID": 1,
    "name": taskquerylistfu.name,
    "jobType": taskquerylistfu.jobType,
    //任务类别
    "category": taskquerylistfu.category,
    "jobName": "任务",
    "jobDescription": "",
    "jobVersion": "",
    "triggerWay": "",
    "startTime": Random.date('yyyy-MM-dd'),
    "endTime": Random.date('yyyy-MM-dd'),
    "jobState": "成功",
    "createBy": taskquerylistfu.createBy,
    "approvalTime": Random.date('yyyy-MM-dd'),
  }
  // users.push(JSON.parse(taskquerylist.body))
  users.push(user)
  return users
}
const abtest = () => {
  let list = {
    'defaultValue': '11',
    'shuntWay': ['按首次随机分流', '按天随机分流', '完全随机分流'],
    //观察周期
    'period': '4',
    //分流比例
    // 'groups': [ ['对照',''],['实验一',''] ],
    'groups': [ {'name':'对照组','num':'0'},{'name':'实验组','num':'0','type':1} ],
  }
  return list
}
Mock.mock('/api/queryList', queryList)
Mock.mock('/api/taskList', taskList)
Mock.mock('/api/abtest', abtest)

