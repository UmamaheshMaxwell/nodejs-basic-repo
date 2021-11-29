var log = {
    info: function(info){
        return `Info: ${info}`
    },
    warn: function(warn){
        return `Warn: ${warn}`
    },
    error:  function(error){
        return `Error: ${error}`
    }
}

module.exports = log
