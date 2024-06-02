
// Sélection des éléments de formulaire
const departSelect = document.getElementById('gareDepart');
const arriveeSelect = document.getElementById('gareArrive');

// Ajout d'un écouteur d'événements de changement pour le formulaire de départ
departSelect.addEventListener('change', function() {
    // Vérification si la même valeur est sélectionnée dans le formulaire de destination
    if (departSelect.value === arriveeSelect.value) {
        // Affichage d'un message d'erreur ou désélection automatique de l'option dans le formulaire de destination
        alert("La gare de départ ne peut pas être la même que la gare d'arrivée.");
        // Désélection de l'option dans le formulaire de destination
        arriveeSelect.value = '';
    }
});

// Ajout d'un écouteur d'événements de changement pour le formulaire de destination
arriveeSelect.addEventListener('change', function() {
    // Vérification si la même valeur est sélectionnée dans le formulaire de départ
    if (arriveeSelect.value === departSelect.value) {
        // Affichage d'un message d'erreur ou désélection automatique de l'option dans le formulaire de départ
        alert("La gare d'arrivée ne peut pas être la même que la gare de départ.");
        // Désélection de l'option dans le formulaire de départ
        departSelect.value = '';
    }
});






const selectElementDepart = document.getElementById('gareDepart');

// Ajoutez un écouteur d'événements pour détecter les changements de sélection

selectElementDepart.addEventListener('change', function() {
    // Récupérez la valeur sélectionnée
    const gareDepartvaleur = selectElementDepart.value;
    // Affichez la valeur sélectionnée dans la console
    console.log(gareDepartvaleur);
});



const selectElementArrive = document.getElementById('gareArrive');

// Ajoutez un écouteur d'événements pour détecter les changements de sélection
selectElementArrive.addEventListener('change', function() {
    // Récupérez la valeur sélectionnée
    const gareArrivevaleur = selectElementArrive.value;
    // Affichez la valeur sélectionnée dans la console
    console.log(gareArrivevaleur);
});





document.addEventListener('DOMContentLoaded', function () {
    const calendarContainer = document.getElementById('calendar-container');
    const datepicker = document.getElementById('datepicker');
    const totalCheckbox = document.getElementById('total-checkbox');
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const totalDisplay = document.getElementById('total-display');
    const calendarDays = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
    const monthNames = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
  
    let today = new Date();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();
    let selectedDate = null;
  
    // Function to generate calendar
    function generateCalendar(year, month) {
      const firstDayOfMonth = new Date(year, month, 1);
      const lastDayOfMonth = new Date(year, month + 1, 0);
      const numDays = lastDayOfMonth.getDate();
      const firstDayOfWeek = (firstDayOfMonth.getDay() === 0) ? 6 : firstDayOfMonth.getDay() - 1;
  
      let calendarHTML = '<div id="calendar-header">';
      calendarHTML += '<button id="prev-month-btn">&lt;</button>';
      calendarHTML += '<span id="month-year">' + monthNames[month] + ' ' + year + '</span>';
      calendarHTML += '<button id="next-month-btn">&gt;</button>';
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
      const prevMonthBtn = document.getElementById('prev-month-btn');
      const nextMonthBtn = document.getElementById('next-month-btn');
      prevMonthBtn.addEventListener('click', function () {
        currentMonth--;
        if (currentMonth < 0) {
          currentMonth = 11;
          currentYear--;
        }
        generateCalendar(currentYear, currentMonth);
      });
      nextMonthBtn.addEventListener('click', function () {
        currentMonth++;
        if (currentMonth > 11) {
          currentMonth = 0;
          currentYear++;
        }
        generateCalendar(currentYear, currentMonth);
      });
  
      // Add event listeners to date cells
      const dateCells = calendarContainer.querySelectorAll('td[data-date]');
      dateCells.forEach(cell => {
        cell.addEventListener('click', function () {
          selectedDate = new Date(cell.dataset.date);
          const price = calculatePrice(selectedDate);
          datepicker.value = selectedDate.toLocaleDateString('fr-FR') + ' - ' + price + '€';
          updateTotalPrice();
          calendarContainer.style.display = 'none';
        });
      });
    }
  
    // Function to calculate price based on day of the week
    function calculatePrice(selectedDate) {
        const dayOfWeek = selectedDate.getDay();
        // Logique de tarification basée sur les tarifs fournis
        if (dayOfWeek >= 1 && dayOfWeek <= 4) { // Lundi à Jeudi
            return 49;
        } else { // Vendredi à Dimanche
            return 69;
        }
    }
    
    // Fonction pour calculer le prix en fonction du jour de la semaine pour le retour
    function calculatePrice2(selectedDate) {
        const dayOfWeek = selectedDate.getDay();
        // Logique de tarification basée sur les tarifs fournis
        if (dayOfWeek >= 1 && dayOfWeek <= 4) { // Lundi à Jeudi
            return 49;
        } else { // Vendredi à Dimanche
            return 69;
        }
    }
  
    // Function to update total price based on selected checkboxes and date
    function updateTotalPrice() {
      let totalPrice = calculatePrice(selectedDate); // Prix de base en fonction de la date sélectionnée
      checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
          // Ajoutez le prix de chaque option sélectionnée
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
            // Ajoutez d'autres cases pour d'autres options et prix
          }
        }
      });
      totalDisplay.textContent = totalPrice.toFixed(2) + '€';
    }
  
    // Event listener for datepicker input
    datepicker.addEventListener('click', function () {
      generateCalendar(currentYear, currentMonth);
      calendarContainer.style.display = 'block';
    });
  
    // Add event listener for checkboxes to update total price
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', updateTotalPrice);
    });
  
    // Initialize calendar
    generateCalendar(currentYear, currentMonth);
  });


  const cards = document.querySelectorAll('.card');
  let selectedHour = null;

  function deselectAll() {
      cards.forEach(card => {
      card.classList.remove('selectedtrain');
      });
  }

  cards.forEach(card => {
      card.addEventListener('click', function () {
      deselectAll();
      card.classList.add('selectedtrain');
      selectedHour = card.querySelector('.h').textContent;
      console.log(selectedHour);
      });
  });

  
