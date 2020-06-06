console.log("TUT2")

//variables in js
// keywords: var, let, const

var name = "Saket";
var profession;
profession = "Engineer"
var city = "Ranchi"

var marks = 34
console.log(name,profession,marks)
console.table({
    'name': name,
    'Profession': profession,
    'marks': marks
})

// Rules with javascript variable
/*
1. Cannot start with numbers 
2. Cannot start with letter, numbers, space , $
3. Are case sensetive
*/

const owner_name = "William Bhskar"
// ab fir se owner_name change nahi ho sakta
// jab bhi const keyword use krenge, usko value assign krna hi hga
console.log(owner_name)


console.log(city)
//Blocks
{
    let city = "Dholakpur"
    city = "Delhi"
    console.log(city)
    // Blocks ke andar temporary variable assign kar sakte h
    // Jo block ke andar hi defind rahega
    // block k bahar uska koi existance nahi
    // aur fark nahi pdta us naam ka variable pehle asign hua h ya nhi
}


//const array me elements add ho sakta h
const arr1 = [1,2,3,4,5,6]
arr1.push(23)
//arr1 = [54,6,2.32,5] wapas nahi declare kr sakte h


console.log(arr1)


// Mst common peogramming case type
/*
1. camel case - abcDef
2. kebab case - abc-def
3. Snake case - abc_def
4. Pascal case - AbcDef
*/


