import { html } from 'https://unpkg.com/lit-html?module';

export const singlePriceTemplate = (asset) => html `

        <!-- Single Price Table -->
        <div class="single-price-table d-flex align-items-center justify-content-between">
                                <div class="p-content d-flex align-items-center">                                   
                                <span>${asset.rank}</span>
                                    <img class="asset-icon" src="${asset.iconUrl}" alt="">
                                    <p>${asset.name} <span>${asset.symbol}</span></p>
                                </div>
                                ${asset.change < 0 ? html`<div class="price decrease"><p>$ ${Number((asset.price)).toFixed(2)}</p></div>`
                                : html`<div class="price increase"><p>$${Number((asset.price)).toFixed(2)}</p></div>` }                                                         
        </div>
`

export const singlePortfolioTemplate = (asset) => html `

        <!-- Single Price Table -->
        <div class="single-price-table d-flex align-items-center justify-content-between">
                                <div class="p-content d-flex align-items-center">                                   
                                <span>${asset.rank}</span>
                                    <img class="asset-icon" src="${asset.iconUrl}" alt="">
                                    <p>${asset.name} <span>${asset.symbol}</span></p>
                                </div>

                                ${asset.change < 0 ? html`<div class="price decrease"><p>$ ${Number((asset.price)).toFixed(2)}</p></div>`
                                : html`<div class="price increase"><p>$${Number((asset.price)).toFixed(2)}</p></div>` }                                                         
        </div>
`