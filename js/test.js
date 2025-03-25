document.addEventListener('DOMContentLoaded', function() {
    var ctx = document.getElementById('travelChart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Włochy', 'Hiszpania', 'Grecja', 'Francja', 'Portugalia', 'Chorwacja'],
        datasets: [{
          label: 'Popularność kierunków (liczba wycieczek)',
          data: [253, 214, 187, 165, 142, 136],
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(75, 192, 192, 0.7)',
            'rgba(153, 102, 255, 0.7)',
            'rgba(255, 159, 64, 0.7)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
    
  //   var travelModal = document.getElementById('travelModal');
    
  //   if (typeof bootstrap !== 'undefined') {
  //     travelModal.addEventListener('show.bs.modal', function(event) {
  //       var button = event.relatedTarget;
  //       var title = button.getAttribute('data-title');
  //       var description = button.getAttribute('data-description');
  //       var image = button.getAttribute('src');
        
  //       var modalTitle = travelModal.querySelector('.modal-title');
  //       var modalImage = travelModal.querySelector('.modal-image');
  //       var modalDescription = travelModal.querySelector('#travelDescription');
        
  //       modalTitle.textContent = title;
  //       modalImage.src = image;
  //       modalDescription.textContent = description;
        
  //       console.log('Modal showing with:', {title, image, description});
  //     });
      
  //     travelModal.addEventListener('shown.bs.modal', function() {
  //       console.log('Modal fully shown');
  //     });
  //   } else {
  //     console.error('Bootstrap not loaded');
  //   }
    
  //   var travelImages = document.querySelectorAll('.travel-img-container img');
  //   travelImages.forEach(function(img) {
  //     img.style.cursor = 'pointer';
  //     img.addEventListener('click', function() {
  //     console.log('Image clicked:', this.getAttribute('data-title'));
  //   });
  //   });
  
  
    const travelImages = document.querySelectorAll('.travel-img-container img');
    const imgExpand = document.querySelector('.img-expand');
    const expandImg = imgExpand.querySelector('img');
    const closeButton = imgExpand.querySelector('.close-button');
    const imageTitle = imgExpand.querySelector('.image-title');
    const imageDescription = imgExpand.querySelector('.image-description');

    travelImages.forEach(function(img) {
        img.addEventListener('click', function(e) {
        e.preventDefault();
        
        const clickX = e.clientX
        const clickY = e.clientY

        expandImg.style.transformOrigin = `${clickX}px ${clickY}px`;
        expandImg.style.transform = 'scale(0)';
        expandImg.style.opacity = '0';
        
        expandImg.src = img.src;
        imageTitle.textContent = img.getAttribute('data-title');
        imageDescription.textContent = img.getAttribute('data-description');
        
        imgExpand.style.display = 'flex';
        
        expandImg.offsetHeight;
        
        imgExpand.classList.add('active');
        
        requestAnimationFrame(() => {
            expandImg.style.transform = 'scale(1)';
            expandImg.style.opacity = '1';
        });
        });
    });

    function closeExpand() {
        imgExpand.classList.remove('active');
        
        setTimeout(function() {
        imgExpand.style.display = 'none';
        }, 400);
    }

    closeButton.addEventListener('click', closeExpand);

    imgExpand.addEventListener('click', function(e) {
        if (e.target === imgExpand) {
        closeExpand();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && imgExpand.classList.contains('active')) {
        closeExpand();
        }
    });

// const employeeData = [
//       { img: "img/employee1.jpg", name: "Jan Kowalski", position: "Specjalista ds. podróży" },
//       { img: "img/employee2.jpg", name: "Anna Nowak", position: "Kierownik ds. logistyki" },
//       { img: "img/employee3.jpg", name: "Piotr Wiśniewski", position: "Ekspert ds. relacji międzyludzkich" },
//       { img: "img/employee4.jpg", name: "Katarzyna Zielińska", position: "Specjalistka ds. marketingu" },
//       { img: "img/employee5.jpg", name: "Michał Lewandowski", position: "Konsultant ds. turystyki" },
//       { img: "img/employee6.jpg", name: "Ewa Kamińska", position: "Specjalistka ds. obsługi klienta" }
//   ];

//   const track = document.querySelector(".carousel-track");
//   const prevBtn = document.getElementById("prevBtn");
//   const nextBtn = document.getElementById("nextBtn");

//   function createCard(employee) {
//       const card = document.createElement("div");
//       card.classList.add("card");
//       card.innerHTML = `
//           <img class="card-img-top" src="${employee.img}" alt="${employee.name}">
//           <div class="card-body">
//               <h5 class="card-title">${employee.name}</h5>
//               <p class="card-text">${employee.position}</p>
//           </div>
//       `;
//       return card;
//   }

//   let clonedStart = employeeData.slice(-3);
//   let clonedEnd = employeeData.slice(0, 3);

//   [...clonedStart, ...employeeData, ...clonedEnd].forEach(emp => {
//       track.appendChild(createCard(emp));
//   });

//   // let cardWidth = document.querySelector(".card").offsetWidth;
//   let cardWidth = 300;
//   let totalCards = track.children.length;
//   console.log(totalCards)
//   // let totalCards = 18
//   // let index = employeeData.length;
//   let startIndex = -2;

//   track.style.transition = "none";
//   track.style.transform = `translateX(-${startIndex * cardWidth +5}px)`;
//   track.style.transition = "transform 0.5s ease-in-out";

//   index = 0;

//   function updateCarousel() {
//       console.log(index);
//       track.style.transition = "transform 0.5s ease-in-out";
//       track.style.transform = `translateX(-${(index + startIndex) * cardWidth +25}px)`;

//       setTimeout(() => {
//           if (index >= totalCards - 3) {
//               track.style.transition = "none";
//               index = 3;
//               track.style.transform = `translateX(+${index * (cardWidth+10)}px)`;
//           }
//           if (index <= 0) {
//               track.style.transition = "none";
//               index = totalCards - 6;
//               track.style.transform = `translateX(-${index * (cardWidth +10) }px)`;
//           }
//       }, 500);
//   }

//   nextBtn.addEventListener("click", function() {
//       index++;
//       updateCarousel();
//   });

//   prevBtn.addEventListener("click", function() {
//       index--;
//       updateCarousel();
//   });
});