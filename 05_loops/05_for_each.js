//forEach loop
//It is like property of an array it comes under the prototype object
//it will be used heavily especially in those scenario where we need to deal with array of objects
//It allows you to iterate over each element of an array and execute a provided function once for each array element.
// array.forEach(element => {
  
// });

const coding = ["js", "ruby", "java", "python", "cpp"];

coding.forEach( function (val){
    console.log(val);
} );

coding.forEach( (item) => {
    console.log(item);
} );

function printMe(item){
    console.log(item);
};

coding.forEach(printMe);

coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} );

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
];

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} );