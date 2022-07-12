import { GetConfigBuilder } from '../../client-sdk/getConfigs/getConfigs.js';
import { AxiosClient } from '../../client-sdk/client.js';

/**
 * get Configs
 * Returns { cashInConfig, cashOutNaturalConfig, cashOutLegalConfig }.
 */
export const getConfigs = async () => {
    const client = new AxiosClient('');

    const makeRequestCashIn = new GetConfigBuilder().cashIn().build();
    const makeRequestCashOutNatural = new GetConfigBuilder()
        .cashOutLegal()
        .build();
    const makeRequestCashOutLegal = new GetConfigBuilder()
        .cashOutNatural()
        .build();

    const cashInConfig = await client.execute(makeRequestCashIn);
    const cashOutNaturalConfig = await client.execute(
        makeRequestCashOutNatural
    );
    const cashOutLegalConfig = await client.execute(makeRequestCashOutLegal);

    return { cashInConfig, cashOutNaturalConfig, cashOutLegalConfig };
};
