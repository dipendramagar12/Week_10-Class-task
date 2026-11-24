
let count = 0;

document.getElementById("clickBtn").addEventListener("click", function() {

    count++;

    document.getElementById("heading").textContent =
        "Button Clicked: " + count;

    if (count === 10) {

        document.getElementById("message").textContent =
            "You have clicked 10 times!";

    }

});
