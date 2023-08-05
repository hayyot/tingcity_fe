// 用户相关的api
import { get } from '@/api/request'

// XXX 需要定义返回的数据类型
/** 获取用户信息 */
export const reqGetUserInfo = () => get('/user/info')

/** 获取用户动态列表 */
export const reqGetUserDynamicList = () => get('/user/dynamic/list')
