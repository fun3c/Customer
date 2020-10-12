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
            name: '开始（不可拖拽）',
            type: 'start',
            left: '400px',
            img:"start",
            top: '15px',
            ico: 'el-icon-user-solid',
            viewOnly: true
        },
        {
            id:"2gtzwt26da" ,
            name:"条件分支" ,
            type:"condition" ,
            left:"400px" ,
            top:"141px" ,
            img:"条件分支",
            ico:"el-icon-cpu" ,
            controlState:"success" ,
            controlDescription:"" ,
            controlCondition:"" ,
            url:"" ,
            createBy:"" ,
            createTime:"" ,
            controlVersion:"" 
        },
        {
            id:"0p2iruyl8" ,
            name:"短信" ,
            type:"task" ,
            left:"195px" ,
            top:"279px" ,
            img:"短信",
            ico:"el-icon-guide" ,
            controlState:"success" ,
            controlDescription:"" ,
            controlCondition:"" ,
            url:"" ,
            createBy:"" ,
            createTime:"" ,
            controlVersion:"" 
        },{
            id:"wjbtd44uqh" ,
            name:"行为触发1" ,
            type:"task" ,
            left:"608px" ,
            top:"279px" ,
            ico:"el-icon-guide" ,
            img:"条件分支",
            controlState:"success" ,
            controlDescription:"" ,
            controlCondition:"" ,
            url:"" ,
            createBy:"" ,
            createTime:"" ,
            controlVersion:"" 
        },{
            id:"j382k5jn4h" ,
            name:"流程结束" ,
            type:"end" ,
            left:"195px" ,
            top:"370px" ,
            img:"stop",
            ico:"el-icon-switch-button" ,
            controlState:"success" ,
            controlDescription:"" ,
            controlCondition:"" ,
            url:"" ,
            createBy:"" ,
            createTime:"" ,
            controlVersion:"" 
        },{
            id:"34klq0zv1f" ,
            name:"流程结束1" ,
            type:"end" ,
            left:"608px" ,
            top:"370px" ,
            ico:"el-icon-switch-button" ,
            img:"stop",
            controlState:"success" ,
            controlDescription:"" ,
            controlCondition:"" ,
            url:"" ,
            createBy:"" ,
            createTime:"" ,
            controlVersion:"" 
        }
    ],
    lineList: [
        {
            "from": "789ads8a97",
            "to": "2gtzwt26da"
        },
        {
            "from": "2gtzwt26da",
            "to": "nodeC"
        },
        {
            "from": "2gtzwt26da",
            "to": "0p2iruyl8",
            "label": "成功"
        },
        {
            "from": "2gtzwt26da",
            "to": "wjbtd44uqh",
            "label": "失败"
        },
        {
            "from": "0p2iruyl8",
            "to": "j382k5jn4h"
        },
        {
            "from": "wjbtd44uqh",
            "to": "34klq0zv1f"
        }
    ]
}

export function getDataC() {
    return dataC
}
