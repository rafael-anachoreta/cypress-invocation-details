const { Runner, reporters } = require('mocha')
const { Base } = reporters
const {
  EVENT_RUN_END,
  EVENT_TEST_FAIL,
  EVENT_TEST_PASS,
  EVENT_TEST_PENDING,
  EVENT_TEST_RETRY,
} = Runner.constants

class MyReporter extends Base {
  constructor(runner, options) {
    super(runner, options)

    runner
      .on(EVENT_TEST_PASS, test => {
        console.log('Passed:', test.invocationDetails)
      })
      .on(EVENT_TEST_FAIL, test => {
        console.log('Failed:', test.invocationDetails)
      })
      .on(EVENT_TEST_PENDING, test => {
        console.log('Pending', test.invocationDetails)
      })
      .on(EVENT_TEST_RETRY, test => {
        console.log(`Retried (attempt #${test.currentRetry + 1}):`, test.invocationDetails)
      })
      .once(EVENT_RUN_END, () => {
        console.log('End of run')
      })
  }
}

module.exports = MyReporter
