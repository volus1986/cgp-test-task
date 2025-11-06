import headlineIcon from '/src/assets/icons/headlineWidgetIcon.svg';
import paragraphIcon from '/src/assets/icons/paragraphWidgetIcon.svg';
import defaultIcon from '/src/assets/icons/defaultWidgetIcon.svg';
import { useWidgets, WidgetTypes } from '../../../../store/useWidgets.ts';

const WIDGETS_DATA = [
    {
        type: WidgetTypes.headline,
        title: 'Headline',
        icon: headlineIcon,
    },
    {
        type: WidgetTypes.paragraph,
        title: 'Paragraph',
        icon: paragraphIcon,
    },
    {
        type: WidgetTypes.button,
        title: 'Button',
        icon: defaultIcon,
    },
    {
        type: WidgetTypes.image,
        title: 'Image',
        icon: defaultIcon,
    },
];

export default function WidgetsPanel() {
    const widgetStore = useWidgets();

    const handleWidgetClick = (type: WidgetTypes) => {
        widgetStore.addWidget({
            type,
            value: '',
        });
    };

    function renderWidget(
        {
            icon,
            title,
            type,
        }: {
            icon: string;
            title: string;
            type: WidgetTypes;
        },
        index: number,
    ) {
        return (
            <div
                key={index}
                className="
                grid gap-2.5 justify-center justify-items-center
                w-[100px] h-[83px]
                rounded-md bg-[#F6F9FE] p-[15px]
                font-[Roboto] font-normal text-[12px] tracking-[0.275px]
                cursor-pointer overflow-y-auto
            "
                onClick={() => handleWidgetClick(type)}
            >
                <img className="block w-[21px] h-[21px]" src={icon} alt={title} />
                <div>{title}</div>
            </div>
        );
    }
    const widgets = WIDGETS_DATA.map((widget, index) => renderWidget(widget, index));

    return (
        <div
            className="flex gap-2.5 justify-items-stretch flex-wrap content-baseline py-[30px] px-[28px]
            bg-white h-full w-[270px] border-r border-[#e4e6f1]"
        >
            {widgets}
        </div>
    );
}
