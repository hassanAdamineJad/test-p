import { GetConfigBuilder } from '../getConfigs.js';
import { AxiosClient } from '../../client.js';

describe('Test get all config', () => {
    test('get cashIn config', async () => {
        const client = new AxiosClient('');
        const request = new GetConfigBuilder().cashIn().build();
        const cashInConfig = await client.execute(request);

        expect(cashInConfig).toHaveProperty('percents');
        expect(cashInConfig).toHaveProperty('max');
        expect(cashInConfig.max).toHaveProperty('amount');
    });

    test('get cashOut legal config', async () => {
        const client = new AxiosClient('');
        const request = new GetConfigBuilder().cashOutLegal().build();
        const cashOutLegalConfig = await client.execute(request);

        expect(cashOutLegalConfig).toHaveProperty('percents');
        expect(cashOutLegalConfig).toHaveProperty('week_limit');
        expect(cashOutLegalConfig.week_limit).toHaveProperty('amount');
    });

    test('get cashOut person config', async () => {
        const client = new AxiosClient('');
        const request = new GetConfigBuilder().cashOutNatural().build();
        const cashOutNaturalConfig = await client.execute(request);

        expect(cashOutNaturalConfig).toHaveProperty('percents');
        expect(cashOutNaturalConfig).toHaveProperty('min');
        expect(cashOutNaturalConfig.min).toHaveProperty('amount');
    });
});
