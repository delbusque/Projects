import { render } from 'https://unpkg.com/lit-html?module';

const mainAreaElement = document.querySelector('.main-area');

export function renderMainMiddleware(ctx, next) {

    ctx.render = (templateResult) => {
        render(templateResult, mainAreaElement);
    }

    next();
};