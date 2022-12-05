import { ContatosPage, DashBoardPage, EmailsPage, WriteNowPage } from 'pages';
import { BrowserRouter as Router, Routes, Route }
from 'react-router-dom';

export function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route path='/' element={<DashBoardPage />}/>
                <Route path='/dashboard' element={<DashBoardPage />}/>
                <Route path='/contatos' element={<ContatosPage />}/>
                <Route path='/emails' element={<EmailsPage />}/>
                <Route path='/escrever-agora' element={<WriteNowPage />}/>
            </Routes>
        </Router>
    )
}