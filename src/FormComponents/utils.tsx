// 上传图片和附件组件，格式化数据
export function checkUploadFileFormat(type = '', accept: string[] = []) {
  const arr = type.split('')
  if (arr.length < 2) {
    return false
  }
  const fileType = arr[arr.length - 1].toLowerCase()
  return accept.some((item) => item.toLowerCase().indexOf(fileType) > -1)
}
