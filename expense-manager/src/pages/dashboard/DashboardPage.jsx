import React, { useState, useEffect } from 'react';
import { DollarSign, TrendingUp, TrendingDown, Activity } from 'lucide-react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import StatCard from '../../components/common/StatCard';
import Card from '../../components/common/Card';
import Table from '../../components/common/Table';
import Button from '../../components/common/Button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function DashboardPage() {
  const navigate = useNavigate();
  const { user } = useAuth(); // Access current user from context

  // State to hold dashboard statistics
  const [stats, setStats] = useState({
    totalIncome: 0,
    totalExpense: 0,
    balance: 0,
    transactions: 0,
  });

  const [recentExpenses, setRecentExpenses] = useState([]);

  // Mock Data for Normal Users (Personal Data)
  const userStats = {
    totalIncome: 45000,
    totalExpense: 12000,
    balance: 33000,
    transactions: 12,
  };

  const userExpenses = [
    { id: 1, date: '2024-01-06', category: 'Food', amount: 450, project: 'Personal' },
    { id: 2, date: '2024-01-05', category: 'Transport', amount: 100, project: 'Work' },
  ];

  // Mock Data for Admin (All Users Data)
  const adminStats = {
    totalIncome: 1250000,
    totalExpense: 450000,
    balance: 800000,
    transactions: 1560,
  };

  const adminExpenses = [
    { id: 1, date: '2024-01-08', category: 'Salary', amount: 50000, project: 'User A' },
    { id: 2, date: '2024-01-07', category: 'Office Rent', amount: 20000, project: 'Admin' },
    { id: 3, date: '2024-01-07', category: 'Equipment', amount: 150000, project: 'Operations' },
  ];

  // Effect to set data based on role
  useEffect(() => {
    // Check if user exists (mock protection)
    if (user?.role === 'admin') {
      // If Admin, show global data
      setStats(adminStats);
      setRecentExpenses(adminExpenses);
    } else {
      // If Normal User, show personal data
      setStats(userStats);
      setRecentExpenses(userExpenses);
    }
  }, [user]); // Re-run if user changes

  const columns = [
    { key: 'date', label: 'Date' },
    { key: 'category', label: 'Category' },
    { key: 'project', label: 'Project' },
    {
      key: 'amount',
      label: 'Amount',
      render: (val) => `₹${val.toLocaleString()}`,
    },
  ];

  return (
    <DashboardLayout>
      <div>
        {/* Header Section */}
        <div className="mb-8">
          {/* Dynamic Greeting */}
          <h1 className="text-3xl font-bold text-gray-800">
            {user?.role === 'admin' ? 'Admin Dashboard' : 'My Dashboard'}
          </h1>
          <p className="text-gray-600 mt-2">
            {user?.role === 'admin'
              ? 'Overview of ALL users expenses and incomes.'
              : 'Here is your personal financial overview.'}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            label={user?.role === 'admin' ? "Total System Income" : "My Income"}
            value={`₹${stats.totalIncome.toLocaleString()}`}
            icon={TrendingUp}
            color="green"
            trend={{ type: 'up', value: '+12.5%' }}
          />
          <StatCard
            label={user?.role === 'admin' ? "Total System Expense" : "My Expense"}
            value={`₹${stats.totalExpense.toLocaleString()}`}
            icon={TrendingDown}
            color="red"
            trend={{ type: 'down', value: '+8.2%' }}
          />
          <StatCard
            label="Balance"
            value={`₹${stats.balance.toLocaleString()}`}
            icon={DollarSign}
            color="blue"
          />
          <StatCard
            label="Transactions"
            value={stats.transactions}
            icon={Activity}
            color="purple"
          />
        </div>

        {/* Recent Expenses Table */}
        <Card title={user?.role === 'admin' ? "Recent System Activities" : "Recent Expenses"}>
          <Table
            columns={columns}
            data={recentExpenses}
            onEdit={(item) => navigate(`/expenses/edit/${item.id}`)}
            onDelete={() => alert('Delete clicked')}
            emptyMessage="No expenses found"
          />
          <div className="mt-4">
            <Button variant="outline" onClick={() => navigate('/expenses')}>
              View All Expenses →
            </Button>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}
