import React from 'react';
import ReactDom from "react-dom"
import './index.css';

//vars
const firstBook = {
   img: "https://images-na.ssl-images-amazon.com/images/I/713mzPe9SwS._AC_UL200_SR200,200_.jpg",
   title: "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
   author: "James Clear (Author)"
}

const secondBook = {
   img: "https://images-na.ssl-images-amazon.com/images/I/81BdMSuI5ZS._AC_UL200_SR200,200_.jpg",
   title: "The Last Thing He Told Me",
   author: "Laura Dave (Author)"
}


function BooκList() {
   return (
      <section className="booklist">
         <Book img={firstBook.img} title={firstBook.title} author={firstBook.author} />
         <Book img={secondBook.img} title={secondBook.title} author={secondBook.author} />
      </section>

   );
}

const Book = ({ props }) => {
   const { img, title, author } = props
   return (
      <article className="book">
         <img src={img} alt="" />
         <h1>{title}</h1>
         <h4>{author}</h4>
      </article>
   );
};

ReactDom.render(<BooκList />, document.getElementById('root'));