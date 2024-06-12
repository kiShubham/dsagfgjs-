// todo:  call apply bind ;
let name_1 = {
  firstName: "shubham",
  lastName: "singh",
  printName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

let printFunny = function (homeTown, state) {
  console.log(
    this.firstName +
      " funny " +
      this.lastName +
      "from " +
      homeTown +
      "," +
      state
  );
};

name_1.printName();
printFunny.call(name_1, "vrindavan", "UP");
printFunny.apply(name_1, ["vrindavan", "UP"]);
let printfunnyBindMethod = printFunny.bind(name_1, "vrindavan", "UP"); //printfunnyBindMethod is fn ,
printfunnyBindMethod();

let name_2 = {
  firstName: "sachin",
  lastName: "Tendulkar",
};

//function borrowing
name_1.printName.call(name_2);
