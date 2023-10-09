(function () {

    const quotes = [
        "Artisan codeur",
        "cookie monster",
        "arbitre des élégances",
        "toupi toupi tou",
        "Ylusse 21",
        "P.Y.T",
        "poupi poupi pou"
    ];

    const rdm = document.getElementById("random");

    rdm.addEventListener("click", function () {
        let random = Math.floor(Math.random() * quotes.length);
        console.log(random);

        document.getElementById("quote").textContent = quotes[random];

    });
})();