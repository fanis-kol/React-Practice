import React from 'react';
import ReactDom from "react-dom"
import './index.css';

//vars
const books = [
   {
      id: 1,
      img: "https://images-na.ssl-images-amazon.com/images/I/713mzPe9SwS._AC_UL200_SR200,200_.jpg",
      title: "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
      author: "James Clear (Author)"
   },
   {
      id: 2,
      img: "https://images-na.ssl-images-amazon.com/images/I/81BdMSuI5ZS._AC_UL200_SR200,200_.jpg",
      title: "The Last Thing He Told Me",
      author: "Laura Dave (Author)"
   },
   {
      id: 3,
      img: "https://images-na.ssl-images-amazon.com/images/I/61NdJMwAThS._AC_UL200_SR200,200_.jpg://images-na.ssl-images-amazon.com/images/I/81BdMSuI5ZS._AC_UL200_SR200,200_.jpg",
      title: "The Body Keeps the Score: Brain, Mind, and Body in the Healing of Trauma",
      author: " Bessel van der Kolk M.D (Author)"
   },
];


function BooκList() {
   return (
      <section className="booklist">
         {books.map((book) => {
            return (
               <Book key={book.id} {...book}></Book>
            );
         })}
      </section>

   );
}

const Book = ({ img, title, author }) => {
   //const { img, title, author } = props;
   return (
      <article className="book">
         <img src={img} alt="" />
         <h1>{title}</h1>
         <h4>{author}</h4>
      </article>
   );
};

ReactDom.render(<BooκList />, document.getElementById('root'));