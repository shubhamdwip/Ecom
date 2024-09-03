import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const SingleBook = () => {
    const book = useLoaderData();
    const { addToCart } = useContext(CartContext);

    if (!book) return <div>No book found</div>;

    // Ensure 'id' is destructured from the book object
    const {_id: id, bookTitle, authorName, price, imageURL } = book;

    const handleAddToCart = () => {
      console.log('Adding to cart:', {id, bookTitle, authorName, price, imageURL})
        addToCart({ id, bookTitle, authorName, price, imageURL });
    };

    return (
        <div className='mt-28 px-4 lg:px-24'>
            <img src={imageURL} alt={bookTitle} />
            <h2>Title: {bookTitle}</h2>
            <p>Author: {authorName}</p>
            <p>Price: $10</p>
            <button onClick={handleAddToCart} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
                Add to Cart
            </button>
        </div>
    );
};

export default SingleBook;
