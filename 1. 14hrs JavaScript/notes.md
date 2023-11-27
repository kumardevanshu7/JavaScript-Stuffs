> ## Console Playing
>
> - alert('Hello Deepu')
> - Do Maths Calculation

<br>

> ## DOM Manipulation
>
> - document.body.innerHTML = "Love You Deepu"
> - document.getElementsByTagName('b')[0].style.fontSize = '40px'

<br>

> ## What is a Programming language?
>
> Giving instructions to a computer

<br>

> ## Syntax
>
> - Structure of Words in a sentence.
> - Rules of the language.

<br>

> ## FrontEnd / BackEnd / FullStack
>
> - Term 1 = `Client Side/Front-End Web Development` (CSS+HTML+JS)
> - Term 2 = `Server Side Back-End` (Java, Python)
> - Term 3 = `Full Stack` --> Means Mixture Of Term 1 + Term 2 (MERN)
> - `MERN` = M-> mongoDB, E-> Express, R-> React, N-> NodeJS

<br>

> ## Role Of Browser
>
> - Its Download `HTML` `CSS` `JS`
> - Then Browser `Rendering` That into `WebPage`

<br>

> ## HTML
>
> - Full Form → HyperText Markup Language
> - Structure → Sets up the Layout.

> ## CSS
>
> - Full Form → Cascading Style Sheets
> - Style → Sets the look and feel.

> ## JS
>
> - Full Form → JavaScript
> - JavaScript has nothing to do with Java
> - Actions → Enables Interactivity
> - Events → Responds to user actions
> - Data → Fetches and sends info to server.

> ## JavaScript Basic Terminology
>
> - `JavaScript` runs at the client side in the browser.
> - `Coffee Script` / `TypeScript` are transpiled to JavaScript.

<br>

> ## Types of Numbers
>
> - Integers
> - Negative Numbers → `-4, -3, -2, -1`
> - Whole Numbers → `0, 1, 2, 3, 4`
> - Zero → `0`
> - Natural Numbers → `1, 2, 3, 4`
> - Use `Math.round()` function because java has problem with floating numbers
>   s- `Math.round(18003.8618)` → `18004`

<br>

> ## Don’t Learn Syntax
>
> - Use `Google`
> - Use `MDN`
> - Use `ChatGPT`
> - Focus → Understand concepts, not just syntax

<br>

> ## Strings
>
> - Strings hold textual data, anything from single character to paragraph.
> - Can be defined using → `‘ ’`, `“ ”`,` `
>   - ‘ ’ → `single quotes`
>   - “ ” → `double quotes` → not usually used
>   - ` ` → `backticks`
>     - here you can use expression → `${ expression }`
>   - \n → `nextline`
> - Concatenation
>   - `‘name’ + ‘ please’ → name please`
>   - `‘got ’ + 4.5 → got 4.5`
>   - `‘4’ + ‘5’ → 45`
>   - Major Problem is that you have to use `brackets` otherwise JS treat number as a string if you use it with the string
>     - `‘you have got ’ + 1 + 1 + 1 + ‘ votes’ → you have got 111 votes`
>     - `‘you have got ’ + (1 + 1 + 1) + ‘ votes’ → you have got 3 votes`

<br>

> ## `typeof` operator
>
> - tells you the data type of a variable
> - its a keyword

<br>

> ## Use IDE (Integrated Development Environment).
>
> - Need of IDE
>   - `Code Auto-complete`
>   - `Syntax Highlighting`
>   - `Error Checking`

<br>

> # Using VsCode
>
> - Main Extensions
>   - Live Server
>   - Prettier
>   - Line Wrap
>     - Not a extension it is used to `avoid the horizontal scroll bar`
>     - Use - `Alt + Z`
>   - Tab Size from 4 to 2
>     - to avoid the `extra spacing`

<br>

> ## JavaScript
>
> - Query Selector → using `kabab case` `(name-name)`
>   - `getElementById('id-name')` → not used mostly
>   - `getElementByClassName('class-name')` → not used mostly
>   - querySelector → MOSTLY USED
>     - `document.querySelector('h1')`
>     - `document.querySelector('#id-name')`
>     - `document.querySelector('.class-name')`-> Select only one class
>     - `document.querySelectorAll('.class-name')`-> Select multiple classes
> - Main Pre-Defined Keywords
>   - `alert()`
>   - Console Messages Types:
>     - `console.log()`
>     - `console.warn()` → show in yellow color
>     - `console.error()` → show in red color
>     - `console.clear()` → clear the console
>   - Make button functional
>     - onclick() - `onclick="alert('Deepu Kissed Me')"`
>     - click() → `document.querySelector('#button').click();`