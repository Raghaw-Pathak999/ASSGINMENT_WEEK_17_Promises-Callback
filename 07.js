async function getCombines() {
    let [data1, data2] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/todos/1").then((response)=> response.json()),
        fetch("https://jsonplaceholder.typicode.com/posts/1").then((response)=> response.json())
    ])

    let CombinesDATA = {
        TODO: data1,
        POST: data2,
    }

    return CombinesDATA
}

getCombines().then((DATA)=>{
    console.log(DATA);
})
