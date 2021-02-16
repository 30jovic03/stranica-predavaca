let calendar = {
	'12.02.2021.': {
		1: {
			start: '22:30',
			end: '24:00',
    }
	},
  '13.02.2021.': {
    1: {
      start: '07:00',
      end: '08:30',
    },
    2: {
      start: '12:30',
      end: '15:00',
    }
  },
  '14.02.2021.': {
    1: {
      start: '09:00',
      end: '11:00',
    },
    2: {
      start: '13:30',
      end: '15:30',
    }
  },
  '15.02.2021.': {
    1: {
      start: '00:00',
      end: '02:00',
    },
    2: {
      start: '02:30',
      end: '05:30',
    }
  },
  '16.02.2021.': {
    1: {
      start: '00:30',
      end: '02:00',
    },
    2: {
      start: '02:00',
      end: '04:30',
    }
  },
  '17.02.2021.': {
    1: {
      start: '07:00',
      end: '08:30',
    },
    2: {
      start: '12:00',
      end: '14:30',
    },
    3: {
      start: '18:30',
      end: '19:30',
    },
    4: {
      start: '21:00',
      end: '22:30',
    }
  },
  '18.02.2021.': {
		1: {
			start: '12:30',
			end: '15:00',
    }
	}
}

let days = ['ned', 'pon', 'uto', 'sre', 'cet', 'pet', 'sub'];

let time = [];
for (let i = 0; i < 25; i++) {
  if (i < 10) {
    time.push(`0${i}:00`);
    time.push(`0${i}:30`);
  } else if (i !== 24) {
    time.push(`${i}:00`);
    time.push(`${i}:30`);
  } else time.push('24:00');
}

let tbodyWeek = document.getElementById('weekBody');

let rowUp = document.createElement('tr');
rowUp.innerHTML = `<td id="rowUp" colspan="50">
<button type="button" class="rounded" style="font-size: 13px; width: 55px;"><i class="fa fa-chevron-up"></i></button>
</td>`;
let rowDown = document.createElement('tr');
rowDown.innerHTML = `<td id="rowDown" colspan="50">
<button type="button" class="rounded" style="font-size: 13px; width: 55px;"><i class="fa fa-chevron-down"></i></button>
</td>`;

tbodyWeek.appendChild(rowUp);

tbodyWeek.appendChild(createHoursRow());

function createHoursRow() {
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

  return hoursRow;
}

for (let i = 0; i < 7; i++) {
  tbodyWeek.appendChild(createDayRow(i));
}

function createDayRow(weekDay) {
  let day = Object.keys(calendar)[weekDay];
  let fields = setFields(day);

  let dayNumber = new Date(day.split('.').reverse().slice(1).join('-')).getDay();
  let dayName = days[dayNumber];

  let dayRow = document.createElement('tr');
  let dayCell = document.createElement('td');
  dayCell.style = 'display: flex; flex-direction: column; align-items: flex-end; width: 60px; padding-right: 12px;';
  dayCell.innerHTML = `<h3>${dayName}</h3><p>${day}</p>`;
  dayRow.appendChild(dayCell);
  
  for (let i = 0; i < 48; i++) {
    let halfHour = document.createElement('td');
    halfHour.classList.add('td-week');
  
    if (i % 2 === 0) halfHour.classList.add('td-right-border');

    if (fields.includes(i)) halfHour.classList.add('lime-field');
  
    dayRow.appendChild(halfHour);
  }

  return dayRow;
}

function setFields(dayRef) {
  let fields = [];
  let day = calendar[dayRef];
  let countTimes = Object.keys(day).length;
  
  for (let i=1; i<=countTimes; i++) {
    let start = (time.indexOf(day[i].start));
    let end = (time.indexOf(day[i].end));
    
    for (let j=start; j<end; j++) fields.push(j);
  }

  return fields;
}

tbodyWeek.appendChild(rowDown);
