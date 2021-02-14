let tbodyWeek = document.getElementById('week').getElementsByTagName('tbody')[0];

let rowUp = document.createElement('tr');
rowUp.innerHTML = `<td id="rowUp" colspan="50">
<button type="button" class="rounded" style="font-size: 13px; width: 55px;"><i class="fa fa-chevron-up"></i></button>
</td>`;
let rowDown = document.createElement('tr');
rowDown.innerHTML = `<td id="rowDown" colspan="50">
<button type="button" class="rounded" style="font-size: 13px; width: 55px;"><i class="fa fa-chevron-down"></i></button>
</td>`;

tbodyWeek.appendChild(rowUp);

let hoursRow = document.createElement('tr');
let emptyCell = document.createElement('td');
emptyCell.style = 'width: 20px;';
hoursRow.appendChild(emptyCell);

for (let i = 0; i < 25; i++) {
  let hourCell = document.createElement('td');
  hourCell.colSpan = '2';
  hourCell.style = 'position: relative; height: 50px;'
  let hour = document.createElement('label');
  hour.style = 'position: absolute; left: -8px; top: 18px; font-size: 16px'
  hour.innerHTML = `${i===24 ? 0 : i}h`;
  hourCell.appendChild(hour);
  hoursRow.appendChild(hourCell);
}

tbodyWeek.appendChild(hoursRow);

for (let i = 0; i < 7; i++) {
  tbodyWeek.appendChild(createDay());
}

function createDay() {
  let day = document.createElement('tr');
  let dayCell = document.createElement('td');
  dayCell.style = 'display: flex; flex-direction: column; align-items: flex-end; width: 60px; padding-right: 12px;';
  dayCell.innerHTML = `<h3>uto.</h3><p>25.7.2016</p>`;
  day.appendChild(dayCell);
  
  for (let i = 0; i < 48; i++) {
    let halfHour = document.createElement('td');
    halfHour.classList.add('td-border');
  
    if (i % 2 === 0) halfHour.classList.add('td-right-border');
  
    day.appendChild(halfHour);
  }

  return day;
}

tbodyWeek.appendChild(rowDown);
