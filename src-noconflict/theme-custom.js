ace.define("ace/theme/custom",["require","exports","module","ace/lib/dom"], function(require, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-custom";
exports.cssText = ".ace-custom .ace_gutter {\
background: #212121;\
color: #BEBEBE\
}\
.ace-custom .ace_print-margin {\
width: 1px;\
background: #151515 \
}\
.ace-custom {\
background-color: #151515 ;\
color: #FFFFFF\
}\
.ace-custom .ace_cursor {\
color: #7DA5DC\
}\
.ace-custom .ace_marker-layer .ace_selection {\
background: rgba(221, 240, 255, 0.10)\
}\
.ace-custom.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #191919;\
}\
.ace-custom .ace_marker-layer .ace_step {\
background: rgb(102, 82, 0)\
}\
.ace-custom .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #F0F0F0\
}\
.ace-custom .ace_marker-layer .ace_active-line {\
background: rgba(255, 255, 255, 0.031)\
}\
.ace-custom .ace_gutter-active-line {\
background-color: rgba(255, 255, 255, 0.031)\
}\
.ace-custom .ace_marker-layer .ace_selected-word {\
border: 1px solid #F0F0F0\
}\
.ace-custom .ace_invisible {\
color: rgba(255, 255, 255)\
}\
.ace-custom .ace_keyword,\
.ace-custom .ace_meta,\
.ace-custom .ace_support.ace_constant.ace_property-value {\
color: #927C5D\
}\
.ace-custom .ace_keyword.ace_operator {\
color: #4B4B4B\
}\
.ace-custom .ace_keyword.ace_other.ace_unit {\
color: #366F1A\
}\
.ace-custom .ace_constant.ace_language {\
color: #39946A\
}\
.ace-custom .ace_constant.ace_numeric {\
color: #46A609\
}\
.ace-custom .ace_constant.ace_character.ace_entity {\
color: #A165AC\
}\
.ace-custom .ace_invalid {\
color: #FFFFFF;\
background-color: #E92E2E\
}\
.ace-custom .ace_fold {\
background-color: #927C5D;\
border-color: #F8F8F8\
}\
.ace-custom .ace_storage,\
.ace-custom .ace_support.ace_class,\
.ace-custom .ace_support.ace_function,\
.ace-custom .ace_support.ace_other,\
.ace-custom .ace_support.ace_type {\
color: #E92E2E\
}\
.ace-custom .ace_string {\
color: #5D90CD\
}\
.ace-custom .ace_comment {\
color: #3C403B\
}\
.ace-custom .ace_entity.ace_name.ace_tag,\
.ace-custom .ace_entity.ace_other.ace_attribute-name {\
color: #606060\
}\
.ace-custom .ace_indent-guide {\
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYHB3d/8PAAOIAdULw8qMAAAAAElFTkSuQmCC) right repeat-y\
}";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});                (function() {
                    ace.require(["ace/theme/custom"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            