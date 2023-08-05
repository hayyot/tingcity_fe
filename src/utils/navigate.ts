// 引入page.json中的页面路径
import {
  pages,
  subPackages,
  tabBar,
} from '../pages.json'

/** 首页 */
const homePage = pages[0].path

/** 返回前一个页面，如果返回失败则跳转到首页 */
export const back = () => {
  uni.navigateBack({
    fail: () => {
      uni.switchTab({
        url: `/${homePage}`,
      })
    },
  })
}

/**
 * 跳转页面，根据传入的页面名称，根据tabbar页面>主页面>分包页面的顺序进行跳转
 * @param pageName 页面名称
 */
export const navigateTo = (
  pageName: string,
  options: { [key: string]: string } | undefined = undefined,
) => {
  const optionsList = Object.keys(options ?? {}).map((key) => {
    // 如果options[key]是字符串，则直接返回
    if (typeof options?.[key] === 'string') {
      return `${key}=${options[key]}`
    }
    // 如果options[key]不是字符串，则将其转换为字符串
    return `${key}=${JSON.stringify(options?.[key])}`
  })
  // 如果options不为空，则拼接参数
  const params = options ? `?${optionsList.join('&')}` : ''
  console.log('navigateTo', pageName, params)

  // 构建tabbar页面路径映射
  const tabBarPagePathMap = tabBar.list.reduce((acc: any, cur: any) => {
    // 将路径按照/分割为数组，取最后一个元素作为页面名称
    const tabPageName = cur.pagePath.split('/').pop() ?? ''
    acc[tabPageName] = `/${cur.pagePath}`
    return acc
  }, {})
  // 如果页面名称在tabbar中，则使用switchTab跳转
  if (Object.keys(tabBarPagePathMap).includes(pageName)) {
    uni.switchTab({
      url: tabBarPagePathMap[pageName],
    })

    // 如果params不为空，则提示不支持传参
    if (params) {
      console.warn('切换标签页使用的uni.switchTab方法不支持传参')
    }

    return
  }

  // 构建页面名称和路径的映射
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const pagePathMap = pages.reduce((acc: any, cur: any) => {
    // 将路径按照/分割为数组，取最后一个元素作为页面名称
    const mainPageName = cur.path.split('/').pop() ?? ''
    acc[mainPageName] = `/${cur.path}`
    return acc
  }, {})
  // 如果页面名称在pages中，则使用navigateTo跳转
  if (Object.keys(pagePathMap).includes(pageName)) {
    uni.navigateTo({
      url: pagePathMap[pageName] + params,
    })
    console.log('navigateTo', pagePathMap[pageName] + params)
    return
  }

  // 分包目录名称
  const subPackageName = subPackages[0].root
  // 构建分包页面名称和路径的映射
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const subPackagePagePathMap = subPackages[0].pages.reduce((acc: any, cur: any) => {
    // 将路径按照/分割为数组，取最后一个元素作为页面名称
    const subPageName = cur.path.split('/').pop() ?? ''
    acc[subPageName] = `/${subPackageName}/${cur.path}`
    return acc
  }, {})
  // 如果页面名称在subPackages中，则使用navigateTo跳转
  if (Object.keys(subPackagePagePathMap).includes(pageName)) {
    uni.navigateTo({
      url: subPackagePagePathMap[pageName] + params,
    })
    return
  }

  console.error('页面不存在', pageName)
}
