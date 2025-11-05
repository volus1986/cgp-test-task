import React from 'react';

export default function Input({
    onChange,
    value,
}: {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}) {
    return (
        <div className="w-full p-[5px] rounded-s-xs">
            <input
                className="
                    w-full border border-[#e4e6f1] rounded-s-xs p-[5px]
                    font-[Roboto] font-normal text-[11px] leading-[150%] tracking-[2%]
                "
                type="input"
                value={value}
                onChange={onChange}
            />
        </div>
    );
}
