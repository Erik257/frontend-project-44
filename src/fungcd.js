const getDivis = (a, b) => {
    let one = a;
    let two = b;
    while (one !== two) {
      if (one > two) {
        one -= two;
      } else {
        two -= one;
      }
    }
    return one;
  };
  
  export default getDivis;