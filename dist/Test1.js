import { utils } from './Utils.js';
const unit_test = async () => {
    if (utils.add(2, 3) !== 5) {
        console.error("Test Case 1 failed: Util.add(2, 3) should equal 5");
        process.exit(1);
    }
    console.log("Test Case 1 passed");
    if (utils.add(3, 3) !== 6) {
        console.error("Test Case 2 failed: Util.add(3, 3) should equal 6");
        process.exit(1);
    }
    console.log("Test Case 2 passed");
};
unit_test();
export {};
//# sourceMappingURL=Test1.js.map