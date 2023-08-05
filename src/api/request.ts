// 封装好的网络请求方法
import { getLocalToken } from '@/utils/token'

// 前置url
const baseUrl = import.meta.env.VITE_BASE_URL

// XXX 待优化为在请求前进行token校验，如果token过期则先刷新token，再进行请求
/**
 * 请求前置函数
 * @param mode 请求的模式
 */
const beforeRequest = async (mode: string) => {
  try {
    // console.log('beforeRequest', mode)
  } catch (err) {
    console.error('beforeRequest error', err)
  }
}

// 请求后置函数
const afterRequest = () => {
  // console.log('afterRequest')
}

/**
 * 普通get请求
 * @param apiUrl 请求的api地址
 * @param data 请求的参数，可选
 * @param options 请求的其他参数，可选
 */
export const get = async (
  apiUrl: string,
  data: AnyObject = {},
  options: AnyObject = {},
) => {
  await beforeRequest('base')

  try {
    const res = await uni.request({
      url: baseUrl + apiUrl,
      method: 'GET',
      header: {
        token: getLocalToken(),
      },
      data,
      ...options,
    })
    return res
  } catch (err) {
    console.error(`${apiUrl} get error`, err)
  } finally {
    afterRequest()
  }
  return null
}

/**
 * 普通post请求
 * @param apiUrl 请求的api地址
 * @param data 请求的参数，可选
 * @param options 请求的其他参数，可选
 */
export const post = async (
  apiUrl: string,
  data: AnyObject = {},
  options: AnyObject = {},
) => {
  await beforeRequest('base')

  try {
    const res = await uni.request({
      url: baseUrl + apiUrl,
      method: 'POST',
      header: {
        token: getLocalToken(),
      },
      data,
      ...options,
    })
    return res
  } catch (err) {
    console.error(`${apiUrl} post error`, err)
  } finally {
    afterRequest()
  }
  return null
}

// 上传文件
export const uploadFile = async (
  apiUrl: string,
  filePath: string,
  formData: AnyObject = {},
  options: AnyObject = {},
) => {
  await beforeRequest('token')

  try {
    const res = await new Promise((resolve) => {
      uni.uploadFile({
        url: baseUrl + apiUrl,
        filePath,
        header: {
          token: getLocalToken(),
        },
        name: 'file',
        formData: {
          ...formData,
        },
        ...options,
        success: (successRes) => { resolve(successRes) },
        fail: (err) => { throw err },
        complete: () => { afterRequest() },
      })
    })
    return res
  } catch (err) {
    console.error(`${apiUrl} uploadFile error`, err)
  } finally {
    afterRequest()
  }
  return null
}
