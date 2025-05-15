import { updateBook,getQuote,getBookCards,searchBook } from "./main.js";

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");
const addBookBtn = document.getElementById("addBookBtn");
const quote = document.querySelector('.quote')
const booksContainer = document.querySelector(".booksContainer");
const search = document.querySelector("#search");
const searchName = document.querySelector("#searchName");
const searchAuthor = document.querySelector("#searchAuthor");
const output = document.querySelector("#output");

addBookBtn.addEventListener("click", addBook);
search.addEventListener("click", searchBookBtn);

function addBook() {
  const t = title.value.trim();
  const a = author.value.trim();
  const p = parseInt(pages.value);
  const r = read.checked ? "yes" : "no";

  if (t === "") return alert("Please add Title");
  if (a === "") return alert("Please add Author");
  if (isNaN(p) || p <= 0) return alert("Please add valid Pages");

  booksContainer.innerHTML = "";
  const fragment = updateBook(t, a, p, r);
  booksContainer.appendChild(fragment);
  title.value = "";
  author.value = "";
  pages.value = "";
  read.checked = false;
}

async function updateQuote() {
  const h1 = quote.querySelector('h1');
  const p = quote.querySelector('p');
  const quotes = await getQuote()
  h1.remove()
  p.remove()
 quote.append(quotes)
}

function searchBookBtn() {
  const name = searchName.value
  const author = searchAuthor.value
  if (name === "" && author === "" ) return alert("Please enter a Value");
 
  const fragment = searchBook(name,author)
  output.innerHTML = ''
  output.appendChild(fragment)

}


booksContainer.appendChild(getBookCards());
setInterval(updateQuote, 20000);