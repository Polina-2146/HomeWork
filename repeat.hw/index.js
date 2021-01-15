const people = [
    {
      id: 1,
      name: "maks",
      money: 22,
    },
    {
      id: 2,
      name: "ann",
      money: 200,
    },
    {
      id: 3,
      name: "dan",
      money: 800,
     },
     {
      id: 4,
      name: "kiril",
      money: 4000,
     },
     {
      id: 5,
      name: "maria",
      money: 10,
     },
 ];
 
 // task 1
 const sumMoney = people.reduce((acc, person) => 
     acc + person.money, 0
 );
 
 console.log(sumMoney);
 // end of task 1
 
 // task 2
 const filteredPeople = people.filter((person) => {
     if(person.money > 100) {
         return person;
     }
 });
 
 console.log(filteredPeople);
 // end of task 2