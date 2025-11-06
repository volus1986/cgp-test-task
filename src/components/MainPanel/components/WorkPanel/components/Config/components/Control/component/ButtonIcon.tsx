import React from 'react';

export default function ButtonIcon({
    bgColor = '',
    icon,
    onClick,
}: {
    bgColor?: string;
    icon: string;
    onClick?: (e: React.MouseEvent) => void;
}) {
    return (
        <button
            style={{ backgroundColor: bgColor }}
            className={`
            w-[21px] h-[21px]
            flex items-center justify-center
            cursor-pointer
            rounded-[3px]
        `}
            onClick={onClick}
        >
            <img src={icon} alt="" />
        </button>
    );
}
