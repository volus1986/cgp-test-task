import './App.css';
import TopPanel from './components/TopPanel';
import MainPanel from './components/MainPanel';

function App() {
    return (
        <div className="w-full h-full grid justify-center items-center bg-gray-300">
            <div className="w-360 grid grid-rows-[auto_1fr] h-212 rounded-2xl overflow-hidden bg-[#e4e6f1]">
                <TopPanel />
                <MainPanel />
            </div>
        </div>
    );
}

export default App;
