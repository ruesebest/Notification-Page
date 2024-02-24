var unread = document.querySelectorAll(".unread");
var markAll = document.getElementById("markAll");
var notifNo = document.getElementById("notifNo");

notifNo.innerHTML = unread.length;

function update(){
    var newUnread = document.querySelectorAll(".unread");
    notifNo.innerHTML = newUnread.length;
}

unread.forEach((messages)=>{
    messages.addEventListener("click", ()=>{
        messages.classList.remove("unread");
        update();
    })
})

markAll.addEventListener("click", ()=>{
    unread.forEach((messages)=>{
        messages.classList.remove("unread");
        update();
    })
})