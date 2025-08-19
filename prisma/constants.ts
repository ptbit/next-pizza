const ingredients = [
  {
    name: 'Сирний бортик',
    price: 179,
    imgUrl: '/ingredients/cheese-border.png',
  },
  {
    name: 'Моцарелла',
    price: 79,
    imgUrl: '/ingredients/mozzarella.png',
  },
  {
    name: 'Сир чеддер та пармезан',
    price: 79,
    imgUrl: '/ingredients/cheddar.png',
  },
  {
    name: 'Гострий перець халапеньо',
    price: 59,
    imgUrl: '/ingredients/jalapeno.png',
  },
  {
    name: 'Бекон',
    price: 79,
    imgUrl: '/ingredients/bacon.png',
  },
  {
    name: 'Печериці',
    price: 59,
    imgUrl: '/ingredients/champignons.png',
  },
  {
    name: 'Шинка',
    price: 79,
    imgUrl: '/ingredients/ham.png',
  },
  {
    name: 'Гостра чорізо',
    price: 79,
    imgUrl: '/ingredients/chorizo.png',
  },
  {
    name: 'Мариновані огірочки',
    price: 59,
    imgUrl: '/ingredients/cucumbers.png',
  },
  {
    name: 'Свіжі томати',
    price: 59,
    imgUrl: '/ingredients/tomatoes.png',
  },
  {
    name: 'Червона цибуля',
    price: 59,
    imgUrl: '/ingredients/onion.png',
  },
  {
    name: 'Баварські ковбаски',
    price: 99,
    imgUrl: '/ingredients/sausages.png',
  },
  {
    name: 'Соковиті ананаси',
    price: 69,
    imgUrl: '/ingredients/pineapples.png',
  },
  {
    name: 'Італійські трави',
    price: 39,
    imgUrl: '/ingredients/herbs.png',
  },
  {
    name: 'Солодкий перець',
    price: 59,
    imgUrl: '/ingredients/pepper.png',
  },
  {
    name: 'Кубики бринзи',
    price: 79,
    imgUrl: '/ingredients/brynza.png',
  },
  {
    name: 'Митболи',
    price: 79,
    imgUrl: '/ingredients/meatballs.png',
  },
].map((obj, index) => ({ id: index + 1, ...obj }));

const products = [
  {
    name: `Буріто's з куркою`,
    imgUrl:
      'https://dominos.ua/_next/image/?url=https%3A%2F%2Fmedia-v3.dominos.ua%2FProducts%2FKhlibtsi%2FBurito%2Fburritochicken-website-detail.webp&w=600&q=75',
    categoryId: 2,
  },
  {
    name: 'Омлет с пепперони',
    imgUrl: '/dominos/burritobeef-website-detail.avif',
    categoryId: 2,
  },
  {
    name: 'Кофе Латте',
    imgUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61B0C26A3F85D97A78FEEE00AD.webp',
    categoryId: 2,
  },
  {
    name: 'Дэнвич ветчина и сыр',
    imgUrl: 'https://media.dodostatic.net/image/r:292x292/11EE796FF0059B799A17F57A9E64C725.webp',
    categoryId: 3,
  },
  {
    name: 'Куриные наггетсы',
    imgUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D618B5C7EC29350069AE9532C6E.webp',
    categoryId: 3,
  },
  {
    name: 'Картофель из печи с соусом 🌱',
    imgUrl: 'https://media.dodostatic.net/image/r:292x292/11EED646A9CD324C962C6BEA78124F19.webp',
    categoryId: 3,
  },
  {
    name: 'Додстер',
    imgUrl: 'https://media.dodostatic.net/image/r:292x292/11EE796F96D11392A2F6DD73599921B9.webp',
    categoryId: 3,
  },
  {
    name: 'Острый Додстер 🌶️🌶️',
    imgUrl: 'https://media.dodostatic.net/image/r:292x292/11EE796FD3B594068F7A752DF8161D04.webp',
    categoryId: 3,
  },
  {
    name: 'Банановый молочный коктейль',
    imgUrl: 'https://media.dodostatic.net/image/r:292x292/11EEE20B8772A72A9B60CFB20012C185.webp',
    categoryId: 4,
  },
  {
    name: 'Карамельное яблоко молочный коктейль',
    imgUrl: 'https://media.dodostatic.net/image/r:292x292/11EE79702E2A22E693D96133906FB1B8.webp',
    categoryId: 4,
  },
  {
    name: 'Молочный коктейль с печеньем Орео',
    imgUrl: 'https://media.dodostatic.net/image/r:292x292/11EE796FA1F50F8F8111A399E4C1A1E3.webp',
    categoryId: 4,
  },
  {
    name: 'Классический молочный коктейль 👶',
    imgUrl: 'https://media.dodostatic.net/image/r:292x292/11EE796F93FB126693F96CB1D3E403FB.webp',
    categoryId: 4,
  },
  {
    name: 'Ирландский Капучино',
    imgUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61999EBDA59C10E216430A6093.webp',
    categoryId: 2,
  },
  {
    name: 'Кофе Карамельный капучино',
    imgUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61AED6B6D4BFDAD4E58D76CF56.webp',
    categoryId: 2,
  },
  {
    name: 'Кофе Кокосовый латте',
    imgUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61B19FA07090EE88B0ED347F42.webp',
    categoryId: 2,
  },
  {
    name: 'Кофе Американо',
    imgUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61B044583596548A59078BBD33.webp',
    categoryId: 2,
  },
  {
    name: 'Кофе Латте',
    imgUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61B0C26A3F85D97A78FEEE00AD.webp',
    categoryId: 2,
  },
];
const categories = [
  {
    name: 'Пица',
  },
  {
    name: 'Напої',
  },
  {
    name: 'Сайди',
  },
  {
    name: 'Десерти',
  },
];

export const seedData = {
  ingredients,
  products,
  categories,
};
