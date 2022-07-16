import React from 'react';

const AddTask = () => {
    const handleBooking = event => {
        event.preventDefault();
        
    }
        return (
            <div>
                <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-2'>
                    <input type="text" className="input border-red-600 w-full max-w-xs" />

                    <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                </form>
            </div>
        );
    };

    export default AddTask;