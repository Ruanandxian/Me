const assert = require('assert');

const hello = require('../hello');

describe('#async hello', () => {
    describe('#asyncCalculate()', () => {
        // function(done) {}
        // 标准的
        it('#async with done', (done) => {
            (async function () {
                try {
                    let r = await hello();
                    assert.strictEqual(r, 15);
                    done();
                } catch (err) {
                    done(err);
                }
            })();
        });
        // 简化后的异步写法
        it('#async function', async () => {
            let r = await hello();
            assert.strictEqual(r, 15);
        });

        it('#sync function', () => {
            assert(true);
        });
    });
});