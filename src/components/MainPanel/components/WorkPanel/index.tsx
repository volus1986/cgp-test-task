import Config from './components/Config';
import Preview from './components/Preview';

export default function WorkPanel() {
    return (
        <div className="grid grid-flow-col auto-cols-auto">
            <Config />
            <Preview />
        </div>
    );
}
