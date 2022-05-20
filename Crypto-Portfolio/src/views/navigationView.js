import { html } from '../../node_modules/lit-html/lit-html.js';
import { checkInputForm } from './../helpers.js';

import { getUser } from '../services/authSDKService.js';
import * as authSDKService from './../services/authSDKService.js'

const guestUserNavigation = () => html `
         <div class="login-faq-earn-money">
                                    <a href="/register">Sign Up</a>                                   
                                    <a href="https://coinmarketcap.com/" class="active">CoinMarketCap</a>
                                </div>
`;

const loggedUserNavigation = (email) => html `
<div class="login-faq-earn-money">
                                    <a href="/user">Welcome, ${email}</a>
                                    <a href="/logout">Logout</a>                                
                                    <a href="https://coinmarketcap.com/" class="active">CoinMarketCap</a>
                                </div>
`;

const guestUserSecondNavigation = (onSubmit) => html `
                                    <ul>
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/currencies">Currencies</a></li>
                                    </ul>
                                    <!-- Login Form -->
                                    <div id="header-login-form" class="header-newsletter-form">
                                        <form @submit="${onSubmit}" id="auth-form">
                                            <input type="email" name="email" id="email" placeholder="Email">
                                            <input type="password" name="password" id="password" placeholder="Password">
                                            <button type="submit">Login</button>
                                        </form>
                                    </div>
`;

const loggedUserSecondNavigation = () => html `
                                    <ul>
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/currencies">Currencies</a></li>
                                        <li><a href="/portfolio">My Portfolio</a></li>
                                    </ul>
`;

const navigationTemplate = (user, onSubmit) => html `
      
            <!-- Top Header Area -->
            <div class="top-header">
                <div class="container h-100">
                    <div class="row h-100">
                        <div class="col-12 h-100">
                            <div class="top-header-content h-100 d-flex align-items-center justify-content-between">
                                <!-- Top Headline -->
                                <div class="top-headline">
                                    <p><a href="/"><span>Crypto Portfolio</span></a></p>
                                </div>
                                
                                
                                <!-- Top Login & Faq PRIVATE -->
           
                                ${user
                    ? loggedUserNavigation(user.email)
                    : guestUserNavigation()
                } 



                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <!-- Navbar Area -->
            <div class="cryptos-main-menu">
                <div class="classy-nav-container breakpoint-off">
                    <div class="container">
                        <!-- Menu -->
                        <nav class="classy-navbar justify-content-between" id="cryptosNav">

                            <!-- Logo -->
                            <a class="nav-brand" href="/calculator"><img src="img/core-img/logo.png" alt=""></a>

                            <!-- Navbar Toggler -->
                            <div class="classy-navbar-toggler">
                                <span class="navbarToggler"><span></span><span></span><span></span></span>
                            </div>

                            <!-- Menu -->
                            <div class="classy-menu">

                                <!-- close btn -->
                                <div class="classycloseIcon">
                                    <div class="cross-wrap"><span class="top"></span><span class="bottom"></span></div>
                                </div>



                                <!-- Nav Start PRIVATE -->
                                <div class="classynav">
                                    
                                        
                               ${user
                                       ? loggedUserSecondNavigation()
                                      : guestUserSecondNavigation(onSubmit)
                              } 
                      
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

           

        
`;



export const renderNavigation = (ctx) => {
    let user = getUser();

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

    return navigationTemplate(user, onSubmit);
};