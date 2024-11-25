var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_GiroseliminadosSeptiembre_1 = new ol.format.GeoJSON();
var features_GiroseliminadosSeptiembre_1 = format_GiroseliminadosSeptiembre_1.readFeatures(json_GiroseliminadosSeptiembre_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GiroseliminadosSeptiembre_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GiroseliminadosSeptiembre_1.addFeatures(features_GiroseliminadosSeptiembre_1);
var lyr_GiroseliminadosSeptiembre_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GiroseliminadosSeptiembre_1, 
                style: style_GiroseliminadosSeptiembre_1,
                popuplayertitle: "Giros eliminados — Septiembre",
                interactive: true,
                title: '<img src="styles/legend/GiroseliminadosSeptiembre_1.png" /> Giros eliminados — Septiembre'
            });
var format_GiroseliminadosAgosto_2 = new ol.format.GeoJSON();
var features_GiroseliminadosAgosto_2 = format_GiroseliminadosAgosto_2.readFeatures(json_GiroseliminadosAgosto_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GiroseliminadosAgosto_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GiroseliminadosAgosto_2.addFeatures(features_GiroseliminadosAgosto_2);
var lyr_GiroseliminadosAgosto_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GiroseliminadosAgosto_2, 
                style: style_GiroseliminadosAgosto_2,
                popuplayertitle: "Giros eliminados — Agosto",
                interactive: true,
                title: '<img src="styles/legend/GiroseliminadosAgosto_2.png" /> Giros eliminados — Agosto'
            });
var format_GiroseliminadosJulio_3 = new ol.format.GeoJSON();
var features_GiroseliminadosJulio_3 = format_GiroseliminadosJulio_3.readFeatures(json_GiroseliminadosJulio_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GiroseliminadosJulio_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GiroseliminadosJulio_3.addFeatures(features_GiroseliminadosJulio_3);
var lyr_GiroseliminadosJulio_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GiroseliminadosJulio_3, 
                style: style_GiroseliminadosJulio_3,
                popuplayertitle: "Giros eliminados — Julio",
                interactive: true,
                title: '<img src="styles/legend/GiroseliminadosJulio_3.png" /> Giros eliminados — Julio'
            });
var format_GiroseliminadosJunio_4 = new ol.format.GeoJSON();
var features_GiroseliminadosJunio_4 = format_GiroseliminadosJunio_4.readFeatures(json_GiroseliminadosJunio_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GiroseliminadosJunio_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GiroseliminadosJunio_4.addFeatures(features_GiroseliminadosJunio_4);
var lyr_GiroseliminadosJunio_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GiroseliminadosJunio_4, 
                style: style_GiroseliminadosJunio_4,
                popuplayertitle: "Giros eliminados — Junio",
                interactive: true,
                title: '<img src="styles/legend/GiroseliminadosJunio_4.png" /> Giros eliminados — Junio'
            });
var format_GiroseliminadosMayo_5 = new ol.format.GeoJSON();
var features_GiroseliminadosMayo_5 = format_GiroseliminadosMayo_5.readFeatures(json_GiroseliminadosMayo_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GiroseliminadosMayo_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GiroseliminadosMayo_5.addFeatures(features_GiroseliminadosMayo_5);
var lyr_GiroseliminadosMayo_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GiroseliminadosMayo_5, 
                style: style_GiroseliminadosMayo_5,
                popuplayertitle: "Giros eliminados — Mayo",
                interactive: true,
                title: '<img src="styles/legend/GiroseliminadosMayo_5.png" /> Giros eliminados — Mayo'
            });
var format_GiroseliminadosAbril_6 = new ol.format.GeoJSON();
var features_GiroseliminadosAbril_6 = format_GiroseliminadosAbril_6.readFeatures(json_GiroseliminadosAbril_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GiroseliminadosAbril_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GiroseliminadosAbril_6.addFeatures(features_GiroseliminadosAbril_6);
var lyr_GiroseliminadosAbril_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GiroseliminadosAbril_6, 
                style: style_GiroseliminadosAbril_6,
                popuplayertitle: "Giros eliminados — Abril",
                interactive: true,
                title: '<img src="styles/legend/GiroseliminadosAbril_6.png" /> Giros eliminados — Abril'
            });
var format_reasSL16_7 = new ol.format.GeoJSON();
var features_reasSL16_7 = format_reasSL16_7.readFeatures(json_reasSL16_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasSL16_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasSL16_7.addFeatures(features_reasSL16_7);
var lyr_reasSL16_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasSL16_7, 
                style: style_reasSL16_7,
                popuplayertitle: "Áreas SL 16",
                interactive: true,
    title: 'Áreas SL 16<br />\
    <img src="styles/legend/reasSL16_7_0.png" /> Area 1<br />\
    <img src="styles/legend/reasSL16_7_1.png" /> Area 2<br />\
    <img src="styles/legend/reasSL16_7_2.png" /> Area 3<br />'
        });
var group_Giroseliminados43 = new ol.layer.Group({
                                layers: [lyr_GiroseliminadosSeptiembre_1,lyr_GiroseliminadosAgosto_2,lyr_GiroseliminadosJulio_3,lyr_GiroseliminadosJunio_4,lyr_GiroseliminadosMayo_5,lyr_GiroseliminadosAbril_6,],
                                fold: "open",
                                title: "Giros eliminados (43)"});

lyr_OSMStandard_0.setVisible(true);lyr_GiroseliminadosSeptiembre_1.setVisible(true);lyr_GiroseliminadosAgosto_2.setVisible(true);lyr_GiroseliminadosJulio_3.setVisible(true);lyr_GiroseliminadosJunio_4.setVisible(true);lyr_GiroseliminadosMayo_5.setVisible(true);lyr_GiroseliminadosAbril_6.setVisible(true);lyr_reasSL16_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,group_Giroseliminados43,lyr_reasSL16_7];
lyr_GiroseliminadosSeptiembre_1.set('fieldAliases', {'qc_id': 'qc_id', 'name': 'name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudemode': 'altitudemode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'draworder': 'draworder', 'icon': 'icon', '__rea': '__rea', 'n__mero': 'n__mero', 'fecha_de_implementaci__n': 'fecha_de_implementaci__n', 'ubicaci__n': 'ubicaci__n', });
lyr_GiroseliminadosAgosto_2.set('fieldAliases', {'qc_id': 'qc_id', 'name': 'name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudemode': 'altitudemode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'draworder': 'draworder', 'icon': 'icon', '__rea': '__rea', 'n__mero': 'n__mero', 'fecha_de_implementaci__n': 'fecha_de_implementaci__n', 'ubicaci__n': 'ubicaci__n', });
lyr_GiroseliminadosJulio_3.set('fieldAliases', {'qc_id': 'qc_id', 'name': 'name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudemode': 'altitudemode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'draworder': 'draworder', 'icon': 'icon', '__rea': '__rea', 'n__mero': 'n__mero', 'fecha_de_implementaci__n': 'fecha_de_implementaci__n', 'ubicaci__n': 'ubicaci__n', });
lyr_GiroseliminadosJunio_4.set('fieldAliases', {'qc_id': 'qc_id', 'name': 'name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudemode': 'altitudemode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'draworder': 'draworder', 'icon': 'icon', '__rea': '__rea', 'n__mero': 'n__mero', 'fecha_de_implementaci__n': 'fecha_de_implementaci__n', 'ubicaci__n': 'ubicaci__n', });
lyr_GiroseliminadosMayo_5.set('fieldAliases', {'qc_id': 'qc_id', 'name': 'name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudemode': 'altitudemode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'draworder': 'draworder', 'icon': 'icon', '__rea': '__rea', 'n__mero': 'n__mero', 'fecha_de_implementaci__n': 'fecha_de_implementaci__n', });
lyr_GiroseliminadosAbril_6.set('fieldAliases', {'qc_id': 'qc_id', 'name': 'name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudemode': 'altitudemode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'draworder': 'draworder', 'icon': 'icon', '__rea': '__rea', 'n__mero': 'n__mero', 'fecha_de_implementaci__n': 'fecha_de_implementaci__n', 'ubicaci__n': 'ubicaci__n', });
lyr_reasSL16_7.set('fieldAliases', {'fid': 'fid', 'qc_id': 'qc_id', 'name': 'name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudemode': 'altitudemode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'draworder': 'draworder', 'icon': 'icon', });
lyr_GiroseliminadosSeptiembre_1.set('fieldImages', {'qc_id': '', 'name': '', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudemode': '', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'draworder': '', 'icon': 'TextEdit', '__rea': 'TextEdit', 'n__mero': '', 'fecha_de_implementaci__n': '', 'ubicaci__n': 'TextEdit', });
lyr_GiroseliminadosAgosto_2.set('fieldImages', {'qc_id': '', 'name': '', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudemode': '', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'draworder': '', 'icon': 'TextEdit', '__rea': 'TextEdit', 'n__mero': '', 'fecha_de_implementaci__n': '', 'ubicaci__n': 'TextEdit', });
lyr_GiroseliminadosJulio_3.set('fieldImages', {'qc_id': '', 'name': '', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudemode': '', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'draworder': '', 'icon': 'TextEdit', '__rea': 'TextEdit', 'n__mero': '', 'fecha_de_implementaci__n': '', 'ubicaci__n': 'TextEdit', });
lyr_GiroseliminadosJunio_4.set('fieldImages', {'qc_id': '', 'name': '', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudemode': '', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'draworder': '', 'icon': 'TextEdit', '__rea': 'TextEdit', 'n__mero': '', 'fecha_de_implementaci__n': '', 'ubicaci__n': 'TextEdit', });
lyr_GiroseliminadosMayo_5.set('fieldImages', {'qc_id': '', 'name': '', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudemode': '', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'draworder': '', 'icon': 'TextEdit', '__rea': 'TextEdit', 'n__mero': '', 'fecha_de_implementaci__n': '', });
lyr_GiroseliminadosAbril_6.set('fieldImages', {'qc_id': '', 'name': '', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudemode': '', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'draworder': '', 'icon': 'TextEdit', '__rea': 'TextEdit', 'n__mero': '', 'fecha_de_implementaci__n': '', 'ubicaci__n': 'TextEdit', });
lyr_reasSL16_7.set('fieldImages', {'fid': '', 'qc_id': 'Range', 'name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudemode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'draworder': 'Range', 'icon': 'TextEdit', });
lyr_GiroseliminadosSeptiembre_1.set('fieldLabels', {'qc_id': 'no label', 'name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudemode': 'no label', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'draworder': 'no label', 'icon': 'hidden field', '__rea': 'header label - visible with data', 'n__mero': 'no label', 'fecha_de_implementaci__n': 'no label', 'ubicaci__n': 'header label - visible with data', });
lyr_GiroseliminadosAgosto_2.set('fieldLabels', {'qc_id': 'no label', 'name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudemode': 'no label', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'draworder': 'no label', 'icon': 'hidden field', '__rea': 'header label - visible with data', 'n__mero': 'no label', 'fecha_de_implementaci__n': 'no label', 'ubicaci__n': 'header label - visible with data', });
lyr_GiroseliminadosJulio_3.set('fieldLabels', {'qc_id': 'no label', 'name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudemode': 'no label', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'draworder': 'no label', 'icon': 'hidden field', '__rea': 'header label - visible with data', 'n__mero': 'no label', 'fecha_de_implementaci__n': 'no label', 'ubicaci__n': 'header label - visible with data', });
lyr_GiroseliminadosJunio_4.set('fieldLabels', {'qc_id': 'no label', 'name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudemode': 'no label', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'draworder': 'no label', 'icon': 'hidden field', '__rea': 'header label - visible with data', 'n__mero': 'no label', 'fecha_de_implementaci__n': 'no label', 'ubicaci__n': 'header label - visible with data', });
lyr_GiroseliminadosMayo_5.set('fieldLabels', {'qc_id': 'no label', 'name': 'no label', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudemode': 'no label', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'draworder': 'no label', 'icon': 'hidden field', '__rea': 'header label - visible with data', 'n__mero': 'no label', 'fecha_de_implementaci__n': 'no label', });
lyr_GiroseliminadosAbril_6.set('fieldLabels', {'qc_id': 'no label', 'name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudemode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'draworder': 'no label', 'icon': 'no label', '__rea': 'no label', 'n__mero': 'no label', 'fecha_de_implementaci__n': 'no label', 'ubicaci__n': 'no label', });
lyr_reasSL16_7.set('fieldLabels', {'fid': 'no label', 'qc_id': 'no label', 'name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudemode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'draworder': 'no label', 'icon': 'no label', });
lyr_reasSL16_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});