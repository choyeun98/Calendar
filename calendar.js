const todayDate = document.getElementById('js_todayDate');
const table = document.getElementById('js_calendar');


const today = new Date();
const year = today.getFullYear();
const month = today.getMonth();
const date = today.getDate();
const day = today.getDay();
const first_day = new Date(year, month, 1).getDay();
const last_date = new Date(year, month + 1, 0).getDate();


const showingClass = 'showing';



if(todayDate){
    todayDate.innerText = `${year}년 ${month+1}월` 
}


if(table){
    //매달 1일 이전의 공백 채우기
    let row = table.insertRow();
    for(i = 0; i < first_day; i++ ){
        row.insertCell(i);
    }
    

    //날짜 채우기. 단 토요일 이후에는 행 바꿔서 추가 할수있게 하기
    for(i = 1; i <= last_date; i++ ){
        const dayOfDate = new Date(year, month, i).getDay();
        if(dayOfDate === 6){
            cell = row.insertCell();
            row = table.insertRow();
            cell.innerText = [i];
            cell.setAttribute('id', i);
        }
        else{
            cell = row.insertCell();
            cell.innerText = [i];
            cell.setAttribute('id', i);
        }
    }

    //달력의 date를 눌렀을 때 todolist 가 나오게 하기
    for(i = 1; i <= last_date; i++){
        var openDate = document.getElementById([i]);
        openDate.addEventListener("click", handleClick);
    
        function handleClick(event){
            const aside = document.getElementById("js_aside");
            console.dir(aside);
            if(aside.classList.length === 2){
                aside.classList.remove(showingClass);
            }
            else{
                aside.classList.add(showingClass);
            }            
        }  
    }
}


