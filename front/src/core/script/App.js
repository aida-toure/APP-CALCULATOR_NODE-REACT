import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import '../style/App.css';
import Calculator from './Calculator.js';

function App() {
    return (
        <div className="App">
            <header></header>
                <Router>
                    <Routes>
                        <Route path="/" element={<Calculator/>}></Route>
                    </Routes>
                </Router>
            <footer></footer>
        </div>
    );
}

export default App;
