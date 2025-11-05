import './App.css';
import TopPanel from './components/TopPanel';
import MainPanel from './components/MainPanel';

function App() {
    return (
        <div className="w-full h-full grid justify-center items-center bg-gray-300">
            <div className="w-360 h-212 grid gap-[1px] grid-rows-[auto_1fr] rounded-2xl overflow-hidden ">
                <TopPanel />
                <MainPanel />
            </div>
        </div>
    );
}

export default App;
