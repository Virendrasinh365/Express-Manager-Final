import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';
import Card from '../../components/common/Card';
import Table from '../../components/common/Table';
import Button from '../../components/common/Button';
import FormInput from '../../components/common/FormInput';

/**
 * Expense List Page
 * Displays a list of expenses with filtering capabilities.
 */
export default function ExpenseListPage() {
  const navigate = useNavigate();

  // Local state for mock data
  // In a real app, this would be fetched from an API
  const [expenses, setExpenses] = useState([
    { id: 1, date: '2024-01-06', category: 'Food', project: 'Personal', amount: 450 },
    { id: 2, date: '2024-01-05', category: 'Transport', project: 'Work', amount: 300 },
    { id: 3, date: '2024-01-04', category: 'Utilities', project: 'Home', amount: 1200 },
  ]);

  // State for filter inputs
  const [filters, setFilters] = useState({ search: '', category: '', project: '' });

  // Columns configuration for the Table component
  const columns = [
    { key: 'date', label: 'Date' },
    { key: 'category', label: 'Category' },
    { key: 'project', label: 'Project' },
    {
      key: 'amount',
      label: 'Amount',
      // Custom renderer to format the amount with currency
      render: (val) => `₹${val.toLocaleString()}`,
    },
  ];

  // Logic to filter expenses based on user input
  // We check if each expense matches ALL active filters
  const filteredExpenses = expenses.filter(e => {
    return (
      (filters.search === '' || e.category.toLowerCase().includes(filters.search.toLowerCase())) &&
      (filters.category === '' || e.category === filters.category) &&
      (filters.project === '' || e.project === filters.project)
    );
  });

  // Handler to delete an expense
  const handleDelete = (id) => {
    // Filter out the item with the given ID
    setExpenses(expenses.filter(e => e.id !== id));
  };

  return (
    <DashboardLayout>
      <div>
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Expenses</h1>
            <p className="text-gray-600 mt-2">Manage your expenses</p>
          </div>
          {/* Navigate to Add Expense Page */}
          <Button variant="primary" onClick={() => navigate('/expenses/add')}>
            + Add Expense
          </Button>
        </div>

        {/* Filters Section */}
        <Card>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Filters</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search Box */}
            <FormInput
              label="Search"
              type="text"
              placeholder="Search by category..."
              value={filters.search}
              onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            />
            {/* Category Filter */}
            <FormInput
              label="Category"
              type="select"
              value={filters.category}
              onChange={(e) => setFilters({ ...filters, category: e.target.value })}
              options={[
                { value: 'Food', label: 'Food' },
                { value: 'Transport', label: 'Transport' },
                { value: 'Utilities', label: 'Utilities' },
              ]}
            />
            {/* Project Filter */}
            <FormInput
              label="Project"
              type="select"
              value={filters.project}
              onChange={(e) => setFilters({ ...filters, project: e.target.value })}
              options={[
                { value: 'Personal', label: 'Personal' },
                { value: 'Work', label: 'Work' },
                { value: 'Home', label: 'Home' },
              ]}
            />
          </div>
        </Card>

        {/* Data Table Section */}
        <Card title="Expense List">
          <Table
            columns={columns}
            data={filteredExpenses}
            onEdit={(item) => navigate(`/expenses/edit/${item.id}`)}
            onDelete={handleDelete}
            emptyMessage="No expenses found"
          />
        </Card>
      </div>
    </DashboardLayout>
  );
}
