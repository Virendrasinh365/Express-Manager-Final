import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';
import Card from '../../components/common/Card';
import Table from '../../components/common/Table';
import Button from '../../components/common/Button';

export default function PeopleListPage() {
  const navigate = useNavigate();
  const [people, setPeople] = useState([
    { id: 'P001', name: 'John Doe', email: 'john@example.com', mobile: '9876543210', status: 'Active' },
    { id: 'P002', name: 'Jane Smith', email: 'jane@example.com', mobile: '9876543211', status: 'Active' },
    { id: 'P003', name: 'Mike Johnson', email: 'mike@example.com', mobile: '9876543212', status: 'Inactive' },
  ]);

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'mobile', label: 'Mobile' },
    { key: 'status', label: 'Status' },
  ];

  const handleDelete = (id) => {
    setPeople(people.filter(p => p.id !== id));
  };

  return (
    <DashboardLayout>
      <div>
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">People Management</h1>
            <p className="text-gray-600 mt-2">Manage contacts and team members</p>
          </div>
          <Button variant="primary" onClick={() => navigate('/people/add')}>
            + Add Person
          </Button>
        </div>

        <Card title="People Directory">
          <Table
            columns={columns}
            data={people}
            onEdit={(item) => navigate(`/people/edit/${item.id}`)}
            onDelete={handleDelete}
            emptyMessage="No people found"
          />
        </Card>
      </div>
    </DashboardLayout>
  );
}
