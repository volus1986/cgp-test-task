import WidgetsPanel from './components/WidgetsPanel';
import WorkPanel from './components/WorkPanel';

export default function MainPanel() {
    return (
        <div className="flex gap-[2px] h-full w-full">
            <WidgetsPanel />
            <WorkPanel />
        </div>
    );
}
