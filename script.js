// const container = document.querySelector(".container");
// const seats = document.querySelectorAll(".row .seat:not(.sold)");
// const count = document.getElementById("count");
// const total = document.getElementById("total");
// const seatList = document.getElementById("seatList");

// const movieCards = document.querySelectorAll(".movie-card");

// const selectedMovieName = document.getElementById("selectedMovie");
// const selectedPrice = document.getElementById("selectedPrice");
// const selectedRating = document.getElementById("selectedRating");

// const bookBtn = document.getElementById("bookBtn");
// const ticketPopup = document.getElementById("ticketPopup");
// const closePopup = document.getElementById("closePopup");

// const ticketMovie = document.getElementById("ticketMovie");
// const ticketSeats = document.getElementById("ticketSeats");
// const ticketTotal = document.getElementById("ticketTotal");
// const ticketRating = document.getElementById("ticketRating");

// let ticketPrice = 0;



// movieCards.forEach(card => {
//   card.addEventListener("click", () => {
 
//     movieCards.forEach(c => c.classList.remove("active"));
//     card.classList.add("active");

   
//     document.querySelectorAll(".row .seat.selected").forEach(seat => {
//       seat.classList.remove("selected");
//     });

//     const name = card.getAttribute("data-name");
//     const price = card.getAttribute("data-price");
//     const rating = card.getAttribute("data-rating");

//     selectedMovieName.innerText = name;
//     selectedPrice.innerText = price;
//     selectedRating.innerText = rating;
//     ticketPrice = +price;

//     updateSelectedCount(); 
//   });
// });


// function updateSelectedCount() {
//   const selectedSeats = document.querySelectorAll(".row .seat.selected");
//   const seatNames = [];

//   selectedSeats.forEach(seat => {
//     const row = seat.parentElement.getAttribute("data-row");
//     const index = [...seat.parentElement.children].indexOf(seat) + 1;
//     seatNames.push(`${row}${index}`);
//   });

//   count.innerText = selectedSeats.length;
//   seatList.innerText = seatNames.length > 0 ? seatNames.join(", ") : "None";
//   total.innerText = selectedSeats.length * ticketPrice;
// }

// container.addEventListener("click", (e) => {
//   if (e.target.classList.contains("seat") && !e.target.classList.contains("sold")) {
//     e.target.classList.toggle("selected");
//     updateSelectedCount();
//   }
// });

// bookBtn.addEventListener("click", () => {
//   if (selectedMovieName.innerText === "Choose a movie" || count.innerText === "0") {
//     alert("Please select a movie and at least one seat!");
//     return;
//   }

//   ticketMovie.innerText = selectedMovieName.innerText;
//   ticketSeats.innerText = seatList.innerText;
//   ticketTotal.innerText = total.innerText;
//   ticketRating.innerText = selectedRating.innerText;

//   ticketPopup.style.display = "flex";
// });


// closePopup.addEventListener("click", () => {
//   ticketPopup.style.display = "none";
// });


// const ticketDate = document.getElementById("ticketDate");
// const ticketId = document.getElementById("ticketId");

// const printBtn = document.getElementById("printTicket");
// const downloadPDFBtn = document.getElementById("downloadPDF");


// function generateTokenId() {
//   return "TKT-" + Math.random().toString(36).substr(2, 9).toUpperCase();
// }

// bookBtn.addEventListener("click", () => {
//   if (selectedMovieName.innerText === "Choose a movie" || count.innerText === "0") {
//     alert("Please select a movie and at least one seat!");
//     return;
//   }


//   ticketMovie.innerText = selectedMovieName.innerText;
//   ticketSeats.innerText = seatList.innerText;
//   ticketTotal.innerText = total.innerText;
//   ticketRating.innerText = selectedRating.innerText;

  
//   ticketDate.innerText = new Date().toLocaleString();
//   ticketId.innerText = generateTokenId();

//   ticketPopup.style.display = "flex";
// });


// printBtn.addEventListener("click", () => {
//   window.print();
// });

// downloadPDFBtn.addEventListener("click", () => {
//   const { jsPDF } = window.jspdf;
//   const doc = new jsPDF();

//   doc.setFontSize(18);
//   doc.text("🎟️ Movie Ticket", 70, 20);

//   doc.setFontSize(12);
//   doc.text("Movie: " + ticketMovie.innerText, 20, 40);
//   doc.text("Seats: " + ticketSeats.innerText, 20, 50);
//   doc.text("Total Price: RS." + ticketTotal.innerText, 20, 60);
//   doc.text("Rating: ⭐" + ticketRating.innerText, 20, 70);
//   doc.text("Date: " + ticketDate.innerText, 20, 80);
//   doc.text("Token ID: " + ticketId.innerText, 20, 90);

//   doc.save("Movie_Ticket.pdf");
// });





const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.sold)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const seatList = document.getElementById("seatList");

const movieCards = document.querySelectorAll(".movie-card");

const selectedMovieName = document.getElementById("selectedMovie");
const selectedPrice = document.getElementById("selectedPrice");
const selectedRating = document.getElementById("selectedRating");

const showDate = document.getElementById("showDate");
const showTime = document.getElementById("showTime");

const bookBtn = document.getElementById("bookBtn");
const ticketPopup = document.getElementById("ticketPopup");
const closePopup = document.getElementById("closePopup");

const ticketMovie = document.getElementById("ticketMovie");
const ticketSeats = document.getElementById("ticketSeats");
const ticketTotal = document.getElementById("ticketTotal");
const ticketRating = document.getElementById("ticketRating");
const ticketShowDate = document.getElementById("ticketShowDate");
const ticketShowTime = document.getElementById("ticketShowTime");
const ticketDate = document.getElementById("ticketDate");
const ticketId = document.getElementById("ticketId");

const printBtn = document.getElementById("printTicket");
const downloadPDFBtn = document.getElementById("downloadPDF");

let ticketPrice = 0;

// Set today's date as minimum for showDate
const today = new Date().toISOString().split("T")[0];
showDate.setAttribute("min", today);

// Movie selection
movieCards.forEach(card => {
  card.addEventListener("click", () => {
    movieCards.forEach(c => c.classList.remove("active"));
    card.classList.add("active");

    // Reset seats when switching movies
    document.querySelectorAll(".row .seat.selected").forEach(seat => {
      seat.classList.remove("selected");
    });

    const name = card.getAttribute("data-name");
    const price = card.getAttribute("data-price");
    const rating = card.getAttribute("data-rating");

    selectedMovieName.innerText = name;
    selectedPrice.innerText = price;
    selectedRating.innerText = rating;
    ticketPrice = +price;

    updateSelectedCount();
  });
});

// Update seat selection
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  const seatNames = [];

  selectedSeats.forEach(seat => {
    const row = seat.parentElement.getAttribute("data-row");
    const index = [...seat.parentElement.children].indexOf(seat) + 1;
    seatNames.push(`${row}${index}`);
  });

  count.innerText = selectedSeats.length;
  seatList.innerText = seatNames.length > 0 ? seatNames.join(", ") : "None";
  total.innerText = selectedSeats.length * ticketPrice;
}

// Seat click event
container.addEventListener("click", (e) => {
  if (e.target.classList.contains("seat") && !e.target.classList.contains("sold")) {
    e.target.classList.toggle("selected");
    updateSelectedCount();
  }
});

// Generate Token ID
function generateTokenId() {
  return "TKT-" + Math.random().toString(36).substr(2, 9).toUpperCase();
}

// Book Now button
bookBtn.addEventListener("click", () => {
  if (selectedMovieName.innerText === "Choose a movie" || count.innerText === "0") {
    alert("Please select a movie and at least one seat!");
    return;
  }

  if (!showDate.value || !showTime.value) {
    alert("Please select show date and time!");
    return;
  }

  // Fill ticket details
  ticketMovie.innerText = selectedMovieName.innerText;
  ticketSeats.innerText = seatList.innerText;
  ticketTotal.innerText = total.innerText;
  ticketRating.innerText = selectedRating.innerText;
  ticketShowDate.innerText = showDate.value;
  ticketShowTime.innerText = showTime.value;
  ticketDate.innerText = new Date().toLocaleString();
  ticketId.innerText = generateTokenId();

  ticketPopup.style.display = "flex";
});

// Close popup
closePopup.addEventListener("click", () => {
  ticketPopup.style.display = "none";
});

// Print Ticket
printBtn.addEventListener("click", () => {
  window.print();
});

// Download PDF
downloadPDFBtn.addEventListener("click", () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("🎟️ Movie Ticket", 70, 20);

  doc.setFontSize(12);
  doc.text("Movie: " + ticketMovie.innerText, 20, 40);
  doc.text("Seats: " + ticketSeats.innerText, 20, 50);
  doc.text("Total Price: RS." + ticketTotal.innerText, 20, 60);
  doc.text("Rating: ⭐" + ticketRating.innerText, 20, 70);
  doc.text("Show Date: " + ticketShowDate.innerText, 20, 80);
  doc.text("Show Time: " + ticketShowTime.innerText, 20, 90);
  doc.text("Booked On: " + ticketDate.innerText, 20, 100);
  doc.text("Token ID: " + ticketId.innerText, 20, 110);

  doc.save("Movie_Ticket.pdf");
});
