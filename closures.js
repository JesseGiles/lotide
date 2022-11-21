const useNumber = function () {
  let number = 5;

  const showNumber = function() {
    console.log(`number is:`, number);
    number++;
  }

  return showNumber;
};

const show = useNumber();

console.log(show);

show();
show();
show();
show();