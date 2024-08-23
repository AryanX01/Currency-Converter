// const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
// const dropdowns = document.querySelectorAll(".dropdown select");
// const btn = document.querySelector("form button");
// const fromCurr = document.querySelector(".from select");
// const toCurr = document.querySelector(".to select");
// const msg = document.querySelector(".msg");

// for (let select of dropdowns) {
//     for (currcode in countryList) {
//         let newOption = document.createElement("option");
//         newOption.innerText = currcode;
//         newOption.value = currcode;
//         if (select.name === "from" && currcode === "USD") {
//             newOption.selected = "selected";
//         }
//         if (select.name === "to" && currcode === "INR") {
//             newOption.selected = "selected";
//         }
//         select.append(newOption);
//     }
//     select.addEventListener("change", (evt) => {
//         updateFlag(evt.target);
//     })
// }

// const updateExchangeRate = async () => {
//     let amount = document.querySelector(".amount input");
//     let amtVal = amount.value;
//     if (amtVal === "" || amtVal < 0) {
//         amtVal = 1;
//         amount.value = "1";
//     }

//     const fromCurrency = fromCurr.value.toLowerCase();
//     const toCurrency = toCurr.value.toLowerCase();
//     const URL = `${BASE_URL}/${fromCurrency}.min.json`;

//     try {
//         const response = await fetch(URL);
//         if (!response.ok) {
//             throw new Error('Network response was not ok.');
//         }
//         const data = await response.json();
//         const rate = data[fromCurrency][toCurrency];
//         if (!rate) {
//             throw new Error('Invalid currency codes or rate unavailable.');
//         }

//         let finalAmount = amtVal * rate;
//         msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount.toFixed(2)} ${toCurr.value}`;
//     } catch (error) {
//         console.error('Error:', error);
//         msg.innerText = 'Error fetching exchange rate.';
//     }
// };

// const updateFlag = (element) => {
//     let currcode = element.value;
//     let countrycode = countryList[currcode];
//     let newSrc = `https://flagsapi.com/${countrycode}/flat/64.png`;
//     let img = element.parentElement.querySelector("img");
//     img.src = newSrc;
// }

// btn.addEventListener("click", (evt) => {
//     evt.preventDefault();
//     updateExchangeRate();
// });

// window.addEventListener("load", () => {
//     updateExchangeRate();
// });






















const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for (let select of dropdowns) {
    for (currcode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currcode;
        newOption.value = currcode;
        if (select.name === "from" && currcode === "USD") {
            newOption.selected = "selected";
        }
        if (select.name === "to" && currcode === "INR") {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    })
}

const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if (amtVal === "" || amtVal < 0) {
        amtVal = 1;
        amount.value = "1";
    }

    const fromCurrency = fromCurr.value.toLowerCase();
    const toCurrency = toCurr.value.toLowerCase();
    const URL = `${BASE_URL}/${fromCurrency}.min.json`;

    try {
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        const rate = data[fromCurrency][toCurrency];
        if (!rate) {
            throw new Error('Invalid currency codes or rate unavailable.');
        }

        let finalAmount = amtVal * rate;
        msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount.toFixed(2)} ${toCurr.value}`;
    } catch (error) {
        console.error('Error:', error);
        msg.innerText = 'Error fetching exchange rate.';
    }
};

const updateFlag = (element) => {
    let currcode = element.value;
    let countrycode = countryList[currcode];
    let newSrc = `https://flagsapi.com/${countrycode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}

btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateExchangeRate();
});

window.addEventListener("load", () => {
    updateExchangeRate();
});
