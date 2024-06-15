const todoItems = []

const inputItems = document.getElementById("inputItem")
const itemsDiv = document.getElementById("items")
const storageKey = "todoItems";

function renderItems(){
    itemsDiv.innerHTML = null;

    for(const [index,item] of Object.entries(todoItems)){

        const container = document.createElement("div")
        container.style.marginTop = "10px"

        const text = document.createElement("p")
        text.textContent = item;
        text.style.display = "inline"
        text.style.marginRight = "10px"
        
        const button = document.createElement("button")
        button.textContent = "Delete"
        button.onclick = () => removeItems(index)

        container.appendChild(text)
        container.appendChild(button)

        itemsDiv.appendChild(container)

    }

}



function loadItems() {
    const oldItems = localStorage.getItem(storageKey)
    if (oldItems) todoItems = JSON.parse(oldItems)
    renderItems()
}




function saveItems() {
    const stringItems = JSON.stringify(todoItems);
    localStorage.setItem(storageKey, stringItems)
}


function addItems(){
    const value = inputItems.value;
    if(!value){
        alert("cannot add empty value")
        return
    }

    todoItems.push(value)
    renderItems()
    inputItems.value = "";
    saveItems()
    
}

function removeItems(index){
    todoItems.splice(index, 1)
    renderItems()
    saveItems()

}

document.addEventListener("DOMContentLoaded",loadItems)