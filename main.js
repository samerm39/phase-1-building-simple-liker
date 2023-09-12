// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

document.addEventListener("DOMContentLoaded", () => {
  const errorModal = document.querySelector("#modal");
  errorModal.classList.add("hidden");

  const hearts = document.querySelectorAll(".like-glyph");

  hearts.forEach((heart) => {
    heart.addEventListener("click", () => {
      mimicServerCall()
        .then(() => {
          if (!heart.classList.contains("activated-heart")) {
            heart.classList.add("activated-heart");
            heart.innerHTML = fullHeart;
          } else {
            heart.classList.remove("activated-heart");
            heart.innerHTML = emptyHeart;
          }
        })
        .catch(() => {
          errorModal.classList.remove("hidden");
          const errorMessage = document.querySelector("#modal-message");
          errorMessage.textContent = "Server Error: Request Failed";

          setTimeout(() => {
            errorModal.classList.add("hidden");
          }, 3000);
        });
    });
  });
});

// Simulated server call function
function mimicServerCall() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random();
      if (random < 0.2) {
        reject("Server Error: Request Failed");
      } else {
        resolve("Success");
      }
    }, 1000);
  });
}

const fullHeart = `<span class="like-glyph activated-heart">&#x2764;</span>`;
const emptyHeart = `<span class="like-glyph">&#x2661;</span>`;


// Simulated server call function
function mimicServerCall() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random();
      if (random < 0.2) {
        reject("Server Error: Request Failed");
      } else {
        resolve("Success");
      }
    }, 1000);
  });
}





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
