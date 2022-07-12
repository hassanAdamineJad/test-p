import fs from 'fs';

/**
 * Read a file by file name
 * Returns data of a file that name is passed to the function.
 * @param {string} fileName
 */

export const readDataByFileName = (fileName) => {
    let result;
    return new Promise((resolve) => {
        fs.readFile(fileName, (err, data) => {
            if (err) {
                throw err;
            } else {
                result = JSON.parse(data);
                resolve(result);
            }
        });
    });
};
