function mockService(){
    return new Promise((resolve,reject)=>{
        resolve("I'm Working !");
    })
}

module.exports = {
    mockService
}