import React, { useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import Card from '../../components/common/Card';
import Table from '../../components/common/Table';
import Button from '../../components/common/Button';
import FormInput from '../../components/common/FormInput';

export default function CategoriesPage() {
  const [categories, setCategories] = useState([
    { id: 1, name: 'Food', type: 'Expense' },
    { id: 2, name: 'Transport', type: 'Expense' },
    { id: 3, name: 'Salary', type: 'Income' },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', type: 'Expense' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim()) {
      setCategories([...categories, { ...formData, id: Date.now() }]);
      setFormData({ name: '', type: 'Expense' });
      setShowForm(false);
    }
  };

  const handleDelete = (id) => {
    setCategories(categories.filter(c => c.id !== id));
  };

  const columns = [
    { key: 'name', label: 'Category Name' },
    { key: 'type', label: 'Type' },
  ];

  return (
    <DashboardLayout>
      <div>
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Categories</h1>
            <p className="text-gray-600 mt-2">Manage expense and income categories</p>
          </div>
          <Button variant="primary" onClick={() => setShowForm(!showForm)}>
            + Add Category
          </Button>
        </div>

        {showForm && (
          <Card title="Create New Category">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <FormInput
                  label="Category Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter category name"
                  required
                />
                <FormInput
                  label="Type"
                  name="type"
                  type="select"
                  value={formData.type}
                  onChange={handleChange}
                  options={[
                    { value: 'Expense', label: 'Expense' },
                    { value: 'Income', label: 'Income' },
                  ]}
                />
              </div>
              <div className="flex gap-2">
                <Button type="submit" variant="primary">Save Category</Button>
                <Button type="button" variant="secondary" onClick={() => setShowForm(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </Card>
        )}

        <Card title="All Categories">
          <Table
            columns={columns}
            data={categories}
            onDelete={handleDelete}
            emptyMessage="No categories found"
          />
        </Card>
      </div>
    </DashboardLayout>
  );
}
