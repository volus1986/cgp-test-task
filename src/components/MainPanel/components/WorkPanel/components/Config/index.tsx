import Headline from './components/Headline.tsx';
import {
    useWidgets,
    type Widget,
    WidgetTypes,
} from '../../../../../../store/useWidgets.ts';
import React, { type ComponentType } from 'react';

function getWidgetComponent(widget: Widget, index: number): React.ReactNode {
    const components: Partial<Record<WidgetTypes, ComponentType<any>>> = {
        [WidgetTypes.headline]: Headline,
        // paragraph: ParagraphWidget,
        // button: ButtonWidget,
        // image: ImageWidget,
    };

    const Component = components[widget.type];

    if (!Component) return null;

    return (
        <div
            className="
                grid justify-items-center
                w-full rounded-md bg-white p-[15px]
                font-[Roboto] font-normal text-[12px] tracking-[2%]
            "
        >
            <Component index={index} value={widget.value} isActive={true} />
        </div>
    );
}

export default function Config() {
    const widgets = useWidgets();

    const components = widgets.widgets.map(getWidgetComponent);

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
