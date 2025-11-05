import {
    useWidgets,
    type Widget,
    WidgetTypes,
} from '../../../../../../store/useWidgets.ts';

import React, { type ComponentType } from 'react';
import ParagraphWidget from './components/ParagraphWidget.tsx';
import HeadlineWidget from './components/HeadlineWidget.tsx';
import ButtonWidget from './components/ButtonWidget.tsx';
import ImageWidget from './components/ImageWidget.tsx';

type WidgetComponentProps = {
    index: number;
    value: string;
    isActive: boolean;
};

function getWidgetComponent(widget: Widget) {
    const components: Partial<
        Record<WidgetTypes, ComponentType<WidgetComponentProps>>
    > = {
        [WidgetTypes.headline]: HeadlineWidget,
        [WidgetTypes.paragraph]: ParagraphWidget,
        [WidgetTypes.button]: ButtonWidget,
        [WidgetTypes.image]: ImageWidget,
    };

    return components[widget.type];
}

export default function Config() {
    const widgets = useWidgets();
    const [activeIndex, setActiveIndex] = React.useState(-1);

    const handleComponentClick = (index: number) => {
        setActiveIndex((prev) => (prev === index ? -1 : index));
    };

    const components = widgets.widgets.map((widget, index) => {
        const Component = getWidgetComponent(widget);

        if (!Component) return null;

        return (
            <div
                className="
                grid justify-items-center gap-2.5
                w-full rounded-md { bg-white p-[15px]}
                font-[Roboto] font-normal text-[12px] tracking-[2%]
            "
                onClick={() => handleComponentClick(index)}
            >
                <Component
                    index={index}
                    value={widget.value}
                    isActive={index === activeIndex}
                />
            </div>
        );
    });

    return (
        <div
            className="
            grid gap-[15px] w-[538px] grid-flow-row auto-rows-min
            py-[25px] px-[30px]
            bg-[#f5f5fc]"
        >
            {components}
        </div>
    );
}
