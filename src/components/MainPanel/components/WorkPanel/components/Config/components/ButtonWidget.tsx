import buttonIcon from '/src/assets/icons/defaultWidgetIcon.svg';
import InputField from './components/InputField.tsx';
import React from 'react';
import { useWidgets } from '../../../../../../../store/useWidgets.ts';
export default function ButtonWidget({
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
                onClick={(e) => e.stopPropagation()}
                onChange={handleChange}
                placeholder="Button text"
            />
        );
    };

    return (
        <>
            <img
                className="block w-[21px] h-[21px]"
                src={buttonIcon}
                alt="Button icon"
            />
            <div>Button</div>
            {renderInput()}
        </>
    );
}
