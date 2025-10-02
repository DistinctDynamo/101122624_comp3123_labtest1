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
            } else {
                console.log("New Directory created successfully !!");
            }
        })
    } else{
        console.log("Directory already exists")
    }
}

function createFiles(path){
    if(fs.existsSync(Paths.log)==true){
        filenum = 0
        for(i=0;i<10;i++){
            fs.appendFile(`./logs/file${i}.txt`,`logs${i}.txt`,(error)=>{
                if(error){
                    console.log(error)
                } else{
                }
            })
            console.log(`file${filenum}.txt created`)
            filenum++
        }
    } else{
        console.log("Directory does not exist")
    }
}


checkDir(Paths.log)

createFiles(Paths.log)