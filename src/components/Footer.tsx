import React from 'react'

const Footer = () => {
    return (
        <footer className="clear-both rounded-b-3xl bg-grey-color grid grid-cols-8 mx-0 align-items-center py-4">
            <div className="bg-red-color border-black border-2 rounded-md cursor-pointer hover:text-white hover:bg-red-500 px-3 py-2 col-2 col-start-2">
                <p>Send me an <span className="text-black uppercase text-xl">email</span></p>
            </div>
        </footer>
    )
}

export default Footer