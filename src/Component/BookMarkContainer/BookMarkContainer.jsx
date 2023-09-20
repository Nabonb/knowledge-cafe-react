import React from 'react';
import './BookMarkConatiner.css'
const BookMarkContainer = ({quantity,title}) => {
    // const bookmarkQuantity = quantity.length;
    return (
        <div className='for-box mb-4 p-5'>
            <p className='text-lg font-bold'>{title}</p>
        </div>
    );
};

export default BookMarkContainer;