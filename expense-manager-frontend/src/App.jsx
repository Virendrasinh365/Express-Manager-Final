import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

// (Login/Register)
import LoginPage from './pages/auth/LoginPage';

// (Home)
import DashboardPage from './pages/dashboard/DashboardPage';

// Expense Pages 
import ExpenseListPage from './pages/expenses/ExpenseListPage';
import ExpenseFormPage from './pages/expenses/ExpenseFormPage';

// Income Pages 
import IncomeListPage from './pages/income/IncomeListPage';

// Category Pages 
import CategoriesPage from './pages/categories/CategoriesPage';

// Reports Pages 
import ReportsPage from './pages/reports/ReportsPage';

// People Pages 
import PeopleListPage from './pages/people/PeopleListPage';

// Profile Pages 
import ProfilePage from './pages/profile/ProfilePage';

export default function App() {
  return (
    // user chhe ke admin e cheack kari 
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Route */}
          <Route path="/login" element={<LoginPage />} />

          <Route path="/dashboard" element={<DashboardPage />} />

          {/* Expense Routes */}
          <Route path="/expenses" element={<ExpenseListPage />} />
          <Route path="/expenses/add" element={<ExpenseFormPage />} />
          <Route path="/expenses/edit/:id" element={<ExpenseFormPage />} />

          {/* Income Routes */}
          <Route path="/income" element={<IncomeListPage />} />
          <Route path="/income/add" element={<ExpenseFormPage />} />
          <Route path="/income/edit/:id" element={<ExpenseFormPage />} />

          <Route path="/categories" element={<CategoriesPage />} />

          <Route path="/reports" element={<ReportsPage />} />

          <Route path="/people" element={<PeopleListPage />} />

          <Route path="/profile" element={<ProfilePage />} />

          {/*unknown url hoy to login page par redirect kare */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
