import { Notify } from 'vant'

export function timeoutNotify() {
  Notify({
    type: 'danger',
    message: '请求超时'

  })
}

export function serverErrorNotify() {
  Notify({
    type: 'danger',
    message: '服务器连接失败'
  })
}
