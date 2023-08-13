<!-- 自定义导航栏组件 -->
<template>
        <view class="navbar-box" :style="{ height: `${globalData.navHeight}px` }">
            <view class="navbar-content" :style="{ top: `${custom.top}px`, height: `${custom.height}px` }">
                <view class="logo">
                    <text>主页</text>
                </view>
            </view>
        </view>
</template>

<script lang="ts" setup>
import { defineProps, reactive, ref } from 'vue';
import { getdeviceInfo } from '@/utils/deviceInfo';
import { inject } from 'vue';
const emits = defineEmits(['jumpCityCheck']);
const props = defineProps({
    navBarStyle: {
        type: Object,
        default: () => {
            return {};
        },
    },
});
// 获取导航栏信息
const { globalData, custom } = reactive(getdeviceInfo());
// oss地址
const imgUrl = ref(inject('imgUrl'));
const navBarStyle = ref(props.navBarStyle);
</script>
<style lang="scss" scoped>
    .navbar-box {
        .navbar-content {
            position: absolute;
            left: 0rpx;
            right: 0rpx;
            display: flex;
            align-items: center;
			justify-content: center;
            .logo {
                height: 100%;
                // width: 50rpx;
                display: flex;
                align-items: center;
				justify-content: center;
                margin: 0rpx 13rpx;
                font-size: 34rpx;
				font-weight: 500;
            }
        }
    }
</style>

