/**
 * 验证姓名格式
 * 中文、英文、“·”、2-20个字符
 * @param val 用户输入的姓名
 */
export const validatorCitizenName = (val: string) => {
  const result = /^[a-zA-Z\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/.test(val)
  return result || '请输入正确姓名'
}

/**
 * 验证身份证号码格式
 * @param val 用户输入的身份证号码
 */
export const validatorCitizenID = (val: string) => {
  const result = /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/.test(val)
  return result || '请输入正确身份证号码'
}

/**
 * 验证金额格式
 * 大于0，正数，且最多两位小数
 * @param val 用户输入的金额
 */
export const validatorMoneyAmount = (val: string) => {
  const result = /^\d+(\.\d{1,2})?$/.test(val)
  return result || '请输入正确的金额'
}
