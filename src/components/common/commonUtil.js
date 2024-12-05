
export function getMonthName(id) {
    switch (id) {
        case 1: return "January";
        case 2: return "February";
        case 3: return "March";
        case 4: return "April";
        case 5: return "May";
        case 6: return "June";
        case 7: return "July";
        case 8: return "August";
        case 9: return "September";
        case 10: return "October";
        case 11: return "November";
        case 12: return "December";
        default: return "";
    }
}
export function validateEmail(email) {
   return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
}

export function validateMobileNumber(mob) {
    return /^\d{10}$/.test(mob);
 }

 export function getAvatar(name) {
      if(name) {
        let splitArr = name.split(" ");
        if(splitArr.length === 1) return splitArr[0][0];
        if(splitArr.length === 2) return (splitArr[0][0] + splitArr[1][0]);
        if(splitArr.length > 2) return (splitArr[1][0] + splitArr[splitArr.length -1][0]);
      }
      return "";
 }

  