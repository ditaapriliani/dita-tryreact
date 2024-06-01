import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Navbar.module.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Navbar fixed position if scrolling
    useEffect(() => {
        window.onscroll = () => {
            const header = document.querySelector('header');
            const fixNav = header?.offsetTop ?? 0;

            if (window.pageYOffset > fixNav) {
                header?.classList.add(styles.navbarFixed);
            } else {
                header?.classList.remove(styles.navbarFixed);
            }
        }
    }, []);


    // Hamburger menu handler
    const hamburgerHandler = () => {
        const hamburger = document.querySelector('#hamburger');
        const navMenu = document.querySelector('#navMenu');

        setIsOpen(!isOpen);

        if (isOpen) {
            hamburger?.classList.remove(styles.hamburgerActive);
            navMenu?.classList.add('hidden');
        } else {
            hamburger?.classList.add(styles.hamburgerActive);
            navMenu?.classList.remove('hidden');
        }
    };

    const navLink = [
        {
            href: '/',
            label: 'BMI'
        },
        {
            href: '/konversi/biner',
            label: 'Konversi Biner'
        },
        {
            href: '/konversi/oktal',
            label: 'Konversi Oktal'
        },
        {
            href: '/konversi/desimal',
            label: 'Konversi Desimal'
        },
        {
            href: '/konversi/heksadesimal',
            label: 'Konversi Heksadesimal'
        },
    ]

    return (
        <header className='bg-transparent absolute top-0 left-0 w-full flex items-center z-10'>
            <div className="container mx-auto">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center justify-between relative">
                        <div className="px-4">
                            <Link to='/' className='block py-6'>
                                Dita Apriliani
                            </Link>
                        </div>
                        <div className="flex items-center px-4">
                            <button id='hamburger' name='hamburger' type='button' className='block absolute right-4 lg:hidden' onClick={hamburgerHandler}>
                                <span className={`${styles.hamburgerLine} origin-top-left transition duration-300 ease-in-out`}></span>
                                <span className={`${styles.hamburgerLine} transition duration-300 ease-in-out`}></span>
                                <span className={`${styles.hamburgerLine} origin-bottom-left transition duration-300 ease-in-out`}></span>
                            </button>

                            <nav id='navMenu' className='hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none'>
                                <ul className='block lg:flex'>
                                    {
                                        navLink.map((a, _) => (
                                            <li className='group' key={_}>
                                                <Link to={a.href} className='text-base text-black py-2 mx-8 lg:mx-2 flex group-hover:text-[#6db3df] transition duration-300 ease-in-out'>
                                                    {a.label}
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar