import React, {Component} from 'react';
const point = require('./pointSimplifierIns.json')


class amap extends Component {
    constructor (props) {
        super(props)
        this.state = {
            currentMarkerInfo: {
                addressComponent: null,
                formattedAddress: null
            }
        }
    }
    render() {
        return (
            <div className="container" ref="container"></div>
        )
    }
    getColorByAdcode (adcode) {
        let colors = {}
        if (!colors[adcode]) {
            var gb = Math.random() * 155 + 50;
            colors[adcode] = 'rgb(' + gb + ',' + gb + ',255)'
        }
        return colors[adcode]
    }
    bindClickPoint (map) {
        const self = this
        map.on('click', function (e) {
            let value = e.lnglat.getLng() + ',' + e.lnglat.getLat()
            if (window.marker) {
              window.marker.setMap(null)
              window.marker = null
            }
            let marker
            addMarker(e.lnglat.getLng(),e.lnglat.getLat())
            function addMarker (lng,lat) {
                marker = new window.AMap.Marker({
                    icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
                    position: [lng, lat],
                });
                window.marker = marker
                marker.setMap(map)
                if (window.infoWindow) {
                    window.infoWindow.setMap(null)
                    window.infoWindow = null
                }
                self.regeoCode(map, value)
            }
        })
    }
    regeoCode (map, value) {
        const self = this
        let geocoder = new window.AMap.Geocoder({})
        geocoder.getAddress(value, function(status, result) {
            if (status === 'complete') {
                self.fillCurrentMarkerInfo(result)
                self.initSimpleInfoWindowOnMarker(map)
            }
        })
    }
    initPointSimplifierGar (map) {
        let colors = [
            '#0cc2f2',
            '#4fd2b1',
            '#90e36f',
            '#ffe700',
            '#ff9e00',
            '#ff6700',
            '#ff1800'
        ]
        window.AMapUI.load(['ui/misc/PointSimplifier', 'lib/$'], function(PointSimplifier, $) {
            if (!PointSimplifier.supportCanvas) {
                alert('当前环境不支持 Canvas！');
                return;
            }
            let pointSimplifierIns = new PointSimplifier({
                zIndex: 115,
                autoSetFitView: false,
                map: map,
                getPosition: function (item) {
                    if (!item) {
                        return null;
                    }
                    let parts = item.split(',');
                    return [parseFloat(parts[0]), parseFloat(parts[1])];
                },
                renderConstructor: PointSimplifier.Render.Canvas.GroupStyleRender,
                renderOptions: {
                    pointStyle: {
                        fillStyle: null,
                        width: 5,
                        height: 5
                    },
                    topNAreaStyle: null,
                    getGroupId: function (item, idx) {
                        return Math.ceil(colors.length * Math.random())
                    },
                    groupStyleOptions: function(gid) {
                        let radius = 2 + 10 * Math.random()
                        return {
                            pointStyle: radius > 0 ? {
                                content: function(ctx, x, y, width, height) {
                                    var p = {
                                        x: x + width / 2,
                                        y: y + height / 2,
                                        radius: radius
                                    };
                                    ctx.beginPath();
                                    var gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
                                    gradient.addColorStop(0, "rgba(255,231,0,0.8)");
                                    gradient.addColorStop(1, "rgba(255,231,0,0.1)");
                                    ctx.fillStyle = gradient;
                                    ctx.arc(p.x, p.y, p.radius, Math.PI * 2, false);
                                    ctx.fill();
                                },
                                //fillStyle: colors[gid % colors.length],
                                width: radius * 2,
                                height: radius * 2
                            } : null,
                            pointHardcoreStyle: {
                                width: radius * 2 + 3,
                                height: radius * 2 + 3
                            }
                        }
                    }
                }
            })
            window.pointSimplifierIns = pointSimplifierIns
            // console.log(pointSimplifierIns)
            pointSimplifierIns.setData(point)
        })
    }
    fillCurrentMarkerInfo (result) {
        const self = this
        self.currentMarkerInfo = {
            addressComponent: result.regeocode.addressComponent,
            formattedAddress: result.regeocode.formattedAddress
        }
        self.getMarkerAreaInfo(self.currentMarkerInfo, 'marker')
    }
    initSimpleInfoWindowOnMarker (map) {
        const self = this
        window.AMapUI.load(['ui/overlay/SimpleInfoWindow'], function (SimpleInfoWindow) {
            // let marker = window.marker
            let marker = window.marker
            let infoWindow = new SimpleInfoWindow({
                infoTitle: '<strong><%- title %></strong>',
                infoBody: '<p class="my-desc">' +
                    //<%= 原值插入 ..
                    '<%= img %>' +
                    //<%- html编码后插入
                    '<%- body %>' +
                    '</p>',
                infoTplData: {
                    title: self.currentMarkerInfo.addressComponent.district,
                    img: '',
                    body: self.currentMarkerInfo.formattedAddress
                },
                offset: new window.AMap.Pixel(0, -31)
            })
            infoWindow.open(map, marker.getPosition())
            window.infoWindow = infoWindow
        })
    }
    getMarkerAreaInfo (address, type) {}
    initDistrictExplorer (map) {
        const self = this
        window.AMapUI.load(['ui/geo/DistrictExplorer', 'lib/$'], function (DistrictExplorer) {
            let districtExplorer = new DistrictExplorer({
                eventSupport:true,
                map: map
            });
            let adcode = 330300;
            districtExplorer.loadAreaNode(adcode, function (error, areaNode) {
                self.areaNode = areaNode
                map.setBounds(areaNode.getBounds(), null, null, true);
                districtExplorer.clearFeaturePolygons();
                districtExplorer.renderParentFeature(areaNode, {
                    cursor: 'default',
                    bubble: true,
                    strokeColor: '#DD7755', //线颜色
                    strokeOpacity: 1, //线透明度
                    strokeWeight: 1, //线宽
                    fillColor: null, //填充色
                    fillOpacity: 0.35, //填充透明度
                });
                districtExplorer.renderSubFeatures(areaNode, function (feature, i) {
                    return {
                        cursor: 'default',
                        bubble: true,
                        strokeColor: self.getColorByAdcode(feature.properties.adcode), //线颜色
                        strokeOpacity: 1, //线透明度
                        strokeWeight: 1, //线宽
                        fillColor: self.getColorByAdcode(feature.properties.adcode), //填充色
                        fillOpacity: 1, //填充透明度
                    };
                });
                districtExplorer.on('featureMouseout featureMouseover', function(e, feature) {
                    // console.log(e)
                    let props = feature.properties;
                    let polys = districtExplorer.findFeaturePolygonsByAdcode(props.adcode);
                    for (var i = 0, len = polys.length; i < len; i++) {
                        polys[i].setOptions({
                            strokeOpacity: e.type === 'featureMouseover' ? 0.5 : 1, //线颜色
                            fillOpacity: e.type === 'featureMouseover' ? 0.5 : 1, //填充色
                        });
                    }
                })
            })
            window.districtExplorer = districtExplorer
        })
    }
    initSvgMarker (map) {
        window.AMapUI.loadUI(['overlay/SvgMarker'], function(SvgMarker) {
            if (!SvgMarker.supportSvg) {
                //当前环境并不支持SVG，此时SvgMarker会回退到父类，即SimpleMarker
                alert('当前环境不支持SVG');
            }
            let color = '#5254a3'
            let shapeKeys = 'TriangleFlagPin'
            let pxCenter = map.lnglatToPixel(map.getCenter())
            let startX = pxCenter.getX(), startY = pxCenter.getY()
            let shape = new SvgMarker.Shape[shapeKeys]({
                height: 50,
                strokeWidth: 1,
                strokeColor: '#ccc',
                fillColor: color
            })
            // let labelCenter = shape.getCenter()
            // console.log(labelCenter)
            let position = map.pixelToLngLat(new window.AMap.Pixel(startX, startY))
            new SvgMarker(shape, {
                map: map,
                position: position
            })
        })
    }
    initControl (map) {
        window.AMapUI.loadUI(['control/BasicControl'], function(BasicControl) {
            map.addControl(new BasicControl.Zoom({
                //内置的dark主题
                theme: 'dark',
                //左下角
                position: 'br'
            }))
        })
    }
    componentDidMount() {
        const self = this
        new Promise((resolve, reject) => {
            let content = this.refs.container
            let map = new window.AMap.Map(content,{
                center: [120.7, 28],
                resizeEnable: true,
                rotateEnable:true,
                pitchEnable:true,
                mapStyle: "amap://styles/darkblue",
                pitch:80,
                zoom: 9
            })
            window.map = map
            self.bindClickPoint(map)
            resolve(map)
        }).then(function (map) {
            self.initDistrictExplorer(map)
            // let disProvince = new window.AMap.DistrictLayer.Province({
            //     zIndex: 12,
            //     zoom: 10,
            //     adcode: [330300],
            //     depth: 2,
            //     styles: {
            //         'fill': function (properties) {
            //             return self.getColorByAdcode(properties.adcode)
            //         },
            //         'city-stroke': 'white',
            //         'province-stroke': 'cornflowerblue',
            //     }
            // })
            // window.disProvince = disProvince
            // disProvince.setMap(map)
            return map
        }).then(function (map) {
            self.initPointSimplifierGar(map)
            self.initSvgMarker(map)
            self.initControl(map)
        })
    }

}

export default amap
