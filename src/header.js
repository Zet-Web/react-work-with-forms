import React from 'react';

const Header = () => {
  return (
    <div className='d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm'>
      <h5 className='my-0 mr-md-auto font-weight-normal'>My app</h5>
      <nav className='my-2 my-md-0 mr-md-3'>
        <a className='p-2 text-dark' href='/'>
          Form One
        </a>
        <a className='p-2 text-dark' href='/formtwo'>
          Form Two
        </a>
        <a className='p-2 text-dark' href='/formthree'>
          Form Three
        </a>
        <a className='p-2 text-dark' href='/formfour'>
          Form Four
        </a>
      </nav>
    </div>
  );
};

export default Header;
