# UserWay App Cypress

## Intro

The `@userway/app-cypress` is an NPM package designed to help you perform accessibility testing on your web pages. With it you can easily run static page analysis on a webpage and get a detailed report of accessibility violations based on WCAG guidelines and ACT rules. The library extends Cypress's `cy` commands, making it easy to integrate into your testing workflow by using a few lines of code.

```tsx
// cypress/e2e/my-test.js

it('basic example', () => {
  cy.visit('some example website')
  cy.userwayAnalysis()
})
```

## Prerequisites

Cypress version `10.0.0` or higher

## Distribution

UserWay App Cypress is distributed as a zip-packaged NPM module and should be installed as an NPM dependency.

## Installation

First, extract the provided `userway-cypress-app.zip` inside of a separate
directory, like `src/packages`:

```
src
└── packages
   ├── userway-app-cypress.zip
   └── userway-app-cypress
```

Install `userway-app-cypress` with `npm install`:

```
npm install src/packages/userway-cypress-app
```

This adds `@userway/app-cypress` to the dependencies in `package.json`.

## Setup

`UserWay App Cypress` extends Cypress's `cy` commands.

Add this import to your Cypress's support file (usually `cypress/support/e2e.js`):

```ts
import '@userway/app-cypress'
```

Now you have access to `cy.userwayAnalysis` and `cy.userwaySaveReport` in your Cypress's tests.

## Types

If you are using TypeScript, add `@userway/app-cypress` to `types` section in your tsconfig.json:

```json
{
  "compilerOptions": {
    "types": ["cypress", "@userway/app-cypress"]
  }
}
```

If you are not using TypeScript, you can still have autocompletion available
by adding type references to your tests:

```ts
/// <reference types="cypress" />
/// <reference types="@userway/app-cypress" />

// ↑ Add this at the top of your test
```

## Usage

This example shows how to use UserWay App Cypress to run static page analysis on a webpage:

```ts
it('Evinced basic example', () => {
  // Visit a target page
  cy.visit(
    'we need to deploy some demo page (Evinced demo: https://demo.evinced.com/)',
  )
  // Run static analysis
  cy.userwayAnalysis()
})
```

By default, UserWay App Cypress scans the page for AA violations and asserts on the number of issues, but you can easily customize it's behavior.

## API

### `cy.userwayAnalysis(config: AnalyzeConfig): AnalysisResult`

Runs static analysis on the current page and returns a result object that contains violations. By default asserts that the number of violations is equal to zero.

Default config:

```ts
cy.userwayAnalysis({
  strict: true,
  level: 'AA',
})
```

To make manual assertion you can use `strict: false`:

```ts
cy.userwayAnalysis({ strict: false }).then((res) => {
  expect(res.violations).to.have.length(0)
})
```

Full config:

```ts
type Config = {
  excludeRules: string[] // Provide a list of rules that should be excluded
  failInapplicable: boolean // *Maybe remove*
  failIncomplete: boolean // *Maybe remove*
  strict: boolean // Set to `false` if you want to manually process the result without automatic assertion
  includeBestPractices: boolean // Set to `true` if you want to use best practices rules
  includeExperimental: boolean // Set to `true` if you want to use experimental rules
  includeRules: string[] // Provide a list of rules that should be included
  level: 'A' | 'AA' | 'AAA' | null // Conformance level (`null` disables all A, AA and AAA rules)
  onResult: (data: Result) => void // Hook that called when result is ready
  saveReport: 'html' | 'json' | 'csv'
  reportPath: string // Provide path to folder where to store artifacts ( global configuration only ) Default is "uw-a11y-reports"
  screenshots: boolean // Set to `true` if you want save a screenshots of violations
  ignoreSelectors: string[] // Specify selectors for elements that should be ignored. Default is ["data-userway-app-ignore"]
  switchOff: boolean // Allows to turn off rules check without any modification of the tests
}
```

Examples:

```ts
// Save HTML report and screenshots
cy.userwayAnalysis({
  saveReport: 'html',
  screenshots: true,
})

// Enable all rules
cy.userwayAnalysis({
  level: 'AAA',
  includeBestPractices: true,
  includeExperimental: true,
})

// Enable best practices and experimental rules only
cy.userwayAnalysis({
  level: null,
  includeBestPractices: true,
  includeExperimental: true,
})

// Enable rules from includeRules parameter only
cy.userwayAnalysis({
  level: null,
  includeRules: ['duplicate-id', 'color-contrast'],
})

// Disable all rules
cy.userwayAnalysis({
  level: null,
})

// Manually assert
cy.userwayAnalysis({ strict: false }).then((res) => {
  const { fullReport, violations } = res
  // Log the full report
  console.log(fullReport)

  // Save JSON report
  cy.userwaySaveReport(violations, 'json')

  // Assert
  expect(violations).to.have.length(0)
})
```

### `cy.userwaySaveReport(config: SaveReportConfig): void`

Save violation report in manual control mode. It's handy when you need to save report conditionally, based on violations reported or your own custom logic.

`cy.userwaySaveReport` depends on report from `cy.userwayAnalysis` and requires `violations` data to be provided.

Output format and path where to store report could be provided by configuring `format` and `reportPath` parameters in global configuration.

In order to have screenshots attached to report, you need to provide `screenshotsMeta` to `cy.userwaySaveReport`
This data can be extracted from `cy.userwayAnalysis` if `screenshots` parameter passed in the method config.

Note: Make sure `reportPath` provided to `cy.userwaySaveReport` and path defined in global config are the same to make screenshots be accessible in the report.

Example:

```ts
import { setupUserway } from '@userway/app-cypress'

setupUserway({
  reportPath: 'uw-a11y-reports',
})

cy.userwayAnalysis({
  strict: false,
  screenshots: true,
}).then((res) => {
  const { fullReport, violations, screenshotsMeta } = res

  // Save JSON report
  cy.userwaySaveReport({ violations, format: 'json' })

  // Save CSV report with custom report path
  cy.userwaySaveReport({
    violations,
    format: 'csv',
    reportPath: 'uw-a11y-reports',
  })

  // Save HTML report with screenshots of violated elements
  cy.userwaySaveReport({ violations, format: 'html', screenshotsMeta })
})
```

### Config

#### level

Specify the conformance level. Possible values: `A`, `AA`, `AAA`. Default is `AA`.

#### ignoreSelectors

List of selectors for elements to ignore. Accepts an array of strings. Default selector is "data-userway-app-ignore"

Note: use "ignoreSelectors" only to exclude specific elements, avoid using it in root element like body, head, html ( for such elements you can manually exclude related rules )
To see list of all rules related to html or body elements refer to "Rules" section.

#### ignoreUrls

Use this parameter if you need to skip a tests that open specific URLs.
Accepts an array of valid RegExp. Default is `undefined`

Examples:

```ts
cy.userwayAnalysis({
  ignoreUrls: [/localhost:3000/, /example.com/],
  // Ignore a specific domain
})
```

```ts
cy.userwayAnalysis({
  ignoreUrls: [/home/, /http:/],
  // Ignore any url that contains specified string
})
```

```ts
cy.userwayAnalysis({
  ignoreUrls: [/home/, /settings\/privacy/],
  // Ignore a specific path
})
```

```ts
cy.userwayAnalysis({
  ignoreUrls: [/home\/*/, /settings\/*/],
  // Ignore a specific path and any of its subdirectories or path segments
})
```

#### saveReport

Specify format for accessibility reports. Possible values: `html`, `json`, `csv`

#### reportPath

Specify custom path where to store accessibility reports and artifacts. Could be specified only in global configuration. Default is `uw-a11y-reports`

#### screenshots

Specify whether screenshots should be saved.

Note: Enabling the screenshots feature may have an impact on performance.

#### includeRules

List of rules to include. Accepts an array of rule IDs. Default is `[]`.

#### excludeRules

List of rules to exclude. Accepts an array of rule IDs. Default is `[]`.

Note, that this parameter has higher priority then `includeRules`.
It means that same rule provided to `includeRules` and `excludeRules` parameters will be ignored. 

#### includeBestPractices

Specify whether to include best practices rules. Default is `false`.

#### includeExperimental

Specify whether to include experimental rules. Default is `false`.

#### strict

Specify whether to make assertion on the number of accessibility violations. Default is `true`

### Global configuration

In order to avoid providing configuration for each execution of `cy.userwayAnalysis` command you can define global configuration once on Cypress setup or configuration step

There are two options to provide global configuration:

1. Define configuration in cypress.config file using special field `userwayAppConfig`
2. Provide global configuration during Cypress setup with `setupUserway()` method call

Note: Both options could be combined but make sure to call `setupUserway()` only once during Cypress setup

#### Global configuration as a cypress.config parameter

```js
// cypress.config.js
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    specPattern: 'dev/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: false,
  },
  userwayAppConfig: { saveReport: 'html' },
})
```

#### Global configuration passed to `setupUserway()` method

```js
// cypress/support/e2e.js
import { setupUserway } from '@userway/app-cypress'

setupUserway({
  strict: true,
  level: 'AA',
  reportPath: 'uw-a11y-reports',
})
```

#### Configuration override

There are three options to provide configuration to static analysis:

1. Provide configuration to `cypress.config` file
2. Provide configuration to `setupUserway()` method call in setup file ( e2e.js file for example )
3. Provide configuration to `cy.userwayAnalysis` command call directly

The rule of thumb is that specific method override more general definition

For example: 

```js
// cypress/support/e2e.js
import { setupUserway } from '@userway/app-cypress'

setupUserway({
  level: 'AA',
  ignoreUrls: [/localhost:3000/],
})

// some cypress test file

cy.userwayAnalysis({
  level: 'A',
  ignoreUrls: [/home/],
})

// ends up with such configuration
// {
//    level: 'A',
//    ignoreUrls: [/home/, /localhost:3000/]
// }
```

Note that types like arrays and objects won't be overridden, they will be merged with previous defined values

### Rules

These kind of rules are reviewing html or body element, and if you want to ignore these elements - exclude the rules that check them.

- aria-hidden-body
- bypass
- bypass-heading
- bypass-landmark
- bypass-move-focus
- css-orientation-lock
- document-title
- html-has-lang
- html-lang-valid
- html-xml-lang-mismatch
- meta-viewport
- meta-viewport-large
- page-has-heading-one
- valid-lang

### Reports

#### Document boundary selector

This selector `>>>` is used to represent the relation between a document and its subdocument like
document - iframe, document - Shadow DOM, iframe - iframe, etc. In the report it means that violated element located inside a subdocument.

#### OutputType

The `outputType` field in violation reports can contain `group` as a value, and it means that violated elements grouped by issue root cause.
It is very handy for violations with duplicate values ( like: ids, alt attributes, landmarks )

Examples for `duplicate-id` rule violation:

```html
<div>
  <span id="one">goes to the first group</span>
  <p id="two">goes to the second group</p>
  <span id="two">also goes to the second group</span>
  <p id="one">goes to the first group</p>
</div>
```

In such case extra field `issuesGroup` added to report and contains grouped elements by ID attribute which was duplicated.

```
{
    issuesGroup: {
        one: [issue('span#one'), issue('p#one')],
        two: [issue('p#two'), issue('span#two')],
    }
}
```

#### Report path customization

There is a parameter `reportPath` from the config that can be used to customize the output path for accessibility reporting.

The path should be relative to the project directory from where `cypress` command is executed.

In the following example folder `artifacts-results` will be created in the same level where cypress command is executed ( most probably with the package.json file )
The reports folder will contain HTML file with output and another folder with related screenshots ( because `screenshots: true` passed to static analysis function )

To provide easier access to specific test results reports in the folder grouped by test's title.

```ts
// cypress/support/e2e.js
import { setupUserway } from '@userway/app-cypress'

setupUserway({
  reportPath: 'uw-a11y-reports',
})

cy.userwayAnalysis({
  saveReport: 'html',
  screenshots: true,
})
```

#### Report structure

Reports are saved to a folder specified by `reportPath` or the default one `uw-a11y-reports` folder from the project root. The reports folder has the following structure:

`reports` - folder with accessibility reports that contain violation information and references to other artifacts.
`pages` - folder with original HTML documentation of web pages that have been tested
`screenshots` - folder with screenshots of found accessibility violations ( only with enabled screenshots feature )

### Error messages and recommendations

Each violation in the report contains two fields `errorMessage` and `recommendation` that refer to WCAG standard and provided for better understanding of the violation's root cause with the guidelines of how to fix it.

#### Violation variations

Some violations might have a few root causes. For example, the rule `image-alt` can be violated by missed `alt` attribute or by having it unfilled with an empty string.
The field `variant` in the violated element selector points to related information described in`errorMessage` and `recommendation` that helps to identify the root cause and appropriate fixes more granularly.

### Global Switch

Global Switch allows to switch off or switch on accessibility analysis. It could be needed, for example, while debugging tests in your local environment with or without static analysis tool.

There are two options to switch functionality off:

1. Provide `switchOff: true` config parameter to global configuration or `setupUserway` method call.

```js
// cypress.config.js
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    specPattern: 'dev/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: false,
  },
  userwayAppConfig: { 
    switchOff: true, 
    reportPath: 'uw-a11y-reports' 
  },
})
```

```js
// cypress/support/e2e.js
import { setupUserway } from '@userway/app-cypress'

setupUserway({
  reportPath: 'uw-a11y-reports',
  switchOff: true,
  level: 'AA',
})
```

Note: `switchOff` parameter can be also specified for `cy.userwayAnalysis` method call.

2. Define environment variables `STATIC_ANALYSIS_SWITCH_OFF=true` before cypress tests execution

```bash
cypress open --config-file dev/cypress.config.js --browser chrome --e2e --env STATIC_ANALYSIS_SWITCH_OFF=true
```

For more information about Cypress environment variables please refer to official documentation:

https://docs.cypress.io/guides/guides/environment-variables
