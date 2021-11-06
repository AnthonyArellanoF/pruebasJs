function reverseFunction0(str) {
    return str.split('').reverse().join('');
}

function reverseFunction1(str) {
    let result = '';
    for (let iterator of str) {
        result = iterator +  result;
    }
    return result;
}

//console.log(reverseFunction0('anthony'));

function factorial0(num) {
    if (num === 0 || num === 1)
        return 1;
    else
        return num = num * factorial(num-1);
}

function factorial1(num) {
    let tot = 1;
    for(let i=2; i <= num; i++)
    {
        tot *= i;
    }

    return tot;
}

function factorial3(num) {
    let tot = 1;
    for(let i=0; i < num; i++)
    {
        tot *= num - i;
    }

    return tot;
}

//console.log(factorial3(5));

const numbers = [1, 2, 3, 2, 2, 4, 5, 5, 6];
function returnDuplicates0() {
    let obj = {};
    let arr = [];

    numbers.forEach(ele => {
        if (!obj[ele])
            obj[ele] = 1;
        else
        {
            if (arr.filter(x=> x == ele).length == 0)
                arr.push(ele);
        }
    }); 
    
    return arr;    
}

function returnDuplicates1() {
    let arr = [];

    numbers.forEach(ele => {
        if (numbers.filter(x=> x == ele).length > 1)
            if (arr.filter(x=> x == ele).length == 0)
                arr.push(ele);
    }); 

    return arr;    
}

//console.log(duplicates);
//console.log(returnDuplicates1());

function changeMoney(change) {

    if (change < 1)
        return 0;
    let coins = [25,10,5,1];
    let numberCoins = 0;
    for (const coin of coins) {
        numberCoins += Math.floor(change / coin);
        change = (change % coin);
        if (change === 0) break;
    }

    return numberCoins;
}

//console.log(changeMoney(32));

const p = {
   name : "anthony",
   hello : () => console.log(`hello ${p.name}`)
};


p.name = 'sddsds';
//p.hello();
Object.freeze(p);

const citiesList = [
    "santiago",
    "santiago",
    "chillan",
    "osorno",
    "puerto montt",
    "santiago",
    "chillan",
    "osorno",
    "santiago",
    "chillan",
    "osorno",
    "santiago",
    "la serena",
    "la serena",
    "la serena",
    "iquiue",
    "la serena",
    "la serena",
]

function longMostOcurr(numcities) {

    let obj = {}

    citiesList.forEach(el => {
        if (!obj[el])
            obj[el] = 1;
        else
            obj[el]++;
    });

    console.log(Object.keys(obj)
        .map(x => ({ city : x, times : obj[x]}) )
        .sort((a,b) => b.times - a.times)
        .slice(0,numcities)
        .map(c => c.city));
}

//longMostOcurr(5)
//devuelve aleatorio
//console.log(citiesList[Math.floor(Math.random()*citiesList.length)]);

const dir1 = ["NORTH","SOUTH","SOUTH","EAST","WEST","NORTH","WEST"];
const dir2 = ["NORTH","SOUTH","WEST","EAST","NORTH","EAST"];

//console.log(dir1.indexOf('NORT'));

function dirReduce(arr) {
    const dirCounter = arr.reduce((accum, direction) => {
       accum[direction]++;
       return accum;
    },{NORTH: 0, SOUTH: 0, WEST: 0, EAST: 0});

    console.log(objDirToArray(dirCounter));
}

function objDirToArray(obj) {
    let x = obj['EAST'] - obj['WEST'];
    let y = obj['NORTH'] - obj['SOUTH'];

    let xArray = Array(Math.abs(x)).fill(x > 0 ? 'EAST' : 'WEST');
    let yArray = Array(Math.abs(y)).fill(y > 0 ? 'NORTH' : 'SOUTH');
    return [...xArray, ...yArray];
}

//dirReduce(dir2);

function pascalize(words) {
    let wordsReplace = words.replace(/-/g," ");
    let arr = wordsReplace.split(" ");
    let pasca = "";

    arr.forEach(word => {
        pasca += word.charAt(0).toUpperCase() + word.slice(1, word.length).toLowerCase(); 
    })

    console.log(pasca);
}

function pascalize2(words) {
    let wordsReplace = words.match(/[a-zA-Z0-9]+/g).map(l => l[0].toUpperCase() + l.slice(1).toLowerCase()).join("");
    console.log(wordsReplace);
}

function convertFirstLetterToUpper(words) {
    let wordsReplace = words.match(/[a-zA-Z0-9]+/g).map(l => l[0].toUpperCase()).join("");
    console.log(wordsReplace);
}

//str.charAt(indice)
convertFirstLetterToUpper('anthony pabLo areLLano fredes');

function anagrama(word1, word2) {
    let arrWord1 = convertWord(word1).split('').sort().join('');
    let arrWord2 = convertWord(word2).split('').sort().join('');
    console.log(arrWord1 == arrWord2);
}

function convertWord(word) {
    return word.replace(/ /g,"").toLowerCase();
}

function orderWord(word) {
    return word.split('').sort().join('');
}

//anagrama("amora amora","mora mora")

function anagrama2(word1, word2) {
    let objWord1 = word1.split('').reduce((accum, word) =>{
        if (!accum[word])
            accum[word] = 1;
        else
            accum[word]++;
         
        return accum;
    }, {}) ;

    console.log(objWord1);
}

function createMap(word1) {
    let objWord1 = word1.split('').reduce((accum, word) =>{
        if (!accum[word])
            accum[word] = 1;
        else
            accum[word]++;
         
        return accum;
    }, {} ) ;

    return objWord1;
}

//anagrama2("amora amora","mora mora")
//primera actualizacion (1111)