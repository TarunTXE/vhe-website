import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Landing from './pages/Landing';
import MedicalHome from './pages/medical/MedicalHome';
import AuthorHome from './pages/author/AuthorHome';
import MedicalLayout from './components/layout/MedicalLayout';
import AuthorLayout from './components/layout/AuthorLayout';
import CustomCursor from './components/ui/CustomCursor';

function App() {
  const location = useLocation();

  return (
    <>
      <CustomCursor />
      <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Landing />} />
        
        {/* Medical Portfolio Routes */}
        <Route path="/medical" element={<MedicalLayout />}>
          <Route index element={<MedicalHome />} />
          {/* Add more routes like /medical/about, etc. */}
        </Route>

        {/* Author Portfolio Routes */}
        <Route path="/author" element={<AuthorLayout />}>
          <Route index element={<AuthorHome />} />
          {/* Add more routes like /author/novels, etc. */}
        </Route>
      </Routes>
    </AnimatePresence>
    </>
  );
}

export default App;
