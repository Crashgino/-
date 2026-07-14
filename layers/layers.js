var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ganniso_1 = new ol.format.GeoJSON();
var features_ganniso_1 = format_ganniso_1.readFeatures(json_ganniso_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ganniso_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ganniso_1.addFeatures(features_ganniso_1);
var lyr_ganniso_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ganniso_1, 
                style: style_ganniso_1,
                popuplayertitle: 'ganniso',
                interactive: true,
    title: 'ganniso<br />\
    <img src="styles/legend/ganniso_1_0.png" /> 30 min<br />' });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: 'がん病院',
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> がん病院'
            });
var format_noussochuiso_3 = new ol.format.GeoJSON();
var features_noussochuiso_3 = format_noussochuiso_3.readFeatures(json_noussochuiso_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_noussochuiso_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_noussochuiso_3.addFeatures(features_noussochuiso_3);
var lyr_noussochuiso_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_noussochuiso_3, 
                style: style_noussochuiso_3,
                popuplayertitle: 'noussochuiso',
                interactive: true,
    title: 'noussochuiso<br />\
    <img src="styles/legend/noussochuiso_3_0.png" /> 30 min<br />' });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: '脳卒中病院',
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> 脳卒中病院'
            });
var format_jyunkannkiiso_5 = new ol.format.GeoJSON();
var features_jyunkannkiiso_5 = format_jyunkannkiiso_5.readFeatures(json_jyunkannkiiso_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jyunkannkiiso_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jyunkannkiiso_5.addFeatures(features_jyunkannkiiso_5);
var lyr_jyunkannkiiso_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jyunkannkiiso_5, 
                style: style_jyunkannkiiso_5,
                popuplayertitle: 'jyunkannkiiso',
                interactive: true,
    title: 'jyunkannkiiso<br />\
    <img src="styles/legend/jyunkannkiiso_5_0.png" /> 30 min<br />' });
var format__6 = new ol.format.GeoJSON();
var features__6 = format__6.readFeatures(json__6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__6.addFeatures(features__6);
var lyr__6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__6, 
                style: style__6,
                popuplayertitle: '循環器病院',
                interactive: true,
                title: '<img src="styles/legend/_6.png" /> 循環器病院'
            });
var format_shuusannkiiso_7 = new ol.format.GeoJSON();
var features_shuusannkiiso_7 = format_shuusannkiiso_7.readFeatures(json_shuusannkiiso_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_shuusannkiiso_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_shuusannkiiso_7.addFeatures(features_shuusannkiiso_7);
var lyr_shuusannkiiso_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_shuusannkiiso_7, 
                style: style_shuusannkiiso_7,
                popuplayertitle: 'shuusannkiiso',
                interactive: true,
    title: 'shuusannkiiso<br />\
    <img src="styles/legend/shuusannkiiso_7_0.png" /> 30 min<br />' });
var format__8 = new ol.format.GeoJSON();
var features__8 = format__8.readFeatures(json__8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__8.addFeatures(features__8);
var lyr__8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__8, 
                style: style__8,
                popuplayertitle: '周産期病院',
                interactive: true,
                title: '<img src="styles/legend/_8.png" /> 周産期病院'
            });
var format_shouniiso_9 = new ol.format.GeoJSON();
var features_shouniiso_9 = format_shouniiso_9.readFeatures(json_shouniiso_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_shouniiso_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_shouniiso_9.addFeatures(features_shouniiso_9);
var lyr_shouniiso_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_shouniiso_9, 
                style: style_shouniiso_9,
                popuplayertitle: 'shouniiso',
                interactive: true,
                title: '<img src="styles/legend/shouniiso_9.png" /> shouniiso'
            });
var format__10 = new ol.format.GeoJSON();
var features__10 = format__10.readFeatures(json__10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__10.addFeatures(features__10);
var lyr__10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__10, 
                style: style__10,
                popuplayertitle: '小児病院',
                interactive: true,
                title: '<img src="styles/legend/_10.png" /> 小児病院'
            });
var format__11 = new ol.format.GeoJSON();
var features__11 = format__11.readFeatures(json__11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__11.addFeatures(features__11);
var lyr__11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__11, 
                style: style__11,
                popuplayertitle: '主要病院',
                interactive: true,
                title: '<img src="styles/legend/_11.png" /> 主要病院'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ganniso_1.setVisible(true);lyr__2.setVisible(true);lyr_noussochuiso_3.setVisible(true);lyr__4.setVisible(true);lyr_jyunkannkiiso_5.setVisible(true);lyr__6.setVisible(true);lyr_shuusannkiiso_7.setVisible(true);lyr__8.setVisible(true);lyr_shouniiso_9.setVisible(true);lyr__10.setVisible(true);lyr__11.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ganniso_1,lyr__2,lyr_noussochuiso_3,lyr__4,lyr_jyunkannkiiso_5,lyr__6,lyr_shuusannkiiso_7,lyr__8,lyr_shouniiso_9,lyr__10,lyr__11];
lyr_ganniso_1.set('fieldAliases', {'fid': 'fid', '医療機関コード': '医療機関コード', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr__2.set('fieldAliases', {'二次医療圏': '二次医療圏', '保健所管内': '保健所管内', '病院名': '病院名', '医療機関コード': '医療機関コード', '緯度 (M列)': '緯度 (M列)', '経度 (N列)': '経度 (N列)', '小児': '小児', '周産期': '周産期', '循環器': '循環器', '脳卒中': '脳卒中', 'がん': 'がん', 'memo': 'memo', });
lyr_noussochuiso_3.set('fieldAliases', {'fid': 'fid', '医療機関コード': '医療機関コード', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr__4.set('fieldAliases', {'二次医療圏': '二次医療圏', '保健所管内': '保健所管内', '病院名': '病院名', '医療機関コード': '医療機関コード', '緯度 (M列)': '緯度 (M列)', '経度 (N列)': '経度 (N列)', '小児': '小児', '周産期': '周産期', '循環器': '循環器', '脳卒中': '脳卒中', 'がん': 'がん', 'memo': 'memo', });
lyr_jyunkannkiiso_5.set('fieldAliases', {'fid': 'fid', '医療機関コード': '医療機関コード', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr__6.set('fieldAliases', {'二次医療圏': '二次医療圏', '保健所管内': '保健所管内', '病院名': '病院名', '医療機関コード': '医療機関コード', '緯度 (M列)': '緯度 (M列)', '経度 (N列)': '経度 (N列)', '小児': '小児', '周産期': '周産期', '循環器': '循環器', '脳卒中': '脳卒中', 'がん': 'がん', 'memo': 'memo', });
lyr_shuusannkiiso_7.set('fieldAliases', {'fid': 'fid', '医療機関コード': '医療機関コード', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr__8.set('fieldAliases', {'二次医療圏': '二次医療圏', '保健所管内': '保健所管内', '病院名': '病院名', '医療機関コード': '医療機関コード', '緯度 (M列)': '緯度 (M列)', '経度 (N列)': '経度 (N列)', '小児': '小児', '周産期': '周産期', '循環器': '循環器', '脳卒中': '脳卒中', 'がん': 'がん', 'memo': 'memo', });
lyr_shouniiso_9.set('fieldAliases', {'fid': 'fid', '医療機関コード': '医療機関コード', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr__10.set('fieldAliases', {'二次医療圏': '二次医療圏', '保健所管内': '保健所管内', '病院名': '病院名', '医療機関コード': '医療機関コード', '緯度 (M列)': '緯度 (M列)', '経度 (N列)': '経度 (N列)', '小児': '小児', '周産期': '周産期', '循環器': '循環器', '脳卒中': '脳卒中', 'がん': 'がん', 'memo': 'memo', });
lyr__11.set('fieldAliases', {'二次医療圏': '二次医療圏', '保健所管内': '保健所管内', '病院名': '病院名', '医療機関コード': '医療機関コード', '緯度 (M列)': '緯度 (M列)', '経度 (N列)': '経度 (N列)', '小児': '小児', '周産期': '周産期', '循環器': '循環器', '脳卒中': '脳卒中', 'がん': 'がん', 'memo': 'memo', });
lyr_ganniso_1.set('fieldImages', {'fid': 'TextEdit', '医療機関コード': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'Range', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr__2.set('fieldImages', {'二次医療圏': 'TextEdit', '保健所管内': 'TextEdit', '病院名': 'TextEdit', '医療機関コード': 'TextEdit', '緯度 (M列)': 'TextEdit', '経度 (N列)': 'TextEdit', '小児': 'TextEdit', '周産期': 'TextEdit', '循環器': 'TextEdit', '脳卒中': 'TextEdit', 'がん': 'TextEdit', 'memo': 'TextEdit', });
lyr_noussochuiso_3.set('fieldImages', {'fid': 'TextEdit', '医療機関コード': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'Range', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr__4.set('fieldImages', {'二次医療圏': 'TextEdit', '保健所管内': 'TextEdit', '病院名': 'TextEdit', '医療機関コード': 'TextEdit', '緯度 (M列)': 'TextEdit', '経度 (N列)': 'TextEdit', '小児': 'TextEdit', '周産期': 'TextEdit', '循環器': 'TextEdit', '脳卒中': 'TextEdit', 'がん': 'TextEdit', 'memo': 'TextEdit', });
lyr_jyunkannkiiso_5.set('fieldImages', {'fid': 'TextEdit', '医療機関コード': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'Range', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr__6.set('fieldImages', {'二次医療圏': 'TextEdit', '保健所管内': 'TextEdit', '病院名': 'TextEdit', '医療機関コード': 'TextEdit', '緯度 (M列)': 'TextEdit', '経度 (N列)': 'TextEdit', '小児': 'TextEdit', '周産期': 'TextEdit', '循環器': 'TextEdit', '脳卒中': 'TextEdit', 'がん': 'TextEdit', 'memo': 'TextEdit', });
lyr_shuusannkiiso_7.set('fieldImages', {'fid': 'TextEdit', '医療機関コード': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'Range', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr__8.set('fieldImages', {'二次医療圏': 'TextEdit', '保健所管内': 'TextEdit', '病院名': 'TextEdit', '医療機関コード': 'TextEdit', '緯度 (M列)': 'TextEdit', '経度 (N列)': 'TextEdit', '小児': 'TextEdit', '周産期': 'TextEdit', '循環器': 'TextEdit', '脳卒中': 'TextEdit', 'がん': 'TextEdit', 'memo': 'TextEdit', });
lyr_shouniiso_9.set('fieldImages', {'fid': 'TextEdit', '医療機関コード': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'Range', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr__10.set('fieldImages', {'二次医療圏': 'TextEdit', '保健所管内': 'TextEdit', '病院名': 'TextEdit', '医療機関コード': 'TextEdit', '緯度 (M列)': 'TextEdit', '経度 (N列)': 'TextEdit', '小児': 'TextEdit', '周産期': 'TextEdit', '循環器': 'TextEdit', '脳卒中': 'TextEdit', 'がん': 'TextEdit', 'memo': 'TextEdit', });
lyr__11.set('fieldImages', {'二次医療圏': 'TextEdit', '保健所管内': 'TextEdit', '病院名': 'TextEdit', '医療機関コード': 'TextEdit', '緯度 (M列)': 'TextEdit', '経度 (N列)': 'TextEdit', '小児': 'TextEdit', '周産期': 'TextEdit', '循環器': 'TextEdit', '脳卒中': 'TextEdit', 'がん': 'TextEdit', 'memo': 'TextEdit', });
lyr_ganniso_1.set('fieldLabels', {'fid': 'no label', '医療機関コード': 'no label', 'CENTER_LON': 'no label', 'CENTER_LAT': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', });
lyr__2.set('fieldLabels', {'二次医療圏': 'no label', '保健所管内': 'no label', '病院名': 'inline label - always visible', '医療機関コード': 'no label', '緯度 (M列)': 'no label', '経度 (N列)': 'no label', '小児': 'no label', '周産期': 'no label', '循環器': 'no label', '脳卒中': 'no label', 'がん': 'no label', 'memo': 'no label', });
lyr_noussochuiso_3.set('fieldLabels', {'fid': 'no label', '医療機関コード': 'no label', 'CENTER_LON': 'no label', 'CENTER_LAT': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', });
lyr__4.set('fieldLabels', {'二次医療圏': 'no label', '保健所管内': 'inline label - always visible', '病院名': 'no label', '医療機関コード': 'no label', '緯度 (M列)': 'no label', '経度 (N列)': 'no label', '小児': 'no label', '周産期': 'no label', '循環器': 'no label', '脳卒中': 'no label', 'がん': 'no label', 'memo': 'no label', });
lyr_jyunkannkiiso_5.set('fieldLabels', {'fid': 'no label', '医療機関コード': 'no label', 'CENTER_LON': 'no label', 'CENTER_LAT': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', });
lyr__6.set('fieldLabels', {'二次医療圏': 'no label', '保健所管内': 'no label', '病院名': 'inline label - always visible', '医療機関コード': 'no label', '緯度 (M列)': 'no label', '経度 (N列)': 'no label', '小児': 'no label', '周産期': 'no label', '循環器': 'no label', '脳卒中': 'no label', 'がん': 'no label', 'memo': 'no label', });
lyr_shuusannkiiso_7.set('fieldLabels', {'fid': 'no label', '医療機関コード': 'no label', 'CENTER_LON': 'no label', 'CENTER_LAT': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', });
lyr__8.set('fieldLabels', {'二次医療圏': 'no label', '保健所管内': 'no label', '病院名': 'inline label - always visible', '医療機関コード': 'no label', '緯度 (M列)': 'no label', '経度 (N列)': 'no label', '小児': 'no label', '周産期': 'no label', '循環器': 'no label', '脳卒中': 'no label', 'がん': 'no label', 'memo': 'no label', });
lyr_shouniiso_9.set('fieldLabels', {'fid': 'no label', '医療機関コード': 'no label', 'CENTER_LON': 'no label', 'CENTER_LAT': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', });
lyr__10.set('fieldLabels', {'二次医療圏': 'no label', '保健所管内': 'no label', '病院名': 'inline label - always visible', '医療機関コード': 'no label', '緯度 (M列)': 'no label', '経度 (N列)': 'no label', '小児': 'no label', '周産期': 'no label', '循環器': 'no label', '脳卒中': 'no label', 'がん': 'no label', 'memo': 'no label', });
lyr__11.set('fieldLabels', {'二次医療圏': 'no label', '保健所管内': 'no label', '病院名': 'inline label - always visible', '医療機関コード': 'no label', '緯度 (M列)': 'no label', '経度 (N列)': 'no label', '小児': 'no label', '周産期': 'no label', '循環器': 'no label', '脳卒中': 'no label', 'がん': 'no label', 'memo': 'no label', });
lyr__11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});