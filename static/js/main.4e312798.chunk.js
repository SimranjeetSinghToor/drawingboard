(this.webpackJsonpdrawingboard=this.webpackJsonpdrawingboard||[]).push([[0],{258:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(83),c=t.n(r),l=(t(90),t(91),t(8));var i=function(e){var n=Object(a.useState)(!1),t=Object(l.a)(n,2),r=t[0],c=t[1];function i(n){e.handleStroke(n),e.handleColor("#000000","pencil"),c(!1)}return o.a.createElement("div",{className:"pencil"},o.a.createElement("span",{class:"material-icons",onClick:function(){c(!r)}},"edit"),r&&o.a.createElement("div",{className:"stroke-container"},o.a.createElement("div",null,"Select stroke size"),o.a.createElement("div",{onClick:function(){return i(1)}},"1"),o.a.createElement("div",{onClick:function(){return i(3)}},"3"),o.a.createElement("div",{onClick:function(){return i(5)}},"5")),o.a.createElement("style",{jsx:!0},"\n        .pencil {\n          position:relative;\n        }\n        .stroke-container {\n          min-width:100px;\n          font-size:12px;\n          border-radius:4px;\n          padding:5px;\n          box-shadow: 0 0 8px 0 rgba(0,0,0,.1);\n          position:absolute;\n          left:105%;\n          top:0;\n        }\n        .stroke-container div {\n          margin-bottom:5px;\n          cursor:pointer;\n        }\n      "))};var s=function(e){return o.a.createElement("div",{className:"eraser"},o.a.createElement("span",{onClick:function(n){n.preventDefault(),e.handleColor("#ffffff","eraser"),e.handleStroke(8)},class:"material-icons"},"format_paint"))},u=t(84);var d=function(e){var n=Object(a.useState)(!1),t=Object(l.a)(n,2),r=t[0],c=t[1],i=Object(a.useState)("#000000","color"),s=Object(l.a)(i,2),d=s[0],f=s[1];return o.a.createElement("div",{className:"color"},o.a.createElement("span",{class:"material-icons",onClick:function(){c(!0)}},"color_lens"),r?o.a.createElement("div",{className:"popover"},o.a.createElement("div",{className:"cover",onClick:function(){c(!1)}}),o.a.createElement(u.ChromePicker,{color:d,onChange:function(n){f(n.hex),e.handleColor(n.hex)}})):null,o.a.createElement("style",{jsx:!0},"\n        .popover {\n          position:absolute;\n          z-index:2;\n        }\n        .cover {\n          position: fixed;\n          top: 0px;\n          right: 0px;\n          bottom: 0px;\n          left: 0px;\n        }\n      "))};var f=function(e){return o.a.createElement("div",{className:"controls"},o.a.createElement(i,{handleColor:e.handleColor,handleStroke:e.handleStroke}),o.a.createElement(s,{handleColor:e.handleColor,handleStroke:e.handleStroke}),o.a.createElement(d,{handleColor:e.handleColor,handleStroke:e.handleStroke}),o.a.createElement("style",null,"\n        .controls {\n          position: absolute;\n          top: 0;\n          left: 0;\n          display: flex;\n          justify-content: center;\n          flex-direction: column;\n          height:100vh;\n          width: auto;\n        }\n        .controls .fa-icon {\n          cursor: pointer;\n          font-size: 3rem;\n          margin: 0.5rem;\n          padding: 0.5rem;\n          border-radius: 30%;\n          box-shadow: 0 0 6px black;\n          z-index: 2;\n          color: #071a54;\n          background: linear-gradient(\n            90deg,\n            rgba(174, 238, 237, 1) 0%,\n            rgba(181, 23, 23, 1) 100%\n          );\n        }\n      \n      "))};var m=function(){var e=o.a.useRef(null),n=o.a.useRef(null),t=Object(a.useState)({}),r=Object(l.a)(t,2),c=r[0],i=r[1],s=Object(a.useState)({x:0,y:0}),u=Object(l.a)(s,2),d=u[0],m=u[1],p=Object(a.useState)(!1),h=Object(l.a)(p,2),v=h[0],b=h[1],x=Object(a.useState)({x:0,y:0}),E=Object(l.a)(x,2),k=E[0],g=E[1],j=Object(a.useState)("#000000"),C=Object(l.a)(j,2),S=C[0],w=C[1];return Object(a.useEffect)((function(){var t=e.current;t.width=n.current.offsetWidth,t.height=n.current.offsetHeight;var a=t.getContext("2d");a.lineJoin="round",a.lineCap="round",a.lineWidth=1,i(a);var o=t.getBoundingClientRect();m({x:parseInt(o.left),y:parseInt(o.top)})}),[c]),o.a.createElement("div",{className:"board",ref:n},o.a.createElement(f,{handleColor:function(e,n){("pencil"==n&&"#ffffff"==S||"pencil"!=n)&&w(e)},handleStroke:function(e){c.lineWidth=e}}),o.a.createElement("canvas",{ref:e,onMouseDown:function(e){b(!0),g({x:parseInt(e.clientX-d.x),y:parseInt(e.clientY-d.y)})},onMouseUp:function(){b(!1)},onMouseMove:function(e){var n=e.clientX-d.x,t=e.clientY-d.y;v&&(c.strokeStyle=S,c.beginPath(),c.moveTo(k.x,k.y),c.lineTo(n,t),c.stroke()),g({x:n,y:t})}}),o.a.createElement("style",{jsx:!0},"\n        .board {\n          background-color: white;\n          cursor: crosshair;\n          margin: 0 auto;\n          position: relative;\n          width: 100%;\n          overflow: hidden;\n          flex: auto;\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n          align-items: center;\n        }     \n      "))};var p=function(){return o.a.createElement("div",{className:"app"},o.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},85:function(e,n,t){e.exports=t(258)},90:function(e,n,t){},91:function(e,n,t){}},[[85,1,2]]]);
//# sourceMappingURL=main.4e312798.chunk.js.map