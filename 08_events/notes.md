# HTML Events

HTML events are actions or occurrences that can be detected by web browsers and used to trigger JavaScript code. These events can be related to user interaction, browser actions, or the loading of a webpage. Here's a list of common HTML events:

1. **onload**: Fires when the browser has finished loading the entire page.
2. **onunload**: Fires when the user navigates away from the page.
3. **onclick**: Fires when the user clicks on an element.
4. **onmouseover**: Fires when the user moves the mouse pointer over an element.
5. **onmouseout**: Fires when the user moves the mouse pointer out of an element.
6. **onkeydown**: Fires when a key is pressed down.
7. **onkeyup**: Fires when a key is released.
8. **onkeypress**: Fires when a key is pressed and released.
9. **onchange**: Fires when the value of an input element changes (e.g., input field or select dropdown).
10. **onsubmit**: Fires when a form is submitted.
11. **onfocus**: Fires when an element receives focus.
12. **onblur**: Fires when an element loses focus.
13. **onresize**: Fires when the browser window is resized.
14. **onscroll**: Fires when an element's scrollbar is scrolled.
15. **onerror**: Fires when an error occurs while loading an external resource (like an image).

These events can be captured and handled using JavaScript by assigning event handler functions to corresponding event attributes in HTML elements, or by using modern event binding methods provided by JavaScript libraries or frameworks.

# Are HTML Events Asynchronous?

HTML events themselves are not inherently asynchronous. They represent specific moments or actions that occur within a web page or document. However, the handling of these events can involve asynchronous operations, especially when JavaScript code is used to respond to them.

For example, consider an `onclick` event attached to a button. When the user clicks the button, the corresponding event handler function might perform asynchronous tasks such as making an AJAX request to fetch data from a server or performing some other non-blocking operation. In this case, the event handling process involves asynchronous behavior.

Similarly, events like `onload` or `onreadystatechange` which are commonly used to handle the loading of external resources like images or scripts can also involve asynchronous behavior, as the browser may need to wait for the external resource to load before triggering the event.

So while HTML events themselves are not asynchronous, the actions triggered by these events or the event handling code written in JavaScript may involve asynchronous operations.



# Why Adding onclick to Inline HTML is Not Recommended

When it comes to handling events in web development, adding JavaScript event handlers directly to inline HTML attributes (`onclick`, `onmouseover`, etc.) is not considered a good practice. Here are several reasons why:

1. **Mixing Concerns**: This approach mixes the presentation layer (HTML) with the behavior layer (JavaScript), violating the principle of separation of concerns. This makes the code harder to read, maintain, and debug.

2. **Readability and Maintainability**: Inline event handlers can clutter the HTML markup, making it less readable and harder to maintain, especially in larger projects.

3. **Limited Functionality**: Inline event handlers have limited capabilities compared to using external JavaScript files or script tags. Complex interactions and functionalities are harder to implement and maintain inline.

4. **Accessibility**: Inline event handlers can make it difficult to ensure accessibility for users with disabilities, as they may not be compatible with certain assistive technologies.

5. **Security Risks**: Inline event handlers can introduce security risks like cross-site scripting (XSS) attacks if not properly sanitized or validated.


