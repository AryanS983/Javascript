//Destructuring 

const course ={
    cname: "Javascript",
    fees: 1000,
    instructor: "Hitesh"
}

const {instructor} = course;
console.log(instructor);

// Web can also assign custom names the destructured elements
const {fees : coursefees} = course   // using fees as coursefees
console.log(coursefees);

