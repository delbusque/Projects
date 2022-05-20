import page from './../node_modules/page/page.mjs'

import { navigationMiddleware } from './middlewares/navigationMiddleware.js'
import { renderMainMiddleware } from './middlewares/renderMainMiddleware.js';
import { renderCalculator } from './views/calculatorView.js';
import { renderCurrencies } from './views/curenciesView.js';
import { renderHome } from './views/homeView.js';
import { renderLogin } from './views/loginView.js';
import { renderLogout } from './views/logoutView.js';
import { renderPortfolio } from './views/portfolioView.js';
import { renderRegister } from './views/registerView.js';


page(navigationMiddleware)
page(renderMainMiddleware)

page('/', renderHome);
page('/calculator', renderCalculator)
page('/currencies', renderCurrencies)
page('/portfolio', renderPortfolio)
page('/register', renderRegister)
page('/login', renderLogin)
page('/logout', renderLogout)




page.start();