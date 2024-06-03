"use client";

import { useState, useEffect } from "react";

const developers = 'jaejjj';
const bufferLength = 6;

export const Created = () => {

    const [show, setShow] = useState(false);
    const [typed, setTyped] = useState('      ');

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    };

    const handleKeyPress = (event: KeyboardEvent) => {
        setTyped((prevTyped) => {
            const newTyped = (prevTyped + event.key.toLowerCase()).slice(-bufferLength);
            const inputNames = newTyped.split('').sort().join('');
            const correctNames = developers.split('').sort().join('');
            if (inputNames === correctNames) {
                return '';
            }
            return newTyped;
        });
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    useEffect(() => {
        if (typed == '') {
            setShow((prevShow) => {
                if (!prevShow) {
                    scrollToBottom();
                }
                return !prevShow;
            });
        }
    }, [typed])

    return (
        <div>
            <div className={`rainbow-bg w-full text-center duration-500 select-none ${show ? 'opacity-100 blur-none' : 'opacity-0 blur'}`}>
                <div>
                    created by . . .
                </div>
                <div>
                    emily jessica john alex johann & jamie
                </div>
            </div>
        </div>
    );
};

export default Created;