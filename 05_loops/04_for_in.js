//for in 
// for (const key in object) {
//     const element = object[key];
//     console.log(key + "--" + element)
// }


const myObject = {
  js: 'javascript',
  cpp: 'C++',
  rb: "ruby",
  swift: "swift by apple"
};

for (const key in myObject) {
  console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
  console.log(programming[key] + " " + key);
}
//map is not iteratable so for in loop doesn't work on them as well as it doesn't gives error so beware of using them on map
// const map = new Map();
// map.set('IN', "India");
// map.set('USA', "United States of America");
// map.set('Fr', "France");
// map.set('IN', "India");

// for (const key in map) {
//     console.log(key);
// }

