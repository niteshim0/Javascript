// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
//if there will be no break in cases , then all case will be executed after that case which gets true(default one as well)
const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}