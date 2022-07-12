import { calculateCashIn } from '../helpers/cashIn';

describe('Test calculateCashIn function', () => {
    test('cash in', () => {
        const data = { operation: { amount: 5000 } };
        const option = { config: { percents: 0.03, max: { amount: 5 } } };

        const result = calculateCashIn(data, option);

        expect(result).toEqual('1.50');
    });

    test('Calculate cash in whit max commission', () => {
        const data = { operation: { amount: 5000 } };
        const option = { config: { percents: 0.03, max: { amount: 1 } } };

        const result = calculateCashIn(data, option);

        expect(result).toEqual('1.00');
    });
});
