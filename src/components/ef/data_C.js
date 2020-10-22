var dataC = {
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
            "id": "rsb99gu3fy",
            "caption": "开始",
            "nodeTypeID": "NID_START",
            "info": "条件控件根据所配置条件的计算结果，决定下一个执行的节点",
            "left": "510px",
            "top": "90px",
            "controlState": "success",
            "image": "start.png",
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
                            "label": "定时定向",
                            "children": {
                                "title": "触发人群",
                                "type": "PTYPE_CROWD ",
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
                                        "ID": "f4asdsa87f9daasd76",
                                        "validity": "2020-10-12 12:00:00",
                                        "creator": "mark",
                                        "creationTime": "2020-12-29"
                                    }
                                ],
                                "triggeringTime": "13:00",
                                "triggerCycle": {
                                    "frequency": "每月",
                                    "time": "2020-02-02"
                                }
                            }
                        },
                        {
                            "value": 1,
                            "label": "用户行为触发",
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
                                "showInEditor": true
                            }
                        }
                    ],
                    "tips": "任务触发条件决定该任务再何种情况下开始执行。",
                    "showInEditor": true
                },
                {
                    "title": "任务触发行为",
                    "type": "PTYPE_SELECT",
                    "defaultValue": "MALL_ADD_CART_BUTTON",
                    "values": [
                        "MALL_ADD_CART_BUTTON",
                        "AALL_ADD_CART_BUTTON"
                    ],
                    "tips": "任务触发条件决定该任务再何种情况下开始执行。",
                    "showInEditor": true
                }
            ]
        },
        {
            "id": "2z9ea8ceum",
            "caption": "条件分支",
            "nodeTypeID": "NID_CONDITION",
            "info": "用来判断是否满足某个或者某一组条件",
            "left": "510px",
            "top": "255px",
            "controlState": "success",
            "image": "条件分支.png",
            "parameters": [
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
                },
                {
                    "title": "任务重入",
                    "type": "PTYPE_SWITCH",
                    "defaultValue": false,
                    "tips": "任务ID用来唯一标识此任务"
                },
                {
                    "title": "任务频控",
                    "type": "PTYPE_SWITCH",
                    "defaultValue": false,
                    "tips": "任务ID用来唯一标识此任务"
                }
            ]
        },
        {
            "id": "6ft0y346kf",
            "caption": "结束",
            "nodeTypeID": "NID_END",
            "info": "结束流程",
            "left": "435px",
            "top": "450px",
            "controlState": "success",
            "image": "stop.png",
            "parameters": [
                {
                    "title": "任务ID",
                    "type": "PTYPE_LABEL",
                    "defaultValue": "CONSTANT_TASKID",
                    "tips": "任务ID用来唯一标识此任务"
                },
                {
                    "title": "任务名称",
                    "type": "PTYPE_TEXT",
                    "defaultValue": "开始",
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
            "id": "sbh03ljrqg",
            "caption": "短信",
            "nodeTypeID": "NID_NOTE",
            "info": "向目标发送短信",
            "left": "690px",
            "top": "390px",
            "controlState": "success",
            "image": "短信.png",
            "parameters": [
                {
                    "title": "任务ID",
                    "type": "PTYPE_LABEL",
                    "defaultValue": "CONSTANT_TASKID",
                    "tips": "任务ID用来唯一标识此任务"
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
                    "title": "任务名称",
                    "type": "PTYPE_TEXT",
                    "defaultValue": "开始",
                    "tips": "任务名称用于描述任务主要功能"
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
            "id": "mxt562mgav",
            "caption": "结束",
            "nodeTypeID": "NID_END",
            "info": "结束流程",
            "left": "615px",
            "top": "555px",
            "controlState": "success",
            "image": "stop.png",
            "parameters": [
                {
                    "title": "任务ID",
                    "type": "PTYPE_LABEL",
                    "defaultValue": "CONSTANT_TASKID",
                    "tips": "任务ID用来唯一标识此任务"
                },
                {
                    "title": "任务名称",
                    "type": "PTYPE_TEXT",
                    "defaultValue": "开始",
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
            "id": "o35o6oszq9",
            "caption": "推荐",
            "nodeTypeID": "NID_RECOMMENT",
            "info": "推荐任务",
            "left": "900px",
            "top": "540px",
            "controlState": "success",
            "image": "推荐.png",
            "parameters": [
                {
                    "title": "任务ID",
                    "type": "PTYPE_LABEL",
                    "defaultValue": "CONSTANT_TASKID",
                    "tips": "任务ID用来唯一标识此任务"
                },
                {
                    "title": "任务名称",
                    "type": "PTYPE_TEXT",
                    "defaultValue": "开始",
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
            "id": "7lcgbdqt0a",
            "caption": "结束",
            "nodeTypeID": "NID_END",
            "info": "结束流程",
            "left": "825px",
            "top": "690px",
            "controlState": "success",
            "image": "stop.png",
            "parameters": [
                {
                    "title": "任务ID",
                    "type": "PTYPE_LABEL",
                    "defaultValue": "CONSTANT_TASKID",
                    "tips": "任务ID用来唯一标识此任务"
                },
                {
                    "title": "任务名称",
                    "type": "PTYPE_TEXT",
                    "defaultValue": "开始",
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
            "id": "o08w3c2udg",
            "caption": "结束",
            "nodeTypeID": "NID_END",
            "info": "结束流程",
            "left": "975px",
            "top": "720px",
            "controlState": "success",
            "image": "stop.png",
            "parameters": [
                {
                    "title": "任务ID",
                    "type": "PTYPE_LABEL",
                    "defaultValue": "CONSTANT_TASKID",
                    "tips": "任务ID用来唯一标识此任务"
                },
                {
                    "title": "任务名称",
                    "type": "PTYPE_TEXT",
                    "defaultValue": "开始",
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
        }
    ],
    "lineList": [
        {
            "from": "rsb99gu3fy",
            "to": "2z9ea8ceum"
        },
        {
            "from": "2z9ea8ceum",
            "to": "6ft0y346kf"
        },
        {
            "from": "2z9ea8ceum",
            "to": "sbh03ljrqg"
        },
        {
            "from": "sbh03ljrqg",
            "to": "o35o6oszq9"
        },
        {
            "from": "sbh03ljrqg",
            "to": "mxt562mgav"
        },
        {
            "from": "o35o6oszq9",
            "to": "o08w3c2udg"
        },
        {
            "from": "o35o6oszq9",
            "to": "7lcgbdqt0a"
        }
    ]
}

export function getDataC() {
    return dataC
}
