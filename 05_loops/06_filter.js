
const coding = ["js", "ruby", "java", "python", "cpp"]


const values = coding.forEach( (item) => {
    console.log(item);
    return item
} )

console.log(values);//forEach doesn't return values so this problem gets solved using 
// map,filter,reduce

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } ) //here we are doing explicit return since here we use {} means we started a new scope so we need to return the value to the caller scope

//const newNums = myNums.filter( (num) => num>4 ) //implicit return // no new scope started

const newNums = myNums.filter( (num) => (num>4) ) //implicit return 
//do care of implicit and explicit return , while using the react code this might be the problem of your code many times


console.log(newNums)
const newNums2 = []

myNums.forEach( (num) => {
    if (num > 4) {
        newNums2.push(num)
    }
} )

console.log(newNums);



const books = [
  {
      title: "गोदान",
      genre: "उपन्यास",
      publishDate: "8 जून 1936",
      editionYear: 2019
  },
  {
      title: "मधुशाला",
      genre: "कविता",
      publishDate: "1935",
      editionYear: 2020
  },
  {
      title: "रश्मिरथी",
      genre: "कविता",
      publishDate: "1949",
      editionYear: 2018
  },
  {
      title: "निर्मला",
      genre: "उपन्यास",
      publishDate: "1936",
      editionYear: 2017
  },
  {
      title: "कांच का पीछा",
      genre: "उपन्यास",
      publishDate: "1907",
      editionYear: 2016
  },
  {
      title: "आधुनिक भारत का इतिहास",
      genre: "इतिहास",
      publishDate: "1944",
      editionYear: 2015
  },
  {
      title: "गबन",
      genre: "उपन्यास",
      publishDate: "1936",
      editionYear: 2020
  },
  {
      title: "चिदंबरम",
      genre: "उपन्यास",
      publishDate: "1928",
      editionYear: 2019
  },
  {
      title: "राग दरबारी",
      genre: "उपन्यास",
      publishDate: "1949",
      editionYear: 2021
  },
  {
      title: "अग्निपथ",
      genre: "कविता",
      publishDate: "1936",
      editionYear: 2022
  }
];
//in this way , filter is mostly used for manipulating with the data which is fetched from the databases
let userBooks = books.filter( (bk) => bk.genre === "उपन्यास") //implicit return

console.log(userBooks)
userBooks = books.filter( (bk) => { 
  return bk.editionYear >= 1995 && bk.genre === "कविता"
})  //explicit return
console.log(userBooks);
