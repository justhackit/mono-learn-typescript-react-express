import { Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar';
import Dashboard from './scenes/dashboard';
import Team from './scenes/team';
import LoginPage from './scenes/login';
import AuthProtectedRoute from './scenes/login/AuthProtectedRoute';
import AWS_Creds from './scenes/utilities/AWS_Creds';

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route
                path="/"
                element={
                  <AuthProtectedRoute>
                    {' '}
                    <Dashboard />
                  </AuthProtectedRoute>
                }
              />
              <Route
                path="/team"
                element={
                  <AuthProtectedRoute>
                    <Team />
                  </AuthProtectedRoute>
                }
              />
              <Route
                path="/aws_creds"
                element={
                  <AuthProtectedRoute>
                    <AWS_Creds />
                  </AuthProtectedRoute>
                }
              />
              <Route path="/login" element={<LoginPage />} />
              {/* 
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
