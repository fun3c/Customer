var checkdata ={
    "jobId": "0615",
    "jobType": "",
    "jobName": "",
    "jobDescription": "",
    "jobVersion": "",
    "triggerWay": "",
    "startTime": "",
    "endTime": "",
    "jobState": "",
    "createBy": "ADMIN",
    "approvalTime": "",
    "delivery": false,
    "taskObject": [],
    "nodeList": [
        {
            "id": "0615_0",
            "caption": "开始",
            "nodeTypeID": "NID_START",
            "info": "条件控件根据所配置条件的计算结果，决定下一个执行的节点",
            "left": "696px",
            "top": "105px",
            "controlState": "success",
            "image": "start.png",
            "viewOnly": true,
            "output": {
                "pinDistance": 0,
                "flexOutput": false,
                "fixedOutput": [
                    {
                        "label": "",
                        "pinName": "jtk-endpoint-anchor",
                        "anchor": "BottomCenter"
                    }
                ]
            },
            "parameters": [
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
                                "defaultValue": "",
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
                            "label": "单次"
                        },
                        {
                            "value": 1,
                            "label": "每天"
                        },
                        {
                            "value": 2,
                            "label": "每月"
                        },
                        {
                            "value": 3,
                            "label": "每周"
                        }
                    ],
                    "tips": "任务名称用于描述任务主要功能,并与其他任务进行区分",
                    "selectedList": ""
                }
            ]
        },
        {
            "id": "0615_1",
            "caption": "A/B实验",
            "nodeTypeID": "NID_A/B",
            "info": "按照不同百分比分流",
            "left": "945px",
            "top": "480px",
            "controlState": "success",
            "image": "AB测试.png",
            "output": {
                "pinDistance": 100,
                "flexOutput": false,
                "fixedOutput": [
                    {
                        "label": "对照",
                        "pinName": "0",
                        "anchor": "BottomLeft",
                        "id": "0615_2-1605063520470"
                    },
                    {
                        "label": "实验",
                        "pinName": "1",
                        "anchor": "BottomRight",
                        "id": "0615_3-1605063520470"
                    }
                ]
            },
            "parameters": [
                {
                    "defaultValue": 0,
                    "shuntWay": [
                        {
                            "value": 0,
                            "label": "按首次随机分流"
                        },
                        {
                            "value": 1,
                            "label": "按天随机分流"
                        },
                        {
                            "value": 2,
                            "label": "完全随机分流"
                        }
                    ],
                    "period": "",
                    "groups": [
                        {
                            "id": "0",
                            "name": "对照组",
                            "num": 50
                        },
                        {
                            "id": "1",
                            "name": "实验组",
                            "num": 50
                        }
                    ]
                }
            ]
        },
        {
            "id": "0615_6",
            "caption": "条件分支",
            "nodeTypeID": "NID_CONDITION",
            "info": "用来判断是否满足某个或者某一组条件",
            "left": "540px",
            "top": "255px",
            "controlState": "success",
            "image": "条件分支.png",
            "output": {
                "pinDistance": 100,
                "flexOutput": false,
                "fixedOutput": [
                    {
                        "label": "是",
                        "pinName": "PIN_TRUE",
                        "anchor": "BottomLeft",
                        "id": "0615_20-1605063546635"
                    },
                    {
                        "label": "否",
                        "pinName": "PIN_FALSE",
                        "anchor": "BottomRight",
                        "id": "0615_21-1605063546635"
                    }
                ]
            },
            "parameters": [
                {
                    "title": "条件缩略图",
                    "type": "PTYPE_CONDITION_DETAILS",
                    "defaultValue": "条件",
                    "tips": "任务名称用于描述任务主要功能",
                    "data": {
                        "id": 0,
                        "label": "条件",
                        "relation": "AND",
                        "swtich": "myred",
                        "children": [
                            {
                                "id": 5,
                                "label": "",
                                "labelNo": "",
                                "dataNo": "",
                                "dataValue": "",
                                "operatorNo": "",
                                "operatorValue": "",
                                "operatorInfo": "",
                                "labelInfo": "",
                                "expand": true
                            }
                        ],
                        "expand": true
                    }
                }
            ]
        },
        {
            "id": "0615_11",
            "caption": "等待",
            "nodeTypeID": "NID_WAIT",
            "info": "执行挂起，等待一定时间后执行",
            "left": "420px",
            "top": "375px",
            "controlState": "success",
            "image": "wait.png",
            "output": {
                "pinDistance": 100,
                "flexOutput": false,
                "fixedOutput": [
                    {
                        "label": "成功",
                        "pinName": "PIN_TRUE",
                        "anchor": "BottomLeft",
                        "id": "0615_12-1605063526149"
                    },
                    {
                        "label": "失败",
                        "pinName": "PIN_FALSE",
                        "anchor": "BottomRight",
                        "id": "0615_13-1605063526149"
                    }
                ]
            },
            "parameters": [
                {
                    "title": "任务名称",
                    "type": "PTYPE_TEXT",
                    "defaultValue": "等待",
                    "tips": "任务名称用于描述任务主要功能"
                },
                {
                    "title": "触发周期",
                    "type": "PTYPE_SELECT",
                    "defaultValue": 0,
                    "values": [
                        {
                            "value": 0,
                            "label": "等待一段时间",
                            "tips": " 等待至具体的某个时间点：'yyyy-MM-dd HH:mm:ss'"
                        },
                        {
                            "value": 1,
                            "label": "等待至具体的某个时间点",
                            "tips": "● 等待一段时间：' HH:mm:ss'"
                        },
                        {
                            "value": 2,
                            "label": "等待至...",
                            "tips": "等待至：第N天的' HH:mm:ss'"
                        }
                    ],
                    "tips": "任务名称用于描述任务主要功能,并与其他任务进行区分",
                    "stretch": "",
                    "selectedList": "",
                    "dayTime": ""
                },
                {
                    "title": "行为事件规则",
                    "type": "PTYPE_MULTISELECT",
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
            ]
        },
        {
            "id": "0615_17",
            "caption": "结束",
            "nodeTypeID": "NID_END",
            "info": "结束流程",
            "left": "285px",
            "top": "510px",
            "controlState": "success",
            "image": "stop.png",
            "output": {
                "pinDistance": 0,
                "flexOutput": false,
                "fixedOutput": []
            },
            "parameters": [
                {
                    "title": "任务名称",
                    "type": "PTYPE_TEXT",
                    "defaultValue": "结束",
                    "tips": "任务名称用于描述任务主要功能"
                }
            ]
        },
        {
            "id": "0615_18",
            "caption": "结束",
            "nodeTypeID": "NID_END",
            "info": "结束流程",
            "left": "570px",
            "top": "510px",
            "controlState": "success",
            "image": "stop.png",
            "output": {
                "pinDistance": 0,
                "flexOutput": false,
                "fixedOutput": []
            },
            "parameters": [
                {
                    "title": "任务名称",
                    "type": "PTYPE_TEXT",
                    "defaultValue": "结束",
                    "tips": "任务名称用于描述任务主要功能"
                }
            ]
        },
        {
            "id": "0615_19",
            "caption": "条件分支",
            "nodeTypeID": "NID_CONDITION",
            "info": "用来判断是否满足某个或者某一组条件",
            "left": "795px",
            "top": "375px",
            "controlState": "success",
            "image": "条件分支.png",
            "output": {
                "pinDistance": 100,
                "flexOutput": false,
                "fixedOutput": [
                    {
                        "label": "是",
                        "pinName": "PIN_TRUE",
                        "anchor": "BottomLeft",
                        "id": "0615_20-1605063546635"
                    },
                    {
                        "label": "否",
                        "pinName": "PIN_FALSE",
                        "anchor": "BottomRight",
                        "id": "0615_21-1605063546635"
                    }
                ]
            },
            "parameters": [
                {
                    "title": "条件缩略图",
                    "type": "PTYPE_CONDITION_DETAILS",
                    "defaultValue": "条件",
                    "tips": "任务名称用于描述任务主要功能",
                    "data": {
                        "id": 0,
                        "label": "条件",
                        "relation": "AND",
                        "swtich": "myred",
                        "children": [
                            {
                                "id": 5,
                                "label": "",
                                "labelNo": "",
                                "dataNo": "",
                                "dataValue": "",
                                "operatorNo": "",
                                "operatorValue": "",
                                "operatorInfo": "",
                                "labelInfo": "",
                                "expand": true
                            }
                        ],
                        "expand": true
                    }
                }
            ]
        },
        {
            "id": "0615_24",
            "caption": "结束",
            "nodeTypeID": "NID_END",
            "info": "结束流程",
            "left": "675px",
            "top": "510px",
            "controlState": "success",
            "image": "stop.png",
            "output": {
                "pinDistance": 0,
                "flexOutput": false,
                "fixedOutput": []
            },
            "parameters": [
                {
                    "title": "任务名称",
                    "type": "PTYPE_TEXT",
                    "defaultValue": "结束",
                    "tips": "任务名称用于描述任务主要功能"
                }
            ]
        },
        {
            "id": "0615_25",
            "caption": "短信",
            "nodeTypeID": "NID_NOTE",
            "info": "向目标发送短信",
            "left": "843px",
            "top": "597px",
            "controlState": "success",
            "image": "短信.png",
            "output": {
                "pinDistance": 100,
                "flexOutput": false,
                "fixedOutput": [
                    {
                        "label": "成功",
                        "pinName": "PIN_TRUE",
                        "anchor": "BottomLeft",
                        "id": "0615_26-1605063575904"
                    },
                    {
                        "label": "失败",
                        "pinName": "PIN_FALSE",
                        "anchor": "BottomRight",
                        "id": "0615_27-1605063575904"
                    }
                ]
            },
            "parameters": [
                {
                    "status": true,
                    "type": "NOTE_TEMPLATE",
                    "id": "1123",
                    "iphone": "13838431234"
                }
            ]
        },
        {
            "id": "0615_30",
            "caption": "结束",
            "nodeTypeID": "NID_END",
            "info": "结束流程",
            "left": "690px",
            "top": "705px",
            "controlState": "success",
            "image": "stop.png",
            "output": {
                "pinDistance": 0,
                "flexOutput": false,
                "fixedOutput": []
            },
            "parameters": [
                {
                    "title": "任务名称",
                    "type": "PTYPE_TEXT",
                    "defaultValue": "结束",
                    "tips": "任务名称用于描述任务主要功能"
                }
            ]
        },
        {
            "id": "0615_31",
            "caption": "结束",
            "nodeTypeID": "NID_END",
            "info": "结束流程",
            "left": "975px",
            "top": "705px",
            "controlState": "success",
            "image": "stop.png",
            "output": {
                "pinDistance": 0,
                "flexOutput": false,
                "fixedOutput": []
            },
            "parameters": [
                {
                    "title": "任务名称",
                    "type": "PTYPE_TEXT",
                    "defaultValue": "结束",
                    "tips": "任务名称用于描述任务主要功能"
                }
            ]
        },
        {
            "id": "0615_32",
            "caption": "结束",
            "nodeTypeID": "NID_END",
            "info": "结束流程",
            "left": "1050px",
            "top": "584px",
            "controlState": "success",
            "image": "stop.png",
            "output": {
                "pinDistance": 0,
                "flexOutput": false,
                "fixedOutput": []
            },
            "parameters": [
                {
                    "title": "任务名称",
                    "type": "PTYPE_TEXT",
                    "defaultValue": "结束",
                    "tips": "任务名称用于描述任务主要功能"
                }
            ]
        }
    ],
    "lineList": [
        {
            "from": "0615_0",
            "to": "0615_6",
            "pinName": "jtk-endpoint-anchor",
            "from_uuid": "",
            "to_uuid": ""
        },
        {
            "from": "0615_6",
            "to": "0615_11",
            "pinName": "PIN_TRUE",
            "from_uuid": "",
            "to_uuid": ""
        },
        {
            "from": "0615_11",
            "to": "0615_17",
            "pinName": "PIN_TRUE",
            "from_uuid": "",
            "to_uuid": ""
        },
        {
            "from": "0615_11",
            "to": "0615_18",
            "pinName": "PIN_FALSE",
            "from_uuid": "",
            "to_uuid": ""
        },
        {
            "from": "0615_6",
            "to": "0615_19",
            "pinName": "PIN_FALSE",
            "from_uuid": "",
            "to_uuid": ""
        },
        {
            "from": "0615_19",
            "to": "0615_1",
            "pinName": "PIN_FALSE",
            "from_uuid": "",
            "to_uuid": ""
        },
        {
            "from": "0615_19",
            "to": "0615_24",
            "pinName": "PIN_TRUE",
            "from_uuid": "",
            "to_uuid": ""
        },
        {
            "from": "0615_1",
            "to": "0615_25",
            "pinName": "0",
            "from_uuid": "",
            "to_uuid": ""
        },
        {
            "from": "0615_25",
            "to": "0615_30",
            "pinName": "PIN_TRUE",
            "from_uuid": "",
            "to_uuid": ""
        },
        {
            "from": "0615_25",
            "to": "0615_31",
            "pinName": "PIN_FALSE",
            "from_uuid": "",
            "to_uuid": ""
        },
        {
            "from": "0615_1",
            "to": "0615_32",
            "pinName": "1",
            "from_uuid": "",
            "to_uuid": ""
        }
    ]
}
export function getCheckdata() {
    return checkdata
}





