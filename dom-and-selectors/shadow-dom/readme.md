# Test Automation - The 'Dom' and dealing with selectors
## Common challenges and their solutions
## Selectors, their usage and pros/cons with different approaches

## Document Object Model
- Is the representation of your HTML Document as objects within a model
- Different implementations APIs in different browsers
- DOM is manipulated by Javascript
- The DOM is typically a "tree" data structure, starting at the root element, having nodes/child nodes etc
Tools - https://software.hixie.ch/utilities/js/live-dom-viewer/

## TODO:
# Demonstrate DOM basics:
1. querySelector
3. getElementById
4. appendChild
5. setAttribute
# DOM Manipulation
# DOM API:
1. Traverse the dom
2. Modify element styles
3. Handle events
4. Work with forms
5. Maipulate CSS classes
# Examples:
1. Dynamic content
2. Form Validation
3. Dynamic content loading
4. DOM event handling

## Shadow DOM
# Why?
The Shadow DOM is a method of encapsulating/scoping different parts of a web page.
- One example would be stopping styles that effect the document globally from affecting the shadow block
- DOM encapsulation for components, to stop the wider DOM form affecting your component
- Creating re-usable or third party components, the shadow DOM is a logical barrier/boundary
# What's the challenge?
- Some automation tools can't natively detect/pierce a shadow dom at the root element
- Therefore, some tools provide work arounds for this
- At the time of creation, Playwright & Selenium WebdriverIO work, however Cypress has problems unless you use specific built in shadow dom functions, see test examples
# Run the tests
1. Execute - node start-server.js (to host the html file) <- Required before doing anything

2. Execute - node sd-example-sel-fail-test.js (execute Selenium test)
3. Execute - npm test (will execute the playwright test under Jest)
4. Execute - npx cypress run (will run both cypress tests, one that fails and can't access the shadow DOM another that uses the built in SD functions in the cypress/e2e folder)