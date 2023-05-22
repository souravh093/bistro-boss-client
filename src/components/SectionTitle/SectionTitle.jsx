import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='mx-auto text-center my-8 md:w-4/12'>
            <p className='text-yellow-600 mb-2'>---{subHeading}---</p>
            <h2 className='text-3xl uppercase border-y-4 py-4'>{heading}</h2>
        </div>
    );
};

export default SectionTitle;