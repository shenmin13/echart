<template>
    <div style="min-height: 500px; justify-content: center;position: relative" id="map" />
</template>

<script>
import { Scene, PolygonLayer, LineLayer, PointLayer, Marker } from '@antv/l7';
import { GaodeMap } from '@antv/l7-maps';

export default {
    name: "AreaBlock",
    data() {
        return {
            scene: null,
            markers: [],
            pointLayer:null,
            fontFamily: "",
            style: 'dark',
            zoom: 6,
            pitch: 30,
            fontColor: '#0ff',
            nameSize: 12,
            color: '#0DCCFF'
        }
    },
    methods: {
        init(arg) {
            this.scene = new Scene({
                id: 'map',
                map: new GaodeMap({
                    style: arg.style ? arg.style : this.style,
                    center: arg.center,
                    zoom: arg.zoom ? arg.zoom : this.zoom,
                    pitch: arg.pitch ? zrg.pitch : this.pitch
                })
            });
            this.initFont()
            this.scene.on('loaded', () => {
                let lineDown, lineUp, textLayer, lineLayer, provincelayer;
                fetch(arg.map)
                    .then(res => res.json())
                    .then(data => {
                        const texts = [];
                        data.features.map(option => {
                            const { name, center } = option.properties;
                            const [lng, lat] = center;
                            texts.push({ name, lng, lat });
                            return ""
                        });
                        textLayer = new PointLayer({ zIndex: 2 })
                            .source(texts, {
                                parser: {
                                    type: 'json',
                                    x: 'lng',
                                    y: 'lat'
                                }
                            })
                            .shape('name', 'text')
                            .size(arg.nameSize ? arg.nameSize : this.nameSize)
                            .color(arg.fontColor ? arg.fontColor : this.fontColor)
                            .style({
                                textAnchor: 'center', // 文本相对锚点的位置 center|left|right|top|bottom|top-left
                                spacing: 2, // 字符间距
                                padding: [1, 1], // 文本包围盒 padding [水平，垂直]，影响碰撞检测结果，避免相邻文本靠的太近
                                raisingHeight: 200000 + 150000 + 10000,
                                textAllowOverlap: true
                            });
                        this.scene.addLayer(textLayer);

                        lineDown = new LineLayer()
                            .source(data)
                            .shape('line')
                            .color(arg.color ? arg.color : this.color)
                            .size(1)
                            .style({
                                raisingHeight: 200000
                            });
                        lineUp = new LineLayer({ zIndex: 1 })
                            .source(data)
                            .shape('line')
                            .color(arg.color ? arg.color : this.color)
                            .size(1)
                            .style({
                                raisingHeight: 200000 + 150000
                            });
                        this.scene.addLayer(lineDown); // 底线
                        this.scene.addLayer(lineUp); // 上线

                        lineLayer = new LineLayer()
                            .source(data)
                            .shape('wall')
                            .size(150000)
                            .style({
                                heightfixed: true,
                                opacity: 0.6,
                                sourceColor: arg.color ? arg.color : this.color,
                                targetColor: 'rbga(255,255,255, 0)'
                            });
                        this.scene.addLayer(lineLayer);

                        provincelayer = new PolygonLayer({})
                            .source(data)
                            .size(150000)
                            .shape('extrude')
                            .color(arg.color ? arg.color : this.color)
                            .active({
                                color: 'rgb(100,230,255)'
                            })
                            .style({
                                heightfixed: true,
                                pickLight: true,
                                raisingHeight: 200000,
                                opacity: 0.8
                            });
                        this.scene.addLayer(provincelayer);

                        provincelayer.on('mousemove', () => {
                            provincelayer.style({
                                raisingHeight: 200000 + 100000
                            });
                            lineDown.style({
                                raisingHeight: 200000 + 100000
                            });
                            lineUp.style({
                                raisingHeight: 200000 + 150000 + 100000
                            });
                            textLayer.style({
                                raisingHeight: 200000 + 150000 + 10000 + 100000
                            });
                        });

                        provincelayer.on('unmousemove', () => {
                            provincelayer.style({
                                raisingHeight: 200000
                            });
                            lineDown.style({
                                raisingHeight: 200000
                            });
                            lineUp.style({
                                raisingHeight: 200000 + 150000
                            });
                            textLayer.style({
                                raisingHeight: 200000 + 150000 + 10000
                            });
                        });


                        this.drawMarker(arg.points)
                        this.drawPoint(arg.points)

                        return '';
                    });
                return '';
            });
        },
        initFont() {
            // 指定 iconfont 映射为字体样式的名称
            this.fontFamily = 'iconfont';
            // 指定 iconfont 字体文件
            const fontPath =
                '//at.alicdn.com/t/font_2534097_fcae9o2mxbv.woff2?t=1622200439140';
            // 全局添加资源
            this.scene.addFontFace(this.fontFamily, fontPath);
            // 全局添加 iconfont 字段的映射
            this.scene.addIconFont('icon1', '&#xe6d4;');
        },
        drawMarker(points) {
            if (this.markers.length > 0) {
                this.markers.map((m) => {
                    m.remove();
                })
            }
            points.center.map((option) => {
                const el = document.createElement('label');
                el.className = 'labelclass';
                el.textContent = option.name;
                const m = new Marker({
                    element: el,
                    offsets:[ 10, 15 ] ,
                }).setLnglat({ lng: option.center[0] * 1, lat: option.center[1] });
                this.markers.push(m)
                this.scene.addMarker(m);
            });
        },
        drawPoint(points) {
            !!this.pointLayer && this.scene.removeLayer(this.pointLayer);
            const texts = [];
            points.center.map(option => {
                const { name, center } = option;
                const [w, j] = center;
                texts.push({ name, w, j });
                return ""
            });
            this.pointLayer = new PointLayer({ zIndex: 2 })
                .source(texts, {
                    parser: {
                        type: 'json',
                        x: 'w',
                        y: 'j',
                    },
                })
                .shape('icon1', 'text') // 指定需要映射字段为 icon、shape 类型和普通的文字标注一样为 text
                .size(20)
                .style({
                    textAnchor: 'center', // 文本相对锚点的位置 center|left|right|top|bottom|top-left
                    textOffset: [0, 0], // 文本相对锚点的偏移量 [水平, 垂直]
                    padding: [0, 0], // 文本包围盒 padding [水平，垂直]，影响碰撞检测结果，避免相邻文本靠的太近
                    stroke: 'red', // 描边颜色
                    fontFamily: this.fontFamily,
                    iconfont: true, // 开启 iconfont 映射
                    textAllowOverlap: true,
                });
            this.scene.addLayer(this.pointLayer);
        }
    },
}
</script>

<style>
.labelclass {
    background-color: #fff;
    color: #333;
    font-size: 12px;
    border-radius: 5px;
    padding: 2px 5px;
}
</style>