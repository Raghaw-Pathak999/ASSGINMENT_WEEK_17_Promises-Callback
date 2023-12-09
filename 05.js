function greet(name) {
    return new Promise((resolve)=>{
        resolve(`HELLO Mr. ${name}`);
    })
}

greet("Raghaw-Pathak").then((name)=>{
    console.log(name);
})