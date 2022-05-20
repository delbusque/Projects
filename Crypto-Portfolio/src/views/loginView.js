import { html } from 'https://unpkg.com/lit-html?module';
import { checkInputForm } from './../helpers.js';

import * as authSDKService from './../services/authSDKService.js'

const loginTemplate = (onSubmit) => html `
            <!-- Newsletter Area -->
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="newsletter-area">
                            <div class="section-heading text-center mx-auto">
                                <h3>Open your <span>Crypto Portfolio</span></h3>
                            </div>
                            <form @submit=${onSubmit}>
                                <input type="email" name="email" placeholder="Email">
                                <input type="password" name="password" placeholder="Password">
                                <button type="submit">Login</button>
                            </form>
                            <div class="please-login">
                            <h6>If don't have an account please <a href="/register"><span>Sign Up</span></a></h6>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </section>
`



export const renderLogin = (ctx) => {
    const onSubmit = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let email = formData.get('email');
        let password = formData.get('password');

        let data = Object.fromEntries(formData);

        if (!checkInputForm(data)) {
            alert('Please fill all the empty fields !')
            return;
        }

        authSDKService.login(ctx, email, password);
    }

    ctx.render(loginTemplate(onSubmit))
}