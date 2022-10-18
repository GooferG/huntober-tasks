// There are some very strict rules that the pun submissions had to follow. I need to know which of these cat puns made the cut. I promise tomorrow we'll get back to decoding our secret message, and coincidentally, I'm pretty sure the number of these puns that met the criteria will match a key sequence value we'll need tomorrow. Isn't that lucky?

// Here are the rules these submissions had to follow:

//? No empty spaces at the start or end of the submission (my friend can't stand when people don't follow directions) **DONE**
//? Cannot contain 'dog', 'bark', or 'bone' in any combination of upper or lower case (canine trolling can't be stopped) **DONE**
//? Total length of pun cannot be a multiple of 5 (this includes spaces and punctuation) **DONE**
//? Must not contain a capital 'S' (definitely too strict. What does S even have to do with cat puns?) **DONE**

//?! The sum of the charCodes of the 1st and last characters must be odd (my friend's a bit of a character, but she's great once you get to know her)

//? Character directly after the middle of the string may not be 'e' (For example the character to check in even-length string center is t, for odd an example would be weird -> 'r') **DONE**

//?! Must have an even number of lowercase letters (do not count punctuation or spaces as letters)

//?! Must have at least 2 capital letters (honestly, I'm a little worried these requirements are too strict)

let devString =
  'sfQmg4ly#viO 1h DjVV^P  WLuDM2.  #1t00 wVd HD dbv 8tll t)vg1   ';

let catPuns =
  "The Pawshank Redemption,Caturday Night Live,Only Meworders in the Building,I Love Mewcy, Mewsummer Meowders,The Golden Purrs, Purrlandia ,Meowpardy, Meowstery Science Theater: Purrthousand, Amewican Idol,Dog City,Doctor Mew , The Meowing Fed,Mew Peter,The Vicar of Dogley, Kittens,Meownton Abbey,Pets and the Kitty,Dogis and Bonehead,Pawlty Meowers ,The Meowpet Show,Barkos,The Catbert Purrport,The Pawffice,The Dogford Files, Battlestar Catlactica,Catlumbo,SpongeDog Squarepants,NYPD Mew ,Fluffy the Meowpire Purrer,The Inbemewners,Meowder She Wrote,Paw & Order,30 Dog, Pawvatar: The Last Meowbender,The Pawnight Show,Arrested Dogvelopment,Furiends,Mewie,Curb Your Dogthusiasm,Teenage Mewtant Ninja Turtles,Phineas and Purrb,Paw Trek, Paw Trek: The Next Mewination, Twin Mewks, *C*A*T*S*,DogTales, Game of Bones, House of the Meowgon,The Purrlight Zone,Breaking Bone,The Meowre,The Dogpranos,The Rings of Meower, The KIT Crowd,Strangepaw Things ,Catman: The Animeowted Series,Meowter Call Saul,Mewgerton ,Obark,Mewphoria,La Casa de Pawpel,Rick & Meowty,Amewican Purror Story, Mewcifer,PawndaVision,Dogxter,The Meowndalorian, Dog Lasso,Bark,Meowdern Pawmily , Meowtlander,Bone Mirror,Barks and Recreation,How to Get Away with Meowder,Boneland ,Meowther Ted,Mewtopia,Mewey,The Mewkie Meowse Doghouse,Mewster Rogers' Neighborhood";

let catPunsArr = catPuns.split(',');
const bannedWords = ['dog', 'bark', 'bone'];

// const noWhiteSpaceArr = catPunsArr.map((pun) => pun.trimStart().trimEnd());
// console.log(noWhiteSpaceArr)
const filteredBanWordsArr = catPunsArr
  .filter((pun) => pun.toLowerCase().includes('dog') === false)
  .filter((pun) => pun.toLowerCase().includes('bark') === false)
  .filter((pun) => pun.toLowerCase().includes('bone') === false)
  .filter((pun) => pun.length % 5 === 0)
  .filter((pun) => pun.toLowerCase()[0].includes(' ') === false)
  .filter((pun) => pun.toLowerCase()[pun.length - 1].includes(' ') === false)
  .filter((pun) => (pun.length % 2 === 0 ? pun[pun.length / 2] != 't' : 'e'));

catPunsArr = filteredBanWordsArr.filter((pun) => pun.includes('S') === false);
catPunsArr.filter((pun) => {
  let firstChar = pun[0].charCodeAt(pun[0].length - 1);
  let lastChar = pun[pun.length - 1].charCodeAt(pun[pun.length - 1].length - 1);
  console.log(pun[0].charCodeAt(pun[0].length - 1));
  console.log(pun[pun.length - 1].charCodeAt(pun[pun.length - 1].length - 1));
  console.log((firstChar + lastChar) % 2 === 0);
  (firstChar + lastChar) % 2 == 0;
});

console.log(catPunsArr);
