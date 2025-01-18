import React, { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect/dist/core'; // Install this library if not already installed

function TypewriterComponent() {
    const typewriterRef = useRef(null);

    useEffect(() => {
        // Access the DOM element through the ref
        const typewriter = new Typewriter(typewriterRef.current, {
            loop: true,
        });

        // Configure the typewriter effect
        typewriter
            .typeString('<b>Web Developer</b>')
            .pauseFor(2500)
            .deleteAll()
            .typeString('<b>Proud Indian</b>')
            .pauseFor(2500)
            .deleteAll()
            .typeString('<b>FrontEnd Developer</b>')
            .pauseFor(2500)
            .start();

        // Cleanup when the component is unmounted
        return () => typewriter.stop();
    }, []);

    return (
        <>
            <span ref={typewriterRef} style={{color:"darkgreen"}}></span>
        </>
    );
}

export default TypewriterComponent;
