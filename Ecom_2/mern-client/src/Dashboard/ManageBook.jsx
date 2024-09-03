import React, { useEffect, useState } from 'react'
import { Table } from "flowbite-react";
import { Link } from 'react-router-dom';

const ManageBook = () => {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setAllBooks(data));
  }, [])

  
  //delete a book
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/book/${id}`, {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(response => {
      if (Array.isArray(response)) {
        alert("Book is Deleted Successfully!!!");
        setAllBooks(response); // Ensure 'response' is an array
      } else {
        console.error("Expected an array of books, but got", response);
      }
    })
    .catch(error => console.error("Error deleting book:", error));
    
    
  }

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Manage Your Books</h2>

      {/* table for book data */}

      <div className='w-full overflow-x-auto'>
        <table className='min-w-full divide-y divide-gray-200'>
          <thead className='bg-gray-50'>
            <tr>
              <th scope="col" className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                NO.
              </th>
              <th scope="col" className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Book Name
              </th>
              <th scope="col" className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Author Name
              </th>
              <th scope="col" className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Category
              </th>
              <th scope="col" className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Prices
              </th>
              <th scope="col" className='relative px-6 py-3'>
                <span className='text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Edit or Manage</span>
              </th>
            </tr>
          </thead>
          
             <tbody className='bg-white divide-y divide-gray-200' >
             {allBooks.map((book, index) => 
              <tr className='hover:bg-gray-200' key={book._id}>
                <td className='px-8 py-6 whitespace-nowrap'>
                  <div className='text-sm font-medium text-gray-900'>{index + 1}</div>
                </td>
                <td className='px-8 py-4 whitespace-nowrap'>
                  <div className='text-sm font-medium text-gray-900'>{book.bookTitle}</div>
                </td>
                <td className='px-8 py-6 whitespace-nowrap'>
                  <div className='text-sm text-gray-500'>{book.authorName}</div>
                </td>
                <td className='px-8 py-6 whitespace-nowrap'>
                  <div className='text-sm text-gray-500'>{book.category}</div>
                </td>
                <td className='px-8 py-6 whitespace-nowrap'>
                  <div className='text-sm text-gray-500'>$10.00</div>
                </td>
                <Link to={`/admin/dashboard/edit-book/${book._id}`}
                className='px-8 py-6 whitespace-nowrap text-right text-sm font-medium'>
                  <a  className='text-indigo-600 hover:text-indigo-900'>Edit</a>
                </Link>
               
                <button onClick={() => handleDelete(book._id)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600'>Delete</button>
              </tr>
              )}
            </tbody>
          
        </table>
      </div>









    </div>
  )
}

export default ManageBook;