const events = require('events')

var eventEmitter = new events.EventEmitter()


eventEmitter.on("firstevent", function(){
    console.log('This is my first Event')
})

eventEmitter.emit("firstevent")

eventEmitter.on("buttonClick", function(){
    console.log('Button Click - You have clicked the button')
})

eventEmitter.emit("buttonClick")

eventEmitter.on("getDataEvent", function(data){
    console.log(`This is get Data event and data is :  ${data} `)
})

eventEmitter.emit("getDataEvent", "This is the data you are looking for")

