import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <div className="w-full h-10 bg-zinc-950">
            <div className="flex p-3 items-center justify-between text-white font-bold ml-3">
                <div className="flex space-x-4 tt">
                    <a href="#">CONFERENCE EVENT</a>
                    <a href="#">COMMUNITY SPORTS TRUST</a>
                    <a href="#">SAFEGUARDING</a>
                </div>
                <div className="flex tt space-x-4 mr-3">
                    <a href="#" className="login">LOGIN</a>
                    <span>|</span>
                    <a href="#" className="register">REGISTER</a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
