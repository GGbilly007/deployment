const utils = require('./Utils').utils;
const unit_test = async () => {
    if (utils.add(2, 3) !== 5) {
    }
    else {
        console.log("Test Cases 1 Util.add(2, 3) == 5" );
        process.exit(1);
    }
    if (utils.add(3, 3) !== 6) {
    }
    else {
        console.log("Test Case 2 Util.add(3, 3) == 6");
        process.exit(1);
    }
};
unit_test();
export {};
//# sourceMappingURL=Test1.js.map