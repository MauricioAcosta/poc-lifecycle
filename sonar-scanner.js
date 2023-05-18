const scanner = require('sonarqube-scanner');

scanner(
  {
    serverUrl: 'http://localhost:9000',
    options: {
      'sonar.sources': './src',
      'sonar.exclusions': '**/node_modules/**',
      'sonar.tests': './__tests__',
      'sonar.test.inclusions': '**/*.spec.ts,**/*.test.ts,**/*.spec.js,**/*.test.js',
      'sonar.typescript.lcov.reportPaths': './coverage/lcov.info',
      'sonar.testExecutionReportPaths': './test-report.xml',
      'sonar.typescript.tslint.reportPaths': 'tslint-report.json',
      'sonar.typescript.lcov.reportPaths': 'coverage/lcov.info',
      'sonar.typescript.coveragePlugin': 'lcov',
      'sonar.sourceEncoding': 'UTF-8',
    },
  },
  () => process.exit()
);
