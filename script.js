var myform=document.getElementById("myform");
var myinput = document.getElementById("myinput");
var myitem = document.getElementById("myitem");
myform.addEventListener("submit",
    function(event){
        event.preventDefault()
        createItem(myinput.value)
    });
    function createItem(inputitems){
        var items='<li>${inputitems}<button onclick="deleteelement(this)">delete</button></li>'
        myitem.insertAdjacentHTML("beforeend", items)
        myinput.value = ""
        myinput.focus()
    }
    function deleteelement(ElementToDelete){
        ElementToDelete.parentElement.remove()
    }