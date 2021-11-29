const fs = require('fs')

/*
    ?Read File Asynchronously
*/

// fs.readFile("./3.file-systems/Text.txt", (err, data) =>{
//     if(err){
//         throw err
//     }
//     console.log(data.toString())
// })

/*
    ?Read File Synchronouly
*/

var output = fs.readFileSync("./3.file-systems/Text.txt")

console.log(output.toString())

/*
    ?Write File Asynchronouly
*/

const message= "Hello World Uma \n "

// fs.writeFile("./3.file-systems/sample.txt", message, function(err){
//     if(err) {
//         throw err
//     } else {
//         console.log('Writing operation completed Successfully')
//     }
// })

// fs.appendFile("./3.file-systems/sample.txt", message + 'New Message', function(err){
//     if(err) {
//         throw err
//     } else {
//         console.log('Writing operation completed Successfully- Using Append')
//     }
// })

/*
    ? Write File Synchronouly
*/

fs.writeFileSync("./3.file-systems/sample.txt", message + 'Using Write File Sync')

/*
    ?delete file
*/

// fs.unlink("./3.file-systems/sample.txt", function(){
//     console.log(`Delete Operation Completed`)
// })