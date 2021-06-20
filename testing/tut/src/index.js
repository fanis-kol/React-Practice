import React from 'react';
import ReactDom from "react-dom"
import './index.css';

function BooκList() {
   return (
      <section className="booklist">
         <Book />
         <Book />
         <Book />
         <Book />
         <Book />
         <Book />

      </section>

   );
}

const Book = () => {
   return (
      <article className="book">
         <Image />
         <Title />
         <Author />
      </article>
   );
};

const Image = () => (
   <img
      src="https://images-na.ssl-images-amazon.com/images/I/713mzPe9SwS._AC_UL200_SR200,200_.jpg" alt=""
   />
)

const Title = () => (
   <h3>Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones</h3>
)

const Author = () => (
   <h1> James Clear (Author) </h1>
)



ReactDom.render(<BooκList />, document.getElementById('root'));