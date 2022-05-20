import { html } from 'https://unpkg.com/lit-html?module';
import { checkInputForm } from './../helpers.js';

import * as authSDKService from './../services/authSDKService.js'

const registerTemplate = (onSubmit) => html `
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
                                <input type="password" name="repeatPassword" placeholder="Repeat password">
                                <button type="submit">Sign Up</button>
                            </form>
                            <div class="please-register">
                            <h6>If already have an account please <a href="/login"><span>Login</span></a></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
`

export const renderRegister = (ctx) => {

    const onSubmit = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let email = formData.get('email');
        let password = formData.get('password');
        let repeatPassword = formData.get('repeatPassword');

        let data = Object.fromEntries(formData);

        if (!checkInputForm(data)) {
            alert('Please fill all the empty fields !')
            return;
        }

        if (password !== repeatPassword) {
            alert('Passwords do not match !')
            return;
        }

        authSDKService.register(ctx, email, password);
    }

    ctx.render(registerTemplate(onSubmit))
}