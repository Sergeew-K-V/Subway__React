const pathFormater = (str) => {
  str.slice(str.indexOf('/') + 1)
  return str
}
module.exports = {
  pathFormater,
}
