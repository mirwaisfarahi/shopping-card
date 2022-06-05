const shop = document.querySelector('#shop');

const shopItems = [
  {
    id: 'item1',
    name: 'Casual Shirt',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    price: 45,
    img: 'images/img-1.jpg',
  },

  {
    id: 'item2',
    name: 'Office Shirt',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    price: 100,
    img: 'images/img-2.jpg',
  },

  {
    id: 'item3',
    name: 'T Shirt',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    price: 25,
    img: 'images/img-3.jpg',
  },

  {
    id: 'item4',
    name: 'Mens Suit',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    price: 300,
    img: 'images/img-4.jpg',
  },
];

const basket = [];

const calculation = () => {
  const totalCards = document.getElementById('cardAmount');
  totalCards.innerHTML = basket.map((x) => x.item).reduce((sum, currentVal) => sum + currentVal, 0);
};

const update = (id) => {
  const search = basket.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};
/* eslint-disable */
const increment = (id) => {
  const selectedItem = id;
  const search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }
  update(selectedItem.id);
};

const decrement = (id) => {
  const selectedItem = id;
  const search = basket.find((x) => x.id === selectedItem.id);

  if (search.item === 0) return;

  search.item -= 1;

  update(selectedItem.id);
};

/* eslint-enable */

const generateShop = () => {
  shop.innerHTML = shopItems.map((item) => {
    const {
      id, name, desc, price, img,
    } = item;

    return `<div class="item">
        <img width="220" src="${img}" alt="Casual Shirt">
        <div class="details">
            <h3>${name}</h3>
            <p>${desc}</p>
            <div class="price-quantity">
                <h2>$ ${price}</h2>
                <div class="button">
                    <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                    <div id="${id}" class="quantity">0</div>
                    <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                </div>
            </div>
        </div>
    </div>`;
  }).join('');
};

generateShop();