const toDoForm = document.getElementById('js_schedule');
const toDoInput = toDoForm.querySelector('.schedules');
const aside = document.getElementById('js_aside');
const toDoList = document.getElementById('js_toDoList');



const LS_TODOS = 'toDos';
let toDos = [];



function loadedToDos(){
    const loadToDos = localStorage.getItem(LS_TODOS);
    if(loadToDos !== null){
        const parseToDos = JSON.parse(loadToDos);
        parseToDos.forEach(function(toDo){
            printToDo(toDo.text);
        });           
    }    
}
    

function saveToDos(){
    localStorage.setItem(LS_TODOS, JSON.stringify(toDos));
}


function handleDelete(event){
    const btn = event.target;
    const btnParent = btn.parentNode;
    toDoList.removeChild(btnParent);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(btnParent.id);
    });
    toDos = cleanToDos;
    saveToDos();
}


function printToDo(answer){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const objId = toDos.length + 1;
    delBtn.innerText = "☆";
    delBtn.addEventListener("click", handleDelete);
    li.innerText = answer;
    li.appendChild(delBtn);
    toDoList.appendChild(li);
    li.id = objId;
    const toDosObj = {
        text : answer,
        id : objId
    };
    toDos.push(toDosObj);
    saveToDos();
}


function handleSubmit(event){
    //버튼을 눌러도 새로 실행되지 않게 해줌. submit 은 작동됨
    event.preventDefault();
    const toDoValue = toDoInput.value;
    printToDo(toDoValue);
    toDoInput.value =''; 
}


function init(){
    //local storage 에 있는 toDos 를 새로고침해도 남아있도록 해줌
    loadedToDos();
    //input 에 이벤트 추가  input이 아닌 form 에 해주어야 실행이 된다
    toDoForm.addEventListener("submit", handleSubmit);
}


init();