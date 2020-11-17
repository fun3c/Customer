var checkdata ={
<<<<<<< HEAD
	"jobId": "1158",
	"jobType": "0a",
	"jobName": "aaa",
	"jobDescription": "",
	"jobVersion": "",
	"triggerWay": "",
	"startTime": "2020-11-19 15:17:17",
	"endTime": "2020-12-22 00:00:00",
	"jobState": "",
	"createBy": "ADMIN",
	"approvalTime": "",
	"delivery": false,
	"taskObject": [
		"c00"
	],
	"nodeList": [
		{
			"id": "1158_0",
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
						"anchor": "BottomCenter",
						"id": "6003dfc8-e7d2-478e-b7f3-dd9c7e9d4a15"
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
			"id": "1158_2",
			"caption": "条件分支",
			"nodeTypeID": "NID_CONDITION",
			"info": "用来判断是否满足某个或者某一组条件",
			"left": "257px",
			"top": "166px",
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
						"id": "40e70505-1821-499e-9fdb-81936c6192f7"
					},
					{
						"label": "否",
						"pinName": "PIN_FALSE",
						"anchor": "BottomRight",
						"id": "8f1e5490-94db-422d-8725-e7a5423844a2"
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
			"id": "1158_3",
			"caption": "A/B实验",
			"nodeTypeID": "NID_A/B",
			"info": "按照不同百分比分流",
			"left": "120px",
			"top": "315px",
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
						"id": "de4e2ddf-e07d-4075-9f0c-e7a0b438e4a4"
					},
					{
						"label": "实验",
						"pinName": "1",
						"anchor": "BottomRight",
						"id": "d3e79397-5404-42ad-b7a3-14c98e527264"
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
			"id": "1158_4",
			"caption": "A/B实验",
			"nodeTypeID": "NID_A/B",
			"info": "按照不同百分比分流",
			"left": "602px",
			"top": "214px",
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
						"id": "de4e2ddf-e07d-4075-9f0c-e7a0b438e4a4"
					},
					{
						"label": "实验",
						"pinName": "1",
						"anchor": "BottomRight",
						"id": "d3e79397-5404-42ad-b7a3-14c98e527264"
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
			"id": "1158_5",
			"caption": "A/B实验",
			"nodeTypeID": "NID_A/B",
			"info": "按照不同百分比分流",
			"left": "780px",
			"top": "315px",
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
						"id": "de4e2ddf-e07d-4075-9f0c-e7a0b438e4a4"
					},
					{
						"label": "实验",
						"pinName": "1",
						"anchor": "BottomRight",
						"id": "d3e79397-5404-42ad-b7a3-14c98e527264"
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
			"id": "1158_6",
			"caption": "结束",
			"nodeTypeID": "NID_END",
			"info": "结束流程",
			"left": "645px",
			"top": "402px",
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
			"id": "1158_7",
			"caption": "结束",
			"nodeTypeID": "NID_END",
			"info": "结束流程",
			"left": "890px",
			"top": "435px",
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
			"id": "1158_8",
			"caption": "结束",
			"nodeTypeID": "NID_END",
			"info": "结束流程",
			"left": "32px",
			"top": "438px",
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
			"id": "1158_9",
			"caption": "结束",
			"nodeTypeID": "NID_END",
			"info": "结束流程",
			"left": "211px",
			"top": "436px",
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
			"id": "1158_10",
			"caption": "结束",
			"nodeTypeID": "NID_END",
			"info": "结束流程",
			"left": "330px",
			"top": "294px",
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
			"from": "1158_0",
			"to": "1158_4",
			"pinName": "jtk-endpoint-anchor",
			"from_uuid": "",
			"to_uuid": "",
			"lineCount": ""
		},
		{
			"from": "1158_4",
			"to": "1158_2",
			"pinName": "0",
			"from_uuid": "",
			"to_uuid": "",
			"lineCount": ""
		},
		{
			"from": "1158_2",
			"to": "1158_3",
			"pinName": "PIN_TRUE",
			"from_uuid": "",
			"to_uuid": "",
			"lineCount": ""
		},
		{
			"from": "1158_4",
			"to": "1158_5",
			"pinName": "1",
			"from_uuid": "",
			"to_uuid": "",
			"lineCount": ""
		},
		{
			"from": "1158_5",
			"to": "1158_6",
			"pinName": "0",
			"from_uuid": "",
			"to_uuid": "",
			"lineCount": ""
		},
		{
			"from": "1158_5",
			"to": "1158_7",
			"pinName": "1",
			"from_uuid": "",
			"to_uuid": "",
			"lineCount": ""
		},
		{
			"from": "1158_3",
			"to": "1158_8",
			"pinName": "0",
			"from_uuid": "",
			"to_uuid": "",
			"lineCount": ""
		},
		{
			"from": "1158_3",
			"to": "1158_9",
			"pinName": "1",
			"from_uuid": "",
			"to_uuid": "",
			"lineCount": ""
		},
		{
			"from": "1158_2",
			"to": "1158_10",
			"pinName": "PIN_FALSE",
			"from_uuid": "",
			"to_uuid": "",
			"lineCount": ""
		}
	]
=======
    "jobId": "0669",
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
            "id": "0669_0",
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
        // {
        //     "id": "0669_1",
        //     "caption": "A/B实验",
        //     "nodeTypeID": "NID_A/B",
        //     "info": "按照不同百分比分流",
        //     "left": "590px",
        //     "top": "224px",
        //     "controlState": "success",
        //     "image": "AB测试.png",
        //     "output": {
        //         "pinDistance": 100,
        //         "flexOutput": false,
        //         "fixedOutput": [
        //             {
        //                 "label": "对照",
        //                 "pinName": "0",
        //                 "anchor": "BottomLeft",
        //                 "id": "0669_2-1605081942787"
        //             },
        //             {
        //                 "label": "实验",
        //                 "pinName": "1",
        //                 "anchor": "BottomRight",
        //                 "id": "0669_3-1605081942787"
        //             }
        //         ]
        //     },
        //     "parameters": [
        //         {
        //             "defaultValue": 0,
        //             "shuntWay": [
        //                 {
        //                     "value": 0,
        //                     "label": "按首次随机分流"
        //                 },
        //                 {
        //                     "value": 1,
        //                     "label": "按天随机分流"
        //                 },
        //                 {
        //                     "value": 2,
        //                     "label": "完全随机分流"
        //                 }
        //             ],
        //             "period": "",
        //             "groups": [
        //                 {
        //                     "id": "0",
        //                     "name": "对照组",
        //                     "num": 50
        //                 },
        //                 {
        //                     "id": "1",
        //                     "name": "实验组",
        //                     "num": 50
        //                 }
        //             ]
        //         }
        //     ]
        // },
        // {
        //     "id": "_1",
        //     "caption": "A/B实验",
        //     "nodeTypeID": "NID_A/B",
        //     "info": "按照不同百分比分流",
        //     "left": "435px",
        //     "top": "349px",
        //     "controlState": "success",
        //     "image": "AB测试.png",
        //     "output": {
        //         "pinDistance": 100,
        //         "flexOutput": false,
        //         "fixedOutput": [
        //             {
        //                 "label": "对照",
        //                 "pinName": "0",
        //                 "anchor": "BottomLeft",
        //                 "id": "_7-1605082098714"
        //             },
        //             {
        //                 "label": "实验",
        //                 "pinName": "1",
        //                 "anchor": "BottomRight",
        //                 "id": "_8-1605082098714"
        //             }
        //         ]
        //     },
        //     "parameters": [
        //         {
        //             "defaultValue": 0,
        //             "shuntWay": [
        //                 {
        //                     "value": 0,
        //                     "label": "按首次随机分流"
        //                 },
        //                 {
        //                     "value": 1,
        //                     "label": "按天随机分流"
        //                 },
        //                 {
        //                     "value": 2,
        //                     "label": "完全随机分流"
        //                 }
        //             ],
        //             "period": "",
        //             "groups": [
        //                 {
        //                     "id": "0",
        //                     "name": "对照组",
        //                     "num": 50
        //                 },
        //                 {
        //                     "id": "1",
        //                     "name": "实验组",
        //                     "num": 50
        //                 }
        //             ]
        //         }
        //     ]
        // },
        // {
        //     "id": "_6",
        //     "caption": "A/B实验",
        //     "nodeTypeID": "NID_A/B",
        //     "info": "按照不同百分比分流",
        //     "left": "285px",
        //     "top": "450px",
        //     "controlState": "success",
        //     "image": "AB测试.png",
        //     "output": {
        //         "pinDistance": 100,
        //         "flexOutput": false,
        //         "fixedOutput": [
        //             {
        //                 "label": "对照",
        //                 "pinName": "0",
        //                 "anchor": "BottomLeft",
        //                 "id": "_7-1605082098714"
        //             },
        //             {
        //                 "label": "实验",
        //                 "pinName": "1",
        //                 "anchor": "BottomRight",
        //                 "id": "_8-1605082098714"
        //             }
        //         ]
        //     },
        //     "parameters": [
        //         {
        //             "defaultValue": 0,
        //             "shuntWay": [
        //                 {
        //                     "value": 0,
        //                     "label": "按首次随机分流"
        //                 },
        //                 {
        //                     "value": 1,
        //                     "label": "按天随机分流"
        //                 },
        //                 {
        //                     "value": 2,
        //                     "label": "完全随机分流"
        //                 }
        //             ],
        //             "period": "",
        //             "groups": [
        //                 {
        //                     "id": "0",
        //                     "name": "对照组",
        //                     "num": 50
        //                 },
        //                 {
        //                     "id": "1",
        //                     "name": "实验组",
        //                     "num": 50
        //                 }
        //             ]
        //         }
        //     ]
        // },
        // {
        //     "id": "_11",
        //     "caption": "条件分支",
        //     "nodeTypeID": "NID_CONDITION",
        //     "info": "用来判断是否满足某个或者某一组条件",
        //     "left": "765px",
        //     "top": "330px",
        //     "controlState": "success",
        //     "image": "条件分支.png",
        //     "output": {
        //         "pinDistance": 100,
        //         "flexOutput": false,
        //         "fixedOutput": [
        //             {
        //                 "label": "是",
        //                 "pinName": "PIN_TRUE",
        //                 "anchor": "BottomLeft",
        //                 "id": "_17-1605082104879"
        //             },
        //             {
        //                 "label": "否",
        //                 "pinName": "PIN_FALSE",
        //                 "anchor": "BottomRight",
        //                 "id": "_18-1605082104879"
        //             }
        //         ]
        //     },
        //     "parameters": [
        //         {
        //             "title": "条件缩略图",
        //             "type": "PTYPE_CONDITION_DETAILS",
        //             "defaultValue": "条件",
        //             "tips": "任务名称用于描述任务主要功能",
        //             "data": {
        //                 "id": 0,
        //                 "label": "条件",
        //                 "relation": "AND",
        //                 "swtich": "myred",
        //                 "children": [
        //                     {
        //                         "id": 5,
        //                         "label": "",
        //                         "labelNo": "",
        //                         "dataNo": "",
        //                         "dataValue": "",
        //                         "operatorNo": "",
        //                         "operatorValue": "",
        //                         "operatorInfo": "",
        //                         "labelInfo": "",
        //                         "expand": true
        //                     }
        //                 ],
        //                 "expand": true
        //             }
        //         }
        //     ]
        // },
        // {
        //     "id": "_16",
        //     "caption": "条件分支",
        //     "nodeTypeID": "NID_CONDITION",
        //     "info": "用来判断是否满足某个或者某一组条件",
        //     "left": "795px",
        //     "top": "450px",
        //     "controlState": "success",
        //     "image": "条件分支.png",
        //     "output": {
        //         "pinDistance": 100,
        //         "flexOutput": false,
        //         "fixedOutput": [
        //             {
        //                 "label": "是",
        //                 "pinName": "PIN_TRUE",
        //                 "anchor": "BottomLeft",
        //                 "id": "_17-1605082104879"
        //             },
        //             {
        //                 "label": "否",
        //                 "pinName": "PIN_FALSE",
        //                 "anchor": "BottomRight",
        //                 "id": "_18-1605082104879"
        //             }
        //         ]
        //     },
        //     "parameters": [
        //         {
        //             "title": "条件缩略图",
        //             "type": "PTYPE_CONDITION_DETAILS",
        //             "defaultValue": "条件",
        //             "tips": "任务名称用于描述任务主要功能",
        //             "data": {
        //                 "id": 0,
        //                 "label": "条件",
        //                 "relation": "AND",
        //                 "swtich": "myred",
        //                 "children": [
        //                     {
        //                         "id": 5,
        //                         "label": "",
        //                         "labelNo": "",
        //                         "dataNo": "",
        //                         "dataValue": "",
        //                         "operatorNo": "",
        //                         "operatorValue": "",
        //                         "operatorInfo": "",
        //                         "labelInfo": "",
        //                         "expand": true
        //                     }
        //                 ],
        //                 "expand": true
        //             }
        //         }
        //     ]
        // },
        // {
        //     "id": "_21",
        //     "caption": "结束",
        //     "nodeTypeID": "NID_END",
        //     "info": "结束流程",
        //     "left": "360px",
        //     "top": "565px",
        //     "controlState": "success",
        //     "image": "stop.png",
        //     "output": {
        //         "pinDistance": 0,
        //         "flexOutput": false,
        //         "fixedOutput": []
        //     },
        //     "parameters": [
        //         {
        //             "title": "任务名称",
        //             "type": "PTYPE_TEXT",
        //             "defaultValue": "结束",
        //             "tips": "任务名称用于描述任务主要功能"
        //         }
        //     ]
        // },
        // {
        //     "id": "_22",
        //     "caption": "结束",
        //     "nodeTypeID": "NID_END",
        //     "info": "结束流程",
        //     "left": "185px",
        //     "top": "565px",
        //     "controlState": "success",
        //     "image": "stop.png",
        //     "output": {
        //         "pinDistance": 0,
        //         "flexOutput": false,
        //         "fixedOutput": []
        //     },
        //     "parameters": [
        //         {
        //             "title": "任务名称",
        //             "type": "PTYPE_TEXT",
        //             "defaultValue": "结束",
        //             "tips": "任务名称用于描述任务主要功能"
        //         }
        //     ]
        // },
        // {
        //     "id": "_23",
        //     "caption": "结束",
        //     "nodeTypeID": "NID_END",
        //     "info": "结束流程",
        //     "left": "525px",
        //     "top": "465px",
        //     "controlState": "success",
        //     "image": "stop.png",
        //     "output": {
        //         "pinDistance": 0,
        //         "flexOutput": false,
        //         "fixedOutput": []
        //     },
        //     "parameters": [
        //         {
        //             "title": "任务名称",
        //             "type": "PTYPE_TEXT",
        //             "defaultValue": "结束",
        //             "tips": "任务名称用于描述任务主要功能"
        //         }
        //     ]
        // },
        // {
        //     "id": "_24",
        //     "caption": "结束",
        //     "nodeTypeID": "NID_END",
        //     "info": "结束流程",
        //     "left": "645px",
        //     "top": "435px",
        //     "controlState": "success",
        //     "image": "stop.png",
        //     "output": {
        //         "pinDistance": 0,
        //         "flexOutput": false,
        //         "fixedOutput": []
        //     },
        //     "parameters": [
        //         {
        //             "title": "任务名称",
        //             "type": "PTYPE_TEXT",
        //             "defaultValue": "结束",
        //             "tips": "任务名称用于描述任务主要功能"
        //         }
        //     ]
        // },
        // {
        //     "id": "_25",
        //     "caption": "结束",
        //     "nodeTypeID": "NID_END",
        //     "info": "结束流程",
        //     "left": "707px",
        //     "top": "547px",
        //     "controlState": "success",
        //     "image": "stop.png",
        //     "output": {
        //         "pinDistance": 0,
        //         "flexOutput": false,
        //         "fixedOutput": []
        //     },
        //     "parameters": [
        //         {
        //             "title": "任务名称",
        //             "type": "PTYPE_TEXT",
        //             "defaultValue": "结束",
        //             "tips": "任务名称用于描述任务主要功能"
        //         }
        //     ]
        // },
        // {
        //     "id": "_26",
        //     "caption": "结束",
        //     "nodeTypeID": "NID_END",
        //     "info": "结束流程",
        //     "left": "868px",
        //     "top": "566px",
        //     "controlState": "success",
        //     "image": "stop.png",
        //     "output": {
        //         "pinDistance": 0,
        //         "flexOutput": false,
        //         "fixedOutput": []
        //     },
        //     "parameters": [
        //         {
        //             "title": "任务名称",
        //             "type": "PTYPE_TEXT",
        //             "defaultValue": "结束",
        //             "tips": "任务名称用于描述任务主要功能"
        //         }
        //     ]
        // }
    ],
    "lineList": [
        {
            "from": "0669_0",
            "to": "0669_1",
            "pinName": "jtk-endpoint-anchor",
            "from_uuid": "",
            "to_uuid": ""
        },
        // {
        //     "from": "0669_1",
        //     "to": "_1",
        //     "pinName": "0",
        //     "from_uuid": "",
        //     "to_uuid": ""
        // },
        // {
        //     "from": "0669_1",
        //     "to": "_11",
        //     "pinName": "1",
        //     "from_uuid": "",
        //     "to_uuid": ""
        // },
        // {
        //     "from": "_11",
        //     "to": "_16",
        //     "pinName": "PIN_FALSE",
        //     "from_uuid": "",
        //     "to_uuid": ""
        // },
        // {
        //     "from": "_1",
        //     "to": "_6",
        //     "pinName": "0",
        //     "from_uuid": "",
        //     "to_uuid": ""
        // },
        // {
        //     "from": "_6",
        //     "to": "_21",
        //     "pinName": "1",
        //     "from_uuid": "",
        //     "to_uuid": ""
        // },
        // {
        //     "from": "_6",
        //     "to": "_22",
        //     "pinName": "0",
        //     "from_uuid": "",
        //     "to_uuid": ""
        // },
        // {
        //     "from": "_1",
        //     "to": "_23",
        //     "pinName": "1",
        //     "from_uuid": "",
        //     "to_uuid": ""
        // },
        // {
        //     "from": "_11",
        //     "to": "_24",
        //     "pinName": "PIN_TRUE",
        //     "from_uuid": "",
        //     "to_uuid": ""
        // },
        // {
        //     "from": "_16",
        //     "to": "_25",
        //     "pinName": "PIN_TRUE",
        //     "from_uuid": "",
        //     "to_uuid": ""
        // },
        // {
        //     "from": "_16",
        //     "to": "_26",
        //     "pinName": "PIN_FALSE",
        //     "from_uuid": "",
        //     "to_uuid": ""
        // }
    ]
>>>>>>> 8a0ef525ab96d4bf9dbbd379a9cde0e1e11dd260
}
export function getCheckdata() {
    return checkdata
}





