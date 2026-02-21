const sliderSecSlider = document.querySelector('.sliderSecSlider');
const sliderSecSliderBox = document.querySelector('.sliderSecSliderBox')
const leftButton = document.querySelector('#leftButton');
const rightButton = document.querySelector('#rightButton');
const navigationButton = document.querySelector('.headerNavigationButton')
const navigationWindow = document.querySelector('.navigationWindow')
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const visiblePart = sliderSecSlider.clientWidth;
const fullWidth = window.innerWidth;
let clicks = window.innerWidth >= 769 ? 3 : 6;
leftButton.disabled = true;
const sliderWidth = sliderSecSliderBox.scrollWidth;
let sliderMove = Math.ceil((sliderWidth - visiblePart) / clicks);
const startLeft = 0;
let currentLeft = startLeft;
let leftEnd = -(sliderWidth - visiblePart);
let open = false;

sliderSecSliderBox.style.left = `${startLeft}px`;

const workingButtons = () =>{

   if(currentLeft >= startLeft){
      leftButton.disabled = true;
   } else {
      leftButton.disabled = false;
   }

   if(currentLeft <= leftEnd){
      rightButton.disabled = true;
   } else {
      rightButton.disabled = false;
   }

   leftButton.style.opacity = leftButton.disabled ? "0.4" : "1";
   leftButton.style.cursor = leftButton.disabled ? "not-allowed" : "pointer";
   leftButton.style.pointerEvents = leftButton.disabled ? "none" : "auto";

   rightButton.style.opacity = rightButton.disabled ? "0.4" : "1";
   rightButton.style.cursor = rightButton.disabled ? "not-allowed" : "pointer";
   rightButton.style.pointerEvents = rightButton.disabled ? "none" : "auto";
}

goLeftSlider = () => {
   let nextLeft = currentLeft + sliderMove;

   if(nextLeft > startLeft){
      nextLeft = startLeft;
   }

   sliderSecSliderBox.style.left = `${nextLeft}px`;

   currentLeft = nextLeft;

   workingButtons();
}

goRightSlider = () => {
   let nextLeft = currentLeft - sliderMove;

   if(nextLeft < leftEnd){
      nextLeft = leftEnd;
   }

   sliderSecSliderBox.style.left = `${nextLeft}px`;

   currentLeft = nextLeft;
   
   workingButtons();
}

const body = document.querySelector('body');

const openNavigationMenu = () =>{
   if(!open){
      navigationButton.classList.toggle('active');

      main.classList.add('hidden');
      footer.classList.add('hidden');
      body.style.overflow = 'hiddden'

      setTimeout(() => {
         main.style.display = 'none';
         footer.style.display = 'none';
      }, 300);

      navigationWindow.classList.add('open');

      open = true;
   } else {
      navigationButton.classList.remove('active');
      main.style.display = 'block';
      footer.style.display = 'flex';
      body.style.overflow = 'scroll'

      main.offsetWidth; 
      footer.offsetWidth;

      main.classList.remove('hidden');
      footer.classList.remove('hidden');

      navigationWindow.classList.remove('open');

      open = false;
   }
}

const closeNavigationMenu = () =>{
   navigationButton.classList.remove('active');
   main.style.display = 'block';
   footer.style.display = 'flex';
   body.style.overflow = 'scroll';
   
   main.offsetWidth; 
   footer.offsetWidth;
  
   main.classList.remove('hidden');
   footer.classList.remove('hidden');
  
   navigationWindow.classList.remove('open');

   open = false;
}

addEventListener("resize", () => {
   if (window.screen.availWidth > 768) {
      navigationButton.classList.remove('active');
      navigationWindow.classList.remove('open');
      main.style.display = 'block';
      footer.style.display = 'flex';
      body.style.overflow = 'scroll';
      main.offsetWidth; 
      footer.offsetWidth;
      main.classList.remove('hidden');
      footer.classList.remove('hidden');
 
     open = false;
   }

   const newVisiblePart = sliderSecSlider.clientWidth;
   const newClicks = window.innerWidth >= 769 ? 3 : 6;

   const newSliderMove = Math.ceil((sliderWidth - newVisiblePart) / newClicks);
   let newLeftEnd = -(sliderWidth - newVisiblePart);
   if (newLeftEnd > 0) {
      newLeftEnd = 0;
   }

   clicks = newClicks;
   sliderMove = newSliderMove;
   leftEnd = newLeftEnd;

   currentLeft = startLeft;
   sliderSecSliderBox.style.left = `${currentLeft}px`;

   workingButtons();

 });

window.addEventListener('scroll', function(){
   const goUpButton = document.querySelector('#upButton');

   if(window.scrollY > 300){
      if(window.screen.availWidth <= 768){
         goUpButton.style.display = 'block';
      } else {
         goUpButton.style.display = 'none';
      }
   } else {
      goUpButton.style.display = 'none';
   }
});

const goUP = () =>{
   window.scrollTo(0, 0);
}

const timer = () =>{
   const days = document.getElementById('days');
   const hours = document.getElementById('hours');
   const minutes = document.getElementById('minutes');
   const seconds = document.getElementById('seconds');

   const finishTime = new Date('January 1, 2026 00:00:00').getTime();

   const workingTimer = () => {
      const currentTime = new Date().getTime();
      const timeLeft = finishTime - currentTime;

      if(timeLeft > 0){
         const daysNumber = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
         const hoursNumber = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         const minutesNumber = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
         const secondsNumber = Math.floor((timeLeft % (1000 * 60)) / 1000);

         days.textContent = daysNumber;
         hours.textContent = hoursNumber;
         minutes.textContent = minutesNumber;
         seconds.textContent = secondsNumber;
      } else {
         clearInterval(timerStep);
      }
   };

   const timerStep = setInterval(workingTimer, 1000);
   workingTimer();
};

const giftsCards = [
   {
     "name": "Bug Magnet",
     "description": "Able to find bugs in code like they were placed there on purpose.",
     "category": "For Work",
     "superpowers": {
       "live": "+500",
       "create": "+500",
       "love": "+200",
       "dream": "+400"
     }
   },
 
   {
     "name": "Console.log Guru",
     "description": "Uses console.log like a crystal ball to find any issue.",
     "category": "For Work",
     "superpowers": {
       "live": "+500",
       "create": "+500",
       "love": "+200",
       "dream": "+400"
     }
   },
 
   {
     "name": "Shortcut Cheater",
     "description": "Knows every keyboard shortcut like they were born with them.",
     "category": "For Work",
     "superpowers": {
       "live": "+500",
       "create": "+500",
       "love": "+400",
       "dream": "+200"
     }
   },
 
   {
     "name": "Merge Master",
     "description": "Merges branches in Git without conflicts, like a wizard during an exam.",
     "category": "For Work",
     "superpowers": {
       "live": "+200",
       "create": "+500",
       "love": "+200",
       "dream": "+300"
     }
   },
 
   {
     "name": "Async Tamer",
     "description": "Handles asynchronous code and promises like well-trained pets.",
     "category": "For Work",
     "superpowers": {
       "live": "+100",
       "create": "+400",
       "love": "+200",
       "dream": "+300"
     }
   },
 
   {
     "name": "CSS Tamer",
     "description": "Can make Flexbox and Grid work together like they were always best friends.",
     "category": "For Work",
     "superpowers": {
       "live": "+200",
       "create": "+500",
       "love": "+200",
       "dream": "+300"
     }
   },
 
   {
     "name": "Time Hacker",
     "description": "Writes code at the last moment but always meets the deadline.",
     "category": "For Work",
     "superpowers": {
       "live": "+500",
       "create": "+500",
       "love": "+500",
       "dream": "+200"
     }
   },
 
   {
     "name": "Layout Master",
     "description": "Creates perfect layouts on the first try, like they can read the designer's mind.",
     "category": "For Work",
     "superpowers": {
       "live": "+500",
       "create": "+300",
       "love": "+200",
       "dream": "+200"
     }
   },
 
   {
     "name": "Documentation Whisperer",
     "description": "Understands cryptic documentation as if they wrote it themselves.",
     "category": "For Work",
     "superpowers": {
       "live": "+500",
       "create": "+500",
       "love": "+200",
       "dream": "+100"
     }
   },
 
   {
     "name": "Feedback Master",
     "description": "Accepts client revisions with the Zen calm of Buddha.",
     "category": "For Work",
     "superpowers": {
       "live": "+300",
       "create": "+500",
       "love": "+300",
       "dream": "+400"
     }
   },
 
   {
     "name": "Code Minimalist",
     "description": "Writes code so concise that one line does more than a whole file.",
     "category": "For Work",
     "superpowers": {
       "live": "+500",
       "create": "+500",
       "love": "+500",
       "dream": "+200"
     }
   },
 
   {
     "name": "Pixel-Perfect Magician",
     "description": "Aligns elements to the last pixel, even when the design looks abstract.",
     "category": "For Work",
     "superpowers": {
       "live": "+500",
       "create": "+500",
       "love": "+400",
       "dream": "+400"
     }
   },
 
   {
     "name": "Posture Levitation",
     "description": "Can sit for hours, but maintains perfect posture like a ballerina.",
     "category": "For Health",
     "superpowers": {
       "live": "+400",
       "create": "+500",
       "love": "+500",
       "dream": "+400"
     }
   },
 
   {
     "name": "Step Master",
     "description": "Gets 10,000 steps a day even while sitting at the computer.",
     "category": "For Health",
     "superpowers": {
       "live": "+400",
       "create": "+300",
       "love": "+500",
       "dream": "+400"
     }
   },
 
   {
     "name": "Snack Resister",
     "description": "Ignoring desktop snacks like a strict dietician.",
     "category": "For Health",
     "superpowers": {
       "live": "+400",
       "create": "+100",
       "love": "+200",
       "dream": "+400"
     }
   },
 
   {
     "name": "Hydration Bot",
     "description": "Drinks the recommended 2 liters of water a day like a health-programmed robot.",
     "category": "For Health",
     "superpowers": {
       "live": "+500",
       "create": "+300",
       "love": "+500",
       "dream": "+500"
     }
   },
 
   {
     "name": "Sleep Overlord",
     "description": "Sleeps 6 hours but feels like they had 10.",
     "category": "For Health",
     "superpowers": {
       "live": "+400",
       "create": "+500",
       "love": "+500",
       "dream": "+500"
     }
   },
 
   {
     "name": "Break Guru",
     "description": "Takes a stretch break every hour without forgetting, no matter how focused.",
     "category": "For Health",
     "superpowers": {
       "live": "+300",
       "create": "+300",
       "love": "+300",
       "dream": "+400"
     }
   },
 
   {
     "name": "Eye Protector",
     "description": "Can work all day at the monitor without feeling like their eyes are on fire.",
     "category": "For Health",
     "superpowers": {
       "live": "+100",
       "create": "+300",
       "love": "+500",
       "dream": "+400"
     }
   },
 
   {
     "name": "Stress Dodger",
     "description": "Masters meditation right at the keyboard.",
     "category": "For Health",
     "superpowers": {
       "live": "+100",
       "create": "+400",
       "love": "+200",
       "dream": "+400"
     }
   },
 
   {
     "name": "Yoga Coder",
     "description": "Easily switches from coding to yoga and back.",
     "category": "For Health",
     "superpowers": {
       "live": "+400",
       "create": "+400",
       "love": "+400",
       "dream": "+400"
     }
   },
 
   {
     "name": "Healthy Snacker",
     "description": "Always picks fruit, even when chocolate is within arm’s reach.",
     "category": "For Health",
     "superpowers": {
       "live": "+400",
       "create": "+300",
       "love": "+200",
       "dream": "+400"
     }
   },
 
   {
     "name": "Chair Exerciser",
     "description": "Manages to work out without leaving the chair.",
     "category": "For Health",
     "superpowers": {
       "live": "+500",
       "create": "+500",
       "love": "+500",
       "dream": "+400"
     }
   },
 
   {
     "name": "Caffeine Filter",
     "description": "Drinks coffee at night and still falls asleep with no problem.",
     "category": "For Health",
     "superpowers": {
       "live": "+400",
       "create": "+300",
       "love": "+500",
       "dream": "+200"
     }
   },
 
   {
     "name": "Joy Charger",
     "description": "Finds joy in the little things—even in a build that finishes unexpectedly fast.",
     "category": "For Harmony",
     "superpowers": {
       "live": "+200",
       "create": "+200",
       "love": "+500",
       "dream": "+500"
     }
   },
 
   {
     "name": "Error Laugher",
     "description": "Laughs at code errors like they’re jokes instead of getting angry.",
     "category": "For Harmony",
     "superpowers": {
       "live": "+300",
       "create": "+200",
       "love": "+500",
       "dream": "+500"
     }
   },
 
   {
     "name": "Bug Acceptance Guru",
     "description": "Accepts bugs as part of the journey to perfection — it’s just another task.",
     "category": "For Harmony",
     "superpowers": {
       "live": "+300",
       "create": "+200",
       "love": "+500",
       "dream": "+400"
     }
   },
 
   {
     "name": "Spontaneous Coding Philosopher",
     "description": "Philosophically accepts any client suggestion after a long refactor.",
     "category": "For Harmony",
     "superpowers": {
       "live": "+300",
       "create": "+200",
       "love": "+500",
       "dream": "+400"
     }
   },
 
   {
     "name": "Deadline Sage",
     "description": "Remains zen even when the deadline is close and the project manager is stressed.",
     "category": "For Harmony",
     "superpowers": {
       "live": "+200",
       "create": "+200",
       "love": "+300",
       "dream": "+500"
     }
   },
 
   {
     "name": "Inspiration Maestro",
     "description": "Finds inspiration on an empty screen as if masterpieces are already there.",
     "category": "For Harmony",
     "superpowers": {
       "live": "+300",
       "create": "+200",
       "love": "+400",
       "dream": "+100"
     }
   },
 
   {
     "name": "Peace Keeper",
     "description": "Maintains inner calm even in moments of intense crisis.",
     "category": "For Harmony",
     "superpowers": {
       "live": "+200",
       "create": "+200",
       "love": "+500",
       "dream": "+500"
     }
   },
 
   {
     "name": "Empathy Guru",
     "description": "Feels the team’s mood and can lift everyone’s spirits.",
     "category": "For Harmony",
     "superpowers": {
       "live": "+500",
       "create": "+200",
       "love": "+500",
       "dream": "+500"
     }
   },
 
   {
     "name": "Laughter Generator",
     "description": "Can lighten any tense situation with a joke that even bugs laugh at.",
     "category": "For Harmony",
     "superpowers": {
       "live": "+300",
       "create": "+200",
       "love": "+200",
       "dream": "+500"
     }
   },
 
   {
     "name": "Pause Master",
     "description": "Knows when to just step back from the keyboard and breathe.",
     "category": "For Harmony",
     "superpowers": {
       "live": "+300",
       "create": "+200",
       "love": "+100",
       "dream": "+100"
     }
   },
 
   {
     "name": "Coder Healer",
     "description": "Can support a colleague in their darkest hour, even if it’s a 500 error.",
     "category": "For Harmony",
     "superpowers": {
       "live": "+300",
       "create": "+200",
       "love": "+500",
       "dream": "+500"
     }
   },
 
   {
     "name": "Music Code Curator",
     "description": "Creates work playlists so good, even deadlines follow the rhythm.",
     "category": "For Harmony",
     "superpowers": {
       "live": "+300",
       "create": "+200",
       "love": "+300",
       "dream": "+200"
     }
   }
 ]

 const cardsImages = { 
   'For Work': 'assets/Gifts/gift-for-work.svg',
   'For Health': 'assets/Gifts/gift-for-health.svg',
   'For Harmony': 'assets/Gifts/gift-for-harmony.svg',
 }

 const cardsColors = {
   'For Work': '#4361FF',
   'For Health': '#06A44F',
   'For Harmony': '#FF43F7',
 }

 const cardsAlts = {
   'For Work': 'Gift for work Image',
   'For Health': 'Gift for health Image',
   'For Harmony': 'Gift for harmony Image',
 }

 function getSnowflakes(pointsString) {
   const points = parseInt(pointsString.replace('+', ''), 10);

   const redCount = Math.min(Math.floor(points / 100), 5);
   
   const redSnowflakeImg = '<img src="assets/Modal/snowflakeRed.svg" alt="Red snowflake image">';
   const normalSnowflakeImg = '<img src="assets/Modal/snowflake.svg" alt="Snowflake image">';
 
   let snowflakesHTML = '';
   
   for (let i = 0; i < redCount; i++) {
     snowflakesHTML += redSnowflakeImg;
   }
 
   for (let i = redCount; i < 5; i++) {
     snowflakesHTML += normalSnowflakeImg;
   }
 
   return snowflakesHTML;
 }

 const modal = document.querySelector('.modal');

 const randomGiftCards = () => {
   const bestGiftsSecBox = document.querySelector('.bestGiftsSecBox');

   bestGiftsSecBox.innerHTML = '';

   const getRandomCard = giftsCards.sort(() => Math.random() - 0.5).slice(0, 4);


   getRandomCard.map((value) =>{
      return (bestGiftsSecBox.innerHTML += `
         <div class="bestGiftsSecBoxCard" id="${giftsCards.indexOf(value)}">
                  <div class="bestGiftsSecBoxCardImg">
                     <img src="${cardsImages[value.category]}" alt="${cardsAlts[value.category]}" >
                  </div>
                  
                  <div class="bestGiftsSecBoxCardText">
                     <h4 style="color: ${cardsColors[value.category]};">${value.category}</h4>
                     <h3>${value.name}</h3>
                  </div>
               </div>
         `)
   })
 }

const closeModal = () =>{
   modal.style.display = 'none';
   body.style.overflow = 'scroll'
}

const openModal = (cardId) =>{
   modal.style.display = 'flex'; 

   const liveStars = getSnowflakes(cardId.superpowers.live);
   const createStars = getSnowflakes(cardId.superpowers.create);
   const loveStars = getSnowflakes(cardId.superpowers.love);
   const dreamStars = getSnowflakes(cardId.superpowers.dream);

   body.style.overflow = 'hidden';
 

      modal.innerHTML = `<div class="modalContainer">
         <img src="${cardsImages[cardId.category]}" alt="${cardsAlts[cardId.category]}">
         <img src="assets/Modal/close.svg" alt="Modal window close image" class="modalCloseImg" onclick="closeModal()">
         <div class="modalInfo">
            <div class="modalInfoText">
               <h4 style="color: ${cardsColors[cardId.category]};">${cardId.category}</h4>
               <h3>${cardId.name}</h3>
               <p>${cardId.description}</p>
            </div>
            <div class="modalInfoAdds">
               <h4>Adds superpowers to:</h4>
               <div class="modalInfoAddsContainer">
                  <div class="modalInfoAddsContainerBox">
                     <p>Live</p>
                     <div class="modalInfoAddsContainerBoxStars">
                        <p>${cardId.superpowers.live}</p>
                        <div class="modalInfoAddsContainerBoxStarsImg">
                           ${liveStars}
                        </div>
                     </div>
                  </div>
                  <div class="modalInfoAddsContainerBox">
                     <p>Create</p>
                     <div class="modalInfoAddsContainerBoxStars">
                        <p>${cardId.superpowers.create}</p>
                        <div class="modalInfoAddsContainerBoxStarsImg">
                           ${createStars}
                        </div>
                     </div>
                  </div>
                  <div class="modalInfoAddsContainerBox">
                     <p>Love</p>
                     <div class="modalInfoAddsContainerBoxStars">
                        <p>${cardId.superpowers.love}</p>
                        <div class="modalInfoAddsContainerBoxStarsImg">
                           ${loveStars}
                        </div>
                     </div>
                  </div>
                  <div class="modalInfoAddsContainerBox">
                     <p>Dream</p>
                     <div class="modalInfoAddsContainerBoxStars">
                        <p>${cardId.superpowers.dream}</p>
                        <div class="modalInfoAddsContainerBoxStarsImg">
                          ${dreamStars}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>`

   const modalContainer = document.querySelector('.modalContainer');
   
   modalContainer.addEventListener('click', (event) =>{
      event.stopPropagation();
   });
};

const bestGiftsSecBox = document.querySelector('.bestGiftsSecBox');
  bestGiftsSecBox.addEventListener('click', (e) => {
    const card = e.target.closest('.bestGiftsSecBoxCard');
    if (!card) return;
    const id = parseInt(card.id);
    const cardId = giftsCards[id];
    if (cardId) {
      openModal(cardId);
    }
  });

  modal.addEventListener('click', closeModal);

workingButtons();
randomGiftCards();
timer();