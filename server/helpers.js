const pathFormater = (str) => {
  const formatedStr = str.slice(str.indexOf('/') + 1)
  return formatedStr
}
module.exports = {
  pathFormater,
}
