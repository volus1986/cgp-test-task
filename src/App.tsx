import './App.css';
import { useCount } from './store/useTestEditor.ts';

function App() {
    const counter = useCount();

    return (
        <>
            <div className="grid bg-amber-500">App.tsx</div>
            <p>{counter.count}</p>
        </>
    );
}

export default App;
