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
var format_gannhosp_2 = new ol.format.GeoJSON();
var features_gannhosp_2 = format_gannhosp_2.readFeatures(json_gannhosp_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gannhosp_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gannhosp_2.addFeatures(features_gannhosp_2);
var lyr_gannhosp_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gannhosp_2, 
                style: style_gannhosp_2,
                popuplayertitle: 'gannhosp',
                interactive: true,
                title: '<img src="styles/legend/gannhosp_2.png" /> gannhosp'
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
var format_noussochuhosp_4 = new ol.format.GeoJSON();
var features_noussochuhosp_4 = format_noussochuhosp_4.readFeatures(json_noussochuhosp_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_noussochuhosp_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_noussochuhosp_4.addFeatures(features_noussochuhosp_4);
var lyr_noussochuhosp_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_noussochuhosp_4, 
                style: style_noussochuhosp_4,
                popuplayertitle: 'noussochuhosp',
                interactive: true,
                title: '<img src="styles/legend/noussochuhosp_4.png" /> noussochuhosp'
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
var format_jyunnkankihosp_6 = new ol.format.GeoJSON();
var features_jyunnkankihosp_6 = format_jyunnkankihosp_6.readFeatures(json_jyunnkankihosp_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jyunnkankihosp_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jyunnkankihosp_6.addFeatures(features_jyunnkankihosp_6);
var lyr_jyunnkankihosp_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jyunnkankihosp_6, 
                style: style_jyunnkankihosp_6,
                popuplayertitle: 'jyunnkankihosp',
                interactive: true,
                title: '<img src="styles/legend/jyunnkankihosp_6.png" /> jyunnkankihosp'
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
var format_shuusankihosp_8 = new ol.format.GeoJSON();
var features_shuusankihosp_8 = format_shuusankihosp_8.readFeatures(json_shuusankihosp_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_shuusankihosp_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_shuusankihosp_8.addFeatures(features_shuusankihosp_8);
var lyr_shuusankihosp_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_shuusankihosp_8, 
                style: style_shuusankihosp_8,
                popuplayertitle: 'shuusankihosp',
                interactive: true,
                title: '<img src="styles/legend/shuusankihosp_8.png" /> shuusankihosp'
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
var format_shounihosp_10 = new ol.format.GeoJSON();
var features_shounihosp_10 = format_shounihosp_10.readFeatures(json_shounihosp_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_shounihosp_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_shounihosp_10.addFeatures(features_shounihosp_10);
var lyr_shounihosp_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_shounihosp_10, 
                style: style_shounihosp_10,
                popuplayertitle: 'shounihosp',
                interactive: true,
                title: '<img src="styles/legend/shounihosp_10.png" /> shounihosp'
            });
var format_mainhospitals_11 = new ol.format.GeoJSON();
var features_mainhospitals_11 = format_mainhospitals_11.readFeatures(json_mainhospitals_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mainhospitals_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mainhospitals_11.addFeatures(features_mainhospitals_11);
var lyr_mainhospitals_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mainhospitals_11, 
                style: style_mainhospitals_11,
                popuplayertitle: 'mainhospitals',
                interactive: true,
                title: '<img src="styles/legend/mainhospitals_11.png" /> mainhospitals'
            });
var format_kyotomap_12 = new ol.format.GeoJSON();
var features_kyotomap_12 = format_kyotomap_12.readFeatures(json_kyotomap_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kyotomap_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kyotomap_12.addFeatures(features_kyotomap_12);
var lyr_kyotomap_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kyotomap_12, 
                style: style_kyotomap_12,
                popuplayertitle: 'kyotomap',
                interactive: true,
                title: '<img src="styles/legend/kyotomap_12.png" /> kyotomap'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ganniso_1.setVisible(true);lyr_gannhosp_2.setVisible(true);lyr_noussochuiso_3.setVisible(true);lyr_noussochuhosp_4.setVisible(true);lyr_jyunkannkiiso_5.setVisible(true);lyr_jyunnkankihosp_6.setVisible(true);lyr_shuusannkiiso_7.setVisible(true);lyr_shuusankihosp_8.setVisible(true);lyr_shouniiso_9.setVisible(true);lyr_shounihosp_10.setVisible(true);lyr_mainhospitals_11.setVisible(true);lyr_kyotomap_12.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ganniso_1,lyr_gannhosp_2,lyr_noussochuiso_3,lyr_noussochuhosp_4,lyr_jyunkannkiiso_5,lyr_jyunnkankihosp_6,lyr_shuusannkiiso_7,lyr_shuusankihosp_8,lyr_shouniiso_9,lyr_shounihosp_10,lyr_mainhospitals_11,lyr_kyotomap_12];
lyr_ganniso_1.set('fieldAliases', {'fid': 'fid', '医療機関コード': '医療機関コード', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_gannhosp_2.set('fieldAliases', {'二次医療圏': '二次医療圏', '保健所管内': '保健所管内', '病院名': '病院名', '医療機関コード': '医療機関コード', '緯度 (M列)': '緯度 (M列)', '経度 (N列)': '経度 (N列)', '小児': '小児', '周産期': '周産期', '循環器': '循環器', '脳卒中': '脳卒中', 'がん': 'がん', 'memo': 'memo', });
lyr_noussochuiso_3.set('fieldAliases', {'fid': 'fid', '医療機関コード': '医療機関コード', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_noussochuhosp_4.set('fieldAliases', {'二次医療圏': '二次医療圏', '保健所管内': '保健所管内', '病院名': '病院名', '医療機関コード': '医療機関コード', '緯度 (M列)': '緯度 (M列)', '経度 (N列)': '経度 (N列)', '小児': '小児', '周産期': '周産期', '循環器': '循環器', '脳卒中': '脳卒中', 'がん': 'がん', 'memo': 'memo', });
lyr_jyunkannkiiso_5.set('fieldAliases', {'fid': 'fid', '医療機関コード': '医療機関コード', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_jyunnkankihosp_6.set('fieldAliases', {'二次医療圏': '二次医療圏', '保健所管内': '保健所管内', '病院名': '病院名', '医療機関コード': '医療機関コード', '緯度 (M列)': '緯度 (M列)', '経度 (N列)': '経度 (N列)', '小児': '小児', '周産期': '周産期', '循環器': '循環器', '脳卒中': '脳卒中', 'がん': 'がん', 'memo': 'memo', });
lyr_shuusannkiiso_7.set('fieldAliases', {'fid': 'fid', '医療機関コード': '医療機関コード', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_shuusankihosp_8.set('fieldAliases', {'二次医療圏': '二次医療圏', '保健所管内': '保健所管内', '病院名': '病院名', '医療機関コード': '医療機関コード', '緯度 (M列)': '緯度 (M列)', '経度 (N列)': '経度 (N列)', '小児': '小児', '周産期': '周産期', '循環器': '循環器', '脳卒中': '脳卒中', 'がん': 'がん', 'memo': 'memo', });
lyr_shouniiso_9.set('fieldAliases', {'fid': 'fid', '医療機関コード': '医療機関コード', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_shounihosp_10.set('fieldAliases', {'二次医療圏': '二次医療圏', '保健所管内': '保健所管内', '病院名': '病院名', '医療機関コード': '医療機関コード', '緯度 (M列)': '緯度 (M列)', '経度 (N列)': '経度 (N列)', '小児': '小児', '周産期': '周産期', '循環器': '循環器', '脳卒中': '脳卒中', 'がん': 'がん', 'memo': 'memo', });
lyr_mainhospitals_11.set('fieldAliases', {'二次医療圏': '二次医療圏', '保健所管内': '保健所管内', '病院名': '病院名', '医療機関コード': '医療機関コード', '緯度 (M列)': '緯度 (M列)', '経度 (N列)': '経度 (N列)', '小児': '小児', '周産期': '周産期', '循環器': '循環器', '脳卒中': '脳卒中', 'がん': 'がん', 'memo': 'memo', });
lyr_kyotomap_12.set('fieldAliases', {'A38c_001': 'A38c_001', 'A38c_002': 'A38c_002', });
lyr_ganniso_1.set('fieldImages', {'fid': 'TextEdit', '医療機関コード': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'Range', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_gannhosp_2.set('fieldImages', {'二次医療圏': 'TextEdit', '保健所管内': 'TextEdit', '病院名': 'TextEdit', '医療機関コード': 'TextEdit', '緯度 (M列)': 'TextEdit', '経度 (N列)': 'TextEdit', '小児': 'TextEdit', '周産期': 'TextEdit', '循環器': 'TextEdit', '脳卒中': 'TextEdit', 'がん': 'TextEdit', 'memo': 'TextEdit', });
lyr_noussochuiso_3.set('fieldImages', {'fid': 'TextEdit', '医療機関コード': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'Range', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_noussochuhosp_4.set('fieldImages', {'二次医療圏': 'TextEdit', '保健所管内': 'TextEdit', '病院名': 'TextEdit', '医療機関コード': 'TextEdit', '緯度 (M列)': 'TextEdit', '経度 (N列)': 'TextEdit', '小児': 'TextEdit', '周産期': 'TextEdit', '循環器': 'TextEdit', '脳卒中': 'TextEdit', 'がん': 'TextEdit', 'memo': 'TextEdit', });
lyr_jyunkannkiiso_5.set('fieldImages', {'fid': 'TextEdit', '医療機関コード': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'Range', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_jyunnkankihosp_6.set('fieldImages', {'二次医療圏': 'TextEdit', '保健所管内': 'TextEdit', '病院名': 'TextEdit', '医療機関コード': 'TextEdit', '緯度 (M列)': 'TextEdit', '経度 (N列)': 'TextEdit', '小児': 'TextEdit', '周産期': 'TextEdit', '循環器': 'TextEdit', '脳卒中': 'TextEdit', 'がん': 'TextEdit', 'memo': 'TextEdit', });
lyr_shuusannkiiso_7.set('fieldImages', {'fid': 'TextEdit', '医療機関コード': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'Range', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_shuusankihosp_8.set('fieldImages', {'二次医療圏': 'TextEdit', '保健所管内': 'TextEdit', '病院名': 'TextEdit', '医療機関コード': 'TextEdit', '緯度 (M列)': 'TextEdit', '経度 (N列)': 'TextEdit', '小児': 'TextEdit', '周産期': 'TextEdit', '循環器': 'TextEdit', '脳卒中': 'TextEdit', 'がん': 'TextEdit', 'memo': 'TextEdit', });
lyr_shouniiso_9.set('fieldImages', {'fid': 'TextEdit', '医療機関コード': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'Range', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_shounihosp_10.set('fieldImages', {'二次医療圏': 'TextEdit', '保健所管内': 'TextEdit', '病院名': 'TextEdit', '医療機関コード': 'TextEdit', '緯度 (M列)': 'TextEdit', '経度 (N列)': 'TextEdit', '小児': 'TextEdit', '周産期': 'TextEdit', '循環器': 'TextEdit', '脳卒中': 'TextEdit', 'がん': 'TextEdit', 'memo': 'TextEdit', });
lyr_mainhospitals_11.set('fieldImages', {'二次医療圏': 'TextEdit', '保健所管内': 'TextEdit', '病院名': 'TextEdit', '医療機関コード': 'TextEdit', '緯度 (M列)': 'TextEdit', '経度 (N列)': 'TextEdit', '小児': 'TextEdit', '周産期': 'TextEdit', '循環器': 'TextEdit', '脳卒中': 'TextEdit', 'がん': 'TextEdit', 'memo': 'TextEdit', });
lyr_kyotomap_12.set('fieldImages', {'A38c_001': 'TextEdit', 'A38c_002': 'TextEdit', });
lyr_ganniso_1.set('fieldLabels', {'fid': 'no label', '医療機関コード': 'no label', 'CENTER_LON': 'no label', 'CENTER_LAT': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', });
lyr_gannhosp_2.set('fieldLabels', {'二次医療圏': 'no label', '保健所管内': 'no label', '病院名': 'inline label - always visible', '医療機関コード': 'no label', '緯度 (M列)': 'no label', '経度 (N列)': 'no label', '小児': 'no label', '周産期': 'no label', '循環器': 'no label', '脳卒中': 'no label', 'がん': 'no label', 'memo': 'no label', });
lyr_noussochuiso_3.set('fieldLabels', {'fid': 'no label', '医療機関コード': 'no label', 'CENTER_LON': 'no label', 'CENTER_LAT': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', });
lyr_noussochuhosp_4.set('fieldLabels', {'二次医療圏': 'no label', '保健所管内': 'inline label - always visible', '病院名': 'no label', '医療機関コード': 'no label', '緯度 (M列)': 'no label', '経度 (N列)': 'no label', '小児': 'no label', '周産期': 'no label', '循環器': 'no label', '脳卒中': 'no label', 'がん': 'no label', 'memo': 'no label', });
lyr_jyunkannkiiso_5.set('fieldLabels', {'fid': 'no label', '医療機関コード': 'no label', 'CENTER_LON': 'no label', 'CENTER_LAT': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', });
lyr_jyunnkankihosp_6.set('fieldLabels', {'二次医療圏': 'no label', '保健所管内': 'no label', '病院名': 'inline label - always visible', '医療機関コード': 'no label', '緯度 (M列)': 'no label', '経度 (N列)': 'no label', '小児': 'no label', '周産期': 'no label', '循環器': 'no label', '脳卒中': 'no label', 'がん': 'no label', 'memo': 'no label', });
lyr_shuusannkiiso_7.set('fieldLabels', {'fid': 'no label', '医療機関コード': 'no label', 'CENTER_LON': 'no label', 'CENTER_LAT': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', });
lyr_shuusankihosp_8.set('fieldLabels', {'二次医療圏': 'no label', '保健所管内': 'no label', '病院名': 'inline label - always visible', '医療機関コード': 'no label', '緯度 (M列)': 'no label', '経度 (N列)': 'no label', '小児': 'no label', '周産期': 'no label', '循環器': 'no label', '脳卒中': 'no label', 'がん': 'no label', 'memo': 'no label', });
lyr_shouniiso_9.set('fieldLabels', {'fid': 'no label', '医療機関コード': 'no label', 'CENTER_LON': 'no label', 'CENTER_LAT': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', });
lyr_shounihosp_10.set('fieldLabels', {'二次医療圏': 'no label', '保健所管内': 'no label', '病院名': 'inline label - always visible', '医療機関コード': 'no label', '緯度 (M列)': 'no label', '経度 (N列)': 'no label', '小児': 'no label', '周産期': 'no label', '循環器': 'no label', '脳卒中': 'no label', 'がん': 'no label', 'memo': 'no label', });
lyr_mainhospitals_11.set('fieldLabels', {'二次医療圏': 'no label', '保健所管内': 'no label', '病院名': 'inline label - always visible', '医療機関コード': 'no label', '緯度 (M列)': 'no label', '経度 (N列)': 'no label', '小児': 'no label', '周産期': 'no label', '循環器': 'no label', '脳卒中': 'no label', 'がん': 'no label', 'memo': 'no label', });
lyr_kyotomap_12.set('fieldLabels', {'A38c_001': 'no label', 'A38c_002': 'no label', });
lyr_kyotomap_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});