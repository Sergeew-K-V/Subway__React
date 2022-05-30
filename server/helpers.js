const pathFormater = (str) => {
  const formatedStr = str.slice(str.indexOf('/') + 1)

  console.log('formatedStr', formatedStr)
  return formatedStr

  //Windows
  const formatedStrWin = str.slice(str.indexOf('static') + 7) // path.sep
  console.log('formatedStrWin', formatedStrWin)
  return formatedStrWin
}
module.exports = {
  pathFormater,
}
