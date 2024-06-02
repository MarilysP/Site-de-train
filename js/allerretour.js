document.addEventListener('DOMContentLoaded', function () {
  const calendarContainer = document.getElementById('calendar-container');
  const datepicker = document.getElementById('datepicker');
  const calendarContainer2 = document.getElementById('calendar-container2');
  const datepicker2 = document.getElementById('datepicker2');
  const totalCheckbox = document.getElementById('total-checkbox');
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const totalDisplay = document.getElementById('total-display');
  const calendarDays = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
  const monthNames = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

  let today = new Date();
  let currentMonth1 = today.getMonth(); // For departure calendar
  let currentYear1 = today.getFullYear(); // For departure calendar
  let currentMonth2 = today.getMonth(); // For return calendar
  let currentYear2 = today.getFullYear(); // For return calendar
  let selectedDate1 = null; // Selected departure date
  let selectedDate2 = null; // Selected return date

  // Function to generate calendar
  function generateCalendar(year, month, container) {
    const calendarContainer = container === 'first' ? document.getElementById('calendar-container') : document.getElementById('calendar-container2');
    const datepicker = container === 'first' ? document.getElementById('datepicker') : document.getElementById('datepicker2');
    const currentMonth = container === 'first' ? currentMonth1 : currentMonth2;
    const currentYear = container === 'first' ? currentYear1 : currentYear2;
    
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const numDays = lastDayOfMonth.getDate();
    const firstDayOfWeek = (firstDayOfMonth.getDay() === 0) ? 6 : firstDayOfMonth.getDay() - 1;

    let calendarHTML = '<div id="calendar-header">';
    calendarHTML += '<button id="prev-month-btn-' + container + '">&lt;</button>';
    calendarHTML += '<span id="month-year">' + monthNames[month] + ' ' + year + '</span>';
    calendarHTML += '<button id="next-month-btn-' + container + '">&gt;</button>';
    calendarHTML += '</div>';

    calendarHTML += '<table>';
    calendarHTML += '<tr>';
    calendarDays.forEach(day => {
      calendarHTML += '<td>' + day + '</td>';
    });
    calendarHTML += '</tr>';

    let dayCount = 1;
    for (let i = 0; i < 42; i++) {
      if (i % 7 === 0) {
        calendarHTML += '<tr>';
      }
      if (i < firstDayOfWeek || dayCount > numDays) {
        calendarHTML += '<td></td>';
      } else {
        const currentDate = new Date(year, month, dayCount);
        const price = calculatePrice(currentDate);
        calendarHTML += '<td data-date="' + currentDate.toISOString() + '">' + dayCount + ' - <span class="price">' + price + '€</span></td>';
        dayCount++;
      }
      if (i % 7 === 6) {
        calendarHTML += '</tr>';
        if (dayCount > numDays) {
          break;
        }
      }
    }
    calendarHTML += '</table>';

    calendarContainer.innerHTML = calendarHTML;

    // Event listeners for navigation buttons
    const prevMonthBtn = document.getElementById('prev-month-btn-' + container);
    const nextMonthBtn = document.getElementById('next-month-btn-' + container);
    prevMonthBtn.addEventListener('click', function () {
      if (container === 'first') {
        currentMonth1--;
        if (currentMonth1 < 0) {
          currentMonth1 = 11;
          currentYear1--;
        }
        generateCalendar(currentYear1, currentMonth1, container);
      } else {
        currentMonth2--;
        if (currentMonth2 < 0) {
          currentMonth2 = 11;
          currentYear2--;
        }
        generateCalendar(currentYear2, currentMonth2, container);
      }
    });
    nextMonthBtn.addEventListener('click', function () {
      if (container === 'first') {
        currentMonth1++;
        if (currentMonth1 > 11) {
          currentMonth1 = 0;
          currentYear1++;
        }
        generateCalendar(currentYear1, currentMonth1, container);
      } else {
        currentMonth2++;
        if (currentMonth2 > 11) {
          currentMonth2 = 0;
          currentYear2++;
        }
        generateCalendar(currentYear2, currentMonth2, container);
      }
    });

    // Add event listeners to date cells
    const dateCells = calendarContainer.querySelectorAll('td[data-date]');
    dateCells.forEach(cell => {
      cell.addEventListener('click', function () {
        if (container === 'first') {
          selectedDate1 = new Date(cell.dataset.date);
          const price1 = calculatePrice(selectedDate1);
          datepicker.value = selectedDate1.toLocaleDateString('fr-FR') + ' - ' + price1 + '€';
          updateTotalPrice();
          calendarContainer.style.display = 'none';
        } else {
          selectedDate2 = new Date(cell.dataset.date);
          if (selectedDate1 && selectedDate2 <= selectedDate1) {
            alert("La date de retour doit être ultérieure à la date de départ.");
            return;
          }
          const price2 = calculatePrice(selectedDate2);
          datepicker2.value = selectedDate2.toLocaleDateString('fr-FR') + ' - ' + price2 + '€';
          updateTotalPrice();
          calendarContainer2.style.display = 'none';
        }
      });
    });
  }

  // Function to calculate price based on day of the week
  function calculatePrice(date) {
    const dayOfWeek = date.getDay();
    // Pricing logic based on the provided rates
    if (dayOfWeek >= 1 && dayOfWeek <= 4) { // Lundi à Jeudi
      return 49;
    } else { // Vendredi à Dimanche
      return 69;
    }
  }

  // Function to update total price based on selected checkboxes and dates
  function updateTotalPrice() {
    let totalPrice = 0;
    if (selectedDate1) {
      totalPrice += calculatePrice(selectedDate1);
    }
    if (selectedDate2) {
      totalPrice += calculatePrice(selectedDate2);
    }
    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        // Add the price of each selected option
        switch (checkbox.value) {
          case 'Place tranquille':
            totalPrice += 3;
            break;
          case 'Prise électrique':
            totalPrice += 2;
            break;
          case 'Bagage supplémentaire volumineux':
            totalPrice += 5;
            break;
          case 'Information par SMS':
            totalPrice += 1;
            break;
          case 'Garantie Annulation et trajet perturbé':
            totalPrice += 2.9;
            break;
          // Add more cases for other options and prices
        }
      }
    });
    totalDisplay.textContent = totalPrice.toFixed(2) + '€';
  }

  // Event listener for datepicker input (departure date)
  datepicker.addEventListener('click', function () {
    generateCalendar(currentYear1, currentMonth1, 'first');
    calendarContainer.style.display = 'block';
    calendarContainer2.style.display = 'none'; // Hide calendar 2
  });
  
  // Event listener for datepicker2 input (return date)
  datepicker2.addEventListener('click', function () {
    generateCalendar(currentYear2, currentMonth2, 'second');
    calendarContainer2.style.display = 'block';
    calendarContainer.style.display = 'none'; // Hide calendar 1
  });

  // Add event listener for checkboxes to update total price
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateTotalPrice);
  });

  // Initialize calendars
  generateCalendar(currentYear1, currentMonth1, 'first');
  generateCalendar(currentYear2, currentMonth2, 'second');
});
