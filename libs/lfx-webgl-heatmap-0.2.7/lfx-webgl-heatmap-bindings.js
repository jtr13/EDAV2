!function(e){var t={};function a(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},a.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t){function a(e,t){var a=null;return e&&("string"==typeof t?a=e.properties[t]:"function"==typeof t&&(a=t(e))),a}function r(e,t,r,n,o,i){var u=function e(t,r){var n=[];if(void 0===t||null===t)return n;if("string"==typeof t&&(t=JSON.parse(t)),"Topology"===t.type){var o=[];for(var i in t.objects){var u=topojson.feature(t,t.objects[i]);L.Util.isArray(u)?o=o.concat(u):"features"in u?o=o.concat(u.features):o.push(u)}return e(o,r)}var s=L.Util.isArray(t)?t:t.features;return s?$.each(s,function(t,o){var i=null,u=null;"Point"===o.geometry.type?(i=parseFloat(o.geometry.coordinates[1]),u=parseFloat(o.geometry.coordinates[0]),i&&u&&(r?n.push([i,u,a(o,r)]):n.push([i,u]))):"MultiPoint"===o.geometry.type&&(n=n.concat(e(o,r)))}):"Feature"===t.type&&$.each(t.geometry.coordinates,function(e,o){var i,u;i=parseFloat(o[1]),u=parseFloat(o[0]),i&&u&&(r?n.push([i,u,a(t,r)]):n.push([i,u]))}),n}(t,r);if(!$.isEmptyObject(u)){if(i.gradientTexture){var s=document.getElementById("webgl-heatmap-"+i.gradientTexture+"-attachment");$.isEmptyObject(s)?delete i.gradientTexture:i.gradientTexture=s.href}var f=L.webGLHeatmap(i);f.setData(u),e.layerManager.addLayer(f,"webGLHeatmap",n,o),i.gradientTexture&&(e.zoomOut(),setTimeout(function(){e.zoomIn()},500))}}LeafletWidget.methods.addWebGLHeatmap=function(e,t,a,r){var n=this;if(!$.isEmptyObject(e)){if(r.gradientTexture){var o=document.getElementById("webgl-heatmap-"+r.gradientTexture+"-attachment");$.isEmptyObject(o)?delete r.gradientTexture:r.gradientTexture=o.href}var i=L.webGLHeatmap(r);i.setData(e),n.layerManager.addLayer(i,"webGLHeatmap",t,a),r.gradientTexture&&(n.zoomOut(),setTimeout(function(){n.zoomIn()},500))}},LeafletWidget.methods.addWebGLGeoJSONHeatmap=function(e,t,a,n,o){var i=this;LeafletWidget.utils.isURL(e)?$.getJSON(e,function(e){r(i,e,t,a,n,o)}):r(i,e,t,a,n,o)},LeafletWidget.methods.addWebGLKMLHeatmap=function(e,t,a,n,o){var i=this;if(LeafletWidget.utils.isURL(e))$.getJSON(e,function(e){var u=toGeoJSON.kml(LeafletWidget.utils.parseXML(e));r(i,u,t,a,n,o)});else{var u=toGeoJSON.kml(LeafletWidget.utils.parseXML(e));r(i,u,t,a,n,o)}},LeafletWidget.methods.addWebGLCSVHeatmap=function(e,t,a,n,o,i){var u=this;LeafletWidget.utils.isURL(e)?$.getJSON(e,function(e){csv2geojson.csv2geojson(e,i||{},function(e,i){r(u,i,t,a,n,o)})}):csv2geojson.csv2geojson(e,i||{},function(e,i){r(u,i,t,a,n,o)})},LeafletWidget.methods.addWebGLGPXHeatmap=function(e,t,a,n,o){var i=this;if(LeafletWidget.utils.isURL(e))$.getJSON(e,function(e){var u=toGeoJSON.gpx(LeafletWidget.utils.parseXML(e));r(i,u,t,a,n,o)});else{var u=toGeoJSON.gpx(LeafletWidget.utils.parseXML(e));r(i,u,t,a,n,o)}},LeafletWidget.methods.removeWebGLHeatmap=function(e){this.layerManager.removeLayer("webGLHeatmap",e)},LeafletWidget.methods.clearWebGLHeatmap=function(){this.layerManager.clearLayers("webGLHeatmap")}}]);
//# sourceMappingURL=lfx-webgl-heatmap-bindings.js.map