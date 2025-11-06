import { useWidgets, type Widget, WidgetTypes } from '../../../../../../store/useWidgets.ts';

import ParagraphWidgetPreview from './components/ParagraphWidgetPreview.tsx';
import HeadlineWidgetPreview from './components/HeadlineWidgetPreview.tsx';
import ButtonWidgetPreview from './components/ButtonWidgetPreview.tsx';
import ImageWidgetPreview from './components/ImageWidgetPreview.tsx';
import type { ComponentType } from 'react';

type WidgetComponentProps = {
    value: string;
};

function getPreviewWidgetComponent(widget: Widget) {
    const components: Partial<Record<WidgetTypes, ComponentType<WidgetComponentProps>>> = {
        [WidgetTypes.headline]: HeadlineWidgetPreview,
        [WidgetTypes.paragraph]: ParagraphWidgetPreview,
        [WidgetTypes.button]: ButtonWidgetPreview,
        [WidgetTypes.image]: ImageWidgetPreview,
    };

    return components[widget.type];
}

export default function Preview() {
    const widgets = useWidgets();

    const components = widgets.widgets.map((widget, index) => {
        const Component = getPreviewWidgetComponent(widget);

        if (!Component) return null;

        return (
            <div key={index} className="flex justify-center">
                <Component value={widget.value} />
            </div>
        );
    });

    return (
        <div
            className="
            grid gap-[30px] w-[632px] grid-flow-row auto-rows-min
            p-[30px]
            bg-white
            overflow-y-auto"
        >
            {components}
        </div>
    );
}
