import React, { useState } from 'react';
import Tabbox from './Tabbox';
import { techStacks } from '../Commons/type';

const Tab = () => {

    const [currentTab, setCurrentTab] = useState('Backend')

    const [menuItems, setMenuITem] = useState([
        { text: 'Backend', href: '/', isActive: true },
        { text: 'Frontend', href: '#', isActive: false },
        { text: 'Mobile', href: '#', isActive: false },
        { text: 'CMS', href: '#', isActive: false },
        { text: 'Database', href: '#', isActive: false },
        { text: 'FullStacks', href: '#', isActive: false },
        { text: 'Cloud', href: '#', isActive: false },
        { text: 'Testing', href: '#', isActive: false }

    ])

    const handleClick = (index) => {
        const update = [...menuItems]
        update.forEach((item, i) => {
            index === i ? item.isActive = true | setCurrentTab(item.text) : item.isActive = false
        })
        setMenuITem(update)

    }


    return (
        <div className="text-sm mx-auto px-5 my-5 font-medium sm:mx-5 text-gray-500  ">
            <ul className="flex flex-wrap justify-start md:justify-center mb-10 px-5 md:px-32 ">
                {menuItems.map((item, index) => (
                    <li key={index} className="me-2 cursor-pointer">
                        <p

                            className={`inline-block  text-lg p-4  ${item.isActive
                                ? 'text-blue-600 border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500'
                                : 'hover:text-blue-500 hover:border-blue-500 '
                                }`}
                            aria-current={item.isActive ? 'page' : undefined}
                            onClick={() => handleClick(index)}
                        >
                            {item.text}
                        </p>
                    </li>
                ))}
            </ul>
            <div class="flex  flex-wrap justify-center gap-2 md:px-32">
                {techStacks[currentTab].map((item) =>

                    (<Tabbox Name={item.Name} url={item.url} />)
                )}


            </div>
        </div>
    );
};

export default Tab;
