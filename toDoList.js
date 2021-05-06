const toDoForm = document.getElementById('js_schedule');
const toDoInput = toDoForm.querySelector('.schedules');
const aside = document.getElementById('js_aside');
const toDoList = aside.querySelector('.toDoList');





function printToDo(answer){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "☆";
    li.innerText = answer;
    li.appendChild(delBtn);
    toDoList.appendChild(li);
    console.log(answer);
}


function handleSubmit(event){
    event.preventDefault();
    console.dir(event);
    const toDoValue = toDoInput.value;
    printToDo(toDoValue);
}




function init(){
    //input 에 이벤트 추가
    toDoInput.addEventListener("submit", handleSubmit);

}


init();