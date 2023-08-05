/** 生成8位的随机字符串（数字+字母） */
export const random8BitString = () => Math.random().toString(36).slice(2, 10)

/**
 * 显示弹窗
 * @param title 弹窗标题
 * @param icon 弹窗图标
 * @param duration 弹窗持续时间
 * @param mask 是否显示透明蒙层，防止触摸穿透
 * @param image 自定义图标的本地路径，image 的优先级高于 icon
 * @param success 成功回调
 * @param fail 失败回调
 * @param complete 完成回调
 */
export const showToast = (
  title: string,
  icon: 'none' | 'success' | 'loading' | 'error' | undefined = 'none',
  duration = 1500,
  mask = false,
  image = '',
  success = () => { },
  fail = () => { },
  complete = () => { },
) => {
  uni.showToast({
    title,
    icon,
    duration,
    mask,
    image,
    success,
    fail,
    complete,
  })
}
