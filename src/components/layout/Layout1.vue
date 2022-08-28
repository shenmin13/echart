<template>
    <div class="content">
        <!-- 左3 右3 底4 -->
        <div class="top">
            <div class="left">
                <div><slot name="left1"></slot></div>
                <div><slot name="left2"></slot></div>
                <div><slot name="left3"></slot></div>
            </div>
            <div class="center">
                <div><slot name="center"></slot></div>
            </div>
            <div class="right">
                <div><slot name="right1"></slot></div>
                <div><slot name="right2"></slot></div>
                <div><slot name="right3"></slot></div>
            </div>
        </div>
        <div class="bottom">
            <div><slot name="bottom1"></slot></div>
            <div><slot name="bottom2"></slot></div>
            <div><slot name="bottom3"></slot></div>
            <div><slot name="bottom4"></slot></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Layout1"
}
</script>

<style lang="less" scoped>
.content {
    display: flex;
    flex-direction: column;
    height:100vh;
    background-color: #333;
    .top {
        display: flex;
        flex-direction: row;
        flex:3;
        .left {
            flex:1;
            display: flex;
            flex-direction: column;
            div{
                flex:1
            }
        }

        .center {
            flex:2;
            display: flex;
            flex-direction: column;
        }

        .right {
            flex:1;
            display: flex;
            flex-direction: column;
            div{
                flex:1
            }
        }
    }

    .bottom {
        display: flex;
        flex-direction: row;
        flex:1;
        div {
            flex:1;
        }
    }

}
</style>