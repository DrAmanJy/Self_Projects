import { Book } from "./book.js";
import { saveLocalData, getLocalData } from "./storage.js";
import { getQuoteData } from "./api.js";

export function updateBook(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  const dataName = "books";

  const books = getLocalData(dataName);
  books.push(book);
  saveLocalData(dataName, books);

  return getBookCards()
}

export function getBookCards() {
  const dataName = "books";
  const data = getLocalData(dataName);

  const fragment = document.createDocumentFragment();

  data.forEach(element => {
    const div = appendBookCard(element);
    fragment.append(div);
  });
  return fragment;
}




export function searchBook(name, author) {
  const data = getLocalData("books");

  const filtered = data.filter((book) => {
    const nameMatch = book.title.toLowerCase().includes(name.toLowerCase());
    const authorMatch = book.author.toLowerCase().includes(author.toLowerCase());
    return nameMatch && authorMatch;
  });

  const fragment = document.createDocumentFragment();

  filtered.forEach(element => {
    const div = appendBookCard(element);
    fragment.append(div);
  });
  return fragment
}


export function appendBookCard(book) {
  const div = document.createElement('div');
  div.classList.add('bookCards');

  const h3 = document.createElement('h3');
  h3.textContent = book.title;

  const pAuthor = document.createElement('p');
  pAuthor.textContent = `Author: ${book.author}`;

  const pPages = document.createElement('p');
  pPages.textContent = `Pages: ${book.pages}`;

  const pRead = document.createElement('p');
  pRead.textContent = `Read: ${book.read}`;

  div.append(h3, pAuthor, pPages, pRead);
  return div;
}




export async function getQuote() {
  const quoteData = await getQuoteData()
  const fragment = document.createDocumentFragment();
  const p = document.createElement('p')
  p.textContent = quoteData.content;

  const h1 = document.createElement('h1')
  h1.textContent = quoteData.author;
  fragment.append(p, h1);
  return fragment
}