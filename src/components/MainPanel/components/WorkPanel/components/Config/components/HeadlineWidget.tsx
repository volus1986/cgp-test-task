import headlineIcon from '/src/assets/icons/headlineWidgetIcon.svg';
import InputField from './components/InputField.tsx';
import React from 'react';
import { useWidgets } from '../../../../../../../store/useWidgets.ts';
export default function HeadlineWidget({
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
        widgets.updateWidget(index, e.target.value);
    };

    const renderInput = () => {
        if (!isActive) return null;

        return (
            <InputField
                value={value}
                onChange={handleChange}
                placeholder="Headline text"
            />
        );
    };

    return (
        <>
            <img
                className="block w-[21px] h-[21px]"
                src={headlineIcon}
                alt="headline icon"
            />
            <div>Headline</div>
            {renderInput()}
        </>
    );
}
