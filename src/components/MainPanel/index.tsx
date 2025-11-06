import WidgetsPanel from './components/WidgetsPanel';
import WorkPanel from './components/WorkPanel';

export default function MainPanel() {
    return (
        <div className="flex w-full overflow-y-hidden">
            <WidgetsPanel />
            <WorkPanel />
        </div>
    );
}
