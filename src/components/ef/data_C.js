var dataC ={
    "id": 1,
    "name": "模拟流程",
    "jobType": "",
    "jobName": "",
    "jobDescription": "",
    "jobVersion": "",
    "triggerWay": "",
    "startTime": "",
    "endTime": "",
    "jobState": "",
    "createBy": "",
    "approvalTime": "",
    "nodeList": [
        {
            "id": "20201030144957l51q6hhcmf",
            "caption": "开始",
            "nodeTypeID": "NID_START",
            "info": "条件控件根据所配置条件的计算结果，决定下一个执行的节点",
            "left": "720px",
            "top": "90px",
            "controlState": "success",
            "image": "start.png",
            "viewOnly": true,
            "Output"://输出端点定义
            {
                "pinDistance": 0, //多个输出端点间的间距，单位px
                "flexOutput": false, //是否允许动态数量的输出端点
                "fixedOutput": [ //固定的输出端点集合，前端根据数组长度来渲染端点个数，可附加端点描述信息
                    {
                        "label": "是", //端点描述
                        "pinName": "PIN_TRUE",
                        "anchor":"BottomCenter"
                    }
                ]
            },
            "parameters": [
                {
                    "title": "任务名称",
                    "type": "PTYPE_INPUT",
                    "defaultValue": "开始",
                    "tips": "任务名称用于描述任务主要功能,并与其他任务进行区分"
                },
                {
                    "title": "任务ID",
                    "type": "PTYPE_LABEL",
                    "defaultValue": "CONSTANT_START",
                    "tips": "任务ID用来唯一标识此任务"
                },
                {
                    "title": "任务触发方式",
                    "type": "PTYPE_SELECTGROUP",
                    "defaultValue": 0,
                    "values": [
                        {
                            "value": 0,
                            "label": "人群定时触发",
                            "type": "PTYPE_OLNYSHOW",
                            "children": {
                                "title": "触发人群",
                                "type": "PTYPE_CROWD",
                                "defaultValue": 1,
                                "values": [
                                    {
                                        "title": "复购-泰康百万医疗险",
                                        "ID": "f4asdsa87f9daasd76",
                                        "validity": "2020-10-12 12:00:00",
                                        "creator": "mark",
                                        "creationTime": "2020-12-29"
                                    },
                                    {
                                        "title": "复购-泰康二百万医疗险",
                                        "ID": "dsadasddadsadsadd",
                                        "validity": "2020-19-123 17:34:22",
                                        "creator": "jack",
                                        "creationTime": "2020-04-11"
                                    }
                                ],
                                "triggeringTime": "13:00",
                                "triggerCycle": {
                                    "frequency": "每月",
                                    "time": "2020-02-02"
                                },
                                "selectedList": []
                            }
                        },
                        {
                            "value": 1,
                            "label": "用户行为触发",
                            "type": "PTYPE_BEHAVIOR",
                            "children": {
                                "title": "触发行为",
                                "type": "PTYPE_BEHAVIOR",
                                "defaultValue": 0,
                                "values": [
                                    {
                                        "title": "MALL_ADD_CART_BUTTON",
                                        "rules": [
                                            {
                                                "r1": "是否自营",
                                                "r2": "自营"
                                            },
                                            {
                                                "r1": "加购商品sku白名单",
                                                "r2": "奶粉.txt"
                                            },
                                            {
                                                "r1": "加购商品价格",
                                                "r2": ">=",
                                                "r3": "199"
                                            },
                                            {
                                                "r1": "加购商品数量",
                                                "r2": ">=",
                                                "r3": "3"
                                            }
                                        ]
                                    },
                                    {
                                        "title": "MALL_IOU_BLACK_GOLD",
                                        "rules": [
                                            {
                                                "r1": "",
                                                "r2": "",
                                                "r3": ""
                                            }
                                        ]
                                    },
                                    {
                                        "title": "MALL_COFFERS_INNER",
                                        "rules": [
                                            {
                                                "r1": "",
                                                "r2": "",
                                                "r3": ""
                                            }
                                        ]
                                    },
                                    {
                                        "title": "MALL_INDEX_DISCOUNT_ICON",
                                        "rules": [
                                            {
                                                "r1": "",
                                                "r2": "",
                                                "r3": ""
                                            }
                                        ]
                                    },
                                    {
                                        "title": "MALL_INDEX_COUPON_ICON",
                                        "rules": [
                                            {
                                                "r1": "当天点击次数",
                                                "r2": "=",
                                                "r3": "3"
                                            }
                                        ]
                                    }
                                ],
                                "tips": "………………",
                                "showInEditor": true,
                                "selectedList": []
                            }
                        }
                    ],
                    "tips": "任务触发条件决定该任务再何种情况下开始执行。",
                    "showInEditor": true
                },
                {
                    "title": "触发时间",
                    "type": "PTYPE_TIMELIST",
                    "defaultValue": "",
                    "tips": "任务名称用于描述任务主要功能,并与其他任务进行区分"
                },
                {
                    "title": "触发周期",
                    "type": "PTYPE_SELECT",
                    "defaultValue": 0,
                    "values": [
                        {
                            "value": 0,
                            "label": "每天"
                        },
                        {
                            "value": 1,
                            "label": "每月"
                        },
                        {
                            "value": 2,
                            "label": "每小时"
                        }
                    ],
                    "tips": "任务名称用于描述任务主要功能,并与其他任务进行区分",
                    "selectedList": ""
                }
            ]
        },
      
    ],
    "lineList": [
    ]
}
export function getDataC() {
    return dataC
}



