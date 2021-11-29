const localModule = require("./2.module-types/1.local-module")
const message = require("./2.module-types/4.local-module")

console.log('Reading log object')
console.log(localModule.info('This is Information'))
console.log(localModule.warn('This is Warning'))
console.log(localModule.error('This is Error'))

console.log(message)

const coreModule = require("./2.module-types/2.core-module")

console.log(coreModule)