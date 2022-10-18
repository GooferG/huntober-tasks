// Day 1 String Huntober

const letter = {
	'0': 'O',
  '1': 'I',
  '2': 'Z',
  '3': 'E',
  '4': 'h',
  '5': 'S',
  '6': 'G',
  '7': 'L',
  '8': 'B',
  '9': 'q',
   h: '4',
   q: '9',
   B: '8',
}



function correctStr(str){
  return str
    .split('')
    .map((c) => letter[c] || c)
    .join('');
}
const updatedStr = correctStr(`PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770.`)
console.log(updatedStr)




// https://blog.barbaralaw.me/huntober-2022-day-2 'work on this'

// Day 2 String Huntober:

let catStr = "af)|Cz>:CGAHY1_2+(OHYYTM!2vka,&yAlWJ3.r&ZVs4F5&bEa<1r1_nlsR!eA-dOUmgwd2=CE7?ynnl+KQf8lW8u4/Nh1|D7SK2uYz-Y $YD)q.VmLD-&P(lL=:HDMA1!?_R#P,V3bKLqUp_t.X:_dM<Mr9zQ~fKJOBDF&Qjen=d ZAR8ze5g-gj@aZ/I:M:!.IBXLq@vN&8L7oH, /0RFtH+.7%eXtM/mxV7*%0Hj.?FSm.Kh8=@jlUJ_S.ApQzye-xB7ZVA2AwEaxTa_snPX?>D5th&Ag/9)7%#uMN=J<h!#prB=:CI;U_.T5*#rb)9q<ht~W<BOmQlmy.<8EqIlR(Gh~~$zmW;Y$7dn-$bW1jf%PL),krpzE LQwsG;EQ;l:Z;+6#.3)KDA+s#k#YMmUhm% 2KB)GqR U@4B>+A9Vh62@:&SNKVas5%&N6Oz!s/%7(Pd1xWy#Kv>uqyX=VEyHbe-64|ex^& 2W(gD=>FT*?tMZO$(+B8uTj,DU2~QST(B|xls=9kzN|:4hXt~:R4|nir,6RN8fg~3!3!^!yWZ)bE@SI.zV5Z%V9Qf_^ 4az$?wqtWrRu+1aS9<%I=!xW.:ps f).($Qz9s;8:uxVqJN9K$42NG(0=j)wZ&U1oB?v^7WVP6QE6-?L;^aglPd5dHO(L2TT5+$NeK-P;js-UAiWCI7>Yr&8|md-X)U=%IpuY)9iymv~ _S^ ,&0|(22&(mIcux_4a196w^FN78kz2kX1k&Psc53d ctbl?Eek!kX7Ii.QR~M11<T!,w^xHVn4^Q=HH4#)=AevEek!ux_4a196w^FN7Eek!8kz2kX1k&Psc53d ctbl?kX7Ii.QR~M11<T!,w^xHVn4^Q=HH4#)=AEek!Eek!cvEek!MABf|bEek!dPLpPhh=>%UH<%/^H;8gSAkhmUCu:K?*jzEek!LYC/:E*RU=|s7jWDf8z7-zFqS<Ntoav?m8<Q(1ur3Dpd)(XjY1pE)but>eG@QfEek!$Wx8NRZgmQ5t2 kJd,?_R@%muEJBTdQ0-%mHHW20i8wqMK~Co^w?34ag9idsTeXgfqy4IEek!z7Q?Q)nG~5@~ieY_B=6! sVk~=Ts3T>j/ZAS)AKX3zOocGL icK#-x0Eek!yE+2*fz.4&%<>:RHx/B+IFRG*AK1Hn*PQZpEek!v;ZUzWcJC%lym^:+;GcC!qt@nS5SQEek!ikESbYI#-A.Sv .ksat s'worrEek!Eek!omot Eek!rof rebmeEek!merEek! Eek!ot deeEek!n uoy tahw si enEek!o tsrif siht sedisEek!eb gnirtsbus hcae ni retEek!carahc tsrifEek! eEek!Eek!hT .'V' *esaEek!crewEek!ol* nEek!Eek!o pu Eek!gnirts Eek!siEek!ht tilpEek!S"

const newCatStr = catStr.slice(catStr.indexOf('c')+1)
const noEek = newCatStr.replaceAll('Eek!', '')
const strRev = noEek.split('').reverse().join('')
console.log(strRev)

// For day 3:
const newStrRev = strRev.split('v')
console.log(newStrRev)

// let keyChar = ['A','_','K','E','Y','!']
// const day3Str ='AyouEcould!thinkKthisAisYhard_toYreadKbeforeYreplacingEthe_keyYcharacters'

let catStrKey = 'Space'
let devStr = 'e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs'
let combinedStr = devStr.replace(/[Space]/g, ' ')
const devUpdatedStr = combinedStr.split('').reverse().join('');
// correctStr(combinedStr.replace(/['A','_','K','E','Y','!']/g, ''))

// Day 4:
const reverseStr = str => str.split('').reverse().join('')
const newDay3Str = devStr.replace(/['A','_','K','E','Y','!']/g, ' ')
newDay3Str.split('').reverse().join('')
reverseStr("   The white space at the beginning of this string doesn't match the whitespace at the end. "
)
reverseStr(combinedStr)

// 100devs string ' sfQmghly#vi05I4 DjVV^P YW7uDMZ. A#ItOO!wVd3HD dbv Btll5t)vgI!! '

// Day 5:
const catPuns = "The Pawshank Redemption,Caturday Night Live,Only Meworders in the Building,I Love Mewcy, Mewsummer Meowders,The Golden Purrs, Purrlandia ,Meowpardy, Meowstery Science Theater: Purrthousand, Amewican Idol,Dog City,Doctor Mew , The Meowing Fed,Mew Peter,The Vicar of Dogley, Kittens,Meownton Abbey,Pets and the Kitty,Dogis and Bonehead,Pawlty Meowers ,The Meowpet Show,Barkos,The Catbert Purrport,The Pawffice,The Dogford Files, Battlestar Catlactica,Catlumbo,SpongeDog Squarepants,NYPD Mew ,Fluffy the Meowpire Purrer,The Inbemewners,Meowder She Wrote,Paw & Order,30 Dog, Pawvatar: The Last Meowbender,The Pawnight Show,Arrested Dogvelopment,Furiends,Mewie,Curb Your Dogthusiasm,Teenage Mewtant Ninja Turtles,Phineas and Purrb,Paw Trek, Paw Trek: The Next Mewination, Twin Mewks, *C*A*T*S*,DogTales, Game of Bones, House of the Meowgon,The Purrlight Zone,Breaking Bone,The Meowre,The Dogpranos,The Rings of Meower, The KIT Crowd,Strangepaw Things ,Catman: The Animeowted Series,Meowter Call Saul,Mewgerton ,Obark,Mewphoria,La Casa de Pawpel,Rick & Meowty,Amewican Purror Story, Mewcifer,PawndaVision,Dogxter,The Meowndalorian, Dog Lasso,Bark,Meowdern Pawmily , Meowtlander,Bone Mirror,Barks and Recreation,How to Get Away with Meowder,Boneland ,Meowther Ted,Mewtopia,Mewey,The Mewkie Meowse Doghouse,Mewster Rogers' Neighborhood"
let catPunsArr = catPuns.split(',')
const bannedWords = ['dog', 'bark','bone']


const noWhiteSpaceArr = catPunsArr.map(pun => pun.trimStart().trimEnd())
// console.log(noWhiteSpaceArr)
const filterBanWords = noWhiteSpaceArr
								.filter(pun => pun.toLowerCase().includes("dog") === false)
                .filter(pun => pun.toLowerCase().includes("bark") === false)
                .filter(pun => pun.toLowerCase().includes("bone") === false)
								.filter(pun => pun.toLowerCase().includes('S') === false)

console.log(filterBanWords)



