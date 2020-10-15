var dataC = {
    id: 1,
    name: '模拟流程',
    jobType:"",
	jobName:"" ,
	jobDescription:"",
	jobVersion:"" , 
	triggerWay:"",   //触发方式
	startTime:"" ,
	endTime:"" ,
	jobState:"" ,
	createBy:"",
	approvalTime:"",//审批通过时间
    nodeList: [
        {
            id: '789ads8a97',
            name: '开始',
            type: 'start',
            left: '400px',
            img:"start",
            top: '15px',
            ico: 'el-icon-user-solid',
            // viewOnly: true
        },

    ],
    lineList: [

    ]
}

export function getDataC() {
    return dataC
}
