import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import Sobre from 'pages/Sobre';
import NotFound from 'pages/NotFound';
import Template from 'components/Template';
import Menu from 'components/Menu';
import Footer from 'components/Footer';

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
                    <Route path='*' element={<NotFound />} />
                </Routes>

                <Footer />
            </main>
        </Router>
    );
}
