import React from 'react';

const Header = () => {
    return (
        <div className="mx-20 py-10 f-poppins" >

            <h1 className="text-5xl text-blue-500 font-medium f-poppins" >Employee Info</h1>
            <p className="text-md text-gray-400 my-1 f-poppins">Build with React.js and Tailwindcss</p>

            <div className="flex space-x-4 items-center my-5" >
                <a className="border-2 border-blue-500 text-blue-500 hover:border-transparent hover:bg-blue-500 hover:text-white px-12 py-2 " href="https://github.com/mahfuzswaron/table-assesment" target="_blank" rel="noopener noreferrer"> {"</> Source Code"}</a>

                <a className="border-2 border-blue-500 text-white hover:border-transparent bg-blue-500 hover:bg-blue-700 px-12 py-2 " href="https://github.com/mahfuzswaron/table-assesment" target="_blank" rel="noopener noreferrer"> Explanation Video </a>
            </div>

        </div>
    );
};

export default Header;