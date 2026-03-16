//used to store data in linear way
// array is special type of object
// it has index in [place of keys]
// it is used to store same type of data
// arrays are mutable original array is changed no new array is created
let marks =[12,1221,434,4,5,5]
let sum=0
for(let i=0;i<marks.length;i++){
    marks[i]=marks[i]-(marks[i]*0.1)
    
}

console.log(marks)