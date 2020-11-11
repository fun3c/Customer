var checkdata ={
    "jobId": "0677",
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
            "id": "0677_0",
            "caption": "开始",
            "nodeTypeID": "NID_START",
            "info": "条件控件根据所配置条件的计算结果，决定下一个执行的节点",
            "left": "675px",
            "top": "60px",
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
            "id": "0677_2",
            "caption": "A/B实验",
            "nodeTypeID": "NID_A/B",
            "info": "按照不同百分比分流",
            "left": "675px",
            "top": "180px",
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
                        "id": "0677_5-1605083462001"
                    },
                    {
                        "label": "实验",
                        "pinName": "1",
                        "anchor": "BottomRight",
                        "id": "0677_5-1605083462001"
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
            "id": "0677_3",
            "caption": "条件分支",
            "nodeTypeID": "NID_CONDITION",
            "info": "用来判断是否满足某个或者某一组条件",
            "left": "510px",
            "top": "285px",
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
                        "id": "0677_4-1605083436711"
                    },
                    {
                        "label": "否",
                        "pinName": "PIN_FALSE",
                        "anchor": "BottomRight",
                        "id": "0677_4-1605083436711"
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
            "id": "0677_4",
            "caption": "条件分支",
            "nodeTypeID": "NID_CONDITION",
            "info": "用来判断是否满足某个或者某一组条件",
            "left": "645px",
            "top": "390px",
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
                        "id": "0677_4-1605083436711"
                    },
                    {
                        "label": "否",
                        "pinName": "PIN_FALSE",
                        "anchor": "BottomRight",
                        "id": "0677_4-1605083436711"
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
            "id": "0677_5",
            "caption": "A/B实验",
            "nodeTypeID": "NID_A/B",
            "info": "按照不同百分比分流",
            "left": "915px",
            "top": "300px",
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
                        "id": "0677_5-1605083462001"
                    },
                    {
                        "label": "实验",
                        "pinName": "1",
                        "anchor": "BottomRight",
                        "id": "0677_5-1605083462001"
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
            "id": "0677_6",
            "caption": "结束",
            "nodeTypeID": "NID_END",
            "info": "结束流程",
            "left": "360px",
            "top": "420px",
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
            "id": "0677_7",
            "caption": "结束",
            "nodeTypeID": "NID_END",
            "info": "结束流程",
            "left": "525px",
            "top": "495px",
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
            "id": "0677_8",
            "caption": "结束",
            "nodeTypeID": "NID_END",
            "info": "结束流程",
            "left": "765px",
            "top": "495px",
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
            "id": "0677_9",
            "caption": "结束",
            "nodeTypeID": "NID_END",
            "info": "结束流程",
            "left": "795px",
            "top": "405px",
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
            "id": "0677_10",
            "caption": "结束",
            "nodeTypeID": "NID_END",
            "info": "结束流程",
            "left": "1035px",
            "top": "405px",
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
            "from": "0677_0",
            "to": "0677_2",
            "pinName": "jtk-endpoint-anchor",
            "from_uuid": "",
            "to_uuid": ""
        },
        {
            "from": "0677_2",
            "to": "0677_3",
            "pinName": "0",
            "from_uuid": "",
            "to_uuid": ""
        },
        {
            "from": "0677_3",
            "to": "0677_4",
            "pinName": "PIN_FALSE",
            "from_uuid": "",
            "to_uuid": ""
        },
        {
            "from": "0677_2",
            "to": "0677_5",
            "pinName": "1",
            "from_uuid": "",
            "to_uuid": ""
        },
        {
            "from": "0677_3",
            "to": "0677_6",
            "pinName": "PIN_TRUE",
            "from_uuid": "",
            "to_uuid": ""
        },
        {
            "from": "0677_4",
            "to": "0677_8",
            "pinName": "PIN_FALSE",
            "from_uuid": "",
            "to_uuid": ""
        },
        {
            "from": "0677_4",
            "to": "0677_7",
            "pinName": "PIN_TRUE",
            "from_uuid": "",
            "to_uuid": ""
        },
        {
            "from": "0677_5",
            "to": "0677_9",
            "pinName": "0",
            "from_uuid": "",
            "to_uuid": ""
        },
        {
            "from": "0677_5",
            "to": "0677_10",
            "pinName": "1",
            "from_uuid": "",
            "to_uuid": ""
        }
    ]
}
export function getCheckdata() {
    return checkdata
}





