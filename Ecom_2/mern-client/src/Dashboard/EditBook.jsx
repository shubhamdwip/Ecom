import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { Button, Checkbox, Label, Select, TextInput, Textarea } from "flowbite-react";

const EditBook = () => {
  const {id} = useParams();
  const {bookTitle, authorName, imageURL, category, bookDescription, bookPdfUrl} = useLoaderData();
  

  const bookCategory = [
    "Fiction",
    "Non-Fiction",
    "Fantasy",
    "Biography",
    "Horror",
    "Mystery Thriller",
    "History",
    "Autobiography",
    "Programming",
    "Science Fiction",
    "Poetry",
    "Drama",
    "Novel",
    "Romance",
    "Humor",
    "Action Fiction",
    "Crime Fiction",
    "Fairy Tale",
    "Thriller"
  ]

  const [selectedBookCategory, setSectedBookCategory] = useState(bookCategory[0]);

  const handleChangeSelectedValue = (event) => {
    // console.log(event.target.value);
    setSectedBookCategory(event.target.value);
  }

  //handle book submission
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.category.value;
    const bookDescription = form.bookDescription.value;
    const bookPdfUrl = form.bookPdfUrl.value;

    const updatebookObject = {
      bookTitle, authorName, imageURL, category, bookDescription, bookPdfUrl
    }

    // console.log(bookObject);
    //update book data
    fetch(`http://localhost:5000/book/${id}`,{
      method:"PATCH",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify(updatebookObject)

    }).then(res => res.json()).then(data => {
      console.log(data)
      alert("Book is Updated Successfully!!!")
    }) 
  }
  return (
    <div className='px-4 my-12 ml-24'>
      <h2 className='mb-8 text-3xl font-bold'>Update The Book Data</h2>

      <form onSubmit={handleUpdate} className="flex lg:w-[1000px] flex-col flex-wrap gap-4">
        {/* first row */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="Book Title" value="Book Title" />
            </div>
            <TextInput id="bookTitle" name='bookTitle' type="text" placeholder="Book Title" required className='w-80' style={{
              height: '50px',
              paddingLeft: '1rem',   // Correct property name
              paddingRight: '1rem',  // Correct property name
              paddingTop: '0.5rem',  // Correct property name
              paddingBottom: '0.5rem' // Correct property name
            }} />
          </div>

          {/* Author Name */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="Author Name" value="Author Name" />
            </div>
            <TextInput id="authorName" name='authorname' type="text" placeholder='Author Name' required className='w-80' style={{
              height: '50px',
              paddingLeft: '1rem',   // Correct property name
              paddingRight: '1rem',  // Correct property name
              paddingTop: '0.5rem',  // Correct property name
              paddingBottom: '0.5rem' // Correct property name
            }} />
          </div>



        </div>

        {/* second row */}
        {/* category */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>


            <Select id='inputState' name='category' className='w-80 rounded' value={selectedBookCategory}
              onChange={handleChangeSelectedValue}  >

              {
                bookCategory.map((option) => <option key={option} value={option}>{option}</option>)
              }
            </Select>





          </div>

          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="Book PDF" value="Book PDF URL" />
            </div>
            <TextInput id="bookPdfUrl" name='bookPdfUrl' type="text" placeholder='Book Pdf Url' required className='w-80' style={{
              height: '50px',
              paddingLeft: '1rem',   // Correct property name
              paddingRight: '1rem',  // Correct property name
              paddingTop: '0.5rem',  // Correct property name
              paddingBottom: '0.5rem' // Correct property name
            }} />
          </div>
        </div>


        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea id="bookDescription" name="bookDescription" placeholder="Write Your Book Description" className='w-full' required rows={5} />
        </div>


        <div className='flex gap-8'>
          {/* Book Description */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL" />
            </div>
            <TextInput id="imageURL" name='imageURL' type="text" placeholder='Book Image URL' required className='w-full' style={{
              height: '50px',
              paddingLeft: '1rem',   // Correct property name
              paddingRight: '1rem',  // Correct property name
              paddingTop: '0.5rem',  // Correct property name
              paddingBottom: '0.5rem' // Correct property name
            }} />
          </div>
        </div>








        <Button className='bg-blue-700 text-white w-80' type="submit">Update Book</Button>
      </form>
    </div>
  )











}

export default EditBook