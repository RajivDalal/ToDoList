const getTodos = async()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/2");
    const data = await response.json();

    return data;
}

getTodos().then((data)=>{
    console.log(data);
});