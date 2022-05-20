import { html } from 'https://unpkg.com/lit-html?module';
import { makeAssetList, checkInputForm } from '../helpers.js';
import * as databaseService from './../services/databaseService.js'

const portfolioTemplate = (addNew, onSubmit, assetList) => html `
<section class="cryptos-about-area">
    <div class="container">
        <div class="row align-items-center">

            <div class="col-12 col-md-6">
                        <div class="about-thumbnail mb-100">
                            <img src="img/bg-img/about.png" alt="">
                        </div>
            </div>


            <div class="col-12 col-md-6">
                    <div class="about-content mb-100">
                            <div class="section-heading">
                                <div>Current balance</div>
                                <div class="cur-balance">$0.00</div>
                            </div>
                            
                            <div>
                            <a @click=${addNew} href="" class="btn cryptos-btn mt-30">+ Add New </a>
                            </div>                       
                    </div>

                   
                <div class="add-new" style="background-image: url(img/bg-img/bg-2.jpg); display: none">
                    <div class="section-heading add-section">
                        <div class="currency-calculator mb-15 clearfix">
                                <form @click=${onSubmit} class="d-flex align-items-center justify-content-center">
                                <!-- Calculator Part -->
                                <div class="calculator-first-part d-flex align-items-center">
                                    <input name="cryptoValue" type="text" value="1">
                                    <input list="cryptoId" id="cryptoId-choice" name="assetId"/>
                             ${html`${assetList}`}
                                   
                                </div>

                                <!-- Equal Sign -->
                                <div class="equal-sign">
                                    <a href=""><i class="fa-solid fa-meteor fa-2xl"></i></a>
                                </div>
                                </form>
                        </div>                    
                    </div>
                </div>

            </div>
           
        </div>
    </div>
</section>

`

export const renderPortfolio = (ctx) => {

    const addNew = (e) => {
        e.preventDefault();
        let addNewElememnt = document.querySelector('.add-new');
        addNewElememnt.setAttribute("style", "display:inline-block;")
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (e.target == document.querySelector('.fa-meteor')) {
            addAsset(e)
        }
        
    }

    const addAsset = (e)=>{
        e.preventDefault()
        
        let formData = new FormData(e.currentTarget);
        let value = formData.get('cryptoValue');
        let asset = formData.get('assetId');

        let data = Object.fromEntries(formData);

        if (!checkInputForm(data)) {
            alert('Please fill all the empty fields !')
        }
        if(checkInputForm(data)){
            let addNewElememnt = document.querySelector('.add-new');
            addNewElememnt.setAttribute("style", "display:none;")
        }

        databaseService.addAsset(asset, value);
    }


    ctx.render(portfolioTemplate(addNew, onSubmit, makeAssetList()))
}