import { BASE_URL_CONFIGS } from '../BaseUrl.js';

export class GetConfigBuilder {
    config = {
        method: 'GET',
        url: `${BASE_URL_CONFIGS}/cash-in`,
    };

    cashIn() {
        this.config.url = `${BASE_URL_CONFIGS}/cash-in`;
        return this;
    }

    cashOutLegal() {
        this.config.url = `${BASE_URL_CONFIGS}/cash-out-natural`;
        return this;
    }

    cashOutNatural() {
        this.config.url = `${BASE_URL_CONFIGS}/cash-out-juridical`;
        return this;
    }

    build() {
        return this.config;
    }
}
