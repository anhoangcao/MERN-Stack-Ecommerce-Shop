import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/styles';
import { navItems } from '../../static/data';

const Navbar = ({ active }) => {
  return (
    <div className={`block 800px:${styles.normalFlex}`}>
      {navItems &&
        navItems.map((item, index) => (
          <div key={index} className='flex'>
            <Link
              to={item.url}
              className={`${
                active === index + 1 ? 'text-[#17dd1f]' : 'text-black 800px:text-[#fff]'
              } pb-[30px] 800px:pb-0 font-[500] text-[17px] px-6 cursor-pointer`}
            >
              {item.title}
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Navbar;
