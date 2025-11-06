import React from 'react';

export default function InputField({
    onClick,
    onChange,
    value,
    placeholder = '',
}: {
    onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    placeholder?: string;
}) {
    return (
        <div className="w-full p-[5px] rounded-s-xs bg-white">
            <input
                className="
                    w-full border border-[#e4e6f1] rounded-s-xs p-[5px]
                    font-[Roboto] font-normal text-[11px] leading-[150%] tracking-[2%]
                "
                type="input"
                placeholder={placeholder}
                value={value}
                onClick={onClick}
                onChange={onChange}
            />
        </div>
    );
}
