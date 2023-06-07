const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const btnContent = document.querySelector(".btns");
btnContent.innerHTML = `
<button class="btn">All</button>
<button class="btn">Breakfast</button>
<button class="btn">Lunch</button>
<button class="btn">Shakes</button>
<button class="btn">Steack</button>
`;

const section = document.querySelector("section");

const btns = document.querySelectorAll(".btns");

const btn = document.querySelectorAll(".btn");

// 1 parcourir les boutons (click)
// 2 récupérer la valeur du bouton (textcontent)
// 3 filtrer le menu en fonction de la catégorie = valeur btn.
// 4 afficher le tableau filtré (l94-109) (create function)
//

function displayMenus(menu) {
  const newMenu = menu.map(function (item) {
    // console.log(item);
    return `
  <article class="product-menu">

        <img class="product-img" src=${item.img} alt="" />
        <div class="product-info">
        <header>
        <h4 class="product-title">${item.title}</h4>
        <p class="price">${item.price}</p>
        </header>
        <p class="product-text">${item.desc}</p>
        </div>
        </article>`;
  });
  section.innerHTML = newMenu.join("");
}

displayMenus(menu);

// console.log(newMenu);

// On parcourt le menu pour extraire les catégories et l'inclure dans un nouveau tableau
// function displayAllCategoriesButtons() {
let allCategories = [];
menu.forEach((item) => {
  if (!allCategories.includes(item.category)) {
    allCategories.push(item.category);
  }
});
console.log(allCategories);

// on crée les bouttons catégories dans le HTML
const allBtns =
  `<button class="filter-category-btn" type="button" data-category-name="all">All</button>` +
  allCategories
    .map(function (categoryName) {
      return `<button class="filter-category-btn" type="button" data-category-name="${categoryName}">${categoryName}</button>`;
    })
    .join("");

// ajout des bouttons dans la div
btns.innerHTML = allBtns;

// on recupère l'ensemble des bouttons des catégories
const categoryBtns = btnContent.querySelectorAll(".btn");
// on crée un évenement pour chaque boutton
categoryBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const category = e.target.textContent.toLowerCase();

    const filteredMenu = menu.filter(function (menuItem) {
      if (menuItem.category === category) {
        console.log(menuItem);
        return menuItem.category;
      }
    });
    if (category === "all") {
      displayMenus(menu);
    } else {
      displayMenus(filteredMenu);
    }
  });
});

// }

// displayAllCategoriesButtons();

// function filterMenuByCategory(category) {
//   const menuToDisplay = menu.filter(function (menu) {
//     if (menu.category === category) {
//       return menu;
//     }
//   });

//   console.log(menuToDisplay);

//   filterMenuByCategory();

//   return menuToDisplay;
// }
