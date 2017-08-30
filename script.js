function helloWorld() {
    console.log('Hello, world!')
}

helloWorld();

// Edabit Solution is below


function addUp(num) {
    var total = 0;
    while (num > 0) {
    total += num;
    num --;
  };
  return total;
};

console.log(addUp(5));