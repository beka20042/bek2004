// ========================================
// НАСТРОЙКИ
// ========================================

// Дата валиимы
const eventDate = new Date("2026-08-16T16:00:00");

// ========================================
// ОБРАТНЫЙ ОТСЧЁТ
// ========================================

function updateCountdown() {

  const now = new Date();

  const difference =
    eventDate.getTime() - now.getTime();

  const days =
    document.getElementById("days");

  const hours =
    document.getElementById("hours");

  const minutes =
    document.getElementById("minutes");

  const seconds =
    document.getElementById("seconds");


  // Если дата уже наступила

  if (difference <= 0) {

    days.textContent = "0";
    hours.textContent = "0";
    minutes.textContent = "0";
    seconds.textContent = "0";

    return;
  }


  const totalSeconds =
    Math.floor(difference / 1000);


  const d =
    Math.floor(totalSeconds / 86400);


  const h =
    Math.floor(
      (totalSeconds % 86400) / 3600
    );


  const m =
    Math.floor(
      (totalSeconds % 3600) / 60
    );


  const s =
    totalSeconds % 60;


  days.textContent = d;

  hours.textContent =
    String(h).padStart(2, "0");

  minutes.textContent =
    String(m).padStart(2, "0");

  seconds.textContent =
    String(s).padStart(2, "0");
}


// Запускаем таймер

updateCountdown();

setInterval(
  updateCountdown,
  1000
);


// ========================================
// ПОДТВЕРЖДЕНИЕ ПРИСУТСТВИЯ
// ========================================

const rsvpButton =
  document.getElementById("rsvpButton");


const message =
  "Ассаляму алейкум! Я хочу подтвердить своё присутствие на валииме 16 августа 2026 года в 16:00.";


rsvpButton.addEventListener(
  "click",
  function (event) {

    event.preventDefault();


    const encodedMessage =
      encodeURIComponent(message);


    /*
      ПОКА НОМЕР НЕ УКАЗАН.

      Поэтому откроется WhatsApp
      с уже готовым текстом.
    */

    window.open(
      `https://wa.me/?text=${encodedMessage}`,
      "_blank"
    );

  }
);


// ========================================
// АНИМАЦИЯ ПРИ ПРОКРУТКЕ
// ========================================

const cards =
  document.querySelectorAll(".card");


const observer =
  new IntersectionObserver(

    (entries) => {

      entries.forEach(
        (entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              "visible"
            );

            observer.unobserve(
              entry.target
            );

          }

        }
      );

    },

    {
      threshold: 0.08
    }

  );


cards.forEach(
  (card) => {

    card.classList.add(
      "reveal"
    );

    observer.observe(card);

  }
);
