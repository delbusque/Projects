import { html } from 'https://unpkg.com/lit-html?module';

const homeTemplate = () => html `
<!-- ##### Hero Area Start ##### -->
<section class="hero-area">
            <div class="hero-slides">

                <!-- Single Hero Slide -->
                <div class="single-hero-slide">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-12 col-md-7">
                                <div class="hero-slides-content">
                                    <h2 data-animation="fadeInUp" data-delay="100ms">Take a step into the <span>Crypto World</span></h2>
                                    <h6 data-animation="fadeInUp" data-delay="400ms">This Crypto Portfolio Tracker keeps eye of your profits, losses and portfolio valuation. Updating live 24/7 using price data from the biggest exchanges. Thousands of coins and tokens available. Top notch crypto portfolio
                                        tracking at no cost.</h6>
                                    <a href="/currencies" class="btn cryptos-btn" data-animation="fadeInUp" data-delay="700ms">Currencies</a>
                                </div>
                            </div>
                            <div class="col-12 col-md-5">
                                <div class="hero-slides-thumb" data-animation="fadeInUp" data-delay="1000ms">
                                    <img src="img/bg-img/bg-2.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- ##### Hero Area End ##### -->
`

export const renderHome = (ctx) => ctx.render(homeTemplate());