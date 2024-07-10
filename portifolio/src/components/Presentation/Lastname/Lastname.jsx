import React, { useEffect, useState } from 'react';

const fonts = [
    "Marck Script",
    "Gochi Hand",
    "Nothing You Could Do",
    "Patrick Hand",
    "Allura",
    "Sacramento",
    "Gloria Hallelujah",
    "Dancing Script",
];

export const LastNameComponent = () => {
    const [fontIndex, setFontIndex] = useState(0);

    useEffect(() => {
        const alvim = document.getElementById('lastname');
        alvim.style.fontFamily = fonts[fontIndex] + ', cursive';

        const intervalId = setInterval(() => {
            setFontIndex((prevIndex) => (prevIndex + 1) % fonts.length);
        }, 600);

        return () => clearInterval(intervalId); // Limpa o intervalo quando o componente é desmontado
    }, [fontIndex]);

    return <i id="lastname">Alvim</i>;
};