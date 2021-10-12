export const validatorCitizenName = (val: string) => {
  const result = /^([\u4e00-\u9fa5·]{2,16})$/.test(val)
  return result || '请输入正确姓名'
}

export const validatorCitizenID = (val: string) => {
  const result = /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/.test(val)
  return result || '请输入正确身份证号码'
}
