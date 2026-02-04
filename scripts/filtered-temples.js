// Declaring Constants
const hamButton = document.querySelector("#menu");
const nav = document.querySelector(".nav");
const templeGrid = document.getElementById("temple-grid");
const homeButton = document.getElementById("home");
const oldButton = document.getElementById("old");
const newButton = document.getElementById("new");
const largeButton = document.getElementById("large");
const smallButton = document.getElementById("small");
const heading = document.getElementById("heading");
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Bountiful Utah",
    location: "Bountiful, Utah, United States",
    dedicated: "1995, January, 8",
    area: 104000,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bountiful-utah/400x250/bountiful-temple-lds-1059079-wallpaper.jpg"
  },
  {
    templeName: "Boise Idaho",
    location: "Boise, Idaho, United States",
    dedicated: "1984, May, 25",
    area: 35868,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/boise-idaho/2018/400x250/1-Boise-Idaho-Temple-1968984.jpg"
  },
  {
    templeName: "Philadelphia Pennsylvania",
    location: "Philadelphia, Pennsylvania, United States",
    dedicated: "2016, September, 18",
    area: 61466,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/philadelphia-pennsylvania/400x250/philadelphia-pennsylvania-temple-exterior-1775822-wallpaper.jpg"
  },
  {
    templeName: "Fort Lauderdale Florida",
    location: "Davie, Florida, United States",
    dedicated: "2014, May, 4",
    area: 30500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/fort-lauderdale-florida/400x250/fort-lauderdale-florida-temple-1220610-wallpaper.jpg"
  },
  {
    templeName: "Idaho Falls Idaho",
    location: "Idaho Falls, Idaho, United States",
    dedicated: "1945, September, 23",
    area: 85624,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/idaho-falls-idaho/2019/400x250/1-Idaho-Falls-Temple-2097425.jpg"
  },
  {
    templeName: "Raleigh North Carolina",
    location: "Apex, North Carolina, United States",
    dedicated: "1999, December, 18",
    area: 12864,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/raleigh-north-carolina/400x250/3-83ddf01d389928892e38cac8f2865b16a8649e17.jpeg"
  },
  {
    templeName: "Belém Brazil",
    location: "Parque Verde, Brazil",
    dedicated: "2022, November, 20",
    area: 28675,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/belem-brazil/400x250/belem_brazil_temple_exterior2.jpg"
  },
  {
    templeName: "Bern Switzerland",
    location: "Zollikofen, Switzerland",
    dedicated: "1992, October, 23",
    area: 35546,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bern-switzerland/400x250/bern-switzerland-temple-lds-784288-wallpaper.jpg"
  }
];

// Create Cards Funcction
function createCards(temples) {
  templeGrid.textContent = "";
  temples.forEach(temple => {
    let card = document.createElement("section");
    let name = document.createElement("h2");
    let location = document.createElement("p");
    let dedicated = document.createElement("p");
    let size = document.createElement("p");
    let templeImage = document.createElement("img");
    templeImage.setAttribute("width", 450);
    templeImage.setAttribute("height", 200);
    templeImage.setAttribute("loading", "lazy");

    name.textContent = temple.templeName;
    location.innerHTML = `<span>Location:</span> ${temple.location}`;
    dedicated.innerHTML = `<span>Dedicated:</span> ${temple.dedicated}`;
    size.innerHTML = `<span>Size:</span> ${temple.area} ft²`;
    templeImage.setAttribute("src", temple.imageUrl);
    templeImage.setAttribute("alt", `${temple.templeName} temple`);
  
    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(size);
    card.appendChild(templeImage);
    templeGrid.appendChild(card);
  })
};

// Event Listeners
hamButton.addEventListener("click", () => {
  nav.classList.toggle("open");
  hamButton.classList.toggle("open");
});

homeButton.addEventListener("click", () => {
  createCards(temples);
  heading.textContent = "Home";
});

oldButton.addEventListener("click", () => {
  createCards(temples.filter(temple => temple.dedicated.split(', ')[0] < 1900));
  heading.textContent = "Old";

});

newButton.addEventListener("click", () => {
  createCards(temples.filter(temple => temple.dedicated.split(', ')[0] > 2000));
  heading.textContent = "New";
});

largeButton.addEventListener("click", () => {
  createCards(temples.filter(temple => temple.area > 90000));
  heading.textContent = "Large";
});

smallButton.addEventListener("click", () => {
  createCards(temples.filter(temple => temple.area < 10000));
  heading.textContent = "Small";
});

// Code
createCards(temples);