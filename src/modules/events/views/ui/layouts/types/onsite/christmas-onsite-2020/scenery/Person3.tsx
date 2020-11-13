import { memo } from "react";
import styled from "styled-components";

const StyledSVG = styled.svg`
    width: 5%;
    position: absolute;
    left: 3%;
    top: 15vw;
    z-index: 9;
`;

interface Person3Props extends React.ComponentPropsWithoutRef<"svg"> {}

const Person3: React.FC<Person3Props> = (props) => {
    return (
        <StyledSVG viewBox='0 0 219.02 381.47' {...props}>
            <defs>
                <style>
                    {
                        ".person3__cls-1{fill:#fff}.person3__cls-2{fill:#000543}.person3__cls-3{fill:#ee6d55}.person3__cls-4{fill:#372d3f}.person3__cls-6{fill:#ff9985}.person3__cls-7{fill:#ffe09c}.person3__cls-9{fill:#f98c7d}"
                    }
                </style>
            </defs>
            <g id='person3__Layer_2' data-name='Layer 2'>
                <g id='person3___Layer_' data-name='&lt;Layer&gt;'>
                    <path
                        className='person3__cls-1'
                        d='M19.28 92C23 96.7 28 102.79 35.19 110.65a6.49 6.49 0 009.53 0L66.29 82.9l-.47 2.87a8.54 8.54 0 011.76-1.44 3.28 3.28 0 014.35 1l13.27 20.94a2.47 2.47 0 01-.29 3.06c-33.19 34.85-37.34 37.73-43.59 37.54-.49 0-1-.06-1.53-.1l-.65-.05c-8.55-.66-24.48-27.66-34.59-47.65a4 4 0 011.88-5.42l6.25-3.13a5.41 5.41 0 016.6 1.48z'
                    />
                    <path
                        className='person3__cls-2'
                        d='M138.75 308.13c-13.64-10.83-18.5-9.86-27.59-21.75 10.89-2.57 10.4-4.35 23.44-14.48 3.05 3.74 5.46 11.32 11.05 15.47 17.13 12.68 43.33 39.57 54.48 51.5l-9.92 9.83c-13.52-8.96-38.89-30.57-51.46-40.57z'
                    />
                    <path
                        className='person3__cls-2'
                        d='M111.16 286.38a82.74 82.74 0 01-9.12-16 254.34 254.34 0 01-13.51-37.17c-1-3.43-7.56-16.07-7.56-16.07l5-3.09q18.38-23.91 36.76-47.8a28.07 28.07 0 011.1 3.59c4.58 7.21 12 21.57 12.87 29.57 3 26.33-9.07 41.72 2.49 59.6a8 8 0 01-.18 8.74c-6.8 10.35-17.7 18.05-27.85 18.63z'
                    />
                    <path
                        className='person3__cls-3'
                        d='M190.05 367.15l8.4-16.6a15.43 15.43 0 01-3.18-2c-1-.58-2.09-1.26-3.29-2.06l9.92-9.82 1.94 2.08a9.78 9.78 0 011.35 1.4 1.18 1.18 0 01.54.1l12.49 6.5-25.9 26.74c-2.7-.04-4.24-2.49-2.27-6.34z'
                    />
                    <path
                        className='person3__cls-2'
                        d='M218.22 346.72l.34.18c.75.39.56 1.67-.4 2.67l-20 20.86c-2 2.1-4.14 3-5.82 3z'
                    />
                    <path
                        className='person3__cls-4'
                        d='M199.77 355.77l.65-1.2a.29.29 0 00-.1-.39L196 352a.3.3 0 00-.39.13l-.65 1.2a.28.28 0 00.11.38l4.34 2.2a.29.29 0 00.36-.14zM197.6 359.58l.65-1.19a.28.28 0 00-.11-.39l-4.33-2.2a.29.29 0 00-.39.14l-.65 1.19a.28.28 0 00.11.39l4.33 2.2a.29.29 0 00.39-.14zM195.68 363.35l.65-1.2a.27.27 0 00-.11-.38l-4.33-2.2a.3.3 0 00-.39.13l-.65 1.2a.27.27 0 00.1.38l4.34 2.2a.3.3 0 00.39-.13z'
                    />
                    <path
                        className='person3__cls-2'
                        d='M144.65 271.2c1.16 3.4 2 7 4.07 9.89 4 5.46 11.59 6.71 17.08 10.66 7.59 5.46 10.57 15.6 17.67 21.69 3.64 3.12 8.34 5.16 11 9.19 1.37 2.09 2.11 4.61 3.77 6.47a33.25 33.25 0 012.93 3c2.33 3.41.17 8.4-3 11.33-1 1-5.86 5.06-7.24 5.37-1.94.45-.3-3.48-2-4.37-4.45-2.27-8.25-5.57-12-8.81Q152.7 315 127 296.32c-5-3.64-10.55-8.12-10.59-14.47a16.84 16.84 0 011.76-6.92 41.35 41.35 0 018.74-12.62 12.2 12.2 0 014.39-3.06c8.07-2.82 11.29 5.91 13.35 11.95z'
                    />
                    <path
                        className='person3__cls-1'
                        d='M122.72 54c.15 2.33-.23 4.71.35 7a22.82 22.82 0 002.24 4.84 16.61 16.61 0 012.21 8.48 10.52 10.52 0 01-5.35 8.68 8.94 8.94 0 01-9.81-1 13.44 13.44 0 01-3.79-6.85 30 30 0 01-.94-10.25c.38-4.71 1.88-9.42 1.15-14.09-.37-2.44-1.35-4.76-1.64-7.21a6.28 6.28 0 01.75-4.27 3 3 0 013.74-1.16c-1.07-1.82 1.47-.77 2.07-.34a21.29 21.29 0 014.12 4.69c2.53 3.3 4.62 7.19 4.9 11.48z'
                    />
                    <path
                        className='person3__cls-2'
                        d='M28 293.62c.1-17.39-3.68-20.6.07-35.08 8.76 6.95 9.86 5.46 25.91 9.4-1.06 4.71-5.55 11.29-5.35 18.23.6 21.27-4.37 58.43-6.87 74.55L27.88 359c-1.32-16.11.02-49.35.12-65.38z'
                    />
                    <path
                        className='person3__cls-2'
                        d='M28.07 258.54a82.26 82.26 0 016.94-17 255.58 255.58 0 0120.93-33.59c2.12-2.87 8-15.86 8-15.86l5.49 2 60.41-.78a27.49 27.49 0 01-2.15 3.09c-2.85 8-9.59 22.73-15.33 28.38-18.91 18.62-38.48 18.7-45.42 38.82a8.09 8.09 0 01-7 5.27c-12.33 1.04-25.13-2.73-31.87-10.33z'
                    />
                    <path
                        className='person3__cls-2'
                        d='M60.75 275.39c-2 3-4.33 5.88-5.28 9.31-1.81 6.52 1.89 13.22 2.17 20 .4 9.33-5.75 17.93-6.16 27.26-.2 4.79 1.09 9.73-.44 14.29-.8 2.36-2.33 4.51-2.77 7a30.22 30.22 0 01-.56 4.15c-1.24 3.93-6.51 5.34-10.77 4.67-1.43-.22-7.61-1.46-8.72-2.34-1.55-1.25 2.57-2.4 2.19-4.3-1-4.89-.71-9.91-.5-14.88q1.31-31.69.1-63.42c-.24-6.17-.14-13.28 4.84-17.25a17.09 17.09 0 016.55-2.9 41.69 41.69 0 0115.34-1 12.18 12.18 0 015.13 1.54c7.25 4.59 2.36 12.48-1.12 17.87z'
                    />
                    <path
                        className='person3__cls-3'
                        d='M44.61 360.72c-.74 4.82-1.27 7.78-1.36 7.85C39 372 35.51 372 32.46 367.7c-.83-1.17-1.37-4.3-1.73-8.67z'
                    />
                    <path
                        className='person3__cls-3'
                        d='M13.24 370.32l27.82-5.62c1.37-.28 2.93.35 3.09 1.24l2.61 13.81L9.67 376c-1.67-2.12-.67-4.81 3.57-5.68z'
                    />
                    <path
                        className='person3__cls-2'
                        d='M46.76 379.75l.07.38c.16.82-1 1.46-2.35 1.33l-28.82-2.78c-2.9-.28-4.95-1.37-6-2.69z'
                    />
                    <path
                        className='person3__cls-4'
                        d='M28.22 370.89l1.35-.23a.27.27 0 00.23-.32l-.95-4.76a.29.29 0 00-.34-.22l-1.35.23a.27.27 0 00-.23.32l.95 4.76a.29.29 0 00.34.22zM23.87 371.55l1.35-.23a.27.27 0 00.23-.32l-.95-4.76a.29.29 0 00-.34-.22l-1.35.23a.27.27 0 00-.23.32l1 4.76a.29.29 0 00.29.22zM19.72 372.37l1.34-.23a.28.28 0 00.24-.32l-.95-4.76a.31.31 0 00-.35-.22l-1.34.23a.29.29 0 00-.24.33l.95 4.75a.3.3 0 00.35.22z'
                    />
                    <path
                        className='person3__cls-3'
                        d='M44.24 363.53c-.78 6.25-3.61 8.17-6.64 8.3-6.87.3-6.46-8.53-6.45-9z'
                    />
                    <path
                        className='person3__cls-1'
                        d='M65.08 146.32c2.21-24.83-2.37-40.66-1.28-53.58a8.23 8.23 0 01.14-1.51 16.64 16.64 0 01.48-2.09c.57-1.93 1.17-4.09 1.87-6.24A27.21 27.21 0 0175 70.31c14.73-12 28.92-6.92 38.7-1.14l3.36 2.09c15.84 9.85 10 32.39 10 32.39-2 11-5.73 16.26-6.09 28.5-.66 23.1 16.51 43.37 17.5 68.71 0 0-11.08 3.21-10.72 3.68 2.7 3.43 3.12 7.61-.19 10.49-9.51 8.24-9.45-3.56-21.13-6.91-17.29-5-29.12-1.37-41.46-6.84a8.35 8.35 0 01-5.1-7.28c-.81-25.18 2.47-17 5.21-47.68z'
                    />
                    <path
                        className='person3__cls-3'
                        d='M64.94 63.22c0 14.58 12.78 26.4 28.56 26.4s23.41-11.82 23.41-26.4 3.76-26.4-12-26.4-39.97 11.82-39.97 26.4z'
                    />
                    <path
                        className='person3__cls-2'
                        d='M120.93 34.47a12.67 12.67 0 001.62 3.15c.69.74 1.65 1.16 2.39 1.84a2.21 2.21 0 01.62 2.74c-.28.4-.75.64-1 1-.79 1.13.28 2.54.75 3.81a4.43 4.43 0 01-.8 4.33c-.73.85-1.83 1.55-1.89 2.66 0 .87.63 1.7.35 2.54-.4 1.22-2.26 1.05-3.15 2-.63.65-.61 1.66-.84 2.54a4.52 4.52 0 01-3.49 3.25 8.09 8.09 0 00-2.61.46c-1 .55-1.53 1.88-2.61 2.26-2.26.8-3-1.91-4.74-3.23-2.13-1.66-5.93-1.06-7-3.56-.26-.59-.33-1.31-.84-1.7s-1.28-.25-1.83-.58c-1-.62-.77-2.33-1.29-3.37-.08-.08-.47-.59-.55-.63-4.56-5.54-5.79-12.52-2.45-17.35 2.77-4 8-5.55 13.6-4.62a5.71 5.71 0 014.22-1.74c2.84-.09 4 2.4 6.32 2.67.91.1 1.77-.56 2.68-.57a3.16 3.16 0 012.54 2.1z'
                    />
                    <path
                        className='person3__cls-2'
                        d='M94.79 43.07c3.16-2 9.34-3.8 11.78-5.54a23.28 23.28 0 004.59-4 9.52 9.52 0 002-4.27s-1.11-2.38-.21-.61A16.2 16.2 0 01111.4 17a14.68 14.68 0 00-3.31-7.15c-5-6.2-8-5.72-11.49-7.35S93.36 1.31 88.93.32a14.3 14.3 0 00-11.28 2.39A28.33 28.33 0 0075.15 5c-.69.84-1.31 1.73-2 2.6-1 .49-4.81 2.59-5.46 5.26-1.28 5.26.13 7.64.13 7.64 2.73-.22 5.49-3.65 7.77-3a7.72 7.72 0 012 1c3.09 2.26 5.65 4.1 6.44 8.13.64 3.31-.83 7.17 1.36 9.83 2 2.38 6 2.53 8.13 4.76a6.06 6.06 0 011.27 1.85z'
                    />
                    <path
                        className='person3__cls-2'
                        d='M116.2 28.92c-.65 2.59-11.1 14.18-15.2 16.88 0 0-4.18 5.76-4.19 5.75-4.26-3.73.13-13.49.13-13.49 1-.9 1.62-2.86 1.41-5.05-.27-2.91-1.85-5.14-3.53-5-.12 0-.22.11-.34.16l10.36-11.12c1.83 5.05 14.03 1.27 11.36 11.87z'
                    />
                    <path
                        d='M77.54 22.8l17.13.95a1.41 1.41 0 001.48-1.31l.5-9.11a2.75 2.75 0 00-2.6-2.9l-15.77-.87a6.63 6.63 0 10-.74 13.24z'
                        fill='#ffa27f'
                    />
                    <path
                        className='person3__cls-2'
                        d='M101.51 42.35a17.75 17.75 0 01-3.78 5.93 12.32 12.32 0 01-3.1-8.86c1.13-.74 2-2.56 2.11-4.74.15-2.9-1.07-5.31-2.74-5.39a1.65 1.65 0 00-.36.11l11.75-9.4c1.03 5.17.26 12.35-3.88 22.35z'
                    />
                    <path
                        className='person3__cls-6'
                        d='M74.31 10.44a15.45 15.45 0 00-6.63 11.83L67 34.77a15.65 15.65 0 0031.3 1.58l.61-12.09z'
                    />
                    <path
                        className='person3__cls-6'
                        d='M84.48 39.51c.08-1.61 1.17-2.87 2.42-2.81l9.06.46c1.25.06 2.2 1.43 2.12 3l-.92 18.12-13.58-1.08z'
                    />
                    <path
                        className='person3__cls-7'
                        d='M97.16 58.32l-.61 12c-.08 1.6-1.17 2.87-2.42 2.81l-9.06-.46c-1.25-.06-2.2-1.43-2.12-3l.63-12.47z'
                    />
                    <path
                        className='person3__cls-2'
                        d='M82.49 21.7l3.8.21a1 1 0 01-.11 2l-3.8-.22a1 1 0 11.11-2zM68.59 20.93l3 .17a1 1 0 01-.11 2l-3-.17a.91.91 0 01-.73-1 .93.93 0 01.84-1z'
                    />
                    <path
                        d='M73.1 33.3l.14-.33a1.92 1.92 0 001.14 1.74l1.66.64a1.24 1.24 0 001.47-.54c.17 1.36-.81 2.31-1.77 1.94l-1.66-.65a2.1 2.1 0 01-.98-2.8z'
                        fill='#fa694f'
                    />
                    <path
                        className='person3__cls-2'
                        d='M82.71 28.17c-.06 1 .41 1.77 1 1.81s1.18-.72 1.24-1.68-.42-1.77-1-1.81-1.19.72-1.24 1.68z'
                    />
                    <path
                        className='person3__cls-2'
                        d='M83.94 26.5l-1.93-.11 1.12 1.25.81-1.14zM69.06 27.42c0 1 .41 1.77 1 1.8s1.18-.72 1.23-1.68-.41-1.77-1-1.8-1.17.72-1.23 1.68z'
                    />
                    <path className='person3__cls-2' d='M70.29 25.74l-1.93-.11 1.13 1.26.8-1.15z' />
                    <path
                        className='person3__cls-6'
                        d='M98.34 29.81c2.45.13 4.3 2.6 4.15 5.53s-2.24 5.21-4.68 5.09-4.3-2.6-4.15-5.53 2.24-5.21 4.68-5.09z'
                    />
                    <path
                        className='person3__cls-2'
                        d='M102.72 18.65c-1.56-3.72-1.82-8.31-4.93-10.85-1.93-1.57-4.55-1.95-7-1.95a57.89 57.89 0 00-8.89.92l-6.43 1a1.57 1.57 0 00-.71.23 1.57 1.57 0 00-.45.69c-.44 1-2 3.37-1.81 4.43s1.74 1.33 2.73 1.45a23.92 23.92 0 0117.89 11c1.69 2.9 2.5 6.28 4.27 9.14a15.43 15.43 0 004.48 4.69c.23.15 6.4-12.39 6.4-12.39-1.99-2.71-4.27-5.28-5.55-8.36z'
                    />
                    <path className='person3__cls-1' d='M79.59 39.82c-.19 1-.37 2.11-2.71 2.29 0 0-3.91.34-3.4-2.15z' />
                    <path
                        className='person3__cls-7'
                        d='M89.54 64.25a15.32 15.32 0 0110.77 3.12c2.15 1.57 2.11 4.55-.11 6.53Q95 78.51 90 83.24c-1.94 1.83-5.16 1.6-6.18-.44-4-8-2.92-5.65-5-10.77-1.73-4.22 6.18-7.27 10.72-7.78z'
                    />
                    <path
                        className='person3__cls-1'
                        d='M125.66 151.74q5.52 19 10.29 38.3a154.93 154.93 0 014.29 22.27c.75 7.73-.35 17-6.85 20.78-5.28 3.06-11.8 1.1-17.84 1.28-4.76.14-9.39 1.67-14.11 2.38-13.84 2.06-27.65-3-40.79-8.05-2.67-1-5.43-2.1-7.47-4.19-3.08-3.15-3.9-7.95-4.32-12.44-1.47-15.67 0-31.47 1.55-47.13 1.56-15.42 3.6-31.76 13-43.74a38.56 38.56 0 0131.86-14.72c9.09.49 21.39 5.13 26.77 13.4 3.12 4.79.65 8.05.41 13.54-.26 6.2 1.55 12.44 3.21 18.32z'
                    />
                    <path className='person3__cls-9' d='M20.58 80.95L9.95 105.52l19.85 8.59 10.7-24.54-19.92-8.62z' />
                    <path className='person3__cls-1' d='M40.5 89.57l-20.71 47.5 4.42 1.92 20.8-47.48-4.51-1.94z' />
                    <path className='person3__cls-9' d='M34.22 116.03l20.94 9.05 10.63-24.57-20.78-9-10.79 24.52z' />
                    <path
                        className='person3__cls-1'
                        transform='rotate(-66.6 44.266 88.255)'
                        d='M41.56 63.62h5.39v49.26h-5.39z'
                    />
                    <path className='person3__cls-9' d='M47.18 86.58l20.75 8.98 5.51-12.74-20.67-8.95-5.59 12.71z' />
                    <path className='person3__cls-1' d='M48.21 71.9l-5.55 12.72 4.52 1.96 5.59-12.71-4.56-1.97z' />
                    <path className='person3__cls-9' d='M28.23 63.26L22.72 76l19.94 8.62 5.55-12.72-19.98-8.64z' />
                    <path
                        className='person3__cls-3'
                        d='M15.54 92.61L0 128.51l19.79 8.56 15.63-35.86-19.88-8.6zM24.13 138.95l21.08 9.12 15.54-35.9-20.86-9.03-15.76 35.81z'
                    />
                    <path
                        className='person3__cls-6'
                        d='M22.41 95.73a1.4 1.4 0 01-1.77.86l-6.75-2.12a1.35 1.35 0 11.81-2.57l6.75 2.1a1.39 1.39 0 01.96 1.73z'
                    />
                    <path
                        className='person3__cls-6'
                        d='M5.68 96.17l.72-1.77a5.51 5.51 0 017.89-2.65l.54.33a8 8 0 013.72 4.68 4.74 4.74 0 01-1.67 4.79 16.21 16.21 0 01-4.22 2.86 3.53 3.53 0 01-2 .44 6 6 0 01-2.81-1.55A8.55 8.55 0 016 101a5.46 5.46 0 01-.32-4.83z'
                    />
                    <path
                        className='person3__cls-6'
                        d='M16.38 97.67l4.31 9.21a1.26 1.26 0 102.31-1.06l-4.32-9.21a1.25 1.25 0 00-2.27 1.06zM13.73 100l4.31 9.2a1.25 1.25 0 102.27-1.06L16 99a1.25 1.25 0 10-2.27 1zM9.7 100.34l4.3 9.21a1.25 1.25 0 002.27-1.06L12 99.28a1.26 1.26 0 00-2.28 1.06zM6 99.27l4.31 9.21a1.26 1.26 0 002.28-1.06l-4.34-9.21a1.27 1.27 0 00-1.67-.6A1.25 1.25 0 006 99.27zM59.73 122c2-1.55 2.79-2.85 3.58-5.83l4.12 2 6.13 3-3.77 7.57c-2-1.32-3.89-2.61-5.81-3.87-1.44-1-2.9-2-4.25-2.87zM59.71 106.28a1.4 1.4 0 00-.64 1.85l2.93 6.43a1.36 1.36 0 102.47-1.11L61.53 107a1.39 1.39 0 00-1.82-.72z'
                    />
                    <path
                        className='person3__cls-6'
                        d='M53.9 121.55A6 6 0 0152 119a3.47 3.47 0 01.2-2 16 16 0 012.35-4.52 4.75 4.75 0 014.57-2.22 8.06 8.06 0 015.1 3.12c2.25 2.91 3 4 3.25 7 .28 3.77-1.64 6-6.58 4.32-2.52-.93-5.14-1.43-6.99-3.15z'
                    />
                    <path
                        className='person3__cls-6'
                        d='M58.49 112.48l-9.68-3.17a1.25 1.25 0 11.79-2.38l9.68 3.17a1.25 1.25 0 11-.79 2.38zM56.47 115.39l-9.68-3.18a1.26 1.26 0 01-.81-1.58 1.27 1.27 0 011.59-.8l9.68 3.17a1.24 1.24 0 01.8 1.58 1.26 1.26 0 01-1.58.81zM56.63 119.4L47 116.23a1.26 1.26 0 01-.8-1.58 1.27 1.27 0 011.59-.8l9.63 3.15a1.25 1.25 0 11-.79 2.37zM58.14 123l-9.68-3.17a1.25 1.25 0 11.78-2.38l9.69 3.17a1.25 1.25 0 11-.79 2.38z'
                    />
                    <path
                        className='person3__cls-1'
                        d='M73.54 116.89c5.21 3 12.24 6.63 21.89 11.13a6.47 6.47 0 008.79-3.66l9.86-31a8.57 8.57 0 011.1-2.06 3.28 3.28 0 014.41-.73l20.31 14.23a2.46 2.46 0 01.91 2.93c-17.18 44.9-19.9 49.15-25.74 51.37-.47.18-.94.33-1.45.5l-.63.2c-8.14 2.67-33.26-16.14-50.31-30.71a4 4 0 01-.35-5.73l4.55-5.28a5.43 5.43 0 016.66-1.19z'
                    />
                    <path className='person3__cls-1' d='M140.81 107.73s6.11-23-19.64-31L114.1 93.3z' />
                </g>
            </g>
        </StyledSVG>
    );
};

export default memo(Person3);