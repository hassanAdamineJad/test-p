import { readDataByFileName } from './utils/readDataByFileName.js';
import { commissionFees } from './commissionFees/index.js';

const main = async () => {
    const fileNames = process.argv.splice(2);
    const dataFromFile = await readDataByFileName(fileNames[0]);
    const commissionFeesInfo = await commissionFees(dataFromFile);
    for (let i = 0; i < commissionFeesInfo.length; i++) {
        console.log(commissionFeesInfo[i]);
    }
};

try {
    main();
} catch (e) {
    console.log('Main', { e });
}
