const items = [
  {
    title: "Игрушка мячик",
    description: "Ваш питомец будет счастлив!",
    tags: ["cat", "dog"],
    price: 500,
    img: "./img/1.jpeg",
  },
  {
    title: "Игрушка лабиринт",
    description: "Поможет в развитии интеллекта!",
    tags: ["cat", "dog"],
    price: 900,
    img: "./img/2.jpeg",
  },
  {
    title: "Игрушка для котят",
    description: "Отвлечет вашего питомца!",
    tags: ["cat"],
    price: 300,
    img: "./img/3.jpeg",
  },
  {
    title: "Миска «Котик»",
    description: "Подойдет и для собак!",
    tags: ["cat", "dog"],
    price: 660,
    img: "./img/4.jpeg",
  },
  {
    title: "Лоток розовый",
    description: "Теперь вы можете забыть о проблемах с туалетом",
    tags: ["cat"],
    price: 400,
    img: "./img/5.jpeg",
  },
  {
    title: "Сухой корм для кошек",
    description: "Специальная формула для милых усатиков!",
    tags: ["cat"],
    price: 200,
    img: "./img/6.jpeg",
  },
  {
    title: "Сухой корм для собак",
    description: "Содержит полный комплекс витаминов",
    tags: ["dog"],
    price: 300,
    img: "./img/7.jpeg",
  },
  {
    title: "Игрушка для собак",
    description: "Теперь вы можете не переживать за личные вещи",
    tags: ["dog"],
    price: 500,
    img: "./img/8.jpeg",
  },
  {
    title: "Лежанка",
    description: "Идеальное место для отдыха!",
    tags: ["cat", "dog"],
    price: 1500,
    img: "./img/9.jpeg",
  },
  {
    title: "Поилка для собак",
    description: "Возьмите с собой в путешествие",
    tags: ["dog"],
    price: 800,
    img: "./img/10.jpeg",
  },
  {
    title: "Переноска",
    description: "Путешествуйте с комфортом!",
    tags: ["cat", "dog"],
    price: 3500,
    img: "./img/11.jpeg",
  },
  {
    title: "Поводок для собак",
    description: "Для чудесных прогулок вместе",
    tags: ["dog"],
    price: 800,
    img: "./img/12.jpeg",
  },
];

let filter = [...items];

const div = document.querySelector("#shop-items");
const template = document.querySelector("#item-template");

function createNewCard(i) {
  const {title, description, tags, price, img} = i;
  const newCard = template.content.cloneNode(true);
  newCard.querySelector("h1").textContent = title;
  newCard.querySelector("p").textContent = description;
  newCard.querySelector("img").src= img;
  newCard.querySelector("span").textContent = price;
  
  tags.forEach ((tag) => {
    const t = document.createElement("span")
    t.classList.add('tag')
    t.textContent = tag
    newCard.querySelector(".tags").append(t)
  });

  div.append(newCard);

  //return item;
}

for (let item of items) {
  createNewCard(item) 
  
}

///***** 
const button = document.querySelector('#search-btn');
const titleSearch = document.querySelector('#search-input');

function search() {
  const text = titleSearch.value.trim().toLowerCase();
  filter = items.filter((item) => 
    item.title.toLowerCase().includes(text)
  )
}

const nothingFound = document.querySelector("#nothing-found");

function doNewCards (arr) {
  nothingFound.textContent = "";
  div.innerHTML = "";
  arr.forEach((i) => {
    div.append(createNewCard(i));
  });
  if (!arr.length) {
    nothingFound.textContent = "Ничего не найдено";
  }
}


button.addEventListener('click', doNewCards);
