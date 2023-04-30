async function privatbank () {
    const url = 'https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5';

    await fetch(url , {
            method: 'GET'
        }).then(response => {
            if (response.ok) return response.json();
            throw new Error("Error fetching data");
        })
        .then(data => {
            data.forEach((currency) => {
                let buyCell = document.getElementById(`${currency.ccy}_buy`);
                let saleCell = document.getElementById(`${currency.ccy}_sale`);
                if(buyCell !== undefined && buyCell !== null) {
                    buyCell.innerHTML = currency.buy;
                    document.getElementById(`${currency.ccy}_buy_amount`).innerHTML =
                    (currency.buy * document.getElementById('currency_amount').value).toFixed(2) + ' ₴';
                }
                if(saleCell !== undefined && saleCell !== null) {
                    saleCell.innerHTML = currency.sale;
                    document.getElementById(`${currency.ccy}_sale_amount`).innerHTML =
                    (currency.sale * document.getElementById('currency_amount').value).toFixed(2) + ' ₴';
                }
            });
        })
        .catch(err => {
            console.error("Error: ", err);
        });
}

privatbank();
