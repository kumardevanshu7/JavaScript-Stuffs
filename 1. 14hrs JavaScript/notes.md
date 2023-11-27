# JavaScript Notes

- **What is a Programming language?**

  - Giving instructions to a computer.

- **Syntax**

  - Structure of words in a sentence.
  - Rules of the language.

- **FrontEnd / BackEnd / FullStack**

  - Client Side/Front-End Web Development (Term 1)
    - HTML
    - CSS
    - JavaScript (JS)
  - Server Side Back-End (Term 2)
    - Java
    - Python, etc.
  - Full Stack
    - Combination Of Term 1 + Term 2
    - Called MERN
      - M → mongoDB
      - E → Express JS
      - R → React
      - N → Node JS

- Role Of Browser

  - It downloads HTML, CSS, JS.
  - Then browser renders that into a webpage.

- HTML

  - Full Form: HyperText Markup Language
  - Structure: Sets up the layout.

- CSS

  - Full Form: Cascading Style Sheets
  - Style: Sets the look and feel.

- JS

  - Full Form: JavaScript
  - JavaScript has nothing to do with Java.
  - Actions: Enables interactivity.
  - Events: Responds to user actions.
  - Data: Fetches and sends info to server.

- JavaScript Basic Terminology

  - JavaScript runs at the client side in the browser.
  - Coffee Script / TypeScript are transpiled to JavaScript.
    - Any code is transpiled to JavaScript in the end for browser execution.

- Numbers & Strings

  - Allen Solly Cart Offer Calculation
    - Original MRP: 2499
    - After 41% OFF: 2499 - 41/100 \* 2499 = 1474

  1. Types of Numbers
     - Integers
     - Negative Numbers: -4, -3, -2, -1
     - Whole Numbers: 0, 1, 2, 3, 4
     - Zero: 0
     - Natural Numbers: 1, 2, 3, 4
     - Use `Math.round()` function due to floating point precision issues.
       - `Math.round(18003.8618)` → `18004`

- Don’t Learn Syntax

  - Use Google
  - Use MDN
  - Use ChatGPT
  - Focus on understanding concepts, not just syntax.

- Strings

  - Strings hold textual data, ranging from single character to a paragraph.
  - Can be defined using: ‘ ’, “ ”, `
    - ‘ ’: single quotes
    - “ ”: double quotes (not usually used)
    - ` `: backticks (allowing expressions: `${ expression }`)
    - \n: newline
  - Concatenation
    - ‘name’ + ‘ please’ → name please
    - ‘got ’ + 4.5 → got 4.5
    - ‘4’ + ‘5’ → 45
    - Pay attention to brackets to prevent JS treating numbers as strings when used with strings.
      - ‘you have got ’ + 1 + 1 + 1 + ‘ votes’ → you have got 111 votes
      - ‘you have got ’ + (1 + 1 + 1) + ‘ votes’ → you have got 3 votes

- `typeof` operator
  - Tells you the data type of a variable.
  - It's a keyword.

# More JavaScript and Development Environment

- **Use IDE (Integrated Development Environment)**

  - Need of IDE
    - Code Auto-complete
    - Syntax Highlighting
    - Error Checking

- **Using VsCode**
  - Main Extensions
    - Live Server
    - Prettier
    - Line Wrap
      - Not an extension; used to avoid horizontal scroll bar: Use - `Alt + Z`
    - Tab Size from 4 to 2
      - To avoid extra spacing
- **HTML**

  - Basic Tags
    - Paragraph Tag: `<p> </p>`
    - Heading Tags: `<h1></h1>`, `<h2></h2>`, `<h3></h3>`, `<h4></h4>`, `<h5></h5>`, `<h6></h6>`
    - Button Tag: `<button> Click Me </button>`
    - Lorem: `<p>lorem21</p>` (Generate 21 random words), `<p>lorem90</p>` (Generate 90 random words)
    - Break Tag: `<br>`
    - Horizontal Line: `<hr>`
    - Anchor Tag: `<a href="yourlink" target="_blank"> Go </a>`
    - Div Tag: Acts as a container for other HTML elements. Non-Semantic Tag.
  - Basic HTML Page Intro
    - `<!DOCTYPE html>`: Defines the HTML Version
    - `<HTML>`: Root Element / Parent of all Tags
    - `<HEAD>`: Parent of metadata tags
    - `<TITLE>`: Title of the webpage
    - `<BODY>`: Parent of content tags
  - HTML DOM
    - `document.html.body` to select the element
  - HTML Attribute
    - For Additional Information: `<tag attribute=" " > text content </tag>`

- **CSS**

  - Selector
    - Element Selector: `h1{ }`
  - ID & Class Attribute
    - ID Property: Assigns a unique identifier to a single HTML document. Target By: `#id_name` (Rarely Used)
    - Class Property: Cannot be unique and used multiple times. Target By: `.class_name` (Mostly Used)

- **JavaScript**
  - Query Selector using kabab case (name-name)
    - `getElementById('id-name')` → not used mostly
    - `getElementByClassName('class-name')` → not used mostly
    - `querySelector` → MOSTLY USED
      - `document.querySelector('h1')`
      - `document.querySelector('#id-name')`
      - `document.querySelector('.class-name')` → Select only one class
      - `document.querySelectorAll('.class-name')` → Select multiple classes
  - Main Pre-Defined Keywords
    - `alert()`
    - Console Messages Types:
      - `console.log()`
      - `console.warn()` (show in yellow color)
      - `console.error()` (show in red color)
      - `console.clear()` (clear the console)
    - Make button functional
      - onclick(): `onclick="alert('Deepu Kissed Me')"`
      - click(): `document.querySelector('#button').click();`

# More JavaScript Concepts

- **Variables**

  - Containers used for storing data values.
  - Ways to Create Variables
    - `var`: Accessible from outside.
    - `const`: Value can't be changed after initialization.
    - `let`: Block-scoped; works within defined brackets.

- **Naming Conventions**

  - Suggestions for case styles:
    - camelCase: myVariableName
    - snake_case: my_variable_name
    - Kebab-case: my-variable-name (more common in HTML + CSS)

- **eval Method**

  - Code Example: `eval('')`

  ```jsx
  // normal math
  console.log(45 + 78); // 123

  // number with string
  console.log(45 + "78"); // 4578

  // using eval
  console.log(eval(45 + "78")); // 4578

  // right way to use Eval Method
  console.log(eval("45+78")); // 123
  ```

- **If-else & Boolean**

  - Booleans: Can only be True or False.
    - `'True'` is a String, not a Boolean when in quotes `‘ ’`.
  - Equality:
    - `==`: Checks value.
    - `===`: Checks value and data type.
  - Inequality:
    - `!=`: Checks value.
    - `!==`: Checks value and data type.
  - Relational:
    - `>`: Greater Than.
    - `<`: Less Than.
    - `>=`: Greater than or equal to.
    - `<=`: Less than or equal to.

- **Math.Random()**

  - Code Example:

  ```jsx
  // show number between 0 to 1
  Math.random();
  Math.random();
  Math.random();

  // show number between 0 to 10
  Math.random() * 10;
  Math.random() * 10;
  ```

- **Logical Operators**

  - AND: `&&`
  - OR: `||`
  - NOT: `!`

- **Scope**

  - `Let`: Variables created inside `{}` remain inside `{}`.
  - `Var`: Doesn't strictly follow scope.
  - `Global Scope`: Accessible everywhere.
  - `Block Scope`: Limited to a block, especially with let and const.

- **Truthy and Falsy Values**

  - Falsy Values: `0`, `null`, `undefined`, `false`, `NaN`, `“”` (Empty String)
  - Truthy Values: everything else

- **If Alternative**

  - Ternary Operator: `condition ? trueValue : falseValue`
  - Guard Operator

    ```jsx
    let age = 23;
    let finalAge = age || 18;
    console.log(finalAge); // output -> 23

    let age; // when age is undefined
    let finalAge = age || 18;
    console.log(finalAge); // output -> 18
    ```

  - Default Operator: `age ?? 18`
    - Specifically for null or undefined values, unlike guard operator.

- **Functions**
  - Blocks of Reusable Code.
  - Based On DRY Principle - `Don’t Repeat Yourself`.
  - Return Statement: Sends a value back from a function.
  - _Parameters_ and _Arguments_: Input values that a function takes.
    - `function age(him, her)`: him and her are `Parameters`.
    - `age(23, 34)`: 23, 34 are `Arguments`.
  - Default Parameters: `function age (age = 23){ ... }`

# Advanced JavaScript Concepts and DOM Manipulation

- **Objects**

  - Definition: Groups multiple values together in key-value pairs.

    - Use: `{ ... }`
    - Access Value:
      - Dot notation: `.`
      - Bracket notation: `[' ... ']`

  - `delete` keyword

    ```jsx
    let girl = {
      Gname: "Deepu",
      age: 23,
    };

    delete girl.Gname; // this deletes the property
    ```

  - Functions inside an object are called **Methods**.

  - Autoboxing

    - Automatic conversion of **_Primitives to Objects_**.

  - **Important Note:**

    - When **_comparing with ==_**, **you’re comparing references**, not content.

  - Objects Shortcuts - De-Structuring

    ```jsx
    let girl = {
      name: "Deepu",
      age: 23,
      display() {
        return `Name is ${girl.name} and age is ${girl.age}`;
      },
    };

    console.log(girl.display());

    let { name, age } = girl; // destructing
    console.log(name);
    console.log(age);
    ```

- **JSON, Local Storage, Date & DOM**

  - JSON.Stringify and JSON.Parsing

    ```jsx
    let girl = {
      name: "Zainab",
      herAge: 23,
      herReview: {
        stars: 4.5,
        noOfReviews: 987,
      },
    };

    let str = JSON.stringify(girl);
    console.log(str);

    let newProd = JSON.parse(str);
    console.log(newProd);
    ```

  - **JSON Queries**

    - JSON (JavaScript Object Notation) is a standard data format used for storing and transmitting data.

    // The provided content seems to be an explanation or introduction to JSON. For the sake of brevity, I didn't include this part again.

  - Local Storage

    - For persistent data storage in the browser.
    - Only strings can be stored.

  - Date

    - Demo Code provided for Date manipulation.

  - DOM Properties & Methods
    - Properties like location, title, href, domain, innerHTML, innerText, classList.
    - Methods like `getElementById()`, `querySelector()`, classList's `add()`, `remove()`, `createElement()`, `appendChild()`, `removeChild()`, `replaceChild()`.

# Arrays, Loops, Accumulator Pattern, Break & Continue

- **Array**
  - List of Values
  - Special type of Object with Square Brackets `[ ]`
  ```jsx
  let random = [1, "Deepu", null, true, { Rate: 8 }];
  console.log(random);
  ```
- **Array Properties & Methods**

  - Arrays use reference like objects.
  - **De-Structuring** works for arrays.
  - `Array.isArray(*variable_name*)` checks if a variable is an array.
  - `Length()` tells the length.
  - **Common Methods:**
    - `push/pop` → add or remove to **end**.
    - `unshift/shift` → add or remove from **start**.
    - `splice` → add or remove elements.
    - `slice` → create a copy of array with Starting and Ending Index.
    - `toString` → convert to string.
    - `sort` → sort elements.
    - `valueOf` → get array itself.

- **Loops**
  - Runs multiple times based on a condition.
  - Types: `for`, `while`, `do while`.
- **Accumulator Pattern**

  - A pattern to accumulate values through looping.
  - Common Scenarios: Sum all the numbers in an array, create a modified copy of an array.

- **Break & Continue**
  - `Break` stops a loop early.
  - `Continue` skips one iteration.

## Advanced Functions

- Anonymous Functions As Values

  ```jsx
  let sum = function (num1, num2) {
    return num1 + num2;
  };
  console.log(sum(4, 9));

  let newSum = sum;
  console.log(newSum(6, 5));

  console.log(newSum(sum(6, 10), 4));
  ```

  - Functions without names can be used as arguments.
  - JavaScript functions are first-class citizens; they can be assigned to variables.

- Arrow Functions

  - Concise way to write anonymous functions.

  ```jsx
  let sum = function (n1, n2) {
    return n1 + n2;
  };
  console.log(sum(4, 7));

  let newSum = (n1, n2) => {
    return n1 + n2;
  };
  console.log(newSum(5, 2));
  ```

  - Round brackets for a single argument are optional.
  - Curly braces and return keyword are optional for single-line expressions.

- setTimeout & setInterval

  - Functions for executing code asynchronously after a delay.
  - setTimeout runs once; setInterval runs repeatedly.

- Event Listener
  - Listens for events like clicks, mouse movement, keyboard input.
  - Multiple Listeners can be added.
  - Example:
    ```jsx
    let btn = document.querySelector("#event-l");
    btn.addEventListener("click", () => {
      console.log("Hello Deepu...");
    });
    ```
- For Each Loop

  - Array method for iteration, often preferred for readability.
  - Not suitable for using return as it works like a continue statement.

  ```jsx
  let arr = [2, 4, 1, "Deepu"];

  arr.forEach(function (items) {
    console.log(items);
  });

  arr.forEach((items) => console.log(items));
  ```

- **Filter Method:**

  - Syntax: `array.filter((value, index) ⇒ return true/false)`

  ```jsx
  let arr = [1, 2, 3, 4, 5, 6, 7];

  let newArr = arr.filter((num, idx) => {
    if (num % 2 === 0) {
      return true;
    } else {
      return false;
    }
  });

  console.log(newArr);
  ```

- **Map Method**:

  - Syntax: `array.map((value) ⇒ return newValue)`

  ```jsx
  let arr = [1, 2, 3, 4, 5, 6, 7];

  let squares = arr.map((num) => {
    return num * num;
  });

  squares.forEach((nums) => console.log(nums));

  let newSquares = arr.map((num) => num * num);
  newSquares.forEach((nums) => console.log(nums));
  ```
