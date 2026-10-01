import { utils } from './Utils.js';
const unit_test = async () => {
    if (utils.add(2, 3) !== 5) {
        console.log("Test Case 1 Util.add(2, 3) == 5");
        process.exit(1);
    }
    if (utils.add(3, 3) !== 6) {
        console.log("Test Case 2 Util.add(3, 3) == 6");
        process.exit(1);
    }
};
unit_test();
export {};
//# sourceMappingURL=Test1.js.map