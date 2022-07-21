function buttonClicked() {
  const messageArr = [
    "I am swift as a gazelle. An old one. With arthritis. Run over by a Land Rover. 8 days ago.",
    "I asked God for a bike, but I know God doesn’t work that way. So I stole a bike and asked for forgiveness.",
    "I don’t need a hair stylist, my pillow gives me a new hairstyle every morning.",
    "I had loads to do today. Ah well, so now I have loads to do tomorrow.",
    "Children in the backseat cause accidents, accidents in the backseat cause children!",
    "I wouldn’t exactly say I’m lazy, but it’s a good thing that breathing is a reflex.",
    "Do not argue with an idiot. He will drag you down to his level and beat you with experience.",
    "I’m never late. The others are just too early!",
    "A cookie a day keeps the sadness away. An entire jar of cookies a day brings it back.",
    "A good mood is like a balloon: one prick is all it takes to ruin it.",
    "Every rule has an exception. This rule is no exception.",
    "Before my first cup of coffee I hate everybody. That doesn’t change after I’ve had that coffee, but it feels much better.",
    "He who laughs last is a bit of a slow thinker.",
    "“Stressed” is just “desserts” spelled backwards.",
    "The first five days after the weekend are the toughest.",
  ];

  function getRandomNum(max) {
    return Math.floor(Math.random() * max);
  }

  const arrLength = messageArr.length;

  document.getElementById("para").innerText =
    messageArr[getRandomNum(arrLength)];
}
