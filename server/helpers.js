const pathFormater = (str) => {
  const formatedStr = str.slice(str.indexOf('static') + 7)
  const formatedStr2 = str.slice(str.indexOf('/') + 1)

  console.log('formatedStr', formatedStr)
  console.log('formatedStr2', formatedStr2)
  console.log('str', str)
  return formatedStr
}
module.exports = {
  pathFormater,
}
