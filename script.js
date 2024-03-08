const cardArray =[
    {
        name:'fries',
        image:'images/fries.png'
    },
    {
        name:'cheeseburger',
        image:'images/cheeseburger.png'
    },
    {
        name:'hotdog',
        image:'images/hotdog.png'
    },
    {
        name:'ice-cream',
        image:'images/ice-cream.png'
    },
    {
        name:'milkshake',
        image:'images/milkshake.png'
    },
    {
        name:'pizza',
        image:'images/pizza.png'
    },
    {
        name:'fries',
        image:'images/fries.png'
    },
    {
        name:'cheeseburger',
        image:'images/cheeseburger.png'
    },
    {
        name:'hotdog',
        image:'images/hotdog.png'
    },
    {
        name:'ice-cream',
        image:'images/ice-cream.png'
    },
    {
        name:'milkshake',
        image:'images/milkshake.png'
    },
    {
        name:'pizza',
        image:'images/pizza.png'
    }
];
const resultDisplay = document.getElementById('result');
let cardsChosen = [];
const cardsWon = [];
let cardChoosenIds = [];
const randomCardArray = cardArray.sort(() =>0.5-Math.random());
const cardDisplay = document.querySelector('#grid');

function createBoard()
{

for(let i=0;i<12;i++)
{
    const card = document.createElement('img');
    card.setAttribute('src','images/blank.png');
    card.setAttribute('data-id',i);
    card.addEventListener('click' , flipCard);
    cardDisplay.appendChild(card);
}
}
createBoard();
function checkMatch()
{
    const cards = document.querySelectorAll('img');
    if(cardChoosenIds[0] == cardChoosenIds[1]){
        cards[cardChoosenIds[0]].setAttribute('src','images/blank.png');
        cards[cardChoosenIds[1]].setAttribute('src','images/blank.png');
        alert('you have clicked the same image !');
    }
    if(cardsChosen[0] == cardsChosen[1])
    {
        alert('you have found match!');
        cards[cardChoosenIds[0]].setAttribute('src','images/white.png');
        cards[cardChoosenIds[1]].setAttribute('src','images/white.png');
        cards[cardChoosenIds[0]].removeEventListener('click',flipCard);
        cards[cardChoosenIds[1]].removeEventListener('click',flipCard);
        cardsWon.push(cardsChosen);
    }else{
        cards[cardChoosenIds[0]].setAttribute('src','images/blank.png');
        cards[cardChoosenIds[1]].setAttribute('src','images/blank.png');
        alert('Sorry try again !');
    }
    resultDisplay.textContent = cardsWon.length;
    cardsChosen = [];
    cardChoosenIds = [];
    if(cardsWon.length == (cardArray.length)/2)
    {
      resultDisplay.textContent = 'Congruation  you found them all !';
    }
}
function flipCard()
{
    const cardId = this.getAttribute('data-id');
    const cardData = cardArray[cardId].name;
    cardsChosen.push(cardArray[cardId].name);
    cardChoosenIds.push(cardId);
    this.setAttribute('src',cardArray[cardId].image);
    if(cardsChosen.length === 2)
    {
        setTimeout(checkMatch , 500);
    }
}