import { Toast } from 'vant'

export function timeoutToast() {
  Toast.fail('请求超时')
}

export function serverErrorToast() {
  Toast.fail('服务器连接失败')
}

export function queryFailToast() {
  Toast.fail('服务器连接失败')
}
