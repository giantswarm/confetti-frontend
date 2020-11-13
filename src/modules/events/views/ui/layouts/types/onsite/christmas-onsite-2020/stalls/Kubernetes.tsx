import { memo } from "react";
import styled from "styled-components";

import Stall from "./Stall";

const StyledStall = styled(Stall)`
    width: 9%;
    position: absolute;
    left: 30%;
    top: -1.1vw;
    z-index: 1;
`;

interface KubernetesProps extends React.ComponentPropsWithoutRef<typeof Stall> {}

const Kubernetes: React.FC<KubernetesProps> = (props) => {
    return (
        <StyledStall {...props}>
            <svg viewBox='0 0 360.01 328.34'>
                <defs>
                    <style>
                        {
                            ".kubernetes__cls-3{fill:#fff}.kubernetes__cls-6{fill:#ee6d55}.kubernetes__cls-7{fill:#141f49}.kubernetes__cls-8{fill:#d8402b}.kubernetes__cls-9{fill:#fcf8cd}.kubernetes__cls-10{fill:#ffe09c}.kubernetes__cls-11{fill:#d9f2fc}"
                        }
                    </style>
                </defs>
                <g
                    style={{
                        isolation: "isolate",
                    }}
                >
                    <g id='kubernetes__Layer_2' data-name='Layer 2'>
                        <g id='kubernetes___Layer_' data-name='&lt;Layer&gt;'>
                            <g id='kubernetes__kubernetes'>
                                <path fill='#ffb072' d='M25.06 211.9h318.7v115.69H25.06z' />
                                <path className='kubernetes__cls-3' d='M20.13 205.25h327.84v6.65H20.13z' />
                                <path fill='#370625' d='M25.09 211.9h318.32v13.69H25.09z' opacity={0.26} />
                                <path
                                    className='kubernetes__cls-6'
                                    d='M25.1 211.83h318.73v115.72H25.1zM326.24 49.25h8.5v156.06h-8.5zM30.51 49.21h8.5v156.06h-8.5z'
                                />
                                <path className='kubernetes__cls-7' d='M39.01 78.41h287.23v126.9H39.01z' />
                                <path
                                    className='kubernetes__cls-8'
                                    d='M25.1 229.68h318.73v.97H25.1zM25.1 249.44h318.73v.97H25.1zM25.1 269.2h318.73v.97H25.1zM25.1 288.96h318.73v.97H25.1zM25.1 308.72h318.73v.97H25.1z'
                                />
                                <path
                                    className='kubernetes__cls-3'
                                    d='M4.63 45.68v51.07a15.92 15.92 0 0015.93 15.92h7.09a15.93 15.93 0 0015.94-15.92V45.68zM317.38 45.68v51.07a15.92 15.92 0 0015.94 15.92h7.08a15.92 15.92 0 0015.94-15.92V45.68z'
                                />
                                <path
                                    className='kubernetes__cls-6'
                                    d='M43.59 45.68v51.07a15.93 15.93 0 0015.94 15.92h7.08a15.92 15.92 0 0015.94-15.92V45.68zM278.42 45.68v51.07a15.92 15.92 0 0015.93 15.92h7.09a15.93 15.93 0 0015.94-15.92V45.68z'
                                />
                                <path
                                    className='kubernetes__cls-3'
                                    d='M82.55 45.68v51.07a15.93 15.93 0 0015.94 15.92h7.09a15.92 15.92 0 0015.93-15.92V45.68zM239.45 45.68v51.07a15.93 15.93 0 0015.94 15.92h7.09a15.93 15.93 0 0015.94-15.92V45.68z'
                                />
                                <path
                                    className='kubernetes__cls-6'
                                    d='M121.51 45.68v51.07a15.93 15.93 0 0015.94 15.92h7.09a15.93 15.93 0 0015.94-15.92V45.68zM200.49 45.68v51.07a15.93 15.93 0 0015.94 15.92h7.08a15.92 15.92 0 0015.94-15.92V45.68z'
                                />
                                <path
                                    className='kubernetes__cls-3'
                                    d='M160.48 45.68v51.07a15.92 15.92 0 0015.94 15.92h8.13a15.92 15.92 0 0015.94-15.92V45.68z'
                                />
                                <path
                                    className='kubernetes__cls-7'
                                    d='M137.14 90.89c-45.11 0-88.48-9.19-113.5-38l.94-.81C64.23 97.75 150.8 93.56 216.43 82c71.24-12.55 133.88-36.25 134.51-36.49l.44 1.16c-.62.24-63.36 24-134.71 36.55-24.74 4.36-52.45 7.67-79.53 7.67z'
                                />
                                <path
                                    className='kubernetes__cls-9'
                                    d='M289.64 62.61a3.32 3.32 0 103.6-3 3.35 3.35 0 00-3.6 3zM231.67 75.52a3.36 3.36 0 003 3.64 3.32 3.32 0 003.6-3 3.37 3.37 0 00-3-3.64 3.32 3.32 0 00-3.6 3zM156.23 86.63a3.36 3.36 0 003 3.64 3.32 3.32 0 003.6-3 3.37 3.37 0 00-3-3.64 3.32 3.32 0 00-3.6 3zM79.06 82.22a3.32 3.32 0 103.6-3 3.35 3.35 0 00-3.6 3z'
                                />
                                <path
                                    className='kubernetes__cls-10'
                                    d='M265.49 73.55a3.18 3.18 0 002.87 3.45 3.13 3.13 0 003.4-2.88 3.15 3.15 0 10-6.27-.57zM194.68 87.31a3.17 3.17 0 002.86 3.45 3.14 3.14 0 003.46-2.87 3.18 3.18 0 00-2.86-3.45 3.14 3.14 0 00-3.46 2.87zM119.13 91.61a3.18 3.18 0 002.87 3.45 3.14 3.14 0 003.41-2.88 3.18 3.18 0 00-2.86-3.45 3.14 3.14 0 00-3.42 2.88zM41.33 71.13a3.15 3.15 0 103.41-2.88 3.14 3.14 0 00-3.41 2.88z'
                                />
                                <path
                                    className='kubernetes__cls-3'
                                    d='M348.38 51.77c-2.52-.54-5-1.56-7.57-1.28-3.45.36-6.27 3-9.74 2.86-4.78-.2-8.56-5.58-13.06-4.24-3.22 1-3.79 4.55-5.08 7.26-2.26 4.76-10.6 7.48-14.3 3.37-2.23-2.47-1.8-6.3-4.45-8.45-4.22-3.44-10.93.57-16.7.13-3.54-.27-6.65-2.29-10.17-2.66-5.92-.63-11.27 3.43-17.22 3.38-6.38-.06-11.67-4.75-18-5.32-5.09-.45-10.09 1.84-15.19 1.38-4.94-.44-9.31-3.41-14.27-3.59-9.45-.37-15.37 9-24.4 11.33-7.5 1.94-16.47-2.08-19-8.52-1.9-4.88-11.76-2.7-17.33-.91s-11.23 4.4-17.13 3.56c-4.23-.6-8.64-2.93-12.47-1.34-1.55.64-2.69 1.84-4.18 2.56-3.74 1.79-8.46.16-12.07-1.87s-7.25-4.58-11.54-4.68C78.66 44.61 74.28 49 69.63 52s-12.73 4.3-15.42-.23c-.94-1.59-.93-3.58-2.3-4.92-2.74-2.67-7.75-.49-10.76 1.89s-7.49 5-10.75 2.81c-2.61-1.74-2.14-5.25-3.81-7.69s-5.24-3.44-8.46-3.18a28.18 28.18 0 00-9 2.82c0-2.69-4-3.93-7.1-4H.7c.86-3.34 5-7.76 13.47-7.62 3.67.07 7.44.79 11 .85 9.28.16 11.32-6 26.11-5.73 15.28.27 26.82 8.4 31.3 8.48 5 .09 10.85-3.26 17-3.16 9.72.17 15.09 8.56 26.65 8.76 13.29.23 19.87-8.31 39.35-8 35.57.61 63.75 5.45 80.72 6.63 5.67.39 9.89 1.7 14.06 1.77 7.05.12 13.81-3.62 20.51-3.34 5.52.23 7.28 2.31 17.78 1.75 19.75-1 27.86-3.31 36-3.17a35 35 0 0119 5.87c2.6 1.73 5.44 3.24 6.14 5.43a5.26 5.26 0 01.26 1.62 3.09 3.09 0 01-.49 1.53 21.37 21.37 0 01-11.18.6z'
                                />
                                <path
                                    className='kubernetes__cls-11'
                                    d='M.66 39.49h1.33c3.13.09 7.07 1.33 7.1 4a28.18 28.18 0 019-2.82c3.22-.26 6.81.76 8.46 3.18s1.2 6 3.81 7.69c3.26 2.17 7.74-.44 10.75-2.81s8-4.56 10.76-1.89c1.37 1.34 1.36 3.33 2.3 4.92C56.9 56.34 65 55.09 69.63 52s9-7.43 14.91-7.3c4.29.1 7.92 2.65 11.54 4.68s8.33 3.66 12.07 1.87c1.49-.72 2.63-1.92 4.18-2.56 3.83-1.59 8.24.74 12.47 1.34 5.9.84 11.56-1.77 17.13-3.56s15.43-4 17.33.91c2.5 6.44 11.47 10.46 19 8.52 9-2.35 15-11.7 24.4-11.33 5 .18 9.33 3.15 14.27 3.59 5.09.46 10.08-1.83 15.17-1.38 6.35.57 11.64 5.26 18 5.32 6 0 11.3-4 17.22-3.38 3.52.37 6.63 2.39 10.17 2.66 5.77.44 12.48-3.57 16.7-.13 2.65 2.15 2.22 6 4.45 8.45 3.7 4.11 12 1.39 14.3-3.37 1.29-2.71 1.86-6.3 5.08-7.26 4.5-1.34 8.28 4 13.06 4.24 3.47.15 6.29-2.5 9.74-2.86 2.56-.28 5.05.74 7.57 1.28a21.37 21.37 0 0011.14-.58C356.46 56.29 340 61.45 339 61.44c-2.78 0-5.71-1-8.3-1.08-6.2-.11-10 11.86-25.37 11.59-17.72-.3-29.71-17.23-35.1-17.33-6.37-.11-7.21 2.3-13.78 4.05-5.8 1.55-12.57.59-17.85.5-10.87-.19-12.1-5.82-25.67-6.06-18.6-.32-33.08 14.16-39.4 14-9.26-.16-13.94-14.34-24.6-14.52-9.46-.17-19.5 11.85-24.57 11.76-3-.05-5.64-3-8.09-3.08-2.63 0-4.86 2.52-7.8 2.47-5.91-.1-5-7.25-9.67-7.33-7.29-.13-24.27 20.25-38 20-6.55-.12-10.92-4.4-13.5-8.12a11.71 11.71 0 00-9.56-4.59c-9.05-.1-14.24-6.7-19.11-13.6C15.9 46.22.4 49.36.49 40.73a5.12 5.12 0 01.17-1.24z'
                                />
                                <path
                                    className='kubernetes__cls-11'
                                    d='M3.38 40.71l-2.82.52a.13.13 0 00-.09.13L.3 55.21c0 .16.19.18.21 0l1-7.82c0-.12.13-.16.18-.06l.65 1.14c0 .09.17 0 .19-.06l1-7.57c-.02-.07-.08-.14-.15-.13zM334.08 60.55l6.93-.77c.1 0 .21 0 .2.08L339 70a.07.07 0 01-.13 0l.28-6.78a.06.06 0 00-.12 0l-1 3a.23.23 0 01-.43 0l-1.45-4.06c-.11 0-.92 1-.92 1L334 60.63s0-.07.08-.08zM123.33 63.38l4.36-.88c.06 0 .13 0 .12.08l-1.54 10.11c-.07 0 .2-6.79.2-6.79l-.73 3c0 .21-.23.22-.27 0l-.85-4a6.22 6.22 0 00-.59 1c-.07 0-.76-2.39-.76-2.39s.01-.12.06-.13z'
                                />
                                <path
                                    className='kubernetes__cls-3'
                                    d='M43.38 13.14c6.5.63 13 2.57 19.48 1.68 6.94-.94 13.61-5.08 20.58-5.26 8.15-.21 15.9 5 24 6.6C125.88 19.87 143.55 4.85 162 1a48.2 48.2 0 0133.75 5.57c7.63 4.29 14.9 10.67 23 12 8.55 1.4 17.2-3 25.75-1.46 4.65.83 9.13 3.39 13.81 3.66 5.26.3 10.36-2.32 15.49-4.07 15.74-5.39 32.25-2.69 48.05 2.25a194 194 0 0125.35 10c4.45 2.1 8.38 8.15 11.66 18.28-39-6.7-81-10.8-119.82-2.18-5.44 1.21-10.93 2.57-16.42 2.08-6.53-.58-12.8-3.75-19.2-5.73-9.88-3.06-20.06-3.29-30.16-3.5-22.15-.47-31.39 5.17-53.53 6.54-8.7.54-30.33-4.74-39-4.74s-17.2-.8-25.78-1.59l-27.69-2.64C22.12 35-.52 48.54 0 39.68 1.49 15 37.7 12.58 43.38 13.14z'
                                />
                                <path
                                    d='M23.19 328.34c.24-.4.5-.79.77-1.16 4.32-5.83 11.38-8.05 18.07-8.37s13.38.91 20.07.55c18.14-1 34-13.34 49.69-23.74s34.28-19.41 51.57-13.09c14.49 5.3 25 20.46 39.65 25.33 23.24 7.76 54-14.55 74.68 5.62 3.71 3.6 6.24 9.17 7.08 14.86z'
                                    fill='#caeafc'
                                />
                                <g id='kubernetes__Layer_1-2' data-name='Layer 1-2'>
                                    <path
                                        d='M95 144.71a3.24 3.24 0 00-1.63-1.88l-15.54-7.44a2.87 2.87 0 00-1.27-.26 4.92 4.92 0 00-1.27.11l-15.54 7.48a2.77 2.77 0 00-1.53 1.89l-3.82 16.76a3.21 3.21 0 00.56 2.44l10.75 13.3a3.71 3.71 0 002.34 1.07h17.14a2.54 2.54 0 002.34-1.07l10.75-13.3a3.47 3.47 0 00.61-2.44z'
                                        stroke='#fff'
                                        strokeMiterlimit={10}
                                        strokeWidth={2.55}
                                        fill='#fff'
                                    />
                                    <path
                                        d='M95 144.71a3.24 3.24 0 00-1.63-1.88l-15.54-7.44a2.87 2.87 0 00-1.27-.26 4.92 4.92 0 00-1.27.11l-15.54 7.48a2.77 2.77 0 00-1.53 1.89l-3.82 16.76a3.21 3.21 0 00.56 2.44l10.75 13.3a3.71 3.71 0 002.34 1.07h17.14a2.54 2.54 0 002.34-1.07l10.75-13.3a3.47 3.47 0 00.61-2.44z'
                                        fill='#326de6'
                                    />
                                    <path
                                        className='kubernetes__cls-3'
                                        d='M92.63 160.71s-.1 0-.1-.05-.11-.06-.21-.06a2.51 2.51 0 00-.61 0 .7.7 0 01-.31-.05h-.05a10.45 10.45 0 01-1.73-.3.67.67 0 01-.36-.36l-.4-.1a13.24 13.24 0 00-.21-4.48 13.46 13.46 0 00-1.78-4.18l.31-.31v-.05a.75.75 0 01.15-.46 10.07 10.07 0 011.43-1l.3-.15.56-.3s.1 0 .15-.11 0-.05 0-.1a1 1 0 00.21-1.42 1 1 0 00-.72-.36 1.25 1.25 0 00-.71.25v.06s-.1.1-.15.1a2.88 2.88 0 00-.41.46c0 .1-.15.15-.2.2a6.86 6.86 0 01-1.33 1.06.71.71 0 01-.3.1.33.33 0 01-.16-.1l-.4.26c-.41-.41-.87-.82-1.28-1.23a13.16 13.16 0 00-6.62-2.65v-.4a.73.73 0 01-.26-.41 9.41 9.41 0 01.11-1.73v-.05-.31c0-.1 0-.41.1-.61v-.31a1 1 0 00-1.73-.71 1 1 0 00-.31.71v.26a2.59 2.59 0 00.1.61.65.65 0 010 .31 8.89 8.89 0 01.11 1.73.82.82 0 01-.26.41v.1l-.05.41c-.56.05-1.12.15-1.73.25a12.09 12.09 0 00-6.27 3.57l-.3-.21c-.06 0-.11.05-.21.05a.71.71 0 01-.3-.1 9 9 0 01-1.28-1.17c0-.1-.15-.15-.2-.2s-.26-.31-.41-.46-.1 0-.15-.1a1.2 1.2 0 00-.72-.26.76.76 0 00-.71.36 1.09 1.09 0 00.21 1.42l.05.05s.1.11.15.11a5.69 5.69 0 00.56.3l.3.15a7.85 7.85 0 011.43 1 .51.51 0 01.15.46v-.05l.31.31c0 .1-.1.15-.15.25a12.15 12.15 0 00-1.79 8.36l-.4.1v.05a1 1 0 01-.36.36 9.62 9.62 0 01-1.73.3.67.67 0 00-.31 0c-.2 0-.41.05-.61.05s-.1.05-.2.05h-.11a1 1 0 00-.81 1.18 1 1 0 001 .71.45.45 0 00.25-.05v-.05c0-.05.16 0 .21 0 .2 0 .41-.16.56-.21a.71.71 0 01.3-.1 10 10 0 011.69-.46.54.54 0 01.4.16v.05l.46-.05a12.34 12.34 0 004.18 6 8.23 8.23 0 001.38.91l-.26.36v.05a.61.61 0 010 .51 8.51 8.51 0 01-.81 1.48.78.78 0 01-.21.25c-.1.1-.2.31-.35.51 0 0 0 .1-.1.16a.05.05 0 01-.06 0 1 1 0 00.41 1.37 1 1 0 00.36.1 1.14 1.14 0 001-.61v-.05s0-.1.1-.15c.05-.21.15-.36.2-.56l.11-.31a8.11 8.11 0 01.66-1.58.76.76 0 01.6-.01l.2-.41a12 12 0 004.43.81 10.32 10.32 0 002.75-.35 15.5 15.5 0 001.63-.46l.21.36v.05a.78.78 0 01.4.3 8.82 8.82 0 01.67 1.58v.05l.1.31a1.85 1.85 0 00.2.56c0 .05 0 .1.1.15a.05.05 0 00.06.05 1.13 1.13 0 001 .61 1.17 1.17 0 00.41-.1.85.85 0 00.46-.56 1.32 1.32 0 000-.76v-.05a.28.28 0 00-.1-.16 2.34 2.34 0 00-.36-.51.88.88 0 00-.2-.25v-.1a5.84 5.84 0 01-.82-1.48.61.61 0 010-.51l.05-.05-.19-.48a12.58 12.58 0 005.5-6.93l.41.06v-.06a.58.58 0 01.41-.15 8.73 8.73 0 011.63.46.71.71 0 00.3.1 3.09 3.09 0 00.56.26h.21c.1 0 0 0 .1.05a.47.47 0 00.26.05 1.11 1.11 0 001-.71 1.19 1.19 0 00-.75-1.02zm-14.72-1.58l-1.38.66-1.38-.66-.35-1.48 1-1.22h1.52l1 1.22zm8.3-3.31a9.94 9.94 0 01.2 3.21l-4.84-1.38a.83.83 0 01-.61-1 .82.82 0 01.21-.36l3.83-3.48a10.58 10.58 0 011.21 3.01zm-2.75-4.89l-4.18 2.95a.87.87 0 01-1.12-.2.49.49 0 01-.15-.36l-.31-5.15a9.64 9.64 0 015.76 2.76zm-9.22-2.6l1-.21-.26 5.1a.84.84 0 01-.86.81 1.17 1.17 0 01-.41-.1l-4.23-3a10 10 0 014.76-2.6zM68 152.81l3.77 3.36a.81.81 0 01.1 1.17.54.54 0 01-.4.26l-4.92 1.4a10.69 10.69 0 011.45-6.19zm-.86 8.61l5-.87a.85.85 0 01.87.67.59.59 0 01-.06.51l-1.93 4.68a10 10 0 01-3.86-4.99zm11.56 6.32a10.5 10.5 0 01-2.19.25 11.27 11.27 0 01-3.21-.51l2.5-4.53a.79.79 0 011-.21 3.25 3.25 0 01.4.36l2.45 4.43a6.83 6.83 0 00-.93.21zm6.21-4.44a9.59 9.59 0 01-3.05 3.06l-2-4.79a.83.83 0 01.46-1 1.52 1.52 0 01.46-.1l5.09.87a7.43 7.43 0 01-.94 1.96z'
                                    />
                                    <g id='kubernetes__layer1'>
                                        <g id='kubernetes__text4373'>
                                            <path
                                                id='kubernetes__path2985'
                                                className='kubernetes__cls-3'
                                                d='M118.35 158.52c.56-.62 1.07-1.23 1.68-1.84s1.12-1.27 1.68-1.88 1.07-1.23 1.53-1.79.92-1.07 1.28-1.47H131c-1.33 1.47-2.6 3-3.82 4.33s-2.6 2.8-4.08 4.23a23.51 23.51 0 012.29 2.39c.77.92 1.53 1.83 2.3 2.85s1.42 2 2 3a30.51 30.51 0 011.53 2.7H125c-.4-.67-.86-1.33-1.37-2.09s-1.07-1.53-1.58-2.35a27.16 27.16 0 00-1.83-2.24 12.35 12.35 0 00-1.84-1.78v8.51h-5.5v-27.96l5.5-.86v16.25'
                                            />
                                            <path
                                                id='kubernetes__path2987'
                                                className='kubernetes__cls-3'
                                                d='M150.44 170.23a34.3 34.3 0 01-8.25 1.07 11.27 11.27 0 01-4.12-.66 6.76 6.76 0 01-2.6-1.83 7.82 7.82 0 01-1.38-2.91 15 15 0 01-.4-3.67v-10.74h5.5v10.13a7.73 7.73 0 00.71 3.82 2.78 2.78 0 002.6 1.18 9.36 9.36 0 001.27-.06 7.28 7.28 0 001.17-.15v-14.92h5.5v18.74'
                                            />
                                            <path
                                                id='kubernetes__path2989'
                                                className='kubernetes__cls-3'
                                                d='M168.07 161.06c0-3.56-1.32-5.29-3.92-5.29a6.43 6.43 0 00-1.68.2 4.19 4.19 0 00-1.33.56v10c.26.05.61.11 1 .16a11.84 11.84 0 001.38.05 3.9 3.9 0 003.41-1.53 7.34 7.34 0 001.12-4.13m5.6.21a12 12 0 01-.71 4.22 8.49 8.49 0 01-1.94 3.19 9.14 9.14 0 01-3.15 2.09 12.22 12.22 0 01-4.28.72c-.66 0-1.38-.06-2.09-.11s-1.43-.15-2.14-.2-1.33-.2-2-.36a6.79 6.79 0 01-1.68-.45v-27.26l5.5-.86v9.67a13.69 13.69 0 011.94-.61 10.34 10.34 0 012.14-.2 8.37 8.37 0 013.67.76 7.55 7.55 0 012.65 2 8.88 8.88 0 011.63 3.21 18.28 18.28 0 01.45 4.13'
                                            />
                                            <path
                                                id='kubernetes__path2991'
                                                className='kubernetes__cls-3'
                                                d='M177 161.37a12.18 12.18 0 01.77-4.48 9.48 9.48 0 012.09-3.26 8 8 0 012.95-1.94 9.07 9.07 0 013.47-.66 8.55 8.55 0 016.52 2.54c1.58 1.69 2.39 4.18 2.39 7.39a8.41 8.41 0 010 1.07 7.68 7.68 0 00-.05 1h-12.55a3.65 3.65 0 001.58 2.7 6.6 6.6 0 003.77 1 18.47 18.47 0 002.95-.26 12.49 12.49 0 002.4-.71l.76 4.48a7.12 7.12 0 01-1.17.46 10.08 10.08 0 01-1.68.36l-1.94.3c-.66 0-1.37.11-2.09.11a11.75 11.75 0 01-4.58-.77 9 9 0 01-3.21-2.09 8.77 8.77 0 01-1.89-3.21 18.9 18.9 0 01-.51-4.07m12.94-2.09a4.47 4.47 0 00-.25-1.38 3.36 3.36 0 00-.61-1.17 3.53 3.53 0 00-1.07-.86 3.65 3.65 0 00-3.16 0 3.46 3.46 0 00-1.12.81 3.65 3.65 0 00-.71 1.22 6.23 6.23 0 00-.31 1.38h7.23'
                                            />
                                            <path
                                                id='kubernetes__path2993'
                                                className='kubernetes__cls-3'
                                                d='M211.17 156.38c-.51-.11-1.07-.26-1.74-.36a10.27 10.27 0 00-2.14-.2 12 12 0 00-1.27.1 8 8 0 00-1.07.2V171h-5.5v-18.5a27.25 27.25 0 013.46-1 16.72 16.72 0 014.49-.46h1.07a5.91 5.91 0 011.27.15 10.82 10.82 0 011.27.21 4.18 4.18 0 011.07.3l-.91 4.59'
                                            />
                                            <path
                                                id='kubernetes__path2995'
                                                className='kubernetes__cls-3'
                                                d='M215 152.15c1.17-.31 2.39-.56 3.61-.77a29 29 0 014.64-.35 11.23 11.23 0 014.08.66 5.89 5.89 0 012.59 1.78 7.27 7.27 0 011.38 2.8 14.68 14.68 0 01.41 3.62v11h-5.41V160.6a7.55 7.55 0 00-.72-3.77 2.88 2.88 0 00-2.6-1.12 9.43 9.43 0 00-1.27.06 7.86 7.86 0 00-1.17.1v15H215v-18.72'
                                            />
                                            <path
                                                id='kubernetes__path2997'
                                                className='kubernetes__cls-3'
                                                d='M235.92 161.37a12.18 12.18 0 01.77-4.48 9.48 9.48 0 012.09-3.26 8 8 0 012.95-1.94 9.05 9.05 0 013.46-.66 8.52 8.52 0 016.52 2.54c1.58 1.69 2.4 4.18 2.4 7.44a8.41 8.41 0 01-.05 1.07 7.68 7.68 0 00-.05 1h-12.48a3.65 3.65 0 001.58 2.7 6.6 6.6 0 003.77 1 18.47 18.47 0 003-.26 11 11 0 002.45-.76l.76 4.48a7.12 7.12 0 01-1.17.46 10.08 10.08 0 01-1.68.36l-1.94.3c-.66 0-1.37.11-2.09.11a11.72 11.72 0 01-4.58-.77 9 9 0 01-3.21-2.09 8.77 8.77 0 01-1.89-3.21 12.89 12.89 0 01-.56-4.07m12.89-2.09a4.47 4.47 0 00-.25-1.38 3.53 3.53 0 00-.61-1.17 3.66 3.66 0 00-1.07-.86 3.65 3.65 0 00-3.16 0 3.26 3.26 0 00-1.07.81 3.86 3.86 0 00-.72 1.22 6.82 6.82 0 00-.3 1.38h7.18'
                                            />
                                            <path
                                                id='kubernetes__path2999'
                                                className='kubernetes__cls-3'
                                                d='M258.18 146.65l5.51-.87v5.71h6.62v4.58h-6.62v6.83a5 5 0 00.61 2.75 2.69 2.69 0 002.49 1 9.46 9.46 0 001.79-.16 9.76 9.76 0 001.73-.45l.76 4.27a16.27 16.27 0 01-2.24.72 15 15 0 01-3 .3 9.19 9.19 0 01-3.72-.61 6 6 0 01-2.35-1.68 7 7 0 01-1.27-2.65 13.14 13.14 0 01-.31-3.41v-16.33'
                                            />
                                            <path
                                                id='kubernetes__path3001'
                                                className='kubernetes__cls-3'
                                                d='M273.11 161.37a12.17 12.17 0 01.76-4.48 9.63 9.63 0 012.09-3.26 8.1 8.1 0 013-1.94 9.05 9.05 0 013.46-.66 8.55 8.55 0 016.52 2.54c1.58 1.69 2.4 4.18 2.4 7.44a7 7 0 01-.06 1.07c0 .41-.05.71-.05 1h-12.47a3.71 3.71 0 001.58 2.7 6.62 6.62 0 003.77 1 18.49 18.49 0 003-.26 9.78 9.78 0 002.39-.76l.77 4.48a7.23 7.23 0 01-1.18.46 10.08 10.08 0 01-1.68.36c-.61.1-1.22.2-1.93.3s-1.38.11-2.09.11a11.8 11.8 0 01-4.59-.77 8.88 8.88 0 01-3.2-2.09 8.77 8.77 0 01-1.89-3.21 16.14 16.14 0 01-.56-4.07m12.85-2.05a4.21 4.21 0 00-.26-1.38 3.2 3.2 0 00-.61-1.17 3.42 3.42 0 00-1.07-.86 3.65 3.65 0 00-3.16 0 3.69 3.69 0 00-1.12.81 3.83 3.83 0 00-.71 1.22 7.61 7.61 0 00-.31 1.38H286'
                                            />
                                            <path
                                                id='kubernetes__path3003'
                                                className='kubernetes__cls-3'
                                                d='M301.18 167a5.18 5.18 0 002.14-.3 1.14 1.14 0 00.61-1.12 1.31 1.31 0 00-.82-1.13 11.64 11.64 0 00-2.49-1.12 20.73 20.73 0 01-2.35-1 7.09 7.09 0 01-1.78-1.23 4.91 4.91 0 01-1.12-1.73 6.5 6.5 0 01-.41-2.39 5.31 5.31 0 012-4.33 8.78 8.78 0 015.55-1.58 15.89 15.89 0 013.42.35 16.45 16.45 0 012.59.67l-1 4.33c-.72-.26-1.38-.41-2.09-.61a10.12 10.12 0 00-2.5-.26c-1.73 0-2.6.46-2.6 1.43a2.71 2.71 0 00.11.61 1.54 1.54 0 00.45.51c.21.15.51.3.87.51a9.83 9.83 0 001.48.61 18.27 18.27 0 012.95 1.32 5.61 5.61 0 011.84 1.43 4 4 0 011 1.68 7.54 7.54 0 01.31 2.14 4.89 4.89 0 01-2.19 4.38 10.81 10.81 0 01-6.11 1.48 15.34 15.34 0 01-4.33-.46c-.82-.2-1.58-.46-2.35-.71l.92-4.49a17.69 17.69 0 002.85.87c1 .05 2 .15 3 .15'
                                            />
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </StyledStall>
    );
};

export default memo(Kubernetes);
