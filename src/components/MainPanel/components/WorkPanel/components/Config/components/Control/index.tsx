import { useWidgets } from '../../../../../../../../store/useWidgets.ts';
import ButtonIcon from './component/ButtonIcon.tsx';
import arrowTopIcon from '/src/assets/icons/arrowTopButtonIcon.svg';
import copyButtonIcon from '/src/assets/icons/copyButtonIcon.svg';
import trashButtonIcon from '/src/assets/icons/trashButtonIcon.svg';

export default function Control({
    index,
    activeIndexSetter,
}: {
    index: number;
    activeIndexSetter: (index: number) => void;
}) {
    const widgetStore = useWidgets();

    const moveUp = () => {
        if (index === 0) return;

        widgetStore.moveWidget(index, 'up');
        activeIndexSetter(index - 1);
    };

    const moveDown = () => {
        if (index >= widgetStore.widgets.length - 1) return;

        widgetStore.moveWidget(index, 'down');
        activeIndexSetter(index + 1);
    };

    const copyWidget = () => {
        widgetStore.copyWidget(index);
        activeIndexSetter(index + 1);
    };

    const removeWidget = () => {
        widgetStore.removeWidget(index);
        activeIndexSetter(-1);
    };

    return (
        <div className="absolute right-2.5 -top-[27px] justify-between flex gap-[5px]">
            <div className="p-[3px] rounded-t-[3px] flex gap-[5px] bg-[#449CF4]">
                <div className="rotate-180">
                    <ButtonIcon icon={arrowTopIcon} onClick={moveDown} />
                </div>
                <ButtonIcon icon={arrowTopIcon} onClick={moveUp}></ButtonIcon>
            </div>
            <div className="p-[3px] rounded-t-[3px] flex gap-[5px] bg-[#68C2E9]">
                <ButtonIcon
                    bgColor="#4B97B8"
                    icon={copyButtonIcon}
                    onClick={copyWidget}
                />
                <ButtonIcon
                    icon={trashButtonIcon}
                    onClick={removeWidget}
                ></ButtonIcon>
            </div>
        </div>
    );
}
