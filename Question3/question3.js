const fs = require('fs')
const path = require('path')

const logPath = './logs'

function checkDir(path){
    if(fs.existsSync(path)==false){
        fs.mkdir(logPath,{recursive: true},(error)=>{
            if (error){
                console.log(error);
                return false;
            } else {
                console.log("New Directory created successfully !!");
                return true;
            }
        })
    } else{
        console.log("Directory already exists")
    }
}


