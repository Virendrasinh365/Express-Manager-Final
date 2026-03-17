import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';
import Card from '../../components/common/Card';
import Table from '../../components/common/Table';
import Button from '../../components/common/Button';

export default function IncomeListPage() {
  const navigate = useNavigate();
  const [income, setIncome] = useState([
    { id: 1, date: '2024-01-06', source: 'Salary', amount: 50000, status: 'Received' },
    { id: 2, date: '2024-01-01', source: 'Freelance', amount: 15000, status: 'Pending' },
  ]);

  const columns = [
    { key: 'date', label: 'Date' },
    { key: 'source', label: 'Source' },
    { key: 'status', label: 'Status' },
    {
      key: 'amount',
      label: 'Amount',
      render: (val) => `₹${val.toLocaleString()}`,
    },
  ];

  const handleDelete = (id) => {
    setIncome(income.filter(i => i.id !== id));
  };

  return (
    <DashboardLayout>
      <div>
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Income</h1>
            <p className="text-gray-600 mt-2">Track your income sources</p>
          </div>
          <Button variant="primary" onClick={() => navigate('/income/add')}>
            + Add Income
          </Button>
        </div>

        <Card title="Income List">
          <Table
            columns={columns}
            data={income}
            onEdit={(item) => navigate(`/income/edit/${item.id}`)}
            onDelete={handleDelete}
            emptyMessage="No income records found"
          />
        </Card>
      </div>
    </DashboardLayout>
  );
}
