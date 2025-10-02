const fs = require('fs')
const path = require('path')

const Paths ={
    log:'./logs',
    file:`./logs/file.txt`,
} 

function deleteFiles(path){
     if(fs.existsSync(Paths.log)==true){
        filenum=0
        for(i=0;i<10;i++){
            fs.unlink(`./logs/file${i}.txt`,(error)=>{
                if(error){
                    console.log(error)
                } else{
                }
            })
            console.log(`file${filenum}.txt deleted`)
            filenum++
        }
    }
}

function removeDirectory(path){
    if(fs.existsSync(Paths.log)==true){
          fs.rm(Paths.log,{recursive:true},(err) => { 
                if (err) { 
                    console.error(err); 
                } 
                else { 
                     console.log("Recursive: Directory Deleted!"); 
                    } 
    })
    }
}

deleteFiles(Paths.log)

removeDirectory(Paths.log)