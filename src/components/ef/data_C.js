var dataC = {
    "jobId": "",
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
    "delivery": "",
    "taskObject": [],
    "nodeList": [
        {
            "id": "9661",
            "caption": "开始",
            "nodeTypeID": "NID_START",
            "info": "条件控件根据所配置条件的计算结果，决定下一个执行的节点",
            "left": "675px",
            "top": "60px",
            "controlState": "success",
            "image": "start.png",
            "output": {
                "pinDistance": 0,
                "flexOutput": false,
                "fixedOutput": [
                    {
                        "label": "",
                        "pinName": "",
                        "anchor": "BottomCenter"
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
            "id": "7639",
            "caption": "条件分支",
            "nodeTypeID": "NID_CONDITION",
            "info": "用来判断是否满足某个或者某一组条件",
            "left": "622px",
            "top": "223px",
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
                        "id": "2160-1604650276396"
                    },
                    {
                        "label": "否",
                        "pinName": "PIN_FALSE",
                        "anchor": "BottomRight",
                        "id": "5672-1604650276396"
                    }
                ]
            },
            "parameters": [
                {
                    "title": "条件控件ID",
                    "type": "PTYPE_LABEL",
                    "defaultValue": "CONSTANT_TASK",
                    "tips": "任务ID用来唯一标识此任务"
                },
                {
                    "title": "任务名称",
                    "type": "PTYPE_TEXT",
                    "defaultValue": "条件",
                    "tips": "任务名称用于描述任务主要功能"
                },
                {
                    "title": "条件缩略图",
                    "type": "PTYPE_CONDITION_DETAILS",
                    "defaultValue": "条件",
                    "tips": "任务名称用于描述任务主要功能",
                    "details": [
                        {
                            "title": "离线标签",
                            "children": [
                                {
                                    "label": "用户基本信息",
                                    "value": 0,
                                    "children": [
                                        {
                                            "id": 1,
                                            "label": "一级 1",
                                            "children": [
                                                {
                                                    "id": 4,
                                                    "label": "二级 1-1",
                                                    "children": [
                                                        {
                                                            "id": 9,
                                                            "label": "三级 1-1-1",
                                                            "tips": "包含交易当天申购到账，**********************",
                                                            "operator": "",
                                                            "value": "",
                                                            "valueType": "string"
                                                        },
                                                        {
                                                            "id": 10,
                                                            "label": "三级 1-1-2",
                                                            "tips": "包含交易当天申购到账，**********************",
                                                            "operator": "",
                                                            "value": "",
                                                            "valueType": "intger"
                                                        },
                                                        {
                                                            "id": 10,
                                                            "label": "三级 1-1-2",
                                                            "tips": "包含交易当天申购到账，**********************",
                                                            "operator": "",
                                                            "value": "",
                                                            "valueType": "boolean"
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "id": 2,
                                            "label": "一级 2",
                                            "children": [
                                                {
                                                    "id": 5,
                                                    "label": "二级 2-1"
                                                },
                                                {
                                                    "id": 6,
                                                    "label": "二级 2-2"
                                                }
                                            ]
                                        },
                                        {
                                            "id": 3,
                                            "label": "一级 3",
                                            "children": [
                                                {
                                                    "id": 7,
                                                    "label": "二级 3-1"
                                                },
                                                {
                                                    "id": 8,
                                                    "label": "二级 3-2"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "title": "实时标签",
                            "children": []
                        }
                    ],
                    "data": {
                        "id": 0,
                        "label": "且",
                        "swtich": "myred",
                        "children": [
                            {
                                "id": 2,
                                "label": "或",
                                "swtich": "myred",
                                "children": [
                                    {
                                        "id": 5,
                                        "label": "性别=男",
                                        "operator": "=",
                                        "value": "性别,男"
                                    },
                                    {
                                        "id": 6,
                                        "label": "账龄>=(30,90)",
                                        "operator": ">=",
                                        "value": "账龄,(30,90)"
                                    }
                                ]
                            },
                            {
                                "id": 3,
                                "label": "且",
                                "swtich": "myred",
                                "children": [
                                    {
                                        "id": 7,
                                        "label": "是否实名，已实名",
                                        "operator": "",
                                        "value": ""
                                    },
                                    {
                                        "id": 8,
                                        "label": "",
                                        "swtich": false,
                                        "operator": "",
                                        "value": ""
                                    }
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        {
            "id": "3091",
            "caption": "等待",
            "nodeTypeID": "NID_WAIT",
            "info": "执行挂起，等待一定时间后执行",
            "left": "501px",
            "top": "383px",
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
                        "id": "9461-1604650279937"
                    },
                    {
                        "label": "失败",
                        "pinName": "PIN_FALSE",
                        "anchor": "BottomRight",
                        "id": "6556-1604650279937"
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
                    "time": []
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
            "id": "0602",
            "caption": "推荐",
            "nodeTypeID": "NID_RECOMMENT",
            "info": "推荐任务",
            "left": "731px",
            "top": "462px",
            "controlState": "success",
            "image": "推荐.png",
            "output": {
                "pinDistance": 100,
                "flexOutput": false,
                "fixedOutput": [
                    {
                        "label": "成功",
                        "pinName": "PIN_TRUE",
                        "anchor": "BottomLeft",
                        "id": "9601-1604650283400"
                    },
                    {
                        "label": "失败",
                        "pinName": "PIN_FALSE",
                        "anchor": "BottomRight",
                        "id": "3794-1604650283400"
                    }
                ]
            },
            "parameters": [
                {
                    "title": "任务ID",
                    "type": "PTYPE_LABEL",
                    "defaultValue": "CONSTANT_RECOMMENT",
                    "tips": "任务ID用来唯一标识此任务"
                },
                {
                    "title": "任务名称",
                    "type": "PTYPE_TEXT",
                    "defaultValue": "推荐",
                    "tips": "任务名称用于描述任务主要功能"
                },
                {
                    "title": "任务触发设置",
                    "type": "PTYPE_GROUP",
                    "defaultValue": "0",
                    "tips": "",
                    "children": [
                        {
                            "title": "任务名称",
                            "type": "PTYPE_TEXT",
                            "defaultValue": "条件",
                            "tips": "任务名称用于描述任务主要功能"
                        },
                        {
                            "title": "任务ID",
                            "type": "PTYPE_LABEL",
                            "defaultValue": "CONSTANT_TASKID",
                            "tips": "任务ID用来唯一标识此任务"
                        },
                        {
                            "title": "任务触发条件",
                            "type": "PTYPE_SELECT",
                            "defaultValue": "定时定向",
                            "values": [
                                "定时定向",
                                "用户行为触发"
                            ],
                            "tips": "任务触发条件决定该任务再何种情况下开始执行。",
                            "showInEditor": true
                        }
                    ]
                },
                {
                    "title": "任务触发条件",
                    "type": "PTYPE_SELECT",
                    "defaultValue": "0",
                    "values": [
                        "定时定向",
                        "用户行为触发"
                    ],
                    "tips": "………………",
                    "showInEditor": true
                }
            ]
        },
        {
            "id": "7519",
            "caption": "推荐",
            "nodeTypeID": "NID_RECOMMENT",
            "info": "推荐任务",
            "left": "135px",
            "top": "270px",
            "controlState": "success",
            "image": "推荐.png",
            "output": {
                "pinDistance": 100,
                "flexOutput": false,
                "fixedOutput": [
                    {
                        "label": "成功",
                        "pinName": "PIN_TRUE",
                        "anchor": "BottomLeft",
                        "id": "1609-1604655191693"
                    },
                    {
                        "label": "失败",
                        "pinName": "PIN_FALSE",
                        "anchor": "BottomRight",
                        "id": "5917-1604655191693"
                    }
                ]
            },
            "parameters": [
                {
                    "title": "任务ID",
                    "type": "PTYPE_LABEL",
                    "defaultValue": "CONSTANT_RECOMMENT",
                    "tips": "任务ID用来唯一标识此任务"
                },
                {
                    "title": "任务名称",
                    "type": "PTYPE_TEXT",
                    "defaultValue": "推荐",
                    "tips": "任务名称用于描述任务主要功能"
                },
                {
                    "title": "任务触发设置",
                    "type": "PTYPE_GROUP",
                    "defaultValue": "0",
                    "tips": "",
                    "children": [
                        {
                            "title": "任务名称",
                            "type": "PTYPE_TEXT",
                            "defaultValue": "条件",
                            "tips": "任务名称用于描述任务主要功能"
                        },
                        {
                            "title": "任务ID",
                            "type": "PTYPE_LABEL",
                            "defaultValue": "CONSTANT_TASKID",
                            "tips": "任务ID用来唯一标识此任务"
                        },
                        {
                            "title": "任务触发条件",
                            "type": "PTYPE_SELECT",
                            "defaultValue": "定时定向",
                            "values": [
                                "定时定向",
                                "用户行为触发"
                            ],
                            "tips": "任务触发条件决定该任务再何种情况下开始执行。",
                            "showInEditor": true
                        }
                    ]
                },
                {
                    "title": "任务触发条件",
                    "type": "PTYPE_SELECT",
                    "defaultValue": "0",
                    "values": [
                        "定时定向",
                        "用户行为触发"
                    ],
                    "tips": "………………",
                    "showInEditor": true
                }
            ]
        }
    ],
    "lineList": [
        {
            "from": "9661",
            "to": "7639",
            "pinName": "jtk-endpoint-anchor"
        },
        {
            "from": "7639",
            "to": "3091",
            "pinName": "PIN_TRUE"
        },
        {
            "from": "7639",
            "to": "0602",
            "pinName": "PIN_FALSE"
        },
        {
            "from": "3091",
            "to": "7519",
            "pinName": "PIN_TRUE"
        }
    ]
}
export function getDataC() {
    return dataC
}



