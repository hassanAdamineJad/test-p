/**
 * calculate commission for cashIn type
 * Returns commissionFee.
 * @param {Object} data.operation
 * @param {number} data.operation.amount - The amount of an operation.
 * @param {string} data.operation.currency - The currency of an operation.
 * @param {Object} options
 * @param {Object} options.config - configuration
 * @param {number} options.config.percents - percents commission
 * @param {Object} options.config.max
 */

export const calculateCashIn = (data, options = {}) => {
    const {
        operation: { amount },
    } = data;
    const {
        config: { percents, max },
    } = options;

    const normalCommissionFee = (amount * percents) / 100;
    let commissionFee = 0;

    if (max.amount && normalCommissionFee > max.amount) {
        commissionFee = max.amount;
    } else {
        commissionFee = normalCommissionFee;
    }

    return commissionFee.toFixed(2);
};
