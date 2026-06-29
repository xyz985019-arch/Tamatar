// 🍅 Welcome Message
window.onload = function () {
    console.log("🍅 Welcome to Tamatar.com");
    alert("😂 Welcome to Tamatar.com!\nAaj ka mission: Tamatar ki izzat bachao!");
};

// 🍅 Join Tomato Army
function joinArmy() {
    let name = prompt("👤 Apna naam batao:");

    if (name && name.trim() !== "") {
        alert("🎉 Welcome " + name + "!\nAap ab Official Tomato Army ke member hain. 🍅");
    } else {
        alert("😂 Naam to bata dete!");
    }
}

// 🍅 Random Tomato Price
function showPrice() {

    const prices = [
        "₹20/kg 😀",
        "₹60/kg 🙂",
        "₹120/kg 😬",
        "₹250/kg 😭",
        "₹999/kg 💀",
        "1 Kidney + 2 Tomatoes 😂",
        "Price unavailable... Seller bhi ro raha hai 😭"
    ];

    let random = Math.floor(Math.random() * prices.length);

    document.getElementById("rate").innerHTML =
        "Today's Tomato Price: <b>" + prices[random] + "</b>";
}

// 🍅 Fake Tomato IQ Test
function tomatoIQ() {

    const result = [
        "🧠 IQ: 200 - Tum Tomato Scientist ho!",
        "😂 IQ: 100 - Tum Normal Insaan ho.",
        "🍕 IQ: 50 - Pizza zyada khate ho.",
        "🥫 IQ: 999 - Tum Ketchup ban chuke ho!"
    ];

    let random = Math.floor(Math.random() * result.length);

    alert(result[random]);
}

// 🍅 Secret Button
let clicks = 0;

function secretTomato() {

    clicks++;

    if (clicks >= 5) {
        alert("🥳 Secret Unlock!\nGolden Tomato Mil Gaya! 🏆🍅");
        clicks = 0;
    } else {
        alert("🍅 Secret Click: " + clicks + "/5");
    }
}
