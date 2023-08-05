/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

/** 用户信息 */
type UserInfo = {
  /** 用户id */
  id: string
  /** 用户名 */
  username: string
  /** 用户头像 */
  avatar: string
}
