﻿$axure.loadCurrentPage({
  "url":"chat.html",
  "generationDate":new Date(1420876178630.74),
  "isCanvasEnabled":false,
  "variables":["OnLoadVariable",
"DroplistOption",
"ClickOnHandle"],
  "page":{
    "packageId":"01d7c207035045a68fe2859491a85eca",
    "type":"Axure:Page",
    "name":"Chat",
    "notes":{
},
    "style":{
      "baseStyle":"627587b6038d43cca051c114ac41ad32",
      "pageAlignment":"near",
      "fill":{
        "fillType":"solid",
        "color":0xFFFFFFFF},
      "image":null,
      "imageHorizontalAlignment":"near",
      "imageVerticalAlignment":"near",
      "imageRepeat":"auto",
      "favicon":null,
      "sketchFactor":"0",
      "colorStyle":"appliedColor",
      "fontName":"Applied Font",
      "borderWidth":"0"},
    "adaptiveStyles":{
},
    "interactionMap":{
},
    "diagram":{
      "objects":[{
          "id":"ee5717a87c04483385325f96ee89c63c",
          "label":"",
          "type":"referenceDiagramObject",
          "styleType":"referenceDiagramObject",
          "visible":true,
          "style":{
            "size":{
              "width":1,
              "height":1}},
          "adaptiveStyles":{
},
          "masterId":"d925059089d7407aa612fa9c86535ac3"},
{
          "id":"94950438ab554bbfa87e5cb935c7e5e3",
          "label":"text field",
          "type":"textBox",
          "styleType":"textBox",
          "visible":true,
          "style":{
            "location":{
              "x":145,
              "y":677},
            "size":{
              "width":212,
              "height":25}},
          "adaptiveStyles":{
}},
{
          "id":"090fce4d443c49aebb2b1644145feba4",
          "label":"button",
          "type":"imageBox",
          "styleType":"imageBox",
          "visible":true,
          "style":{
            "stateStyles":{
              "mouseOver":{
},
              "mouseDown":{
},
              "selected":{
},
              "disabled":{
}},
            "location":{
              "x":357,
              "y":677},
            "size":{
              "width":49,
              "height":25},
            "borderWidth":"-1"},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"12e6b6f0a31b41b7b8e77836196c58df",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "stateStyles":{
                  "mouseOver":{
},
                  "mouseDown":{
},
                  "selected":{
},
                  "disabled":{
}},
                "location":{
                  "x":357,
                  "y":677},
                "size":{
                  "width":49,
                  "height":25},
                "borderWidth":"-1"},
              "adaptiveStyles":{
}}],
          "interactionMap":{
            "onMouseOver":{
              "description":"OnMouseOver",
              "cases":[{
                  "description":"Case 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"setFunction",
                      "description":"Set is selected of button equal to &quot;true&quot;",
                      "expr":{
                        "exprType":"block",
                        "subExprs":[{
                            "exprType":"fcall",
                            "functionName":"SetCheckState",
                            "arguments":[{
                                "exprType":"pathLiteral",
                                "isThis":false,
                                "isFocused":false,
                                "isTarget":false,
                                "value":["090fce4d443c49aebb2b1644145feba4"]},
{
                                "exprType":"stringLiteral",
                                "value":"true",
                                "stos":[]}]}]}}]}]},
            "onMouseOut":{
              "description":"OnMouseOut",
              "cases":[{
                  "description":"Case 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"setFunction",
                      "description":"Set is selected of button equal to &quot;false&quot;",
                      "expr":{
                        "exprType":"block",
                        "subExprs":[{
                            "exprType":"fcall",
                            "functionName":"SetCheckState",
                            "arguments":[{
                                "exprType":"pathLiteral",
                                "isThis":false,
                                "isFocused":false,
                                "isTarget":false,
                                "value":["090fce4d443c49aebb2b1644145feba4"]},
{
                                "exprType":"stringLiteral",
                                "value":"false",
                                "stos":[]}]}]}}]}]}},
          "images":{
            "normal~":"images/chat/button_u4.png",
            "selected~":"images/chat/button_u4_selected.png",
            "mouseOver~":"images/chat/button_u4_selected.png",
            "mouseDown~":"images/chat/button_u4_mouseDown.png",
            "disabled~":"images/chat/button_u4_disabled.png"}},
{
          "id":"c3180c8f39544231b825da61a41e068f",
          "label":"button label",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "fontSize":"16px",
            "horizontalAlignment":"center",
            "location":{
              "x":357,
              "y":681},
            "size":{
              "width":47,
              "height":19},
            "rotation":"0",
            "textRotation":"0"},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"0d2df8ef2c7342b8b3ce3400da05363a",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "fontSize":"16px",
                "horizontalAlignment":"center",
                "location":{
                  "x":357,
                  "y":681},
                "size":{
                  "width":47,
                  "height":19},
                "rotation":"0",
                "textRotation":"0"},
              "adaptiveStyles":{
}}],
          "interactionMap":{
            "onMouseOver":{
              "description":"OnMouseOver",
              "cases":[{
                  "description":"Case 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"setFunction",
                      "description":"Set is selected of button equal to &quot;true&quot;",
                      "expr":{
                        "exprType":"block",
                        "subExprs":[{
                            "exprType":"fcall",
                            "functionName":"SetCheckState",
                            "arguments":[{
                                "exprType":"pathLiteral",
                                "isThis":false,
                                "isFocused":false,
                                "isTarget":false,
                                "value":["090fce4d443c49aebb2b1644145feba4"]},
{
                                "exprType":"stringLiteral",
                                "value":"true",
                                "stos":[]}]}]}}]}]},
            "onMouseOut":{
              "description":"OnMouseOut",
              "cases":[{
                  "description":"Case 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"setFunction",
                      "description":"Set is selected of button equal to &quot;false&quot;",
                      "expr":{
                        "exprType":"block",
                        "subExprs":[{
                            "exprType":"fcall",
                            "functionName":"SetCheckState",
                            "arguments":[{
                                "exprType":"pathLiteral",
                                "isThis":false,
                                "isFocused":false,
                                "isTarget":false,
                                "value":["090fce4d443c49aebb2b1644145feba4"]},
{
                                "exprType":"stringLiteral",
                                "value":"false",
                                "stos":[]}]}]}}]}]}},
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"a6a83560f7f5440e83b01c89131db0fa",
          "label":"button",
          "type":"imageBox",
          "styleType":"imageBox",
          "visible":true,
          "style":{
            "stateStyles":{
              "mouseOver":{
},
              "mouseDown":{
},
              "selected":{
},
              "disabled":{
}},
            "location":{
              "x":404,
              "y":678},
            "size":{
              "width":49,
              "height":25},
            "borderWidth":"-1"},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"f3d2bdf60eb74d66b70a7864d8611bc3",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "stateStyles":{
                  "mouseOver":{
},
                  "mouseDown":{
},
                  "selected":{
},
                  "disabled":{
}},
                "location":{
                  "x":404,
                  "y":678},
                "size":{
                  "width":49,
                  "height":25},
                "borderWidth":"-1"},
              "adaptiveStyles":{
}}],
          "interactionMap":{
            "onMouseOver":{
              "description":"OnMouseOver",
              "cases":[{
                  "description":"Case 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"setFunction",
                      "description":"Set is selected of button equal to &quot;true&quot;",
                      "expr":{
                        "exprType":"block",
                        "subExprs":[{
                            "exprType":"fcall",
                            "functionName":"SetCheckState",
                            "arguments":[{
                                "exprType":"pathLiteral",
                                "isThis":false,
                                "isFocused":false,
                                "isTarget":false,
                                "value":["a6a83560f7f5440e83b01c89131db0fa"]},
{
                                "exprType":"stringLiteral",
                                "value":"true",
                                "stos":[]}]}]}}]}]},
            "onMouseOut":{
              "description":"OnMouseOut",
              "cases":[{
                  "description":"Case 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"setFunction",
                      "description":"Set is selected of button equal to &quot;false&quot;",
                      "expr":{
                        "exprType":"block",
                        "subExprs":[{
                            "exprType":"fcall",
                            "functionName":"SetCheckState",
                            "arguments":[{
                                "exprType":"pathLiteral",
                                "isThis":false,
                                "isFocused":false,
                                "isTarget":false,
                                "value":["a6a83560f7f5440e83b01c89131db0fa"]},
{
                                "exprType":"stringLiteral",
                                "value":"false",
                                "stos":[]}]}]}}]}]}},
          "images":{
            "normal~":"images/chat/button_u4.png",
            "selected~":"images/chat/button_u4_selected.png",
            "mouseOver~":"images/chat/button_u4_selected.png",
            "mouseDown~":"images/chat/button_u4_mouseDown.png",
            "disabled~":"images/chat/button_u4_disabled.png"}},
{
          "id":"26e0e96fe1794967b0c1da6c1d3ba865",
          "label":"button label",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "fontSize":"16px",
            "horizontalAlignment":"center",
            "location":{
              "x":404,
              "y":682},
            "size":{
              "width":47,
              "height":19},
            "rotation":"0",
            "textRotation":"0"},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"8f79e000a8834073b75f2de1f01f0c81",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "fontSize":"16px",
                "horizontalAlignment":"center",
                "location":{
                  "x":404,
                  "y":682},
                "size":{
                  "width":47,
                  "height":19},
                "rotation":"0",
                "textRotation":"0"},
              "adaptiveStyles":{
}}],
          "interactionMap":{
            "onMouseOver":{
              "description":"OnMouseOver",
              "cases":[{
                  "description":"Case 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"setFunction",
                      "description":"Set is selected of button equal to &quot;true&quot;",
                      "expr":{
                        "exprType":"block",
                        "subExprs":[{
                            "exprType":"fcall",
                            "functionName":"SetCheckState",
                            "arguments":[{
                                "exprType":"pathLiteral",
                                "isThis":false,
                                "isFocused":false,
                                "isTarget":false,
                                "value":["a6a83560f7f5440e83b01c89131db0fa"]},
{
                                "exprType":"stringLiteral",
                                "value":"true",
                                "stos":[]}]}]}}]}]},
            "onMouseOut":{
              "description":"OnMouseOut",
              "cases":[{
                  "description":"Case 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"setFunction",
                      "description":"Set is selected of button equal to &quot;false&quot;",
                      "expr":{
                        "exprType":"block",
                        "subExprs":[{
                            "exprType":"fcall",
                            "functionName":"SetCheckState",
                            "arguments":[{
                                "exprType":"pathLiteral",
                                "isThis":false,
                                "isFocused":false,
                                "isTarget":false,
                                "value":["a6a83560f7f5440e83b01c89131db0fa"]},
{
                                "exprType":"stringLiteral",
                                "value":"false",
                                "stos":[]}]}]}}]}]}},
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"dd10c44f35f044eb8e2f0e470884e8d8",
          "label":"box",
          "type":"imageBox",
          "styleType":"imageBox",
          "visible":true,
          "style":{
            "location":{
              "x":155,
              "y":144},
            "size":{
              "width":172,
              "height":101},
            "borderWidth":"-1"},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"655e1c6e3ace4ab6981eeefaecacc023",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":155,
                  "y":144},
                "size":{
                  "width":172,
                  "height":101},
                "borderWidth":"-1"},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/chat/box_u12.png"}},
{
          "id":"53072e1a5cbf4945891e1fa5cb1e5a81",
          "label":"line, diagonal L-R",
          "type":"imageBox",
          "styleType":"imageBox",
          "visible":true,
          "style":{
            "location":{
              "x":155,
              "y":144},
            "size":{
              "width":170,
              "height":100},
            "borderWidth":"-1"},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"2e765b326bcd439ca09fba083f51f1ab",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":155,
                  "y":144},
                "size":{
                  "width":170,
                  "height":100},
                "borderWidth":"-1"},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/group/line__diagonal_l-r_u11.png"}},
{
          "id":"b669a1225ede49e381b42f5e95306f65",
          "label":"line, diagonal R-L",
          "type":"imageBox",
          "styleType":"imageBox",
          "visible":true,
          "style":{
            "location":{
              "x":155,
              "y":144},
            "size":{
              "width":170,
              "height":100},
            "borderWidth":"-1"},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"b26a2897a505414ba702d8cbf455a566",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":155,
                  "y":144},
                "size":{
                  "width":170,
                  "height":100},
                "borderWidth":"-1"},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/group/line__diagonal_r-l_u13.png"}},
{
          "id":"900f4b2ea04d4e6e995ec56b8bce1b76",
          "label":"image placement label",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "fontSize":"16px",
            "location":{
              "x":217,
              "y":188},
            "size":{
              "width":46,
              "height":12},
            "borderWidth":"-1",
            "borderFill":{
              "fillType":"solid",
              "color":0xFF666666},
            "cornerRadiusTopLeft":"3"},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"c94ccbd72bcf4a4586ccb35305f9c2aa",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "fontSize":"16px",
                "location":{
                  "x":217,
                  "y":188},
                "size":{
                  "width":46,
                  "height":12},
                "borderWidth":"-1",
                "borderFill":{
                  "fillType":"solid",
                  "color":0xFF666666},
                "cornerRadiusTopLeft":"3"},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/chat/image_placement_label_u18.png"}},
{
          "id":"f530c8d3989745bdbb116bdc80796d92",
          "label":"line, horizontal",
          "type":"imageBox",
          "styleType":"imageBox",
          "visible":true,
          "style":{
            "location":{
              "x":145,
              "y":257},
            "size":{
              "width":317,
              "height":1},
            "borderWidth":"-1"},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"04e19cf54cd54b80a10934eb5eb2afb0",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":145,
                  "y":257},
                "size":{
                  "width":317,
                  "height":1},
                "borderWidth":"-1"},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/chat/line__horizontal_u20.png"}},
{
          "id":"140a95b7a27c4bac858d18e1d572b147",
          "label":"text",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "fontSize":"16px",
            "horizontalAlignment":"left",
            "verticalAlignment":"top",
            "fill":{
              "fillType":"solid",
              "color":0xFFFFFF},
            "location":{
              "x":335,
              "y":144},
            "size":{
              "width":110,
              "height":25},
            "borderWidth":"-1",
            "borderFill":{
              "fillType":"solid",
              "color":0xFFFFFF},
            "cornerRadiusTopLeft":"1"},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"2ad136b07b5f4d398a7a91df2d190fc8",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "fontSize":"16px",
                "horizontalAlignment":"left",
                "verticalAlignment":"top",
                "fill":{
                  "fillType":"solid",
                  "color":0xFFFFFF},
                "location":{
                  "x":335,
                  "y":144},
                "size":{
                  "width":110,
                  "height":25},
                "borderWidth":"-1",
                "borderFill":{
                  "fillType":"solid",
                  "color":0xFFFFFF},
                "cornerRadiusTopLeft":"1"},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"2e3dca97a19f4e30a1c458b25d1d4815",
          "label":"text",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "fontSize":"16px",
            "horizontalAlignment":"left",
            "verticalAlignment":"top",
            "fill":{
              "fillType":"solid",
              "color":0xFFFFFF},
            "location":{
              "x":217,
              "y":268},
            "size":{
              "width":110,
              "height":25},
            "borderWidth":"-1",
            "borderFill":{
              "fillType":"solid",
              "color":0xFFFFFF},
            "cornerRadiusTopLeft":"1"},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"a29b03a61757419e9f0fe37fee6cb99d",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "fontSize":"16px",
                "horizontalAlignment":"left",
                "verticalAlignment":"top",
                "fill":{
                  "fillType":"solid",
                  "color":0xFFFFFF},
                "location":{
                  "x":217,
                  "y":268},
                "size":{
                  "width":110,
                  "height":25},
                "borderWidth":"-1",
                "borderFill":{
                  "fillType":"solid",
                  "color":0xFFFFFF},
                "cornerRadiusTopLeft":"1"},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"b034ce4db0f24ebdb775f7bb2141d130",
          "label":"text",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "fontSize":"16px",
            "horizontalAlignment":"left",
            "verticalAlignment":"top",
            "fill":{
              "fillType":"solid",
              "color":0xFFFFFF},
            "location":{
              "x":145,
              "y":268},
            "size":{
              "width":62,
              "height":25},
            "borderWidth":"-1",
            "borderFill":{
              "fillType":"solid",
              "color":0xFFFFFF},
            "cornerRadiusTopLeft":"1"},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"ecdd6c7768994bd0b3b411f6e52c9f2b",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "fontSize":"16px",
                "horizontalAlignment":"left",
                "verticalAlignment":"top",
                "fill":{
                  "fillType":"solid",
                  "color":0xFFFFFF},
                "location":{
                  "x":145,
                  "y":268},
                "size":{
                  "width":62,
                  "height":25},
                "borderWidth":"-1",
                "borderFill":{
                  "fillType":"solid",
                  "color":0xFFFFFF},
                "cornerRadiusTopLeft":"1"},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"4d1c38ce4f0e4f1296cb9720c847403e",
          "label":"text",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "fontSize":"10px",
            "horizontalAlignment":"left",
            "verticalAlignment":"top",
            "fill":{
              "fillType":"solid",
              "color":0xFFFFFF},
            "location":{
              "x":343,
              "y":268},
            "size":{
              "width":110,
              "height":25},
            "borderWidth":"-1",
            "borderFill":{
              "fillType":"solid",
              "color":0xFFFFFF},
            "cornerRadiusTopLeft":"1"},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"ca9d98d5abb44fa0b7778f00bbd84993",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "fontSize":"10px",
                "horizontalAlignment":"left",
                "verticalAlignment":"top",
                "fill":{
                  "fillType":"solid",
                  "color":0xFFFFFF},
                "location":{
                  "x":343,
                  "y":268},
                "size":{
                  "width":110,
                  "height":25},
                "borderWidth":"-1",
                "borderFill":{
                  "fillType":"solid",
                  "color":0xFFFFFF},
                "cornerRadiusTopLeft":"1"},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"1e12cffa97d14f0dbf4c56867f228993",
          "label":"text",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "fontSize":"16px",
            "horizontalAlignment":"left",
            "verticalAlignment":"top",
            "fill":{
              "fillType":"solid",
              "color":0xFFFFFF},
            "location":{
              "x":296,
              "y":330},
            "size":{
              "width":110,
              "height":25},
            "borderWidth":"-1",
            "borderFill":{
              "fillType":"solid",
              "color":0xFFFFFF},
            "cornerRadiusTopLeft":"1"},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"d7368b747b294e7b94af234d643608e4",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "fontSize":"16px",
                "horizontalAlignment":"left",
                "verticalAlignment":"top",
                "fill":{
                  "fillType":"solid",
                  "color":0xFFFFFF},
                "location":{
                  "x":296,
                  "y":330},
                "size":{
                  "width":110,
                  "height":25},
                "borderWidth":"-1",
                "borderFill":{
                  "fillType":"solid",
                  "color":0xFFFFFF},
                "cornerRadiusTopLeft":"1"},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"39419c3f43be46279fab59a42ea88ea6",
          "label":"text",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "fontSize":"16px",
            "horizontalAlignment":"left",
            "verticalAlignment":"top",
            "fill":{
              "fillType":"solid",
              "color":0xFFFFFF},
            "location":{
              "x":406,
              "y":330},
            "size":{
              "width":62,
              "height":25},
            "borderWidth":"-1",
            "borderFill":{
              "fillType":"solid",
              "color":0xFFFFFF},
            "cornerRadiusTopLeft":"1"},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"f46c7ff970d54eadb73b80eeb6d08f96",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "fontSize":"16px",
                "horizontalAlignment":"left",
                "verticalAlignment":"top",
                "fill":{
                  "fillType":"solid",
                  "color":0xFFFFFF},
                "location":{
                  "x":406,
                  "y":330},
                "size":{
                  "width":62,
                  "height":25},
                "borderWidth":"-1",
                "borderFill":{
                  "fillType":"solid",
                  "color":0xFFFFFF},
                "cornerRadiusTopLeft":"1"},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"72df4ecdabd744ce9cfd721d3236bce1",
          "label":"",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "location":{
              "x":560,
              "y":130},
            "size":{
              "width":300,
              "height":64}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"058640f6d8c74ddab40dbd3793c484f7",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":560,
                  "y":130},
                "size":{
                  "width":300,
                  "height":64}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}}]}},
  "masters":{
    "d925059089d7407aa612fa9c86535ac3":{
      "packageId":"d925059089d7407aa612fa9c86535ac3",
      "type":"Axure:Master",
      "name":"Group",
      "notes":{
},
      "style":{
        "baseStyle":"627587b6038d43cca051c114ac41ad32",
        "pageAlignment":"near",
        "fill":{
          "fillType":"solid",
          "color":0xFFFFFFFF},
        "image":null,
        "imageHorizontalAlignment":"near",
        "imageVerticalAlignment":"near",
        "imageRepeat":"auto",
        "favicon":null,
        "sketchFactor":"0",
        "colorStyle":"appliedColor",
        "fontName":"Applied Font",
        "borderWidth":"0"},
      "adaptiveStyles":{
},
      "interactionMap":{
},
      "diagram":{
        "objects":[{
            "id":"bb956eace71741d39ff8d1d233d848a6",
            "label":"",
            "type":"imageBox",
            "styleType":"imageBox",
            "visible":true,
            "style":{
              "location":{
                "x":110,
                "y":19},
              "size":{
                "width":380,
                "height":800},
              "borderWidth":"-1",
              "borderFill":{
                "fillType":"solid",
                "color":0xFF000000}},
            "adaptiveStyles":{
},
            "objects":[{
                "id":"34e7f17d8003487ea75777fee257eebd",
                "label":"",
                "isContained":true,
                "type":"richTextPanel",
                "styleType":"paragraph",
                "visible":true,
                "style":{
                  "location":{
                    "x":110,
                    "y":19},
                  "size":{
                    "width":380,
                    "height":800},
                  "borderWidth":"-1",
                  "borderFill":{
                    "fillType":"solid",
                    "color":0xFF000000}},
                "adaptiveStyles":{
}}],
            "images":{
              "normal~":"images/group/u1.png"}}]}}},
  "objectPaths":{
    "ee5717a87c04483385325f96ee89c63c":{
      "scriptId":"u0",
      "bb956eace71741d39ff8d1d233d848a6":{
        "scriptId":"u1"},
      "34e7f17d8003487ea75777fee257eebd":{
        "scriptId":"u2"}},
    "94950438ab554bbfa87e5cb935c7e5e3":{
      "scriptId":"u3"},
    "090fce4d443c49aebb2b1644145feba4":{
      "scriptId":"u4"},
    "12e6b6f0a31b41b7b8e77836196c58df":{
      "scriptId":"u5"},
    "c3180c8f39544231b825da61a41e068f":{
      "scriptId":"u6"},
    "0d2df8ef2c7342b8b3ce3400da05363a":{
      "scriptId":"u7"},
    "a6a83560f7f5440e83b01c89131db0fa":{
      "scriptId":"u8"},
    "f3d2bdf60eb74d66b70a7864d8611bc3":{
      "scriptId":"u9"},
    "26e0e96fe1794967b0c1da6c1d3ba865":{
      "scriptId":"u10"},
    "8f79e000a8834073b75f2de1f01f0c81":{
      "scriptId":"u11"},
    "dd10c44f35f044eb8e2f0e470884e8d8":{
      "scriptId":"u12"},
    "655e1c6e3ace4ab6981eeefaecacc023":{
      "scriptId":"u13"},
    "53072e1a5cbf4945891e1fa5cb1e5a81":{
      "scriptId":"u14"},
    "2e765b326bcd439ca09fba083f51f1ab":{
      "scriptId":"u15"},
    "b669a1225ede49e381b42f5e95306f65":{
      "scriptId":"u16"},
    "b26a2897a505414ba702d8cbf455a566":{
      "scriptId":"u17"},
    "900f4b2ea04d4e6e995ec56b8bce1b76":{
      "scriptId":"u18"},
    "c94ccbd72bcf4a4586ccb35305f9c2aa":{
      "scriptId":"u19"},
    "f530c8d3989745bdbb116bdc80796d92":{
      "scriptId":"u20"},
    "04e19cf54cd54b80a10934eb5eb2afb0":{
      "scriptId":"u21"},
    "140a95b7a27c4bac858d18e1d572b147":{
      "scriptId":"u22"},
    "2ad136b07b5f4d398a7a91df2d190fc8":{
      "scriptId":"u23"},
    "2e3dca97a19f4e30a1c458b25d1d4815":{
      "scriptId":"u24"},
    "a29b03a61757419e9f0fe37fee6cb99d":{
      "scriptId":"u25"},
    "b034ce4db0f24ebdb775f7bb2141d130":{
      "scriptId":"u26"},
    "ecdd6c7768994bd0b3b411f6e52c9f2b":{
      "scriptId":"u27"},
    "4d1c38ce4f0e4f1296cb9720c847403e":{
      "scriptId":"u28"},
    "ca9d98d5abb44fa0b7778f00bbd84993":{
      "scriptId":"u29"},
    "1e12cffa97d14f0dbf4c56867f228993":{
      "scriptId":"u30"},
    "d7368b747b294e7b94af234d643608e4":{
      "scriptId":"u31"},
    "39419c3f43be46279fab59a42ea88ea6":{
      "scriptId":"u32"},
    "f46c7ff970d54eadb73b80eeb6d08f96":{
      "scriptId":"u33"},
    "72df4ecdabd744ce9cfd721d3236bce1":{
      "scriptId":"u34"},
    "058640f6d8c74ddab40dbd3793c484f7":{
      "scriptId":"u35"}}});