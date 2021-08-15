import React from "react";

function Header() {
    return (
        
        <header className="w-full z-50 bg-transparent absolute top-0">
            <nav className="w-full py-5 lg:px-16 px-3 bg-transparent h-auto flex flex-row items-center">
                <div className="w-auto">
                    <div className="logo">
                        <a href="/"><img className="w-24 h-auto" src="images/logo/archive-91.png" alt="Archive 91 Logo"/></a>
                    </div>
                </div>
                <div className="w-full flex flex-row justify-between border-t-2 border-b-2 border-black py-2 px-4 font-presto">
                    <div className="w-1/3">
                        <p>Brands Sogan here</p>
                    </div>
                    <div className="lg:w-1/5 w-1/2 flex flex-row justify-around items-center font-semibold font-presto">
                        <a href="/about">About</a>
                        <a href="/shop">Shop</a>
                    </div>
                </div>
            </nav>
        </header>

    );
}

export default Header;