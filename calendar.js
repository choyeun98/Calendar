const todayDate = document.getElementById('js_todayDate');
const table = document.getElementById('js_calendar');
const beforeBtn = document.getElementById('js_btn1');
const afterBtn = document.getElementById('js_btn2');




let today = new Date();
let year = today.getFullYear();
let month = today.getMonth();
let date = today.getDate();
const day = today.getDay();
let first_day = new Date(year, month, 1).getDay();
let last_date = new Date(year, month + 1, 0).getDate();



const PAINT_TODAY = 'paintToday'; 
const BIRTHDAY = 'bD';


//내 생일 띄우기(실행안됨)
/*
function birthDay(){
    YMD = [year, 5, 17];
    everyBD = document.getElementById(YMD);
    everyBD.classList.add(BIRTHDAY);
        
    
}*/


//오늘 날짜 색칠되게 하기(실행은 되는데 다른달로 넘어갓다 오면 실행이 안됨)
function paintToday(){
    for(i = 1; i <= last_date; i++ ){
        const paintTodayDate = new Date(year, month, date).getDate();
        YMD = [year, month, date];
        if(paintTodayDate === i){
            todayId = document.getElementById(YMD);
            todayId.classList.add(PAINT_TODAY);
        }
    }
}


function yearNMonth(){
    todayDate.innerText = `${year}. ${month+1}` 
}


//table 의 행의 갯수가 1이 되도록 만들어줌. 1을 남기는 이유는 요일을 남기기 위해서
function deleteTable(){
    while(table.rows.length > 1){
        table.deleteRow(-1);
    }
}


//이전달로 가는 버튼을 눌렀을 때
function beforeMonth(){
    month = month - 1;
    if(month === -1 ){
        year = year - 1; 
        month = month + 12;
    }
    todayDate.innerText = `${year}. ${month + 1}`;
    last_date = new Date(year, month + 1, 0).getDate();
    first_day = new Date(year, month, 1).getDay();
    deleteTable(); //이전의 날짜가 있는 행 삭제를 위함
    paintCalendar();
}


//이후달로 가는 버튼을 눌렀을 때
function afterMonth(){
    month = month + 1;
    if(month === 12){
        year = year + 1;
        month = month - 12;
    }
    todayDate.innerText = `${year}. ${month + 1}`;
    last_date = new Date(year, month + 1, 0).getDate();
    first_day = new Date(year, month, 1).getDay();
    deleteTable();
    paintCalendar();
}


//날짜 채우기. 단 토요일 이후에는 행 바꿔서 추가 할수있게 하기
function paintCalendar(){
    //1일이 시작되기 전 공백을 만들어 주기 위함
    let row = table.insertRow();
    for(i = 0; i < first_day; i++ ){
        row.insertCell(i);
    }


    for(i = 1; i <= last_date; i++ ){
        const dayOfDate = new Date(year, month, i).getDay();
        let YMD = [year, month, i];
        if(dayOfDate === 6){
            cell = row.insertCell();
            row = table.insertRow();
            cell.innerText = [i];
            cell.setAttribute('id', YMD);
        }
        else{
            cell = row.insertCell();
            cell.innerText = [i];
            cell.setAttribute('id', YMD);
        }
    }
}







function init(){
    paintCalendar();
    yearNMonth();
    beforeBtn.addEventListener("click", beforeMonth);
    afterBtn.addEventListener("click", afterMonth);
}

window.onload = function(){
    paintToday();
}


init();





    /*달력의 date를 눌렀을 때 todolist 가 나오게 하기(고정되게 하기로 함)
    for(i = 1; i <= last_date; i++){
        var openDate = document.getElementById([i]);
        openDate.addEventListener("click", handleClick);
    
        function handleClick(event){
            const aside = document.getElementById("js_aside");
            if(aside.classList.length === 2){
                aside.classList.remove(showingClass);
            }
            else{
                aside.classList.add(showingClass);
            }            
        }  
    }*/
