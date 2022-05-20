import { html } from 'https://unpkg.com/lit-html?module';
import { singlePriceTemplate } from '../templates/singlePriceTemplate.js';
import * as coinRankingService from '../services/coinRankingService.js'


const currenciesTemplate = (assets) => html `
<!-- ##### Blog Area Start ##### -->
<section class="cryptos-blog-area">
            <div class="container blog-cont">
                <div class="row align-items-center">
                    <div class="col-12 col-lg-7">
                        <div class="blog-area">
                            <!-- Single Blog Area -->
                            <div class="single-blog-area d-flex align-items-start">
                                <!-- Thumbnail -->
                                <div class="blog-thumbnail">
                                    <img src="img/blog-img/1.jpg" alt="">
                                </div>
                                <!-- Content -->
                                <div class="blog-content">
                                    <a href="#" class="post-title">This Platform Aims to Disrupt the Market</a>
                                    <div class="meta-data">
                                        <a href="#">Crypto News</a> |
                                        <a href="#">March 18, 2018</a>
                                    </div>
                                    <p>Morbi vel arcu gravida, iaculis lacus vel, posuere ipsum. Sed faucibus mauris vitae urna consectetur, sit amet maximus nisl sagittis.</p>
                                </div>
                            </div>
                            <!-- Single Blog Area -->
                            <div class="single-blog-area d-flex align-items-start">
                                <!-- Thumbnail -->
                                <div class="blog-thumbnail">
                                    <img src="img/blog-img/2.jpg" alt="">
                                </div>
                                <!-- Content -->
                                <div class="blog-content">
                                    <a href="#" class="post-title">New Hedge Funds invests in Crypto</a>
                                    <div class="meta-data">
                                        <a href="#">Crypto News</a> |
                                        <a href="#">March 18, 2018</a>
                                    </div>
                                    <p>Iaculis lacus vel, posuere ipsum. Sed faucibus mauris vitae urna consectetur, sit amet maximus nisl sagittis. Ut in iaculis enim.</p>
                                </div>
                            </div>
                            <!-- Single Blog Area -->
                            <div class="single-blog-area d-flex align-items-start">
                                <!-- Thumbnail -->
                                <div class="blog-thumbnail">
                                    <img src="img/blog-img/3.jpg" alt="">
                                </div>
                                <!-- Content -->
                                <div class="blog-content">
                                    <a href="#" class="post-title">This Platform Aims to Disrupt the Market</a>
                                    <div class="meta-data">
                                        <a href="#">Crypto News</a> |
                                        <a href="#">March 18, 2018</a>
                                    </div>
                                    <p>Morbi vel arcu gravida, iaculis lacus vel, posuere ipsum. Sed faucibus mauris vitae urna consectetur, sit amet maximus nisl sagittis.</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="col-12 col-lg-5">
                        <div class="cryptos-prices-table">

                            <!-- Single Price Table -->
                                ${html`${singlePriceTemplate(assets[1])}`}                
                                ${html`${singlePriceTemplate(assets[2])}`}              
                                ${html`${singlePriceTemplate(assets[3])}`}              
                                ${html`${singlePriceTemplate(assets[4])}`}              
                                ${html`${singlePriceTemplate(assets[5])}`}              
                                ${html`${singlePriceTemplate(assets[6])}`}              
                                ${html`${singlePriceTemplate(assets[7])}`}              
                                ${html`${singlePriceTemplate(assets[8])}`}              
                                ${html`${singlePriceTemplate(assets[9])}`}              
                                ${html`${singlePriceTemplate(assets[10])}`}                          
                                ${html`${singlePriceTemplate(assets[11])}`}                          
                        
                        </div>
                    </div>
                </div>
            </div>
        <!-- ##### Blog Area End ##### -->
`



export const renderCurrencies = (ctx) => {

    coinRankingService.getAll().then(data => {

        function top10() {
            let assets = {};

            for (let i = 1; i <= 11; i++) {
            assets[i] = data.data.coins.find(coin => coin.rank == i);              
            }

            return assets;
        }

        ctx.render(currenciesTemplate(top10()))
    })

}