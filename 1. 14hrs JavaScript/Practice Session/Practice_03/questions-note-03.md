/\*

Tasks: (JavaScript with HTML + CSS)

1. Create a button with text click
2. Create 2 buttons with class and id
3. Create a paragraph
4. Add colors to two buttons
5. Add proper html structure
6. Change page title
7. Try to copy the given design on the bottom:
   --- don't know --- see the code directly ---
8. Add script element to page to show welcome alert
9. Add onclick alert on Add to Bag and Wishlist buttons

\*/

// Task 01 : solution
<button> Deepu Fly </button>

// task 02 : solution
<button id="fly-btn"> Deepu Fly </button>
<button class="run-btn"> Deepu Run </button>

// task 03 : solution

<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum deserunt sunt neque numquam eius provident dolores, suscipit temporibus voluptates doloremque eos a autem officia vitae doloribus ab!</p>

// task 04 : solution
<button class="run-btn">Deepika</button>
<button class="run-btn">Deepu Run</button>
.run-btn{
color: blue;
}

// task 05 : solution
use semantic tags --> <main> ... code </main>, <header> ... code </header>, <footer> ... code</footer>

// task 06 : solution

<title>P-03</title>

// task 07 : solution
<button class="btn-one"> Add To Bag</button>
<button class="btn-two"> ❤️ Wishlist </button>
.btn-one{
background-color: lightgreen;
border: none;
padding: 7px 20px;
border-radius: 10px;
font-weight: bold;
}
.btn-two{
border: 2px solid black;
padding: 3px 30px;
border-radius: 8px;
text-transform: uppercase;
font-weight: bold;
margin-left: 1vw;
}

// task 08 : solution

<script>
    alert('Love You Deepu')
</script>

// task 09 : solution
<button class="btn-one" onclick="alert('Item added in bag')"> Add To Bag</button>
<button class="btn-two" onclick="alert('Item added to wishlist')"> ❤️ Wishlist </button>
