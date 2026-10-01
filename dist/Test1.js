import { utils } from './Utils.js';
const unit_test = async () => {
    if (utils.add(2, 3) !== 5) {
        console.error(`Test Case 1 failed: expected 5, received ${utils.add(2, 3)}`);
        process.exit(1);
    }
    if (utils.add(3, 3) !== 6) {
        console.error(`Test Case 2 failed: expected 6, received ${utils.add(3, 3)}`);
        process.exit(1);
    }
};
unit_test();
export {};
//# sourceMappingURL=Test1.js.map