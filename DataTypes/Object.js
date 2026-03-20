let college ={
    name : "sravanana",
    class: "finalyear",
    age  : 30,
    mark :98,
    mark1: 66,
}
console.log(college);
console.log(college.name);
// add tha city //
college.city =" Erode",
console.log (college);
 //update age//
college.age = 55,
console.log(college);
//delete tha class//
delete college.class;
console.log(college);

console.log (college.mark + "%");

console.log (college.mark - college.mark1);
console.log (" Avaarage is " ,(college.mark + college.mark1)/2)
