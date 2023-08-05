<!-- 自定义组件示例 -->
<template>
  <uni-popup ref="popup">
    <div class="container">
      这是一个弹窗
    </div>
  </uni-popup>
</template>

<script lang="ts" setup>
import type { UniPopup } from '@uni-helper/uni-ui-types'

/** 当前组件实例 */
const currentInstance = getCurrentInstance()

// #region 弹窗控制相关
/** 弹窗打开 */
const open = async () => {
  const popup = currentInstance?.refs.popup as UniPopup
  popup?.open()
}

/** 弹窗关闭 */
const close = () => {
  const popup = currentInstance?.refs.popup as UniPopup
  popup?.close()
  setTimeout(() => {
    uni.showTabBar()
  }, 300)
}

defineExpose({
  open,
  close,
})

// #endregion
</script>

<style lang="scss" scoped>
.container {
  position: relative;

  display: grid;
  grid-template:
    "congratulationInfo" 1fr
    "." 48px;
  row-gap: 20px;
  justify-items: center;
}
</style>
