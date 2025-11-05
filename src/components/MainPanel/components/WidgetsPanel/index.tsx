import headlineIcon from './icons/headlineIcon.svg';
import paragraphIcon from './icons/paragraphIcon.svg';
import defaultIcon from './icons/defaultIcon.svg';

const WIDGETS_DATA = [
    {
        title: 'Headline',
        icon: headlineIcon,
    },
    {
        title: 'Paragraph',
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

function createWidget({ icon, title }: { icon: string; title: string }) {
    return (
        <div
            className="
                grid gap-2.5 justify-center justify-items-center
                w-[100px] h-[83px] rounded-md bg-blue-100 p-[15px]
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
        <div className="flex gap-2.5 flex-wrap content-baseline p-[30px] max-w-[270px] min-w-[160px] bg-white h-full">
            {widgets}
        </div>
    );
}
