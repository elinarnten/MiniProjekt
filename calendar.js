
// const weekday = ["Måndag","Tisdag","Onsdag","Torsdag","Fredag","Lördag","Söndag"];
const date = new Date();
window.onload = ('load', main);

function main() {
    renderSelectedMonth();
    getHolidays();
    addEventListener();
    /* markUpCurrentDay(date) */
}

function addEventListener() {
    document.getElementById('prev-button').addEventListener('click', prevMonth);
    document.getElementById('next-button').addEventListener('click', nextMonth);
}

function renderSelectedMonth() {
    const dateContainer = document.getElementById('date-container');
    resetCalendar();
    uppdateMonthName(date);
    getCalendar(date, dateContainer);
}

async function getHolidays() {
    fetch('http://sholiday.faboul.se/dagar/v2.1/2015')
    .then(res => res.json())
    .then(data => console.log(data));
}

function getCalendar(date, dateContainer) {
    const daysOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const month = (date.getMonth() + 1);
    const year = (date.getFullYear());
    const day = (date.getDate());
    for (let i = 1; i <= daysOfMonth; i++) {
        const dayContainer = document.createElement('div');
        dayContainer.innerText = i;
        const searchDate = (year + "-" + String(month).padStart(2, '0') + "-" + (String(i).padStart(2, '0')));
        dayContainer.setAttribute("data-date", searchDate)
        dateContainer.appendChild(dayContainer);
        if (date.getFullYear() === new Date().getFullYear() &&
            date.getMonth() === new Date().getMonth() &&
            date.getDate() === i) {
            dayContainer.style.backgroundColor = 'red';
        } 
    }
}

function resetCalendar() {
    document.getElementById('date-container').innerHTML = '';
}

function prevMonth() {
    date.setMonth(date.getMonth() - 1);
    renderSelectedMonth();
}

function nextMonth(){
    date.setMonth(date.getMonth() + 1);
    renderSelectedMonth();
}

function uppdateMonthName(date) {
    const months = ['Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December'];
    const monthName = months[date.getMonth()] +" "+ date.getFullYear();
    document.getElementById('current-month').innerText = monthName;
}

/* function markUpCurrentDay(date, i, day, dayContainer){
    //let today = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    /* let dd = date.getDate();
    let mm = date.getMonth() + 1; */


    /* if (dd === date) {
        dayContainer.style.backgroundColor = 'red';
    } */

    

  /*   console.log(dd, mm) */

   /* if (date === dd & mm) {
       dayContainer.style.backgroundColor = 'red';

   } */
  

function renderPrevMonthDays() {
const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
const firstDay = date.getDay();

const days = "";
for (let i = firstDay; i > 0; i--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    console.log(days)
}
}
renderPrevMonthDays()
