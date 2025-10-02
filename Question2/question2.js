delayedSuccess = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(stringS="delayed success!")
    },500)
});

delayedException = new Promise((reject)=>{
    setTimeout(()=>{
        reject(stringR='delayed exception!')
    },500)
});

delayedSuccess.then(()=>{
    console.log(stringS)
});

delayedException.then(()=>{
    console.log(stringR)
})

