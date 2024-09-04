const add ={
    name: "Andrew",
    cities: ["Kwara","Lagos","Kaduna","Ibadan","Abuja"],
    placeLiveBefore: function(){
        console.log( this.name)
        console.log(this.cities)
    
     const mapMessage= this.cities.map((city)=>{
            return (this.name + " have been to " + city );
        })
        return mapMessage;
        //FOREACH LOOPING METHOD
    // this.cities.forEach((city)=>{
    //     console.log(this.name + "have been to " + city)
    // })
}
}
console.log(add.placeLiveBefore());

//CHALLENGE
// numbers - array of numbers
//multiplyBy -single number
//multiply - return an new array when the numbers have been multipled
const multipler ={
    numbers: [1,2,3,4,5],
    multiplyBy : 3,
    multiply(){
        return this.numbers.map((add)=>{
            return add * this.multiplyBy
        })
    }
}
   
console.log(multipler.multiply());