const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

function addTask(){
    if(inputBox.value==""){
        alert("you Must Write Something");

    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // cross Button 

        let span = document.createElement("span");
        span.innerHTML ="\u00d7"
        li.appendChild(span);
        saveData();

    }
    // After enter value Again we need empt space 
    inputBox.value="";

}
//  Deleting Options 
listContainer.addEventListener("click",function(e){
    if(e.target.tagName ==="Li"){
        e.target.classList.toggle("checked");
        saveData(); 

    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);   

// For Saving Data 
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// display this data whenver website will open again 
function showTask(){
    listContainer.innerHTML =localStorage.getItem("data");

}
showTask();