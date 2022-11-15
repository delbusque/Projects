import * as coinRankingService from './services/coinRankingService.js'


export function checkInputForm(data) {

    return Object.values(data).every(v => v);
};

export function checkInputForm(data) {

    return Object.values(data).every(v => v);
};


export function makeAssetList() {

    let divList = document.createElement('div');
    let dataList = document.createElement('datalist');
    dataList.setAttribute('id', 'cryptoId');

    coinRankingService.getAll().then(data => {

        for (let i = 1; i <= 50; i++) {
            const curr = data.data.coins.find(coin => coin.rank == i);
            let option = document.createElement('option');
            option.setAttribute('value', curr.symbol);

            dataList.appendChild(option);

        }

        divList.appendChild(dataList)

        return divList;
    })

    return divList;
}