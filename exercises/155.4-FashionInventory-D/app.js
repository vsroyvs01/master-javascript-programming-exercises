let currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      { name: 'tasselled black low-top lace-up', price: 1000 },
      { name: 'tasselled green low-top lace-up', price: 1100 },
      { name: 'plain beige suede moccasin', price: 950 },
      { name: 'plain olive suede moccasin', price: 1050 }
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      { name: 'red leather laced sneakers', price: 800 },
      { name: 'black leather laced sneakers', price: 900 }
    ]
  }
];

function getLaceNameDataForShoes(inventory) {
    // your code here
    let array = [];
    inventory.forEach(object => {
      object.shoes.forEach(element => {
        let buscar = element.name.split(" ");
        buscar.forEach((item, index) => {
          if (item.includes("lace")) {
            array.push({"nameWords":buscar, "targetWordIndex":index} )
          }
        });
      });
    });
    return array;
}

console.log(getLaceNameDataForShoes(currentInventory));
