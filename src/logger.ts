import fs from 'fs'

const path = './error.log'

export const logError = (errMsg: string) => {
  const timeStamp = new Date().toISOString()
  const errMessage = `${timeStamp}: ${errMsg}`

  fs.appendFile(path, errMessage, (err) => {
    if(err) {
      console.error(`Error: ${err}`)
    }
  })
}