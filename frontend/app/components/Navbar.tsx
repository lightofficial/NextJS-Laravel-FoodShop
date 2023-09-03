import React from 'react'
import {usePathname} from "next/navigation";
import Link from "next/link";
import styles from './style/navbar.module.css';

function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">LightNextJS</span>
                </a>
                {/* ... */}
                <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link href="/"
                                className={
                                    pathname === '/' ? styles.activeClass : styles.inactiveClass
                            }>
                                หน้าหลัก
                            </Link>
                        </li>
                        <li>
                            <Link href="/show/food/"
                                className={
                                    pathname === '/show/food' ? styles.activeClass : styles.inactiveClass
                            }>
                                เพิ่มรายการอาหาร
                            </Link>
                        </li>
                        {/* ... */} </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
