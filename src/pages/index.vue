<!-- 首页 -->
<template>
  <view style="height: 100vh;">
    <view>
      <h1>123312j909j</h1>
    </view>
    <!-- // native模式，无需配置其他项 -->
    <!-- <m-tabbar native></m-tabbar> -->
    <view class="bar">
      <image class="bar_index" src="../../static/tabindex.png" mode=""></image>
      <view @click="goshoucang" class="bar_item">
        <image class="bar_item_img" src="../../static/tabbar-icons/me.png" mode=""></image>
        <view class="bar_item_text"> 收藏 </view>
      </view>
      <view @click="gomap" class="bar_item">
        <image class="bar_item_img" src="../../static/tabbar-icons/map.png" mode=""></image>
        <view class="bar_item_text"> 地图 </view>
      </view>
      <view class="bar_item">
        <view class="bar_item_img"> </view>
        <view class="bar_item_text"> 首页 </view>
      </view>
      <view @click="goquestion" class="bar_item">
        <image class="bar_item_img" src="../../static/tabbar-icons/layer.png" mode=""></image>
        <view class="bar_item_text"> 答题 </view>
      </view>
      <view @click="gophoto" class="bar_item">
        <image class="bar_item_img" src="../../static/tabbar-icons/gallery.png" mode=""></image>
        <view class="bar_item_text"> 图片 </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
// pinia导入
import useUser from "@/stores/user-store";
import MyPopup from "@/components/MyPopup.vue";
import HOME_BUTTON_LIST from "@/static/constants/view-constants";
// pinia测试
const userStore = useUser();
const { userInfo } = storeToRefs(userStore);
const { getUserInfo } = userStore;

/** 当前组件实例 */
const currentInstance = getCurrentInstance();

onShow(() => {
  getUserInfo();
});

/** 按钮列表 */
const btnList = ref(HOME_BUTTON_LIST);

// #region 弹窗控制相关

/** 弹窗打开 */
const open = async () => {
  const popup = currentInstance?.refs.popup as InstanceType<typeof MyPopup>;
  popup?.open();
};

/** 弹窗关闭 */
const close = () => {
  const popup = currentInstance?.refs.popup as InstanceType<typeof MyPopup>;
  popup?.close();
};

// #endregion
const gophoto = () => {
  uni.navigateTo({
    url: "/pages/photo/photo",
  });
};
const gomap = () => {
  uni.navigateTo({
    url: "/pages/math/math",
  });
};
const goquestion = () => {
  uni.navigateTo({
    url: "/pages/question/question",
  });
};
const goshoucang = () => {
  uni.navigateTo({
    url: "/pages/me/me",
  });
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  margin: 104px auto 26px;

  width: 26.6667vw;
  height: 26.6667vw;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 18.72px;
  color: #8f8f94;
}

.bar_index {
  position: absolute;
  top: -50rpx;
  left: 42%;

  width: 122rpx;
  height: 122rpx;
}

.bar_item_text {
  color: rgb(133 163 187 / 100%);
}

.bar_item_img {
  margin-bottom: 30rpx;

  width: 28rpx;
  height: 36rpx;
}

.bar_item {
  width: 20%;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.bar {
  position: fixed;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 160rpx;

  background: url('../../static/tabbarBG.png') no-repeat;
  background-size: 100%;

  display: flex;
  align-items: center;

}
</style>
