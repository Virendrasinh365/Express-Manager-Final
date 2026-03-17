import React, { useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import FormInput from '../../components/common/FormInput';
import Table from '../../components/common/Table';

export default function ReportsPage() {
  const [filters, setFilters] = useState({
    startDate: '',
    endDate: '',
    category: '',
  });

  const [reportData] = useState([
    { month: 'January', income: 65000, expense: 35000, balance: 30000 },
    { month: 'February', income: 72000, expense: 42000, balance: 30000 },
    { month: 'March', income: 68000, expense: 38000, balance: 30000 },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  return (
    <DashboardLayout>
      <div>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Reports & Analytics</h1>
          <p className="text-gray-600 mt-2">View detailed financial reports</p>
        </div>

        {/* Filters */}
        <Card title="Filter Reports">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormInput
              label="Start Date"
              name="startDate"
              type="date"
              value={filters.startDate}
              onChange={handleChange}
            />
            <FormInput
              label="End Date"
              name="endDate"
              type="date"
              value={filters.endDate}
              onChange={handleChange}
            />
            <FormInput
              label="Category"
              name="category"
              type="select"
              value={filters.category}
              onChange={handleChange}
              options={[
                { value: 'Food', label: 'Food' },
                { value: 'Transport', label: 'Transport' },
              ]}
            />
          </div>
        </Card>

        {/* Report Table */}
        <Card title="Monthly Summary">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b-2 border-gray-200">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Month</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-green-700">Income</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-red-700">Expense</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-blue-700">Balance</th>
                </tr>
              </thead>
              <tbody>
                {reportData.map((row, idx) => (
                  <tr key={idx} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-700">{row.month}</td>
                    <td className="px-4 py-3 text-sm text-green-600 font-semibold">₹{row.income.toLocaleString()}</td>
                    <td className="px-4 py-3 text-sm text-red-600 font-semibold">₹{row.expense.toLocaleString()}</td>
                    <td className="px-4 py-3 text-sm text-blue-600 font-semibold">₹{row.balance.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Export Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <Button variant="primary" onClick={() => window.print()}>
            🖨️ Print Report
          </Button>
          <Button variant="secondary">
            📊 Export to Excel
          </Button>
          <Button variant="secondary">
            📄 Export to PDF
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
}
