const fs = require('fs')
const path = require('path')

const Paths ={
    log:'./logs',
    file:`./logs/file.txt`,
} 

function checkDir(path){
    if(fs.existsSync(Paths.log)==false){
        fs.mkdir(Paths.log,{recursive: true},(error)=>{
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

function createFiles(path){
    filenum = 0
    if(fs.existsSync(Paths.log)==true){
        for(i=0;i<10;i++){
            fs.appendFile(`./logs/file${filenum}.txt`,`logs${filenum}.txt`,(error)=>{
                if(error){
                    console.log(error)
                } else{
                    console.log("Files already created")
                }
            })
            filenum++
        }
    }
}



checkDir(Paths.log)
createFiles(Paths.log)