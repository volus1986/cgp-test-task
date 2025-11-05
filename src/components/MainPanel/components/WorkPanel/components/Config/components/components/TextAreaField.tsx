import React from 'react';

export default function TextAreaField({
    onClick,
    onChange,
    value,
}: {
    onClick: (e: React.MouseEvent<HTMLInputElement>) => void;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    value: string;
}) {
    return (
        <div className="w-full p-[5px] rounded-s-xs" onClick={onClick}>
            <textarea
                className="
                    w-full border border-[#e4e6f1] rounded-s-xs p-[5px]
                    font-[Roboto] font-normal text-[11px] leading-[150%] tracking-[2%]
                "
                rows={5}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}
