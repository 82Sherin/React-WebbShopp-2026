import vegetarianPlateImg from "../assets/vegetarianPlate.jpg";
import tzatzikiImg from "../assets/tzatziki.jpg";
import greekSaladImg from "../assets/greekSalad.jpg";
import dolmadesImg from "../assets/dolmades.jpg";
import pitaBreadImg from "../assets/pitaBread.jpg";
import hummusImg from "../assets/hummus.jpg";
import htipitiImg from "../assets/htipiti.jpg";
import falafelImg from "../assets/falafel.jpg";
import halloumiImg from "../assets/halloumi.jpg";
import saganakiImg from "../assets/saganaki.jpg";
import calamariImg from "../assets/calamari.jpg";
import prawnsImg from "../assets/prawns.jpg";
import frenchFriesImg from "../assets/frenchFries.jpg";
import souvlakiSkewerImg from "../assets/souvlakiSkewer.jpg";
import porkFilletSouvlakiImg from "../assets/porkFilletSouvlaki.png";
import chickenFilletSouvlakiImg from "../assets/chickenFilletSouvlaki.jpg";
import beefMinceSouvlakiImg from "../assets/beefMinceSouvlaki.jpg";
import spicyBeefMinceSouvlakiImg from "../assets/spicyBeefMinceSouvlaki.jpg";
import mixedSouvlakiImg from "../assets/mixedSouvlaki.jpg";
import porkGyrosImg from "../assets/porkGyros.jpg";
import gyrosWrapImg from "../assets/gyrosWrap.jpg";
import moussakaImg from "../assets/moussaka.jpg";
import baklavaImg from "../assets/baklava.jpg";

const greekMenu = [
  {
    id: 1,
    name: "Greek Salad",
    description: "Fresh salad with feta cheese, olives, cucumber, tomato, and onion.",
    price: 12,
    img: greekSaladImg,
  },
  {
    id: 2,
    name: "Dolmades",
    description: "Stuffed vine leaves with traditional Greek seasoning.",
    price: 8,
    img: dolmadesImg,
  },
  {
    id: 3,
    name: "Pita Bread",
    description: "Soft traditional Greek pita bread.",
    price: 5,
    img: pitaBreadImg,
  },
  {
    id: 4,
    name: "Tzatziki",
    description: "Greek yogurt dip with cucumber, garlic, and herbs.",
    price: 6,
    img: tzatzikiImg,
  },
  {
    id: 5,
    name: "Hummus",
    description: "Creamy chickpea dip with olive oil and tahini.",
    price: 6,
    img: hummusImg,
  },
  {
    id: 6,
    name: "Htipiti",
    description: "Spicy feta cheese spread.",
    price: 7,
    img: htipitiImg,
  },
  {
    id: 7,
    name: "Falafel",
    description: "Crispy fried chickpea balls with herbs and spices.",
    price: 8,
    img: falafelImg,
  },
  {
    id: 8,
    name: "Halloumi",
    description: "Grilled halloumi cheese.",
    price: 9,
    img: halloumiImg,
  },
  {
    id: 9,
    name: "Saganaki",
    description: "Traditional fried Greek cheese.",
    price: 9,
    img: saganakiImg,
  },
  {
    id: 10,
    name: "Calamari",
    description: "Fried calamari served with lemon.",
    price: 9,
    img: calamariImg,
  },
  {
    id: 11,
    name: "Prawns",
    description: "Scampi-style prawns with Greek flavors.",
    price: 10,
    img: prawnsImg,
  },
  {
    id: 12,
    name: "French Fries",
    description: "Crispy golden fries.",
    price: 5,
    img: frenchFriesImg,
  },
  {
    id: 13,
    name: "Souvlaki Skewer",
    description: "Traditional grilled souvlaki skewer.",
    price: 4,
    img: souvlakiSkewerImg,
  },
  {
    id: 14,
    name: "Vegetarian Plate",
    description: "Vegetarian souvlaki plate with salad, tzatziki, and choice of side.",
    price: 16,
    img: vegetarianPlateImg,
  },
  {
    id: 15,
    name: "Pork Fillet Souvlaki",
    description: "Grilled pork fillet skewers with traditional sides.",
    price: 17,
    img: porkFilletSouvlakiImg,
  },
  {
    id: 16,
    name: "Chicken Fillet Souvlaki",
    description: "Grilled chicken fillet skewers with salad and tzatziki.",
    price: 17,
    img: chickenFilletSouvlakiImg,
  },
  {
    id: 17,
    name: "Beef Mince Souvlaki",
    description: "Seasoned beef mince skewers served with Greek sides.",
    price: 18,
    img: "https://res.cloudinary.com/dw4ga3iot/image/upload/f_auto,q_auto/beefMinceSouvlaki_wdwwvy",
  },
  {
    id: 18,
    name: "Spicy Beef Mince Souvlaki",
    description: "Spicy grilled beef mince skewers with tzatziki and salad.",
    price: 18,
    img: spicyBeefMinceSouvlakiImg,
  },
  {
    id: 19,
    name: "Mixed Souvlaki",
    description: "Combination of different grilled souvlaki meats.",
    price: 20,
    img: mixedSouvlakiImg,
  },
  {
    id: 20,
    name: "Chicken Gyros",
    description: "Chicken gyros served with salad, tzatziki, and choice of side.",
    price: 16,
    img: null,
  },
  {
    id: 21,
    name: "Pork Gyros",
    description: "Traditional pork gyros with Greek sides.",
    price: 16,
    img: porkGyrosImg,
  },
  {
    id: 22,
    name: "Gyros Wrap",
    description: "Greek wrap filled with gyros meat, vegetables, and sauce.",
    price: 15,
    img: gyrosWrapImg,
  },
  {
    id: 23,
    name: "Gyros Salad",
    description: "Fresh salad topped with seasoned gyros meat.",
    price: 15,
    img: null,
  },
  {
    id: 24,
    name: "Moussaka",
    description: "Classic Greek baked casserole with eggplant, meat, and béchamel sauce.",
    price: 17,
    img: moussakaImg,
  },
  {
    id: 25,
    name: "Kids Gyros",
    description: "Kid-sized gyros meal with fries or rice.",
    price: 9,
    img: null,
  },
  {
    id: 26,
    name: "Kids Souvlaki",
    description: "Kid-sized souvlaki skewer meal with choice of side.",
    price: 9,
    img: null,
  },
  {
    id: 27,
    name: "Baklava",
    description: "Sweet layered pastry with nuts and honey syrup.",
    price: 7,
    img: "https://res.cloudinary.com/dw4ga3iot/image/upload/f_auto,q_auto/baklava_oda3cd",
  },
  {
    id: 28,
    name: "Exotic Sorbet",
    description: "Refreshing exotic fruit sorbet.",
    price: 6,
    img: null,
  },
  {
    id: 29,
    name: "Vanilla Ice Cream with Strawberries",
    description: "Vanilla ice cream served with fresh strawberries.",
    price: 6,
    img: null,
  },
];

export default greekMenu;
