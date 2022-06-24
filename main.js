// The Leap Year calculator '@roktech | redolF' 
function isLeap(year) {
    var four = 4;
    var hundred = 100;
    var four_hundred = 400;

    if (year % four === 0) {
        if (year % hundred === 0){
            if (year % four_hundred === 0) {
                return "Leap year";
            } else {
                return "Not Leap year."
            }
        }else {
            return "Leap year."
        }
    } else {
        return "Not leap year.";
    }
}

console.log(isLeap(2023));