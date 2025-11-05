import headlineIcon from '/src/assets/icons/headlineWidgetIcon.svg';
import Input from './Input.tsx';
import React from 'react';
import { useWidgets } from '../../../../../../../store/useWidgets.ts';
export default function Headline({
    index,
    value,
    isActive,
}: {
    index: number;
    value: string;
    isActive: boolean;
}) {
    const widgets = useWidgets();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);

        widgets.updateWidget(index, e.target.value);
    };

    const renderInput = () => {
        if (!isActive) return null;

        return <Input value={value} onChange={handleChange} />;
    };

    return (
        <>
            <img
                className="block w-[21px] h-[21px]"
                src={headlineIcon}
                alt="headline"
            />
            <div>Headline</div>
            {renderInput()}
        </>
    );
}
