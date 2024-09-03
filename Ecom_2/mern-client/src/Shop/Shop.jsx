import React, { useEffect, useState } from 'react';
import { Card } from 'flowbite-react';

const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then(res => res.json())
      .then(data => setBooks(data))
      .catch(err => console.error('Error fetching books:', err));
  }, []);

  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center'>All Books are here</h2>

      <div className='grid grid-cols-1 gap-8 my-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {books.map((book) => (
          <Card
            key={book._id} // Ensure each key is unique
            imgSrc={book.imageURL || "/images/blog/image-1.jpg"} // Use dynamic image source 
             className='h-95'>
            <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              <p>
                {book.bookTitle}
              </p>
            </h5>
            <div className='font-normal text-gray-700 dark:text-gray-400'>
              <p>
                Lorem ipsum dolor sit amet.
              </p>
            </div>

            <button className='bg-blue-700 font-semibold text-white py-2 rounded'>Buy Now</button>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Shop;
