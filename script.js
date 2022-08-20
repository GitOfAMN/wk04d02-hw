let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  // const randomQuote = function() {
  //   document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  // };
  // randomQuote();

  // Do all of your work inside the document.addEventListener  

  // Part 1
const titleEl = document.getElementById('main-title');
titleEl.innerHTML = 'The DOMepage';

  // Part 2
let bodyEl = document.querySelector('body');
bodyEl.style.backgroundColor = 'orange';

  // Part 3
  let favThings = document.querySelectorAll('#favorite-things li');
  favThings[favThings.length - 1].remove();

  // Part 4
let specTitle = document.querySelectorAll('.special-title');
for (let i = 0; i < specTitle.length; i++) {
  let title = specTitle[i];
  title.style.fontSize = '2rem';
}

  // Part 5
let pastRaces = document.querySelectorAll('#past-races li');
for (let i = 0; i < pastRaces.length; i++) {
  let race = pastRaces[i];
  if (race.innerText === 'Chicago') {
    console.log(race);
    race.remove();
  }
}
  
// Part 6

const newCity = () => {
  let list = document.createElement('li');
  list.innerText = 'Miami';
  let racesUl = document.querySelector('#past-races');
  racesUl.append(list);
}

newCity();
  
// Part 7
// const blogPost = document.createElement('div');
// blogPost.classList.add('blog-post');

// const heading = document.createElement('h2');
// heading.textContent = 'Miami';

// const pEl = doument.createElement('p');
// pEl.textContent = 'Where I currently live.';

// document.querySelector('.main').appendChild(blogPost)

// blogPost.appendChild(heading)
// blogPost.appendChild(pEl)
  
// Part 8
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').innerText = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };

  document.querySelector('#quote-title').addEventListener('click', (event) => {
    randomQuote();
  });

// Part 9

let blogPost = document.querySelectorAll('.blog-post').forEach((item) => {
  item.addEventListener('mouseout', (event) => {
    event.currentTarget.classList.toggle('purple')
  })
  item.addEventListener('mouseenter', (event) => {
    event.stopPropagation()
    event.currentTarget.classList.toggle('red')
  })
}) 

})