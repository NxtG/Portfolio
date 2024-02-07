import React from 'react'


function Tabbox({ Name, url }) {
    return (
        <div>
            <div class="bg-gray-200 p-4  w-32 h-32 flex justify-center align-center ">
                <img src={url} alt={Name} />

            </div>
            <p className='text-center font-semibold text-base'>
                {Name}
            </p>

        </div>
    )
}

export default Tabbox