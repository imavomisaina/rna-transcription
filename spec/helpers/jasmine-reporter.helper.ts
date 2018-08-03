import 'jasmine';
import * as JasmineConsoleReporter from 'jasmine-console-reporter';
const reporter = new JasmineConsoleReporter({
    colors: 1,
    cleanStack: 1,
    verbosity: 4,
    listStyle: 'indent',
    activity: false,
    emoji: true,
    beep: true
});
jasmine.getEnv().addReporter(reporter);