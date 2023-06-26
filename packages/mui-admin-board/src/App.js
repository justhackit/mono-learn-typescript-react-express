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
import CashTransaction from './scenes/utilities/CashTransaction';

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
              <Route
                path="/cashtransaction"
                element={
                  <AuthProtectedRoute>
                    <CashTransaction />
                  </AuthProtectedRoute>
                }
              />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
