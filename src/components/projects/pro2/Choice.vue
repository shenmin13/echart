<template>
    <div class="choice">
        <el-radio-group v-model="choice" @change="change" size="small">
            <el-radio-button v-for="(item, k) in types" :label="k">{{ item.name }}</el-radio-button>
        </el-radio-group>
    </div>
</template>

<script>
export default {
    name: "Choice",
    data() {
        return {
            types: [
                {
                    name: "水利", center: [
                        { name: "水利C站", center: [112.607893,24.554518] },
                        { name: "水利D站", center: [114.042882,25.058323] },
                    ]
                },
                {
                    name: "土壤监测", center: [
                        { name: "监测C站", center: [114.102882,25.108323] },
                        { name: "监测D站", center: [115.14672,23.30308] },
                    ]
                }
            ],
            choice: 0,
        }
    },
    mounted() {
        this.$emit("initCenter", this.types[this.choice])
    },
    methods: {
        change() {
            this.$emit("typeSelect", this.types[this.choice])
        }
    }
}
</script>

<style lang="less" scoped>
.choice {
    /* background-color: #fff; */
    z-index: 99;
    position: fixed;
    top: 1%;
    left: 26%;
    
    /* text-align: left; */
    /* padding: 0 10px; */
}

</style>