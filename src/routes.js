import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import Sobre from 'pages/Sobre';
import Menu from 'components/Menu';
import Template from 'components/Template';

export default function AppRouter() {
    return (
        <Router>
            <main>
                <Menu />

                <Routes>
                    <Route path='/' element={<Template />} >
                        <Route index element={<Inicio />} />
                        <Route path='cardapio' element={<Cardapio />} />
                        <Route path='sobre' element={<Sobre />} />
                    </Route>
                </Routes>
            </main>
        </Router>
    );
}
