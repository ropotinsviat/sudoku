export default function generateRandomUser() {
  const adjectives = [
    "Tiny",
    "Strong",
    "Swift",
    "Clever",
    "Brave",
    "Loyal",
    "Gentle",
    "Fierce",
    "Playful",
    "Wise",
    "Bold",
    "Cunning",
    "Mighty",
    "Shy",
    "Lucky",
    "Eager",
    "Happy",
    "Sly",
    "Silly",
    "Quick",
    "Quiet",
    "Fearless",
    "Zany",
    "Witty",
  ];

  const animals = [
    "Rabbit",
    "Bear",
    "Lion",
    "Tiger",
    "Eagle",
    "Wolf",
    "Fox",
    "Panda",
    "Shark",
    "Dragon",
    "Frog",
    "Owl",
    "Whale",
    "Dolphin",
    "Hawk",
    "Bat",
    "Mouse",
    "Deer",
    "Otter",
    "Raven",
    "Lizard",
    "Puma",
    "Hedgehog",
    "Squirrel",
  ];

  const imageUrls = [
    "https://cdn4.iconfinder.com/data/icons/cat-circle/248/Normal_cat_animal_avatar_expression_circle-1024.png",
    "https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Cat-1024.png",
    "https://w7.pngwing.com/pngs/59/659/png-transparent-computer-icons-scalable-graphics-avatar-emoticon-animal-fox-jungle-safari-zoo-icon-animals-orange-dog-like-mammal.png",
    "https://img.freepik.com/premium-vector/cute-mouse-with-school-bag-vector-cartoon-illustration-circle-frame-primary-school-concept_273625-678.jpg?w=740",
    "https://img.freepik.com/free-vector/cute-panda-background_1425-48.jpg?ga=GA1.1.706596190.1730909412&semt=ais_hybrid",
    "https://img.freepik.com/free-vector/cute-racoon-background_1425-55.jpg?ga=GA1.1.706596190.1730909412&semt=ais_hybrid",
    "https://img.freepik.com/premium-vector/ferret-white-tshirt-with-helmet-his-head-vector-illustration-kawaii_969863-287981.jpg?ga=GA1.1.706596190.1730909412&semt=ais_hybrid",
    "https://img.freepik.com/premium-vector/frog-vector-illustration-kawaii_969863-173778.jpg?ga=GA1.1.706596190.1730909412&semt=ais_hybrid",
    "https://img.freepik.com/free-vector/december-cheetah-day-icon-white-background_1308-115447.jpg?ga=GA1.1.706596190.1730909412&semt=ais_hybrid",
    "https://img.freepik.com/premium-vector/cartoon-mouse-kawaii-square-animal-face-rat-portrait-ui-gui-graphic-design-element_797523-1655.jpg?ga=GA1.1.706596190.1730909412&semt=ais_hybrid",
    "https://img.freepik.com/premium-vector/icon-raccoon-related-animal-symbol-color-mate-style-simple-design-editable_1239425-11210.jpg?ga=GA1.1.706596190.1730909412&semt=ais_hybrid",
    "https://img.freepik.com/premium-vector/head-cute-raccoon-frame-circular-with-crown-leafs_24911-48033.jpg?ga=GA1.1.706596190.1730909412&semt=ais_hybrid",
    "https://img.freepik.com/premium-vector/logo-saying-wildceymakur-vector-illustration_969863-81552.jpg?ga=GA1.1.706596190.1730909412&semt=ais_hybrid",
  ];

  const randomAdjective =
    adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomAnimal = animals[Math.floor(Math.random() * animals.length)];

  const name = randomAdjective + " " + randomAnimal;

  const picture = imageUrls[Math.floor(Math.random() * imageUrls.length)];

  return { name, picture };
}
