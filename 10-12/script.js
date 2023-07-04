function calculate() {
    var x = document.getElementById("x").value;
    var y = document.getElementById("y").value;
    var numerator = Math.pow((y - 1), 2) + 3;
    var denominator = 1 + Math.pow(x, 2) * Math.abs(y - Math.cos(x));
    var result = numerator / denominator;
    document.getElementById("result").innerHTML = "A = " + result.toFixed(2);
    return result;
   }

   