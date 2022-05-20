import * as authSDKService from './../services/authSDKService.js'

export function renderLogout(ctx) {
    authSDKService.logout(ctx);
};