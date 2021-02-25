export function checkUploadFileFormat(type = '', accept: string[] = []) {
  const arr = type.split('')
  if (arr.length < 2) {
    return false
  }
  const fileType = arr[arr.length - 1].toLowerCase()
  return accept.some((item) => item.toLowerCase().indexOf(fileType) > -1)
}
