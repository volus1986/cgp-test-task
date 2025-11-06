import paragraphIcon from '/src/assets/icons/paragraphWidgetIcon.svg';
import React from 'react';
import { useWidgets } from '../../../../../../../store/useWidgets.ts';
import TextAreaField from './components/TextAreaField.tsx';

export default function ParagraphWidgetConfig({
    index,
    value,
    isActive,
}: {
    index: number;
    value: string;
    isActive: boolean;
}) {
    const widgets = useWidgets();
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        widgets.updateWidget(index, e.target.value);
    };

    const renderInput = () => {
        if (!isActive) return null;

        return (
            <TextAreaField
                value={value}
                onClick={(e) => e.stopPropagation()}
                onChange={handleChange}
            />
        );
    };

    return (
        <>
            <img
                className="block w-[21px] h-[21px]"
                src={paragraphIcon}
                alt="paragraph icon"
            />
            <div>Paragraph</div>
            {renderInput()}
        </>
    );
}
