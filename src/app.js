import { readDataByFileName } from './utils/readDataByFileName.js';
import { commissionFees } from './commissionFees/index.js';

const main = async () => {
    const fileNames = process.argv.splice(2);
    const dataFromFile = await readDataByFileName(fileNames[0]);
    const commissionFeesInfo = await commissionFees(dataFromFile);
    console.log({ commissionFeesInfo });
};

try {
    main();
} catch (e) {
    console.log('Main', { e });
}
