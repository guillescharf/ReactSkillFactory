const URL_TODOS = "https://jsonplaceholder.typicode.com/todos";

fetch(URL_TODOS) // infiere en que el pedido es un GET
  .then((response) => response.json()) 
  .then( (data) => showData(data)); // nested Promises

function showData(data) {
    //console.log("Data", data);
    const mainContainer = document.getElementById('mainContainer');
    for (let i = 0; i < data.length; i++) {
        // console.log(data[i]);
        const item = document.createElement("div");
        item.id = `item_${i}`;
        item.className = `dataContainer ${data[i].completed}`;
    
        item.innerHTML = `
            <div class='dataItem'>
                <h3>${data[i].title.toUpperCase()}</h3>
                <p>ID: ${data[i].id}</p>
                <p>UserId: ${data[i].userId}</p>
                <p>Completed: ${data[i].completed}</p>
            </div>`;

        mainContainer.appendChild(item);


    }
    
}
  