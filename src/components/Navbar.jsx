import React from 'react';

function Navbar() {
  const navItems = ["Home", "About"];

  return (
    <header>
      <nav className='flex-justify-between py-[6px] px-[40px] bg-slate-400 top-0'>
        <div>
          {navItems.map((item, index) => (
            <h1 key={index}>{item}</h1>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
