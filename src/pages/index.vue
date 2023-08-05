<!-- 首页 -->
<template>
  <view class="content">
	  这是index
    <!-- <view class="nr">
		{{ userInfo }}
	</view> -->
  </view>
</template>

<script setup lang="ts">
// pinia导入
import useUser from '@/stores/user-store'
import MyPopup from '@/components/MyPopup.vue'
import HOME_BUTTON_LIST from '@/static/constants/view-constants'
// pinia测试
const userStore = useUser()
const { userInfo } = storeToRefs(userStore)
const { getUserInfo } = userStore

/** 当前组件实例 */
const currentInstance = getCurrentInstance()

onShow(() => {
  getUserInfo()
})

/** 按钮列表 */
const btnList = ref(HOME_BUTTON_LIST)

// #region 弹窗控制相关

/** 弹窗打开 */
const open = async () => {
  const popup = currentInstance?.refs.popup as InstanceType<typeof MyPopup>
  popup?.open()
}

/** 弹窗关闭 */
const close = () => {
  const popup = currentInstance?.refs.popup as InstanceType<typeof MyPopup>
  popup?.close()
}

// #endregion
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
</style>
