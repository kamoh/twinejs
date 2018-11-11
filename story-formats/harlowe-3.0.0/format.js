window.storyFormat({
	name: "Harlowe",
	version: "3.0.0",
	author: "Leon Arnott",
	description:
		"The default story format for Twine 2. See its <a href='http://twine2.neocities.org/' target='_blank' rel='noopener noreferrer'>documentation</a>.",
	image: "icon.svg",
	url: "http://twinery.org/",
	license: "Zlib",
	proofing: false,
	source:
		'<!DOCTYPE html>\n<html>\n<head>\n<meta charset="utf-8">\n<title>{{STORY_NAME}}</title>\n<style title="Twine CSS">@-webkit-keyframes appear{0%{opacity:0}to{opacity:1}}@keyframes appear{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fade-in-out{0%,to{opacity:0}50%{opacity:1}}@keyframes fade-in-out{0%,to{opacity:0}50%{opacity:1}}@-webkit-keyframes rumble{50%{-webkit-transform:translateY(-0.2em);transform:translateY(-0.2em)}}@keyframes rumble{50%{-webkit-transform:translateY(-0.2em);transform:translateY(-0.2em)}}@-webkit-keyframes shudder{50%{-webkit-transform:translateX(0.2em);transform:translateX(0.2em)}}@keyframes shudder{50%{-webkit-transform:translateX(0.2em);transform:translateX(0.2em)}}@-webkit-keyframes box-flash{0%{background-color:white;color:white}}@keyframes box-flash{0%{background-color:white;color:white}}@-webkit-keyframes pulse{0%{-webkit-transform:scale(0, 0);transform:scale(0, 0)}20%{-webkit-transform:scale(1.2, 1.2);transform:scale(1.2, 1.2)}40%{-webkit-transform:scale(0.9, 0.9);transform:scale(0.9, 0.9)}60%{-webkit-transform:scale(1.05, 1.05);transform:scale(1.05, 1.05)}80%{-webkit-transform:scale(0.925, 0.925);transform:scale(0.925, 0.925)}to{-webkit-transform:scale(1, 1);transform:scale(1, 1)}}@keyframes pulse{0%{-webkit-transform:scale(0, 0);transform:scale(0, 0)}20%{-webkit-transform:scale(1.2, 1.2);transform:scale(1.2, 1.2)}40%{-webkit-transform:scale(0.9, 0.9);transform:scale(0.9, 0.9)}60%{-webkit-transform:scale(1.05, 1.05);transform:scale(1.05, 1.05)}80%{-webkit-transform:scale(0.925, 0.925);transform:scale(0.925, 0.925)}to{-webkit-transform:scale(1, 1);transform:scale(1, 1)}}@-webkit-keyframes shudder-in{0%, to{-webkit-transform:translateX(0em);transform:translateX(0em)}5%, 25%, 45%{-webkit-transform:translateX(-1em);transform:translateX(-1em)}15%, 35%, 55%{-webkit-transform:translateX(1em);transform:translateX(1em)}65%{-webkit-transform:translateX(-0.6em);transform:translateX(-0.6em)}75%{-webkit-transform:translateX(0.6em);transform:translateX(0.6em)}85%{-webkit-transform:translateX(-0.2em);transform:translateX(-0.2em)}95%{-webkit-transform:translateX(0.2em);transform:translateX(0.2em)}}@keyframes shudder-in{0%, to{-webkit-transform:translateX(0em);transform:translateX(0em)}5%, 25%, 45%{-webkit-transform:translateX(-1em);transform:translateX(-1em)}15%, 35%, 55%{-webkit-transform:translateX(1em);transform:translateX(1em)}65%{-webkit-transform:translateX(-0.6em);transform:translateX(-0.6em)}75%{-webkit-transform:translateX(0.6em);transform:translateX(0.6em)}85%{-webkit-transform:translateX(-0.2em);transform:translateX(-0.2em)}95%{-webkit-transform:translateX(0.2em);transform:translateX(0.2em)}}@-webkit-keyframes rumble-in{0%, to{-webkit-transform:translateY(0em);transform:translateY(0em)}5%, 25%, 45%{-webkit-transform:translateY(-1em);transform:translateY(-1em)}15%, 35%, 55%{-webkit-transform:translateY(1em);transform:translateY(1em)}65%{-webkit-transform:translateY(-0.6em);transform:translateY(-0.6em)}75%{-webkit-transform:translateY(0.6em);transform:translateY(0.6em)}85%{-webkit-transform:translateY(-0.2em);transform:translateY(-0.2em)}95%{-webkit-transform:translateY(0.2em);transform:translateY(0.2em)}}@keyframes rumble-in{0%, to{-webkit-transform:translateY(0em);transform:translateY(0em)}5%, 25%, 45%{-webkit-transform:translateY(-1em);transform:translateY(-1em)}15%, 35%, 55%{-webkit-transform:translateY(1em);transform:translateY(1em)}65%{-webkit-transform:translateY(-0.6em);transform:translateY(-0.6em)}75%{-webkit-transform:translateY(0.6em);transform:translateY(0.6em)}85%{-webkit-transform:translateY(-0.2em);transform:translateY(-0.2em)}95%{-webkit-transform:translateY(0.2em);transform:translateY(0.2em)}}@-webkit-keyframes slide-right{0%{-webkit-transform:translateX(-100vw);transform:translateX(-100vw)}}@keyframes slide-right{0%{-webkit-transform:translateX(-100vw);transform:translateX(-100vw)}}@-webkit-keyframes slide-left{0%{-webkit-transform:translateX(100vw);transform:translateX(100vw)}}@keyframes slide-left{0%{-webkit-transform:translateX(100vw);transform:translateX(100vw)}}@-webkit-keyframes slide-up{0%{-webkit-transform:translateY(100vh);transform:translateY(100vh)}}@keyframes slide-up{0%{-webkit-transform:translateY(100vh);transform:translateY(100vh)}}@-webkit-keyframes slide-down{0%{-webkit-transform:translateY(-100vh);transform:translateY(-100vh)}}@keyframes slide-down{0%{-webkit-transform:translateY(-100vh);transform:translateY(-100vh)}}@-webkit-keyframes flicker{0%,29%,31%,63%,65%,77%,79%,86%,88%,91%,93%{opacity:0}30%{opacity:0.2}64%{opacity:0.4}78%{opacity:0.6}87%{opacity:0.8}92%, to{opacity:1}}@keyframes flicker{0%,29%,31%,63%,65%,77%,79%,86%,88%,91%,93%{opacity:0}30%{opacity:0.2}64%{opacity:0.4}78%{opacity:0.6}87%{opacity:0.8}92%, to{opacity:1}}.debug-mode tw-expression[type=hookref]{background-color:rgba(115,123,140,0.15)}.debug-mode tw-expression[type=hookref]::after{font-size:0.8rem;padding-left:0.2rem;padding-right:0.2rem;vertical-align:top;content:"?" attr(name)}.debug-mode tw-expression[type=variable]{background-color:rgba(140,128,115,0.15)}.debug-mode tw-expression[type=variable]::after{font-size:0.8rem;padding-left:0.2rem;padding-right:0.2rem;vertical-align:top;content:"$" attr(name)}.debug-mode tw-expression[type=tempVariable]{background-color:rgba(140,128,115,0.15)}.debug-mode tw-expression[type=tempVariable]::after{font-size:0.8rem;padding-left:0.2rem;padding-right:0.2rem;vertical-align:top;content:"_" attr(name)}.debug-mode tw-expression[type=macro]:nth-of-type(4n+0){background-color:rgba(136,153,102,0.15)}.debug-mode tw-expression[type=macro]:nth-of-type(2n+1){background-color:rgba(102,153,102,0.15)}.debug-mode tw-expression[type=macro]:nth-of-type(4n+2){background-color:rgba(102,153,136,0.15)}.debug-mode tw-expression[type=macro][name="display"]{background-color:rgba(0,170,255,0.1) !important}.debug-mode tw-expression[type=macro][name="if"],.debug-mode tw-expression[type=macro][name="if"]+tw-hook:not([name]),.debug-mode tw-expression[type=macro][name="unless"],.debug-mode tw-expression[type=macro][name="unless"]+tw-hook:not([name]),.debug-mode tw-expression[type=macro][name="elseif"],.debug-mode tw-expression[type=macro][name="elseif"]+tw-hook:not([name]),.debug-mode tw-expression[type=macro][name="else"],.debug-mode tw-expression[type=macro][name="else"]+tw-hook:not([name]){background-color:rgba(0,255,0,0.1) !important}.debug-mode tw-expression[type=macro].false{background-color:rgba(255,0,0,0.2) !important}.debug-mode tw-expression[type=macro].false+tw-hook:not([name]){display:none}.debug-mode tw-expression[type=macro][name="a"],.debug-mode tw-expression[type=macro][name="array"],.debug-mode tw-expression[type=macro][name="datamap"],.debug-mode tw-expression[type=macro][name="dataset"],.debug-mode tw-expression[type=macro][name="colour"],.debug-mode tw-expression[type=macro][name="color"],.debug-mode tw-expression[type=macro][name="num"],.debug-mode tw-expression[type=macro][name="number"],.debug-mode tw-expression[type=macro][name="text"],.debug-mode tw-expression[type=macro][name="print"]{background-color:rgba(255,255,0,0.2) !important}.debug-mode tw-expression[type=macro][name="put"],.debug-mode tw-expression[type=macro][name="set"]{background-color:rgba(255,128,0,0.2) !important}.debug-mode tw-expression[type=macro][name="script"]{background-color:rgba(255,191,0,0.2) !important}.debug-mode tw-expression[type=macro][name="style"]{background-color:rgba(185,198,198,0.2) !important}.debug-mode tw-expression[type=macro][name^="link"],.debug-mode tw-expression[type=macro][name^="click"],.debug-mode tw-expression[type=macro][name^="mouseover"],.debug-mode tw-expression[type=macro][name^="mouseout"]{background-color:rgba(128,223,32,0.2) !important}.debug-mode tw-expression[type=macro][name^="replace"],.debug-mode tw-expression[type=macro][name^="prepend"],.debug-mode tw-expression[type=macro][name^="append"],.debug-mode tw-expression[type=macro][name^="remove"]{background-color:rgba(223,96,32,0.2) !important}.debug-mode tw-expression[type=macro][name="live"]{background-color:rgba(32,96,223,0.2) !important}.debug-mode tw-expression[type=macro]::before{content:"(" attr(name) ":)";padding:0 0.5rem;font-size:1rem;vertical-align:middle;line-height:normal;background-color:inherit;border:1px solid rgba(255,255,255,0.5)}.debug-mode tw-hook{background-color:rgba(0,85,255,0.1) !important}.debug-mode tw-hook::before{font-size:0.8rem;padding-left:0.2rem;padding-right:0.2rem;vertical-align:top;content:"["}.debug-mode tw-hook::after{font-size:0.8rem;padding-left:0.2rem;padding-right:0.2rem;vertical-align:top;content:"]"}.debug-mode tw-hook[name]::after{font-size:0.8rem;padding-left:0.2rem;padding-right:0.2rem;vertical-align:top;content:"]<" attr(name) "|"}.debug-mode tw-pseudo-hook{background-color:rgba(255,170,0,0.1) !important}.debug-mode tw-collapsed::before{font-size:0.8rem;padding-left:0.2rem;padding-right:0.2rem;vertical-align:top;content:"{"}.debug-mode tw-collapsed::after{font-size:0.8rem;padding-left:0.2rem;padding-right:0.2rem;vertical-align:top;content:"}"}.debug-mode tw-verbatim::before,.debug-mode tw-verbatim::after{font-size:0.8rem;padding-left:0.2rem;padding-right:0.2rem;vertical-align:top;content:"`"}.debug-mode tw-align[style*="text-align: center"]{background:linear-gradient(to right, rgba(255,204,189,0) 0%, rgba(255,204,189,0.25) 50%, rgba(255,204,189,0) 100%)}.debug-mode tw-align[style*="text-align: left"]{background:linear-gradient(to right, rgba(255,204,189,0.25) 0%, rgba(255,204,189,0) 100%)}.debug-mode tw-align[style*="text-align: right"]{background:linear-gradient(to right, rgba(255,204,189,0) 0%, rgba(255,204,189,0.25) 100%)}.debug-mode tw-column{background-color:rgba(189,228,255,0.2)}.debug-mode tw-enchantment{animation:enchantment 0.5s infinite;-webkit-animation:enchantment 0.5s infinite;border:1px solid}.debug-mode tw-link::after,.debug-mode tw-broken-link::after{font-size:0.8rem;padding-left:0.2rem;padding-right:0.2rem;vertical-align:top;content:attr(passage-name)}.debug-mode tw-include{background-color:rgba(204,128,51,0.1)}.debug-mode tw-include::before{font-size:0.8rem;padding-left:0.2rem;padding-right:0.2rem;vertical-align:top;content:attr(type) \' "\' attr(title) \'"\'}@keyframes enchantment{0%,to{border-color:#ffb366}50%{border-color:#6fc}}@-webkit-keyframes enchantment{0%,to{border-color:#ffb366}50%{border-color:#6fc}}tw-debugger{position:fixed;box-sizing:border-box;bottom:0;right:0;z-index:999999;min-width:10em;min-height:1em;padding:1em;font-size:1.25em;font-family:sans-serif;border-left:solid #000 2px;border-top:solid #000 2px;border-top-left-radius:.5em;background:#fff;opacity:1}tw-debugger select{margin-right:1em;width:12em}tw-debugger button{border-radius:3px;border:solid #999 1px;margin:auto 4px;background-color:#fff;font-size:inherit}tw-debugger button.enabled{background-color:#eee;box-shadow:inset #ddd 3px 5px 0.5em}tw-debugger .variables{display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;-webkit-box-direction:normal;-webkit-box-orient:vertical;-webkit-flex-direction:column;-moz-flex-direction:column;-ms-flex-direction:column;flex-direction:column;position:absolute;bottom:100%;left:-2px;right:0;padding:1em;max-height:40vh;overflow-y:scroll;overflow-x:hidden;z-index:999998;background:#fff;border:inherit;border-top-left-radius:.5em;border-bottom-left-radius:.5em;font-size:0.8em}tw-debugger .variables:empty,tw-debugger .variables[hidden]{display:none}tw-debugger .variables .variable-row{display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;-webkit-box-direction:normal;-webkit-box-orient:horizontal;-webkit-flex-direction:row;-moz-flex-direction:row;-ms-flex-direction:row;flex-direction:row;flex-shrink:0}tw-debugger .variables .variable-row:nth-child(2n){background:#EEE}tw-debugger .variables .variable-name{display:inline-block;width:50%}tw-debugger .variables .variable-name::before{content:"$"}tw-debugger .variables .variable-name.temporary::before{content:"_"}tw-debugger .variables .variable-name .temporary-variable-scope{opacity:0.8;font-size:0.75em}tw-debugger .variables .variable-name .temporary-variable-scope::before{content:" in "}tw-debugger .variables .variable-value{display:inline-block;width:50%}tw-link,.link,tw-icon,.enchantment-clickblock{cursor:pointer}tw-link,.enchantment-link{color:#4169E1;font-weight:bold;text-decoration:none;transition:color 0.2s ease-in-out}tw-enchantment[style^="color"] tw-link:not(:hover),tw-enchantment[style*=" color"] tw-link:not(:hover),tw-enchantment[style^="color"] .enchantment-link:not(:hover),tw-enchantment[style*=" color"] .enchantment-link:not(:hover){color:inherit}tw-link:hover,.enchantment-link:hover{color:#00bfff}tw-link:active,.enchantment-link:active{color:#DD4B39}.visited{color:#6941e1}tw-enchantment[style^="color"] .visited:not(:hover),tw-enchantment[style*=" color"] .visited:not(:hover){color:inherit}.visited:hover{color:#E3E}tw-broken-link{color:#993333;border-bottom:2px solid #993333;cursor:not-allowed}tw-enchantment[style^="color"] tw-broken-link:not(:hover),tw-enchantment[style*=" color"] tw-broken-link:not(:hover){color:inherit}.enchantment-mouseover{border-bottom:1px dashed #666}.enchantment-mouseout{border:rgba(64,149,191,0.25) 1px solid}.enchantment-mouseout:hover{background-color:rgba(64,149,191,0.25);border:transparent 1px solid;border-radius:0.2em}.enchantment-clickblock{box-shadow:inset 0 0 0 0.5vmax;display:block;color:rgba(65,105,225,0.5);transition:color 0.2s ease-in-out}.enchantment-clickblock:hover{color:rgba(0,191,255,0.5)}.enchantment-clickblock:active{color:rgba(222,78,59,0.5)}html{margin:0;height:100%;overflow-x:hidden}*,:before,:after{position:relative;box-sizing:inherit}body{margin:0;height:100%}tw-storydata{display:none}tw-story{display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;-webkit-box-direction:normal;-webkit-box-orient:vertical;-webkit-flex-direction:column;-moz-flex-direction:column;-ms-flex-direction:column;flex-direction:column;font:100% Georgia, serif;box-sizing:border-box;width:100%;min-height:100%;font-size:1.5em;line-height:1.5em;padding:5% 20%;margin:0;overflow:hidden;background-color:#000;color:#fff}tw-passage{display:block}br+br{display:block;height:0;margin:0.8ex 0}tw-sidebar{left:-5em;width:3em;position:absolute;text-align:center;display:block}tw-icon{display:block;margin:0.5em 0;opacity:0.2;font-size:2.75em}tw-icon:hover{opacity:0.4}tw-hook:empty,tw-expression:empty{display:none}tw-error{display:inline-block;border-radius:0.2em;padding:0.2em;font-size:1rem;cursor:help}tw-error.error{background-color:rgba(223,58,190,0.4);color:#fff}tw-error.warning{background-color:rgba(223,140,58,0.4);color:#fff;display:none}.debug-mode tw-error.warning{display:inline}tw-error-explanation{display:block;font-size:0.8rem;line-height:1rem}tw-error-explanation-button{cursor:pointer;line-height:0em;border-radius:1px;border:1px solid black;font-size:0.8rem;margin:0 0.4rem;opacity:0.5}tw-error-explanation-button .folddown-arrowhead{display:inline-block}tw-notifier{border-radius:0.2em;padding:0.2em;font-size:1rem;background-color:rgba(223,182,58,0.4);display:none}.debug-mode tw-notifier{display:inline}tw-notifier::before{content:attr(message)}tw-colour{border:1px solid black;display:inline-block;width:1em;height:1em}select{background-color:inherit;font:inherit;border-style:solid;padding:2px}select:not([disabled]){color:inherit}h1{font-size:3em}h2{font-size:2.25em}h3{font-size:1.75em}h1,h2,h3,h4,h5,h6{line-height:1em;margin:0.3em 0 0.6em 0}pre{font-size:1rem}small{font-size:70%}big{font-size:120%}mark{color:rgba(0,0,0,0.6);background-color:#ff9}ins{color:rgba(0,0,0,0.6);background-color:rgba(255,242,204,0.5);border-radius:0.5em;box-shadow:0em 0em 0.2em #ffe699;text-decoration:none}center{text-align:center;margin:0 auto;width:60%}blink{text-decoration:none;animation:fade-in-out 1s steps(1, end) infinite alternate;-webkit-animation:fade-in-out 1s steps(1, end) infinite alternate}tw-align{display:block}tw-columns{display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;-webkit-box-direction:normal;-webkit-box-orient:horizontal;-webkit-flex-direction:row;-moz-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;-webkit-justify-content:space-between;-moz-justify-content:space-between;justify-content:space-between}tw-outline{color:white;text-shadow:-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000}tw-shadow{text-shadow:0.08em 0.08em 0.08em #000}tw-emboss{text-shadow:0.08em 0.08em 0em #000;color:white}tw-condense{letter-spacing:-0.08em}tw-expand{letter-spacing:0.1em}tw-blur{color:transparent;text-shadow:0em 0em 0.08em #000}tw-blurrier{color:transparent;text-shadow:0em 0em 0.2em #000}tw-blurrier::selection{background-color:transparent;color:transparent}tw-blurrier::-moz-selection{background-color:transparent;color:transparent}tw-smear{color:transparent;text-shadow:0em 0em 0.02em rgba(0,0,0,0.75),-0.2em 0em 0.5em rgba(0,0,0,0.5),0.2em 0em 0.5em rgba(0,0,0,0.5)}tw-mirror{display:inline-block;transform:scaleX(-1);-webkit-transform:scaleX(-1)}tw-upside-down{display:inline-block;transform:scaleY(-1);-webkit-transform:scaleY(-1)}tw-fade-in-out{text-decoration:none;animation:fade-in-out 2s ease-in-out infinite alternate;-webkit-animation:fade-in-out 2s ease-in-out infinite alternate}tw-rumble{-webkit-animation:rumble linear 0.1s 0s infinite;animation:rumble linear 0.1s 0s infinite;display:inline-block}tw-shudder{-webkit-animation:shudder linear 0.1s 0s infinite;animation:shudder linear 0.1s 0s infinite;display:inline-block}tw-shudder-in{animation:shudder-in 1s ease-out;-webkit-animation:shudder-in 1s ease-out}.transition-in{-webkit-animation:appear 0ms step-start;animation:appear 0ms step-start}.transition-out{-webkit-animation:appear 0ms step-end;animation:appear 0ms step-end}[data-t8n^=dissolve].transition-in{-webkit-animation:appear .8s;animation:appear .8s}[data-t8n^=dissolve].transition-out{-webkit-animation:appear .8s reverse;animation:appear .8s reverse}[data-t8n^=shudder].transition-in{display:inline-block;-webkit-animation:shudder-in .8s;animation:shudder-in .8s}[data-t8n^=shudder].transition-out{display:inline-block;-webkit-animation:shudder-in .8s reverse;animation:shudder-in .8s reverse}[data-t8n^=rumble].transition-in{display:inline-block;-webkit-animation:rumble-in .8s;animation:rumble-in .8s}[data-t8n^=rumble].transition-out{display:inline-block;-webkit-animation:rumble-in .8s reverse;animation:rumble-in .8s reverse}[data-t8n^=boxflash].transition-in{-webkit-animation:box-flash .8s;animation:box-flash .8s}[data-t8n^=pulse].transition-in{-webkit-animation:pulse .8s;animation:pulse .8s;display:inline-block}[data-t8n^=pulse].transition-out{-webkit-animation:pulse .8s reverse;animation:pulse .8s reverse;display:inline-block}[data-t8n^=slideleft].transition-in{-webkit-animation:slide-left .8s;animation:slide-left .8s;display:inline-block}[data-t8n^=slideleft].transition-out{-webkit-animation:slide-right .8s reverse;animation:slide-right .8s reverse;display:inline-block}[data-t8n^=slideright].transition-in{-webkit-animation:slide-right .8s;animation:slide-right .8s;display:inline-block}[data-t8n^=slideright].transition-out{-webkit-animation:slide-left .8s reverse;animation:slide-left .8s reverse;display:inline-block}[data-t8n^=slideup].transition-in{-webkit-animation:slide-up .8s;animation:slide-up .8s;display:inline-block}[data-t8n^=slideup].transition-out{-webkit-animation:slide-down .8s reverse;animation:slide-down .8s reverse;display:inline-block}[data-t8n^=slidedown].transition-in{-webkit-animation:slide-down .8s;animation:slide-down .8s;display:inline-block}[data-t8n^=slidedown].transition-out{-webkit-animation:slide-up .8s reverse;animation:slide-up .8s reverse;display:inline-block}[data-t8n^=flicker].transition-in{-webkit-animation:flicker .8s;animation:flicker .8s}[data-t8n^=flicker].transition-out{-webkit-animation:flicker .8s reverse;animation:flicker .8s reverse}[data-t8n$=fast]{animation-duration:.4s;-webkit-animation-duration:.4s}[data-t8n$=slow]{animation-duration:1.6s;-webkit-animation-duration:1.6s}\n</style>\n</head>\n\n<body>\n\n<tw-story></tw-story>\n\n{{STORY_DATA}}\n\n<script title="Twine engine code" data-main="harlowe">"use strict";function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var _slicedToArray=function(){function e(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{!r&&s.return&&s.return()}finally{if(i)throw o}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(){/**\n * @license almond 0.3.3 Copyright jQuery Foundation and other contributors.\n * Released under MIT license, http://github.com/requirejs/almond/LICENSE\n */\nvar requirejs,require,define;!function(e){function t(e,t){return v.call(e,t)}function n(e,t){var n,r,i,o,a,s,c,u,l,f,p,d,h=t&&t.split("/"),y=g.map,m=y&&y["*"]||{};if(e){for(e=e.split("/"),a=e.length-1,g.nodeIdCompat&&w.test(e[a])&&(e[a]=e[a].replace(w,"")),"."===e[0].charAt(0)&&h&&(d=h.slice(0,h.length-1),e=d.concat(e)),l=0;l<e.length;l++)if("."===(p=e[l]))e.splice(l,1),l-=1;else if(".."===p){if(0===l||1===l&&".."===e[2]||".."===e[l-1])continue;l>0&&(e.splice(l-1,2),l-=2)}e=e.join("/")}if((h||m)&&y){for(n=e.split("/"),l=n.length;l>0;l-=1){if(r=n.slice(0,l).join("/"),h)for(f=h.length;f>0;f-=1)if((i=y[h.slice(0,f).join("/")])&&(i=i[r])){o=i,s=l;break}if(o)break;!c&&m&&m[r]&&(c=m[r],u=l)}!o&&c&&(o=c,s=u),o&&(n.splice(0,s,o),e=n.join("/"))}return e}function r(t,n){return function(){var r=b.call(arguments,0);return"string"!=typeof r[0]&&1===r.length&&r.push(null),f.apply(e,r.concat([t,n]))}}function i(e){return function(t){return n(t,e)}}function o(e){return function(t){h[e]=t}}function a(n){if(t(y,n)){var r=y[n];delete y[n],m[n]=!0,l.apply(e,r)}if(!t(h,n)&&!t(m,n))throw new Error("No "+n);return h[n]}function s(e){var t,n=e?e.indexOf("!"):-1;return n>-1&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function c(e){return e?s(e):[]}function u(e){return function(){return g&&g.config&&g.config[e]||{}}}var l,f,p,d,h={},y={},g={},m={},v=Object.prototype.hasOwnProperty,b=[].slice,w=/\\.js$/;p=function(e,t){var r,o=s(e),c=o[0],u=t[1];return e=o[1],c&&(c=n(c,u),r=a(c)),c?e=r&&r.normalize?r.normalize(e,i(u)):n(e,u):(e=n(e,u),o=s(e),c=o[0],e=o[1],c&&(r=a(c))),{f:c?c+"!"+e:e,n:e,pr:c,p:r}},d={require:function(e){return r(e)},exports:function(e){var t=h[e];return void 0!==t?t:h[e]={}},module:function(e){return{id:e,uri:"",exports:h[e],config:u(e)}}},l=function(n,i,s,u){var l,f,g,v,b,w,x,T=[],O=void 0===s?"undefined":_typeof(s);if(u=u||n,w=c(u),"undefined"===O||"function"===O){for(i=!i.length&&s.length?["require","exports","module"]:i,b=0;b<i.length;b+=1)if(v=p(i[b],w),"require"===(f=v.f))T[b]=d.require(n);else if("exports"===f)T[b]=d.exports(n),x=!0;else if("module"===f)l=T[b]=d.module(n);else if(t(h,f)||t(y,f)||t(m,f))T[b]=a(f);else{if(!v.p)throw new Error(n+" missing "+f);v.p.load(v.n,r(u,!0),o(f),{}),T[b]=h[f]}g=s?s.apply(h[n],T):void 0,n&&(l&&l.exports!==e&&l.exports!==h[n]?h[n]=l.exports:g===e&&x||(h[n]=g))}else n&&(h[n]=s)},requirejs=require=f=function(t,n,r,i,o){if("string"==typeof t)return d[t]?d[t](n):a(p(t,c(n)).f);if(!t.splice){if(g=t,g.deps&&f(g.deps,g.callback),!n)return;n.splice?(t=n,n=r,r=null):t=e}return n=n||function(){},"function"==typeof r&&(r=i,i=o),i?l(e,t,n,r):setTimeout(function(){l(e,t,n,r)},4),f},f.config=function(e){return f(e)},requirejs._defined=h,define=function(e,n,r){if("string"!=typeof e)throw new Error("See almond README: incorrect module build, no module name");n.splice||(r=n,n=[]),t(h,e)||t(y,e)||(y[e]=[e,n,r])},define.amd={jQuery:!0}}(),define("almond",function(){}),function(e,t){"object"===("undefined"==typeof module?"undefined":_typeof(module))&&"object"===_typeof(module.exports)?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){function n(e,t,n){t=t||ae;var r,i=t.createElement("script");if(i.text=e,n)for(r in we)n[r]&&(i[r]=n[r]);t.head.appendChild(i).parentNode.removeChild(i)}function r(e){return null==e?e+"":"object"===(void 0===e?"undefined":_typeof(e))||"function"==typeof e?pe[de.call(e)]||"object":void 0===e?"undefined":_typeof(e)}function i(e){var t=!!e&&"length"in e&&e.length,n=r(e);return!ve(e)&&!be(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}function o(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}function a(e,t,n){return ve(t)?xe.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?xe.grep(e,function(e){return e===t!==n}):"string"!=typeof t?xe.grep(e,function(e){return fe.call(t,e)>-1!==n}):xe.filter(t,e,n)}function s(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}function c(e){var t={};return xe.each(e.match(Ie)||[],function(e,n){t[n]=!0}),t}function u(e){return e}function l(e){throw e}function f(e,t,n,r){var i;try{e&&ve(i=e.promise)?i.call(e).done(t).fail(n):e&&ve(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}function p(){ae.removeEventListener("DOMContentLoaded",p),e.removeEventListener("load",p),xe.ready()}function d(e,t){return t.toUpperCase()}function h(e){return e.replace(Le,"ms-").replace(qe,d)}function y(){this.expando=xe.expando+y.uid++}function g(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:$e.test(e)?JSON.parse(e):e)}function m(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Ve,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=g(n)}catch(e){}He.set(e,t,n)}else n=void 0;return n}function v(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return xe.css(e,t,"")},c=s(),u=n&&n[3]||(xe.cssNumber[t]?"":"px"),l=(xe.cssNumber[t]||"px"!==u&&+c)&&ze.exec(xe.css(e,t));if(l&&l[3]!==u){for(c/=2,u=u||l[3],l=+c||1;a--;)xe.style(e,t,l+u),(1-o)*(1-(o=s()/c||.5))<=0&&(a=0),l/=o;l*=2,xe.style(e,t,l+u),n=n||[]}return n&&(l=+l||+c||0,i=n[1]?l+(n[1]+1)*n[2]:+n[2],r&&(r.unit=u,r.start=l,r.end=i)),i}function b(e){var t,n=e.ownerDocument,r=e.nodeName,i=Xe[r];return i||(t=n.body.appendChild(n.createElement(r)),i=xe.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),Xe[r]=i,i)}function w(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)r=e[o],r.style&&(n=r.style.display,t?("none"===n&&(i[o]=Fe.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&Ue(r)&&(i[o]=b(r))):"none"!==n&&(i[o]="none",Fe.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}function x(e,t){var n;return n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&o(e,t)?xe.merge([e],n):n}function T(e,t){for(var n=0,r=e.length;n<r;n++)Fe.set(e[n],"globalEval",!t||Fe.get(t[n],"globalEval"))}function O(e,t,n,i,o){for(var a,s,c,u,l,f,p=t.createDocumentFragment(),d=[],h=0,y=e.length;h<y;h++)if((a=e[h])||0===a)if("object"===r(a))xe.merge(d,a.nodeType?[a]:a);else if(Ke.test(a)){for(s=s||p.appendChild(t.createElement("div")),c=(Ye.exec(a)||["",""])[1].toLowerCase(),u=Qe[c]||Qe._default,s.innerHTML=u[1]+xe.htmlPrefilter(a)+u[2],f=u[0];f--;)s=s.lastChild;xe.merge(d,s.childNodes),s=p.firstChild,s.textContent=""}else d.push(t.createTextNode(a));for(p.textContent="",h=0;a=d[h++];)if(i&&xe.inArray(a,i)>-1)o&&o.push(a);else if(l=xe.contains(a.ownerDocument,a),s=x(p.appendChild(a),"script"),l&&T(s),n)for(f=0;a=s[f++];)Ze.test(a.type||"")&&n.push(a);return p}function S(){return!0}function j(){return!1}function k(){try{return ae.activeElement}catch(e){}}function A(e,t,n,r,i,o){var a,s;if("object"===(void 0===t?"undefined":_typeof(t))){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)A(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=j;else if(!i)return e;return 1===o&&(a=i,i=function(e){return xe().off(e),a.apply(this,arguments)},i.guid=a.guid||(a.guid=xe.guid++)),e.each(function(){xe.event.add(this,t,i,r,n)})}function C(e,t){return o(e,"table")&&o(11!==t.nodeType?t:t.firstChild,"tr")?xe(e).children("tbody")[0]||e:e}function E(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function N(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function _(e,t){var n,r,i,o,a,s,c,u;if(1===t.nodeType){if(Fe.hasData(e)&&(o=Fe.access(e),a=Fe.set(t,o),u=o.events)){delete a.handle,a.events={};for(i in u)for(n=0,r=u[i].length;n<r;n++)xe.event.add(t,i,u[i][n])}He.hasData(e)&&(s=He.access(e),c=xe.extend({},s),He.set(t,c))}}function I(e,t){var n=t.nodeName.toLowerCase();"input"===n&&Je.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function P(e,t,r,i){t=ue.apply([],t);var o,a,s,c,u,l,f=0,p=e.length,d=p-1,h=t[0],y=ve(h);if(y||p>1&&"string"==typeof h&&!me.checkClone&&at.test(h))return e.each(function(n){var o=e.eq(n);y&&(t[0]=h.call(this,n,o.html())),P(o,t,r,i)});if(p&&(o=O(t,e[0].ownerDocument,!1,e,i),a=o.firstChild,1===o.childNodes.length&&(o=a),a||i)){for(s=xe.map(x(o,"script"),E),c=s.length;f<p;f++)u=o,f!==d&&(u=xe.clone(u,!0,!0),c&&xe.merge(s,x(u,"script"))),r.call(e[f],u,f);if(c)for(l=s[s.length-1].ownerDocument,xe.map(s,N),f=0;f<c;f++)u=s[f],Ze.test(u.type||"")&&!Fe.access(u,"globalEval")&&xe.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?xe._evalUrl&&xe._evalUrl(u.src):n(u.textContent.replace(st,""),l,u))}return e}function M(e,t,n){for(var r,i=t?xe.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||xe.cleanData(x(r)),r.parentNode&&(n&&xe.contains(r.ownerDocument,r)&&T(x(r,"script")),r.parentNode.removeChild(r));return e}function D(e,t,n){var r,i,o,a,s=e.style;return n=n||ut(e),n&&(a=n.getPropertyValue(t)||n[t],""!==a||xe.contains(e.ownerDocument,e)||(a=xe.style(e,t)),!me.pixelBoxStyles()&&ct.test(a)&&lt.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function L(e,t){return{get:function(){return e()?void delete this.get:(this.get=t).apply(this,arguments)}}}function q(e){if(e in gt)return e;for(var t=e[0].toUpperCase()+e.slice(1),n=yt.length;n--;)if((e=yt[n]+t)in gt)return e}function R(e){var t=xe.cssProps[e];return t||(t=xe.cssProps[e]=q(e)||e),t}function F(e,t,n){var r=ze.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function H(e,t,n,r,i,o){var a="width"===t?1:0,s=0,c=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(c+=xe.css(e,n+We[a],!0,i)),r?("content"===n&&(c-=xe.css(e,"padding"+We[a],!0,i)),"margin"!==n&&(c-=xe.css(e,"border"+We[a]+"Width",!0,i))):(c+=xe.css(e,"padding"+We[a],!0,i),"padding"!==n?c+=xe.css(e,"border"+We[a]+"Width",!0,i):s+=xe.css(e,"border"+We[a]+"Width",!0,i));return!r&&o>=0&&(c+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-c-s-.5))),c}function $(e,t,n){var r=ut(e),i=D(e,t,r),o="border-box"===xe.css(e,"boxSizing",!1,r),a=o;if(ct.test(i)){if(!n)return i;i="auto"}return a=a&&(me.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===xe.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+H(e,t,n||(o?"border":"content"),a,r,i)+"px"}function V(e,t,n,r,i){return new V.prototype.init(e,t,n,r,i)}function B(){vt&&(!1===ae.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(B):e.setTimeout(B,xe.fx.interval),xe.fx.tick())}function z(){return e.setTimeout(function(){mt=void 0}),mt=Date.now()}function W(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)n=We[r],i["margin"+n]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function U(e,t,n){for(var r,i=(J.tweeners[t]||[]).concat(J.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function G(e,t,n){var r,i,o,a,s,c,u,l,f="width"in t||"height"in t,p=this,d={},h=e.style,y=e.nodeType&&Ue(e),g=Fe.get(e,"fxshow");n.queue||(a=xe._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,xe.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],bt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(y?"hide":"show")){if("show"!==i||!g||void 0===g[r])continue;y=!0}d[r]=g&&g[r]||xe.style(e,r)}if((c=!xe.isEmptyObject(t))||!xe.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],u=g&&g.display,null==u&&(u=Fe.get(e,"display")),l=xe.css(e,"display"),"none"===l&&(u?l=u:(w([e],!0),u=e.style.display||u,l=xe.css(e,"display"),w([e]))),("inline"===l||"inline-block"===l&&null!=u)&&"none"===xe.css(e,"float")&&(c||(p.done(function(){h.display=u}),null==u&&(l=h.display,u="none"===l?"":l)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),c=!1;for(r in d)c||(g?"hidden"in g&&(y=g.hidden):g=Fe.access(e,"fxshow",{display:u}),o&&(g.hidden=!y),y&&w([e],!0),p.done(function(){y||w([e]),Fe.remove(e,"fxshow");for(r in d)xe.style(e,r,d[r])})),c=U(y?g[r]:0,r,p),r in g||(g[r]=c.start,y&&(c.end=c.start,c.start=0))}}function X(e,t){var n,r,i,o,a;for(n in e)if(r=h(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=xe.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function J(e,t,n){var r,i,o=0,a=J.prefilters.length,s=xe.Deferred().always(function(){delete c.elem}),c=function(){if(i)return!1;for(var t=mt||z(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,c=u.tweens.length;a<c;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),o<1&&c?n:(c||s.notifyWith(e,[u,1,0]),s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:xe.extend({},t),opts:xe.extend(!0,{specialEasing:{},easing:xe.easing._default},n),originalProperties:t,originalOptions:n,startTime:mt||z(),duration:n.duration,tweens:[],createTween:function(t,n){var r=xe.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)u.tweens[n].run(1);return t?(s.notifyWith(e,[u,1,0]),s.resolveWith(e,[u,t])):s.rejectWith(e,[u,t]),this}}),l=u.props;for(X(l,u.opts.specialEasing);o<a;o++)if(r=J.prefilters[o].call(u,e,l,u.opts))return ve(r.stop)&&(xe._queueHooks(u.elem,u.opts.queue).stop=r.stop.bind(r)),r;return xe.map(l,U,u),ve(u.opts.start)&&u.opts.start.call(e,u),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always),xe.fx.timer(xe.extend(c,{elem:e,anim:u,queue:u.opts.queue})),u}function Y(e){return(e.match(Ie)||[]).join(" ")}function Z(e){return e.getAttribute&&e.getAttribute("class")||""}function Q(e){return Array.isArray(e)?e:"string"==typeof e?e.match(Ie)||[]:[]}function K(e,t,n,i){var o;if(Array.isArray(t))xe.each(t,function(t,r){n||_t.test(e)?i(e,r):K(e+"["+("object"===(void 0===r?"undefined":_typeof(r))&&null!=r?t:"")+"]",r,n,i)});else if(n||"object"!==r(t))i(e,t);else for(o in t)K(e+"["+o+"]",t[o],n,i)}function ee(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(Ie)||[];if(ve(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function te(e,t,n,r){function i(s){var c;return o[s]=!0,xe.each(e[s]||[],function(e,s){var u=s(t,n,r);return"string"!=typeof u||a||o[u]?a?!(c=u):void 0:(t.dataTypes.unshift(u),i(u),!1)}),c}var o={},a=e===Bt;return i(t.dataTypes[0])||!o["*"]&&i("*")}function ne(e,t){var n,r,i=xe.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&xe.extend(!0,e,r),e}function re(e,t,n){for(var r,i,o,a,s=e.contents,c=e.dataTypes;"*"===c[0];)c.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){c.unshift(i);break}if(c[0]in n)o=c[0];else{for(i in n){if(!c[0]||e.converters[i+" "+c[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==c[0]&&c.unshift(o),n[o]}function ie(e,t,n,r){var i,o,a,s,c,u={},l=e.dataTypes.slice();if(l[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];for(o=l.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!c&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),c=o,o=l.shift())if("*"===o)o=c;else if("*"!==c&&c!==o){if(!(a=u[c+" "+o]||u["* "+o]))for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[c+" "+s[0]]||u["* "+s[0]])){!0===a?a=u[i]:!0!==u[i]&&(o=s[0],l.unshift(s[1]));break}if(!0!==a)if(a&&e.throws)t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+c+" to "+o}}}return{state:"success",data:t}}var oe=[],ae=e.document,se=Object.getPrototypeOf,ce=oe.slice,ue=oe.concat,le=oe.push,fe=oe.indexOf,pe={},de=pe.toString,he=pe.hasOwnProperty,ye=he.toString,ge=ye.call(Object),me={},ve=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},be=function(e){return null!=e&&e===e.window},we={type:!0,src:!0,noModule:!0},xe=function e(t,n){return new e.fn.init(t,n)},Te=/^[\\s\\uFEFF\\xA0]+|[\\s\\uFEFF\\xA0]+$/g;xe.fn=xe.prototype={jquery:"3.3.1",constructor:xe,length:0,toArray:function(){return ce.call(this)},get:function(e){return null==e?ce.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=xe.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return xe.each(this,e)},map:function(e){return this.pushStack(xe.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(ce.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:le,sort:oe.sort,splice:oe.splice},xe.extend=xe.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,c=arguments.length,u=!1;for("boolean"==typeof a&&(u=a,a=arguments[s]||{},s++),"object"===(void 0===a?"undefined":_typeof(a))||ve(a)||(a={}),s===c&&(a=this,s--);s<c;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],r=e[t],a!==r&&(u&&r&&(xe.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&xe.isPlainObject(n)?n:{},a[t]=xe.extend(u,o,r)):void 0!==r&&(a[t]=r));return a},xe.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==de.call(e))&&(!(t=se(e))||"function"==typeof(n=he.call(t,"constructor")&&t.constructor)&&ye.call(n)===ge)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){n(e)},each:function(e,t){var n,r=0;if(i(e))for(n=e.length;r<n&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(Te,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(i(Object(e))?xe.merge(n,"string"==typeof e?[e]:e):le.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:fe.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,o,a=0,s=[];if(i(e))for(r=e.length;a<r;a++)null!=(o=t(e[a],a,n))&&s.push(o);else for(a in e)null!=(o=t(e[a],a,n))&&s.push(o);return ue.apply([],s)},guid:1,support:me}),"function"==typeof Symbol&&(xe.fn[Symbol.iterator]=oe[Symbol.iterator]),xe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){pe["[object "+t+"]"]=t.toLowerCase()});var Oe=function(e){function t(e,t,n,r){var i,o,a,s,c,l,p,d=t&&t.ownerDocument,h=t?t.nodeType:9;if(n=n||[],"string"!=typeof e||!e||1!==h&&9!==h&&11!==h)return n;if(!r&&((t?t.ownerDocument||t:F)!==_&&N(t),t=t||_,P)){if(11!==h&&(c=ye.exec(e)))if(i=c[1]){if(9===h){if(!(a=t.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(d&&(a=d.getElementById(i))&&q(t,a)&&a.id===i)return n.push(a),n}else{if(c[2])return Y.apply(n,t.getElementsByTagName(e)),n;if((i=c[3])&&w.getElementsByClassName&&t.getElementsByClassName)return Y.apply(n,t.getElementsByClassName(i)),n}if(w.qsa&&!z[e+" "]&&(!M||!M.test(e))){if(1!==h)d=t,p=e;else if("object"!==t.nodeName.toLowerCase()){for((s=t.getAttribute("id"))?s=s.replace(be,we):t.setAttribute("id",s=R),l=S(e),o=l.length;o--;)l[o]="#"+s+" "+f(l[o]);p=l.join(","),d=ge.test(e)&&u(t.parentNode)||t}if(p)try{return Y.apply(n,d.querySelectorAll(p)),n}catch(e){}finally{s===R&&t.removeAttribute("id")}}}return k(e.replace(oe,"$1"),t,n,r)}function n(){function e(n,r){return t.push(n+" ")>x.cacheLength&&delete e[t.shift()],e[n+" "]=r}var t=[];return e}function r(e){return e[R]=!0,e}function i(e){var t=_.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function o(e,t){for(var n=e.split("|"),r=n.length;r--;)x.attrHandle[n[r]]=t}function a(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function s(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&Te(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function c(e){return r(function(t){return t=+t,r(function(n,r){for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function u(e){return e&&void 0!==e.getElementsByTagName&&e}function l(){}function f(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function p(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=$++;return t.first?function(t,n,i){for(;t=t[r];)if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,c){var u,l,f,p=[H,s];if(c){for(;t=t[r];)if((1===t.nodeType||a)&&e(t,n,c))return!0}else for(;t=t[r];)if(1===t.nodeType||a)if(f=t[R]||(t[R]={}),l=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((u=l[o])&&u[0]===H&&u[1]===s)return p[2]=u[2];if(l[o]=p,p[2]=e(t,n,c))return!0}return!1}}function d(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function h(e,n,r){for(var i=0,o=n.length;i<o;i++)t(e,n[i],r);return r}function y(e,t,n,r,i){for(var o,a=[],s=0,c=e.length,u=null!=t;s<c;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),u&&t.push(s)));return a}function g(e,t,n,i,o,a){return i&&!i[R]&&(i=g(i)),o&&!o[R]&&(o=g(o,a)),r(function(r,a,s,c){var u,l,f,p=[],d=[],g=a.length,m=r||h(t||"*",s.nodeType?[s]:s,[]),v=!e||!r&&t?m:y(m,p,e,s,c),b=n?o||(r?e:g||i)?[]:a:v;if(n&&n(v,b,s,c),i)for(u=y(b,d),i(u,[],s,c),l=u.length;l--;)(f=u[l])&&(b[d[l]]=!(v[d[l]]=f));if(r){if(o||e){if(o){for(u=[],l=b.length;l--;)(f=b[l])&&u.push(v[l]=f);o(null,b=[],u,c)}for(l=b.length;l--;)(f=b[l])&&(u=o?Q(r,f):p[l])>-1&&(r[u]=!(a[u]=f))}}else b=y(b===a?b.splice(g,b.length):b),o?o(null,a,b,c):Y.apply(a,b)})}function m(e){for(var t,n,r,i=e.length,o=x.relative[e[0].type],a=o||x.relative[" "],s=o?1:0,c=p(function(e){return e===t},a,!0),u=p(function(e){return Q(t,e)>-1},a,!0),l=[function(e,n,r){var i=!o&&(r||n!==A)||((t=n).nodeType?c(e,n,r):u(e,n,r));return t=null,i}];s<i;s++)if(n=x.relative[e[s].type])l=[p(d(l),n)];else{if(n=x.filter[e[s].type].apply(null,e[s].matches),n[R]){for(r=++s;r<i&&!x.relative[e[r].type];r++);return g(s>1&&d(l),s>1&&f(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(oe,"$1"),n,s<r&&m(e.slice(s,r)),r<i&&m(e=e.slice(r)),r<i&&f(e))}l.push(n)}return d(l)}function v(e,n){var i=n.length>0,o=e.length>0,a=function(r,a,s,c,u){var l,f,p,d=0,h="0",g=r&&[],m=[],v=A,b=r||o&&x.find.TAG("*",u),w=H+=null==v?1:Math.random()||.1,T=b.length;for(u&&(A=a===_||a||u);h!==T&&null!=(l=b[h]);h++){if(o&&l){for(f=0,a||l.ownerDocument===_||(N(l),s=!P);p=e[f++];)if(p(l,a||_,s)){c.push(l);break}u&&(H=w)}i&&((l=!p&&l)&&d--,r&&g.push(l))}if(d+=h,i&&h!==d){for(f=0;p=n[f++];)p(g,m,a,s);if(r){if(d>0)for(;h--;)g[h]||m[h]||(m[h]=X.call(c));m=y(m)}Y.apply(c,m),u&&!r&&m.length>0&&d+n.length>1&&t.uniqueSort(c)}return u&&(H=w,A=v),g};return i?r(a):a}var b,w,x,T,O,S,j,k,A,C,E,N,_,I,P,M,D,L,q,R="sizzle"+1*new Date,F=e.document,H=0,$=0,V=n(),B=n(),z=n(),W=function(e,t){return e===t&&(E=!0),0},U={}.hasOwnProperty,G=[],X=G.pop,J=G.push,Y=G.push,Z=G.slice,Q=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ee="[\\\\x20\\\\t\\\\r\\\\n\\\\f]",te="(?:\\\\\\\\.|[\\\\w-]|[^\\0-\\\\xa0])+",ne="\\\\["+ee+"*("+te+")(?:"+ee+"*([*^$|!~]?=)"+ee+"*(?:\'((?:\\\\\\\\.|[^\\\\\\\\\'])*)\'|\\"((?:\\\\\\\\.|[^\\\\\\\\\\"])*)\\"|("+te+"))|)"+ee+"*\\\\]",re=":("+te+")(?:\\\\(((\'((?:\\\\\\\\.|[^\\\\\\\\\'])*)\'|\\"((?:\\\\\\\\.|[^\\\\\\\\\\"])*)\\")|((?:\\\\\\\\.|[^\\\\\\\\()[\\\\]]|"+ne+")*)|.*)\\\\)|)",ie=new RegExp(ee+"+","g"),oe=new RegExp("^"+ee+"+|((?:^|[^\\\\\\\\])(?:\\\\\\\\.)*)"+ee+"+$","g"),ae=new RegExp("^"+ee+"*,"+ee+"*"),se=new RegExp("^"+ee+"*([>+~]|"+ee+")"+ee+"*"),ce=new RegExp("="+ee+"*([^\\\\]\'\\"]*?)"+ee+"*\\\\]","g"),ue=new RegExp(re),le=new RegExp("^"+te+"$"),fe={ID:new RegExp("^#("+te+")"),CLASS:new RegExp("^\\\\.("+te+")"),TAG:new RegExp("^("+te+"|[*])"),ATTR:new RegExp("^"+ne),PSEUDO:new RegExp("^"+re),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\\\("+ee+"*(even|odd|(([+-]|)(\\\\d*)n|)"+ee+"*(?:([+-]|)"+ee+"*(\\\\d+)|))"+ee+"*\\\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+ee+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\\\("+ee+"*((?:-\\\\d)?\\\\d*)"+ee+"*\\\\)|)(?=[^-]|$)","i")},pe=/^(?:input|select|textarea|button)$/i,de=/^h\\d$/i,he=/^[^{]+\\{\\s*\\[native \\w/,ye=/^(?:#([\\w-]+)|(\\w+)|\\.([\\w-]+))$/,ge=/[+~]/,me=new RegExp("\\\\\\\\([\\\\da-f]{1,6}"+ee+"?|("+ee+")|.)","ig"),ve=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},be=/([\\0-\\x1f\\x7f]|^-?\\d)|^-$|[^\\0-\\x1f\\x7f-\\uFFFF\\w-]/g,we=function(e,t){return t?"\\0"===e?"\\ufffd":e.slice(0,-1)+"\\\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\\\"+e},xe=function(){N()},Te=p(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{Y.apply(G=Z.call(F.childNodes),F.childNodes),G[F.childNodes.length].nodeType}catch(e){Y={apply:G.length?function(e,t){J.apply(e,Z.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}w=t.support={},O=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},N=t.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:F;return r!==_&&9===r.nodeType&&r.documentElement?(_=r,I=_.documentElement,P=!O(_),F!==_&&(n=_.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",xe,!1):n.attachEvent&&n.attachEvent("onunload",xe)),w.attributes=i(function(e){return e.className="i",!e.getAttribute("className")}),w.getElementsByTagName=i(function(e){return e.appendChild(_.createComment("")),!e.getElementsByTagName("*").length}),w.getElementsByClassName=he.test(_.getElementsByClassName),w.getById=i(function(e){return I.appendChild(e).id=R,!_.getElementsByName||!_.getElementsByName(R).length}),w.getById?(x.filter.ID=function(e){var t=e.replace(me,ve);return function(e){return e.getAttribute("id")===t}},x.find.ID=function(e,t){if(void 0!==t.getElementById&&P){var n=t.getElementById(e);return n?[n]:[]}}):(x.filter.ID=function(e){var t=e.replace(me,ve);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},x.find.ID=function(e,t){if(void 0!==t.getElementById&&P){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];for(i=t.getElementsByName(e),r=0;o=i[r++];)if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),x.find.TAG=w.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):w.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},x.find.CLASS=w.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&P)return t.getElementsByClassName(e)},D=[],M=[],(w.qsa=he.test(_.querySelectorAll))&&(i(function(e){I.appendChild(e).innerHTML="<a id=\'"+R+"\'></a><select id=\'"+R+"-\\r\\\\\' msallowcapture=\'\'><option selected=\'\'></option></select>",e.querySelectorAll("[msallowcapture^=\'\']").length&&M.push("[*^$]="+ee+"*(?:\'\'|\\"\\")"),e.querySelectorAll("[selected]").length||M.push("\\\\["+ee+"*(?:value|"+K+")"),e.querySelectorAll("[id~="+R+"-]").length||M.push("~="),e.querySelectorAll(":checked").length||M.push(":checked"),e.querySelectorAll("a#"+R+"+*").length||M.push(".#.+[+~]")}),i(function(e){e.innerHTML="<a href=\'\' disabled=\'disabled\'></a><select disabled=\'disabled\'><option/></select>";var t=_.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&M.push("name"+ee+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&M.push(":enabled",":disabled"),I.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&M.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),M.push(",.*:")})),(w.matchesSelector=he.test(L=I.matches||I.webkitMatchesSelector||I.mozMatchesSelector||I.oMatchesSelector||I.msMatchesSelector))&&i(function(e){w.disconnectedMatch=L.call(e,"*"),L.call(e,"[s!=\'\']:x"),D.push("!=",re)}),M=M.length&&new RegExp(M.join("|")),D=D.length&&new RegExp(D.join("|")),t=he.test(I.compareDocumentPosition),q=t||he.test(I.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},W=t?function(e,t){if(e===t)return E=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!w.sortDetached&&t.compareDocumentPosition(e)===n?e===_||e.ownerDocument===F&&q(F,e)?-1:t===_||t.ownerDocument===F&&q(F,t)?1:C?Q(C,e)-Q(C,t):0:4&n?-1:1)}:function(e,t){if(e===t)return E=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,s=[e],c=[t];if(!i||!o)return e===_?-1:t===_?1:i?-1:o?1:C?Q(C,e)-Q(C,t):0;if(i===o)return a(e,t);for(n=e;n=n.parentNode;)s.unshift(n);for(n=t;n=n.parentNode;)c.unshift(n);for(;s[r]===c[r];)r++;return r?a(s[r],c[r]):s[r]===F?-1:c[r]===F?1:0},_):_},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==_&&N(e),n=n.replace(ce,"=\'$1\']"),w.matchesSelector&&P&&!z[n+" "]&&(!D||!D.test(n))&&(!M||!M.test(n)))try{var r=L.call(e,n);if(r||w.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return t(n,_,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==_&&N(e),q(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==_&&N(e);var n=x.attrHandle[t.toLowerCase()],r=n&&U.call(x.attrHandle,t.toLowerCase())?n(e,t,!P):void 0;return void 0!==r?r:w.attributes||!P?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},t.escape=function(e){return(e+"").replace(be,we)},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],r=0,i=0;if(E=!w.detectDuplicates,C=!w.sortStable&&e.slice(0),e.sort(W),E){for(;t=e[i++];)t===e[i]&&(r=n.push(i));for(;r--;)e.splice(n[r],1)}return C=null,e},T=t.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=T(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r++];)n+=T(t);return n},x=t.selectors={cacheLength:50,createPseudo:r,match:fe,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(me,ve),e[3]=(e[3]||e[4]||e[5]||"").replace(me,ve),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return fe.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&ue.test(n)&&(t=S(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){\nvar t=e.replace(me,ve).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=V[e+" "];return t||(t=new RegExp("(^|"+ee+")"+e+"("+ee+"|$)"))&&V(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,n,r){return function(i){var o=t.attr(i,e);return null==o?"!="===n:!n||(o+="","="===n?o===r:"!="===n?o!==r:"^="===n?r&&0===o.indexOf(r):"*="===n?r&&o.indexOf(r)>-1:"$="===n?r&&o.slice(-r.length)===r:"~="===n?(" "+o.replace(ie," ")+" ").indexOf(r)>-1:"|="===n&&(o===r||o.slice(0,r.length+1)===r+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,c){var u,l,f,p,d,h,y=o!==a?"nextSibling":"previousSibling",g=t.parentNode,m=s&&t.nodeName.toLowerCase(),v=!c&&!s,b=!1;if(g){if(o){for(;y;){for(p=t;p=p[y];)if(s?p.nodeName.toLowerCase()===m:1===p.nodeType)return!1;h=y="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?g.firstChild:g.lastChild],a&&v){for(p=g,f=p[R]||(p[R]={}),l=f[p.uniqueID]||(f[p.uniqueID]={}),u=l[e]||[],d=u[0]===H&&u[1],b=d&&u[2],p=d&&g.childNodes[d];p=++d&&p&&p[y]||(b=d=0)||h.pop();)if(1===p.nodeType&&++b&&p===t){l[e]=[H,d,b];break}}else if(v&&(p=t,f=p[R]||(p[R]={}),l=f[p.uniqueID]||(f[p.uniqueID]={}),u=l[e]||[],d=u[0]===H&&u[1],b=d),!1===b)for(;(p=++d&&p&&p[y]||(b=d=0)||h.pop())&&((s?p.nodeName.toLowerCase()!==m:1!==p.nodeType)||!++b||(v&&(f=p[R]||(p[R]={}),l=f[p.uniqueID]||(f[p.uniqueID]={}),l[e]=[H,b]),p!==t)););return(b-=i)===r||b%r==0&&b/r>=0}}},PSEUDO:function(e,n){var i,o=x.pseudos[e]||x.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return o[R]?o(n):o.length>1?(i=[e,e,"",n],x.setFilters.hasOwnProperty(e.toLowerCase())?r(function(e,t){for(var r,i=o(e,n),a=i.length;a--;)r=Q(e,i[a]),e[r]=!(t[r]=i[a])}):function(e){return o(e,0,i)}):o}},pseudos:{not:r(function(e){var t=[],n=[],i=j(e.replace(oe,"$1"));return i[R]?r(function(e,t,n,r){for(var o,a=i(e,null,r,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,r,o){return t[0]=e,i(t,null,o,n),t[0]=null,!n.pop()}}),has:r(function(e){return function(n){return t(e,n).length>0}}),contains:r(function(e){return e=e.replace(me,ve),function(t){return(t.textContent||t.innerText||T(t)).indexOf(e)>-1}}),lang:r(function(e){return le.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(me,ve).toLowerCase(),function(t){var n;do{if(n=P?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===I},focus:function(e){return e===_.activeElement&&(!_.hasFocus||_.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:s(!1),disabled:s(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!x.pseudos.empty(e)},header:function(e){return de.test(e.nodeName)},input:function(e){return pe.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:c(function(){return[0]}),last:c(function(e,t){return[t-1]}),eq:c(function(e,t,n){return[n<0?n+t:n]}),even:c(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:c(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:c(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:c(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},x.pseudos.nth=x.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})x.pseudos[b]=function(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}(b);for(b in{submit:!0,reset:!0})x.pseudos[b]=function(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}(b);return l.prototype=x.filters=x.pseudos,x.setFilters=new l,S=t.tokenize=function(e,n){var r,i,o,a,s,c,u,l=B[e+" "];if(l)return n?0:l.slice(0);for(s=e,c=[],u=x.preFilter;s;){r&&!(i=ae.exec(s))||(i&&(s=s.slice(i[0].length)||s),c.push(o=[])),r=!1,(i=se.exec(s))&&(r=i.shift(),o.push({value:r,type:i[0].replace(oe," ")}),s=s.slice(r.length));for(a in x.filter)!(i=fe[a].exec(s))||u[a]&&!(i=u[a](i))||(r=i.shift(),o.push({value:r,type:a,matches:i}),s=s.slice(r.length));if(!r)break}return n?s.length:s?t.error(e):B(e,c).slice(0)},j=t.compile=function(e,t){var n,r=[],i=[],o=z[e+" "];if(!o){for(t||(t=S(e)),n=t.length;n--;)o=m(t[n]),o[R]?r.push(o):i.push(o);o=z(e,v(i,r)),o.selector=e}return o},k=t.select=function(e,t,n,r){var i,o,a,s,c,l="function"==typeof e&&e,p=!r&&S(e=l.selector||e);if(n=n||[],1===p.length){if(o=p[0]=p[0].slice(0),o.length>2&&"ID"===(a=o[0]).type&&9===t.nodeType&&P&&x.relative[o[1].type]){if(!(t=(x.find.ID(a.matches[0].replace(me,ve),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}for(i=fe.needsContext.test(e)?0:o.length;i--&&(a=o[i],!x.relative[s=a.type]);)if((c=x.find[s])&&(r=c(a.matches[0].replace(me,ve),ge.test(o[0].type)&&u(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&f(o)))return Y.apply(n,r),n;break}}return(l||j(e,p))(r,t,!P,n,!t||ge.test(e)&&u(t.parentNode)||t),n},w.sortStable=R.split("").sort(W).join("")===R,w.detectDuplicates=!!E,N(),w.sortDetached=i(function(e){return 1&e.compareDocumentPosition(_.createElement("fieldset"))}),i(function(e){return e.innerHTML="<a href=\'#\'></a>","#"===e.firstChild.getAttribute("href")})||o("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),w.attributes&&i(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||o("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),i(function(e){return null==e.getAttribute("disabled")})||o(K,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),t}(e);xe.find=Oe,xe.expr=Oe.selectors,xe.expr[":"]=xe.expr.pseudos,xe.uniqueSort=xe.unique=Oe.uniqueSort,xe.text=Oe.getText,xe.isXMLDoc=Oe.isXML,xe.contains=Oe.contains,xe.escapeSelector=Oe.escape;var Se=function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&xe(e).is(n))break;r.push(e)}return r},je=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},ke=xe.expr.match.needsContext,Ae=/^<([a-z][^\\/\\0>:\\x20\\t\\r\\n\\f]*)[\\x20\\t\\r\\n\\f]*\\/?>(?:<\\/\\1>|)$/i;xe.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?xe.find.matchesSelector(r,e)?[r]:[]:xe.find.matches(e,xe.grep(t,function(e){return 1===e.nodeType}))},xe.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(xe(e).filter(function(){for(t=0;t<r;t++)if(xe.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)xe.find(e,i[t],n);return r>1?xe.uniqueSort(n):n},filter:function(e){return this.pushStack(a(this,e||[],!1))},not:function(e){return this.pushStack(a(this,e||[],!0))},is:function(e){return!!a(this,"string"==typeof e&&ke.test(e)?xe(e):e||[],!1).length}});var Ce,Ee=/^(?:\\s*(<[\\w\\W]+>)[^>]*|#([\\w-]+))$/;(xe.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||Ce,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:Ee.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof xe?t[0]:t,xe.merge(this,xe.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:ae,!0)),Ae.test(r[1])&&xe.isPlainObject(t))for(r in t)ve(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return i=ae.getElementById(r[2]),i&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):ve(e)?void 0!==n.ready?n.ready(e):e(xe):xe.makeArray(e,this)}).prototype=xe.fn,Ce=xe(ae);var Ne=/^(?:parents|prev(?:Until|All))/,_e={children:!0,contents:!0,next:!0,prev:!0};xe.fn.extend({has:function(e){var t=xe(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(xe.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&xe(e);if(!ke.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&xe.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?xe.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?fe.call(xe(e),this[0]):fe.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(xe.uniqueSort(xe.merge(this.get(),xe(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),xe.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return Se(e,"parentNode")},parentsUntil:function(e,t,n){return Se(e,"parentNode",n)},next:function(e){return s(e,"nextSibling")},prev:function(e){return s(e,"previousSibling")},nextAll:function(e){return Se(e,"nextSibling")},prevAll:function(e){return Se(e,"previousSibling")},nextUntil:function(e,t,n){return Se(e,"nextSibling",n)},prevUntil:function(e,t,n){return Se(e,"previousSibling",n)},siblings:function(e){return je((e.parentNode||{}).firstChild,e)},children:function(e){return je(e.firstChild)},contents:function(e){return o(e,"iframe")?e.contentDocument:(o(e,"template")&&(e=e.content||e),xe.merge([],e.childNodes))}},function(e,t){xe.fn[e]=function(n,r){var i=xe.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=xe.filter(r,i)),this.length>1&&(_e[e]||xe.uniqueSort(i),Ne.test(e)&&i.reverse()),this.pushStack(i)}});var Ie=/[^\\x20\\t\\r\\n\\f]+/g;xe.Callbacks=function(e){e="string"==typeof e?c(e):xe.extend({},e);var t,n,i,o,a=[],s=[],u=-1,l=function(){for(o=o||e.once,i=t=!0;s.length;u=-1)for(n=s.shift();++u<a.length;)!1===a[u].apply(n[0],n[1])&&e.stopOnFalse&&(u=a.length,n=!1);e.memory||(n=!1),t=!1,o&&(a=n?[]:"")},f={add:function(){return a&&(n&&!t&&(u=a.length-1,s.push(n)),function t(n){xe.each(n,function(n,i){ve(i)?e.unique&&f.has(i)||a.push(i):i&&i.length&&"string"!==r(i)&&t(i)})}(arguments),n&&!t&&l()),this},remove:function(){return xe.each(arguments,function(e,t){for(var n;(n=xe.inArray(t,a,n))>-1;)a.splice(n,1),n<=u&&u--}),this},has:function(e){return e?xe.inArray(e,a)>-1:a.length>0},empty:function(){return a&&(a=[]),this},disable:function(){return o=s=[],a=n="",this},disabled:function(){return!a},lock:function(){return o=s=[],n||t||(a=n=""),this},locked:function(){return!!o},fireWith:function(e,n){return o||(n=n||[],n=[e,n.slice?n.slice():n],s.push(n),t||l()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!i}};return f},xe.extend({Deferred:function(t){var n=[["notify","progress",xe.Callbacks("memory"),xe.Callbacks("memory"),2],["resolve","done",xe.Callbacks("once memory"),xe.Callbacks("once memory"),0,"resolved"],["reject","fail",xe.Callbacks("once memory"),xe.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},catch:function(e){return i.then(null,e)},pipe:function(){var e=arguments;return xe.Deferred(function(t){xe.each(n,function(n,r){var i=ve(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&ve(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){function o(t,n,r,i){return function(){var s=this,c=arguments,f=function(){var e,f;if(!(t<a)){if((e=r.apply(s,c))===n.promise())throw new TypeError("Thenable self-resolution");f=e&&("object"===(void 0===e?"undefined":_typeof(e))||"function"==typeof e)&&e.then,ve(f)?i?f.call(e,o(a,n,u,i),o(a,n,l,i)):(a++,f.call(e,o(a,n,u,i),o(a,n,l,i),o(a,n,u,n.notifyWith))):(r!==u&&(s=void 0,c=[e]),(i||n.resolveWith)(s,c))}},p=i?f:function(){try{f()}catch(e){xe.Deferred.exceptionHook&&xe.Deferred.exceptionHook(e,p.stackTrace),t+1>=a&&(r!==l&&(s=void 0,c=[e]),n.rejectWith(s,c))}};t?p():(xe.Deferred.getStackHook&&(p.stackTrace=xe.Deferred.getStackHook()),e.setTimeout(p))}}var a=0;return xe.Deferred(function(e){n[0][3].add(o(0,e,ve(i)?i:u,e.notifyWith)),n[1][3].add(o(0,e,ve(t)?t:u)),n[2][3].add(o(0,e,ve(r)?r:l))}).promise()},promise:function(e){return null!=e?xe.extend(e,i):i}},o={};return xe.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=ce.call(arguments),o=xe.Deferred(),a=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?ce.call(arguments):n,--t||o.resolveWith(r,i)}};if(t<=1&&(f(e,o.done(a(n)).resolve,o.reject,!t),"pending"===o.state()||ve(i[n]&&i[n].then)))return o.then();for(;n--;)f(i[n],a(n),o.reject);return o.promise()}});var Pe=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;xe.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&Pe.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},xe.readyException=function(t){e.setTimeout(function(){throw t})};var Me=xe.Deferred();xe.fn.ready=function(e){return Me.then(e).catch(function(e){xe.readyException(e)}),this},xe.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--xe.readyWait:xe.isReady)||(xe.isReady=!0,!0!==e&&--xe.readyWait>0||Me.resolveWith(ae,[xe]))}}),xe.ready.then=Me.then,"complete"===ae.readyState||"loading"!==ae.readyState&&!ae.documentElement.doScroll?e.setTimeout(xe.ready):(ae.addEventListener("DOMContentLoaded",p),e.addEventListener("load",p));var De=function e(t,n,i,o,a,s,c){var u=0,l=t.length,f=null==i;if("object"===r(i)){a=!0;for(u in i)e(t,n,u,i[u],!0,s,c)}else if(void 0!==o&&(a=!0,ve(o)||(c=!0),f&&(c?(n.call(t,o),n=null):(f=n,n=function(e,t,n){return f.call(xe(e),n)})),n))for(;u<l;u++)n(t[u],i,c?o:o.call(t[u],u,n(t[u],i)));return a?t:f?n.call(t):l?n(t[0],i):s},Le=/^-ms-/,qe=/-([a-z])/g,Re=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};y.uid=1,y.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Re(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[h(t)]=n;else for(r in t)i[h(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][h(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){Array.isArray(t)?t=t.map(h):(t=h(t),t=t in r?[t]:t.match(Ie)||[]),n=t.length;for(;n--;)delete r[t[n]]}(void 0===t||xe.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!xe.isEmptyObject(t)}};var Fe=new y,He=new y,$e=/^(?:\\{[\\w\\W]*\\}|\\[[\\w\\W]*\\])$/,Ve=/[A-Z]/g;xe.extend({hasData:function(e){return He.hasData(e)||Fe.hasData(e)},data:function(e,t,n){return He.access(e,t,n)},removeData:function(e,t){He.remove(e,t)},_data:function(e,t,n){return Fe.access(e,t,n)},_removeData:function(e,t){Fe.remove(e,t)}}),xe.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=He.get(o),1===o.nodeType&&!Fe.get(o,"hasDataAttrs"))){for(n=a.length;n--;)a[n]&&(r=a[n].name,0===r.indexOf("data-")&&(r=h(r.slice(5)),m(o,r,i[r])));Fe.set(o,"hasDataAttrs",!0)}return i}return"object"===(void 0===e?"undefined":_typeof(e))?this.each(function(){He.set(this,e)}):De(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=He.get(o,e)))return n;if(void 0!==(n=m(o,e)))return n}else this.each(function(){He.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){He.remove(this,e)})}}),xe.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Fe.get(e,t),n&&(!r||Array.isArray(n)?r=Fe.access(e,t,xe.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=xe.queue(e,t),r=n.length,i=n.shift(),o=xe._queueHooks(e,t),a=function(){xe.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Fe.get(e,n)||Fe.access(e,n,{empty:xe.Callbacks("once memory").add(function(){Fe.remove(e,[t+"queue",n])})})}}),xe.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?xe.queue(this[0],e):void 0===t?this:this.each(function(){var n=xe.queue(this,e,t);xe._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&xe.dequeue(this,e)})},dequeue:function(e){return this.each(function(){xe.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=xe.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)(n=Fe.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var Be=/[+-]?(?:\\d*\\.|)\\d+(?:[eE][+-]?\\d+|)/.source,ze=new RegExp("^(?:([+-])=|)("+Be+")([a-z%]*)$","i"),We=["Top","Right","Bottom","Left"],Ue=function(e,t){return e=t||e,"none"===e.style.display||""===e.style.display&&xe.contains(e.ownerDocument,e)&&"none"===xe.css(e,"display")},Ge=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i},Xe={};xe.fn.extend({show:function(){return w(this,!0)},hide:function(){return w(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Ue(this)?xe(this).show():xe(this).hide()})}});var Je=/^(?:checkbox|radio)$/i,Ye=/<([a-z][^\\/\\0>\\x20\\t\\r\\n\\f]+)/i,Ze=/^$|^module$|\\/(?:java|ecma)script/i,Qe={option:[1,"<select multiple=\'multiple\'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Qe.optgroup=Qe.option,Qe.tbody=Qe.tfoot=Qe.colgroup=Qe.caption=Qe.thead,Qe.th=Qe.td;var Ke=/<|&#?\\w+;/;!function(){var e=ae.createDocumentFragment(),t=e.appendChild(ae.createElement("div")),n=ae.createElement("input");n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),t.appendChild(n),me.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",me.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue}();var et=ae.documentElement,tt=/^key/,nt=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,rt=/^([^.]*)(?:\\.(.+)|)/;xe.event={global:{},add:function(e,t,n,r,i){var o,a,s,c,u,l,f,p,d,h,y,g=Fe.get(e);if(g)for(n.handler&&(o=n,n=o.handler,i=o.selector),i&&xe.find.matchesSelector(et,i),n.guid||(n.guid=xe.guid++),(c=g.events)||(c=g.events={}),(a=g.handle)||(a=g.handle=function(t){return void 0!==xe&&xe.event.triggered!==t.type?xe.event.dispatch.apply(e,arguments):void 0}),t=(t||"").match(Ie)||[""],u=t.length;u--;)s=rt.exec(t[u])||[],d=y=s[1],h=(s[2]||"").split(".").sort(),d&&(f=xe.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=xe.event.special[d]||{},l=xe.extend({type:d,origType:y,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&xe.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=c[d])||(p=c[d]=[],p.delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,l),l.handler.guid||(l.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,l):p.push(l),xe.event.global[d]=!0)},remove:function(e,t,n,r,i){var o,a,s,c,u,l,f,p,d,h,y,g=Fe.hasData(e)&&Fe.get(e);if(g&&(c=g.events)){for(t=(t||"").match(Ie)||[""],u=t.length;u--;)if(s=rt.exec(t[u])||[],d=y=s[1],h=(s[2]||"").split(".").sort(),d){for(f=xe.event.special[d]||{},d=(r?f.delegateType:f.bindType)||d,p=c[d]||[],s=s[2]&&new RegExp("(^|\\\\.)"+h.join("\\\\.(?:.*\\\\.|)")+"(\\\\.|$)"),a=o=p.length;o--;)l=p[o],!i&&y!==l.origType||n&&n.guid!==l.guid||s&&!s.test(l.namespace)||r&&r!==l.selector&&("**"!==r||!l.selector)||(p.splice(o,1),l.selector&&p.delegateCount--,f.remove&&f.remove.call(e,l));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,g.handle)||xe.removeEvent(e,d,g.handle),delete c[d])}else for(d in c)xe.event.remove(e,d+t[u],n,r,!0);xe.isEmptyObject(c)&&Fe.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=xe.event.fix(e),c=new Array(arguments.length),u=(Fe.get(this,"events")||{})[s.type]||[],l=xe.event.special[s.type]||{};for(c[0]=s,t=1;t<arguments.length;t++)c[t]=arguments[t];if(s.delegateTarget=this,!l.preDispatch||!1!==l.preDispatch.call(this,s)){for(a=xe.event.handlers.call(this,s,u),t=0;(i=a[t++])&&!s.isPropagationStopped();)for(s.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!s.isImmediatePropagationStopped();)s.rnamespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((xe.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,c))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()));return l.postDispatch&&l.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],c=t.delegateCount,u=e.target;if(c&&u.nodeType&&!("click"===e.type&&e.button>=1))for(;u!==this;u=u.parentNode||this)if(1===u.nodeType&&("click"!==e.type||!0!==u.disabled)){for(o=[],a={},n=0;n<c;n++)r=t[n],i=r.selector+" ",void 0===a[i]&&(a[i]=r.needsContext?xe(i,this).index(u)>-1:xe.find(i,this,null,[u]).length),a[i]&&o.push(r);o.length&&s.push({elem:u,handlers:o})}return u=this,c<t.length&&s.push({elem:u,handlers:t.slice(c)}),s},addProp:function(e,t){Object.defineProperty(xe.Event.prototype,e,{enumerable:!0,configurable:!0,get:ve(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[xe.expando]?e:new xe.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==k()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===k()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&o(this,"input"))return this.click(),!1},_default:function(e){return o(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},xe.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},xe.Event=function(e,t){if(!(this instanceof xe.Event))return new xe.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?S:j,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&xe.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[xe.expando]=!0},xe.Event.prototype={constructor:xe.Event,isDefaultPrevented:j,isPropagationStopped:j,isImmediatePropagationStopped:j,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=S,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=S,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=S,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},xe.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&tt.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&nt.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},xe.event.addProp),xe.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){xe.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||xe.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),xe.fn.extend({on:function(e,t,n,r){return A(this,e,t,n,r)},one:function(e,t,n,r){return A(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,xe(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"===(void 0===e?"undefined":_typeof(e))){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=j),this.each(function(){xe.event.remove(this,e,n,t)})}});var it=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\\/\\0>\\x20\\t\\r\\n\\f]*)[^>]*)\\/>/gi,ot=/<script|<style|<link/i,at=/checked\\s*(?:[^=]|=\\s*.checked.)/i,st=/^\\s*<!(?:\\[CDATA\\[|--)|(?:\\]\\]|--)>\\s*$/g;xe.extend({htmlPrefilter:function(e){return e.replace(it,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),c=xe.contains(e.ownerDocument,e);if(!(me.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||xe.isXMLDoc(e)))for(a=x(s),o=x(e),r=0,i=o.length;r<i;r++)I(o[r],a[r]);if(t)if(n)for(o=o||x(e),a=a||x(s),r=0,i=o.length;r<i;r++)_(o[r],a[r]);else _(e,s);return a=x(s,"script"),a.length>0&&T(a,!c&&x(e,"script")),s},cleanData:function(e){for(var t,n,r,i=xe.event.special,o=0;void 0!==(n=e[o]);o++)if(Re(n)){if(t=n[Fe.expando]){if(t.events)for(r in t.events)i[r]?xe.event.remove(n,r):xe.removeEvent(n,r,t.handle);n[Fe.expando]=void 0}n[He.expando]&&(n[He.expando]=void 0)}}}),xe.fn.extend({detach:function(e){return M(this,e,!0)},remove:function(e){return M(this,e)},text:function(e){return De(this,function(e){return void 0===e?xe.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return P(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){C(this,e).appendChild(e)}})},prepend:function(){return P(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=C(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return P(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return P(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(xe.cleanData(x(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return xe.clone(this,e,t)})},html:function(e){return De(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ot.test(e)&&!Qe[(Ye.exec(e)||["",""])[1].toLowerCase()]){e=xe.htmlPrefilter(e);try{for(;n<r;n++)t=this[n]||{},1===t.nodeType&&(xe.cleanData(x(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return P(this,arguments,function(t){var n=this.parentNode;xe.inArray(this,e)<0&&(xe.cleanData(x(this)),n&&n.replaceChild(t,this))},e)}}),xe.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){xe.fn[e]=function(e){for(var n,r=[],i=xe(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),xe(i[a])[t](n),le.apply(r,n.get());return this.pushStack(r)}});var ct=new RegExp("^("+Be+")(?!px)[a-z%]+$","i"),ut=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},lt=new RegExp(We.join("|"),"i");!function(){function t(){if(u){c.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",et.appendChild(c).appendChild(u);var t=e.getComputedStyle(u);r="1%"!==t.top,s=12===n(t.marginLeft),u.style.right="60%",a=36===n(t.right),i=36===n(t.width),u.style.position="absolute",o=36===u.offsetWidth||"absolute",et.removeChild(c),u=null}}function n(e){return Math.round(parseFloat(e))}var r,i,o,a,s,c=ae.createElement("div"),u=ae.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",me.clearCloneStyle="content-box"===u.style.backgroundClip,xe.extend(me,{boxSizingReliable:function(){return t(),i},pixelBoxStyles:function(){return t(),a},pixelPosition:function(){return t(),r},reliableMarginLeft:function(){return t(),s},scrollboxSize:function(){return t(),o}}))}();var ft=/^(none|table(?!-c[ea]).+)/,pt=/^--/,dt={position:"absolute",visibility:"hidden",display:"block"},ht={letterSpacing:"0",fontWeight:"400"},yt=["Webkit","Moz","ms"],gt=ae.createElement("div").style;xe.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=D(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=h(t),c=pt.test(t),u=e.style;if(c||(t=R(s)),a=xe.cssHooks[t]||xe.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:u[t];o=void 0===n?"undefined":_typeof(n),"string"===o&&(i=ze.exec(n))&&i[1]&&(n=v(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(xe.cssNumber[s]?"":"px")),me.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(c?u.setProperty(t,n):u[t]=n))}},css:function(e,t,n,r){var i,o,a,s=h(t);return pt.test(t)||(t=R(s)),a=xe.cssHooks[t]||xe.cssHooks[s],a&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=D(e,t,r)),"normal"===i&&t in ht&&(i=ht[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),xe.each(["height","width"],function(e,t){xe.cssHooks[t]={get:function(e,n,r){if(n)return!ft.test(xe.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?$(e,t,r):Ge(e,dt,function(){return $(e,t,r)})},set:function(e,n,r){var i,o=ut(e),a="border-box"===xe.css(e,"boxSizing",!1,o),s=r&&H(e,t,r,a,o);return a&&me.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-H(e,t,"border",!1,o)-.5)),s&&(i=ze.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=xe.css(e,t)),F(e,n,s)}}}),xe.cssHooks.marginLeft=L(me.reliableMarginLeft,function(e,t){if(t)return(parseFloat(D(e,"marginLeft"))||e.getBoundingClientRect().left-Ge(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),xe.each({margin:"",padding:"",border:"Width"},function(e,t){xe.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+We[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(xe.cssHooks[e+t].set=F)}),xe.fn.extend({css:function(e,t){return De(this,function(e,t,n){var r,i,o={},a=0\n;if(Array.isArray(t)){for(r=ut(e),i=t.length;a<i;a++)o[t[a]]=xe.css(e,t[a],!1,r);return o}return void 0!==n?xe.style(e,t,n):xe.css(e,t)},e,t,arguments.length>1)}}),xe.Tween=V,V.prototype={constructor:V,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||xe.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(xe.cssNumber[n]?"":"px")},cur:function(){var e=V.propHooks[this.prop];return e&&e.get?e.get(this):V.propHooks._default.get(this)},run:function(e){var t,n=V.propHooks[this.prop];return this.options.duration?this.pos=t=xe.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):V.propHooks._default.set(this),this}},V.prototype.init.prototype=V.prototype,V.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=xe.css(e.elem,e.prop,""),t&&"auto"!==t?t:0)},set:function(e){xe.fx.step[e.prop]?xe.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[xe.cssProps[e.prop]]&&!xe.cssHooks[e.prop]?e.elem[e.prop]=e.now:xe.style(e.elem,e.prop,e.now+e.unit)}}},V.propHooks.scrollTop=V.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},xe.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},xe.fx=V.prototype.init,xe.fx.step={};var mt,vt,bt=/^(?:toggle|show|hide)$/,wt=/queueHooks$/;xe.Animation=xe.extend(J,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return v(n.elem,e,ze.exec(t),n),n}]},tweener:function(e,t){ve(e)?(t=e,e=["*"]):e=e.match(Ie);for(var n,r=0,i=e.length;r<i;r++)n=e[r],J.tweeners[n]=J.tweeners[n]||[],J.tweeners[n].unshift(t)},prefilters:[G],prefilter:function(e,t){t?J.prefilters.unshift(e):J.prefilters.push(e)}}),xe.speed=function(e,t,n){var r=e&&"object"===(void 0===e?"undefined":_typeof(e))?xe.extend({},e):{complete:n||!n&&t||ve(e)&&e,duration:e,easing:n&&t||t&&!ve(t)&&t};return xe.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in xe.fx.speeds?r.duration=xe.fx.speeds[r.duration]:r.duration=xe.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){ve(r.old)&&r.old.call(this),r.queue&&xe.dequeue(this,r.queue)},r},xe.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Ue).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=xe.isEmptyObject(e),o=xe.speed(t,n,r),a=function(){var t=J(this,xe.extend({},e),o);(i||Fe.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=xe.timers,a=Fe.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&wt.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||xe.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=Fe.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=xe.timers,a=r?r.length:0;for(n.finish=!0,xe.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),xe.each(["toggle","show","hide"],function(e,t){var n=xe.fn[t];xe.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(W(t,!0),e,r,i)}}),xe.each({slideDown:W("show"),slideUp:W("hide"),slideToggle:W("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){xe.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),xe.timers=[],xe.fx.tick=function(){var e,t=0,n=xe.timers;for(mt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||xe.fx.stop(),mt=void 0},xe.fx.timer=function(e){xe.timers.push(e),xe.fx.start()},xe.fx.interval=13,xe.fx.start=function(){vt||(vt=!0,B())},xe.fx.stop=function(){vt=null},xe.fx.speeds={slow:600,fast:200,_default:400},xe.fn.delay=function(t,n){return t=xe.fx?xe.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=ae.createElement("input"),t=ae.createElement("select"),n=t.appendChild(ae.createElement("option"));e.type="checkbox",me.checkOn=""!==e.value,me.optSelected=n.selected,e=ae.createElement("input"),e.value="t",e.type="radio",me.radioValue="t"===e.value}();var xt,Tt=xe.expr.attrHandle;xe.fn.extend({attr:function(e,t){return De(this,xe.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){xe.removeAttr(this,e)})}}),xe.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return void 0===e.getAttribute?xe.prop(e,t,n):(1===o&&xe.isXMLDoc(e)||(i=xe.attrHooks[t.toLowerCase()]||(xe.expr.match.bool.test(t)?xt:void 0)),void 0!==n?null===n?void xe.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:(r=xe.find.attr(e,t),null==r?void 0:r))},attrHooks:{type:{set:function(e,t){if(!me.radioValue&&"radio"===t&&o(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(Ie);if(i&&1===e.nodeType)for(;n=i[r++];)e.removeAttribute(n)}}),xt={set:function(e,t,n){return!1===t?xe.removeAttr(e,n):e.setAttribute(n,n),n}},xe.each(xe.expr.match.bool.source.match(/\\w+/g),function(e,t){var n=Tt[t]||xe.find.attr;Tt[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=Tt[a],Tt[a]=i,i=null!=n(e,t,r)?a:null,Tt[a]=o),i}});var Ot=/^(?:input|select|textarea|button)$/i,St=/^(?:a|area)$/i;xe.fn.extend({prop:function(e,t){return De(this,xe.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[xe.propFix[e]||e]})}}),xe.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&xe.isXMLDoc(e)||(t=xe.propFix[t]||t,i=xe.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=xe.find.attr(e,"tabindex");return t?parseInt(t,10):Ot.test(e.nodeName)||St.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),me.optSelected||(xe.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),xe.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){xe.propFix[this.toLowerCase()]=this}),xe.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,c=0;if(ve(e))return this.each(function(t){xe(this).addClass(e.call(this,t,Z(this)))});if(t=Q(e),t.length)for(;n=this[c++];)if(i=Z(n),r=1===n.nodeType&&" "+Y(i)+" "){for(a=0;o=t[a++];)r.indexOf(" "+o+" ")<0&&(r+=o+" ");s=Y(r),i!==s&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,c=0;if(ve(e))return this.each(function(t){xe(this).removeClass(e.call(this,t,Z(this)))});if(!arguments.length)return this.attr("class","");if(t=Q(e),t.length)for(;n=this[c++];)if(i=Z(n),r=1===n.nodeType&&" "+Y(i)+" "){for(a=0;o=t[a++];)for(;r.indexOf(" "+o+" ")>-1;)r=r.replace(" "+o+" "," ");s=Y(r),i!==s&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=void 0===e?"undefined":_typeof(e),r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):ve(e)?this.each(function(n){xe(this).toggleClass(e.call(this,n,Z(this),t),t)}):this.each(function(){var t,i,o,a;if(r)for(i=0,o=xe(this),a=Q(e);t=a[i++];)o.hasClass(t)?o.removeClass(t):o.addClass(t);else void 0!==e&&"boolean"!==n||(t=Z(this),t&&Fe.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":Fe.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&(" "+Y(Z(n))+" ").indexOf(t)>-1)return!0;return!1}});var jt=/\\r/g;xe.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=ve(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,xe(this).val()):e,null==i?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=xe.map(i,function(e){return null==e?"":e+""})),(t=xe.valHooks[this.type]||xe.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=xe.valHooks[i.type]||xe.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:(n=i.value,"string"==typeof n?n.replace(jt,""):null==n?"":n)}}}),xe.extend({valHooks:{option:{get:function(e){var t=xe.find.attr(e,"value");return null!=t?t:Y(xe.text(e))}},select:{get:function(e){var t,n,r,i=e.options,a=e.selectedIndex,s="select-one"===e.type,c=s?null:[],u=s?a+1:i.length;for(r=a<0?u:s?a:0;r<u;r++)if(n=i[r],(n.selected||r===a)&&!n.disabled&&(!n.parentNode.disabled||!o(n.parentNode,"optgroup"))){if(t=xe(n).val(),s)return t;c.push(t)}return c},set:function(e,t){for(var n,r,i=e.options,o=xe.makeArray(t),a=i.length;a--;)r=i[a],(r.selected=xe.inArray(xe.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),xe.each(["radio","checkbox"],function(){xe.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=xe.inArray(xe(e).val(),t)>-1}},me.checkOn||(xe.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),me.focusin="onfocusin"in e;var kt=/^(?:focusinfocus|focusoutblur)$/,At=function(e){e.stopPropagation()};xe.extend(xe.event,{trigger:function(t,n,r,i){var o,a,s,c,u,l,f,p,d=[r||ae],h=he.call(t,"type")?t.type:t,y=he.call(t,"namespace")?t.namespace.split("."):[];if(a=p=s=r=r||ae,3!==r.nodeType&&8!==r.nodeType&&!kt.test(h+xe.event.triggered)&&(h.indexOf(".")>-1&&(y=h.split("."),h=y.shift(),y.sort()),u=h.indexOf(":")<0&&"on"+h,t=t[xe.expando]?t:new xe.Event(h,"object"===(void 0===t?"undefined":_typeof(t))&&t),t.isTrigger=i?2:3,t.namespace=y.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\\\.)"+y.join("\\\\.(?:.*\\\\.|)")+"(\\\\.|$)"):null,t.result=void 0,t.target||(t.target=r),n=null==n?[t]:xe.makeArray(n,[t]),f=xe.event.special[h]||{},i||!f.trigger||!1!==f.trigger.apply(r,n))){if(!i&&!f.noBubble&&!be(r)){for(c=f.delegateType||h,kt.test(c+h)||(a=a.parentNode);a;a=a.parentNode)d.push(a),s=a;s===(r.ownerDocument||ae)&&d.push(s.defaultView||s.parentWindow||e)}for(o=0;(a=d[o++])&&!t.isPropagationStopped();)p=a,t.type=o>1?c:f.bindType||h,l=(Fe.get(a,"events")||{})[t.type]&&Fe.get(a,"handle"),l&&l.apply(a,n),(l=u&&a[u])&&l.apply&&Re(a)&&(t.result=l.apply(a,n),!1===t.result&&t.preventDefault());return t.type=h,i||t.isDefaultPrevented()||f._default&&!1!==f._default.apply(d.pop(),n)||!Re(r)||u&&ve(r[h])&&!be(r)&&(s=r[u],s&&(r[u]=null),xe.event.triggered=h,t.isPropagationStopped()&&p.addEventListener(h,At),r[h](),t.isPropagationStopped()&&p.removeEventListener(h,At),xe.event.triggered=void 0,s&&(r[u]=s)),t.result}},simulate:function(e,t,n){var r=xe.extend(new xe.Event,n,{type:e,isSimulated:!0});xe.event.trigger(r,null,t)}}),xe.fn.extend({trigger:function(e,t){return this.each(function(){xe.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return xe.event.trigger(e,t,n,!0)}}),me.focusin||xe.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){xe.event.simulate(t,e.target,xe.event.fix(e))};xe.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=Fe.access(r,t);i||r.addEventListener(e,n,!0),Fe.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=Fe.access(r,t)-1;i?Fe.access(r,t,i):(r.removeEventListener(e,n,!0),Fe.remove(r,t))}}});var Ct=e.location,Et=Date.now(),Nt=/\\?/;xe.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||xe.error("Invalid XML: "+t),n};var _t=/\\[\\]$/,It=/\\r?\\n/g,Pt=/^(?:submit|button|image|reset|file)$/i,Mt=/^(?:input|select|textarea|keygen)/i;xe.param=function(e,t){var n,r=[],i=function(e,t){var n=ve(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!xe.isPlainObject(e))xe.each(e,function(){i(this.name,this.value)});else for(n in e)K(n,e[n],t,i);return r.join("&")},xe.fn.extend({serialize:function(){return xe.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=xe.prop(this,"elements");return e?xe.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!xe(this).is(":disabled")&&Mt.test(this.nodeName)&&!Pt.test(e)&&(this.checked||!Je.test(e))}).map(function(e,t){var n=xe(this).val();return null==n?null:Array.isArray(n)?xe.map(n,function(e){return{name:t.name,value:e.replace(It,"\\r\\n")}}):{name:t.name,value:n.replace(It,"\\r\\n")}}).get()}});var Dt=/%20/g,Lt=/#.*$/,qt=/([?&])_=[^&]*/,Rt=/^(.*?):[ \\t]*([^\\r\\n]*)$/gm,Ft=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ht=/^(?:GET|HEAD)$/,$t=/^\\/\\//,Vt={},Bt={},zt="*/".concat("*"),Wt=ae.createElement("a");Wt.href=Ct.href,xe.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Ft.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":zt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\\bxml\\b/,html:/\\bhtml/,json:/\\bjson\\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":xe.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?ne(ne(e,xe.ajaxSettings),t):ne(xe.ajaxSettings,e)},ajaxPrefilter:ee(Vt),ajaxTransport:ee(Bt),ajax:function(t,n){function r(t,n,r,s){var u,p,d,w,x,T=n;l||(l=!0,c&&e.clearTimeout(c),i=void 0,a=s||"",O.readyState=t>0?4:0,u=t>=200&&t<300||304===t,r&&(w=re(h,O,r)),w=ie(h,w,O,u),u?(h.ifModified&&(x=O.getResponseHeader("Last-Modified"),x&&(xe.lastModified[o]=x),(x=O.getResponseHeader("etag"))&&(xe.etag[o]=x)),204===t||"HEAD"===h.type?T="nocontent":304===t?T="notmodified":(T=w.state,p=w.data,d=w.error,u=!d)):(d=T,!t&&T||(T="error",t<0&&(t=0))),O.status=t,O.statusText=(n||T)+"",u?m.resolveWith(y,[p,T,O]):m.rejectWith(y,[O,T,d]),O.statusCode(b),b=void 0,f&&g.trigger(u?"ajaxSuccess":"ajaxError",[O,h,u?p:d]),v.fireWith(y,[O,T]),f&&(g.trigger("ajaxComplete",[O,h]),--xe.active||xe.event.trigger("ajaxStop")))}"object"===(void 0===t?"undefined":_typeof(t))&&(n=t,t=void 0),n=n||{};var i,o,a,s,c,u,l,f,p,d,h=xe.ajaxSetup({},n),y=h.context||h,g=h.context&&(y.nodeType||y.jquery)?xe(y):xe.event,m=xe.Deferred(),v=xe.Callbacks("once memory"),b=h.statusCode||{},w={},x={},T="canceled",O={readyState:0,getResponseHeader:function(e){var t;if(l){if(!s)for(s={};t=Rt.exec(a);)s[t[1].toLowerCase()]=t[2];t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return l?a:null},setRequestHeader:function(e,t){return null==l&&(e=x[e.toLowerCase()]=x[e.toLowerCase()]||e,w[e]=t),this},overrideMimeType:function(e){return null==l&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(l)O.always(e[O.status]);else for(t in e)b[t]=[b[t],e[t]];return this},abort:function(e){var t=e||T;return i&&i.abort(t),r(0,t),this}};if(m.promise(O),h.url=((t||h.url||Ct.href)+"").replace($t,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(Ie)||[""],null==h.crossDomain){u=ae.createElement("a");try{u.href=h.url,u.href=u.href,h.crossDomain=Wt.protocol+"//"+Wt.host!=u.protocol+"//"+u.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=xe.param(h.data,h.traditional)),te(Vt,h,n,O),l)return O;f=xe.event&&h.global,f&&0==xe.active++&&xe.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Ht.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(Dt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(Nt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(qt,"$1"),d=(Nt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(xe.lastModified[o]&&O.setRequestHeader("If-Modified-Since",xe.lastModified[o]),xe.etag[o]&&O.setRequestHeader("If-None-Match",xe.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&O.setRequestHeader("Content-Type",h.contentType),O.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+zt+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)O.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(y,O,h)||l))return O.abort();if(T="abort",v.add(h.complete),O.done(h.success),O.fail(h.error),i=te(Bt,h,n,O)){if(O.readyState=1,f&&g.trigger("ajaxSend",[O,h]),l)return O;h.async&&h.timeout>0&&(c=e.setTimeout(function(){O.abort("timeout")},h.timeout));try{l=!1,i.send(w,r)}catch(e){if(l)throw e;r(-1,e)}}else r(-1,"No Transport");return O},getJSON:function(e,t,n){return xe.get(e,t,n,"json")},getScript:function(e,t){return xe.get(e,void 0,t,"script")}}),xe.each(["get","post"],function(e,t){xe[t]=function(e,n,r,i){return ve(n)&&(i=i||r,r=n,n=void 0),xe.ajax(xe.extend({url:e,type:t,dataType:i,data:n,success:r},xe.isPlainObject(e)&&e))}}),xe._evalUrl=function(e){return xe.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},xe.fn.extend({wrapAll:function(e){var t;return this[0]&&(ve(e)&&(e=e.call(this[0])),t=xe(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return ve(e)?this.each(function(t){xe(this).wrapInner(e.call(this,t))}):this.each(function(){var t=xe(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=ve(e);return this.each(function(n){xe(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){xe(this).replaceWith(this.childNodes)}),this}}),xe.expr.pseudos.hidden=function(e){return!xe.expr.pseudos.visible(e)},xe.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},xe.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Ut={0:200,1223:204},Gt=xe.ajaxSettings.xhr();me.cors=!!Gt&&"withCredentials"in Gt,me.ajax=Gt=!!Gt,xe.ajaxTransport(function(t){var n,r;if(me.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Ut[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),xe.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),xe.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\\b(?:java|ecma)script\\b/},converters:{"text script":function(e){return xe.globalEval(e),e}}}),xe.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),xe.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=xe("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),ae.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Xt=[],Jt=/(=)\\?(?=&|$)|\\?\\?/;xe.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||xe.expando+"_"+Et++;return this[e]=!0,e}}),xe.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Jt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Jt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=ve(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Jt,"$1"+i):!1!==t.jsonp&&(t.url+=(Nt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||xe.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?xe(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Xt.push(i)),a&&ve(o)&&o(a[0]),a=o=void 0}),"script"}),me.createHTMLDocument=function(){var e=ae.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),xe.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var r,i,o;return t||(me.createHTMLDocument?(t=ae.implementation.createHTMLDocument(""),r=t.createElement("base"),r.href=ae.location.href,t.head.appendChild(r)):t=ae),i=Ae.exec(e),o=!n&&[],i?[t.createElement(i[1])]:(i=O([e],t,o),o&&o.length&&xe(o).remove(),xe.merge([],i.childNodes))},xe.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=Y(e.slice(s)),e=e.slice(0,s)),ve(t)?(n=t,t=void 0):t&&"object"===(void 0===t?"undefined":_typeof(t))&&(i="POST"),a.length>0&&xe.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?xe("<div>").append(xe.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},xe.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){xe.fn[t]=function(e){return this.on(t,e)}}),xe.expr.pseudos.animated=function(e){return xe.grep(xe.timers,function(t){return e===t.elem}).length},xe.offset={setOffset:function(e,t,n){var r,i,o,a,s,c,u,l=xe.css(e,"position"),f=xe(e),p={};"static"===l&&(e.style.position="relative"),s=f.offset(),o=xe.css(e,"top"),c=xe.css(e,"left"),u=("absolute"===l||"fixed"===l)&&(o+c).indexOf("auto")>-1,u?(r=f.position(),a=r.top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(c)||0),ve(t)&&(t=t.call(e,n,xe.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},xe.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){xe.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===xe.css(r,"position"))t=r.getBoundingClientRect();else{for(t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===xe.css(e,"position");)e=e.parentNode;e&&e!==r&&1===e.nodeType&&(i=xe(e).offset(),i.top+=xe.css(e,"borderTopWidth",!0),i.left+=xe.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-xe.css(r,"marginTop",!0),left:t.left-i.left-xe.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===xe.css(e,"position");)e=e.offsetParent;return e||et})}}),xe.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;xe.fn[e]=function(r){return De(this,function(e,r,i){var o;if(be(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),xe.each(["top","left"],function(e,t){xe.cssHooks[t]=L(me.pixelPosition,function(e,n){if(n)return n=D(e,t),ct.test(n)?xe(e).position()[t]+"px":n})}),xe.each({Height:"height",Width:"width"},function(e,t){xe.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){xe.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return De(this,function(t,n,i){var o;return be(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?xe.css(t,n,s):xe.style(t,n,i,s)},t,a?i:void 0,a)}})}),xe.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){xe.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),xe.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),xe.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),xe.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),ve(e))return r=ce.call(arguments,2),i=function(){return e.apply(t||this,r.concat(ce.call(arguments)))},i.guid=e.guid=e.guid||xe.guid++,i},xe.holdReady=function(e){e?xe.readyWait++:xe.ready(!0)},xe.isArray=Array.isArray,xe.parseJSON=JSON.parse,xe.nodeName=o,xe.isFunction=ve,xe.isWindow=be,xe.camelCase=h,xe.type=r,xe.now=Date.now,xe.isNumeric=function(e){var t=xe.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return xe});var Yt=e.jQuery,Zt=e.$;return xe.noConflict=function(t){return e.$===xe&&(e.$=Zt),t&&e.jQuery===xe&&(e.jQuery=Yt),xe},t||(e.jQuery=e.$=xe),xe}),/*!\n  * https://github.com/paulmillr/es6-shim\n  * @license es6-shim Copyright 2013-2016 by Paul Miller (http://paulmillr.com)\n  *   and contributors,  MIT License\n  * es6-shim: v0.35.1\n  * see https://github.com/paulmillr/es6-shim/blob/0.35.1/LICENSE\n  * Details and documentation:\n  * https://github.com/paulmillr/es6-shim/\n  */\nfunction(e,t){"function"==typeof define&&define.amd?define("es6-shim",t):"object"===("undefined"==typeof exports?"undefined":_typeof(exports))?module.exports=t():e.returnExports=t()}(this,function(){var e,t=Function.call.bind(Function.apply),n=Function.call.bind(Function.call),r=Array.isArray,i=Object.keys,o=function(e){try{return e(),!1}catch(e){return!0}},a=function(e){try{return e()}catch(e){return!1}},s=function(e){return function(){return!t(e,this,arguments)}}(o),c=!!Object.defineProperty&&function(){return!o(function(){Object.defineProperty({},"x",{get:function(){}})})}(),u="foo"===function(){}.name,l=Function.call.bind(Array.prototype.forEach),f=Function.call.bind(Array.prototype.reduce),p=Function.call.bind(Array.prototype.filter),d=Function.call.bind(Array.prototype.some),h=function(e,t,n,r){!r&&t in e||(c?Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:!0,value:n}):e[t]=n)},y=function(e,t,n){l(i(t),function(r){var i=t[r];h(e,r,i,!!n)})},g=Function.call.bind(Object.prototype.toString),m="function"==typeof/abc/?function(e){return"function"==typeof e&&"[object Function]"===g(e)}:function(e){return"function"==typeof e},v={getter:function(e,t,n){if(!c)throw new TypeError("getters require true ES5 support");Object.defineProperty(e,t,{configurable:!0,enumerable:!1,get:n})},proxy:function(e,t,n){if(!c)throw new TypeError("getters require true ES5 support");var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,{configurable:r.configurable,enumerable:r.enumerable,get:function(){return e[t]},set:function(n){e[t]=n}})},redefine:function(e,t,n){if(c){var r=Object.getOwnPropertyDescriptor(e,t);r.value=n,Object.defineProperty(e,t,r)}else e[t]=n},defineByDescriptor:function(e,t,n){c?Object.defineProperty(e,t,n):"value"in n&&(e[t]=n.value)},preserveToString:function(e,t){t&&m(t.toString)&&h(e,"toString",t.toString.bind(t),!0)}},b=Object.create||function(e,t){var n=function(){};n.prototype=e;var r=new n;return void 0!==t&&i(t).forEach(function(e){v.defineByDescriptor(r,e,t[e])}),r},w=function(e,t){return!!Object.setPrototypeOf&&a(function(){var n=function t(n){var r=new e(n);return Object.setPrototypeOf(r,t.prototype),r};return Object.setPrototypeOf(n,e),n.prototype=b(e.prototype,{constructor:{value:n}}),t(n)})},x=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("unable to locate global object")}(),T=x.isFinite,O=Function.call.bind(String.prototype.indexOf),S=Function.apply.bind(Array.prototype.indexOf),j=Function.call.bind(Array.prototype.concat),k=Function.call.bind(String.prototype.slice),A=Function.call.bind(Array.prototype.push),C=Function.apply.bind(Array.prototype.push),E=Function.call.bind(Array.prototype.shift),N=Math.max,_=Math.min,I=Math.floor,P=Math.abs,M=Math.exp,D=Math.log,L=Math.sqrt,q=Function.call.bind(Object.prototype.hasOwnProperty),R=function(){},F=x.Map,H=F&&F.prototype.delete,$=F&&F.prototype.get,V=F&&F.prototype.has,B=F&&F.prototype.set,z=x.Symbol||{},W=z.species||"@@species",U=Number.isNaN||function(e){return e!==e},G=Number.isFinite||function(e){return"number"==typeof e&&T(e)},X=m(Math.sign)?Math.sign:function(e){var t=Number(e);return 0===t?t:U(t)?t:t<0?-1:1},J=function(e){return"[object Arguments]"===g(e)},Y=function(e){return null!==e&&"object"===(void 0===e?"undefined":_typeof(e))&&"number"==typeof e.length&&e.length>=0&&"[object Array]"!==g(e)&&"[object Function]"===g(e.callee)},Z=J(arguments)?J:Y,Q={primitive:function(e){return null===e||"function"!=typeof e&&"object"!==(void 0===e?"undefined":_typeof(e))},string:function(e){return"[object String]"===g(e)},regex:function(e){return"[object RegExp]"===g(e)},symbol:function(e){return"function"==typeof x.Symbol&&"symbol"===(void 0===e?"undefined":_typeof(e))}},K=function(e,t,n){var r=e[t];h(e,t,n,!0),v.preserveToString(e[t],r)},ee="function"==typeof z&&"function"==typeof z.for&&Q.symbol(z()),te=Q.symbol(z.iterator)?z.iterator:"_es6-shim iterator_";x.Set&&"function"==typeof(new x.Set)["@@iterator"]&&(te="@@iterator"),x.Reflect||h(x,"Reflect",{},!0);var ne=x.Reflect,re=String,ie="undefined"!=typeof document&&document?document.all:null,oe=null==ie?function(e){return null==e}:function(e){return null==e&&e!==ie},ae={Call:function(e,n){var r=arguments.length>2?arguments[2]:[];if(!ae.IsCallable(e))throw new TypeError(e+" is not a function");return t(e,n,r)},RequireObjectCoercible:function(e,t){if(oe(e))throw new TypeError(t||"Cannot call method on "+e);return e},TypeIsObject:function(e){return void 0!==e&&null!==e&&!0!==e&&!1!==e&&("function"==typeof e||"object"===(void 0===e?"undefined":_typeof(e))||e===ie)},ToObject:function(e,t){return Object(ae.RequireObjectCoercible(e,t))},IsCallable:m,IsConstructor:function(e){return ae.IsCallable(e)},ToInt32:function(e){return ae.ToNumber(e)>>0},ToUint32:function(e){return ae.ToNumber(e)>>>0},ToNumber:function(e){if("[object Symbol]"===g(e))throw new TypeError("Cannot convert a Symbol value to a number");return+e},ToInteger:function(e){var t=ae.ToNumber(e);return U(t)?0:0!==t&&G(t)?(t>0?1:-1)*I(P(t)):t},ToLength:function(e){var t=ae.ToInteger(e);return t<=0?0:t>Number.MAX_SAFE_INTEGER?Number.MAX_SAFE_INTEGER:t},SameValue:function(e,t){return e===t?0!==e||1/e==1/t:U(e)&&U(t)},SameValueZero:function(e,t){return e===t||U(e)&&U(t)},IsIterable:function(e){return ae.TypeIsObject(e)&&(void 0!==e[te]||Z(e))},GetIterator:function(t){if(Z(t))return new e(t,"value");var n=ae.GetMethod(t,te);if(!ae.IsCallable(n))throw new TypeError("value is not an iterable");var r=ae.Call(n,t);if(!ae.TypeIsObject(r))throw new TypeError("bad iterator");return r},GetMethod:function(e,t){var n=ae.ToObject(e)[t];if(!oe(n)){if(!ae.IsCallable(n))throw new TypeError("Method not callable: "+t);return n}},IteratorComplete:function(e){return!!e.done},IteratorClose:function(e,t){var n=ae.GetMethod(e,"return");if(void 0!==n){var r,i;try{r=ae.Call(n,e)}catch(e){i=e}if(!t){if(i)throw i;if(!ae.TypeIsObject(r))throw new TypeError("Iterator\'s return method returned a non-object.")}}},IteratorNext:function(e){var t=arguments.length>1?e.next(arguments[1]):e.next();if(!ae.TypeIsObject(t))throw new TypeError("bad iterator");return t},IteratorStep:function(e){var t=ae.IteratorNext(e);return!ae.IteratorComplete(t)&&t},Construct:function(e,t,n,r){var i=void 0===n?e:n;if(!r&&ne.construct)return ne.construct(e,t,i);var o=i.prototype;ae.TypeIsObject(o)||(o=Object.prototype);var a=b(o),s=ae.Call(e,a,t);return ae.TypeIsObject(s)?s:a},SpeciesConstructor:function(e,t){var n=e.constructor;if(void 0===n)return t;if(!ae.TypeIsObject(n))throw new TypeError("Bad constructor");var r=n[W];if(oe(r))return t;if(!ae.IsConstructor(r))throw new TypeError("Bad @@species");return r},CreateHTML:function(e,t,n,r){var i=ae.ToString(e),o="<"+t;if(""!==n){o+=" "+n+\'="\'+ae.ToString(r).replace(/"/g,"&quot;")+\'"\'}return o+">"+i+"</"+t+">"},IsRegExp:function(e){if(!ae.TypeIsObject(e))return!1;var t=e[z.match];return void 0!==t?!!t:Q.regex(e)},ToString:function(e){return re(e)}};if(c&&ee){var se=function(e){if(Q.symbol(z[e]))return z[e];var t=z.for("Symbol."+e);return Object.defineProperty(z,e,{configurable:!1,enumerable:!1,writable:!1,value:t}),t};if(!Q.symbol(z.search)){var ce=se("search"),ue=String.prototype.search;h(RegExp.prototype,ce,function(e){return ae.Call(ue,e,[this])});var le=function(e){var t=ae.RequireObjectCoercible(this);if(!oe(e)){var n=ae.GetMethod(e,ce);if(void 0!==n)return ae.Call(n,e,[t])}return ae.Call(ue,t,[ae.ToString(e)])};K(String.prototype,"search",le)}if(!Q.symbol(z.replace)){var fe=se("replace"),pe=String.prototype.replace;h(RegExp.prototype,fe,function(e,t){return ae.Call(pe,e,[this,t])});var de=function(e,t){var n=ae.RequireObjectCoercible(this);if(!oe(e)){var r=ae.GetMethod(e,fe);if(void 0!==r)return ae.Call(r,e,[n,t])}return ae.Call(pe,n,[ae.ToString(e),t])};K(String.prototype,"replace",de)}if(!Q.symbol(z.split)){var he=se("split"),ye=String.prototype.split;h(RegExp.prototype,he,function(e,t){return ae.Call(ye,e,[this,t])});var ge=function(e,t){var n=ae.RequireObjectCoercible(this);if(!oe(e)){var r=ae.GetMethod(e,he);if(void 0!==r)return ae.Call(r,e,[n,t])}return ae.Call(ye,n,[ae.ToString(e),t])};K(String.prototype,"split",ge)}var me=Q.symbol(z.match),ve=me&&function(){var e={};return e[z.match]=function(){return 42},42!=="a".match(e)}();if(!me||ve){var be=se("match"),we=String.prototype.match;h(RegExp.prototype,be,function(e){return ae.Call(we,e,[this])});var xe=function(e){var t=ae.RequireObjectCoercible(this);if(!oe(e)){var n=ae.GetMethod(e,be);if(void 0!==n)return ae.Call(n,e,[t])}return ae.Call(we,t,[ae.ToString(e)])};K(String.prototype,"match",xe)}}var Te=function(e,t,n){v.preserveToString(t,e),Object.setPrototypeOf&&Object.setPrototypeOf(e,t),c?l(Object.getOwnPropertyNames(e),function(r){r in R||n[r]||v.proxy(e,r,t)}):l(Object.keys(e),function(r){r in R||n[r]||(t[r]=e[r])}),t.prototype=e.prototype,v.redefine(e.prototype,"constructor",t)},Oe=function(){return this},Se=function(e){c&&!q(e,W)&&v.getter(e,W,Oe)},je=function(e,t){var n=t||function(){return this};h(e,te,n),!e[te]&&Q.symbol(te)&&(e[te]=n)},ke=function(e,t,n){c?Object.defineProperty(e,t,{configurable:!0,enumerable:!0,writable:!0,value:n}):e[t]=n},Ae=function(e,t,n){if(ke(e,t,n),!ae.SameValue(e[t],n))throw new TypeError("property is nonconfigurable")},Ce=function(e,t,n,r){if(!ae.TypeIsObject(e))throw new TypeError("Constructor requires `new`: "+t.name);var i=t.prototype;ae.TypeIsObject(i)||(i=n);var o=b(i);for(var a in r)if(q(r,a)){var s=r[a];h(o,a,s,!0)}return o};if(String.fromCodePoint&&1!==String.fromCodePoint.length){var Ee=String.fromCodePoint;K(String,"fromCodePoint",function(e){return ae.Call(Ee,this,arguments)})}var Ne={fromCodePoint:function(e){for(var t,n=[],r=0,i=arguments.length;r<i;r++){if(t=Number(arguments[r]),!ae.SameValue(t,ae.ToInteger(t))||t<0||t>1114111)throw new RangeError("Invalid code point "+t);t<65536?A(n,String.fromCharCode(t)):(t-=65536,A(n,String.fromCharCode(55296+(t>>10))),A(n,String.fromCharCode(t%1024+56320)))}return n.join("")},raw:function(e){var t=ae.ToObject(e,"bad callSite"),n=ae.ToObject(t.raw,"bad raw value"),r=n.length,i=ae.ToLength(r);if(i<=0)return"";for(var o,a,s,c,u=[],l=0;l<i&&(o=ae.ToString(l),s=ae.ToString(n[o]),A(u,s),!(l+1>=i));)a=l+1<arguments.length?arguments[l+1]:"",c=ae.ToString(a),A(u,c),l+=1;return u.join("")}};String.raw&&"xy"!==String.raw({raw:{0:"x",1:"y",length:2}})&&K(String,"raw",Ne.raw),y(String,Ne);var _e=function e(t,n){if(n<1)return"";if(n%2)return e(t,n-1)+t;var r=e(t,n/2);return r+r},Ie={repeat:function(e){var t=ae.ToString(ae.RequireObjectCoercible(this)),n=ae.ToInteger(e);if(n<0||n>=1/0)throw new RangeError("repeat count must be less than infinity and not overflow maximum string size");return _e(t,n)},startsWith:function(e){var t=ae.ToString(ae.RequireObjectCoercible(this));if(ae.IsRegExp(e))throw new TypeError(\'Cannot call method "startsWith" with a regex\');var n,r=ae.ToString(e);arguments.length>1&&(n=arguments[1]);var i=N(ae.ToInteger(n),0);return k(t,i,i+r.length)===r},endsWith:function(e){var t=ae.ToString(ae.RequireObjectCoercible(this));if(ae.IsRegExp(e))throw new TypeError(\'Cannot call method "endsWith" with a regex\');var n,r=ae.ToString(e),i=t.length;arguments.length>1&&(n=arguments[1]);var o=void 0===n?i:ae.ToInteger(n),a=_(N(o,0),i);return k(t,a-r.length,a)===r},includes:function(e){if(ae.IsRegExp(e))throw new TypeError(\'"includes" does not accept a RegExp\');var t,n=ae.ToString(e);return arguments.length>1&&(t=arguments[1]),-1!==O(this,n,t)},codePointAt:function(e){var t=ae.ToString(ae.RequireObjectCoercible(this)),n=ae.ToInteger(e),r=t.length;if(n>=0&&n<r){var i=t.charCodeAt(n),o=n+1===r;if(i<55296||i>56319||o)return i;var a=t.charCodeAt(n+1);return a<56320||a>57343?i:1024*(i-55296)+(a-56320)+65536}}};if(String.prototype.includes&&!1!=="a".includes("a",1/0)&&K(String.prototype,"includes",Ie.includes),String.prototype.startsWith&&String.prototype.endsWith){var Pe=o(function(){"/a/".startsWith(/a/)}),Me=a(function(){return!1==="abc".startsWith("a",1/0)});Pe&&Me||(K(String.prototype,"startsWith",Ie.startsWith),K(String.prototype,"endsWith",Ie.endsWith))}if(ee){a(function(){var e=/a/;return e[z.match]=!1,"/a/".startsWith(e)})||K(String.prototype,"startsWith",Ie.startsWith);a(function(){var e=/a/;return e[z.match]=!1,"/a/".endsWith(e)})||K(String.prototype,"endsWith",Ie.endsWith);a(function(){var e=/a/;return e[z.match]=!1,"/a/".includes(e)})||K(String.prototype,"includes",Ie.includes)}y(String.prototype,Ie);var De=["\\t\\n\\v\\f\\r \\xa0\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003","\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\u2028","\\u2029\\ufeff"].join(""),Le=new RegExp("(^["+De+"]+)|(["+De+"]+$)","g"),qe=function(){return ae.ToString(ae.RequireObjectCoercible(this)).replace(Le,"")},Re=["\\x85","\\u200b","\\ufffe"].join(""),Fe=new RegExp("["+Re+"]","g"),He=/^[-+]0x[0-9a-f]+$/i,$e=Re.trim().length!==Re.length;h(String.prototype,"trim",qe,$e);var Ve=function(e){return{value:e,done:0===arguments.length}},Be=function(e){ae.RequireObjectCoercible(e),this._s=ae.ToString(e),this._i=0};Be.prototype.next=function(){var e=this._s,t=this._i;if(void 0===e||t>=e.length)return this._s=void 0,Ve();var n,r,i=e.charCodeAt(t);return i<55296||i>56319||t+1===e.length?r=1:(n=e.charCodeAt(t+1),r=n<56320||n>57343?1:2),this._i=t+r,Ve(e.substr(t,r))},je(Be.prototype),je(String.prototype,function(){return new Be(this)});var ze={from:function(e){var t,r=this;arguments.length>1&&(t=arguments[1]);var i,o;if(void 0===t)i=!1;else{if(!ae.IsCallable(t))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(o=arguments[2]),i=!0}var a,s,c,u=void 0!==(Z(e)||ae.GetMethod(e,te));if(u){s=ae.IsConstructor(r)?Object(new r):[];var l,f,p=ae.GetIterator(e);for(c=0;;){if(!1===(l=ae.IteratorStep(p)))break;f=l.value;try{i&&(f=void 0===o?t(f,c):n(t,o,f,c)),s[c]=f}catch(e){throw ae.IteratorClose(p,!0),e}c+=1}a=c}else{var d=ae.ToObject(e);a=ae.ToLength(d.length),s=ae.IsConstructor(r)?Object(new r(a)):new Array(a);var h;for(c=0;c<a;++c)h=d[c],i&&(h=void 0===o?t(h,c):n(t,o,h,c)),Ae(s,c,h)}return s.length=a,s},of:function(){for(var e=arguments.length,t=this,n=r(t)||!ae.IsCallable(t)?new Array(e):ae.Construct(t,[e]),i=0;i<e;++i)Ae(n,i,arguments[i]);return n.length=e,n}};y(Array,ze),Se(Array),e=function(e,t){this.i=0,this.array=e,this.kind=t},y(e.prototype,{next:function(){var t=this.i,n=this.array;if(!(this instanceof e))throw new TypeError("Not an ArrayIterator");if(void 0!==n)for(var r=ae.ToLength(n.length);t<r;t++){var i,o=this.kind;return"key"===o?i=t:"value"===o?i=n[t]:"entry"===o&&(i=[t,n[t]]),this.i=t+1,Ve(i)}return this.array=void 0,Ve()}}),je(e.prototype),Array.of===ze.of||function(){var e=function(e){this.length=e};e.prototype=[];var t=Array.of.apply(e,[1,2]);return t instanceof e&&2===t.length}()||K(Array,"of",ze.of);var We={copyWithin:function(e,t){var n,r=ae.ToObject(this),i=ae.ToLength(r.length),o=ae.ToInteger(e),a=ae.ToInteger(t),s=o<0?N(i+o,0):_(o,i),c=a<0?N(i+a,0):_(a,i);arguments.length>2&&(n=arguments[2]);var u=void 0===n?i:ae.ToInteger(n),l=u<0?N(i+u,0):_(u,i),f=_(l-c,i-s),p=1;for(c<s&&s<c+f&&(p=-1,c+=f-1,s+=f-1);f>0;)c in r?r[s]=r[c]:delete r[s],c+=p,s+=p,f-=1;return r},fill:function(e){var t;arguments.length>1&&(t=arguments[1]);var n;arguments.length>2&&(n=arguments[2]);var r=ae.ToObject(this),i=ae.ToLength(r.length);t=ae.ToInteger(void 0===t?0:t),n=ae.ToInteger(void 0===n?i:n);for(var o=t<0?N(i+t,0):_(t,i),a=n<0?i+n:n,s=o;s<i&&s<a;++s)r[s]=e;return r},find:function(e){var t=ae.ToObject(this),r=ae.ToLength(t.length);if(!ae.IsCallable(e))throw new TypeError("Array#find: predicate must be a function");for(var i,o=arguments.length>1?arguments[1]:null,a=0;a<r;a++)if(i=t[a],o){if(n(e,o,i,a,t))return i}else if(e(i,a,t))return i},findIndex:function(e){var t=ae.ToObject(this),r=ae.ToLength(t.length);if(!ae.IsCallable(e))throw new TypeError("Array#findIndex: predicate must be a function");for(var i=arguments.length>1?arguments[1]:null,o=0;o<r;o++)if(i){if(n(e,i,t[o],o,t))return o}else if(e(t[o],o,t))return o;return-1},keys:function(){return new e(this,"key")},values:function(){return new e(this,"value")},entries:function(){return new e(this,"entry")}};if(Array.prototype.keys&&!ae.IsCallable([1].keys().next)&&delete Array.prototype.keys,Array.prototype.entries&&!ae.IsCallable([1].entries().next)&&delete Array.prototype.entries,Array.prototype.keys&&Array.prototype.entries&&!Array.prototype.values&&Array.prototype[te]&&(y(Array.prototype,{values:Array.prototype[te]}),Q.symbol(z.unscopables)&&(Array.prototype[z.unscopables].values=!0)),u&&Array.prototype.values&&"values"!==Array.prototype.values.name){var Ue=Array.prototype.values;K(Array.prototype,"values",function(){return ae.Call(Ue,this,arguments)}),h(Array.prototype,te,Array.prototype.values,!0)}y(Array.prototype,We),1/[!0].indexOf(!0,-0)<0&&h(Array.prototype,"indexOf",function(e){var t=S(this,arguments);return 0===t&&1/t<0?0:t},!0),je(Array.prototype,function(){return this.values()}),Object.getPrototypeOf&&je(Object.getPrototypeOf([].values()));var Ge=function(){return a(function(){return 0===Array.from({length:-1}).length})}(),Xe=function(){var e=Array.from([0].entries());return 1===e.length&&r(e[0])&&0===e[0][0]&&0===e[0][1]}();if(Ge&&Xe||K(Array,"from",ze.from),!function(){return a(function(){return Array.from([0],void 0)})}()){var Je=Array.from;K(Array,"from",function(e){return arguments.length>1&&void 0!==arguments[1]?ae.Call(Je,this,arguments):n(Je,this,e)})}var Ye=-(Math.pow(2,32)-1),Ze=function(e,t){var r={length:Ye};return r[t?(r.length>>>0)-1:0]=!0,a(function(){return n(e,r,function(){throw new RangeError("should not reach here")},[]),!0})};if(!Ze(Array.prototype.forEach)){var Qe=Array.prototype.forEach;K(Array.prototype,"forEach",function(e){return ae.Call(Qe,this.length>=0?this:[],arguments)})}if(!Ze(Array.prototype.map)){var Ke=Array.prototype.map;K(Array.prototype,"map",function(e){return ae.Call(Ke,this.length>=0?this:[],arguments)})}if(!Ze(Array.prototype.filter)){var et=Array.prototype.filter;K(Array.prototype,"filter",function(e){return ae.Call(et,this.length>=0?this:[],arguments)})}if(!Ze(Array.prototype.some)){var tt=Array.prototype.some;K(Array.prototype,"some",function(e){return ae.Call(tt,this.length>=0?this:[],arguments)})}if(!Ze(Array.prototype.every)){var nt=Array.prototype.every;K(Array.prototype,"every",function(e){return ae.Call(nt,this.length>=0?this:[],arguments)})}if(!Ze(Array.prototype.reduce)){var rt=Array.prototype.reduce;K(Array.prototype,"reduce",function(e){return ae.Call(rt,this.length>=0?this:[],arguments)})}if(!Ze(Array.prototype.reduceRight,!0)){var it=Array.prototype.reduceRight;K(Array.prototype,"reduceRight",function(e){return ae.Call(it,this.length>=0?this:[],arguments)})}var ot=8!==Number("0o10"),at=2!==Number("0b10"),st=d(Re,function(e){return 0===Number(e+0+e)});if(ot||at||st){var ct=Number,ut=/^0b[01]+$/i,lt=/^0o[0-7]+$/i,ft=ut.test.bind(ut),pt=lt.test.bind(lt),dt=function(e){var t;if("function"==typeof e.valueOf&&(t=e.valueOf(),Q.primitive(t)))return t;if("function"==typeof e.toString&&(t=e.toString(),Q.primitive(t)))return t;throw new TypeError("No default value")},ht=Fe.test.bind(Fe),yt=He.test.bind(He),gt=function(){var e=function(t){var n;"string"==typeof(n=arguments.length>0?Q.primitive(t)?t:dt(t):0)&&(n=ae.Call(qe,n),ft(n)?n=parseInt(k(n,2),2):pt(n)?n=parseInt(k(n,2),8):(ht(n)||yt(n))&&(n=NaN));var r=this,i=a(function(){return ct.prototype.valueOf.call(r),!0});return r instanceof e&&!i?new ct(n):ct(n)};return e}();Te(ct,gt,{}),y(gt,{NaN:ct.NaN,MAX_VALUE:ct.MAX_VALUE,MIN_VALUE:ct.MIN_VALUE,NEGATIVE_INFINITY:ct.NEGATIVE_INFINITY,POSITIVE_INFINITY:ct.POSITIVE_INFINITY}),Number=gt,v.redefine(x,"Number",gt)}var mt=Math.pow(2,53)-1;y(Number,{MAX_SAFE_INTEGER:mt,MIN_SAFE_INTEGER:-mt,EPSILON:2.220446049250313e-16,parseInt:x.parseInt,parseFloat:x.parseFloat,isFinite:G,isInteger:function(e){return G(e)&&ae.ToInteger(e)===e},isSafeInteger:function(e){return Number.isInteger(e)&&P(e)<=Number.MAX_SAFE_INTEGER},isNaN:U}),h(Number,"parseInt",x.parseInt,Number.parseInt!==x.parseInt),1===[,1].find(function(){return!0})&&K(Array.prototype,"find",We.find),0!==[,1].findIndex(function(){return!0})&&K(Array.prototype,"findIndex",We.findIndex);var vt=Function.bind.call(Function.bind,Object.prototype.propertyIsEnumerable),bt=function(e,t){c&&vt(e,t)&&Object.defineProperty(e,t,{enumerable:!1})},wt=function(){for(var e=Number(this),t=arguments.length,n=t-e,r=new Array(n<0?0:n),i=e;i<t;++i)r[i-e]=arguments[i];return r},xt=function(e){return function(t,n){return t[n]=e[n],t}},Tt=function(e,t){var n,r=i(Object(t));return ae.IsCallable(Object.getOwnPropertySymbols)&&(n=p(Object.getOwnPropertySymbols(Object(t)),vt(t))),f(j(r,n||[]),xt(t),e)},Ot={assign:function(e,t){var n=ae.ToObject(e,"Cannot convert undefined or null to object");return f(ae.Call(wt,1,arguments),Tt,n)},is:function(e,t){return ae.SameValue(e,t)}};if(Object.assign&&Object.preventExtensions&&function(){var e=Object.preventExtensions({1:2});try{Object.assign(e,"xy")}catch(t){return"y"===e[1]}}()&&K(Object,"assign",Ot.assign),y(Object,Ot),c){var St={setPrototypeOf:function(e,t){var r,i=function(e,t){if(!ae.TypeIsObject(e))throw new TypeError("cannot set prototype on a non-object");if(null!==t&&!ae.TypeIsObject(t))throw new TypeError("can only set prototype to an object or null"+t)},o=function(e,t){return i(e,t),n(r,e,t),e};try{r=e.getOwnPropertyDescriptor(e.prototype,"__proto__").set,n(r,{},null)}catch(t){if(e.prototype!=={}.__proto__)return;r=function(e){this.__proto__=e},o.polyfill=o(o({},null),e.prototype)instanceof e}return o}(Object)};y(Object,St)}if(Object.setPrototypeOf&&Object.getPrototypeOf&&null!==Object.getPrototypeOf(Object.setPrototypeOf({},null))&&null===Object.getPrototypeOf(Object.create(null))&&function(){var e=Object.create(null),t=Object.getPrototypeOf,n=Object.setPrototypeOf;Object.getPrototypeOf=function(n){var r=t(n);return r===e?null:r},Object.setPrototypeOf=function(t,r){return n(t,null===r?e:r)},Object.setPrototypeOf.polyfill=!1}(),!!o(function(){Object.keys("foo")})){var jt=Object.keys;K(Object,"keys",function(e){return jt(ae.ToObject(e))}),i=Object.keys}if(o(function(){Object.keys(/a/g)})){var kt=Object.keys;K(Object,"keys",function(e){if(Q.regex(e)){var t=[];for(var n in e)q(e,n)&&A(t,n);return t}return kt(e)}),i=Object.keys}if(Object.getOwnPropertyNames){if(!!o(function(){Object.getOwnPropertyNames("foo")})){var At="object"===("undefined"==typeof window?"undefined":_typeof(window))?Object.getOwnPropertyNames(window):[],Ct=Object.getOwnPropertyNames;K(Object,"getOwnPropertyNames",function(e){var t=ae.ToObject(e);if("[object Window]"===g(t))try{return Ct(t)}catch(e){return j([],At)}return Ct(t)})}}if(Object.getOwnPropertyDescriptor){if(!!o(function(){Object.getOwnPropertyDescriptor("foo","bar")})){var Et=Object.getOwnPropertyDescriptor;K(Object,"getOwnPropertyDescriptor",function(e,t){return Et(ae.ToObject(e),t)})}}if(Object.seal){if(!!o(function(){Object.seal("foo")})){var Nt=Object.seal;K(Object,"seal",function(e){return ae.TypeIsObject(e)?Nt(e):e})}}if(Object.isSealed){if(!!o(function(){Object.isSealed("foo")})){var _t=Object.isSealed;K(Object,"isSealed",function(e){return!ae.TypeIsObject(e)||_t(e)})}}if(Object.freeze){if(!!o(function(){Object.freeze("foo")})){var It=Object.freeze;K(Object,"freeze",function(e){return ae.TypeIsObject(e)?It(e):e})}}if(Object.isFrozen){if(!!o(function(){Object.isFrozen("foo")})){var Pt=Object.isFrozen;K(Object,"isFrozen",function(e){return!ae.TypeIsObject(e)||Pt(e)})}}if(Object.preventExtensions){if(!!o(function(){Object.preventExtensions("foo")})){var Mt=Object.preventExtensions;K(Object,"preventExtensions",function(e){return ae.TypeIsObject(e)?Mt(e):e})}}if(Object.isExtensible){if(!!o(function(){Object.isExtensible("foo")})){var Dt=Object.isExtensible;K(Object,"isExtensible",function(e){return!!ae.TypeIsObject(e)&&Dt(e)})}}if(Object.getPrototypeOf){if(!!o(function(){Object.getPrototypeOf("foo")})){var Lt=Object.getPrototypeOf;K(Object,"getPrototypeOf",function(e){return Lt(ae.ToObject(e))})}}var qt=c&&function(){var e=Object.getOwnPropertyDescriptor(RegExp.prototype,"flags");return e&&ae.IsCallable(e.get)}();if(c&&!qt){var Rt=function(){if(!ae.TypeIsObject(this))throw new TypeError("Method called on incompatible type: must be an object.");var e="";return this.global&&(e+="g"),this.ignoreCase&&(e+="i"),this.multiline&&(e+="m"),this.unicode&&(e+="u"),this.sticky&&(e+="y"),e};v.getter(RegExp.prototype,"flags",Rt)}var Ft=c&&a(function(){return"/a/i"===String(new RegExp(/a/g,"i"))}),Ht=ee&&c&&function(){var e=/./;return e[z.match]=!1,RegExp(e)===e}(),$t=a(function(){return"/abc/"===RegExp.prototype.toString.call({source:"abc"})}),Vt=$t&&a(function(){return"/a/b"===RegExp.prototype.toString.call({source:"a",flags:"b"})});if(!$t||!Vt){var Bt=RegExp.prototype.toString;h(RegExp.prototype,"toString",function(){var e=ae.RequireObjectCoercible(this);return Q.regex(e)?n(Bt,e):"/"+re(e.source)+"/"+re(e.flags)},!0),v.preserveToString(RegExp.prototype.toString,Bt)}if(c&&(!Ft||Ht)){var zt=Object.getOwnPropertyDescriptor(RegExp.prototype,"flags").get,Wt=Object.getOwnPropertyDescriptor(RegExp.prototype,"source")||{},Ut=function(){return this.source},Gt=ae.IsCallable(Wt.get)?Wt.get:Ut,Xt=RegExp,Jt=function(){return function e(t,n){var r=ae.IsRegExp(t);if(!(this instanceof e)&&r&&void 0===n&&t.constructor===e)return t;var i=t,o=n;return Q.regex(t)?(i=ae.Call(Gt,t),o=void 0===n?ae.Call(zt,t):n,new e(i,o)):(r&&(i=t.source,o=void 0===n?t.flags:n),new Xt(t,n))}}();Te(Xt,Jt,{$input:!0}),RegExp=Jt,v.redefine(x,"RegExp",Jt)}if(c){var Yt={input:"$_",lastMatch:"$&",lastParen:"$+",leftContext:"$`",rightContext:"$\'"};l(i(Yt),function(e){e in RegExp&&!(Yt[e]in RegExp)&&v.getter(RegExp,Yt[e],function(){return RegExp[e]})})}Se(RegExp);var Zt=1/Number.EPSILON,Qt=function(e){return e+Zt-Zt},Kt=Math.pow(2,-23),en=Math.pow(2,127)*(2-Kt),tn=Math.pow(2,-126),nn=Math.E,rn=Math.LOG2E,on=Math.LOG10E,an=Number.prototype.clz;delete Number.prototype.clz;var sn={acosh:function(e){var t=Number(e);return U(t)||e<1?NaN:1===t?0:t===1/0?t:D(t/nn+L(t+1)*L(t-1)/nn)+1},asinh:function e(t){var n=Number(t);return 0!==n&&T(n)?n<0?-e(-n):D(n+L(n*n+1)):n},atanh:function(e){var t=Number(e);return U(t)||t<-1||t>1?NaN:-1===t?-1/0:1===t?1/0:0===t?t:.5*D((1+t)/(1-t))},cbrt:function(e){var t=Number(e);if(0===t)return t;var n,r=t<0;return r&&(t=-t),t===1/0?n=1/0:(n=M(D(t)/3),n=(t/(n*n)+2*n)/3),r?-n:n},clz32:function(e){var t=Number(e),n=ae.ToUint32(t);return 0===n?32:an?ae.Call(an,n):31-I(D(n+.5)*rn)},cosh:function(e){var t=Number(e);return 0===t?1:U(t)?NaN:T(t)?(t<0&&(t=-t),t>21?M(t)/2:(M(t)+M(-t))/2):1/0},expm1:function(e){var t=Number(e);if(t===-1/0)return-1;if(!T(t)||0===t)return t;if(P(t)>.5)return M(t)-1;for(var n=t,r=0,i=1;r+n!==r;)r+=n,i+=1,n*=t/i;return r},hypot:function(e,t){for(var n=0,r=0,i=0;i<arguments.length;++i){var o=P(Number(arguments[i]));r<o?(n*=r/o*(r/o),n+=1,r=o):n+=o>0?o/r*(o/r):o}return r===1/0?1/0:r*L(n)},log2:function(e){return D(e)*rn},log10:function(e){return D(e)*on},log1p:function(e){var t=Number(e);return t<-1||U(t)?NaN:0===t||t===1/0?t:-1===t?-1/0:1+t-1==0?t:t*(D(1+t)/(1+t-1))},sign:X,sinh:function(e){var t=Number(e);return T(t)&&0!==t?P(t)<1?(Math.expm1(t)-Math.expm1(-t))/2:(M(t-1)-M(-t-1))*nn/2:t},tanh:function(e){var t=Number(e);return U(t)||0===t?t:t>=20?1:t<=-20?-1:(Math.expm1(t)-Math.expm1(-t))/(M(t)+M(-t))},trunc:function(e){var t=Number(e);return t<0?-I(-t):I(t)},imul:function(e,t){var n=ae.ToUint32(e),r=ae.ToUint32(t),i=n>>>16&65535,o=65535&n,a=r>>>16&65535,s=65535&r;return o*s+(i*s+o*a<<16>>>0)|0},fround:function(e){var t=Number(e);if(0===t||t===1/0||t===-1/0||U(t))return t;var n=X(t),r=P(t);if(r<tn)return n*Qt(r/tn/Kt)*tn*Kt;var i=(1+Kt/Number.EPSILON)*r,o=i-(i-r);return o>en||U(o)?n*(1/0):n*o}};y(Math,sn),h(Math,"log1p",sn.log1p,-1e-17!==Math.log1p(-1e-17)),h(Math,"asinh",sn.asinh,Math.asinh(-1e7)!==-Math.asinh(1e7)),h(Math,"tanh",sn.tanh,-2e-17!==Math.tanh(-2e-17)),h(Math,"acosh",sn.acosh,Math.acosh(Number.MAX_VALUE)===1/0),h(Math,"cbrt",sn.cbrt,Math.abs(1-Math.cbrt(1e-300)/1e-100)/Number.EPSILON>8),h(Math,"sinh",sn.sinh,-2e-17!==Math.sinh(-2e-17));var cn=Math.expm1(10);h(Math,"expm1",sn.expm1,cn>22025.465794806718||cn<22025.465794806718);var un=Math.round,ln=0===Math.round(.5-Number.EPSILON/4)&&1===Math.round(Number.EPSILON/3.99-.5),fn=Zt+1,pn=2*Zt-1,dn=[fn,pn].every(function(e){return Math.round(e)===e});h(Math,"round",function(e){var t=I(e),n=-1===t?-0:t+1;return e-t<.5?t:n},!ln||!dn),v.preserveToString(Math.round,un);var hn=Math.imul;-5!==Math.imul(4294967295,5)&&(Math.imul=sn.imul,v.preserveToString(Math.imul,hn)),2!==Math.imul.length&&K(Math,"imul",function(e,t){return ae.Call(hn,Math,arguments)});var yn=function(){var e=x.setTimeout;if("function"==typeof e||"object"===(void 0===e?"undefined":_typeof(e))){ae.IsPromise=function(e){return!!ae.TypeIsObject(e)&&void 0!==e._promise};var t,r=function(e){if(!ae.IsConstructor(e))throw new TypeError("Bad promise constructor");var t=this,n=function(e,n){if(void 0!==t.resolve||void 0!==t.reject)throw new TypeError("Bad Promise implementation!");t.resolve=e,t.reject=n};if(t.resolve=void 0,t.reject=void 0,t.promise=new e(n),!ae.IsCallable(t.resolve)||!ae.IsCallable(t.reject))throw new TypeError("Bad promise constructor")};"undefined"!=typeof window&&ae.IsCallable(window.postMessage)&&(t=function(){var e=[],t=function(t){A(e,t),window.postMessage("zero-timeout-message","*")},n=function(t){if(t.source===window&&"zero-timeout-message"===t.data){if(t.stopPropagation(),0===e.length)return;E(e)()}};return window.addEventListener("message",n,!0),t});var i,o,a=ae.IsCallable(x.setImmediate)?x.setImmediate:"object"===("undefined"==typeof process?"undefined":_typeof(process))&&process.nextTick?process.nextTick:function(){var e=x.Promise,t=e&&e.resolve&&e.resolve();return t&&function(e){return t.then(e)}}()||(ae.IsCallable(t)?t():function(t){e(t,0)}),s=function(e){return e},c=function(e){throw e},u={},l=function(e,t,n){a(function(){f(e,t,n)})},f=function(e,t,n){var r,i;if(t===u)return e(n);try{r=e(n),i=t.resolve}catch(e){r=e,i=t.reject}i(r)},p=function(e,t){var n=e._promise,r=n.reactionLength;if(r>0&&(l(n.fulfillReactionHandler0,n.reactionCapability0,t),n.fulfillReactionHandler0=void 0,n.rejectReactions0=void 0,n.reactionCapability0=void 0,r>1))for(var i=1,o=0;i<r;i++,o+=3)l(n[o+0],n[o+2],t),e[o+0]=void 0,e[o+1]=void 0,e[o+2]=void 0;n.result=t,n.state=1,n.reactionLength=0},d=function(e,t){var n=e._promise,r=n.reactionLength;if(r>0&&(l(n.rejectReactionHandler0,n.reactionCapability0,t),n.fulfillReactionHandler0=void 0,n.rejectReactions0=void 0,n.reactionCapability0=void 0,r>1))for(var i=1,o=0;i<r;i++,o+=3)l(n[o+1],n[o+2],t),e[o+0]=void 0,e[o+1]=void 0,e[o+2]=void 0;n.result=t,n.state=2,n.reactionLength=0},h=function(e){var t=!1;return{resolve:function(n){var r;if(!t){if(t=!0,n===e)return d(e,new TypeError("Self resolution"));if(!ae.TypeIsObject(n))return p(e,n);try{r=n.then}catch(t){return d(e,t)}if(!ae.IsCallable(r))return p(e,n);a(function(){m(e,n,r)})}},reject:function(n){if(!t)return t=!0,d(e,n)}}},g=function(e,t,r,i){e===o?n(e,t,r,i,u):n(e,t,r,i)},m=function(e,t,n){var r=h(e),i=r.resolve,o=r.reject;try{g(n,t,i,o)}catch(e){o(e)}},v=function(){var e=function(t){if(!(this instanceof e))throw new TypeError(\'Constructor Promise requires "new"\');if(this&&this._promise)throw new TypeError("Bad construction");if(!ae.IsCallable(t))throw new TypeError("not a valid resolver");var n=Ce(this,e,i,{_promise:{result:void 0,state:0,reactionLength:0,fulfillReactionHandler0:void 0,rejectReactionHandler0:void 0,reactionCapability0:void 0}}),r=h(n),o=r.reject;try{t(r.resolve,o)}catch(e){o(e)}return n};return e}();i=v.prototype;var b=function(e,t,n,r){var i=!1;return function(o){if(!i&&(i=!0,t[e]=o,0==--r.count)){(0,n.resolve)(t)}}\n},w=function(e,t,n){for(var r,i,o=e.iterator,a=[],s={count:1},c=0;;){try{if(!1===(r=ae.IteratorStep(o))){e.done=!0;break}i=r.value}catch(t){throw e.done=!0,t}a[c]=void 0;var u=t.resolve(i),l=b(c,a,n,s);s.count+=1,g(u.then,u,l,n.reject),c+=1}if(0==--s.count){(0,n.resolve)(a)}return n.promise},T=function(e,t,n){for(var r,i,o,a=e.iterator;;){try{if(!1===(r=ae.IteratorStep(a))){e.done=!0;break}i=r.value}catch(t){throw e.done=!0,t}o=t.resolve(i),g(o.then,o,n.resolve,n.reject)}return n.promise};return y(v,{all:function(e){var t=this;if(!ae.TypeIsObject(t))throw new TypeError("Promise is not object");var n,i,o=new r(t);try{return n=ae.GetIterator(e),i={iterator:n,done:!1},w(i,t,o)}catch(e){var a=e;if(i&&!i.done)try{ae.IteratorClose(n,!0)}catch(e){a=e}var s=o.reject;return s(a),o.promise}},race:function(e){var t=this;if(!ae.TypeIsObject(t))throw new TypeError("Promise is not object");var n,i,o=new r(t);try{return n=ae.GetIterator(e),i={iterator:n,done:!1},T(i,t,o)}catch(e){var a=e;if(i&&!i.done)try{ae.IteratorClose(n,!0)}catch(e){a=e}var s=o.reject;return s(a),o.promise}},reject:function(e){var t=this;if(!ae.TypeIsObject(t))throw new TypeError("Bad promise constructor");var n=new r(t);return(0,n.reject)(e),n.promise},resolve:function(e){var t=this;if(!ae.TypeIsObject(t))throw new TypeError("Bad promise constructor");if(ae.IsPromise(e)){var n=e.constructor;if(n===t)return e}var i=new r(t);return(0,i.resolve)(e),i.promise}}),y(i,{catch:function(e){return this.then(null,e)},then:function(e,t){var n=this;if(!ae.IsPromise(n))throw new TypeError("not a promise");var i,o=ae.SpeciesConstructor(n,v);i=arguments.length>2&&arguments[2]===u&&o===v?u:new r(o);var a,f=ae.IsCallable(e)?e:s,p=ae.IsCallable(t)?t:c,d=n._promise;if(0===d.state){if(0===d.reactionLength)d.fulfillReactionHandler0=f,d.rejectReactionHandler0=p,d.reactionCapability0=i;else{var h=3*(d.reactionLength-1);d[h+0]=f,d[h+1]=p,d[h+2]=i}d.reactionLength+=1}else if(1===d.state)a=d.result,l(f,i,a);else{if(2!==d.state)throw new TypeError("unexpected Promise state");a=d.result,l(p,i,a)}return i.promise}}),u=new r(v),o=i.then,v}}();if(x.Promise&&(delete x.Promise.accept,delete x.Promise.defer,delete x.Promise.prototype.chain),"function"==typeof yn){y(x,{Promise:yn});var gn=w(x.Promise,function(e){return e.resolve(42).then(function(){})instanceof e}),mn=!o(function(){x.Promise.reject(42).then(null,5).then(null,R)}),vn=o(function(){x.Promise.call(3,R)}),bn=function(e){var t=e.resolve(5);t.constructor={};var n=e.resolve(t);try{n.then(null,R).then(null,R)}catch(e){return!0}return t===n}(x.Promise),wn=c&&function(){var e=0,t=Object.defineProperty({},"then",{get:function(){e+=1}});return Promise.resolve(t),1===e}(),xn=function e(t){var n=new Promise(t);t(3,function(){}),this.then=n.then,this.constructor=e};xn.prototype=Promise.prototype,xn.all=Promise.all;var Tn=a(function(){return!!xn.all([1,2])});if(gn&&mn&&vn&&!bn&&wn&&!Tn||(Promise=yn,K(x,"Promise",yn)),1!==Promise.all.length){var On=Promise.all;K(Promise,"all",function(e){return ae.Call(On,this,arguments)})}if(1!==Promise.race.length){var Sn=Promise.race;K(Promise,"race",function(e){return ae.Call(Sn,this,arguments)})}if(1!==Promise.resolve.length){var jn=Promise.resolve;K(Promise,"resolve",function(e){return ae.Call(jn,this,arguments)})}if(1!==Promise.reject.length){var kn=Promise.reject;K(Promise,"reject",function(e){return ae.Call(kn,this,arguments)})}bt(Promise,"all"),bt(Promise,"race"),bt(Promise,"resolve"),bt(Promise,"reject"),Se(Promise)}var An=function(e){var t=i(f(e,function(e,t){return e[t]=!0,e},{}));return e.join(":")===t.join(":")},Cn=An(["z","a","bb"]),En=An(["z",1,"a","3",2]);if(c){var Nn=function(e,t){return t||Cn?oe(e)?"^"+ae.ToString(e):"string"==typeof e?"$"+e:"number"==typeof e?En?e:"n"+e:"boolean"==typeof e?"b"+e:null:null},_n=function(){return Object.create?Object.create(null):{}},In=function(e,t,i){if(r(i)||Q.string(i))l(i,function(e){if(!ae.TypeIsObject(e))throw new TypeError("Iterator value "+e+" is not an entry object");t.set(e[0],e[1])});else if(i instanceof e)n(e.prototype.forEach,i,function(e,n){t.set(n,e)});else{var o,a;if(!oe(i)){if(a=t.set,!ae.IsCallable(a))throw new TypeError("bad map");o=ae.GetIterator(i)}if(void 0!==o)for(;;){var s=ae.IteratorStep(o);if(!1===s)break;var c=s.value;try{if(!ae.TypeIsObject(c))throw new TypeError("Iterator value "+c+" is not an entry object");n(a,t,c[0],c[1])}catch(e){throw ae.IteratorClose(o,!0),e}}}},Pn=function(e,t,i){if(r(i)||Q.string(i))l(i,function(e){t.add(e)});else if(i instanceof e)n(e.prototype.forEach,i,function(e){t.add(e)});else{var o,a;if(!oe(i)){if(a=t.add,!ae.IsCallable(a))throw new TypeError("bad set");o=ae.GetIterator(i)}if(void 0!==o)for(;;){var s=ae.IteratorStep(o);if(!1===s)break;var c=s.value;try{n(a,t,c)}catch(e){throw ae.IteratorClose(o,!0),e}}}},Mn={Map:function(){var e={},t=function(e,t){this.key=e,this.value=t,this.next=null,this.prev=null};t.prototype.isRemoved=function(){return this.key===e};var r=function(e){return!!e._es6map},i=function(e,t){if(!ae.TypeIsObject(e)||!r(e))throw new TypeError("Method Map.prototype."+t+" called on incompatible receiver "+ae.ToString(e))},o=function(e,t){i(e,"[[MapIterator]]"),this.head=e._head,this.i=this.head,this.kind=t};o.prototype={next:function(){var e=this.i,t=this.kind,n=this.head;if(void 0===this.i)return Ve();for(;e.isRemoved()&&e!==n;)e=e.prev;for(var r;e.next!==n;)if(e=e.next,!e.isRemoved())return r="key"===t?e.key:"value"===t?e.value:[e.key,e.value],this.i=e,Ve(r);return this.i=void 0,Ve()}},je(o.prototype);var a,s=function e(){if(!(this instanceof e))throw new TypeError(\'Constructor Map requires "new"\');if(this&&this._es6map)throw new TypeError("Bad construction");var n=Ce(this,e,a,{_es6map:!0,_head:null,_map:F?new F:null,_size:0,_storage:_n()}),r=new t(null,null);return r.next=r.prev=r,n._head=r,arguments.length>0&&In(e,n,arguments[0]),n};return a=s.prototype,v.getter(a,"size",function(){if(void 0===this._size)throw new TypeError("size method called on incompatible Map");return this._size}),y(a,{get:function(e){i(this,"get");var t,n=Nn(e,!0);if(null!==n)return t=this._storage[n],t?t.value:void 0;if(this._map)return t=$.call(this._map,e),t?t.value:void 0;for(var r=this._head,o=r;(o=o.next)!==r;)if(ae.SameValueZero(o.key,e))return o.value},has:function(e){i(this,"has");var t=Nn(e,!0);if(null!==t)return void 0!==this._storage[t];if(this._map)return V.call(this._map,e);for(var n=this._head,r=n;(r=r.next)!==n;)if(ae.SameValueZero(r.key,e))return!0;return!1},set:function(e,n){i(this,"set");var r,o=this._head,a=o,s=Nn(e,!0);if(null!==s){if(void 0!==this._storage[s])return this._storage[s].value=n,this;r=this._storage[s]=new t(e,n),a=o.prev}else this._map&&(V.call(this._map,e)?$.call(this._map,e).value=n:(r=new t(e,n),B.call(this._map,e,r),a=o.prev));for(;(a=a.next)!==o;)if(ae.SameValueZero(a.key,e))return a.value=n,this;return r=r||new t(e,n),ae.SameValue(-0,e)&&(r.key=0),r.next=this._head,r.prev=this._head.prev,r.prev.next=r,r.next.prev=r,this._size+=1,this},delete:function(t){i(this,"delete");var n=this._head,r=n,o=Nn(t,!0);if(null!==o){if(void 0===this._storage[o])return!1;r=this._storage[o].prev,delete this._storage[o]}else if(this._map){if(!V.call(this._map,t))return!1;r=$.call(this._map,t).prev,H.call(this._map,t)}for(;(r=r.next)!==n;)if(ae.SameValueZero(r.key,t))return r.key=e,r.value=e,r.prev.next=r.next,r.next.prev=r.prev,this._size-=1,!0;return!1},clear:function(){i(this,"clear"),this._map=F?new F:null,this._size=0,this._storage=_n();for(var t=this._head,n=t,r=n.next;(n=r)!==t;)n.key=e,n.value=e,r=n.next,n.next=n.prev=t;t.next=t.prev=t},keys:function(){return i(this,"keys"),new o(this,"key")},values:function(){return i(this,"values"),new o(this,"value")},entries:function(){return i(this,"entries"),new o(this,"key+value")},forEach:function(e){i(this,"forEach");for(var t=arguments.length>1?arguments[1]:null,r=this.entries(),o=r.next();!o.done;o=r.next())t?n(e,t,o.value[1],o.value[0],this):e(o.value[1],o.value[0],this)}}),je(a,a.entries),s}(),Set:function(){var e,t=function(e){return e._es6set&&void 0!==e._storage},r=function(e,n){if(!ae.TypeIsObject(e)||!t(e))throw new TypeError("Set.prototype."+n+" called on incompatible receiver "+ae.ToString(e))},o=function t(){if(!(this instanceof t))throw new TypeError(\'Constructor Set requires "new"\');if(this&&this._es6set)throw new TypeError("Bad construction");var n=Ce(this,t,e,{_es6set:!0,"[[SetData]]":null,_storage:_n()});if(!n._es6set)throw new TypeError("bad set");return arguments.length>0&&Pn(t,n,arguments[0]),n};e=o.prototype;var a=function(e){var t=e;if("^null"===t)return null;if("^undefined"!==t){var n=t.charAt(0);return"$"===n?k(t,1):"n"===n?+k(t,1):"b"===n?"btrue"===t:+t}},s=function(e){if(!e["[[SetData]]"]){var t=new Mn.Map;e["[[SetData]]"]=t,l(i(e._storage),function(e){var n=a(e);t.set(n,n)}),e["[[SetData]]"]=t}e._storage=null};return v.getter(o.prototype,"size",function(){return r(this,"size"),this._storage?i(this._storage).length:(s(this),this["[[SetData]]"].size)}),y(o.prototype,{has:function(e){r(this,"has");var t;return this._storage&&null!==(t=Nn(e))?!!this._storage[t]:(s(this),this["[[SetData]]"].has(e))},add:function(e){r(this,"add");var t;return this._storage&&null!==(t=Nn(e))?(this._storage[t]=!0,this):(s(this),this["[[SetData]]"].set(e,e),this)},delete:function(e){r(this,"delete");var t;if(this._storage&&null!==(t=Nn(e))){var n=q(this._storage,t);return delete this._storage[t]&&n}return s(this),this["[[SetData]]"].delete(e)},clear:function(){r(this,"clear"),this._storage&&(this._storage=_n()),this["[[SetData]]"]&&this["[[SetData]]"].clear()},values:function(){return r(this,"values"),s(this),this["[[SetData]]"].values()},entries:function(){return r(this,"entries"),s(this),this["[[SetData]]"].entries()},forEach:function(e){r(this,"forEach");var t=arguments.length>1?arguments[1]:null,i=this;s(i),this["[[SetData]]"].forEach(function(r,o){t?n(e,t,o,o,i):e(o,o,i)})}}),h(o.prototype,"keys",o.prototype.values,!0),je(o.prototype,o.prototype.values),o}()};if(x.Map||x.Set){a(function(){return 2===new Map([[1,2]]).get(1)})||(x.Map=function e(){if(!(this instanceof e))throw new TypeError(\'Constructor Map requires "new"\');var t=new F;return arguments.length>0&&In(e,t,arguments[0]),delete t.constructor,Object.setPrototypeOf(t,x.Map.prototype),t},x.Map.prototype=b(F.prototype),h(x.Map.prototype,"constructor",x.Map,!0),v.preserveToString(x.Map,F));var Dn=new Map,Ln=function(){var e=new Map([[1,0],[2,0],[3,0],[4,0]]);return e.set(-0,e),e.get(0)===e&&e.get(-0)===e&&e.has(0)&&e.has(-0)}(),qn=Dn.set(1,2)===Dn;Ln&&qn||K(Map.prototype,"set",function(e,t){return n(B,this,0===e?0:e,t),this}),Ln||(y(Map.prototype,{get:function(e){return n($,this,0===e?0:e)},has:function(e){return n(V,this,0===e?0:e)}},!0),v.preserveToString(Map.prototype.get,$),v.preserveToString(Map.prototype.has,V));var Rn=new Set,Fn=function(e){return e.delete(0),e.add(-0),!e.has(0)}(Rn),Hn=Rn.add(1)===Rn;if(!Fn||!Hn){var $n=Set.prototype.add;Set.prototype.add=function(e){return n($n,this,0===e?0:e),this},v.preserveToString(Set.prototype.add,$n)}if(!Fn){var Vn=Set.prototype.has;Set.prototype.has=function(e){return n(Vn,this,0===e?0:e)},v.preserveToString(Set.prototype.has,Vn);var Bn=Set.prototype.delete;Set.prototype.delete=function(e){return n(Bn,this,0===e?0:e)},v.preserveToString(Set.prototype.delete,Bn)}var zn=w(x.Map,function(e){var t=new e([]);return t.set(42,42),t instanceof e}),Wn=Object.setPrototypeOf&&!zn,Un=function(){try{return!(x.Map()instanceof x.Map)}catch(e){return e instanceof TypeError}}();0===x.Map.length&&!Wn&&Un||(x.Map=function e(){if(!(this instanceof e))throw new TypeError(\'Constructor Map requires "new"\');var t=new F;return arguments.length>0&&In(e,t,arguments[0]),delete t.constructor,Object.setPrototypeOf(t,e.prototype),t},x.Map.prototype=F.prototype,h(x.Map.prototype,"constructor",x.Map,!0),v.preserveToString(x.Map,F));var Gn=w(x.Set,function(e){var t=new e([]);return t.add(42,42),t instanceof e}),Xn=Object.setPrototypeOf&&!Gn,Jn=function(){try{return!(x.Set()instanceof x.Set)}catch(e){return e instanceof TypeError}}();if(0!==x.Set.length||Xn||!Jn){var Yn=x.Set;x.Set=function e(){if(!(this instanceof e))throw new TypeError(\'Constructor Set requires "new"\');var t=new Yn;return arguments.length>0&&Pn(e,t,arguments[0]),delete t.constructor,Object.setPrototypeOf(t,e.prototype),t},x.Set.prototype=Yn.prototype,h(x.Set.prototype,"constructor",x.Set,!0),v.preserveToString(x.Set,Yn)}var Zn=new x.Map,Qn=!a(function(){return Zn.keys().next().done});if(("function"!=typeof x.Map.prototype.clear||0!==(new x.Set).size||0!==Zn.size||"function"!=typeof x.Map.prototype.keys||"function"!=typeof x.Set.prototype.keys||"function"!=typeof x.Map.prototype.forEach||"function"!=typeof x.Set.prototype.forEach||s(x.Map)||s(x.Set)||"function"!=typeof Zn.keys().next||Qn||!zn)&&y(x,{Map:Mn.Map,Set:Mn.Set},!0),x.Set.prototype.keys!==x.Set.prototype.values&&h(x.Set.prototype,"keys",x.Set.prototype.values,!0),je(Object.getPrototypeOf((new x.Map).keys())),je(Object.getPrototypeOf((new x.Set).keys())),u&&"has"!==x.Set.prototype.has.name){var Kn=x.Set.prototype.has;K(x.Set.prototype,"has",function(e){return n(Kn,this,e)})}}y(x,Mn),Se(x.Map),Se(x.Set)}var er=function(e){if(!ae.TypeIsObject(e))throw new TypeError("target must be an object")},tr={apply:function(){return ae.Call(ae.Call,null,arguments)},construct:function(e,t){if(!ae.IsConstructor(e))throw new TypeError("First argument must be a constructor.");var n=arguments.length>2?arguments[2]:e;if(!ae.IsConstructor(n))throw new TypeError("new.target must be a constructor.");return ae.Construct(e,t,n,"internal")},deleteProperty:function(e,t){if(er(e),c){var n=Object.getOwnPropertyDescriptor(e,t);if(n&&!n.configurable)return!1}return delete e[t]},has:function(e,t){return er(e),t in e}};Object.getOwnPropertyNames&&Object.assign(tr,{ownKeys:function(e){er(e);var t=Object.getOwnPropertyNames(e);return ae.IsCallable(Object.getOwnPropertySymbols)&&C(t,Object.getOwnPropertySymbols(e)),t}});var nr=function(e){return!o(e)};if(Object.preventExtensions&&Object.assign(tr,{isExtensible:function(e){return er(e),Object.isExtensible(e)},preventExtensions:function(e){return er(e),nr(function(){Object.preventExtensions(e)})}}),c){var rr=function(e,t,n){var r=Object.getOwnPropertyDescriptor(e,t);if(!r){var i=Object.getPrototypeOf(e);if(null===i)return;return rr(i,t,n)}return"value"in r?r.value:r.get?ae.Call(r.get,n):void 0},ir=function(e,t,r,i){var o=Object.getOwnPropertyDescriptor(e,t);if(!o){var a=Object.getPrototypeOf(e);if(null!==a)return ir(a,t,r,i);o={value:void 0,writable:!0,enumerable:!0,configurable:!0}}if("value"in o){if(!o.writable)return!1;if(!ae.TypeIsObject(i))return!1;return Object.getOwnPropertyDescriptor(i,t)?ne.defineProperty(i,t,{value:r}):ne.defineProperty(i,t,{value:r,writable:!0,enumerable:!0,configurable:!0})}return!!o.set&&(n(o.set,i,r),!0)};Object.assign(tr,{defineProperty:function(e,t,n){return er(e),nr(function(){Object.defineProperty(e,t,n)})},getOwnPropertyDescriptor:function(e,t){return er(e),Object.getOwnPropertyDescriptor(e,t)},get:function(e,t){er(e);var n=arguments.length>2?arguments[2]:e;return rr(e,t,n)},set:function(e,t,n){er(e);var r=arguments.length>3?arguments[3]:e;return ir(e,t,n,r)}})}if(Object.getPrototypeOf){var or=Object.getPrototypeOf;tr.getPrototypeOf=function(e){return er(e),or(e)}}if(Object.setPrototypeOf&&tr.getPrototypeOf){var ar=function(e,t){for(var n=t;n;){if(e===n)return!0;n=tr.getPrototypeOf(n)}return!1};Object.assign(tr,{setPrototypeOf:function(e,t){if(er(e),null!==t&&!ae.TypeIsObject(t))throw new TypeError("proto must be an object or null");return t===ne.getPrototypeOf(e)||!(ne.isExtensible&&!ne.isExtensible(e))&&(!ar(e,t)&&(Object.setPrototypeOf(e,t),!0))}})}var sr=function(e,t){if(ae.IsCallable(x.Reflect[e])){a(function(){return x.Reflect[e](1),x.Reflect[e](NaN),x.Reflect[e](!0),!0})&&K(x.Reflect,e,t)}else h(x.Reflect,e,t)};Object.keys(tr).forEach(function(e){sr(e,tr[e])});var cr=x.Reflect.getPrototypeOf;if(u&&cr&&"getPrototypeOf"!==cr.name&&K(x.Reflect,"getPrototypeOf",function(e){return n(cr,x.Reflect,e)}),x.Reflect.setPrototypeOf&&a(function(){return x.Reflect.setPrototypeOf(1,{}),!0})&&K(x.Reflect,"setPrototypeOf",tr.setPrototypeOf),x.Reflect.defineProperty&&(a(function(){var e=!x.Reflect.defineProperty(1,"test",{value:1}),t="function"!=typeof Object.preventExtensions||!x.Reflect.defineProperty(Object.preventExtensions({}),"test",{});return e&&t})||K(x.Reflect,"defineProperty",tr.defineProperty)),x.Reflect.construct&&(a(function(){var e=function(){};return x.Reflect.construct(function(){},[],e)instanceof e})||K(x.Reflect,"construct",tr.construct)),"Invalid Date"!==String(new Date(NaN))){var ur=Date.prototype.toString,lr=function(){var e=+this;return e!==e?"Invalid Date":ae.Call(ur,this)};K(Date.prototype,"toString",lr)}var fr={anchor:function(e){return ae.CreateHTML(this,"a","name",e)},big:function(){return ae.CreateHTML(this,"big","","")},blink:function(){return ae.CreateHTML(this,"blink","","")},bold:function(){return ae.CreateHTML(this,"b","","")},fixed:function(){return ae.CreateHTML(this,"tt","","")},fontcolor:function(e){return ae.CreateHTML(this,"font","color",e)},fontsize:function(e){return ae.CreateHTML(this,"font","size",e)},italics:function(){return ae.CreateHTML(this,"i","","")},link:function(e){return ae.CreateHTML(this,"a","href",e)},small:function(){return ae.CreateHTML(this,"small","","")},strike:function(){return ae.CreateHTML(this,"strike","","")},sub:function(){return ae.CreateHTML(this,"sub","","")},sup:function(){return ae.CreateHTML(this,"sup","","")}};l(Object.keys(fr),function(e){var t=String.prototype[e],r=!1;if(ae.IsCallable(t)){var i=n(t,"",\' " \'),o=j([],i.match(/"/g)).length;r=i!==i.toLowerCase()||o>2}else r=!0;r&&K(String.prototype,e,fr[e])});var pr=function(){if(!ee)return!1;var e="object"===("undefined"==typeof JSON?"undefined":_typeof(JSON))&&"function"==typeof JSON.stringify?JSON.stringify:null;if(!e)return!1;if(void 0!==e(z()))return!0;if("[null]"!==e([z()]))return!0;var t={a:z()};return t[z()]=!0,"{}"!==e(t)}(),dr=a(function(){return!ee||"{}"===JSON.stringify(Object(z()))&&"[{}]"===JSON.stringify([Object(z())])});if(pr||!dr){var hr=JSON.stringify;K(JSON,"stringify",function(e){if("symbol"!==(void 0===e?"undefined":_typeof(e))){var t;arguments.length>1&&(t=arguments[1]);var i=[e];if(r(t))i.push(t);else{var o=ae.IsCallable(t)?t:null,a=function(e,t){var r=o?n(o,this,e,t):t;if("symbol"!==(void 0===r?"undefined":_typeof(r)))return Q.symbol(r)?xt({})(r):r};i.push(a)}return arguments.length>2&&i.push(arguments[2]),hr.apply(this,i)}})}return x}),define("jqueryplugins",["jquery"],function(e){e.prototype.extend({popAttr:function(e){var t=this.attr(e);return this.removeAttr(e),t},popData:function(e){var t=this.data(e);return this.removeData(e),t},tag:function(){return this[0]&&this[0].tagName&&this[0].tagName.toLowerCase()},textNodes:function(){return 1===this.length&&this[0]instanceof Text?[this[0]]:Array.from(this.add(this.contents().add(this.find("*").contents())).filter(function(){return this instanceof Text})).sort(function(e,t){return 2&e.compareDocumentPosition(t)?1:-1})},findAndFilter:function(e){return this.filter(e).add(this.find(e))}})}),function(){function e(){for(var e=0;e<arguments.length;e++)for(var t in arguments[e])this[t]=arguments[e][t]}function t(e,t){e.childAt=e.childAt||{};for(var n=t.start;n<t.end;n+=1)e.childAt[n]=t}function n(e,t,n,r){return!(e.canFollow&&!(e.canFollow.indexOf(n&&n.type)>-1)||e.cannotFollow&&(-1!==e.cannotFollow.indexOf(n&&n.type)||e.cannotFollow.indexOf("text")>-1&&r)||e.peek&&e.peek.toLowerCase()!==t.slice(0,e.peek.length).toLowerCase())}function r(e){for(var t=e.innerText,r=[],o=0,s=o,c=t.length,u=null;o<c;){for(var l=t.slice(o),f=(r.length?r[0]:e).innerMode,p=0,d=f.length;p<d;p+=1){var h=a[f[p]];if(n(h,l,u,s<o)&&h.pattern.test(l)){var y=h.pattern.exec(l),g=h.fn(y),m=!1,v=0;if(g.matches){for(;v<r.length;v+=1){var b=r[v].type;if(b in g.matches){m=!0;break}0===b.indexOf("verbatim")&&(b="verbatimOpener"),g.cannotCross&&g.cannotCross.indexOf(b)>-1&&(v=r.length-1)}if(v>=r.length&&!g.isFront)continue}s<o&&e.addChild({type:"text",text:t.slice(s,o),innerMode:f}),u=e.addChild(g),o+=u.text.length,s=o,m&&(i(e,u,r[v]),r=r.slice(v+1)),u.isFrontToken()&&r.unshift(u);break}}p===d&&(o+=1,null===u&&(u={type:"text"}))}for(s<o&&e.addChild({type:"text",text:t.slice(s,o),innerMode:(r.length?r[0]:e).innerMode});r.length>0;)r.shift().demote();return e}function i(e,n,r){var i=e.children.indexOf(n),o=e.children.indexOf(r);n.children=e.children.splice(o+1,i-(o+1)),n.children.forEach(function(e){t(n,e)}),n.type=n.matches[r.type],n.innerText="";for(var a=0,s=n.children.length;a<s;a++)n.innerText+=n.children[a].text;n.start=r.start,n.text=r.text+n.innerText+n.text,Object.keys(r).forEach(function(e){Object.hasOwnProperty.call(n,e)||(n[e]=r[e])}),n.isFront&&(n.isFront=!1),e.children.splice(o,1),t(e,n)}var o=void 0,a={};e.prototype={constructor:e,addChild:function(n){var i=this.lastChildEnd(),o=new e({start:i,end:n.text&&i+n.text.length,children:[]},n);return o.innerText&&r(o),this.children.push(o),t(this,o),o},lastChild:function(){return this.children?this.children[this.children.length-1]||null:null},lastChildEnd:function(){var e=this.lastChild();return e?e.end:this.start+Math.max(0,this.text.indexOf(this.innerText))},tokenAt:function(e){if(e<this.start||e>=this.end)return null;if(this.childAt)return this.childAt[e]&&this.childAt[e].tokenAt(e)||this;if(this.children.length)for(var t=0;t<this.children.length;t+=1){var n=this.children[t].tokenAt(e);if(n)return n}return this},pathAt:function(e){if(e<this.start||e>=this.end)return[];if(this.childAt)return(this.childAt[e]&&this.childAt[e].pathAt(e)||[]).concat(this);var t=[];if(this.children.length)for(var n=0;n<this.children.length;n+=1){var r=this.children[n].pathAt(e);if(r.length){t.concat(r);break}}return t.concat(this)},nearestTokenAt:function(e){return e<this.start||e>=this.end?null:this.children?this.children.reduce(function(t,n){return t||(e>=n.start&&e<n.end?n:null)},null):this},everyLeaf:function(e){return this.children&&0!==this.children.length?this.children.reduce(function(t,n){return n.everyLeaf(e)&&t},!0):!!e(this)},isWhitespace:function(){return this.everyLeaf(function(e){return"whitespace"===e.type||!e.text.trim()})},isFrontToken:function(){return this.isFront},isBackToken:function(){return"matches"in this},demote:function(){this.type="text"},error:function(e){this.type="error",this.message=e},toString:function(){var e=this.type+"("+this.start+"\\u2192"+this.end+")";return this.children&&this.children.length>0&&(e+="["+this.children+"]"),e}},o={lex:function(t,n){return r(new e({type:"root",start:n||0,end:t.length,text:t,innerText:t,children:[],childAt:{},innerMode:o.modes.start}))},rules:a,modes:{}},"object"===("undefined"==typeof module?"undefined":_typeof(module))?module.exports=o:"function"==typeof define&&define.amd?define("lexer",[],function(){return o}):this&&this.loaded?(this.modules||(this.modules={}),this.modules.Lexer=o):this.TwineLexer=o}.call(eval("this")||("undefined"!=typeof global?global:window)),function(){function e(t){return t&&"object"===(void 0===t?"undefined":_typeof(t))?(Object.keys(t).forEach(function(n){t[n]=e(t[n])}),t):(t+"").replace(/[\\-\\[\\]\\/\\{\\}\\(\\)\\*\\+\\?\\.\\\\\\^\\$\\|]/g,"\\\\$&")}function t(e){return function(){return"("+e+Array.apply(0,arguments).join("|")+")"}}var n=void 0,r=t("?:"),i=t("?!"),o=t("?="),a="[ \\\\f\\\\t\\\\v\\\\u00a0\\\\u2000-\\\\u200a\\\\u2028\\\\u2029\\\\u202f\\\\u205f\\\\u3000]*",s=a.replace("*","+"),c="\\\\b",u="[\\\\w\\\\-\\\\u00c0-\\\\u00de\\\\u00df-\\\\u00ff\\\\u0150\\\\u0170\\\\u0151\\\\u0171\\\\uD800-\\\\uDFFF]",l=u.replace("\\\\-",""),f=r("\\\\n","$"),p="("+r("\\\\\\\\\\\\n\\\\\\\\?|\\\\n\\\\\\\\","[^\\\\n]")+"+)",d=a+"(\\\\*+)"+s+p+f,h=a+"((?:0\\\\.)+)"+s+p+f,y=a+"-{3,}"+a+f,g=a+"(#{1,6})"+a+p+f,m=a+"(==+>|<=+|=+><=+|<==+>)"+a+f,v=a+"(=+\\\\|+|\\\\|+=+|=+\\\\|+=+|\\\\|=+\\\\|)"+a+f,b={opener:"\\\\[\\\\[(?!\\\\[)",text:"("+function(){return"[^"+Array.apply(0,arguments).map(e).join("")+"]*"}("]")+")",rightSeparator:r("\\\\->","\\\\|"),leftSeparator:"<\\\\-",closer:"\\\\]\\\\]",legacySeparator:"\\\\|",legacyText:"("+r("[^\\\\|\\\\]]","\\\\]"+i("\\\\]"))+"+)"},w=l+"*"+l.replace("\\\\w","a-zA-Z")+l+"*",x="\\\\$("+w+")",T="\'s"+s+"("+w+")",O="("+w+")"+s+"of"+c+i("it\\\\b"),S="\'s"+s,j=r("it","time")+c,k="its"+s+"("+w+")",A="its"+s,C="("+w+")"+s+"of"+s+"it"+c,E="of\\\\b"+s+"it"+c,N={opener:"\\\\(",name:"("+r(u+"+",x)+"):"+i("\\\\/"),closer:"\\\\)"},_=r("=<","=>","[gl]te?\\\\b","n?eq\\\\b","isnot\\\\b","are\\\\b","x\\\\b","isa\\\\b","or"+s+"a"+c),I={name:"[a-zA-Z][\\\\w\\\\-]*",attrs:"(?:\\"[^\\"]*\\"|\'[^\']*\'|[^\'\\">])*?"},P="\\\\|("+u+"+)(>|\\\\))",M="(<|\\\\()("+u+"+)\\\\|",D="_("+w+")"+c,L="\\\\b(\\\\d+(?:\\\\.\\\\d+)?(?:[eE][+\\\\-]?\\\\d+)?)"+i("m?s")+c;b.main=b.opener+r(b.text+b.rightSeparator,b.text.replace("*","*?")+b.leftSeparator)+b.text,n={upperLetter:"[A-Z\\\\u00c0-\\\\u00de\\\\u0150\\\\u0170]",lowerLetter:"[a-z0-9_\\\\-\\\\u00df-\\\\u00ff\\\\u0151\\\\u0171]",anyLetter:u,anyLetterStrict:l,whitespace:s,escapedLine:"\\\\\\\\\\\\n\\\\\\\\?|\\\\n\\\\\\\\",br:"\\\\n(?!\\\\\\\\)",commentFront:"\\x3c!--",commentBack:"--\\x3e",tag:"<\\\\/?"+I.name+I.attrs+">",tagPeek:"<",scriptStyleTag:"<("+r("script","style")+")"+I.attrs+">[^]*?<\\\\/\\\\1>",scriptStyleTagOpener:"<",url:"("+r("https?","mailto","javascript","ftp","data")+":\\\\/\\\\/[^\\\\s<]+[^<.,:;\\"\')\\\\]\\\\s])",bullet:"\\\\*",hr:y,heading:g,align:m,column:v,bulleted:d,numbered:h,strikeOpener:e("~~"),italicOpener:e("//"),boldOpener:e("\'\'"),supOpener:e("^^"),strongFront:e("**"),strongBack:e("**"),emFront:e("*"),emBack:e("*"),verbatimOpener:"`+",collapsedFront:"{",collapsedBack:"}",hookAppendedFront:"\\\\[",hookPrependedFront:P+"\\\\[",hookFront:"\\\\[",hookBack:"\\\\]"+i(M),hookAppendedBack:"\\\\]"+M,passageLink:b.main+b.closer,passageLinkPeek:"[[",legacyLink:b.opener+b.legacyText+b.legacySeparator+b.legacyText+b.closer,legacyLinkPeek:"[[",simpleLink:b.opener+b.legacyText+b.closer,simpleLinkPeek:"[[",macroFront:N.opener+o(N.name),macroFrontPeek:"(",macroName:N.name,groupingFront:"\\\\("+i(N.name),groupingFrontPeek:"(",groupingBack:"\\\\)",twine1Macro:"<<[^>\\\\s]+\\\\s*(?:\\\\\\\\.|\'(?:[^\'\\\\\\\\]*\\\\\\\\.)*[^\'\\\\\\\\]*\'|\\"(?:[^\\"\\\\\\\\]*\\\\\\\\.)*[^\\"\\\\\\\\]*\\"|[^\'\\"\\\\\\\\>]|>(?!>))*>>",twine1MacroPeek:"<<",property:T,propertyPeek:"\'s",belongingProperty:O,possessiveOperator:S,belongingOperator:"of\\\\b",belongingOperatorPeek:"of",itsOperator:A,itsOperatorPeek:"its",belongingItOperator:E,belongingItOperatorPeek:"of",variable:x,variablePeek:"$",tempVariable:D,tempVariablePeek:"_",hookRef:"\\\\?("+u+"+)\\\\b",hookRefPeek:"?",cssTime:"(\\\\d+\\\\.?\\\\d*|\\\\d*\\\\.?\\\\d+)(m?s)\\\\b",colour:r(r("Red","Orange","Yellow","Lime","Green","Cyan","Aqua","Blue","Navy","Purple","Fuchsia","Magenta","White","Gray","Grey","Black"),"#[\\\\dA-Fa-f]{3}(?:[\\\\dA-Fa-f]{3})?"),datatype:r("array","boolean","changer","colour","color","command","dm","datamap","ds","dataset","number","num","string","str"),number:L,boolean:r("true","false")+c,identifier:j,itsProperty:k,itsPropertyPeek:"its",belongingItProperty:C,escapedStringChar:"\\\\\\\\[^\\\\n]",singleStringOpener:"\'",doubleStringOpener:\'"\',is:"is"+i(s+"not"+c,s+"an?"+c,s+"in"+c,s+"<",s+">")+c,isNot:"is"+s+"not"+i(s+"a"+c)+c,isA:"is"+s+"an?"+c,isNotA:"is"+s+"not"+s+"an?"+c,matches:"matches"+s,and:"and\\\\b",or:"or\\\\b",not:"not\\\\b",inequality:"((?:is(?:"+s+"not)?"+a+")*)("+r("<(?!=)","<=",">(?!=)",">=")+")",isIn:"is"+s+"in"+c,contains:"contains\\\\b",addition:e("+")+i("="),subtraction:e("-")+i("="),multiplication:e("*")+i("="),division:r("/","%")+i("="),comma:",",spread:"\\\\.\\\\.\\\\."+i("\\\\."),to:r("to\\\\b","="),into:"into\\\\b",making:"making\\\\b",where:"where\\\\b",when:"when\\\\b",via:"via\\\\b",with:"with\\\\b",each:"each\\\\b",augmentedAssign:r("\\\\+","\\\\-","\\\\*","\\\\/","%")+"=",bind:"bind\\\\b",incorrectOperator:_},"object"===("undefined"==typeof module?"undefined":_typeof(module))?module.exports=n:"function"==typeof define&&define.amd?define("patterns",[],function(){return n}):this&&this.loaded?(this.modules||(this.modules={}),this.modules.Patterns=n):this.Patterns=n}.call(eval("this")||("undefined"!=typeof global?global:window)),function(){function e(e){function t(e){return e=e||"innerText",function(t){var n=t.reduceRight(function(e,t,n){return e||(n?t:"")},""),r={};return r[e]=n,r}}function r(e,t){var n={};return n[e]=t,function(){return{isFront:!0,matches:n,cannotCross:["verbatimOpener"]}}}function i(e,t){return Object.keys(t).forEach(function(n){var r=t[n].fn;t[n].fn=function(t){var i=r(t);return i.text||(i.text=t[0]),i.type||(i.type=n),i.innerMode||(i.innerMode=e),i}}),t}var o=Object.bind(0,null),a=[],s=[],c=i(a,{hr:{fn:o},bulleted:{fn:function(e){return{depth:e[1].length,innerText:e[2]}}},numbered:{fn:function(e){return{depth:e[1].length/2,innerText:e[2]}}},heading:{fn:function(e){return{depth:e[1].length,innerText:e[2]}}},align:{fn:function(e){var t=void 0,n=e[1],r=n.indexOf("><");return~r?25===(t=Math.round(r/(n.length-2)*50))&&(t="center"):"<"===n[0]&&">"===n.slice(-1)?t="justify":n.indexOf(">")>-1?t="right":n.indexOf("<")>-1&&(t="left"),{align:t}}},column:{fn:function(e){var t=void 0,n=e[1],r=n.indexOf("|");return r&&r<n.length-1?t="center":"|"===n[0]&&"|"===n.slice(-1)?t="none":r===n.length-1?t="right":r||(t="left"),{column:t,width:/\\|+/.exec(n)[0].length,marginLeft:/^=*/.exec(n)[0].length,marginRight:/=*$/.exec(n)[0].length}}}});Object.keys(c).forEach(function(e){c[e].canFollow=[null,"br","hr","bulleted","numbered","heading","align"],c[e].cannotFollow=["text"]});var u=i(a,{twine1Macro:{fn:function(){return{type:"error",message:"Harlowe macros use a different syntax to Twine 1 and SugarCube macros."}}},emBack:{fn:function(){return{matches:{emFront:"em"},cannotCross:["verbatimOpener"]}}},strongBack:{fn:function(){return{matches:{strongFront:"strong"},cannotCross:["verbatimOpener"]}}},strongFront:{fn:function(){return{isFront:!0}}},emFront:{fn:function(){return{isFront:!0}}},boldOpener:{fn:r("boldOpener","bold")},italicOpener:{fn:r("italicOpener","italic")},strikeOpener:{fn:r("strikeOpener","strike")},supOpener:{fn:r("supOpener","sup")},commentFront:{fn:function(){return{isFront:!0}}},commentBack:{fn:function(){return{matches:{commentFront:"comment"}}}},scriptStyleTag:{fn:o},tag:{fn:o},url:{fn:o},hookPrependedFront:{fn:function(e){return{name:e[1],hidden:")"===e[2],isFront:!0,tagPosition:"prepended"}}},hookFront:{fn:function(){return{isFront:!0}}},hookBack:{fn:function(){return{matches:{hookPrependedFront:"hook",hookFront:"hook"},cannotCross:["verbatimOpener"]}}},hookAppendedBack:{fn:function(e){return{name:e[2],hidden:"("===e[1],tagPosition:"appended",matches:{hookFront:"hook"},cannotCross:["verbatimOpener"]}}},verbatimOpener:{fn:function(e){var t=e[0].length,n={};return n["verbatim"+t]="verbatim",{type:"verbatim"+t,isFront:!0,matches:n}}},collapsedFront:{fn:function(){return{isFront:!0}}},collapsedBack:{fn:function(){return{matches:{collapsedFront:"collapsed"},cannotCross:["verbatimOpener"]}}},escapedLine:{fn:o},legacyLink:{fn:function(e){return{type:"twineLink",innerText:e[1],passage:e[2]}}},br:{fn:o}}),l=i(s,{macroFront:{fn:function(e){return{isFront:!0,name:e[1]}}},groupingBack:{fn:function(){return{matches:{groupingFront:"grouping",macroFront:"macro"},cannotCross:["singleStringOpener","doubleStringOpener"]}}},passageLink:{fn:function(e){var t=e[1]||"",n=e[2]||"",r=e[3]||"";return{type:"twineLink",innerText:n?r:t,passage:t?r:n}}},simpleLink:{fn:function(e){return{type:"twineLink",innerText:e[1]||"",passage:e[1]||""}}},variable:{fn:t("name")},tempVariable:{fn:t("name")}}),f=i(s,Object.assign({macroName:{canFollow:["macroFront"],fn:function(e){return e[2]?{isMethodCall:!0,innerText:e[2]}:{isMethodCall:!1}}},groupingFront:{fn:function(){return{isFront:!0}}},property:{fn:t("name"),canFollow:["variable","hookRef","property","tempVariable","colour","itsProperty","belongingItProperty","macro","grouping","string","boolean","number"]},possessiveOperator:{fn:o},itsProperty:{cannotFollow:["text"],fn:t("name")},itsOperator:{cannotFollow:["text"],fn:o},belongingItProperty:{cannotFollow:["text"],fn:t("name")},belongingItOperator:{\ncannotFollow:["text"],fn:o},belongingProperty:{cannotFollow:["text"],fn:t("name")},belongingOperator:{cannotFollow:["text"],fn:o},escapedStringChar:{fn:function(){return{type:"text"}}},singleStringOpener:{fn:function(){return{isFront:!0,matches:{singleStringOpener:"string"}}}},doubleStringOpener:{fn:function(){return{isFront:!0,matches:{doubleStringOpener:"string"}}}},hookRef:{fn:t("name")},cssTime:{fn:function(e){return{value:+e[1]*("s"===e[2].toLowerCase()?1e3:1)}}},datatype:{cannotFollow:["text"],fn:function(e){return{name:e[0].toLowerCase()}}},colour:{cannotFollow:["text"],fn:function(e){var t,n=e[0].toLowerCase(),r={red:"e61919",orange:"e68019",yellow:"e5e619",lime:"80e619",green:"19e619",cyan:"19e5e6",aqua:"19e5e6",blue:"197fe6",navy:"1919e6",purple:"7f19e6",fuchsia:"e619e5",magenta:"e619e5",white:"fff",black:"000",gray:"888",grey:"888"};return t=Object.hasOwnProperty.call(r,n)?"#"+r[n]:n,{colour:t}}},number:{fn:function(e){return{value:parseFloat(e[0])}}},inequality:{fn:function(e){return{operator:e[2],negate:e[1].indexOf("not")>-1}}},augmentedAssign:{fn:function(e){return{operator:e[0][0]}}},identifier:{fn:t("name"),cannotFollow:["text"]},whitespace:{fn:o,cannotFollow:"text"},incorrectOperator:{fn:function(e){var t={"=>":">=","=<":"<=",gte:">=",lte:"<=",gt:">",lt:"<",eq:"is",isnot:"is not",neq:"is not",isa:"is a",are:"is",x:"*","or a":"or"}[e[0].toLowerCase().replace(/\\s+/g," ")];return{type:"error",message:"Please say "+(t?"\'"+t+"\'":"something else")+" instead of \'"+e[0]+"\'.",explanation:"In the interests of readability, I want certain operators to be in a specific form."}},cannotFollow:"text"}},["boolean","is","to","into","where","when","via","with","making","each","and","or","not","isNot","contains","isIn","isA","isNotA","matches","bind"].reduce(function(e,t){return e[t]={fn:o,cannotFollow:["text"]},e},{}),["comma","spread","addition","subtraction","multiplication","division"].reduce(function(e,t){return e[t]={fn:o},e},{})));a.push.apply(a,_toConsumableArray(Object.keys(c)).concat(_toConsumableArray(Object.keys(l)),_toConsumableArray(Object.keys(u)))),s.push.apply(s,_toConsumableArray(Object.keys(l)).concat(_toConsumableArray(Object.keys(f))));var p=Object.assign({},c,u,l,f);return Object.keys(p).forEach(function(e){var t=n[e];p[e].pattern="string"!=typeof t?t:new RegExp("^(?:"+t+")","i"),n[e+"Peek"]&&(p[e].peek=n[e+"Peek"])}),Object.assign(e.rules,p),e.modes.start=e.modes.markup=a,e.modes.macro=s,e}function t(t){return Object.freeze({lex:e(t).lex,Patterns:n})}var n=void 0;Object.assign=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},"object"===("undefined"==typeof module?"undefined":_typeof(module))?(n=require("./patterns"),module.exports=t(require("./lexer"))):"function"==typeof define&&define.amd?define("markup",["lexer","patterns"],function(e,r){return n=r,t(e)}):this&&this.loaded&&this.modules?(n=this.modules.Patterns,this.modules.Markup=t(this.modules.Lexer)):(n=this.Patterns,this.TwineMarkup=t(this.TwineLexer))}.call(eval("this")||("undefined"!=typeof global?global:window)),define("utils/selectors",[],function(){return Object.freeze({passage:"tw-passage",story:"tw-story",sidebar:"tw-sidebar",internalLink:"tw-link",brokenLink:"tw-broken-link",hook:"tw-hook",enchantment:"tw-enchantment",expression:"tw-expression",script:"[role=script]",stylesheet:"[role=stylesheet]",storyData:"tw-storydata",passageData:"tw-passagedata",collapsed:"tw-collapsed"})}),define("utils/polyfills",[],function(){var e=Array.prototype;"function"!=typeof e.includes&&(e.includes=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(!Number.isNaN(t)&&Number.isFinite(n)&&void 0!==t)return e.indexOf.call(this,t,n)>-1;var r=Object(this),i=parseInt(r.length);if(i<=0)return!1;for(var o=n>=0?n:Math.max(0,i+n);o<i;){if(Object.is(t,r[o]))return!0;o+=1}return!1})}),define("utils",["jquery","markup","utils/selectors","utils/polyfills"],function(e,t,n){function r(t,n){var r=o[n];if(!r[t]){var i=e("<p>").appendTo(document.body).attr("data-t8n",t).addClass(n);r[t]=u.cssTimeUnit(i.css("animation-duration"))+u.cssTimeUnit(i.css("animation-delay")),i.remove()}return r[t]}var i={configurable:0,writable:0},o={"transition-in":Object.create(null),"transition-out":Object.create(null)},a="audio,blockquote,canvas,div,h1,h2,h3,h4,h5,hr,ol,p,pre,table,ul,video,tw-align,tw-story,tw-passage".split(","),s="a,b,i,em,strong,sup,sub,abbr,acronym,s,strike,del,big,small,script,img,button,input,tw-link,tw-broken-link,tw-verbatim,tw-collapsed,tw-error".split(","),c=["audio"],u=void 0,l=void 0;return u={lockProperty:function(e,t,n){var r=Object.create(i);return n&&(r.value=n),Object.defineProperty(e,t,r),e},permutations:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r=t.length,i=[[].concat(t)],o=Array(r).fill(0),a=1,s=void 0,c=void 0;a<r;)o[a]<a?(s=a%2&&o[a],c=t[a],t[a]=t[s],t[s]=c,++o[a],a=1,i.push([].concat(t))):(o[a]=0,++a);return i},toJSLiteral:function(e){return e instanceof Map?"(new Map("+u.toJSLiteral([].concat(_toConsumableArray(e.entries())))+"))":e instanceof Set?"(new Set("+u.toJSLiteral([].concat(_toConsumableArray(e.values())))+"))":JSON.stringify(e)},cssTimeUnit:function(e){return e=e.toLowerCase(),"ms"===e.slice(-2)?+e.slice(0,-2)||0:"s"===e.slice(-1)?1e3*+e.slice(0,-1)||0:0},nth:function(e){var t=(+e+"").slice(-1);return e+("1"===t?"st":"2"===t?"nd":"3"===t?"rd":"th")},plural:function(e,t){return e+" "+t+(e>1?"s":"")},andList:function(e){return 1===e.length?e[0]:e.slice(0,-1).join(", ")+" and "+e[e.length-1]},realWhitespace:"[ \\\\n\\\\r\\\\f\\\\t\\\\v\\\\u00a0\\\\u2000-\\\\u200a\\\\u2028\\\\u2029\\\\u202f\\\\u205f\\\\u3000]",anyRealLetter:"[\\\\dA-Za-z\\\\u00c0-\\\\u00de\\\\u00df-\\\\u00ff\\\\u0150\\\\u0170\\\\u0151\\\\u0171\\\\uD800-\\\\uDFFF]",unescape:function(e){return e.replace(/&(?:amp|lt|gt|quot|nbsp|zwnj|#39|#96);/g,function(e){return{"&amp;":"&","&gt;":">","&lt;":"<","&quot;":\'"\',"&#39;":"\'","&nbsp;":String.fromCharCode(160),"&zwnj;":String.fromCharCode(8204)}[e]})},escape:function(e){return e.replace(/[&><"\']/g,function(e){return{"&":"&amp;",">":"&gt;","<":"&lt;",\'"\':"&quot;","\'":"&#39;"}[e]})},insensitiveName:function(e){return(e+"").toLowerCase().replace(/-|_/g,"")},childrenProbablyInline:function(e){var t=[];return Array.prototype.every.call(e.find("*"),function(e){return!(!e.hidden&&!/none|inline/.test(e.style.display))||!a.includes(e.tagName.toLowerCase())&&!/none|inline/.test(e.style.display)&&(!!s.includes(e.tagName.toLowerCase())||(t.push(e),!0))})&&t.every(function(e){return/none|inline/.test(e.style.display)})},transitionReplace:function(t,r,i){var o=t.closest(n.hook);o.length>0&&(t=o);var a=e("<tw-transition-container>").css("position","relative");a.insertBefore(t.first());var s=void 0;r&&(s=e("<tw-transition-container>").appendTo(a),r.appendTo(s));var c=e("<tw-transition-container>").css("position","absolute").prependTo(a);t.detach().appendTo(c),u.transitionOut(c,i),r&&u.transitionIn(s,i,function(){s.unwrap().children().first().unwrap()})},transitionOut:function(e,t,n){function i(){e.remove()}var o=u.childrenProbablyInline(e);(e.length>1||!o||!["tw-hook","tw-passage"].includes(e.tag()))&&(e=e.wrapAll("<tw-transition-container>").parent()),e.attr("data-t8n",t).addClass("transition-out"),u.childrenProbablyInline(e)&&e.css("display","inline-block"),"number"==typeof n&&e.css("animation-duration",n+"ms");var a=n||r(t,"transition-out");a?window.setTimeout(i,a):i()},transitionIn:function(e,t,n){function i(){var t=0===e.findAndFilter(c.join(",")).length;a&&t?e.contents().unwrap():e.removeClass("transition-in").removeAttr("data-t8n")}var o=u.childrenProbablyInline(e),a=e.length>1||!o||!["tw-hook","tw-passage"].includes(e.tag());a&&(e=e.wrapAll("<tw-transition-container>").parent()),e.attr("data-t8n",t).addClass("transition-in"),"number"==typeof n&&e.css("animation-duration",n+"ms"),u.childrenProbablyInline(e)&&e.css("display","inline-block");var s=n||r(t,"transition-in");s?window.setTimeout(i,s):i()},$:function(t,n){return e(t,n||u.storyElement).not(".transition-out, .transition-out *")},impossible:function(e,t){window.console&&console.error(e+"(): "+t)},assertMustHave:function(e,t){if(window.console)for(var n=0;n<t.length;n+=1)t[n]in e||console.error("Assertion failed: object lacks property "+t[n])},assertOnlyHas:function(e,t){if(window.console)for(var n in e)t.includes(n)||console.error("Assertion failed: object had unexpected property \'"+n+"\'!")},get storyElement(){return l}},e(function(){return l=e(n.story)}),Object.freeze(u)}),define("passages",["jquery","utils","utils/selectors"],function(e,t,n){function r(e){return Object.assign(new Map([["source",i(e.html())],["tags",(e.attr("tags")||"").split(/\\s/)||[]],["name",e.attr("name")]]),{TwineScript_TypeName:"a passage datamap",TwineScript_ObjectName:"a passage datamap"})}var i=t.unescape,o=Object.assign(new Map,{TwineScript_ObjectName:"the Passages datamap",getTagged:function(e){var t=[];return this.forEach(function(n){var r=n instanceof Map&&n.get("tags");Array.isArray(r)&&r.includes(e)&&t.push(n)}),t.sort(function(e,t){return e.get("name")>t.get("name")})},create:r});return e(function(){Array.from(e(n.storyData+" > "+n.passageData)).forEach(function(t){t=e(t),o.set(t.attr("name"),new r(t))})}),o}),define("datatypes/hookset",["jquery","utils","utils/selectors","markup"],function(e,t,n,r){function i(e,t,n){var r=e.textContent.length;if(!(t>=r)){var i=void 0,o=[i=0===t?e:e.splitText(t)];return n&&(n<=0&&(n=r-n),n<r&&o.push(i.splitText(n-t))),o}}function o(e,t){var n=[],r="",a=[];if(!e.length||!t)return a;for(;e.length>0;){n.push(e[0]),r+=e[0].textContent,e.shift();var s=r.indexOf(t);if(s>-1){for(var c,u=r.length-(s+t.length);s>=n[0].textContent.length;)s-=n[0].textContent.length,n.shift();if(1===n.length){var l=i(n[0],s,s+t.length);a.push(l[0]),l[1]&&e.unshift(l[1]);break}a.push(i(n[0],s,n[0].length)[0]),(c=a).push.apply(c,_toConsumableArray(n.slice(1,-1)));var f=i(n[n.length-1],0,n[n.length-1].textContent.length-u);a.push(f[0]),f[1]&&e.unshift(f[1]),a=a.filter(Boolean);break}}return[a].concat(_toConsumableArray(o(e,t)))}function a(t,n,r){var i=o(n.textNodes(),t),a=e();return i.forEach(function(t){a=a.add(e(t).wrapAll(r))}),a.parent()}function s(e){e=t.insensitiveName(e).replace(/\\?/g,"").replace(/"/g,"&quot;");var r=n.hook+\'[name="\'+e+\'"]\';return r+={page:", tw-story",passage:", tw-passage",sidebar:", tw-sidebar",link:", tw-link, .enchantment-link"}[e]||""}function c(n){var r=n.dom,i=e();this.prev&&(i=i.add(c.call(this.prev,{dom:r})));var o=function(t,n){return Array.isArray(n)?n.reduce(function(e,n){return e.add(t.get(n))},e()):e(t.get(n))};if(this.selector){var u=void 0;u=this.selector.match("^"+f.hookRef+"$")?r.add(r.parentsUntil(t.storyElement.parent())).findAndFilter(s(this.selector)):a(this.selector,r,"<tw-pseudo-hook>"),i=this.properties.length?i.add(this.properties.reduce(o,u)):i.add(u)}return this.base&&(i=i.add(this.properties.reduce(o,c.call(this.base,{dom:r})))),i}function u(e){var n=e.dom;t.$("tw-pseudo-hook",n).contents().unwrap().parent().each(function(){this.normalize()})}function l(e){if(!e)return[];var n=e.selector,r=e.base,i=e.properties,o=e.prev;return[JSON.stringify([t.insensitiveName(n)||"",l(r),[].concat(_toConsumableArray(i)).sort()])].concat(_toConsumableArray(l(o))).sort()}var f=r.Patterns,p=Object.freeze({forEach:function(t,n){var r=c.call(this,t).each(function(t){n(e(this),t)});return u.call(this,t),r},get TwineScript_ObjectName(){return this.properties.length>0||this.prev?"a complex hook name":this.selector+" (a hook name)"},TwineScript_TypeName:"a hook name (like ?this)",TwineScript_Unstorable:!0,"TwineScript_+":function(e){var t=e.TwineScript_Clone();return t.prev=this,t},TwineScript_is:function(e){return l(this)+""==l(e)+""},TwineScript_GetElement:function(e){return p.create(void 0,this,[e],void 0)},TwineScript_Clone:function(){return p.create(this.selector,this.base,this.properties,this.prev)},create:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0;return Object.assign(Object.create(this||p),{selector:e,base:t,properties:n,prev:r})},from:function(e){return p.isPrototypeOf(e)?e:p.create(e)}});return p}),define("internaltypes/twineerror",["jquery","utils"],function(e,t){var n=t.impossible,r=t.escape,i={syntax:"The markup seems to contain a mistake.",saving:"I tried to save or load the game, but I couldn\'t do it.",operation:"I tried to perform an operation on some data, but the data\'s type was incorrect.",macrocall:"I tried to use a macro, but its call wasn\'t written correctly.",datatype:"I tried to use a macro, but was given the wrong type of data to it.",infinite:"I almost ended up doing the same thing over and over, forever.",property:"I tried to access a value in a string/array/datamap, but I couldn\'t find it.",unimplemented:"I currently don\'t have this particular feature. I\'m sorry.",javascript:"This error message was reported by your browser\'s Javascript engine. I don\'t understand it either, but it usually means that an expression was badly written."},o={create:function(e,t,r){return t||n("TwineError.create","called with only 1 string."),r||e in i||n("TwineError.create","no error explanation given"),Object.assign(Object.create(this),{type:e,message:t,explanation:r})},fromError:function(e){return o.create("javascript","\\u2615 "+e.message)},containsError:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(function(e,t){return e||(t instanceof Error?t:o.isPrototypeOf(t)?t:!!Array.isArray(t)&&o.containsError.apply(o,_toConsumableArray(t)))},!1)},createWarning:function(e,t){return Object.assign(this.create(e,t),{warning:!0})},render:function(t){t=t||"";var n=e("<tw-error class=\'"+("javascript"===this.type?"javascript ":"")+(this.warning?"warning":"error")+"\' title=\'"+r(t)+"\'>"+r(this.message)+"</tw-error>"),o=e("<tw-error-explanation>").text(this.explanation||i[this.type]).hide(),a=e("<tw-error-explanation-button tabindex=0>").html("<span class=\'folddown-arrowhead\'>&#9658;</span>");return a.on("click",function(){o.toggle(),a.children(".folddown-arrowhead").css("transform","rotate("+(o.is(":visible")?"90deg":"0deg")+")")}),n.append(a).append(o),n.data("TwineError",this),n}};return o}),define("utils/operationutils",["jquery","utils","datatypes/hookset","internaltypes/twineerror"],function(e,t,n,r){function i(e){return!!e&&("object"===(void 0===e?"undefined":_typeof(e))||"function"==typeof e)}function o(e){return Array.isArray(e)?"array":e instanceof Map?"datamap":e instanceof Set?"dataset":"string"==typeof e?"string":e&&"object"===(void 0===e?"undefined":_typeof(e))?"object":""}function a(e,t){if(e instanceof Map||v("isValidDatamapName","called with non-Map"),"string"!=typeof t&&"number"!=typeof t)return r.create("property","Only strings and numbers can be used as data names for "+l(e)+", not "+l(t)+".");var n="string"==typeof t?+t:""+t;return!(!Number.isNaN(n)&&e.has(n))||r.create("property","You mustn\'t use both "+l(t)+" and "+l(n)+" as data names in the same datamap.")}function s(e,t){if(null===t)return void 0===e;if(t.innerType){if("optional"===t.pattern||"zero or more"===t.pattern)return void 0===e||s(e,t.innerType);if("either"===t.pattern)return t.innerType.some(function(t){return s(e,t)});if("lambda"===t.pattern&&s(e,t.innerType))return"string"!=typeof t.clauses&&v("singleTypeCheck","lambda signature had non-string clauses"),t.clauses.includes("where")==="where"in e&&t.clauses.includes("making")==="making"in e&&t.clauses.includes("via")==="via"in e&&t.clauses.includes("with")==="with"in e;if("wrapped"===t.pattern)return s(e,t.innerType)}return(void 0===t||void 0!==e)&&("anything"===t.TwineScript_TypeName&&void 0!==e&&!e.TwineScript_Unstorable||(t===String?"string"==typeof e:t===Boolean?"boolean"==typeof e:t===parseInt?"number"==typeof e&&!Number.isNaN(e)&&!(e+"").includes("."):t===Number?"number"==typeof e&&!Number.isNaN(e):t===Array?Array.isArray(e):t===Map||t===Set?e instanceof t:Object.isPrototypeOf.call(t,e)))}function c(e){return"string"==typeof e||Array.isArray(e)||n.isPrototypeOf(e)}function u(e){if(!i(e))return e;if("function"==typeof e.TwineScript_Clone)return e.TwineScript_Clone();if(Array.isArray(e))return[].concat(_toConsumableArray(e));if(e instanceof Map)return new Map(e);if(e instanceof Set)return new Set(e);if("function"==typeof e)return Object.assign(e.bind(),e);switch(Object.getPrototypeOf(e)){case Object.prototype:return Object.assign({},e);case null:return Object.assign(Object.create(null),e)}return v("OperationUtils.clone","The value "+(e.toSource?e.toSource():e)+" cannot be cloned!"),e}function l(e){return i(e)&&"TwineScript_ObjectName"in e?e.TwineScript_ObjectName:Array.isArray(e)?"an array":e instanceof Map?"a datamap":e instanceof Set?"a dataset":"boolean"==typeof e?"the boolean value \'"+e+"\'":"string"==typeof e||"number"==typeof e?"the "+(void 0===e?"undefined":_typeof(e))+" "+w(e):void 0===e?"an empty variable":"...whatever this is"}function f(e){return Object.getPrototypeOf(e)===Object.prototype&&e.innerType?e.typeName?e.typeName:"either"===e.pattern?(Array.isArray(e.innerType)||v("typeName",\'"either" pattern had non-array inner type\'),e.innerType.map(f).join(" or ")):"optional"===e.pattern?"(an optional) "+f(e.innerType):f(e.innerType):e===String||e===Number||e===Boolean?"a "+_typeof(e()):e===parseInt?"a whole number":e===Map?"a datamap":e===Set?"a dataset":e===Array?"an array":i(e)&&"TwineScript_TypeName"in e?e.TwineScript_TypeName:l(e)}function p(e,t){return"object"!==(void 0===e?"undefined":_typeof(e))&&"object"!==(void 0===t?"undefined":_typeof(t))?e===t:Array.isArray(e)&&Array.isArray(t)?e.length===t.length&&e.every(function(e,n){return p(t[n],e)}):e instanceof Map&&t instanceof Map?p(Array.from(e.entries()).sort(),Array.from(t.entries()).sort()):e instanceof Set&&t instanceof Set?p([].concat(_toConsumableArray(e)),[].concat(_toConsumableArray(t))):e&&"function"==typeof e.TwineScript_is?e.TwineScript_is(t):e&&"object"===(void 0===e?"undefined":_typeof(e))&&t&&"object"===(void 0===t?"undefined":_typeof(t))&&Object.getPrototypeOf(e)===Object.prototype&&Object.getPrototypeOf(t)===Object.prototype?p(Object.getOwnPropertyNames(e).map(function(t){return[t,e[t]]}),Object.getOwnPropertyNames(t).map(function(e){return[e,t[e]]})):Object.is(e,t)}function d(e,t){if(e){if("string"==typeof e)return e.includes(t);if(Array.isArray(e))return e.some(function(e){return p(e,t)});if(e instanceof Set||e instanceof Map)return Array.from(e.keys()).some(function(e){return p(e,t)})}return r.create("operation",l(e)+" cannot contain any values, let alone "+l(t))}function h(e,t){return"function"==typeof t.TwineScript_IsTypeOf?t.TwineScript_IsTypeOf(e):r.create("operation",\'"is a" should only be used to compare type names, not \'+l(t)+".")}function y(e,t){return e&&"function"==typeof e.TwineScript_IsTypeOf?e.TwineScript_IsTypeOf(t):t&&"function"==typeof t.TwineScript_IsTypeOf?t.TwineScript_IsTypeOf(e):Array.isArray(e)&&Array.isArray(t)?e.length===t.length&&e.every(function(e,n){return y(e,t[n])}):e instanceof Map&&t instanceof Map?y(Array.from(e.entries()).sort(),Array.from(t.entries()).sort()):e instanceof Set&&t instanceof Set?(e=[].concat(_toConsumableArray(e)),b.apply(void 0,_toConsumableArray(t)).some(function(t){return y(e,t)})):p(e,t)}function g(e,t,n){if(!t||!n)return r.create("macrocall","The sub"+o(e)+" index values must not be 0 or NaN.");if(t<0&&(t=e.length+t+1),n<0&&(n=e.length+n+1),t>n)return g(e,n,t);var i="string"==typeof e;i&&(e=Array.from(e));var a=e.slice(t>0?t-1:t,n).map(u);return i?a.join(""):a}function m(t){return r.containsError(t)?t:t&&"function"==typeof t.TwineScript_Print?t.TwineScript_Print():t instanceof Map?(t=Array.from(t.entries()),r.containsError(t)?t:t.reduce(function(e,t){var n=_slicedToArray(t,2),r=n[0],i=n[1];return e+"<tr><td>`"+m(r)+"`</td><td>`"+m(i)+"`</td></tr>"},"<table class=datamap>")+"</table>"):t instanceof Set?Array.from(t.values()).map(m)+"":Array.isArray(t)?t.map(m)+"":t instanceof e?t:i(t)?r.create("unimplemented","I don\'t know how to print this value yet."):t+""}var v=t.impossible,b=t.permutations,w=t.toJSLiteral;return Object.freeze({isObject:i,singleTypeCheck:s,isValidDatamapName:a,collectionType:o,isSequential:c,clone:u,objectName:l,typeName:f,is:p,contains:d,isA:h,matches:y,subset:g,printBuiltinValue:m,numericIndex:/^(?:[1-9]\\d*|0)$/,unique:function(e,t,n){return!n.slice(t+1).some(function(t){return p(e,t)})}})}),define("twinescript/compiler",["utils"],function(e){function t(e,t){for(var n=0;n<e.length;n+=1)if(t.includes(e[n].type))return n;return NaN}function n(e,n){return e.length-1-t.apply(void 0,[[].concat(_toConsumableArray(e)).reverse(),n])}function r(e,r){var i=[];return e.length?([["error"],["comma"],{rightAssociative:["spread","bind"]},["to"],["into"],["where","when","via"],["with","making","each"],["augmentedAssign"],["and","or"],["is","isNot"],["contains","isIn"],["isA","isNotA"],["matches"],["inequality"],["addition","subtraction"],["multiplication","division"],{rightAssociative:["not","positive","negative"]},{rightAssociative:["belongingProperty"]},{rightAssociative:["belongingOperator","belongingItOperator"]},["property"],["itsProperty"],{rightAssociative:["belongingItProperty"]},["possessiveOperator","itsOperator"],["twineLink"],["macro"],["grouping"]]["most"===r?"reverse":"valueOf"]().some(function(r){var o=void 0;if(o=r.rightAssociative?t(e,r.rightAssociative):n(e,r),!Number.isNaN(o)&&o>-1)return i=[e[o],o],!0}),i):i}function i(e){if("inequality"===e.type){var t=e.operator;return e.negate?{">":"<=","<":">=",">=":"<","<=":">"}[t]:t}return e.type}function o(e){var t=i(e);return{">":"<","<":">",">=":"<=","<=":">=",contains:"isIn",isIn:"contains",isA:"typifies",typifies:"isA",isNotA:"untypifies",untypifies:"isNotA"}[t]||t}function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.isVarRef,u=t.whitespaceError,l=t.elidedComparison,f=t.testNeedsRight;if(e=[].concat(e),!e.length)return n&&u?"TwineError.create(\'operation\',"+s(u)+")":"";var p=e[0];if(1===e.length){if("identifier"===p.type)return n?"VarRef.create(Operations.Identifiers,"+s(p.text)+")":" Operations.Identifiers."+p.text.toLowerCase()+" ";if("variable"===p.type)return"VarRef.create(State.variables,"+s(p.name)+")"+(n?"":".get()");if("tempVariable"===p.type)return"VarRef.create(section.stack[0].tempVariables,"+s(p.name)+")"+(n?"":".get()");if("hookRef"===p.type)return" HookSet.create(\'?"+p.name+"\') ";if("string"===p.type)return p.text.replace(/\\n/g,"\\\\n");if("colour"===p.type)return"Colour.create("+s(p.colour)+")";if("datatype"===p.type)return"Datatype.create("+s(p.name)+")";if("root"===p.type)return a(p.children);if("whitespace"===p.type&&n&&u)return"TwineError.create(\'operation\',"+s(u)+")"}var d=void 0,h=r(e,"least"),y=_slicedToArray(h,2);p=y[0],d=y[1];var g=(p||{}).type,m=function(e){return{isVarRef:!0,whitespaceError:"I need usable data to be on the "+e+\' of "\'+p.text+\'".\'}},v=void 0,b=void 0,w=void 0,x=void 0,T=void 0,O=void 0,S=!0,j=!0,k=!1;if(g){if("error"===g)return"TwineError.create(\'syntax\',"+s(p.message)+")";if("comma"===g)w=",",j=!1;else if("spread"===g)w="Operations.makeSpreader(",b=a(e.slice(d+1))+")",S=!1;else if("bind"===g)w="VarBind.create(",b=a(e.slice(d+1),m("right"))+")",S=!1;else if("to"===g)T="to",b=a(e.slice(d+1),m("right")),v="Operations.setIt("+a(e.slice(0,d),m("left"))+")";else if("into"===g)T="into",b=a(e.slice(0,d),m("left")),v="Operations.setIt("+a(e.slice(d+1),m("right"))+")";else if("where"===g||"when"===g||"via"===g)v="Lambda.create("+(a(e.slice(0,d),{isVarRef:!0,whitespaceError:null}).trim()||"undefined")+",",w=s(p.type)+",",b=s(a(e.slice(d+1)))+")";else if("with"===g||"making"===g||"each"===g){var A=e.slice(d+1);![2,3].includes(A.length)||"whitespace"!==A[0].type||"tempVariable"!==A[1].type||A[2]&&"whitespace"!==A[2].type?(v="TwineError.create(\'operation\',\'I need a temporary variable to the right of \\\\\'",w=p.type,b="\\\\\'.\')"):"each"===g?(v="Lambda.create(",w=a(A,m("right")).trim(),b=",\'where\',\'true\')"):(v="Lambda.create("+(a(e.slice(0,d),{isVarRef:!0,whitespaceError:null}).trim()||"undefined")+",",w=s(p.type)+",",b=s(A[1].name)+")")}else if("augmentedAssign"===g)T=p.operator,v=a(e.slice(0,d),m("left")),b="Operations[\'"+T+"\']("+a(e.slice(0,d))+","+a(e.slice(d+1))+")";else if("and"===g||"or"===g){var C=function e(t){var n=r(t,"least"),i=_slicedToArray(n,2),o=i[0],a=i[1];if(o)return["inequality","is","isNot","isIn","contains","isA","typifies","isNotA","untypifies","matches"].includes(o.type)?o:["and","or"].includes(o.type)?e(t.slice(0,a))||e(t.slice(a+1)):void 0},E=C(e.slice(0,d)),N=C(e.slice(d+1)),_="TwineError.create(\'operation\', \'This use of \\"is not\\" and \\""+g+"\\" is grammatically ambiguous\',\'Maybe try rewriting this as \\"__ is not __ "+g+" __ is not __\\"\') ";if(x=p.type,l===p.type)x="",v=a(e.slice(0,d),{isVarRef:n,elidedComparison:l}).trim(),w=",",b=a(e.slice(d+1),{elidedComparison:l}).trim();else if(E&&!N){var I=E,P=s(i(I));if("isNot"===I.type||"isNotA"===I.type||"untypifies"===I.type)return _;b="Operations.elidedComparisonOperator("+s(p.type)+","+P+","+a(e.slice(d+1),{elidedComparison:g})+")"}else if(!E&&N){var M=N,D=e.indexOf(M),L=s(o(M));if("isNot"===M.type||"isNotA"===M.type||"untypifies"===M.type)return _;b="Operations.elidedComparisonOperator("+s(p.type)+","+L+","+a(e.slice(0,d),{elidedComparison:g})+")",v=a([].concat(_toConsumableArray(e.slice(D+1)),[Object.assign(Object.create(M),_defineProperty({},"inequality"===M.type?"operator":"type",o(M)))],_toConsumableArray(e.slice(d+1,D))))}}else if("is"===g||"isNot"===g||"contains"===g||"isIn"===g||"inequality"===g||"isA"===g||"typifies"===g||"isNotA"===g||"untypifies"===g||"matches"===g)k=!0,x=i(p);else if("addition"===g||"subtraction"===g){var q=a(e.slice(0,d),{testNeedsRight:!0}).trim();if(!q)return p.type={addition:"positive",subtraction:"negative"}[g],a(e,{isVarRef:n,whitespaceError:u,elidedComparison:l,testNeedsRight:f});x=p.text}else if("multiplication"===g||"division"===g)x=p.text;else if("positive"===g||"negative"===g)x="*",v="negative"===g?"-1":"1";else if("not"===g)w=" ",b="Operations.not("+a(e.slice(d+1))+")",S=!1;else if("belongingProperty"===g)b="VarRef.create("+a(e.slice(d+1),m("right"))+","+s(p.name)+")"+(n?"":".get()"),w=" ",S=j=!1;else if("belongingOperator"===g||"belongingItOperator"===g)p.type.includes("It")?(b="Operations.Identifiers.it",j=!1):b=a(e.slice(d+1),m("right")),O="belonging";else if("property"===g)v="VarRef.create("+a(e.slice(0,d),m("left"))+","+s(p.name)+")"+(n?"":".get()"),w=" ",S=j=!1;else if("itsProperty"===g||"belongingItProperty"===g)v="VarRef.create(Operations.Identifiers.it,"+s(p.name)+").get()",w=" ",S=j=!1;else if("possessiveOperator"===g||"itsOperator"===g)p.type.includes("it")&&(v="Operations.Identifiers.it",S=!1),O="possessive";else if("twineLink"===g)w=\'Macros.run("link-goto", [section,\'+s(p.innerText)+","+s(p.passage)+"])",S=j=!1;else if("macro"===g){var R=p.children[0];"macroName"!==R.type&&c("Compiler.compile","macro token had no macroName child token"),w="Macros.run("+(R.isMethodCall?a(R.children):\'"\'+p.name+\'"\')+", [section,"+a(p.children.slice(1))+"])",S=j=!1}else"grouping"===g&&(w="("+a(p.children,{isVarRef:n})+")",S=j=!1)}else;return d>-1?(x&&(n=!1),v=v||a(e.slice(0,d),{isVarRef:n}).trim(),b=b||a(e.slice(d+1)).trim(),k&&!v&&(v=" Operations.Identifiers.it "),S&&!v||j&&!b?f&&j&&!b?"":"TwineError.create(\'operation\',\'I need some code to be "+(S?"left ":"")+(S&&j?"and ":"")+(j?"right ":"")+\'of "\'+p.text+"\\"\')":w?v+w+b:T?"Operations.makeAssignmentRequest("+[v,b,s(T)]+")":O?"VarRef.create("+("belonging"===O?b:v)+",{computed:true,value:"+("belonging"===O?v:b)+"})"+(n?"":".get()"):x?" Operations["+s(x)+"]("+v+","+b+") ":""):1===e.length?(("value"in e[0]?e[0].value:e[0].text)+"").trim()||" ":e.reduce(function(e,t){return e+a(t,{isVarRef:n})},"")}var s=e.toJSLiteral,c=e.impossible;return a}),define("renderer",["utils","markup","twinescript/compiler","internaltypes/twineerror"],function(e,t,n,r){function i(e,t){return"<"+t+">"+e+"</"+t+">"}function o(e,t){var n=l.render(e.children);return n&&i(n,t)}var a=e.escape,s=e.impossible,c=e.toJSLiteral,u=e.insensitiveName,l=void 0,f="text-align: center; max-width:50%; ";return l={options:{},exec:function(){var e=void 0,n=void 0;return function(r){return"string"!=typeof r?(s("Renderer.exec","source was not a string, but "+(void 0===r?"undefined":_typeof(r))),""):r===e?n:(e=r,n=l.render(t.lex(r).children))}}(),render:function e(s){var p="",d=[];if(!s)return p;for(var h=s.length,y=0;y<h;y+=1){var g=s[y];switch(g.type){case"error":p+=r.create("syntax",g.message).render(a(g.text))[0].outerHTML;break;case"numbered":case"bulleted":var m="numbered"===g.type?"ol":"ul";p+="<"+m+">";for(var v=1;y<h&&s[y]&&s[y].type===g.type;)p+=("<"+m+">").repeat(Math.max(0,s[y].depth-v)),p+=("</"+m+">").repeat(Math.max(0,v-s[y].depth)),v=s[y].depth,p+=o(s[y],"li"),y+=1;y-=1,p+=("</"+m+">").repeat(v+1);break;case"align":for(;g&&"align"===g.type;){var b=g,w=b.align,x=y+=1;if("left"===w){y-=1;break}for(;y<h&&s[y]&&"align"!==s[y].type;)y+=1;var T=e(s.slice(x,y)),O="";switch(w){case"center":O+=f+"margin-left: auto; margin-right: auto;";break;case"justify":case"right":O+="text-align: "+w+";";break;default:+w&&(O+=f+"margin-left: "+w+"%;")}p+="<tw-align "+(O?\'style="\'+O+\'"\':"")+(l.options.debug?\' title="\'+g.text+\'"\':"")+">"+T+"</tw-align>\\n",g=s[y]}break;case"column":for(var S=[];g&&"column"===g.type;){var j=g,k=j.column,A=y+=1;if("none"===k){y-=1;break}for(;y<h&&s[y]&&"column"!==s[y].type;)y+=1;S.push({text:g.text,type:k,body:e(s.slice(A,y)),width:g.width,marginLeft:g.marginLeft,marginRight:g.marginRight}),g=s[y]}S.length&&function(){var e=S.reduce(function(e,t){return e+t.width},0);p+="<tw-columns>"+S.map(function(t){return"<tw-column type="+t.type+\'  style="width:\'+t.width/e*100+"%; margin-left: "+t.marginLeft+"em; margin-right: "+t.marginRight+\'em;" \'+(l.options.debug?\' title="\'+t.text+\'"\':"")+">"+t.body+"</tw-column>\\n"}).join("")+"</tw-columns>"}();break;case"heading":p+=o(g,"h"+g.depth);break;case"br":d.length&&!/td|th/.test(d[0])||(p+="<br>");break;case"hr":p+="<hr>";break;case"escapedLine":case"comment":break;case"inlineUrl":p+=\'<a class="link" href="\'+a(g.text)+\'">\'+g.text+"</a>";break;case"scriptStyleTag":case"tag":var C=g.text.toLowerCase();/^<\\/?(?:table|thead|tbody|tr|tfoot|td|th)\\b/.test(C)&&d[g.text.startsWith("</")?"shift":"unshift"](C),p+=g.text.startsWith("</")?g.text:g.text.replace(/>$/," data-raw>");break;case"sub":case"sup":case"strong":case"em":p+=o(g,g.type);break;case"strike":p+=o(g,"s");break;case"bold":p+=o(g,"b");break;case"italic":p+=o(g,"i");break;case"twineLink":var E=_slicedToArray(t.lex("(link-goto:"+c(g.innerText)+","+c(g.passage)+")").children,1),N=E[0];p+=\'<tw-expression type="macro" name="link-goto"\'+(l.options.debug?\' title="\'+a(g.text)+\'"\':"")+\' js="\'+a(n(N))+\'"></tw-expression>\';break;case"hook":p+="<tw-hook "+(g.hidden?"hidden ":"")+(g.name?\'name="\'+u(g.name)+\'"\':"")+(l.options.debug&&g.name?\' title="Hook: ?\'+g.name+\'"\':"")+\' source="\'+a(g.innerText)+\'"></tw-hook>\';break;case"verbatim":p+=i(a(g.innerText).replace(/\\n/g,"<br>"),"tw-verbatim");break;case"collapsed":p+=o(g,"tw-collapsed");break;case"variable":case"tempVariable":case"macro":p+=\'<tw-expression type="\'+g.type+\'" name="\'+a(g.name||g.text)+\'"\'+(l.options.debug?\' title="\'+a(g.text)+\'"\':"")+\' js="\'+a(n(g))+\'"></tw-expression>\';break;default:p+=g.children&&g.children.length?e(g.children):g.text}}return p}},Object.freeze(l)}),define("internaltypes/changedescriptor",["jquery","utils","renderer","datatypes/hookset"],function(e,t,n,r){var i=t.assertOnlyHas,o=t.impossible,a=t.transitionIn,s=n.exec,c=void 0,u={source:"",innerSource:"",enabled:!0,target:null,append:"append",newTargets:null,transition:"instant",transitionTime:null,transitionDeferred:!1,loopVars:null,styles:null,attr:null,\ndata:null,section:null,earlyExit:!1,summary:function(){var e=this;return["source","innerSource","enabled","target","append","newTargets","transition","transitionTime"].filter(function(t){return e.hasOwnProperty(t)}).concat([this.attr.length&&"attr",this.styles.length&&"styles",Object.keys(this.loopVars).length&&"loopVars",Object.keys(this.data).length&&"data"].filter(Boolean))},create:function(e,t){var n=Object.assign(Object.create(this),{attr:[].concat(this.attr||[]),styles:[].concat(this.styles||[]),loopVars:this.loopVars||{},data:this.data||{}},e);return t&&t.run(n),n},update:function(){var e=this,t=this.section,n=this.newTargets,i=this.target,o=function(t){Array.isArray(e.styles)&&e.styles.length>0&&setTimeout(function(){return t.css(Object.assign.apply(Object,_toConsumableArray([{}].concat(e.styles))))}),e.attr&&e.attr.forEach(function(e){return t.attr(e)}),e.data&&t.data(e.data)};Array.isArray(n)&&n.length&&(i=n.map(function(e){return e.target})),[].concat(i).forEach(function(e){r.isPrototypeOf(e)?e.forEach(t,o):o(e)})},render:function(){var t=this,n=this.source,l=this.transition,f=this.transitionTime,p=this.transitionDeferred,d=this.enabled,h=this.data,y=this.section,g=this.newTargets,m=this.target,v=this.target,b=this.append;if(i(this,c),!d||void 0!==m.popAttr("hidden"))return u.create({target:m,data:Object.assign({},h,{hiddenSource:n})}).update(),e();if(Array.isArray(g)&&g.length&&(m=g),!m)return o("ChangeDescriptor.render","ChangeDescriptor has source but not a target!"),e();var w=e(),x=function(e,n){return function(r){n&&1&r[0].compareDocumentPosition(document)&&2&r[0].compareDocumentPosition(v[0])||(w=w.add(t.create({target:r,append:e,newTargets:null}).render()))}};if([].concat(m).forEach(function t(n,i,o){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:b,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:void 0;r.isPrototypeOf(n)?n.forEach(y,x(a,s)):n.jquery&&n.length>1?Array.from(n).map(e).forEach(x(a)):n.target&&n.append&&t(n.target,i,o,n.append,n.before)}),w.length||Array.isArray(m)||r.isPrototypeOf(m))return w;if(!(b in m)){if("replace"!==b)return o("Section.render","The target doesn\'t have a \'"+b+"\' method."),e();m.empty(),b="append"}return w=e(n&&e.parseHTML(s(n),document,!0)),m[b](w.length?w:void 0),this.update(),l&&!p&&a("replace"===b?m:w,l,f),w}};return c=Object.keys(u),Object.seal(u)}),define("datatypes/changercommand",["utils","utils/operationutils","internaltypes/changedescriptor","internaltypes/twineerror"],function(e,t,n,r){var i=e.impossible,o=t.is,a={},s={changer:!0,TwineScript_TypeName:"a changer command",TwineScript_Print:function(){return"`[A (\'"+this.macroName+"\':) command]`"},summary:function(){var e=n.create();return this.run(e),e.summary()},create:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return Array.isArray(t)||i("ChangerCommand.create","params was not an array"),Object.assign(Object.create(this),{macroName:e,params:t,next:n,TwineScript_ObjectName:"a ("+e+":) command"})},"TwineScript_+":function(e){for(var t=this.TwineScript_Clone(),n=t;n.next;)n=n.next;return n.next=e,t},TwineScript_is:function(e){if(s.isPrototypeOf(e))return this.macroName===e.macroName&&o(this.params,e.params)&&o(this.next,e.next)},TwineScript_Clone:function(){return this.create(this.macroName,this.params,this.next)},run:function(e){var t=a[this.macroName].apply(a,[e].concat(_toConsumableArray(this.params)));if(r.containsError(t))return t;this.next&&this.next.run(e)},register:function(e,t){a[e]=t}};return Object.freeze(s)}),define("state",["utils","passages","datatypes/changercommand","internaltypes/twineerror","utils/operationutils"],function(e,t,n,r,i){function o(){if(m.hasSessionStorage){var e=m.serialise();if("string"==typeof e)try{sessionStorage.setItem("Saved Session",e)}catch(e){return}}}function a(e){h=(p[d]||f).create(e),o()}var s=e.impossible,c=i.objectName,u=["localStorage","sessionStorage"].map(function(e){return!!window[e]&&function(){try{return window[e].setItem("test","1"),window[e].removeItem("test"),!0}catch(e){return!1}}()}),l={TwineScript_ObjectName:"this story\'s variables",TwineScript_VariableStore:!0},f={passage:"",variables:l,create:function(e,t){var n=Object.create(f);return n.passage=e||"",n.variables=Object.assign(Object.create(this.variables),t),n}},p=[],d=-1,h=f.create(),y=void 0,g={forward:[],back:[],load:[]},m=void 0;return m=Object.assign({get passage(){return h.passage},get variables(){return h.variables},get pastLength(){return d},get futureLength(){return p.length-1-d},passageNameVisited:function(e){var n=0;if(!t.get(e))return 0;for(var r=0;r<=d;r++)n+=+(e===p[r].passage);return n},passageNameLastVisited:function(e){if(!t.get(e))return 1/0;if(e===h.passage)return 0;for(var n=d;n>0;n--)if(p[n].passage===e)return d-n+1;return 1/0},pastPassageNames:function(){for(var e=[],t=d-1;t>=0;t--)e.unshift(p[t].passage);return e},play:function(e){h||s("State.play","present is undefined!"),h.passage=e,p=p.slice(0,d+1).concat(h),d+=1,a(e),g.forward.forEach(function(t){return t(e)})},rewind:function(e){var t=1,n=!1;if(e)if("string"==typeof e){if((t=this.passageNameLastVisited(e))===1/0)return}else"number"==typeof e&&(t=e);for(;t>0&&d>0;t--)n=!0,d-=1;return n&&(a(p[d].passage),g.back.forEach(function(e){return e()})),n},fastForward:function(e){var t=1,n=!1;for("number"==typeof e&&(t=e);t>0&&p.length>0;t--)n=!0,d+=1;return n&&(a(p[d].passage),g.forward.forEach(function(e){return e(p[d].passage,"fastForward")})),n},on:function(e,t){return e in g?("function"!=typeof t||g[e].includes(t)||g[e].push(t),m):void s("State.on","invalid event name")},reset:function(){window.jasmine&&(p=[],d=-1,h=f.create(),y=void 0,g.load.forEach(function(e){return e(p)}))},hasStorage:u[0],hasSessionStorage:u[1]},function(){function e(t){return"number"==typeof t||"boolean"==typeof t||"string"==typeof t||null===t||Array.isArray(t)&&t.every(e)||t instanceof Set&&Array.from(t).every(e)||t instanceof Map&&Array.from(t.values()).every(e)||n.isPrototypeOf(t)}function t(e,t){return t instanceof Set?{"(dataset:)":Array.from(t)}:t instanceof Map?{"(datamap:)":Array.from(t)}:n.isPrototypeOf(t)?{changer:{name:t.macroName,params:t.params,next:t.next}}:t}function i(e,t){if(t&&"object"===(void 0===t?"undefined":_typeof(t))){if(Array.isArray(t["(dataset:)"]))return new Set(t["(dataset:)"]);if(Array.isArray(t["(datamap:)"]))return new Map(t["(datamap:)"]);if(t.changer&&"object"===_typeof(t.changer)){var r=t.changer,i=r.name,o=r.params,a=r.next;return n.create(i,o,a)}}return t}function o(){var n=p.slice(0,d+1),i=n.map(function(t){return Object.keys(t.variables).filter(function(n){return t.variables[n]&&!e(t.variables[n])}).map(function(e){return[e,t.variables[e]]})});if(y||(y=i.reduce(function(e,t,n){var r=_slicedToArray(t,2),i=r[0],o=r[1];return e||i&&[i,o,n+1]},void 0)),y){var o=y,a=_slicedToArray(o,3),s=a[0],u=a[1],l=a[2];return r.create("saving","The variable $"+s+" holds "+c(u)+" (which is, or contains, a complex data value) on turn "+l+"; the game can no longer be saved.")}try{return JSON.stringify(n,t)}catch(e){return!1}}function s(e){var t=void 0,n=l;try{t=JSON.parse(e,i)}catch(e){return!1}return!!Array.isArray(t)&&(!(t=t.map(function(e){return!("object"!==(void 0===e?"undefined":_typeof(e))||!e.hasOwnProperty("passage")||!e.hasOwnProperty("variables"))&&(e.variables=Object.assign(Object.create(n),e.variables),n=e.variables,Object.assign(Object.create(f),e))})).includes(!1)&&(p=t,g.load.forEach(function(e){return e(p)}),d=p.length-1,void a(p[d].passage)))}return{serialise:o,deserialise:s}}()),Object.seal(f),Object.freeze(m)}),define("datatypes/colour",["jquery"],function(e){function t(t){if(t in s)return s[t];var n=e("<p>").css("background-color",t).css("background-color");return n=n.startsWith("rgb")?n.match(/\\d+/g).reduce(function(e,t,n){return e["rgb"[n]]=+t,e},{}):{r:192,g:192,b:192},s[t]=n,n}function n(e){return"string"!=typeof e?e:(e=e.replace("#",""),e=e.replace(o,"$1$1$2$2$3$3"),{r:parseInt(e.slice(0,2),16),g:parseInt(e.slice(2,4),16),b:parseInt(e.slice(4,6),16)})}function r(e){var t=e.r,n=e.g,r=e.b,i=e.a;t/=255,n/=255,r/=255;var o=Math.max(t,n,r),a=Math.min(t,n,r),s=(o+a)/2,c=o-a;if(o===a)return{h:0,s:0,l:s};var u=void 0;switch(o){case t:u=(n-r)/c+(n<r?6:0);break;case n:u=(r-t)/c+2;break;case r:u=(t-n)/c+4}return u=Math.round(60*u),{h:u,s:s>.5?c/(2-o-a):c/(o+a),l:s,a:i}}function i(e){function t(e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?c+6*(s-c)*e:e<.5?s:e<2/3?c+(s-c)*(2/3-e)*6:c}var n=e.h,r=e.s,i=e.l,o=e.a;if(0===r){var a=Math.floor(255*i);return{r:a,g:a,b:a}}n/=360;var s=i<.5?i*(1+r):i+r-i*r,c=2*i-s;return{r:Math.floor(255*t(n+1/3)),g:Math.floor(255*t(n)),b:Math.floor(255*t(n-1/3)),a:o}}var o=/^([\\da-fA-F])([\\da-fA-F])([\\da-fA-F])$/,a=/^([\\da-fA-F])([\\da-fA-F])([\\da-fA-F])([\\da-fA-F])([\\da-fA-F])([\\da-fA-F])$/,s=Object.create(null),c=Object.freeze({TwineScript_TypeName:"a colour",TwineScript_ObjectName:"a colour","TwineScript_+":function(e){var t=this,n=e;return c.create({r:Math.min(Math.round(.6*(t.r+n.r)),255),g:Math.min(Math.round(.6*(t.g+n.g)),255),b:Math.min(Math.round(.6*(t.b+n.b)),255),a:(t.a+n.a)/2})},TwineScript_Print:function(){return"<tw-colour style=\'background-color:rgba("+[this.r,this.g,this.b,this.a].join(",")+");\'></span>"},TwineScript_is:function(e){return c.isPrototypeOf(e)&&e.r===this.r&&e.g===this.g&&e.b===this.b&&e.a===this.a},TwineScript_Clone:function(){return c.create(this)},toRGBAString:function(){return"rgba("+this.r+", "+this.g+", "+this.b+", "+this.a+")"},get h(){return r(this).h},get s(){return r(this).s},get l(){return r(this).l},create:function(e){return"string"==typeof e?c.isHexString(e)?this.create(n(e)):this.create(t(e)):!("h"in e&&"s"in e&&"l"in e)||"r"in e||"g"in e||"b"in e?("a"in e&&"number"==typeof e.a||(e.a=1),Object.assign(Object.create(this),e)):this.create(i(e))},isHexString:function(e){return"string"==typeof e&&"#"===e[0]&&(e.slice(1).match(o)||e.slice(1).match(a))},isCSS3Function:function(e){return"string"==typeof e&&/^(?:rgb|hsl)a?\\(\\s*\\d+\\s*,\\s*\\d+%?\\s*,\\s*\\d+%?(?:,\\s*\\d+(?:\\.\\d+)?\\s*)?\\)$/.test(e)}});return c}),define("internaltypes/varref",["state","internaltypes/twineerror","utils","utils/operationutils","datatypes/hookset","datatypes/colour"],function(e,t,n,r,i,o){function a(e,n){var r=void 0;if(e instanceof Map&&(r=t.containsError(j(e,n))))return r;if(w(e)){var o=void 0;if("number"==typeof n){if(0===n)return t.create("property","You can\'t access elements at position 0 of "+x(e)+".","Only positive and negative position values exist.");n>0&&(n-=1)}else if("string"==typeof n&&(o=/(\\d+)(?:st|[nr]d|th)last/i.exec(n)))n=-o[1];else if("string"==typeof n&&(o=/(\\d+)(?:st|[nr]d|th)/i.exec(n)))n=o[1]-1;else if("last"===n)n=-1;else if(!["length","any","all"].includes(n)||i.isPrototypeOf(e))return t.create("property","You can only access position strings/numbers (\'4th\', \'last\', \'2ndlast\', (2), etc.)"+(i.isPrototypeOf(e)?"":", \'length\', \'any\' and \'all\'")+" of "+x(e)+", not "+x(n)+".")}else if(e instanceof Set){if(!["length","any","all"].includes(n))return t.create("property","You can only get the \'length\', \'any\' and \'all\' of a "+x(e)+".","To check contained values, use the \'contains\' operator.");"length"===n&&(n="size")}else if("number"==typeof e||"boolean"==typeof e)return t.create("property","You can\'t get data values from "+x(e)+".");return n}function s(e,n){return{compiledPropertyChain:n.reduce(function(r,i,o){i.computed&&(i=i.value),k.isPrototypeOf(i)&&(i=i.get()),i=Array.isArray(i)?i.map(function(t){return a(e,t)}):a(e,i);var s=void 0;return(s=t.containsError(r,i))?s:(o<n.length-1&&(e=g(e,i)),r.push(i),r)},[]),deepestObject:e}}function c(e,t){return t-0<0&&Math.abs(t)<=e.length?e.length+(t-0):t}function u(e,t){var n={any:"\'any\' value of ",all:"\'all\' values of "}[t];return{determiner:t,array:[].concat(_toConsumableArray(e)),TwineScript_ObjectName:n+x(e),TwineScript_TypeName:n+"a data structure",TwineScript_Unstorable:!0,TwineScript_Print:function(){return"`["+this.TwineScript_TypeName+"]`"}}}function l(e,t){if(void 0===e)return e;if(e instanceof Map)return e.get(t);if(w(e)&&(t=c(e,t)),"any"===t||"all"===t)return u(e,t);if(e.TwineScript_GetElement&&Number.isFinite(+t))return e.TwineScript_GetElement(t);var n=e[t];return"function"!=typeof n?n:void 0}function f(e){return e.computed?"string"==typeof e.value?"(\'"+e.value+"\')":"("+e.value+")":"\'"+e+"\'"}function p(e,n){if(Array.isArray(n))return n.map(function(t){return p(e,t)});if(i.isPrototypeOf(e))return t.create("operation","I can\'t modify "+x(e),"You should alter hooks indirectly using macros like (replace:) or (enchant:).");if(e instanceof Set)return t.create("operation","I can\'t modify "+x(e),"You should use an (array:) if you need to modify the data inside this dataset.");if(o.isPrototypeOf(e))return t.create("operation","I can\'t modify the components of "+x(e)+".");if(e instanceof Map)return"string"==typeof n||t.create("operation",x(e)+" can only have string data names, not "+x(n)+".");if(w(e)){if(["length","any","all"].includes(n))return t.create("operation","I can\'t forcibly alter the \'"+n+"\' of "+x(e)+".");if(+n!=(0|n))return t.create("property",x(e)+" can only have position keys (\'3rd\', \'1st\', (5), etc.), not "+f(n)+".")}return e.TwineScript_Identifiers&&n in e?t.create("keyword","I can\'t alter the value of the \'"+n+"\' identifier.","You can only alter data in variables and hooks, not fixed identifiers."):"number"!=typeof e&&"boolean"!=typeof e||t.create("operation","You can\'t alter the data values of "+x(e)+".")}function d(e,t,n){var r=t;e instanceof Map?e.set(t,n):(w(e)&&(t=c(e,t)),e.TwineScript_Set?e.TwineScript_Set(t):e[t]=n),C.set.forEach(function(t){return t(e,r,n)})}function h(e,t){var n=t;w(e)&&(t=c(e,t)),Array.isArray(e)&&S.exec(t)?e.splice(t,1):e instanceof Map||e instanceof Set?e.delete(t):delete e[t],C.delete.forEach(function(t){return t(e,n)})}function y(e){function t(){return e}return{get:t,set:t,delete:t,varref:!0}}function g(n,r,o){if(Array.isArray(r))return i.isPrototypeOf(n)?n.TwineScript_GetElement(r):r.map(function(e){return g(n,e,e)})["string"==typeof n?"join":"valueOf"]("");"string"==typeof n&&(n=[].concat(_toConsumableArray(n)));var a=l(n,r);return void 0===a?n===e.variables?A:n.TwineScript_VariableStore?t.create("property","There isn\'t a temp variable named _"+o+" in this place.","Temp variables only exist inside the same passage and hook in which they\'re (set:)."):t.create("property","I can\'t find a "+f(o)+" data name in "+x(n)):a}function m(e,n){var r=this,i=this.compiledPropertyChain.reduce(function(e,t){var n=void 0;return n=0===e.length?r.object:g.apply(void 0,_toConsumableArray(e[e.length-1])),e.push([n,t])&&e},[]).reduceRight(e,n);return t.containsError(i)?i:void 0}var v=n.impossible,b=r.isObject,w=r.isSequential,x=r.objectName,T=r.typeName,O=r.clone,S=r.numericIndex,j=r.isValidDatamapName,k=void 0,A=0,C={set:[],delete:[]};return k=Object.freeze({varref:!0,get:function(){return g(this.deepestObject,this.compiledPropertyChain.slice(-1)[0],this.propertyChain.slice(-1)[0])},set:function(e){return!this.object||this.object.TwineScript_VariableStore||this.object.TwineScript_Identifiers?m.call(this,function(e,n,r){var i=_slicedToArray(n,2),o=i[0],a=i[1],s=void 0;if(s=t.containsError(e,o,a)||t.containsError(p(o,a)))return s;if(e&&e.TwineScript_Unstorable)return t.create("operation",T(e)+" can\'t be stored.");if(r>0&&(o=O(o)),"string"==typeof o){if("string"!=typeof e||e.length!==(Array.isArray(a)?a.length:1))return t.create("datatype","I can\'t put this non-string value, "+x(e)+", in a string.");o=[].concat(_toConsumableArray(o));var c=[].concat(_toConsumableArray(e));[].concat(a).forEach(function(e){0+e<0&&(e=o.length+(0+e)),o=[].concat(_toConsumableArray(o.slice(0,e)),[c.shift()],_toConsumableArray(o.slice(e+1)))}),o=o.join("")}else b(o)&&(Array.isArray(a)&&w(e)?("string"==typeof e&&(e=[].concat(_toConsumableArray(e))),a.map(function(t,n){return[t,e[n]]}).forEach(function(e){var t=_slicedToArray(e,2),n=t[0],r=t[1];return d(o,n,r)})):d(o,a,e));return o},e):t.create("macrocall","I can\'t (set:) "+x(this)+", if the "+(x(this.object).match(/ (.+$)/)||["","value"])[1]+" isn\'t stored in a variable.","Modifying data structures that aren\'t in variables won\'t change the game state at all.")},delete:function(){return m.call(this,function(e,n,r){var i=_slicedToArray(n,2),o=i[0],a=i[1],s=void 0;if(s=t.containsError(e,o,a)||t.containsError(p(o,a)))return s;if(r>0&&(o=O(o)),null===e){var u="string"==typeof o;u&&(o=[].concat(_toConsumableArray(o))),Array.isArray(a)?(w(o)&&(a=[].concat(_toConsumableArray(new Set(a))),a.sort(function(e,t){return c(o,t)-c(o,e)})),a.forEach(function(e){return h(o,e)})):h(o,a),u&&(o=o.join(""))}else d(o,a,e);return o},null)},create:function(e,n){var r=void 0;if(r=t.containsError(e))return y(r);n=[].concat(n),k.isPrototypeOf(e)&&(n=e.propertyChain.concat(n),e=e.object);var i=s(e,n),o=i.compiledPropertyChain,a=i.deepestObject;return(r=t.containsError(o,a))?y(r):Object.assign(Object.create(k),{object:e,propertyChain:n,compiledPropertyChain:o,deepestObject:a})},get TwineScript_ObjectName(){var t=this,n=function(n,r){return r||t.object!==e.variables&&!t.object.TwineScript_VariableStore?f(n):n};return(this.object===e.variables?"$":this.object.TwineScript_VariableStore?"_":x(this.object)+"\'s ")+(1===this.propertyChain.length?n(this.propertyChain[0]):this.propertyChain.reduce(function(e,t,r){return e+"\'s "+n(t,r)}))+(this.object.TwineScript_VariableStoreName?" in "+this.object.TwineScript_VariableStoreName:"")},on:function(e,t){return e in C?("function"!=typeof t||C[e].includes(t)||C[e].push(t),k):void v("VarRef.on","invalid event name")}})}),define("utils/naturalsort",[],function(){return function(e){return function t(n,r){var i,o,a,s,c=/(^-?[0-9]+(\\.?[0-9]*)[df]?e?[0-9]?$|^0x[0-9a-f]+$|[0-9]+)/gi,u=/(^[ ]*|[ ]*$)/g,l=/(^([\\w ]+,?[\\w ]+)?[\\w ]+,?[\\w ]+\\d+:\\d+(:\\d+)?[\\w ]?|^\\d{1,4}[\\/\\-]\\d{1,4}[\\/\\-]\\d{1,4}|^\\w+, \\w+ \\d+, \\d{4})/,f=/^0x[0-9a-f]+$/i,p=/^0/,d=function(e){return t.insensitive&&(""+e).toLowerCase()||""+e},h=d(n).replace(u,"")||"",y=d(r).replace(u,"")||"",g=h.replace(c,"\\0$1\\0").replace(/\\0$/,"").replace(/^\\0/,"").split("\\0"),m=y.replace(c,"\\0$1\\0").replace(/\\0$/,"").replace(/^\\0/,"").split("\\0"),v=parseInt(h.match(f))||1!==g.length&&h.match(l)&&Date.parse(h),b=parseInt(y.match(f))||v&&y.match(l)&&Date.parse(y)||null;if(e&&window.Intl&&window.Intl.Collator&&(a=window.Intl.Collator(e)),b){if(v<b)return-1;if(v>b)return 1}for(var w=0,x=Math.max(g.length,m.length);w<x;w++){if(i=!(g[w]||"").match(p)&&parseFloat(g[w])||g[w]||0,o=!(m[w]||"").match(p)&&parseFloat(m[w])||m[w]||0,isNaN(i)!==isNaN(o))return isNaN(i)?1:-1;if((void 0===i?"undefined":_typeof(i))!==(void 0===o?"undefined":_typeof(o)))i+="",o+="";else if("string"==typeof i&&a&&0!==(s=a.compare(i,o)))return s;if(i<o)return-1;if(i>o)return 1}return 0}}}),define("internaltypes/varscope",[],function(){return{TwineScript_ObjectName:"the temporary variables",TwineScript_VariableStore:!0}}),define("datatypes/lambda",["utils","utils/operationutils","internaltypes/varscope","internaltypes/twineerror"],function(e,t,n,r){var i=e.toJSLiteral,o=e.insensitiveName,a=(e.plural,t.typeName,t.objectName,t.singleTypeCheck,Object.freeze({lambda:!0,TwineScript_TypeName:"a lambda",TwineScript_ObjectName:function(){return\'a "\'+("making"in this?"making ... ":"")+("with"in this?"with ... ":"")+("where"in this?"where ... ":"")+("when"in this?"when ... ":"")+("via"in this?"via ... ":"")+\'" lambda\'},TwineScript_Print:function(){return"`[A lambda]`"},TwineScript_is:function(e){return e===this},TypeSignature:function(e){return{pattern:"lambda",innerType:a,clauses:e,typeName:\'a "\'+e.split().concat("").join(" ...")+\'" lambda\'}},create:function(e,t,i){var s=void 0;if(r.containsError(e))return e;if(a.isPrototypeOf(e)){if("when"===t||"when"in e)return r.create("syntax","A \'when\' lambda cannot have any other clauses, such as \'"+t+"\'.");if(t in e&&("where"!==t||"true"!==e[t]))return r.create("syntax","This lambda has two \'"+t+"\' clauses.");s=e}else{if("when"===t&&void 0!==e)return r.create("syntax","A \'when\' lambda shouldn\'t begin with a temporary variable (just use \'when\' followed by the condition).");if(void 0!==e&&(!e||!e.varref||!n.isPrototypeOf(e.object)||e.propertyChain.length>1))return r.create("syntax","This lambda needs to start with a single temporary variable.");s=Object.create(this),s.loop=e?e.propertyChain[0]:""}s[t]=i;var c=[s.making,s.with,s.loop].filter(function(e,t,n){return e&&n.indexOf(o(e))!==t});return c.length?r.create("syntax","This lambda has two variables named \'"+c[0]+"\'.","Lambdas should have all-unique parameter names."):s},apply:function(e,t){var o=t.loop,a=t.with,s=t.making,c=t.fail,u=t.pass,l=t.ignoreVia,f=t.tempVariables;f=f||Object.create(e.stack[0]||n),[[this.loop,o],[this.with,a],[this.making,s]].forEach(function(e){var t=_slicedToArray(e,2),n=t[0],r=t[1];return n&&(f[n]=r)}),e.stack.unshift(Object.assign(Object.create(null),{tempVariables:f})),!o||this.with||this.making||this.when?e.eval("Operations").initialiseIt(r.create("operation","I can\'t use \'it\', or an implied \'it\', in "+this.TwineScript_ObjectName())):e.eval("Operations").initialiseIt(o);var p=!l&&this.via,d=e.eval("where"in this||"when"in this?"Operations.where("+(this.where||this.when)+","+(p||i(u))+","+i(c)+")":p||i(u));return e.stack.shift(),d},filter:function(e,t){var n=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=void 0,a=t.reduce(function(t,a){if(o=r.containsError(t))return o;var s=n.apply(e,{loop:a,pass:!0,fail:!1,ignoreVia:!0,tempVariables:i});return(o=r.containsError(s))?o:t.concat(s?[a]:[])},[]);return(o=r.containsError(a))?o:a}}));return a}),define("macros",["jquery","utils/naturalsort","utils","utils/operationutils","datatypes/changercommand","datatypes/lambda","datatypes/hookset","internaltypes/changedescriptor","internaltypes/twineerror"],function(e,t,n,r,i,o,a,s,c){function u(e){return function(n){n=n.reduce(function(e,n){if(n&&!0===n.spreader){var r=n.value;if(Array.isArray(r)||"string"==typeof r)for(var i=0;i<r.length;i++)e.push(r[i]);else r instanceof Set?e.push.apply(e,_toConsumableArray(Array.from(r).sort(t("en")))):e.push(c.create("operation","I can\'t spread out "+m(r)+", because it is not a string, dataset, or array."))}else e.push(n);return e},[]);var r=c.containsError(n);return r||e.apply(void 0,_toConsumableArray(n))}}function l(e,t,n){n=[].concat(n||[]),e="("+(Array.isArray(e)&&e.length>1?e[0]:e)+":)";var r=void 0;return r=n.length>0?"The "+e+" macro must only be given "+n.map(v).reduce(function(e,t,n,r){return e+(0===n?"":n<r.length-1?", ":", and ")+t},"")+(n.length>1?", in that order":"."):"The macro must not be given any data - just write "+e+".",function(i){for(var a=arguments.length,s=Array(a>1?a-1:0),u=1;u<a;u++)s[u-1]=arguments[u];for(var l=void 0,f=0,p=Math.max(s.length,n.length);f<p;f+=1){var g=function(t,i){var a=n[t],u=s[t];return t>=n.length&&!l?{v:c.create("datatype",s.length-n.length+" too many values were given to this "+e+" macro.",r)}:(a||(a=l),!a.innerType||"rest"!==a.pattern&&"zero or more"!==a.pattern||(l=a.innerType,"rest"===a.pattern&&(a=a.innerType)),b(u,a)?void 0:void 0===u?{v:c.create("datatype","The "+e+" macro needs "+h(n.length-t,"more value")+".",r)}:u&&u.TwineScript_Unstorable&&(a===w.TypeSignature.Any||a.innerType&&a.innerType===w.TypeSignature.Any)?{v:c.create("datatype",e+"\'s "+d(t+1)+" value, "+m(u)+", is not valid data for this macro.",r)}:u&&o.isPrototypeOf(u)&&"lambda"===a.pattern?{v:c.create("datatype",e+"\'s "+d(t+1)+" value (a lambda) should have "+y(["where","making","via","with"].filter(function(e){return a.clauses.includes(e)}).map(function(e){return"a \'"+e+"\' clause"}))+", not "+y(["where","making","via","with"].filter(function(e){return e in u}).map(function(e){return"a \'"+e+"\' clause"}))+".")}:{v:c.create("datatype",e+"\'s "+d(t+1)+" value is "+m(u)+", but should be "+v(a)+".",a.message||r)})}(f);if("object"===(void 0===g?"undefined":_typeof(g)))return g.v}return t.apply(void 0,[i].concat(s))}}function f(e,t){Array.isArray(e)?e.forEach(function(e){return g(x,p(e),t)}):g(x,p(e),t)}var p=n.insensitiveName,d=n.nth,h=n.plural,y=n.andList,g=n.lockProperty,m=r.objectName,v=r.typeName,b=r.singleTypeCheck,w=void 0,x={},T=function(e,t,n,r){return function(){for(var i=arguments.length,o=Array(i),a=0;a<i;a++)o[a]=arguments[a];var c=t.apply(void 0,_toConsumableArray(o.slice(1)));if(c)return c;var u=void 0;r&&(u=s.create());var l=Object.assign({TwineScript_ObjectName:"a ("+e+":) command",TwineScript_TypeName:"a ("+e+":) command",TwineScript_Print:function(){return"`[A ("+e+":) command]`"}},r?{TwineScript_Attach:function(e){return e.run(u),l},TwineScript_Run:function(){return n.apply(void 0,[u].concat(o))}}:{TwineScript_Run:function(){return n.apply(void 0,o)}});return l}};return w={has:function(e){return e=p(e),x.hasOwnProperty(e)},get:function(e){return e=p(e),x.hasOwnProperty(e)&&x[e]},add:function e(t,n,r){return f(t,u(l(t,n,r))),e},addChanger:function e(t,n,r,o){return f(t,u(l(t,n,o))),i.register(Array.isArray(t)?t[0]:t,r),e},addCommand:function e(t,n,r,i){var o=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],a=[].concat(t)[0];return f(t,u(l(t,T(a,n,r,o),i))),e},TypeSignature:{optional:function(e){return{pattern:"optional",innerType:e}},zeroOrMore:function(e){return{pattern:"zero or more",innerType:e}},either:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return{pattern:"either",innerType:t}},rest:function(e){return{pattern:"rest",innerType:e}},wrapped:function(e,t){return{pattern:"wrapped",innerType:e,message:t}},Any:{TwineScript_TypeName:"anything"}},run:function(e,t){return c.containsError(e)?e:w.has(e)?w.get(e)(t):c.create("macrocall","I can\'t run the macro \'"+e+"\' because it doesn\'t exist.","Did you mean to run a macro? If you have a word written like (this:), it is regarded as a macro name.")}},Object.freeze(w)}),define("datatypes/datatype",["datatypes/changercommand","datatypes/colour"],function(e,t){var n=Object.freeze({datatype:!0,TwineScript_TypeName:"a datatype",TwineScript_Print:function(){return"`["+this.TwineScript_ObjectName+"]`"},TwineScript_is:function(e){return n.isPrototypeOf(e)&&e.name===this.name},TwineScript_Clone:function(){return n.create(this.name)},TwineScript_IsTypeOf:function(e){return this.name===(Array.isArray(e)?"array":e instanceof Map?"datamap":e instanceof Set?"dataset":t.isPrototypeOf(e)?"colour":"string"==typeof e?"string":"number"==typeof e?"number":"boolean"==typeof e?"boolean":"unknown")},create:function(e){return e="dm"===e?"datamap":"ds"===e?"dataset":"num"===e?"number":"str"===e?"string":"color"===e?"colour":e,Object.assign(Object.create(this),{name:e,TwineScript_ObjectName:"the "+e+" datatype"})}});return n}),define("datatypes/varbind",["utils","utils/operationutils","internaltypes/varref","internaltypes/twineerror"],function(e,t,n,r){var i=t.objectName;return Object.freeze({TwineScript_TypeName:"a bound variable",TwineScript_ObjectName:"a bound variable",TwineScript_Unstorable:!0,set:function(e){var t=this.varRef.set(e),n=void 0;if(n=r.containsError(t))return n},create:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"one way";return n.isPrototypeOf(e)||e.varref?Object.assign(Object.create(this),{varRef:e,bind:t}):r.create("operation","I can only \'bind\' a variable, not "+i(e)+".")}})}),define("datatypes/assignmentrequest",["utils"],function(e){var t=e.assertMustHave;return Object.freeze({assignmentRequest:!0,TwineScript_TypeName:"a \'to\' or \'into\' expression",TwineScript_ObjectName:"a \'to\' or \'into\' expression",TwineScript_Unstorable:!0,create:function(e,n,r){return t(e,["varref"]),Object.assign(Object.create(this),{dest:e,src:n,operator:r})}})}),define("twinescript/operations",["state","datatypes/assignmentrequest","utils/operationutils","internaltypes/twineerror"],function(e,t,n,r){function i(e,t,n,i){return n=n||"do this to",function(o,a){1===t.length&&(a=o);var s=void 0;return(s=r.containsError(o,a))?s:(void 0===o?"undefined":_typeof(o))!==e||(void 0===a?"undefined":_typeof(a))!==e?r.create("operation","I can only "+n+" "+e+"s, not "+y((void 0===o?"undefined":_typeof(o))!==e?o:a)+".",i):t(o,a)}}function o(e){return function(t,n){var i=void 0;return(i=r.containsError(t,n))?i:t&&t.varref?r.create("operation","I can\'t give an expression a new value."):(void 0===t?"undefined":_typeof(t))!==(void 0===n?"undefined":_typeof(n))||s(t)&&"TwineScript_TypeName"in t&&s(n)&&"TwineScript_TypeName"in n&&t.TwineScript_TypeName!==n.TwineScript_TypeName||c(t)!==c(n)?r.create("operation",y(t)+" isn\'t the same type of data as "+y(n)):e(t,n)}}function a(e){return function t(n,i){var o=void 0;if(o=r.containsError(n,i))return o;if(m=n,n.determiner){var a="all"===n.determiner;return n.array.reduce(function(e,n){var o=void 0,s=t(n,i);return(o=r.containsError(e,s))?o:a?e&&s:e||s},a)}if(i.determiner){var s="all"===i.determiner;return i.array.reduce(function(e,i){var o=void 0,a=t(n,i);return(o=r.containsError(e,a))?o:s?e&&a:e||a},s)}return e(n,i)}}var s=n.isObject,c=n.collectionType,u=n.is,l=n.isA,f=n.clone,p=n.unique,d=n.contains,h=n.matches,y=(n.typeName,n.objectName),g=void 0,m=0,v="If one of these values is a number, you may want to write a check that it \'is not 0\'. Also, if one is a string, you may want to write a check that it \'is not \\"\\" \'.";return g={create:function(e){var t=Object.create(this);return t.Identifiers={TwineScript_Identifiers:!0,get it(){return m},get time(){return Date.now()-e.timestamp}},t},elidedComparisonOperator:function(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return r.reduce(function(n,r){return"boolean"==typeof r?r:g[e](n,g[t](m,r))},"and"===e)},and:i("boolean",o(function(e,t){return e&&t}),"use \'and\' to join",v),or:i("boolean",o(function(e,t){return e||t}),"use \'or\' to join",v),not:i("boolean",function(e){return!e},"use \'not\' to invert",v),"+":o(function(e,t){if(Array.isArray(e))return[].concat(_toConsumableArray(e),_toConsumableArray(t));var n=void 0;return e instanceof Map?(n=new Map(e),t.forEach(function(e,t){return n.set(t,e)}),n):e instanceof Set?new Set([].concat(_toConsumableArray(e),_toConsumableArray(t)).filter(p).map(f)):"function"==typeof e["TwineScript_+"]?e["TwineScript_+"](t):"string|number|boolean".includes(void 0===e?"undefined":_typeof(e))?e+t:r.create("operation","I can\'t use + on "+y(e)+".")}),"-":o(function(e,t){if(Array.isArray(e))return e.filter(function(e){return!t.some(function(t){return u(e,t)})});if(e instanceof Set){var n=[].concat(_toConsumableArray(t));return new Set([].concat(_toConsumableArray(e)).filter(function(e){return!n.some(function(t){return u(e,t)})}))}return"string"==typeof e?e.split(t).join(""):"number"==typeof e?e-t:r.create("operation","I can\'t use - on "+y(e)+".")}),"*":i("number",o(function(e,t){return e*t}),"multiply"),"/":i("number",o(function(e,t){return 0===t?r.create("operation","I can\'t divide "+y(e)+" by zero."):e/t}),"divide"),"%":i("number",o(function(e,t){return 0===t?r.create("operation","I can\'t modulo "+y(e)+" by zero."):e%t}),"modulus"),"<":a(i("number",o(function(e,t){return e<t}),"do < to")),">":a(i("number",o(function(e,t){return e>t}),"do > to")),"<=":a(i("number",o(function(e,t){return e<=t}),"do <= to")),">=":a(i("number",o(function(e,t){return e>=t}),"do >= to")),is:a(u),isNot:a(function(e,t){return!g.is(e,t)}),contains:a(d),isIn:a(function(e,t){return d(t,e)}),isA:a(l),isNotA:a(function(e,t){return!l(e,t)}),typifies:a(function(e,t){return l(t,e)}),untypifies:a(function(e,t){return!l(t,e)}),matches:a(h),where:function(e,t,n){var i=void 0;return(i=r.containsError(e))?i:"boolean"!=typeof e?r.create("operation","This lambda\'s \'where\' clause must evaluate to true or false, not "+y(e)+"."):e?t:n},makeSpreader:function(e){return{value:e,spreader:!0}},makeAssignmentRequest:function(e,n,i){var o=r.containsError(e,n)\n;return o||(s(e)&&"varref"in e?t.create(e,n,i):r.create("operation","I can\'t store a new value inside "+y(e)+"."))},setIt:function(e){return r.containsError(e)?e:e.varref?(m=e.get(),e):r.create("operation","I can\'t put a new value into "+y(e)+".")},initialiseIt:function(e){m=e}},Object.freeze(g)}),define("twinescript/environ",["macros","state","utils","datatypes/colour","datatypes/hookset","datatypes/lambda","datatypes/datatype","datatypes/varbind","internaltypes/varref","internaltypes/twineerror","twinescript/operations"],function(Macros,State,Utils,Colour,HookSet,Lambda,Datatype,VarBind,VarRef,TwineError,OperationsProto){return function(section){"object"===(void 0===section?"undefined":_typeof(section))&&section||Utils.impossible("TwineScript.environ","no Section argument was given!");var Operations=OperationsProto.create(section);return section.eval=function(){try{for(var _len7=arguments.length,args=Array(_len7),_key7=0;_key7<_len7;_key7++)args[_key7]=arguments[_key7];return eval(args.join(""))}catch(e){return e}},section}}),define("internaltypes/twinenotifier",["jquery","utils"],function(e,t){var n=t.impossible,r={create:function(e){return e||n("TwineNotifier.create","called with only 1 string."),Object.assign(Object.create(r),{message:e})},render:function(){return e("<tw-notifier>").attr("message",this.message)}};return r}),define("section",["jquery","utils","utils/selectors","renderer","twinescript/environ","twinescript/operations","state","utils/operationutils","datatypes/changercommand","datatypes/hookset","datatypes/colour","internaltypes/changedescriptor","internaltypes/varscope","internaltypes/twineerror","internaltypes/twinenotifier"],function(e,t,n,r,i,o,a,s,c,u,l,f,p,d,h){function y(e,n,r){if(n&&"object"===(void 0===n?"undefined":_typeof(n))&&c.isPrototypeOf(n)){if(!this.renderInto(r.popAttr("source"),r,n)){var i=t.insensitiveName(e.attr("name"));if(["if","elseif","unless","else"].includes(i)&&(e.addClass("false"),"elseif"!==i&&(this.stack[0].lastHookShown=!1)),r.data("live")){var o=r.data("live"),a=o.delay,s=o.event;x.call(this,e,r,a,s)}return}}else{if(!1===n)return r.attr("source")&&r.data("hiddenSource",r.popAttr("source")),e.addClass("false"),void(this.stack[0].lastHookShown=!1);!0!==n&&e.replaceWith(d.create("datatype",O(n)+" cannot be attached to this hook.","Only Booleans, changer commands, and the (live:) macro can be attached to hooks.").render(e.attr("title")))}this.stack[0].lastHookShown=!0}function g(t){var n=t instanceof e?t[0]:t,r=n.nextSibling;if(r&&(r instanceof Text&&!r.textContent.trim()||"br"===(r.tagName||"").toLowerCase())){var i=g(r),o=i.whitespace,a=i.nextElem;return{whitespace:e(r).add(o),nextElem:a}}return{whitespace:e(),nextElem:e(r)}}function m(r){var i=this.eval(r.popAttr("js")||""),a=void 0,s=void 0,u=e();for(s=r;c.isPrototypeOf(i);){var p=g(s);if(a=p.whitespace,s=p.nextElem,s[0]instanceof Text&&"+"===s[0].textContent.trim()){var m=void 0,v=s,b=g(v);if(m=b.whitespace,s=b.nextElem,s.is(n.expression)){var w=this.eval(s.popAttr("js"));if(d.containsError(w)){i=w;break}var x=o["+"](i,w);e(a).add(v).add(m).remove(),i=d.containsError(x)?d.create("operation","I can\'t combine "+O(i)+" with "+O(w)+".","function"==typeof w.TwineScript_Run?"If you want to attach this changer to "+O(w)+", remove the + between them.":"Changers can only be added to other changers."):x;continue}}if(s.is(n.expression)){var S=this.eval(s.popAttr("js"));if(d.containsError(S)){i=S;break}if(S&&"object"===(void 0===S?"undefined":_typeof(S))&&"function"==typeof S.TwineScript_Attach){i=S.TwineScript_Attach(i);break}return c.isPrototypeOf(S)?void r.replaceWith(d.create("operation","Changers like ("+i.macroName+":) need to be combined using + between them.","Place the + between the changer macros, or the variables holding them. The + is absent only between a changer and its attached hook or command.").render(r.attr("title"))):void r.replaceWith(d.create("operation",O(S)+" can\'t have changers like ("+i.macroName+":) attached.","Changers placed just before hooks, links and commands will attempt to attach, but in this case it didn\'t work.").render(r.attr("title")))}if(s.is(n.hook)){a.remove(),u=s;break}i.macroName||t.impossible("Section.runExpression","changer has no macroName");var j=r.attr("title")||"("+i.macroName+": ...)";return void r.replaceWith(d.create("syntax","The ("+i.macroName+":) changer should be stored in a variable or attached to a hook.","Macros like this should appear to the left of a hook: "+j+"[Some text]").render(r.attr("title")))}u=u.length?u:g(r).nextElem.filter(n.hook);var k=void 0;if(k=d.containsError(i))k instanceof Error&&(k=d.fromError(k)),r.replaceWith(k.render(r.attr("title"),r));else if(h.isPrototypeOf(i))r.append(i.render());else if(i&&"function"==typeof i.TwineScript_Run)if(i=i.TwineScript_Run(),d.containsError(i))r.replaceWith(i.render(r.attr("title")));else if(f.isPrototypeOf(i)){if(i.data&&i.data.live)return void r.replaceWith(d.create("unimplemented","I currently can\'t attach (live:) or (event:) macros to commands - only hooks.").render(r.attr("title")));if(i.section=this,i.target=s,this.renderInto("",s,i),i.earlyExit)return"earlyexit"}else i&&t.impossible("Section.runExpression","TwineScript_Run() returned a non-ChangeDescriptor "+(void 0===i?"undefined":_typeof(i))+\': "\'+i+\'"\');else!u.length&&("string"==typeof i||"number"==typeof i||i instanceof Map||i instanceof Set||Array.isArray(i)||l.isPrototypeOf(i))||i&&"function"==typeof i.TwineScript_Print&&!c.isPrototypeOf(i)?(i=T(i),"string"!=typeof i&&t.impossible("printBuiltinValue() produced a non-string "+(void 0===i?"undefined":_typeof(i))),d.containsError(i)?(i instanceof Error&&(i=d.fromError(i)),r.replaceWith(i.render(r.attr("title")))):this.renderInto(i,r)):u.length?y.call(this,r,i,u):c.isPrototypeOf(i)||"boolean"==typeof i||t.impossible("Section.runExpression","The expression evaluated to an unknown value: "+i.toSource())}function v(e){var t=e.first()[0],n=e.parent();if(!n.length)return null;var r=n.textNodes().filter(function(e){var n=e.compareDocumentPosition(t);return 4&n&&!(8&n)});return(r=r[r.length-1])||v(n)}function b(e){var t=e.last()[0],n=e.parent();if(!n.length)return null;var r=n.textNodes().filter(function(e){var n=e.compareDocumentPosition(t);return 2&n&&!(8&n)})[0];return r||b(n)}function w(t){function n(t){return 0===e(this||t).parentsUntil("tw-collapsed").filter("tw-verbatim, tw-expression, [collapsing=false]").length}var r=v(t);e(r).parents("tw-collapsed").length||(r=null);var i=b(t);e(i).parents("tw-collapsed").length||(i=null),t.findAndFilter("br:not([data-raw])").filter(n).replaceWith(document.createTextNode(" "));var o=t.textNodes(),a=0;o.reduce(function(e,t){return n(t)?(t.textContent=t.textContent.replace(/\\s+/g," ")," "!==t.textContent[0]||e&&e.textContent&&!(e.textContent.search(/\\s$/)>-1)||(t.textContent=t.textContent.slice(1)),t):document.createTextNode("A")},r),[].concat(_toConsumableArray(o)).reverse().every(function(e){return!!n(e)&&(e.textContent.match(/^\\s*$/)?(a+=e.textContent.length,e.textContent="",!0):(e.textContent=e.textContent.replace(/\\s+$/,function(e){return a+=e.length,""}),!1))}),a>0&&i&&(o[o.length-1].textContent+=" "),t[0]&&j()&&t[0].normalize()}function x(e,r){var i=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:20,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0;a&&t.assertMustHave(a,["when"]);var s=r.data("hiddenSource")||"",c=_slicedToArray(this.stack,1),u=c[0].tempVariables,l=function t(){if(i.inDOM()){var c=a&&a.filter(i,[!0],u);if(d.containsError(c))return void c.render(e.attr("title")).replaceAll(e);if(a&&!c[0])return void setTimeout(t,o);i.renderInto(s,r,{append:"replace"}),c||r.find(n.expression+"[name=\'stop\']").length||i.inDOM()&&setTimeout(t,o)}};setTimeout(l,o)}var T=s.printBuiltinValue,O=s.objectName,S=void 0,j=function(){var t=void 0;return function(){if(void 0!==t)return t;var n=e("<p>");return n[0].normalize?(n.append(document.createTextNode("0-"),document.createTextNode("2"),document.createTextNode(""))[0].normalize(),t=1===n.contents().length):t=!1}}();return S={create:function(n){n instanceof e&&1===n.length||t.impossible("Section.create","called with no DOM element");var r=Object.assign(Object.create(this),{timestamp:Date.now(),dom:n||t.storyElement,stack:[],enchantments:[]});return r=i(r)},inDOM:function(){return e(t.storyElement).find(this.dom).length>0},evaluateTwineMarkup:function(t){var n=e("<p>");this.renderInto(t,n);var r=void 0;return(r=n.find("tw-error")).length>0?r:n.text()},renderInto:function(t,r,i){var o=this,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,s=f.create({target:r,source:t,section:this});if(i)if(c.isPrototypeOf(i)){var u=i.run(s);if(d.containsError(u))return u.render(r.attr("title")).replaceAll(r),!1}else Object.assign(s,i);if(r=s.target,this.stack.length>=50)return d.create("infinite","Printing this expression may have trapped me in an infinite loop.").render(r.attr("title")).replaceAll(r),!1;var l=function(t,i){var a=t.render();o.stack.unshift(i);var s=o;a.findAndFilter(n.hook+","+n.expression).each(function(){var t=e(this);switch(t.tag()){case n.hook:if(t.attr("hidden")&&(t.removeAttr("hidden"),t.data("hiddenSource",t.popAttr("source"))),t.attr("source")&&s.renderInto(t.popAttr("source"),t),t.find("[earlyexit]").length)return!1;break;case n.expression:if(t.attr("js")){if("earlyexit"===m.call(s,t))return a.attr("earlyexit",!0),!1;return}}}),a.length&&r instanceof e&&r.is(n.hook)&&r.parents("tw-collapsed").length>0&&w(a),a.findAndFilter(n.collapsed).each(function(){w(e(this))}),o.stack.shift()};if(!a){a=Object.create(this.stack.length?this.stack[0].tempVariables:p);var h=r&&r.tag();a.TwineScript_VariableStoreName=h===n.hook?r.attr("name")?"?"+r.attr("name"):"an unnamed hook":h===n.expression?"a "+r.attr("type")+" expression":h===n.passage?"this passage":"an unknown scope"}return Object.keys(s.loopVars).length?function(){for(var e=Object.assign({},s.loopVars),t=Math.min.apply(Math,_toConsumableArray(Object.keys(e).map(function(t){return e[t].length})));t>0;t-=1)l(s,{tempVariables:Object.keys(e).reduce(function(t,n){return t[n]=e[n].shift(),t},Object.create(a))})}():l(s,{tempVariables:a}),0===this.stack.length&&this.updateEnchantments(),s.enabled},updateEnchantments:function(){this.enchantments.forEach(function(e){e.disenchant(),e.enchantScope()})}},Object.preventExtensions(S)}),define("engine",["jquery","utils","utils/selectors","state","section","passages"],function(e,t,n,r,i,o){function a(){var t=e("<tw-passage><tw-sidebar>"),i=t.children(n.sidebar);h.permalink&&r.save&&i.append(\'<tw-icon tabindex=0 class="permalink" title="Permanent link to this passage"><a href="#\'+r.save()+\'">&sect;\');var o=e(\'<tw-icon tabindex=0 class="undo" title="Undo">&#8630;</tw-icon>\').click(function(){return d.goBack()}),a=e(\'<tw-icon tabindex=0 class="redo" title="Redo">&#8631;</tw-icon>\').click(function(){return d.goForward()});return r.pastLength<=0&&o.css("visibility","hidden"),r.futureLength<=0&&a.css("visibility","hidden"),i.append(o).append(a),t}function s(e,t){return"<tw-include type="+e+" title=\'"+u(t.get("name"))+"\'>"+t.get("source")+"</tw-include>"}function c(c){var u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.assertOnlyHas(u,["stretch","transitionIn","transitionOut","transitionTime"]);var d=o.get(c),y=t.storyElement,g=y.parent(),m=u.stretch,v=u.transitionOut,b=u.transitionIn,w=u.transitionTime;if(v=v||"instant",b=b||"dissolve",g.is(n.enchantment)){var x=g.data("enchantedProperties");x&&y.css(x.reduce(function(e,t){return e[t]="",e},{})),g=y.unwrap().parent()}d&&d instanceof Map&&d.has("source")||l("Engine.showPassage","There\'s no passage with the name \\""+c+\'"!\'),y.detach();var T=t.$(y.children(f));!m&&v&&(p(T,v,w),T.css("position","absolute"));var O=(d.get("tags")||[]).join(" "),S=a().appendTo(y).attr({tags:O});y.attr({tags:O});var j=i.create(S),k=d.get("source");k=o.getTagged("header").map(s.bind(0,"header")).join("")+(h.debug?o.getTagged("debug-header").map(s.bind(0,"debug-header")).join(""):"")+k+o.getTagged("footer").map(s.bind(0,"footer")).join("")+(h.debug?o.getTagged("debug-footer").map(s.bind(0,"debug-footer")).join(""):""),r.pastLength<=0&&(h.debug&&(k=o.getTagged("debug-startup").map(s.bind(0,"debug-startup")).join("")+k),k=o.getTagged("startup").map(s.bind(0,"startup")).join("")+k),j.renderInto(k,S,{transition:b,transitionTime:w}),g.append(y.parents().length?y.parents().last():y),scroll(0,m?S.offset().top-.05*e(window).height():y.offset().top)}var u=t.escape,l=t.impossible,f=t.passageSelector,p=t.transitionOut,d=void 0,h=Object.create(null);return d={goBack:function(e){r.rewind()&&c(r.passage,e)},goForward:function(e){r.fastForward()&&c(r.passage,e)},goToPassage:function(e,t){r.play(e),c(e,t)},showPassage:c,options:h},Object.freeze(d)}),define("debugmode",["jquery","utils","state","internaltypes/varref","utils/operationutils","engine"],function(e,t,n,r,i,o){var a=i.objectName;i.typeName;return function(){function t(t,n,r){var i=l.children(\'[data-name="\'+t+\'"]\'),o=a(n);i.length||(i=e(\'<div class="variable-row" data-name="\'+t+\'" data-value="\'+o+\'"></div>\').appendTo(l)),i.empty().append("<span class=\'variable-name "+(r?"temporary":"")+"\'>"+t+(r?"<span class=\'temporary-variable-scope\'>"+r+"</span>":"")+"</span><span class=\'variable-value\'>"+a(n)+"</span>");var s=l.children();u.text(s.length+" Variable"+(1!==s.length?"s":""))}function i(){var r=[];l.children().each(function(i,o){o=e(o);var s=o.attr("data-name"),c=o.attr("data-value");s.startsWith("TwineScript")||(s in n.variables?(r.push(s),a(n.variables[s])!==c&&t(s,n.variables[s])):o.remove())});for(var i in n.variables)i.startsWith("TwineScript")||r.includes(i)||t(i,n.variables[i])}var s=e("<tw-debugger><div class=\'variables\'></div>Turns: <select disabled></select><button class=\'show-invisibles\'>Debug View</button><button class=\'show-variables enabled\'>0 Variables</button></tw-debugger>"),c=s.find(".show-invisibles");c.click(function(){e(document.documentElement).toggleClass("debug-mode"),c.toggleClass("enabled")});var u=s.find(".show-variables"),l=s.find(".variables");u.click(function(){l[u.is(".enabled")?"attr":"removeAttr"]("hidden",""),u.toggleClass("enabled")});var f=s.find("select");f.change(function(e){var t=e.target.value,r=t-n.pastLength;0!==r&&(n[r<0?"rewind":"fastForward"](Math.abs(r)),o.showPassage(n.passage))}),n.on("forward",function(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=n.pastLength;i>1&&f.removeAttr("disabled"),r||(f.children().each(function(t,n){t>=i&&e(n).remove()}),f.append("<option value="+i+">"+(i+1)+": "+t+"</option>").val(i))}).on("back",function(){n.pastLength<=1&&f.attr("disabled"),f.find("[selected]").removeAttr("selected"),f.val(n.pastLength)}).on("load",function(e){f.empty(),f[e.length<=1?"attr":"removeAttr"]("disabled"),e.forEach(function(e,t){return f.append("<option value="+t+">"+(t+1)+": "+e.passage+"</option>")})}),n.on("forward",i).on("back",i),r.on("set",function(e,r,i){(e===n.variables||e.TwineScript_VariableStore)&&t(r,i,e===n.variables?"":e.TwineScript_VariableStoreName)}).on("delete",function(e,t){e===n.variables&&l.find(\'[data-name="\'+t+\'"]:not(.temporary)\').remove()}),e(document.body).append(s)}}),define("macrolib/values",["macros","utils","utils/operationutils","datatypes/colour","internaltypes/twineerror"],function(e,t,n,r,i){function o(e){return function(){var t=e.apply(void 0,arguments);return"number"!=typeof t||isNaN(t)?i.create("macrocall","This mathematical expression doesn\'t compute!"):t}}var a=t.realWhitespace,s=t.anyRealLetter,c=n.subset,u=n.objectName,l=e.TypeSignature,f=l.rest,p=l.zeroOrMore,d=l.Any;e.add(["text","string"],function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return n.join("")},[p(e.TypeSignature.either(String,Number,Boolean,Array))])("substring",function(e,t,n,r){return c(t,n,r)},[String,parseInt,parseInt])("lowercase",function(e,t){return t.toLowerCase()},[String])("uppercase",function(e,t){return t.toUpperCase()},[String])("lowerfirst",function(e,t){return t.replace(new RegExp(s+"+"),function(e){return e=Array.from(e),e[0].toLowerCase()+e.slice(1).join("").toLowerCase()})},[String])("upperfirst",function(e,t){return t.replace(new RegExp(s+"+"),function(e){return e=Array.from(e),e[0].toUpperCase()+e.slice(1).join("").toLowerCase()})},[String])("words",function(e,t){return t.split(new RegExp(a+"+")).filter(Boolean)},[String])(["str-repeated","string-repeated"],function(e,t,n){return t<=0?i.create("macrocall","I can\'t repeat this string "+t+" times."):0===n.length?i.create("macrocall","I can\'t repeat an empty string."):n.repeat(t)},[parseInt,String])(["str-reversed","string-reversed"],function(e,t){return[].concat(_toConsumableArray(t)).reverse().join("")},[String])(["num","number"],function(e,t){return Number.isNaN(+t)?i.create("macrocall","I couldn\'t convert "+u(t)+" to a number."):+t},[String])("rgb",function(e){for(var t,n=0;n<(arguments.length<=1?0:arguments.length-1);n+=1)if((t=arguments.length<=n+1?void 0:arguments[n+1])<0||t>255)return i.create("macrocall","RGB values must be whole numbers between 0 and 255, not "+u(t)+".");return r.create({r:arguments.length<=1?void 0:arguments[1],g:arguments.length<=2?void 0:arguments[2],b:arguments.length<=3?void 0:arguments[3]})},[parseInt,parseInt,parseInt])("rgba",function(e){for(var t,n=0;n<3;n+=1)if((t=arguments.length<=n+1?void 0:arguments[n+1])<0||t>255)return i.create("macrocall","RGB values must be whole numbers between 0 and 255, not "+u(t)+".");return(arguments.length<=4?void 0:arguments[4])<0||(arguments.length<=4?void 0:arguments[4])>1?i.create("macrocall","Alpha values must be numbers between 0 and 1 inclusive, not "+u(arguments.length<=4?void 0:arguments[4])+"."):r.create({r:arguments.length<=1?void 0:arguments[1],g:arguments.length<=2?void 0:arguments[2],b:arguments.length<=3?void 0:arguments[3],a:arguments.length<=4?void 0:arguments[4]})},[parseInt,parseInt,parseInt,Number])("hsl",function(e,t,n,o){var a=" values must be numbers between 0 and 1 inclusive, not ";return n<0||n>1?i.create("macrocall","Saturation"+a+u(n)+"."):o<0||o>1?i.create("macrocall","Lightness"+a+u(o)+"."):(t=Math.round(t)%360,t<0&&(t+=360),r.create({h:t,s:n,l:o}))},[Number,Number,Number])("hsla",function(e,t,n,o,a){var s=" values must be numbers between 0 and 1 inclusive, not ";return n<0||n>1?i.create("macrocall","Saturation"+s+u(n)+"."):o<0||o>1?i.create("macrocall","Lightness"+s+u(o)+"."):a<0||a>1?i.create("macrocall","Alpha"+s+u(o)+"."):(t=Math.round(t)%360,t<0&&(t+=360),r.create({h:t,s:n,l:o,a:a}))},[Number,Number,Number,Number]),{weekday:[function(){return["Sun","Mon","Tues","Wednes","Thurs","Fri","Satur"][(new Date).getDay()]+"day"},null],monthday:[function(){return(new Date).getDate()},null],currenttime:[function(){var e=new Date,t=e.getHours()<12;return(e.getHours()%12||12)+":"+(e.getMinutes()<10?"0":"")+e.getMinutes()+" "+(t?"A":"P")+"M"},null],currentdate:[function(){return(new Date).toDateString()},null],min:[Math.min,f(Number)],max:[Math.max,f(Number)],abs:[Math.abs,Number],sign:[Math.sign,Number],sin:[Math.sin,Number],cos:[Math.cos,Number],tan:[Math.tan,Number],floor:[Math.floor,Number],round:[Math.round,Number],ceil:[Math.ceil,Number],pow:[o(Math.pow),[Number,Number]],exp:[Math.exp,Number],sqrt:[o(Math.sqrt),Number],log:[o(Math.log),Number],log10:[o(Math.log10),Number],log2:[o(Math.log2),Number],random:[function(e,t){var n=void 0,r=void 0;return t?(n=Math.min(e,t),r=Math.max(e,t)):(n=0,r=e),r+=1,~~(Math.random()*(r-n))+n},[parseInt,e.TypeSignature.optional(parseInt)]],either:[function(){var e;return e=~~(Math.random()*arguments.length),arguments.length<=e?void 0:arguments[e]},f(d)],"":function(){var t=this;Object.keys(this).forEach(function(n){if(n){var r=t[n][0],i=t[n][1];e.add(n,function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return r.apply(void 0,n)},i)}})}}[""]()}),function(e){!function(){if(!e.requestAnimationFrame){if(e.webkitRequestAnimationFrame)return e.requestAnimationFrame=e.webkitRequestAnimationFrame,void(e.cancelAnimationFrame=e.webkitCancelAnimationFrame||e.webkitCancelRequestAnimationFrame);var t=0;e.requestAnimationFrame=function(n){var r=(new Date).getTime(),i=Math.max(0,16-(r-t)),o=e.setTimeout(function(){n(r+i)},i);return t=r+i,o},e.cancelAnimationFrame=function(e){clearTimeout(e)}}}(),"function"==typeof define&&define("requestAnimationFrame",[],function(){return e.requestAnimationFrame})}(window),define("macrolib/commands",["jquery","requestAnimationFrame","macros","utils","utils/selectors","state","passages","engine","internaltypes/twineerror","datatypes/hookset","datatypes/varbind","utils/operationutils"],function(e,t,n,r,i,o,a,s,c,u,l,f){function p(e){return"("+e+" "+s.options.ifid+") "}var d=r.storyElement,h=(r.toJSLiteral,r.unescape),y=f.printBuiltinValue,g=n.TypeSignature,m=g.Any,v=g.rest,b=g.either,w=g.optional,x=Object.assign;n.addCommand("display",function(e){if(!a.has(e))return c.create("macrocall","I can\'t (display:) the passage \'"+e+"\' because it doesn\'t exist.")},function(e,t,n){return x(e,{source:h(a.get(n).get("source"))})},[String])("print",function(){},function(e,t,n){return x(e,{source:y(n)})},[m])("go-to",function(e){if(!a.has(e))return c.create("macrocall","I can\'t (go-to:) the passage \'"+e+"\' because it doesn\'t exist.")},function(e,n,r){return t(function(){return s.goToPassage(r,{transitionOut:e.data.t8nDepart,transitionIn:e.data.t8nArrive})}),x(e,{earlyExit:!0})},[String])("undo",function(){},function(e){return o.pastLength<1?c.create("macrocall","I can\'t (undo:) on the first turn."):(t(function(){return s.goBack({transitionOut:e.data.t8nDepart,transitionIn:e.data.t8nArrive})}),x(e,{earlyExit:!0}))},[])("cycling-link",function(){if(""===(arguments.length<=0?void 0:arguments[0]))return c.create("macrocall","The first string in a (cycling-link:) can\'t be empty.");if(arguments.length<=(l.isPrototypeOf(arguments.length<=0?void 0:arguments[0])?2:1)){var e;return c.create("macrocall","I need two or more strings to cycle through, not just \'"+(e=arguments.length-1,arguments.length<=e?void 0:arguments[e])+"\'.")}},function(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=void 0;l.isPrototypeOf(r[0])&&(o=r.shift());var a=0,s=_slicedToArray(t.stack,1),u=s[0].tempVariables;e.data.clickEvent=function(t){a=(a+1)%r.length;var n=""===r[a]?"":"<tw-link>"+r[a]+"</tw-link>";if(o){var i=o.set(r[a]);if(c.containsError(i))return void t.replaceWith(i.render(r[a]))}var s=x({},e,{source:n,transitionDeferred:!1});e.section.renderInto("",null,s,u)};var f="<tw-link>"+r[0]+"</tw-link>";if(o){var p=o.set(r[a]);if(c.containsError(p))return p}return x(e,{source:f,append:"replace",transitionDeferred:!0})},[b(l,String),v(String)]),e(function(){return e(d).on("change.dropdown-macro","select",function(){var t=e(this),n=t.closest("tw-expression, tw-hook").data("dropdownEvent");n&&n(t)})}),n.addCommand("dropdown",function(e){var t;return""===(arguments.length<=1?void 0:arguments[1])||""===(t=(arguments.length<=1?0:arguments.length-1)-1+1,arguments.length<=t?void 0:arguments[t])?c.create("macrocall","The first or last strings in a (dropdown:) can\'t be empty.","Because empty strings create separators within (dropdown:)s, having them at the start or end doesn\'t make sense."):(arguments.length<=1?0:arguments.length-1)<=1?c.create("macrocall","I need two or more strings to create a (dropdown:) menu, not just "+(arguments.length<=1?0:arguments.length-1)+"."):void 0},function(e,t,n){for(var r=arguments.length,i=Array(r>3?r-3:0),o=3;o<r;o++)i[o-3]=arguments[o];var a=Math.max.apply(Math,_toConsumableArray(i.map(function(e){return[].concat(_toConsumableArray(e)).length}))),s="<select>"+i.map(function(e,t){return"<option"+(0===t?" selected":"")+(""===e?" disabled":"")+">"+(e||"\\u2500".repeat(a))+"</option>"}).join("\\n")+"</select>";e.data.dropdownEvent=function(e){var t=e.val(),r=n.set(t);if(c.containsError(r))return void e.replaceWith(r.render(t))};var u=n.set(i[0]);return c.containsError(u)?u:x(e,{source:s,append:"replace"})},[l,String,v(String)])("show",function(){},function(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return r.forEach(function(n){return n.forEach(t,function(n){var r=n.data("hiddenSource");void 0!==r&&t.renderInto("",null,x({},e,{source:r,target:n}))})}),e},[v(u)])("stop",function(){},function(){},[],!1)("load-game",function(){},function(e,n){var r=localStorage.getItem(p("Saved Game")+n);if(!r)return c.create("saving","I can\'t find a save slot named \'"+n+"\'!");o.deserialise(r),t(s.showPassage.bind(s,o.passage,!1))},[String],!1)("alert",function(){},function(e,t){window.alert(t)},[String],!1)("open-url",function(){},function(e,t){window.open(t,"")},[String],!1)("reload",function(){},function(){if(o.pastLength<1)return c.create("infinite","I mustn\'t (reload:) the page in the starting passage.");o.hasSessionStorage&&sessionStorage.removeItem("Saved Session"),window.location.reload()},[],!1)("goto-url",function(){},function(e,t){window.location.assign(t)},[String],!1),n.add("save-game",function(e,t,n){if(n=n||"",!o.hasStorage)return!1;var r=o.serialise();if(c.containsError(r))return r;if(!1===r)return!1;try{return localStorage.setItem(p("Saved Game")+t,r),localStorage.setItem(p("Saved Game Filename")+t,n),!0}catch(e){return!1}},[String,w(String)])("prompt",function(e,t,n){return window.prompt(t,n)||""},[String,String])("confirm",function(e,t){return window.confirm(t)},[String])("page-url",function(){return window.location.href},[])}),define("macrolib/datastructures",["jquery","utils/naturalsort","macros","utils/operationutils","state","engine","passages","datatypes/lambda","datatypes/assignmentrequest","internaltypes/twineerror","internaltypes/twinenotifier"],function(e,t,n,r,i,o,a,s,c,u,l){var f=r.objectName,p=(r.typeName,r.subset),d=r.collectionType,h=r.isValidDatamapName,y=r.is,g=r.unique,m=r.clone,v=n.TypeSignature,b=v.optional,w=v.rest,x=v.either,T=v.zeroOrMore,O=v.Any;n.add("set",function(e){for(var t="",n=0;n<(arguments.length<=1?0:arguments.length-1);n+=1){var r=arguments.length<=n+1?void 0:arguments[n+1];if("into"===r.operator)return u.create("macrocall","Please say \'to\' when using the (set:) macro.");var i=void 0;if(r.src&&r.src.varref){var a=r.src.get(),s=void 0;if(s=u.containsError(a))return s;i=r.dest.set(a)}else i=r.dest.set(r.src);if(u.isPrototypeOf(i))return i;o.options.debug&&(t+=(t?"; ":"")+f(r.dest)+" is now "+f(r.src))}return{TwineScript_TypeName:"a (set:) operation",TwineScript_ObjectName:"a (set:) operation",TwineScript_Unstorable:!0,TwineScript_Print:function(){return t&&l.create(t).render().html()}}},[w(c)])("put",function(e){for(var t="",n=0;n<(arguments.length<=1?0:arguments.length-1);n+=1){var r=arguments.length<=n+1?void 0:arguments[n+1];if("into"!==r.operator)return u.create("macrocall","Please say \'into\' when using the (put:) macro.");var i=r.dest.set(r.src);if(u.isPrototypeOf(i))return i;o.options.debug&&(t+=(t?"; ":"")+f(r.dest)+" is now "+f(r.src))}return{TwineScript_TypeName:"a (put:) operation",TwineScript_ObjectName:"a (put:) operation",TwineScript_Unstorable:!0,TwineScript_Print:function(){return t&&l.create(t).render().html()}}},[w(c)])("move",function(e){for(var t="",n=0;n<(arguments.length<=1?0:arguments.length-1);n+=1){var r=arguments.length<=n+1?void 0:arguments[n+1];if("into"!==r.operator)return u.create("macrocall","Please say \'into\' when using the (move:) macro.");var i=void 0,a=void 0;if(r.src&&r.src.varref){var s=r.src.get();if(a=u.containsError(s))return a;if(i=r.dest.set(s),a=u.containsError(i))return a;r.src.delete()}else if(i=r.dest.set(r.src),a=u.containsError(i))return a;o.options.debug&&(t+=(t?"; ":"")+f(r.dest)+" is now "+f(r.src))}return{TwineScript_TypeName:"a (move:) operation",TwineScript_ObjectName:"a (move:) operation",TwineScript_Unstorable:!0,TwineScript_Print:function(){return t&&l.create(t).render().html()}}},[w(c)])(["a","array"],function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return n},T(O))("range",function e(t,n,r){if(n>r)return e(t,r,n);var i=[n];for(r-=n;r-- >0;)i.push(++n);return i},[parseInt,parseInt])("subarray",function(e,t,n,r){return p(t,n,r)},[Array,parseInt,parseInt])("reversed",function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return n.reverse().map(m)},T(O))("shuffled",function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return n.reduce(function(e,t,n){var r=Math.random()*(n+1)|0;return r===n?e.push(t):(e.push(e[r]),e[r]=t),e},[]).map(m)},[O,w(O)])("sorted",function(e){for(var n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return r.sort(t("en"))},[x(Number,String),w(x(Number,String))])("rotated",function(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return t*=-1,0===t?u.create("macrocall","I can\'t rotate these values by 0 positions."):Math.abs(t)>=r.length?u.create("macrocall","I can\'t rotate these "+r.length+" values by "+t+" positions."):r.slice(t).concat(r.slice(0,t)).map(m)},[parseInt,O,w(O)])("repeated",function(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];if(t<=0)return u.create("macrocall","I can\'t repeat these values "+t+" times.");for(var o=[];t-- >0;)o.push.apply(o,r);return o.map(m)},[parseInt,w(O)])("interlaced",function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=Math.min.apply(Math,_toConsumableArray(n.map(function(e){return e.length}))),o=[],a=0;a<i;a+=1)for(var s=0;s<n.length;s+=1)o.push(m(n[s][a]));return o},[Array,w(Array)]),n.add("altered",function(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return r.map(function(n){return t.apply(e,{loop:n})})},[s.TypeSignature("via"),T(O)])("find",function(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return t.filter(e,r)},[s.TypeSignature("where"),T(O)])("all-pass",function(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=t.filter(e,r);return u.containsError(o)||o.length===r.length},[s.TypeSignature("where"),T(O)])("some-pass",function(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=t.filter(e,r);return u.containsError(o)||o.length>0},[s.TypeSignature("where"),T(O)])("none-pass",function(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=t.filter(e,r);return u.containsError(o)||0===o.length},[s.TypeSignature("where"),T(O)])("folded",function(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return"where"in t&&(r=t.filter(e,r)),u.containsError(r)||r.reduce(function(n,r){return t.apply(e,{making:n,loop:r})})},[x(s.TypeSignature("where via making"),s.TypeSignature("via making")),w(O)]),n.add("datanames",function(e,n){return Array.from(n.keys()).sort(t("en"))},[Map])("datavalues",function(e,n){return Array.from(n.entries()).sort(function(e,n){return[e[0],n[0]].sort(t("en"))[0]===e[0]?-1:1}).map(function(e){return m(e[1])})},[Map])("dataentries",function(e,n){return Array.from(n.entries()).sort(function(e,n){return[e[0],n[0]].sort(t("en"))[0]===e[0]?-1:1}).map(function(e){return new Map([["name",e[0]],["value",m(e[1])]])})},[Map])("history",function(){return i.pastPassageNames()},[])("passage",function(e,t){return m(a.get(t||i.passage))||u.create("macrocall","There\'s no passage named \'"+t+"\' in this story.")},[b(String)])("savedgames",function(){function e(e){return"("+e+" "+o.options.ifid+") "}var t=0,n=void 0,r=new Map;do{if(!i.hasStorage)break;n=localStorage.key(t),t+=1;var a=e("Saved Game");n&&n.startsWith(a)&&(n=n.slice(a.length),r.set(n,localStorage.getItem(e("Saved Game Filename")+n)))}while(n);return r},[])(["datamap","dm"],function(e){\nfor(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=void 0,o=new Map,a=n.reduce(function(e,t){var n=void 0;if(u.containsError(e))return e;if(void 0===i)i=t;else{if(n=u.containsError(h(o,i)))return n;if(o.has(i))return u.create("macrocall","You used the same data name ("+f(i)+") twice in the same (datamap:) call.");o.set(i,m(t)),i=void 0}return e},!0);return u.containsError(a)?a:void 0!==i?u.create("macrocall","This datamap has a data name without a value."):o},T(O))(["dataset","ds"],function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new Set(n.filter(g).map(m))},T(O))("count",function e(t,n){for(var r=arguments.length,i=Array(r>2?r-2:0),o=2;o<r;o++)i[o-2]=arguments[o];if(i.length>1){var a=void 0,s=i.map(function(r){return e(t,n,r)});return(a=u.containsError(s))?a:s.reduce(function(e,t){return e+t},0)}var c=i[0];switch(d(n)){case"dataset":case"datamap":return u.create("macrocall","(count:) shouldn\'t be given a datamap or dataset.","You should use the \'contains\' operator instead. For instance, write: $variable contains \'value\'.");case"string":return"string"!=typeof c?u.create("macrocall",f(n)+" can\'t contain  "+f(c)+" because it isn\'t a string."):c?n.split(c).length-1:0;case"array":return n.reduce(function(e,t){return e+y(t,c)},0);default:return u.create("macrocall",f(n)+" can\'t contain values, let alone "+f(c)+".")}},[O,w(O)])}),define("macrolib/stylechangers",["jquery","macros","utils","utils/selectors","datatypes/colour","datatypes/changercommand","datatypes/lambda","internaltypes/changedescriptor","internaltypes/twineerror"],function(e,t,n,r,i,o,a,s,c){var u=t.TypeSignature,l=u.either,f=u.wrapped,p=u.optional,d=u.Any,h=u.zeroOrMore,y=[f(Boolean,\'If you gave a number, you may instead want to check that the number is not 0. If you gave a string, you may instead want to check that the string is not "".\')];e(function(){return e(n.storyElement).on("mouseenter.hover-macro","[hover=false]",function(){var t=e(this),n=t.data("hoverChanger");t.data({mouseoutStyle:t.attr("style")||""}),s.create({target:t},n).update(),t.attr("hover",!0)}).on("mouseleave.hover-macro","[hover=true]",function(){var t=e(this),n=t.data("mouseoutStyle");t.attr("style",n).removeData("mouseoutStyle").attr("hover",!1)})});var g=["instant","dissolve","rumble","shudder","pulse","flicker","slideleft","slideright","slideup","slidedown"],m="Only the following names are recognised (capitalisation and hyphens ignored): "+g.join(", ");t.addChanger("if",function(e,t){return o.create("if",[t])},function(e,t){return e.enabled=e.enabled&&t},y)("unless",function(e,t){return o.create("unless",[!t])},function(e,t){return e.enabled=e.enabled&&t},y)("elseif",function(e,t){return"lastHookShown"in e.stack[0]?o.create("elseif",[!1===e.stack[0].lastHookShown&&!!t]):c.create("macrocall","There\'s no (if:) or something else before this to do (else-if:) with.")},function(e,t){return e.enabled=e.enabled&&t},y)("else",function(e){return"lastHookShown"in e.stack[0]?o.create("else",[!1===e.stack[0].lastHookShown]):c.create("macrocall","There\'s nothing before this to do (else:) with.")},function(e,t){return e.enabled=e.enabled&&t},null)("hidden",function(){return o.create("hidden")},function(e){return e.enabled=!1},null)("live",function(e,t){return o.create("live",[t])},function(e,t){e.enabled=!1,e.data.live={delay:t}},p(Number))("event",function(e,t){return o.create("event",[t])},function(e,t){e.enabled=!1,e.data.live={event:t}},a.TypeSignature("when"))("hook",function(e,t){return o.create("hook",[t])},function(e,t){return e.attr.push({name:t})},[String])(["for","loop"],function(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return t.loop?o.create("for",[t,r]):c.create("macrocall","The lambda provided to (for:) must refer to a temp variable, not just \'it\'.")},function(e,t,n){var r=t.filter(e.section,n),i=void 0;if(i=c.containsError(r))return i;e.loopVars[t.loop]=r||[]},[a.TypeSignature("where"),h(d)])(["transition","t8n"],function(e,t){return t=n.insensitiveName(t),-1===g.indexOf(t)?c.create("macrocall","\'"+t+"\' is not a valid (transition:)",m):o.create("transition",[t])},function(e,t){return e.transition=t,e},[String])(["transition-time","t8n-time"],function(e,t){return t<=0?c.create("macrocall","(transition-time:) should be a positive number of (milli)seconds, not "+t):o.create("transition-time",[t])},function(e,t){return e.transitionTime=t,e.data.t8nTime=t,e},[Number])(["transition-depart","t8n-depart"],function(e,t){return t=n.insensitiveName(t),-1===g.indexOf(t)?c.create("macrocall","\'"+t+"\' is not a valid transition",m):o.create("transition-depart",[t])},function(e,t){return e.data.t8nDepart=t,e},[String])(["transition-arrive","t8n-arrive"],function(e,t){return t=n.insensitiveName(t),-1===g.indexOf(t)?c.create("macrocall","\'"+t+"\' is not a valid transition",m):o.create("transition-arrive",[t])},function(e,t){return e.data.t8nArrive=t,e},[String])("font",function(e,t){return o.create("font",[t])},function(e,t){return e.styles.push({"font-family":t}),e},[String])("align",function(e,t){var n=void 0,r=t.indexOf("><");if(!/^(==+>|<=+|=+><=+|<==+>)$/.test(t))return c.create("macrocall",\'The (align:) macro requires an alignment arrow ("==>", "<==", "==><=" etc.) be provided, not "\'+t+\'"\');if(~r){var i=Math.round(r/(t.length-2)*50);n=Object.assign({"text-align":"center","max-width":"50%"},25===i?{"margin-left":"auto","margin-right":"auto"}:{"margin-left":i+"%"})}else n="<"===t[0]&&">"===t.slice(-1)?{"text-align":"justify","max-width":"50%"}:t.includes(">")?{"text-align":"right"}:{"text-align":"left"};return n.display="block",o.create("align",[n])},function(e,t){e.styles.push(t)},[String])(["text-colour","text-color","color","colour"],function(e,t){return i.isPrototypeOf(t)&&(t=t.toRGBAString(t)),o.create("text-colour",[t])},function(e,t){return e.styles.push({color:t}),e},[l(String,i)])("text-rotate",function(e,t){return o.create("text-rotate",[t])},function(t,n){return t.styles.push({display:"inline-block",transform:function(){var t=e(this).css("transform")||"";return"none"===t&&(t=""),t+" rotate("+n+"deg)"}}),t},[Number])("background",function(e,t){return i.isPrototypeOf(t)&&(t=t.toRGBAString(t)),o.create("background",[t])},function(t,r){var o=void 0;return o=i.isHexString(r)||i.isCSS3Function(r)?{"background-color":r}:{"background-size":"cover","background-image":"url("+r+")"},t.styles.push(o,{display:function(){return n.childrenProbablyInline(e(this))?"initial":"block"}}),t},[l(String,i)]).apply(void 0,_toConsumableArray(function(){var t={color:"transparent"},r=Object.assign(Object.create(null),{none:{},bold:{"font-weight":"bold"},italic:{"font-style":"italic"},underline:{"text-decoration":"underline"},strike:{"text-decoration":"line-through"},superscript:{"vertical-align":"super","font-size":".83em"},subscript:{"vertical-align":"sub","font-size":".83em"},blink:{animation:"fade-in-out 1s steps(1,end) infinite alternate"},shudder:{animation:"shudder linear 0.1s 0s infinite",display:"inline-block"},mark:{"background-color":"hsla(60, 100%, 50%, 0.6)"},condense:{"letter-spacing":"-0.08em"},expand:{"letter-spacing":"0.1em"},outline:[{"text-shadow":function(){var t=e(this).css("color");return"-1px -1px 0 "+t+", 1px -1px 0 "+t+",-1px  1px 0 "+t+", 1px  1px 0 "+t}},{color:function(){for(var t=e(this);t.length&&t[0]!==document;t=t.parent()){var n=t.css("background-color");if("transparent"!==n&&!n.match(/^\\w+a\\(.+?,\\s*0\\s*\\)$/))return n}return"#fff"}}],shadow:{"text-shadow":function(){return"0.08em 0.08em 0.08em "+e(this).css("color")}},emboss:{"text-shadow":function(){return"0.08em 0.08em 0em "+e(this).css("color")}},smear:[{"text-shadow":function(){var t=e(this).css("color");return"0em   0em 0.02em "+t+",-0.2em 0em  0.5em "+t+", 0.2em 0em  0.5em "+t}},t],blur:[{"text-shadow":function(){return"0em 0em 0.08em "+e(this).css("color")}},t],blurrier:[{"text-shadow":function(){return"0em 0em 0.2em "+e(this).css("color")},"user-select":"none"},t],mirror:{display:"inline-block",transform:"scaleX(-1)"},upsidedown:{display:"inline-block",transform:"scaleY(-1)"},fadeinout:{animation:"fade-in-out 2s ease-in-out infinite alternate"},rumble:{animation:"rumble linear 0.1s 0s infinite",display:"inline-block"}});return["text-style",function(e,t){return t=n.insensitiveName(t),t in r?o.create("text-style",[t]):c.create("macrocall","\'"+t+"\' is not a valid (text-style:)","Only the following names are recognised (capitalisation and hyphens ignored): "+Object.keys(r).join(", "))},function(e,t){return n.assertMustHave(r,[t]),e.styles="none"===t?[]:e.styles.concat(r[t]),e}]}()).concat([[String]]))("hover-style",function(e,t){var n=s.create(),r=(t.run(n),n.summary());return r+""=="styles"||r.every(function(e){return"styles"===e||"attr"===e})&&n.attr.every(function(e){return Object.keys(e)+""=="style"})?o.create("hover-style",[t]):c.create("macrocall","The changer given to (hover-style:) must only change the hook\'s style.")},function(e,t){return e.data.hoverChanger=t,e.attr.push({hover:!1}),e},[o])("css",function(e,t){return t.trim().endsWith(";")||(t+=";"),o.create("css",[t])},function(t,n){return t.attr.push({style:function(){return(e(this).attr("style")||"")+n}}),t},[String])}),define("internaltypes/enchantment",["jquery","utils","internaltypes/changedescriptor"],function(e,t,n){var r={create:function(n){return t.assertOnlyHas(n,["scope","section","attr","data","changer","functions"]),Object.assign(Object.create(this),{enchantments:e()},n)},enchantScope:function(){var r=this,i=this.attr,o=this.data,a=this.functions,s=this.section,c=this.changer,u=this.scope;u instanceof e&&(u=Array.prototype.map.call(u,function(t){return e(t)})),this.enchantments=e(),u.forEach(s,function(e){var u=e.wrapAll("<tw-enchantment>").parent();if(i&&u.attr(i),o&&u.data(o),a&&a.forEach(function(e){return e(u)}),c){var l=n.create({section:s,target:u});if(c.run(l),l.update(),e.is(t.storyElement)){var f=Object.keys(Object.assign.apply(Object,[{}].concat(_toConsumableArray(l.styles))));e.css(f.reduce(function(e,t){return e[t]="inherit",e},{})),u.data({enchantedProperties:f})}}e.is(t.storyElement)&&u.css({width:"100%",height:"100%"}),r.enchantments=r.enchantments.add(u)})},disenchant:function(){this.enchantments.each(function(){var n=e(this).contents();n.unwrap();var r=e(this).data("enchantedProperties");r&&n.has(t.storyElement)&&t.storyElement.css(r.reduce(function(e,t){return e[t]="",e},{}))})}};return Object.freeze(r)}),define("macrolib/enchantments",["jquery","utils","utils/selectors","utils/operationutils","engine","passages","macros","datatypes/hookset","datatypes/changercommand","internaltypes/enchantment","internaltypes/twineerror"],function(e,t,n,r,i,o,a,s,c,u,l){function f(n,r){return e(function(){t.storyElement.on(n.event+".enchantment","."+n.classList.replace(/ /g,"."),function(){var t=e(this),n=t.data("enchantmentEvent");n&&n(t)})}),[function(e,t){return t?c.create(r,[s.from(t)]):l.create("datatype","A string given to this ("+r+":) macro was empty.")},function(e,t){e.enabled=!1,e.transitionDeferred=!0,n.rerender&&(e.newTargets=(e.newTargets||[]).concat({target:t,append:n.rerender}));var r=_slicedToArray(e.section.stack,1),o=r[0].tempVariables,a=u.create({functions:[function(e){e.attr("class",e.children().is("tw-story, tw-sidebar, tw-passage")?n.blockClassList:n.classList)}],attr:(n.classList+"").match(/\\b(?:link|enchantment-clickblock)\\b/)?{tabIndex:"0"}:{},data:{enchantmentEvent:function(){if(n.once){var t=e.section.enchantments.indexOf(a);e.section.enchantments.splice(t,1),a.disenchant()}if(n.goto)return void i.goToPassage(n.goto,{transitionOut:n.transitionOut,transitionIn:n.transitionIn});e.section.renderInto(e.source,null,Object.assign({},e,{enabled:!0,transitionDeferred:!1}),o)}},scope:t,section:e.section});return e.section.enchantments.push(a),a.enchantScope(),e},h(s,String)]}var p=r.is,d=a.TypeSignature,h=d.either,y=d.rest;a.addCommand("enchant",function(e,t){var n=t.summary();if(n.includes("newTargets")||n.includes("target"))return l.create("macrocall","The changer given to (enchant:) can\'t include a revision command like (replace:) or (append:).")},function(e,t,n){var r=u.create({scope:s.from(t),changer:n,section:e});return e.enchantments.push(r),r.enchantScope(),""},[h(s,String),c],!1);var g=["replace","append","prepend"];g.forEach(function(t){a.addChanger(t,function(e){for(var n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return r.every(Boolean)?c.create(t,r.map(s.from)):l.create("datatype","A string given to this ("+t+":) macro was empty.")},function(n){for(var r,i=arguments.length,o=Array(i>1?i-1:0),a=1;a<i;a++)o[a-1]=arguments[a];return e(n.target).parents().filter("tw-collapsed").length>0||(n.attr=[].concat(_toConsumableArray(n.attr),[{collapsing:!1}])),n.newTargets=n.newTargets||[],(r=n.newTargets).push.apply(r,_toConsumableArray(o.filter(function(e){return!n.newTargets.some(function(n){var r=n.target,i=n.append;return p(e,r)&&t===i})}).map(function(e){return{target:e,append:t,before:!0}}))),n},y(h(s,String)))}),e(function(){t.storyElement.on("click.enchantment",function(){Array.from(e(this).parents(".enchantment-clickblock")).sort(function(e,t){return 8&e.compareDocumentPosition(t)?1:-1}).forEach(function(t){var n=e(t).data("enchantmentEvent");n&&n()})})});var m=[{name:"click",enchantDesc:{event:"click",once:!0,rerender:"",classList:"link enchantment-link",blockClassList:"enchantment-clickblock"}},{name:"mouseover",enchantDesc:{event:"mouseenter",once:!0,rerender:"",classList:"enchantment-mouseover"}},{name:"mouseout",enchantDesc:{event:"mouseleave",once:!0,rerender:"",classList:"enchantment-mouseout"}}];m.forEach(function(e){return a.addChanger.apply(a,[e.name].concat(_toConsumableArray(f(e.enchantDesc,e.name))))}),g.forEach(function(e){m.forEach(function(t){var n=Object.assign({},t.enchantDesc,{rerender:e}),r=t.name+"-"+e;a.addChanger.apply(a,[r].concat(_toConsumableArray(f(n,r))))})}),m.forEach(function(e){var t=e.name+"-goto";a.addCommand(t,function(e,n){return e&&n?o.has(n)?void 0:l.create("macrocall","I can\'t ("+t+":) the passage \'"+n+"\' because it doesn\'t exist."):l.create("datatype","A string given to this ("+t+":) macro was empty.")},function(n,r,i,o){var a=f(Object.assign({},e.enchantDesc,{goto:o,transitionOut:n.data.t8nDepart,transitionIn:n.data.t8nArrive}),t);return(0,_slicedToArray(a,2)[1])({section:r},s.from(i)),Object.assign(n,{source:""})},[h(s,String),String])})}),define("macrolib/links",["jquery","macros","utils","utils/selectors","state","passages","engine","datatypes/changercommand","datatypes/hookset","internaltypes/twineerror"],function(e,t,n,r,i,o,a,s,c,u){var l=t.TypeSignature,f=l.optional,p=l.rest,d=["Links can\'t have empty strings for their displayed text.","In the link syntax, a link\'s displayed text is inside the [[ and ]], and on the non-pointy side of the -> or <- arrow if it\'s there."],h=Object.assign;e(function(){return e(n.storyElement).on("click.passage-link",r.internalLink,function(){var t=e(this),n=t.closest("tw-expression"),r=t.closest("tw-expression, tw-hook").data("clickEvent");if(r){if(t.find("tw-error").length>0)return;return void r(t)}var i=n.data("linkPassageName"),o=n.data("t8nDepart"),s=n.data("t8nArrive"),c=n.data("t8nTime");return n.find("tw-enchantment").each(function(t,n){o=e(n).data("t8nDepart")||o,s=e(n).data("t8nArrive")||s,c=void 0!==e(n).data("t8nTime")?e(n).data("t8nTime"):c}),i?void a.goToPassage(i,{transitionOut:o,transitionIn:s,transitionTime:c}):t.is("[undo]")?void a.goBack({transitionOut:o,transitionIn:s,transitionTime:c}):void 0})}),[["link","link-replace"],["link-reveal"],["link-repeat"]].forEach(function(e){return t.addChanger(e,function(t,n){return n?s.create(e[0],[n]):u.create("macrocall",d[0])},function(t,n){t.innerSource||(t.innerSource=t.source),t.source="<tw-link tabindex=0>"+n+"</tw-link>",t.append="link"===e[0]?"replace":"append",t.transitionDeferred=!0;var r=_slicedToArray(t.section.stack,1),i=r[0].tempVariables;t.data.clickEvent=function(n){"link-reveal"===e[0]&&n.contents().unwrap(),t.source=t.innerSource+"",t.transitionDeferred=!1,t.section.renderInto("",null,t,i)}},[String])}),t.addCommand(["link-goto"],function(e,t){if(!e)return u.create.apply(u,["macrocall"].concat(d));t||(t=e)},function(t,r,a,s){var c=r.evaluateTwineMarkup(n.unescape(s||a)),u=void 0;c instanceof e&&(u=c),o.has(c)||(u=\'<tw-broken-link passage-name="\'+n.escape(c)+\'">\'+a+"</tw-broken-link>");var l=i.passageNameVisited(c);return u=u||"<tw-link tabindex=0 "+(l>0?\'class="visited" \':"")+\'">\'+a+"</tw-link>",t.data.linkPassageName=c,h(t,{source:u,transitionDeferred:!0})},[String,f(String)])("link-undo",function(e){if(!e)return u.create("macrocall",d[0])},function(e,t,n){return i.pastLength<1?u.create("macrocall","I can\'t use (link-undo:) on the first turn."):h(e,{source:"<tw-link tabindex=0 undo>"+n+"</tw-link>",transitionDeferred:!0})},[String])("link-show",function(e){if(!e)return u.create("macrocall",d[0])},function(e,t,n){for(var r=arguments.length,i=Array(r>3?r-3:0),o=3;o<r;o++)i[o-3]=arguments[o];var a=_slicedToArray(t.stack,1),s=a[0].tempVariables;return e.data.clickEvent=function(n){n.contents().unwrap(),i.forEach(function(n){return n.forEach(t,function(n){var r=n.data("hiddenSource");void 0!==r&&t.renderInto("",null,h({},e,{source:r,target:n,transitionDeferred:!1}),s)})})},h(e,{source:"<tw-link tabindex=0>"+n+"</tw-link>",transitionDeferred:!0})},[String,p(c)]),t.addChanger(["link-reveal-goto"],function(t,r,i){if(!r)return u.create.apply(u,["macrocall"].concat(d));i||(i=r);var o=t.evaluateTwineMarkup(n.unescape(i||r));return o instanceof e?o.data("TwineError"):s.create("link-reveal-goto",[r||i,o])},function(e,t,r){if(!o.has(r))return void(e.source=\'<tw-broken-link passage-name="\'+n.escape(r)+\'">\'+t+"</tw-broken-link>");e.innerSource||(e.innerSource=e.source);var s=i.passageNameVisited(r);e.source="<tw-link tabindex=0 "+(s>0?\'class="visited" \':"")+">"+t+"</tw-link>",e.append="append",e.transitionDeferred=!0;var c=_slicedToArray(e.section.stack,1),u=c[0].tempVariables;e.data.clickEvent=function(t){e.source=e.innerSource,t.contents().unwrap(),e.transitionDeferred=!1,e.section.renderInto(e.innerSource+"",null,e,u),e.target.find("[earlyexit]").length||a.goToPassage(r,{transitionOut:e.data.t8nDepart,transitionIn:e.data.t8nArrive})}},[String,f(String)])}),define("repl",["utils","markup","twinescript/compiler","twinescript/environ"],function(e,t,n,r){window.REPL=function(e){var i=n(t.lex("(print:"+e+")"));console.log(i);var o=r({}).eval(i);return o.TwineScript_Print?o.TwineScript_Print():o},window.LEX=function(e){var n=t.lex(e);return 1===n.length?n[0]:n}}),require.config({paths:{jquery:"../node_modules/jquery/dist/jquery",almond:"../node_modules/almond/almond","es6-shim":"../node_modules/es6-shim/es6-shim",requestAnimationFrame:"../node_modules/requestanimationframe/app/requestAnimationFrame",jqueryplugins:"utils/jqueryplugins",markup:"./markup/markup",lexer:"./markup/lexer",patterns:"./markup/patterns"},deps:["jquery","es6-shim","jqueryplugins"]}),require(["jquery","debugmode","renderer","state","engine","passages","utils/selectors","macros","macrolib/values","macrolib/commands","macrolib/datastructures","macrolib/stylechangers","macrolib/enchantments","macrolib/links","repl"],function($,DebugMode,Renderer,State,Engine,Passages,Selectors){function _eval(text){return eval(text+"")}var _installHandlers=function(){$(document.documentElement).on("keydown",function(e){13===e.which&&"0"===e.target.getAttribute("tabindex")&&$(e.target).trigger("click")}),Engine.options.debug&&DebugMode(),_installHandlers=null};!function(e){window.onerror=function(t,n,r,i,o){var a=o&&o.stack&&"\\n"+o.stack.replace(/\\([^\\)]+\\)/g,"")+"\\n"||"("+t+")\\n";alert("Sorry to interrupt, but this page\'s code has got itself in a mess. "+a+"(This is probably due to a bug in the Harlowe game engine.)"),window.onerror=e,"function"==typeof e&&e.apply(void 0,arguments)}}(window.onerror),$(function(){var e=$(Selectors.storyData);if(0!==e.length){var t=e.attr("options");t&&t.split(/\\s/).forEach(function(e){Renderer.options[e]=Engine.options[e]=!0});var n=e.attr("startnode");Renderer.options.ifid=Engine.options.ifid=e.attr("ifid"),n||(n=[].reduce.call($(Selectors.passageData),function(e,t){var n=t.getAttribute("pid");return n<e?n:e},1/0)),n=$(Selectors.passageData+"[pid="+n+"]").attr("name"),_installHandlers(),$(Selectors.script).each(function(e){try{_eval($(this).html())}catch(t){alert("There is a problem with this story\'s script (#"+(e+1)+"):\\n\\n"+t.message)}}),$(Selectors.stylesheet).each(function(e){$(document.head).append(\'<style data-title="Story stylesheet \'+(e+1)+\'">\'+$(this).html())});var r=State.hasSessionStorage&&sessionStorage.getItem("Saved Session");if(r)try{return State.deserialise(r),void Engine.showPassage(State.passage,!1)}catch(e){}Engine.goToPassage(n)}})}),define("harlowe",function(){}),require(["harlowe"])}();\n</script>\n\n\n</body>\n</html>\n',
	setup: function() {
		"use strict";
		function _toConsumableArray(e) {
			if (Array.isArray(e)) {
				for (var r = 0, n = Array(e.length); r < e.length; r++) n[r] = e[r];
				return n;
			}
			return Array.from(e);
		}
		var _typeof =
			"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
				? function(e) {
						return typeof e;
				  }
				: function(e) {
						return e &&
							"function" == typeof Symbol &&
							e.constructor === Symbol &&
							e !== Symbol.prototype
							? "symbol"
							: typeof e;
				  };
		(function() {
			function e() {
				for (var e = 0; e < arguments.length; e++)
					for (var r in arguments[e]) this[r] = arguments[e][r];
			}
			function r(e, r) {
				e.childAt = e.childAt || {};
				for (var n = r.start; n < r.end; n += 1) e.childAt[n] = r;
			}
			function n(e, r, n, t) {
				return !(
					(e.canFollow && !(e.canFollow.indexOf(n && n.type) > -1)) ||
					(e.cannotFollow &&
						(-1 !== e.cannotFollow.indexOf(n && n.type) ||
							(e.cannotFollow.indexOf("text") > -1 && t))) ||
					(e.peek &&
						e.peek.toLowerCase() !== r.slice(0, e.peek.length).toLowerCase())
				);
			}
			function t(e) {
				for (
					var r = e.innerText, t = [], o = 0, s = o, u = r.length, m = null;
					o < u;

				) {
					for (
						var l = r.slice(o),
							g = (t.length ? t[0] : e).innerMode,
							c = 0,
							p = g.length;
						c < p;
						c += 1
					) {
						var d = i[g[c]];
						if (n(d, l, m, s < o) && d.pattern.test(l)) {
							var h = d.pattern.exec(l),
								f = d.fn(h),
								y = !1,
								k = 0;
							if (f.matches) {
								for (; k < t.length; k += 1) {
									var b = t[k].type;
									if (b in f.matches) {
										y = !0;
										break;
									}
									0 === b.indexOf("verbatim") && (b = "verbatimOpener"),
										f.cannotCross &&
											f.cannotCross.indexOf(b) > -1 &&
											(k = t.length - 1);
								}
								if (k >= t.length && !f.isFront) continue;
							}
							s < o &&
								e.addChild({ type: "text", text: r.slice(s, o), innerMode: g }),
								(m = e.addChild(f)),
								(o += m.text.length),
								(s = o),
								y && (a(e, m, t[k]), (t = t.slice(k + 1))),
								m.isFrontToken() && t.unshift(m);
							break;
						}
					}
					c === p && ((o += 1), null === m && (m = { type: "text" }));
				}
				for (
					s < o &&
					e.addChild({
						type: "text",
						text: r.slice(s, o),
						innerMode: (t.length ? t[0] : e).innerMode
					});
					t.length > 0;

				)
					t.shift().demote();
				return e;
			}
			function a(e, n, t) {
				var a = e.children.indexOf(n),
					o = e.children.indexOf(t);
				(n.children = e.children.splice(o + 1, a - (o + 1))),
					n.children.forEach(function(e) {
						r(n, e);
					}),
					(n.type = n.matches[t.type]),
					(n.innerText = "");
				for (var i = 0, s = n.children.length; i < s; i++)
					n.innerText += n.children[i].text;
				(n.start = t.start),
					(n.text = t.text + n.innerText + n.text),
					Object.keys(t).forEach(function(e) {
						Object.hasOwnProperty.call(n, e) || (n[e] = t[e]);
					}),
					n.isFront && (n.isFront = !1),
					e.children.splice(o, 1),
					r(e, n);
			}
			var o = void 0,
				i = {};
			(e.prototype = {
				constructor: e,
				addChild: function(n) {
					var a = this.lastChildEnd(),
						o = new e(
							{ start: a, end: n.text && a + n.text.length, children: [] },
							n
						);
					return o.innerText && t(o), this.children.push(o), r(this, o), o;
				},
				lastChild: function() {
					return this.children
						? this.children[this.children.length - 1] || null
						: null;
				},
				lastChildEnd: function() {
					var e = this.lastChild();
					return e
						? e.end
						: this.start + Math.max(0, this.text.indexOf(this.innerText));
				},
				tokenAt: function(e) {
					if (e < this.start || e >= this.end) return null;
					if (this.childAt)
						return (this.childAt[e] && this.childAt[e].tokenAt(e)) || this;
					if (this.children.length)
						for (var r = 0; r < this.children.length; r += 1) {
							var n = this.children[r].tokenAt(e);
							if (n) return n;
						}
					return this;
				},
				pathAt: function(e) {
					if (e < this.start || e >= this.end) return [];
					if (this.childAt)
						return (
							(this.childAt[e] && this.childAt[e].pathAt(e)) ||
							[]
						).concat(this);
					var r = [];
					if (this.children.length)
						for (var n = 0; n < this.children.length; n += 1) {
							var t = this.children[n].pathAt(e);
							if (t.length) {
								r.concat(t);
								break;
							}
						}
					return r.concat(this);
				},
				nearestTokenAt: function(e) {
					return e < this.start || e >= this.end
						? null
						: this.children
							? this.children.reduce(function(r, n) {
									return r || (e >= n.start && e < n.end ? n : null);
							  }, null)
							: this;
				},
				everyLeaf: function(e) {
					return this.children && 0 !== this.children.length
						? this.children.reduce(function(r, n) {
								return n.everyLeaf(e) && r;
						  }, !0)
						: !!e(this);
				},
				isWhitespace: function() {
					return this.everyLeaf(function(e) {
						return "whitespace" === e.type || !e.text.trim();
					});
				},
				isFrontToken: function() {
					return this.isFront;
				},
				isBackToken: function() {
					return "matches" in this;
				},
				demote: function() {
					this.type = "text";
				},
				error: function(e) {
					(this.type = "error"), (this.message = e);
				},
				toString: function() {
					var e = this.type + "(" + this.start + "\u2192" + this.end + ")";
					return (
						this.children &&
							this.children.length > 0 &&
							(e += "[" + this.children + "]"),
						e
					);
				}
			}),
				(o = {
					lex: function(r, n) {
						return t(
							new e({
								type: "root",
								start: n || 0,
								end: r.length,
								text: r,
								innerText: r,
								children: [],
								childAt: {},
								innerMode: o.modes.start
							})
						);
					},
					rules: i,
					modes: {}
				}),
				"object" ===
				("undefined" == typeof module ? "undefined" : _typeof(module))
					? (module.exports = o)
					: "function" == typeof define && define.amd
						? define("lexer", [], function() {
								return o;
						  })
						: this && this.loaded
							? (this.modules || (this.modules = {}), (this.modules.Lexer = o))
							: (this.TwineLexer = o);
		}.call(eval("this") || ("undefined" != typeof global ? global : window)),
			function() {
				function e(r) {
					return r && "object" === (void 0 === r ? "undefined" : _typeof(r))
						? (Object.keys(r).forEach(function(n) {
								r[n] = e(r[n]);
						  }),
						  r)
						: (r + "").replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
				}
				function r(e) {
					return function() {
						return "(" + e + Array.apply(0, arguments).join("|") + ")";
					};
				}
				var n = void 0,
					t = r("?:"),
					a = r("?!"),
					o = r("?="),
					i =
						"[ \\f\\t\\v\\u00a0\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000]*",
					s = i.replace("*", "+"),
					u = "\\b",
					m =
						"[\\w\\-\\u00c0-\\u00de\\u00df-\\u00ff\\u0150\\u0170\\u0151\\u0171\\uD800-\\uDFFF]",
					l = m.replace("\\-", ""),
					g = t("\\n", "$"),
					c = "(" + t("\\\\\\n\\\\?|\\n\\\\", "[^\\n]") + "+)",
					p = i + "(\\*+)" + s + c + g,
					d = i + "((?:0\\.)+)" + s + c + g,
					h = i + "-{3,}" + i + g,
					f = i + "(#{1,6})" + i + c + g,
					y = i + "(==+>|<=+|=+><=+|<==+>)" + i + g,
					k = i + "(=+\\|+|\\|+=+|=+\\|+=+|\\|=+\\|)" + i + g,
					b = {
						opener: "\\[\\[(?!\\[)",
						text:
							"(" +
							(function() {
								return (
									"[^" +
									Array.apply(0, arguments)
										.map(e)
										.join("") +
									"]*"
								);
							})("]") +
							")",
						rightSeparator: t("\\->", "\\|"),
						leftSeparator: "<\\-",
						closer: "\\]\\]",
						legacySeparator: "\\|",
						legacyText: "(" + t("[^\\|\\]]", "\\]" + a("\\]")) + "+)"
					},
					S = l + "*" + l.replace("\\w", "a-zA-Z") + l + "*",
					N = "\\$(" + S + ")",
					C = "'s" + s + "(" + S + ")",
					T = "(" + S + ")" + s + "of" + u + a("it\\b"),
					v = "'s" + s,
					x = t("it", "time") + u,
					A = "its" + s + "(" + S + ")",
					w = "its" + s,
					O = "(" + S + ")" + s + "of" + s + "it" + u,
					F = "of\\b" + s + "it" + u,
					L = {
						opener: "\\(",
						name: "(" + t(m + "+", N) + "):" + a("\\/"),
						closer: "\\)"
					},
					H = t(
						"=<",
						"=>",
						"[gl]te?\\b",
						"n?eq\\b",
						"isnot\\b",
						"are\\b",
						"x\\b",
						"isa\\b",
						"or" + s + "a" + u
					),
					P = {
						name: "[a-zA-Z][\\w\\-]*",
						attrs: "(?:\"[^\"]*\"|'[^']*'|[^'\">])*?"
					},
					B = "\\|(" + m + "+)(>|\\))",
					j = "(<|\\()(" + m + "+)\\|",
					M = "_(" + S + ")" + u,
					I = "\\b(\\d+(?:\\.\\d+)?(?:[eE][+\\-]?\\d+)?)" + a("m?s") + u;
				(b.main =
					b.opener +
					t(
						b.text + b.rightSeparator,
						b.text.replace("*", "*?") + b.leftSeparator
					) +
					b.text),
					(n = {
						upperLetter: "[A-Z\\u00c0-\\u00de\\u0150\\u0170]",
						lowerLetter: "[a-z0-9_\\-\\u00df-\\u00ff\\u0151\\u0171]",
						anyLetter: m,
						anyLetterStrict: l,
						whitespace: s,
						escapedLine: "\\\\\\n\\\\?|\\n\\\\",
						br: "\\n(?!\\\\)",
						commentFront: "\x3c!--",
						commentBack: "--\x3e",
						tag: "<\\/?" + P.name + P.attrs + ">",
						tagPeek: "<",
						scriptStyleTag:
							"<(" + t("script", "style") + ")" + P.attrs + ">[^]*?<\\/\\1>",
						scriptStyleTagOpener: "<",
						url:
							"(" +
							t("https?", "mailto", "javascript", "ftp", "data") +
							":\\/\\/[^\\s<]+[^<.,:;\"')\\]\\s])",
						bullet: "\\*",
						hr: h,
						heading: f,
						align: y,
						column: k,
						bulleted: p,
						numbered: d,
						strikeOpener: e("~~"),
						italicOpener: e("//"),
						boldOpener: e("''"),
						supOpener: e("^^"),
						strongFront: e("**"),
						strongBack: e("**"),
						emFront: e("*"),
						emBack: e("*"),
						verbatimOpener: "`+",
						collapsedFront: "{",
						collapsedBack: "}",
						hookAppendedFront: "\\[",
						hookPrependedFront: B + "\\[",
						hookFront: "\\[",
						hookBack: "\\]" + a(j),
						hookAppendedBack: "\\]" + j,
						passageLink: b.main + b.closer,
						passageLinkPeek: "[[",
						legacyLink:
							b.opener +
							b.legacyText +
							b.legacySeparator +
							b.legacyText +
							b.closer,
						legacyLinkPeek: "[[",
						simpleLink: b.opener + b.legacyText + b.closer,
						simpleLinkPeek: "[[",
						macroFront: L.opener + o(L.name),
						macroFrontPeek: "(",
						macroName: L.name,
						groupingFront: "\\(" + a(L.name),
						groupingFrontPeek: "(",
						groupingBack: "\\)",
						twine1Macro:
							"<<[^>\\s]+\\s*(?:\\\\.|'(?:[^'\\\\]*\\\\.)*[^'\\\\]*'|\"(?:[^\"\\\\]*\\\\.)*[^\"\\\\]*\"|[^'\"\\\\>]|>(?!>))*>>",
						twine1MacroPeek: "<<",
						property: C,
						propertyPeek: "'s",
						belongingProperty: T,
						possessiveOperator: v,
						belongingOperator: "of\\b",
						belongingOperatorPeek: "of",
						itsOperator: w,
						itsOperatorPeek: "its",
						belongingItOperator: F,
						belongingItOperatorPeek: "of",
						variable: N,
						variablePeek: "$",
						tempVariable: M,
						tempVariablePeek: "_",
						hookRef: "\\?(" + m + "+)\\b",
						hookRefPeek: "?",
						cssTime: "(\\d+\\.?\\d*|\\d*\\.?\\d+)(m?s)\\b",
						colour: t(
							t(
								"Red",
								"Orange",
								"Yellow",
								"Lime",
								"Green",
								"Cyan",
								"Aqua",
								"Blue",
								"Navy",
								"Purple",
								"Fuchsia",
								"Magenta",
								"White",
								"Gray",
								"Grey",
								"Black"
							),
							"#[\\dA-Fa-f]{3}(?:[\\dA-Fa-f]{3})?"
						),
						datatype: t(
							"array",
							"boolean",
							"changer",
							"colour",
							"color",
							"command",
							"dm",
							"datamap",
							"ds",
							"dataset",
							"number",
							"num",
							"string",
							"str"
						),
						number: I,
						boolean: t("true", "false") + u,
						identifier: x,
						itsProperty: A,
						itsPropertyPeek: "its",
						belongingItProperty: O,
						escapedStringChar: "\\\\[^\\n]",
						singleStringOpener: "'",
						doubleStringOpener: '"',
						is:
							"is" +
							a(s + "not" + u, s + "an?" + u, s + "in" + u, s + "<", s + ">") +
							u,
						isNot: "is" + s + "not" + a(s + "a" + u) + u,
						isA: "is" + s + "an?" + u,
						isNotA: "is" + s + "not" + s + "an?" + u,
						matches: "matches" + s,
						and: "and\\b",
						or: "or\\b",
						not: "not\\b",
						inequality:
							"((?:is(?:" +
							s +
							"not)?" +
							i +
							")*)(" +
							t("<(?!=)", "<=", ">(?!=)", ">=") +
							")",
						isIn: "is" + s + "in" + u,
						contains: "contains\\b",
						addition: e("+") + a("="),
						subtraction: e("-") + a("="),
						multiplication: e("*") + a("="),
						division: t("/", "%") + a("="),
						comma: ",",
						spread: "\\.\\.\\." + a("\\."),
						to: t("to\\b", "="),
						into: "into\\b",
						making: "making\\b",
						where: "where\\b",
						when: "when\\b",
						via: "via\\b",
						with: "with\\b",
						each: "each\\b",
						augmentedAssign: t("\\+", "\\-", "\\*", "\\/", "%") + "=",
						bind: "bind\\b",
						incorrectOperator: H
					}),
					"object" ===
					("undefined" == typeof module ? "undefined" : _typeof(module))
						? (module.exports = n)
						: "function" == typeof define && define.amd
							? define("patterns", [], function() {
									return n;
							  })
							: this && this.loaded
								? (this.modules || (this.modules = {}),
								  (this.modules.Patterns = n))
								: (this.Patterns = n);
			}.call(eval("this") || ("undefined" != typeof global ? global : window)),
			function() {
				function e(e) {
					function r(e) {
						return (
							(e = e || "innerText"),
							function(r) {
								var n = r.reduceRight(function(e, r, n) {
										return e || (n ? r : "");
									}, ""),
									t = {};
								return (t[e] = n), t;
							}
						);
					}
					function t(e, r) {
						var n = {};
						return (
							(n[e] = r),
							function() {
								return {
									isFront: !0,
									matches: n,
									cannotCross: ["verbatimOpener"]
								};
							}
						);
					}
					function a(e, r) {
						return (
							Object.keys(r).forEach(function(n) {
								var t = r[n].fn;
								r[n].fn = function(r) {
									var a = t(r);
									return (
										a.text || (a.text = r[0]),
										a.type || (a.type = n),
										a.innerMode || (a.innerMode = e),
										a
									);
								};
							}),
							r
						);
					}
					var o = Object.bind(0, null),
						i = [],
						s = [],
						u = a(i, {
							hr: { fn: o },
							bulleted: {
								fn: function(e) {
									return { depth: e[1].length, innerText: e[2] };
								}
							},
							numbered: {
								fn: function(e) {
									return { depth: e[1].length / 2, innerText: e[2] };
								}
							},
							heading: {
								fn: function(e) {
									return { depth: e[1].length, innerText: e[2] };
								}
							},
							align: {
								fn: function(e) {
									var r = void 0,
										n = e[1],
										t = n.indexOf("><");
									return (
										~t
											? 25 === (r = Math.round((t / (n.length - 2)) * 50)) &&
											  (r = "center")
											: "<" === n[0] && ">" === n.slice(-1)
												? (r = "justify")
												: n.indexOf(">") > -1
													? (r = "right")
													: n.indexOf("<") > -1 && (r = "left"),
										{ align: r }
									);
								}
							},
							column: {
								fn: function(e) {
									var r = void 0,
										n = e[1],
										t = n.indexOf("|");
									return (
										t && t < n.length - 1
											? (r = "center")
											: "|" === n[0] && "|" === n.slice(-1)
												? (r = "none")
												: t === n.length - 1
													? (r = "right")
													: t || (r = "left"),
										{
											column: r,
											width: /\|+/.exec(n)[0].length,
											marginLeft: /^=*/.exec(n)[0].length,
											marginRight: /=*$/.exec(n)[0].length
										}
									);
								}
							}
						});
					Object.keys(u).forEach(function(e) {
						(u[e].canFollow = [
							null,
							"br",
							"hr",
							"bulleted",
							"numbered",
							"heading",
							"align"
						]),
							(u[e].cannotFollow = ["text"]);
					});
					var m = a(i, {
							twine1Macro: {
								fn: function() {
									return {
										type: "error",
										message:
											"Harlowe macros use a different syntax to Twine 1 and SugarCube macros."
									};
								}
							},
							emBack: {
								fn: function() {
									return {
										matches: { emFront: "em" },
										cannotCross: ["verbatimOpener"]
									};
								}
							},
							strongBack: {
								fn: function() {
									return {
										matches: { strongFront: "strong" },
										cannotCross: ["verbatimOpener"]
									};
								}
							},
							strongFront: {
								fn: function() {
									return { isFront: !0 };
								}
							},
							emFront: {
								fn: function() {
									return { isFront: !0 };
								}
							},
							boldOpener: { fn: t("boldOpener", "bold") },
							italicOpener: { fn: t("italicOpener", "italic") },
							strikeOpener: { fn: t("strikeOpener", "strike") },
							supOpener: { fn: t("supOpener", "sup") },
							commentFront: {
								fn: function() {
									return { isFront: !0 };
								}
							},
							commentBack: {
								fn: function() {
									return { matches: { commentFront: "comment" } };
								}
							},
							scriptStyleTag: { fn: o },
							tag: { fn: o },
							url: { fn: o },
							hookPrependedFront: {
								fn: function(e) {
									return {
										name: e[1],
										hidden: ")" === e[2],
										isFront: !0,
										tagPosition: "prepended"
									};
								}
							},
							hookFront: {
								fn: function() {
									return { isFront: !0 };
								}
							},
							hookBack: {
								fn: function() {
									return {
										matches: { hookPrependedFront: "hook", hookFront: "hook" },
										cannotCross: ["verbatimOpener"]
									};
								}
							},
							hookAppendedBack: {
								fn: function(e) {
									return {
										name: e[2],
										hidden: "(" === e[1],
										tagPosition: "appended",
										matches: { hookFront: "hook" },
										cannotCross: ["verbatimOpener"]
									};
								}
							},
							verbatimOpener: {
								fn: function(e) {
									var r = e[0].length,
										n = {};
									return (
										(n["verbatim" + r] = "verbatim"),
										{ type: "verbatim" + r, isFront: !0, matches: n }
									);
								}
							},
							collapsedFront: {
								fn: function() {
									return { isFront: !0 };
								}
							},
							collapsedBack: {
								fn: function() {
									return {
										matches: { collapsedFront: "collapsed" },
										cannotCross: ["verbatimOpener"]
									};
								}
							},
							escapedLine: { fn: o },
							legacyLink: {
								fn: function(e) {
									return { type: "twineLink", innerText: e[1], passage: e[2] };
								}
							},
							br: { fn: o }
						}),
						l = a(s, {
							macroFront: {
								fn: function(e) {
									return { isFront: !0, name: e[1] };
								}
							},
							groupingBack: {
								fn: function() {
									return {
										matches: { groupingFront: "grouping", macroFront: "macro" },
										cannotCross: ["singleStringOpener", "doubleStringOpener"]
									};
								}
							},
							passageLink: {
								fn: function(e) {
									var r = e[1] || "",
										n = e[2] || "",
										t = e[3] || "";
									return {
										type: "twineLink",
										innerText: n ? t : r,
										passage: r ? t : n
									};
								}
							},
							simpleLink: {
								fn: function(e) {
									return {
										type: "twineLink",
										innerText: e[1] || "",
										passage: e[1] || ""
									};
								}
							},
							variable: { fn: r("name") },
							tempVariable: { fn: r("name") }
						}),
						g = a(
							s,
							Object.assign(
								{
									macroName: {
										canFollow: ["macroFront"],
										fn: function(e) {
											return e[2]
												? { isMethodCall: !0, innerText: e[2] }
												: { isMethodCall: !1 };
										}
									},
									groupingFront: {
										fn: function() {
											return { isFront: !0 };
										}
									},
									property: {
										fn: r("name"),
										canFollow: [
											"variable",
											"hookRef",
											"property",
											"tempVariable",
											"colour",
											"itsProperty",
											"belongingItProperty",
											"macro",
											"grouping",
											"string",
											"boolean",
											"number"
										]
									},
									possessiveOperator: { fn: o },
									itsProperty: { cannotFollow: ["text"], fn: r("name") },
									itsOperator: { cannotFollow: ["text"], fn: o },
									belongingItProperty: {
										cannotFollow: ["text"],
										fn: r("name")
									},
									belongingItOperator: { cannotFollow: ["text"], fn: o },
									belongingProperty: { cannotFollow: ["text"], fn: r("name") },
									belongingOperator: { cannotFollow: ["text"], fn: o },
									escapedStringChar: {
										fn: function() {
											return { type: "text" };
										}
									},
									singleStringOpener: {
										fn: function() {
											return {
												isFront: !0,
												matches: { singleStringOpener: "string" }
											};
										}
									},
									doubleStringOpener: {
										fn: function() {
											return {
												isFront: !0,
												matches: { doubleStringOpener: "string" }
											};
										}
									},
									hookRef: { fn: r("name") },
									cssTime: {
										fn: function(e) {
											return {
												value: +e[1] * ("s" === e[2].toLowerCase() ? 1e3 : 1)
											};
										}
									},
									datatype: {
										cannotFollow: ["text"],
										fn: function(e) {
											return { name: e[0].toLowerCase() };
										}
									},
									colour: {
										cannotFollow: ["text"],
										fn: function(e) {
											var r,
												n = e[0].toLowerCase(),
												t = {
													red: "e61919",
													orange: "e68019",
													yellow: "e5e619",
													lime: "80e619",
													green: "19e619",
													cyan: "19e5e6",
													aqua: "19e5e6",
													blue: "197fe6",
													navy: "1919e6",
													purple: "7f19e6",
													fuchsia: "e619e5",
													magenta: "e619e5",
													white: "fff",
													black: "000",
													gray: "888",
													grey: "888"
												};
											return (
												(r = Object.hasOwnProperty.call(t, n) ? "#" + t[n] : n),
												{ colour: r }
											);
										}
									},
									number: {
										fn: function(e) {
											return { value: parseFloat(e[0]) };
										}
									},
									inequality: {
										fn: function(e) {
											return {
												operator: e[2],
												negate: e[1].indexOf("not") > -1
											};
										}
									},
									augmentedAssign: {
										fn: function(e) {
											return { operator: e[0][0] };
										}
									},
									identifier: { fn: r("name"), cannotFollow: ["text"] },
									whitespace: { fn: o, cannotFollow: "text" },
									incorrectOperator: {
										fn: function(e) {
											var r = {
												"=>": ">=",
												"=<": "<=",
												gte: ">=",
												lte: "<=",
												gt: ">",
												lt: "<",
												eq: "is",
												isnot: "is not",
												neq: "is not",
												isa: "is a",
												are: "is",
												x: "*",
												"or a": "or"
											}[e[0].toLowerCase().replace(/\s+/g, " ")];
											return {
												type: "error",
												message:
													"Please say " +
													(r ? "'" + r + "'" : "something else") +
													" instead of '" +
													e[0] +
													"'.",
												explanation:
													"In the interests of readability, I want certain operators to be in a specific form."
											};
										},
										cannotFollow: "text"
									}
								},
								[
									"boolean",
									"is",
									"to",
									"into",
									"where",
									"when",
									"via",
									"with",
									"making",
									"each",
									"and",
									"or",
									"not",
									"isNot",
									"contains",
									"isIn",
									"isA",
									"isNotA",
									"matches",
									"bind"
								].reduce(function(e, r) {
									return (e[r] = { fn: o, cannotFollow: ["text"] }), e;
								}, {}),
								[
									"comma",
									"spread",
									"addition",
									"subtraction",
									"multiplication",
									"division"
								].reduce(function(e, r) {
									return (e[r] = { fn: o }), e;
								}, {})
							)
						);
					i.push.apply(
						i,
						_toConsumableArray(Object.keys(u)).concat(
							_toConsumableArray(Object.keys(l)),
							_toConsumableArray(Object.keys(m))
						)
					),
						s.push.apply(
							s,
							_toConsumableArray(Object.keys(l)).concat(
								_toConsumableArray(Object.keys(g))
							)
						);
					var c = Object.assign({}, u, m, l, g);
					return (
						Object.keys(c).forEach(function(e) {
							var r = n[e];
							(c[e].pattern =
								"string" != typeof r ? r : new RegExp("^(?:" + r + ")", "i")),
								n[e + "Peek"] && (c[e].peek = n[e + "Peek"]);
						}),
						Object.assign(e.rules, c),
						(e.modes.start = e.modes.markup = i),
						(e.modes.macro = s),
						e
					);
				}
				function r(r) {
					return Object.freeze({ lex: e(r).lex, Patterns: n });
				}
				var n = void 0;
				(Object.assign =
					Object.assign ||
					function(e) {
						for (var r = 1; r < arguments.length; r++) {
							var n = arguments[r];
							for (var t in n)
								Object.hasOwnProperty.call(n, t) && (e[t] = n[t]);
						}
						return e;
					}),
					"object" ===
					("undefined" == typeof module ? "undefined" : _typeof(module))
						? ((n = require("./patterns")),
						  (module.exports = r(require("./lexer"))))
						: "function" == typeof define && define.amd
							? define("markup", ["lexer", "patterns"], function(e, t) {
									return (n = t), r(e);
							  })
							: this && this.loaded && this.modules
								? ((n = this.modules.Patterns),
								  (this.modules.Markup = r(this.modules.Lexer)))
								: ((n = this.Patterns),
								  (this.TwineMarkup = r(this.TwineLexer)));
			}.call(eval("this") || ("undefined" != typeof global ? global : window)),
			function() {
				var e = function(e) {
						return (e + "").toLowerCase().replace(/-|_/g, "");
					},
					r = {
						"(display: String) -> Command": {
							name: "display",
							sig: " String",
							returnType: "Command",
							aka: []
						},
						"(print: Any) -> Command": {
							name: "print",
							sig: " Any",
							returnType: "Command",
							aka: []
						},
						"(go-to: String) -> Command": {
							name: "go-to",
							sig: " String",
							returnType: "Command",
							aka: []
						},
						"(undo:) -> Command": {
							name: "undo",
							sig: "",
							returnType: "Command",
							aka: []
						},
						"(cycling-link: [Bind], ...String) -> Command": {
							name: "cycling-link",
							sig: " [Bind], ...String",
							returnType: "Command",
							aka: []
						},
						"(dropdown: Bind, ...String) -> Command": {
							name: "dropdown",
							sig: " Bind, ...String",
							returnType: "Command",
							aka: []
						},
						"(show: ...HookName) -> Command": {
							name: "show",
							sig: " ...HookName",
							returnType: "Command",
							aka: []
						},
						"(stop:) -> Command": {
							name: "stop",
							sig: "",
							returnType: "Command",
							aka: []
						},
						"(load-game: String) -> Command": {
							name: "load-game",
							sig: " String",
							returnType: "Command",
							aka: []
						},
						"(alert: String) -> Command": {
							name: "alert",
							sig: " String",
							returnType: "Command",
							aka: []
						},
						"(open-url: String) -> Command": {
							name: "open-url",
							sig: " String",
							returnType: "Command",
							aka: []
						},
						"(reload:) -> Command": {
							name: "reload",
							sig: "",
							returnType: "Command",
							aka: []
						},
						"(goto-url: String) -> Command": {
							name: "goto-url",
							sig: " String",
							returnType: "Command",
							aka: []
						},
						"(save-game: String, [String]) -> Boolean": {
							name: "save-game",
							sig: " String, [String]",
							returnType: "Boolean",
							aka: []
						},
						"(prompt: String, String) -> String": {
							name: "prompt",
							sig: " String, String",
							returnType: "String",
							aka: []
						},
						"(confirm: String) -> Boolean": {
							name: "confirm",
							sig: " String",
							returnType: "Boolean",
							aka: []
						},
						"(page-url:) -> String": {
							name: "page-url",
							sig: "",
							returnType: "String",
							aka: []
						},
						"(set: ...VariableToValue) -> Instant": {
							name: "set",
							sig: " ...VariableToValue",
							returnType: "Instant",
							aka: []
						},
						"(put: ...VariableToValue) -> Instant": {
							name: "put",
							sig: " ...VariableToValue",
							returnType: "Instant",
							aka: []
						},
						"(move: ...VariableToValue) -> Instant": {
							name: "move",
							sig: " ...VariableToValue",
							returnType: "Instant",
							aka: []
						},
						"(a: [...Any]) -> Array": {
							name: "a",
							sig: " [...Any]",
							returnType: "Array",
							aka: ["array"]
						},
						"(range: Number, Number) -> Array": {
							name: "range",
							sig: " Number, Number",
							returnType: "Array",
							aka: []
						},
						"(subarray: Array, Number, Number) -> Array": {
							name: "subarray",
							sig: " Array, Number, Number",
							returnType: "Array",
							aka: []
						},
						"(reversed: [...Any]) -> Array": {
							name: "reversed",
							sig: " [...Any]",
							returnType: "Array",
							aka: []
						},
						"(shuffled: Any, ...Any) -> Array": {
							name: "shuffled",
							sig: " Any, ...Any",
							returnType: "Array",
							aka: []
						},
						"(sorted: Number or String, ...Number or String) -> Array": {
							name: "sorted",
							sig: " Number or String, ...Number or String",
							returnType: "Array",
							aka: []
						},
						"(rotated: Number, [...Any]) -> Array": {
							name: "rotated",
							sig: " Number, [...Any]",
							returnType: "Array",
							aka: []
						},
						"(repeated: Number, ...Any) -> Array": {
							name: "repeated",
							sig: " Number, ...Any",
							returnType: "Array",
							aka: []
						},
						"(interlaced: Array, ...Array) -> Array": {
							name: "interlaced",
							sig: " Array, ...Array",
							returnType: "Array",
							aka: []
						},
						"(altered: Lambda, [...Any]) -> Array": {
							name: "altered",
							sig: " Lambda, [...Any]",
							returnType: "Array",
							aka: []
						},
						"(find: Lambda, [...Any]) -> Array": {
							name: "find",
							sig: " Lambda, [...Any]",
							returnType: "Array",
							aka: []
						},
						"(all-pass: Lambda, [...Any]) -> Boolean": {
							name: "all-pass",
							sig: " Lambda, [...Any]",
							returnType: "Boolean",
							aka: []
						},
						"(some-pass: Lambda, ...Any) -> Boolean": {
							name: "some-pass",
							sig: " Lambda, ...Any",
							returnType: "Boolean",
							aka: []
						},
						"(none-pass: Lambda, ...Any) -> Boolean": {
							name: "none-pass",
							sig: " Lambda, ...Any",
							returnType: "Boolean",
							aka: []
						},
						"(folded: Lambda, ...Any) -> Any": {
							name: "folded",
							sig: " Lambda, ...Any",
							returnType: "Any",
							aka: []
						},
						"(datanames: Datamap) -> Array": {
							name: "datanames",
							sig: " Datamap",
							returnType: "Array",
							aka: []
						},
						"(datavalues: Datamap) -> Array": {
							name: "datavalues",
							sig: " Datamap",
							returnType: "Array",
							aka: []
						},
						"(dataentries: Datamap) -> Array": {
							name: "dataentries",
							sig: " Datamap",
							returnType: "Array",
							aka: []
						},
						"(history:) -> Array": {
							name: "history",
							sig: "",
							returnType: "Array",
							aka: []
						},
						"(passage: [String]) -> Datamap": {
							name: "passage",
							sig: " [String]",
							returnType: "Datamap",
							aka: []
						},
						"(saved-games:) -> Datamap": {
							name: "saved-games",
							sig: "",
							returnType: "Datamap",
							aka: []
						},
						"(dm: [...Any]) -> Datamap": {
							name: "dm",
							sig: " [...Any]",
							returnType: "Datamap",
							aka: ["datamap"]
						},
						"(ds: [...Any]) -> Dataset": {
							name: "ds",
							sig: " [...Any]",
							returnType: "Dataset",
							aka: ["dataset"]
						},
						"(count: Array or String, ...Any) -> Number": {
							name: "count",
							sig: " Array or String, ...Any",
							returnType: "Number",
							aka: []
						},
						"(enchant: HookName or String, Changer) -> Command": {
							name: "enchant",
							sig: " HookName or String, Changer",
							returnType: "Command",
							aka: []
						},
						"(replace: ...HookName or String) -> Changer": {
							name: "replace",
							sig: " ...HookName or String",
							returnType: "Changer",
							aka: []
						},
						"(append: ...HookName or String) -> Changer": {
							name: "append",
							sig: " ...HookName or String",
							returnType: "Changer",
							aka: []
						},
						"(prepend: ...HookName or String) -> Changer": {
							name: "prepend",
							sig: " ...HookName or String",
							returnType: "Changer",
							aka: []
						},
						"(click: HookName or String) -> Changer": {
							name: "click",
							sig: " HookName or String",
							returnType: "Changer",
							aka: []
						},
						"(mouseover: HookName or String) -> Changer": {
							name: "mouseover",
							sig: " HookName or String",
							returnType: "Changer",
							aka: []
						},
						"(mouseout: HookName or String) -> Changer": {
							name: "mouseout",
							sig: " HookName or String",
							returnType: "Changer",
							aka: []
						},
						"(click-replace: HookName or String) -> Changer": {
							name: "click-replace",
							sig: " HookName or String",
							returnType: "Changer",
							aka: []
						},
						"(click-append: HookName or String) -> Changer": {
							name: "click-append",
							sig: " HookName or String",
							returnType: "Changer",
							aka: []
						},
						"(click-prepend: HookName or String) -> Changer": {
							name: "click-prepend",
							sig: " HookName or String",
							returnType: "Changer",
							aka: []
						},
						"(mouseover-replace: HookName or String) -> Changer": {
							name: "mouseover-replace",
							sig: " HookName or String",
							returnType: "Changer",
							aka: []
						},
						"(mouseover-append: HookName or String) -> Changer": {
							name: "mouseover-append",
							sig: " HookName or String",
							returnType: "Changer",
							aka: []
						},
						"(mouseover-prepend: HookName or String) -> Changer": {
							name: "mouseover-prepend",
							sig: " HookName or String",
							returnType: "Changer",
							aka: []
						},
						"(mouseout-replace: HookName or String) -> Changer": {
							name: "mouseout-replace",
							sig: " HookName or String",
							returnType: "Changer",
							aka: []
						},
						"(mouseout-append: HookName or String) -> Changer": {
							name: "mouseout-append",
							sig: " HookName or String",
							returnType: "Changer",
							aka: []
						},
						"(mouseout-prepend: HookName or String) -> Changer": {
							name: "mouseout-prepend",
							sig: " HookName or String",
							returnType: "Changer",
							aka: []
						},
						"(click-goto: HookName or String, String) -> Command": {
							name: "click-goto",
							sig: " HookName or String, String",
							returnType: "Command",
							aka: []
						},
						"(mouseover-goto: HookName or String, String) -> Command": {
							name: "mouseover-goto",
							sig: " HookName or String, String",
							returnType: "Command",
							aka: []
						},
						"(mouseout-goto: HookName or String, String) -> Command": {
							name: "mouseout-goto",
							sig: " HookName or String, String",
							returnType: "Command",
							aka: []
						},
						"(link: String) -> Changer": {
							name: "link",
							sig: " String",
							returnType: "Changer",
							aka: ["link-replace"]
						},
						"(link-reveal: String) -> Changer": {
							name: "link-reveal",
							sig: " String",
							returnType: "Changer",
							aka: []
						},
						"(link-repeat: String) -> Changer": {
							name: "link-repeat",
							sig: " String",
							returnType: "Changer",
							aka: []
						},
						"(link-goto: String, [String]) -> Command": {
							name: "link-goto",
							sig: " String, [String]",
							returnType: "Command",
							aka: []
						},
						"(link-undo: String) -> Command": {
							name: "link-undo",
							sig: " String",
							returnType: "Command",
							aka: []
						},
						"(link-show: String, ...HookName) -> Command": {
							name: "link-show",
							sig: " String, ...HookName",
							returnType: "Command",
							aka: []
						},
						"(link-reveal-goto: String, [String]) -> Changer": {
							name: "link-reveal-goto",
							sig: " String, [String]",
							returnType: "Changer",
							aka: []
						},
						"(if: Boolean) -> Changer": {
							name: "if",
							sig: " Boolean",
							returnType: "Changer",
							aka: []
						},
						"(unless: Boolean) -> Changer": {
							name: "unless",
							sig: " Boolean",
							returnType: "Changer",
							aka: []
						},
						"(else-if: Boolean) -> Changer": {
							name: "else-if",
							sig: " Boolean",
							returnType: "Changer",
							aka: []
						},
						"(else:) -> Changer": {
							name: "else",
							sig: "",
							returnType: "Changer",
							aka: []
						},
						"(hidden:) -> Changer": {
							name: "hidden",
							sig: "",
							returnType: "Changer",
							aka: []
						},
						"(live: [Number]) -> Changer": {
							name: "live",
							sig: " [Number]",
							returnType: "Changer",
							aka: []
						},
						"(event: Lambda) -> Changer": {
							name: "event",
							sig: " Lambda",
							returnType: "Changer",
							aka: []
						},
						"(hook: String) -> Changer": {
							name: "hook",
							sig: " String",
							returnType: "Changer",
							aka: []
						},
						"(for: Lambda, [...Any]) -> Changer": {
							name: "for",
							sig: " Lambda, [...Any]",
							returnType: "Changer",
							aka: ["loop"]
						},
						"(transition: String) -> Changer": {
							name: "transition",
							sig: " String",
							returnType: "Changer",
							aka: ["t8n"]
						},
						"(transition-time: Number) -> Changer": {
							name: "transition-time",
							sig: " Number",
							returnType: "Changer",
							aka: ["t8n-time"]
						},
						"(transition-depart: String) -> Changer": {
							name: "transition-depart",
							sig: " String",
							returnType: "Changer",
							aka: ["t8n-depart"]
						},
						"(transition-arrive: String) -> Changer": {
							name: "transition-arrive",
							sig: " String",
							returnType: "Changer",
							aka: ["t8n-arrive"]
						},
						"(font: String) -> Changer": {
							name: "font",
							sig: " String",
							returnType: "Changer",
							aka: []
						},
						"(align: String) -> Changer": {
							name: "align",
							sig: " String",
							returnType: "Changer",
							aka: []
						},
						"(text-colour: String or Colour) -> Changer": {
							name: "text-colour",
							sig: " String or Colour",
							returnType: "Changer",
							aka: ["colour", "text-color", "color"]
						},
						"(text-rotate: Number) -> Changer": {
							name: "text-rotate",
							sig: " Number",
							returnType: "Changer",
							aka: []
						},
						"(background: Colour or String) -> Changer": {
							name: "background",
							sig: " Colour or String",
							returnType: "Changer",
							aka: []
						},
						"(text-style: String) -> Changer": {
							name: "text-style",
							sig: " String",
							returnType: "Changer",
							aka: []
						},
						"(hover-style: Changer) -> Changer": {
							name: "hover-style",
							sig: " Changer",
							returnType: "Changer",
							aka: []
						},
						"(css: String) -> Changer": {
							name: "css",
							sig: " String",
							returnType: "Changer",
							aka: []
						},
						"(str: ...[Number or String or Boolean or Array]) -> String": {
							name: "str",
							sig: " ...[Number or String or Boolean or Array]",
							returnType: "String",
							aka: ["string", "text"]
						},
						"(substring: String, Number, Number) -> String": {
							name: "substring",
							sig: " String, Number, Number",
							returnType: "String",
							aka: []
						},
						"(lowercase: String) -> String": {
							name: "lowercase",
							sig: " String",
							returnType: "String",
							aka: []
						},
						"(uppercase: String) -> String": {
							name: "uppercase",
							sig: " String",
							returnType: "String",
							aka: []
						},
						"(lowerfirst: String) -> String": {
							name: "lowerfirst",
							sig: " String",
							returnType: "String",
							aka: []
						},
						"(upperfirst: String) -> String": {
							name: "upperfirst",
							sig: " String",
							returnType: "String",
							aka: []
						},
						"(words: String) -> Array": {
							name: "words",
							sig: " String",
							returnType: "Array",
							aka: []
						},
						"(str-repeated: Number, String) -> String": {
							name: "str-repeated",
							sig: " Number, String",
							returnType: "String",
							aka: ["string-repeated"]
						},
						"(str-reversed: String) -> String": {
							name: "str-reversed",
							sig: " String",
							returnType: "String",
							aka: ["string-reversed"]
						},
						"(num: String) -> Number": {
							name: "num",
							sig: " String",
							returnType: "Number",
							aka: ["number"]
						},
						"(rgb: Number, Number, Number) -> Colour": {
							name: "rgb",
							sig: " Number, Number, Number",
							returnType: "Colour",
							aka: []
						},
						"(rgba: Number, Number, Number, Number) -> Colour": {
							name: "rgba",
							sig: " Number, Number, Number, Number",
							returnType: "Colour",
							aka: []
						},
						"(hsl: Number, Number, Number) -> Colour": {
							name: "hsl",
							sig: " Number, Number, Number",
							returnType: "Colour",
							aka: []
						},
						"(hsla: Number, Number, Number, Number) -> Colour": {
							name: "hsla",
							sig: " Number, Number, Number, Number",
							returnType: "Colour",
							aka: []
						},
						"(weekday:) -> String": {
							name: "weekday",
							sig: "",
							returnType: "String",
							aka: []
						},
						"(monthday:) -> Number": {
							name: "monthday",
							sig: "",
							returnType: "Number",
							aka: []
						},
						"(current-time:) -> String": {
							name: "current-time",
							sig: "",
							returnType: "String",
							aka: []
						},
						"(current-date:) -> String": {
							name: "current-date",
							sig: "",
							returnType: "String",
							aka: []
						},
						"(min: ...Number) -> Number": {
							name: "min",
							sig: " ...Number",
							returnType: "Number",
							aka: []
						},
						"(max: ...Number) -> Number": {
							name: "max",
							sig: " ...Number",
							returnType: "Number",
							aka: []
						},
						"(abs: Number) -> Number": {
							name: "abs",
							sig: " Number",
							returnType: "Number",
							aka: []
						},
						"(sign: Number) -> Number": {
							name: "sign",
							sig: " Number",
							returnType: "Number",
							aka: []
						},
						"(sin: Number) -> Number": {
							name: "sin",
							sig: " Number",
							returnType: "Number",
							aka: []
						},
						"(cos: Number) -> Number": {
							name: "cos",
							sig: " Number",
							returnType: "Number",
							aka: []
						},
						"(tan: Number) -> Number": {
							name: "tan",
							sig: " Number",
							returnType: "Number",
							aka: []
						},
						"(floor: Number) -> Number": {
							name: "floor",
							sig: " Number",
							returnType: "Number",
							aka: []
						},
						"(round: Number) -> Number": {
							name: "round",
							sig: " Number",
							returnType: "Number",
							aka: []
						},
						"(ceil: Number) -> Number": {
							name: "ceil",
							sig: " Number",
							returnType: "Number",
							aka: []
						},
						"(pow: Number, Number) -> Number": {
							name: "pow",
							sig: " Number, Number",
							returnType: "Number",
							aka: []
						},
						"(exp: Number) -> Number": {
							name: "exp",
							sig: " Number",
							returnType: "Number",
							aka: []
						},
						"(sqrt: Number) -> Number": {
							name: "sqrt",
							sig: " Number",
							returnType: "Number",
							aka: []
						},
						"(log: Number) -> Number": {
							name: "log",
							sig: " Number",
							returnType: "Number",
							aka: []
						},
						"(log10: Number) -> Number": {
							name: "log10",
							sig: " Number",
							returnType: "Number",
							aka: []
						},
						"(log2: Number) -> Number": {
							name: "log2",
							sig: " Number",
							returnType: "Number",
							aka: []
						},
						"(random: Number, [Number]) -> Number": {
							name: "random",
							sig: " Number, [Number]",
							returnType: "Number",
							aka: []
						},
						"(either: ...Any) -> Any": {
							name: "either",
							sig: " ...Any",
							returnType: "Any",
							aka: []
						}
					},
					n =
						r instanceof Object &&
						Object.keys(r)
							.reduce(function(e, n) {
								return e.concat.apply(
									e,
									[r[n].name].concat(_toConsumableArray(r[n].aka))
								);
							}, [])
							.map(e),
					t = void 0;
				"function" == typeof define && define.amd
					? define("markup", [], function(e) {
							t = e.lex;
					  })
					: this &&
					  this.loaded &&
					  this.modules &&
					  (t = this.modules.Markup.lex),
					window.CodeMirror &&
						CodeMirror.defineMode("harlowe-3", function() {
							function r(e, r) {
								if (e.update) {
									var n = e.from.line,
										t = r.split("\n").slice(0, e.from.line + 1);
									return (
										(t[n] = t[n].slice(0, e.from.ch) + e.text[0]),
										(t = t.concat(e.text.slice(1))),
										e.update({ line: 0, ch: 0 }, e.to, t),
										t.join("\n")
									);
								}
							}
							function a(e) {
								u.length &&
									(u.forEach(function(e) {
										return e.clear();
									}),
									(u = []));
								var r = i.tokenAt(e.indexFromPos(e.getCursor()));
								if (r) {
									if (
										(u.push(
											e.markText(
												e.posFromIndex(r.start),
												e.posFromIndex(r.end),
												{ className: "cm-harlowe-3-cursor" }
											)
										),
										"variable" === r.type ||
											"tempVariable" === r.type ||
											"hookRef" === r.type ||
											"hook" === r.type)
									) {
										var n = "hook" === r.type ? "hookRef" : r.type;
										s[n].forEach(function(n) {
											n !== r &&
												n.name === r.name &&
												u.push(
													e.markText(
														e.posFromIndex(n.start),
														e.posFromIndex(n.end),
														{ className: "cm-harlowe-3-variableOccurrence" }
													)
												);
										});
									}
									("hookRef" !== r.type && "hook" !== r.type) ||
										s.hook.forEach(function(n) {
											if (n !== r && n.name === r.name) {
												var t =
													"appended" === n.tagPosition
														? n.end - n.name.length - 1
														: n.start + 1;
												u.push(
													e.markText(
														e.posFromIndex(t),
														e.posFromIndex(t + n.name.length),
														{ className: "cm-harlowe-3-hookOccurrence" }
													)
												);
											}
										});
								}
							}
							var o = void 0,
								i = void 0,
								s = {
									variable: [],
									tempVariable: [],
									hook: [],
									hookRef: [],
									populate: function() {
										var e = this;
										(this.variable = []),
											(this.tempVariable = []),
											(this.hook = []),
											(this.hookRef = []);
										var r = function r(n) {
											("variable" !== n.type &&
												"tempVariable" !== n.type &&
												"hook" !== n.type &&
												"hookRef" !== n.type) ||
												e[n.type].push(n),
												n.children.forEach(r);
										};
										i.children.forEach(r);
									}
								},
								u = [],
								m = function() {
									var e = o.doc;
									(i = t(e.getValue())),
										s.populate(),
										e.on("beforeChange", function(n, t) {
											r(t, e.getValue());
										}),
										e.on("change", function() {
											var r = e.getValue();
											(i = t(r)), s.populate();
										}),
										e.on("swapDoc", m),
										e.on("cursorActivity", a),
										(m = null);
								};
							return {
								startState: function() {
									return (
										o ||
											((o = CodeMirror.modes["harlowe-3"].cm),
											o.setOption(
												"placeholder",
												[
													"Enter the body text of your passage here.",
													"''Bold'', //italics//, ^^superscript^^, ~~strikethrough~~, and <p>HTML tags</p> are available.",
													"To display special symbols without them being transformed, put them between `backticks`.",
													"To link to another passage, write the link text and the passage name like this: [[link text->passage name]]\nor this: [[passage name<-link text]]\nor this: [[link text]].",
													"Macros like (set:) and (display:) are the programming of your passage. If you've (set:) a $variable, you can just enter its name to print it out.",
													"To make a 'hook', put [single square brackets] around text - or leave it empty [] - then put a macro like (if:), a $variable, or a |nametag> outside the front, |like>[so].",
													"Hooks can be used for many things: showing text (if:) something happened, applying a (text-style:), making a place to (append:) text later on, and much more!",
													"Consult the Harlowe documentation for more information."
												].join("\n\n")
											),
											o.setOption("lineNumbers", !0),
											o.setOption("lineNumberFormatter", function() {
												return "\u2022";
											})),
										{ pos: 0 }
									);
								},
								blankLine: function(e) {
									e.pos++;
								},
								token: function(r, t) {
									m && m();
									var a = i.pathAt(t.pos),
										o = a[0];
									if (!o) return t.pos++, r.next(), null;
									for (; o === o.tokenAt(t.pos) && !r.eol(); )
										t.pos++, r.next();
									r.eol() && t.pos++;
									for (var s = {}, u = "", l = 0; l < a.length; l += 1) {
										var g = a[l].type,
											c = "harlowe-3-" + g;
										switch (
											((s[c] = (s[c] || 0) + 1),
											s[c] > 1 && (c += "-" + s[c]),
											g)
										) {
											case "macroName":
												-1 === n.indexOf(e(a[l].text.slice(0, -1))) &&
													(c += " harlowe-3-error");
										}
										u += c + " ";
									}
									return u;
								}
							};
						});
				var a = document.querySelector("style#cm-harlowe-3");
				a ||
					((a = document.createElement("style")),
					a.setAttribute("id", "cm-harlowe-3"),
					document.head.appendChild(a)),
					(a.innerHTML = (function() {
						var e = function(e, r, n) {
								return function(t) {
									return (
										"background-color: hsla(" +
										e +
										"," +
										r +
										"%," +
										n +
										"%," +
										t +
										");"
									);
								};
							},
							r = e(40, 100, 50),
							n = e(220, 100, 50),
							t = function(r) {
								return e(320, 44, 50)(r) + "color: #a84186;";
							};
						return (
							{
								root: "box-sizing:border-box;",
								"cursor:not([class^='cm-harlowe-3-text cm-harlowe-3-root'])":
									"border-bottom: 2px solid darkgray;",
								CodeMirror: "padding: 0 !important",
								"CodeMirror-linenumber": "color: #ccc;",
								"CodeMirror-gutters": "left: 0px !important;",
								hook: r(0.05),
								"hook-2": r(0.1),
								"hook-3": r(0.15),
								"hook-4": r(0.2),
								"hook-5": r(0.25),
								"hook-6": r(0.3),
								"hook-7": r(0.35),
								"hook-8": r(0.4),
								"^=hook , ^=hook-": "font-weight:bold;",
								"error:not([class*='cm-harlowe-3-string'])":
									"color: firebrick !important; background-color: hsla(17, 100%, 74%, 0.74) !important;",
								macro: t(0.05),
								"macro-2": t(0.1),
								"macro-3": t(0.15),
								"macro-4": t(0.2),
								"macro-5": t(0.25),
								"macro-6": t(0.3),
								"macro-7": t(0.35),
								"macro-8": t(0.4),
								macroName: "font-style:italic;",
								"^=macro ": "font-weight:bold;",
								"bold, strong": "font-weight:bold;",
								"italic, em": "font-style:italic;",
								sup: "vertical-align: super;font-size:0.8em;",
								strike: "text-decoration: line-through;",
								verbatim: "background-color: hsla(0,0%,50%,0.1);",
								"^=bold, ^=strong, ^=italic, ^=em, ^=sup, ^=verbatim, ^=strike":
									"font-weight:100; color: hsla(0,0,0,0.5)",
								"^=collapsed": "font-weight:bold; color: hsl(201, 100%, 30%);",
								collapsed: n(0.025),
								"collapsed.hook": n(0.05),
								"collapsed.hook-2": n(0.1),
								"collapsed.hook-3": n(0.15),
								"collapsed.hook-4": n(0.2),
								"collapsed.hook-5": n(0.25),
								"collapsed.hook-6": n(0.3),
								"collapsed.hook-7": n(0.35),
								"collapsed.hook-8": n(0.4),
								"twineLink:not(.text)": "color: #3333cc;",
								".theme-dark twineLink:not(.text)": "color: #5555ee;",
								tag: "color: #4d4d9d;",
								boolean: "color: #626262;",
								string: "color: #158383;",
								number: "color: #A15000;",
								variable: "color: #0076b2;",
								tempVariable: "color: #218abe;",
								hookRef: "color: #007f54;",
								"variableOccurrence, hookOccurrence":
									"background: #9fdfc9 !important;",
								"^=where, ^=via, ^=with, ^=making, ^=each, ^=when":
									"color: #007f00; font-style:italic;",
								heading: "font-weight:bold;",
								hr:
									"display:block; background-image: linear-gradient(0deg, transparent, transparent 45%, silver 45%, transparent 55%, transparent);",
								align:
									"display:block; color: hsl(14, 99%, 37%); background-color: hsla(14, 99%, 87%, 0.1);",
								column:
									"display:block; color: hsl(204, 99%, 37%); background-color: hsla(204, 99%, 87%, 0.1);",
								escapedLine: "font-weight:bold; color: hsl(51, 100%, 30%);",
								"identifier, property, belongingProperty, itsProperty, belongingItProperty, belongingItOperator":
									"color: #0076b2;",
								toString: function() {
									var e = this;
									return Object.keys(this).reduce(function(r, n) {
										var t;
										return "toString" === n
											? r
											: "CodeMirror" === n.slice(0, 10)
												? r + "." + n + "{" + e[n] + "}"
												: ((t = n.split(", ").map(function e(r) {
														return 0 === r.indexOf(".theme-dark")
															? r.slice(0, 11) + " " + e(r.slice(11).trim())
															: r.indexOf(".") > -1
																? r
																		.split(/\./g)
																		.map(e)
																		.join("")
																: 0 === r.indexOf("^=")
																	? "[class^='cm-harlowe-3-" + r.slice(2) + "']"
																	: ".cm-harlowe-3-" + r;
												  })),
												  r + t.join(", ") + "{" + e[n] + "}");
									}, "");
								}
							} + ""
						);
					})());
			}.call(eval("this")));
	}
});
