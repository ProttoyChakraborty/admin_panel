export const capitaliseFirst = (s) => {
    let temp = s.split(' ');
    temp.forEach((element,index) => {
      temp[index] = element.charAt(0).toUpperCase() + element.slice(1);
    });
    return temp.join(' ');
  }
  