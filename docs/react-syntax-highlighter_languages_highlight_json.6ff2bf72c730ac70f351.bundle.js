(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{"9e8e":function(module,exports){module.exports=function(hljs){var LITERALS={literal:"true false null"},TYPES=[hljs.QUOTE_STRING_MODE,hljs.C_NUMBER_MODE],VALUE_CONTAINER={end:",",endsWithParent:!0,excludeEnd:!0,contains:TYPES,keywords:LITERALS},OBJECT={begin:"{",end:"}",contains:[{className:"attr",begin:/"/,end:/"/,contains:[hljs.BACKSLASH_ESCAPE],illegal:"\\n"},hljs.inherit(VALUE_CONTAINER,{begin:/:/})],illegal:"\\S"},ARRAY={begin:"\\[",end:"\\]",contains:[hljs.inherit(VALUE_CONTAINER)],illegal:"\\S"};return TYPES.splice(TYPES.length,0,OBJECT,ARRAY),{contains:TYPES,keywords:LITERALS,illegal:"\\S"}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_json.6ff2bf72c730ac70f351.bundle.js.map