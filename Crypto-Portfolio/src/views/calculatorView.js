import { html } from 'https://unpkg.com/lit-html?module';
import * as coinApiService from '../services/coinApiService.js'

const calculatorTemplate = (data, onConvert) => html `
<section class="currency-calculator-area section-padding-100 bg-img bg-overlay" style="background-image: url(img/bg-img/bg-2.jpg);">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="section-heading text-center white mx-auto">
                            <h3 class="mb-4">Cryptocurrency Calculator</h3>
                            <h5 class="mb-2">determines the exchange rates between major fiat currencies and cryptocurrencies – including BTC, ETH, BNB, SOL and LUNA to USD, EUR and GBP – with up to six decimal places of accuracy via Open Exchange Rates.</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div id="calculator" class="col-12">
                        <div class="currency-calculator mb-15 clearfix">
                            <form @click=${onConvert} class="d-flex align-items-center justify-content-center">
                                <!-- Calculator Part -->
                                <div class="calculator-first-part d-flex align-items-center">
                                    <input name="cryptoValue" type="text" value="1">
                                    <select name="cryptoId">                                 
                                    <option>BTC</option>
                                    <option>ETH</option>
                                    <option>BNB</option>
                                    <option>SOL</option>
                                    <option>LUNA</option>
                                </select>
                                </div>

                                <!-- Equal Sign -->
                                <div class="equal-sign">
                                    <a href=""><i id="equl-toFiat" class="fa-solid fa-circle-arrow-right fa-2xl"></i></a>
                                </div>
                                
                                <!-- Calculator Part -->
                                <div class="calculator-sec-part d-flex align-items-center">
                                    <input id="toFiatValue" name="toFiatValue" type="text" value=${(data.rates
                                    .find(asset=>asset.asset_id_quote == 'USD').rate).toFixed(2)}>
                                    <select name="toFiatId">
                                    <option>USD</option>
                                    <option>EUR</option>
                                    <option>GBP</option>
                                </select>
                                </div>
                            </form>
                        </div>

                        <div class="currency-calculator mb-15">
                            <form @click=${onConvert} action="#" method="post" class="d-flex align-items-center justify-content-center">
                                <!-- Calculator Part -->
                                <div class="calculator-first-part d-flex align-items-center">
                                    <input id="fiatValue" type="text" name="fiatValue" value="1000">
                                    <select id="fiatId" name="fiatId">
                                    <option>USD</option>
                                    <option>EUR</option>
                                    <option>GBP</option>
                                </select>
                                </div>

                                  <!-- Equal Sign -->
                                  <div class="equal-sign">
                                    <a href=""><i id="equl-toCrypto" class="fa-solid fa-circle-arrow-right fa-2xl"></i></a>
                                </div>

                                <!-- Calculator Part -->
                                <div class="calculator-sec-part d-flex align-items-center">
                                    <input id="toCryptoValue" type="text" name="toCryptoValue" value=${(1000 / (data.rates
                                    .find(asset=>asset.asset_id_quote == 'USD').rate)).toFixed(6)
                                    }>
                                    <select id="toCryptoId" name="toCryptoId">
                                    <option>BTC</option>
                                    <option>ETH</option>
                                    <option>BNB</option>
                                    <option>SOL</option>
                                    <option>LUNA</option>
                                </select>
                                </div>
                            </form>
                        </div>  
                    </div>
                </div>
            </div>
        </section>
        <!-- ##### Currency Area End ##### -->
`

export const renderCalculator = (ctx) => {

    const onConvert = (e) => {
        e.preventDefault();

        const toFiatValue = document.getElementById('toFiatValue');
        const assetInputs = Object.fromEntries(new FormData(e.currentTarget));

        if (e.target == document.getElementById('equl-toFiat')) {
            coinApiService.getDouble(assetInputs.cryptoId, assetInputs.toFiatId).then(data => {
                let cryptoAmount = assetInputs.cryptoValue;
                toFiatValue.value = (data.rate * cryptoAmount).toFixed(2);
            })
        }

        if (e.target == document.getElementById('equl-toCrypto')) {
            console.log(assetInputs);
            coinApiService.getDouble(assetInputs.fiatId, assetInputs.toCryptoId).then(data => {
                let cryptoAmount = assetInputs.fiatValue;
                toCryptoValue.value = (cryptoAmount * data.rate).toFixed(2);
            })
        }
    }


    coinApiService.getAll().then(data => {
        ctx.render(calculatorTemplate(data, onConvert))
    });
}