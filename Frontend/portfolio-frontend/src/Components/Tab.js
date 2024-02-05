import React, { useState } from 'react';
import Tabbox from './Tabbox';

const Tab = () => {

    const handleClick = (index) => {
        const update = [...menuItems]
        update.forEach((item, i) => {
            item.isActive = index === i
        })

        setMenuITem(update)
    }

    const [menuItems, setMenuITem] = useState([
        { text: 'Backend', href: '/', isActive: true },
        { text: 'Frontend', href: '#', isActive: false },
        { text: 'Mobile', href: '#', isActive: false },
        { text: 'CMS', href: '#', isActive: false },
        { text: 'Database', href: '#', isActive: false },
        { text: 'Full Stacks', href: '#', isActive: false },
        { text: 'Cloud', href: '#', isActive: false },
        { text: 'Testing', href: '#', isActive: false },
        { text: 'Tools', href: '#', isActive: false },

    ])

    return (
        <div className="text-sm mx-auto px-5 my-5 font-medium sm:mx-5 text-gray-500  ">
            <ul className="flex flex-wrap justify-evenly mb-10 px-32">
                {menuItems.map((item, index) => (
                    <li key={index} className="me-2">
                        <a
                            href={item.href}
                            className={`inline-block  text-lg p-4  ${item.isActive
                                ? 'text-blue-600 border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500'
                                : 'hover:text-blue-500 hover:border-blue-500 '
                                }`}
                            aria-current={item.isActive ? 'page' : undefined}
                            onClick={() => handleClick(index)}
                        >
                            {item.text}
                        </a>
                    </li>
                ))}
            </ul>
            <div class="flex justify-evenly flex-wrap gap-2 px-40">
                <Tabbox />
                <Tabbox />
                <Tabbox />
                <Tabbox />
                <Tabbox />
                <Tabbox />
                <Tabbox />
                <Tabbox />

            </div>
        </div>
    );
};

export default Tab;
