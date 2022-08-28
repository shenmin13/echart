<template>
    <div class="choice">
        <el-radio-group v-model="choice" @change="change" size="small">
            <template v-for="(item, k) in types">
                <el-radio-button :label="k">{{ item.name }}</el-radio-button>
            </template>
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
                        { name: "水利A站", center: [120.091777, 30.151925] },
                        { name: "水利B站", center: [120.947251, 29.735325] },
                    ]
                },
                {
                    name: "土壤监测", center: [
                        { name: "监测A站", center: [120.583121, 30.037049] },
                        { name: "监测B站", center: [120.047251, 28.735325] },
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