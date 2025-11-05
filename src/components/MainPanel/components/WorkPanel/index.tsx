import Config from './components/Config';
import Preview from './components/Preview';

export default function WorkPanel() {
    return (
        <div className="flex justify-items-stretch">
            <Config />
            <Preview />
        </div>
    );
}
