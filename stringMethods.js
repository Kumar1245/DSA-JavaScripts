let s="PsTutorials";
let i=0;
let j=0;
let arr = s.split(",");
console.log(arr," Split by , arrrray")
while (j < arr.length) {
    if (arr[j] === "P") {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
    }
    j++;
}

// slice methods 
let sliced = arr.slice(0, 5); // Extracts elements from index 0 to 4 (5 is not included)
console.log(sliced); // Output: [1, 2, 3, 4, 5]
// substring methods
let str = "Hello, World!";
let substr = str.substring(0, 5); // Extracts characters from index 0 to 4 (5 is not included)
console.log(substr); // Output: Hello
// substr methods
let str2 = "Hello, World!"; 
let subStr = str2.substr(0, 5); // Extracts 5 characters starting from index 0
console.log(subStr); // Output: Hello

// split methods
let str3 = "Hello, World!";
let splitStr = str3.split(","); // Splits the string into an array using "," as the separator
console.log(splitStr); // Output: ["Hello", " World!"]
// join methods 
let arr2 = ["Hello", "World"];
let joinedStr = arr2.join(", "); // Joins the array elements into a string using ", " as the separator
console.log(joinedStr); // Output: Hello, World
// trim methods
let str4 = "   Hello, World!   ";
let trimmedStr = str4.trim(); // Removes whitespace from both ends of the string
console.log(trimmedStr); // Output: "Hello, World!" 

// toUpperCase methods
let str5 = "hello, world!";
let upperStr = str5.toUpperCase(); // Converts the string to uppercase  
console.log(upperStr); // Output: HELLO, WORLD!
// toLowerCase methods
let str6 = "HELLO, WORLD!";
let lowerStr = str6.toLowerCase(); // Converts the string to lowercase
console.log(lowerStr); // Output: hello, world!
// charAt methods
let str7 = "Hello, World!";
let char = str7.charAt(0); // Returns the character at index 0
console.log(char); // Output: H
// indexOf methods
let str8 = "Hello, World!"; 

let index = str8.indexOf("o"); // Returns the index of the first occurrence of "o"
console.log(index); // Output: 4
// lastIndexOf methods
let str9 = "Hello, World!";
let lastIndex = str9.lastIndexOf("o"); // Returns the index of the last occurrence of "o"   
console.log(lastIndex); // Output: 8
// includes methods
let str10 = "Hello, World!";
let includes = str10.includes("World"); // Checks if "World" is present in the string
console.log(includes); // Output: true
// startsWith methodsq
let str11 = "Hello, World!";
let startsWith = str11.startsWith("Hello"); // Checks if the string starts with "Hello"

console.log(startsWith); // Output: true
// endsWith methods
let str12 = "Hello, World!";
let endsWith = str12.endsWith("World!"); // Checks if the string ends with "World!"
console.log(endsWith); // Output: true
// repeat methods
let str13 = "Hello!";
let repeatedStr = str13.repeat(3); // Repeats the string 3 times
console.log(repeatedStr); // Output: Hello!Hello!Hello!
// padStart methods
let str14 = "5";
let paddedStr = str14.padStart(3, "0"); // Pads the string with "0" to a total length of 3

console.log(paddedStr); // Output: 005
// padEnd methods
let str15 = "5";
let paddedStrEnd = str15.padEnd(3, "0"); // Pads the string with "0" to a total length of 3
console.log(paddedStrEnd); // Output: 500
// valueOf methods
let str16 = new String("Hello, World!");
let value = str16.valueOf(); // Returns the primitive value of the String object    
console.log(value); // Output: Hello, World!
// localeCompare methods
let str17 = "apple";
let str18 = "banana";
let comparison = str17.localeCompare(str18); // Compares two strings in the current locale
console.log(comparison); // Output: -1 (apple comes before banana in lexicographical order)
// match methods
let str19 = "Hello, World!";
let regex = /o/g;
let matches = str19.match(regex); // Returns an array of matches for the regex in the string    
console.log(matches); // Output: ["o", "o"]
// replace methods
let str20 = "Hello, World!";
let replacedStr = str20.replace("World", "JavaScript"); // Replaces "World" with "JavaScript"
console.log(replacedStr); // Output: Hello, JavaScript!
// search methods
let str21 = "Hello, World!";
let searchIndex = str21.search("World"); // Returns the index of the first occurrence of "World"    
console.log(searchIndex); // Output: 7
// split methods
let str22 = "Hello, World!";
let splitArr = str22.split(", "); // Splits the string into an array using ", " as the separator
console.log(splitArr); // Output: ["Hello", "World!"]
// toString methods
let str23 = new String("Hello, World!");
let strValue = str23.toString(); // Converts the String object to a primitive string
console.log(strValue); // Output: Hello, World!
// toLocaleLowerCase methods
let str24 = "HELLO, WORLD!";
let localeLowerStr = str24.toLocaleLowerCase(); // Converts the string to lowercase using the current locale    
console.log(localeLowerStr); // Output: hello, world!
// toLocaleUpperCase methods
let str25 = "hello, world!";
let localeUpperStr = str25.toLocaleUpperCase(); // Converts the string to uppercase using the current locale
console.log(localeUpperStr); // Output: HELLO, WORLD!
// fromCharCode methods
let charCode = 65; // ASCII code for 'A'


let charFromCode = String.fromCharCode(charCode); // Converts the ASCII code to a character
console.log(charFromCode); // Output: A 
// fromCodePoint methods
let codePoint = 0x1F600; // Unicode code point for 
// "grinning face" emoji
let charFromCodePoint = String.fromCodePoint(codePoint); // Converts the code point to a character  
console.log(charFromCodePoint); // Output:  😀      
// at methods
let str26 = "Hello, World!";
let charAtIndex = str26.at(0); // Returns the character at index 0
console.log(charAtIndex); // Output: H
// anchor methods
let str27 = "Hello, World!";
let anchorStr = str27.anchor("anchor"); // Creates an HTML anchor element with the string as the content
console.log(anchorStr); // Output: <a name="anchor">Hello, World!</a>   

// big methods
let str28 = "Hello, World!";        
let bigStr = str28.big(); // Creates a string in big font (HTML)
console.log(bigStr); // Output: <big>Hello, World!</big>
// blink methods        
let str29 = "Hello, World!";
let blinkStr = str29.blink(); // Creates a blinking string (HTML)   
console.log(blinkStr); // Output: <blink>Hello, World!</blink>
// bold methods
let str30 = "Hello, World!";
let boldStr = str30.bold(); // Creates a bold string (HTML)
console.log(boldStr); // Output: <b>Hello, World!</b>
// fixed methods
let str31 = "Hello, World!";
let fixedStr = str31.fixed(); // Creates a fixed-width string (HTML)
console.log(fixedStr); // Output: <tt>Hello, World!</tt>
// fontcolor methods
let str32 = "Hello, World!";
let fontColorStr = str32.fontcolor("red"); // Creates a string with red font color (HTML)
console.log(fontColorStr); // Output: <font color="red">Hello, World!</font>
// fontsize methods
let str33 = "Hello, World!";
let fontSizeStr = str33.fontsize(5); // Creates a string with font size 5 (HTML)
console.log(fontSizeStr); // Output: <font size="5">Hello, World!</font>
// italics methods  
let str34 = "Hello, World!";

let italicsStr = str34.italics(); // Creates an italic string (HTML)
console.log(italicsStr); // Output: <i>Hello, World!</i>



// link methods
let str35 = "Hello, World!";

let linkStr = str35.link("https://www.example.com"); // Creates a hyperlink with the string as the content
console.log(linkStr); // Output: <a href="https://www.example.com">Hello, World!</a>
// small methods


let str36 = "Hello, World!";
let smallStr = str36.small(); // Creates a small string (HTML)
console.log(smallStr); // Output: <small>Hello, World!</small>
// strike methods       
let str37 = "Hello, World!";    

let strikeStr = str37.strike(); // Creates a strikethrough string (HTML)
console.log(strikeStr); // Output: <strike>Hello, World!</strike>
// sub methods
let str38 = "Hello, World!";
let subStr2 = str38.sub(); // Creates a subscript string (HTML)
console.log(subStr2); // Output: <sub>Hello, World!</sub>   
// sup methods
let str39 = "Hello, World!";
let supStr = str39.sup(); // Creates a superscript string (HTML)    
console.log(supStr); // Output: <sup>Hello, World!</sup>
// toSource methods
let str40 = "Hello, World!";
let sourceStr = str40.toSource(); // Returns a string representation of the object (not commonly used)
console.log(sourceStr); // Output: "Hello, World!" (in some JavaScript engines)                 
// toLocaleUpperCase methods
let str41 = "hello, world!";    
let localeUpperStr2 = str41.toLocaleUpperCase(); // Converts the string to uppercase using the current locale
console.log(localeUpperStr2); // Output: HELLO, WORLD!
// toLocaleLowerCase methods    
let str42 = "HELLO, WORLD!";
let localeLowerStr2 = str42.toLocaleLowerCase(); // Converts the string to lowercase using the current locale   
console.log(localeLowerStr2); // Output: hello, world!
// toString methods
let str43 = new String("Hello, World!");

let strValue2 = str43.toString(); // Converts the String object to a primitive string
console.log(strValue2); // Output: Hello, World!
// toString methods
let str44 = new String("Hello, World!");
let strValue3 = str44.toString(); // Converts the String object to a primitive string
console.log(strValue3); // Output: Hello, World!
// toString methods

let str45 = new String("Hello, World!");
let strValue4 = str45.toString(); // Converts the String object to a primitive string
console.log(strValue4); // Output: Hello, World!
// toString methods
let str46 = new String("Hello, World!");

let strValue5 = str46.toString(); // Converts the String object to a primitive string
console.log(strValue5); // Output: Hello, World!
// toString methods
let str47 = new String("Hello, World!");
let strValue6 = str47.toString(); // Converts the String object to a primitive string
console.log(strValue6); // Output: Hello, World!
// toString methods 
let str48 = new String("Hello, World!");
let strValue7 = str48.toString(); // Converts the String object to a primitive string   

console.log(strValue7); // Output: Hello, World!
// toString methods 
let str49 = new String("Hello, World!");
let strValue8 = str49.toString(); // Converts the String object to a primitive string   
console.log(strValue8); // Output: Hello, World!    
// toString methods
let str50 = new String("Hello, World!");    
let strValue9 = str50.toString(); // Converts the String object to a primitive string
console.log(strValue9); // Output: Hello, World!
// toString methods
let str51 = new String("Hello, World!");
