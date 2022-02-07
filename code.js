// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

//
// function sayHello(input) {
//     switch (input) {
//         case "Alex":
//             return "Hello, Alex!";
//         case "Pat":
//             return "Hello, Pat!";
//         default:
//             return "Hello, " + input +"!";
//     }
// }

function sayHello(input){
    if(typeof input === 'boolean'){
        return "Hello, World!";
    } else if(input === null) {
        return "Hello, World!";
    } else if(typeof input === 'number'){
        return 'Hello, World!';
    } else if(!isNaN(input)){
        return 'Hello, World!';
    } else {
        return "Hello, " + input +"!";
    }
}


function isFive(str){
    return str === 5 || str === "5";
}



// function sayHello(input){
//     switch(typeof input){
//         case 'boolean': return 'Hello, World!';
//         default: return "Hello, " + input +"!";
//     }
// }



function isEven(num){
    return num % 2 === 0 && num != 0;
}

function isVowel(vow){
    return typeof vow === 'string' && vow.toLowerCase() === "a";
}


