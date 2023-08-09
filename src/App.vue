<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'

onLaunch(() => {
  console.log('App Launch')
})
onShow(() => {
  console.log('App Show')
})
onHide(() => {
  console.log('App Hide')
})
</script >
<style lang="scss">
// @import "./static/styles/common";
html,body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}

view{
  box-sizing: border-box;
}
</style>
