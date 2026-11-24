
document.getElementById("generateBtn").addEventListener("click", function() {

    let output = "";

    for (let i = 1; i <= 20; i++) {

        if (i % 2 === 0) {

            output += "<span style='color: blue;'>" + i + " </span>";

        } else {

            output += "<span style='color: red;'>" + i + " </span>";

        }

    }

    document.getElementById("result").innerHTML = output;

});
