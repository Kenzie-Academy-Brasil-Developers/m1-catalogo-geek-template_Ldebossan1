const productsArray = [
  // Produto 1
  {
    image: "./assets/img/paintings/quadro-c3po.jpg",
    name: "Robot",
    price: "R$250,00",
    type: "Paintings",
  },
  // Produto 2
  {
    image: "./assets/img/actions/dragonball-action-figure.jpg",
    name: "Goku Super Saiyajin",
    price: "R$500,00",
    type: "Action Figures",
  },
  // Produto 3 (adicione os produtos restantes abaixo)
  {
    image: "./assets/img/paintings/quadro-controle.jpg",
    name: "Controle Playstation",
    price: "R$99,00",
    type: "Paintings"
  },
  //Produto 4
  {
    image: "./assets/img/paintings/quadro-mario.jpg",
    name: "Mario",
    price: "R$275,00",
    type: "Paintings"
  },
  //Produto 5
  {
    image: "./assets/img/paintings/quadro-pacman.jpg",
    name: "PacMan",
    price: "R$160,00",
    type: "Paintings"
  },
  //Produto 6
  {
    image: "./assets/img/paintings/quadro-relogio.jpg",
    name: "Smart Watch",
    price: "R$120,00",
    type: "Paintings"
  },
  //Produto 7
  {
    image: "./assets/img/actions/godzilla-action-figure.jpg",
    name: "Godzilla",
    price: "R$700,00",
    type: "Action Figures"
  },
  //Produto 8
  {
    image: "./assets/img/actions/groot-action-figure.jpg",
    name: "Groot",
    price: "R$950,00",
    type: "Action Figures"
  },
  //Produto 9
  {
    image: "./assets/img/actions/ironman-action-figure.jpg",
    name: "Homem de Ferro",
    price: "R$1030,00",
    type: "Action Figures"
  },
  //Produto 10
  {
    image: "./assets/img/actions/starwars-action-figure.jpg",
    name: "Sr Yoda",
    price: "R$870,00",
    type: "Action Figures"
  },
  //Produto 11
  {
    image: "./assets/img/actions/wolverine-action-figure.jpg",
    name: "Wolverine",
    price: "R$510,00",
    type: "Action Figures"
  }
];

const paintingsArray = [];
const actionFiguresArray = [];

function separateByType(produtos) {

  for (let i = 0; i < produtos.length; i++) {
    const product = produtos[i];

    if (product.type === 'Paintings') {
      paintingsArray.push(product);
    } else if (product.type === 'Action Figures') {
      actionFiguresArray.push(product);
    }
  }

  return { paintings: paintingsArray, actionFigures: actionFiguresArray };
}

const productsSortedByType = separateByType(productsArray);


function paintingsItems(paintingsArray) {
  for (let i = 0; i < paintingsArray.length; i++) {
    const li = document.createElement('li')
    const ul = document.getElementById('paintingsList')
    ul.appendChild(li)


    const img = document.createElement('img')
    img.src = paintingsArray[i].image
    li.appendChild(img)


    const h3 = document.createElement('h3')
    h3.innerText = `${paintingsArray[i].name}`
    li.appendChild(h3)

    const p = document.createElement('p')
    p.innerText = `${paintingsArray[i].price}`
    li.appendChild(p)
  }
}

paintingsItems(paintingsArray)


function actionFiguresItems(actionFiguresArray) {
  for (let i = 0; i < actionFiguresArray.length; i++) {
    const li = document.createElement('li')
    const ul = document.getElementById('actionFiguresList')
    ul.appendChild(li)

    const img = document.createElement('img')
    img.src = actionFiguresArray[i].image
    li.appendChild(img)

    const h3 = document.createElement('h3')
    h3.innerText = `${actionFiguresArray[i].name}`
    li.appendChild(h3)

    const p = document.createElement('p')
    p.innerText = `${actionFiguresArray[i].price}`
    li.appendChild(p)
  }
}
actionFiguresItems(actionFiguresArray)





