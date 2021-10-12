import { creatRequest } from '@/utils/request'

export function queryOrder(params: queryParams) {
  return creatRequest({
    url: '/query',
    method: 'get',
    params: params
  })
}
