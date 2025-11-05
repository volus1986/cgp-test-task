import headlineIcon from '/src/assets/icons/headlineWidgetIcon.svg';
import paragraphIcon from '/src/assets/icons/paragraphWidgetIcon.svg';
import defaultIcon from '/src/assets/icons/defaultWidgetIcon.svg';

const WIDGETS_DATA = [
    {
        title: 'HeadlineWidget',
        icon: headlineIcon,
    },
    {
        title: 'ParagraphWidget',
        icon: paragraphIcon,
    },
    {
        title: 'Button',
        icon: defaultIcon,
    },
    {
        title: 'Image',
        icon: defaultIcon,
    },
];

function createWidget({
    icon,
    title,
    key,
}: {
    icon: string;
    title: string;
    key?: string;
}) {
    return (
        <div
            key={key ?? title}
            className="
                grid gap-2.5 justify-center justify-items-center
                w-[100px] h-[83px] rounded-md bg-[#F6F9FE] p-[15px]
                font-[Roboto] font-normal text-[12px] tracking-[2%]
            "
        >
            <img className="block w-[21px] h-[21px]" src={icon} alt={title} />
            <div>{title}</div>
        </div>
    );
}

export default function WidgetsPanel() {
    const widgets = WIDGETS_DATA.map((widget) => createWidget(widget));

    return (
        <div
            className="flex gap-2.5 justify-items-stretch flex-wrap content-baseline py-[30px] px-[28px]
            bg-white h-full w-[270px] border-r border-[#e4e6f1]"
        >
            {widgets}
        </div>
    );
}
