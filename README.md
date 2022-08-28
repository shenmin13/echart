## chart
### 简单 Echarts 组件封装 <br>
#
### 关键目录划分
1. _**components/common**_ 目录下按类型对图表进行分类封装
2. _**components/layout**_ 有2个基础风格的布局（左2|3，中1，右2|3，底2|4），布局中每一小块，都使用了slot的方式占位
3. _**components/project**_ 是两个使用了不同layout的项目的入口，在Index.vue下使用封装好的图表组件对layout中的slot进行填坑
#
## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
