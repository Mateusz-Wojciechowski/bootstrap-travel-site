document.addEventListener("DOMContentLoaded", function(){
    var ctx = document.getElementById('travelChart').getContext('2d');
    var travelChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Włochy', 'Francja', 'Hiszpania', 'Polska', 'Grecja'],
        datasets: [{
          label: 'Liczba rezerwacji',
          data: [65, 59, 80, 81, 56],
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  });
  
document.addEventListener("DOMContentLoaded", function () {
  // Pobierz wszystkie obrazy z sekcji podróży
  document.querySelectorAll(".view.overlay img").forEach(function (img) {
    img.addEventListener("click", function () {
      // Pobierz nazwę pliku obrazka, np. "trip1.jpg"
      let imgSrc = img.getAttribute("src");
      
      // Znajdź, który modal ma ten sam obraz
      if (imgSrc.includes("trip1.jpg")) {
        $("#modalTrip1").modal("show");
      } else if (imgSrc.includes("trip2.jpg")) {
        $("#modalTrip2").modal("show");
      } else if (imgSrc.includes("trip3.jpg")) {
        $("#modalTrip3").modal("show");
      }
    });
  });
});
