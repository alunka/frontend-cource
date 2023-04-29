const url = https://api.privatbank.ua/p24api/exchange_rates?date=01.12.2014

async function privatbank (url) {
    try {
        const res = await fetch (url)
        const data = await res.json()
        console.log(res);
        console.log(data);
    }
}