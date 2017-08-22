webpackJsonp([145,220],{1133:function(e,t){e.exports={content:["section",["p","A Slider component for displaying current value and intervals in range."],["h2","When To Use"],["p","To input a value in a range."]],meta:{category:"Components",type:"Data Entry",title:"Slider",filename:"components/slider/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#When-To-Use",title:"When To Use"},"When To Use"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","range"],["td","dual thumb mode"],["td","boolean"],["td","false"]],["tr",["td","min"],["td","The minimum value the slider can slide to."],["td","number"],["td","0"]],["tr",["td","max"],["td","The maximum value the slider can slide to"],["td","number"],["td","100"]],["tr",["td","step"],["td","The granularity the slider can step through values. Must greater than 0, and be divided by (max - min) . When  ",["code","marks"]," no null, ",["code","step"]," can be ",["code","null"],"."],["td","number","|","null"],["td","1"]],["tr",["td","marks"],["td","Tick mark of Slider, type of key must be ",["code","number"],", and must in closed interval ",["span","min, max"]," \uff0ceach mark can declare its own style."],["td","object"],["td","{ number: string","|","ReactNode } or { number: { style: object, label: string","|","ReactNode } }"]],["tr",["td","dots"],["td","Whether the thumb can drag over tick only."],["td","boolean"],["td","false"]],["tr",["td","value"],["td","The value of slider. When ",["code","range"]," is ",["code","false"],", use ",["code","number"],", otherwise, use ",["code","[number, number]"]],["td","number","|","number[]"]],["tr",["td","defaultValue"],["td","The default value of slider. When ",["code","range"]," is ",["code","false"],", use ",["code","number"],", otherwise, use ",["code","[number, number]"]],["td","number","|","number[]"],["td","0 or ",["span","0, 0"]]],["tr",["td","included"],["td","Make effect when ",["code","marks"]," not null\uff0c",["code","true"]," means containment and ",["code","false"]," means coordinative"],["td","boolean"],["td","true"]],["tr",["td","disabled"],["td","If true, the slider will not be interactable."],["td","boolean"],["td","false"]],["tr",["td","vertical"],["td","If true, the slider will be vertical."],["td","Boolean"],["td","false"]],["tr",["td","onChange"],["td","Callback function that is fired when the user changes the slider's value."],["td","Function(value)"],["td","NOOP"]],["tr",["td","onAfterChange"],["td","Fire when  ",["code","onmouseup"]," is fired."],["td","Function(value)"],["td","NOOP"]],["tr",["td","tipFormatter"],["td","Slider will pass its value to ",["code","tipFormatter"],", and display its value in Tooltip, and hide Tooltip when return value is null."],["td","Function","|","null"],["td","IDENTITY"]]]]]}}});