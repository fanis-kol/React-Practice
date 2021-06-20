import React from 'react';
import ReactDom from "react-dom"

function BooκList() {
   return (
      <section>
         <Book />
      </section>

   );
}

const Book = () => {
   return (
      <article>
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
   <h1>Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones</h1>
)

const Author = () => (
   <h1> James Clear (Author) </h1>
)



ReactDom.render(<BooκList />, document.getElementById('root'));