import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';
import Card from '../../components/common/Card';
import FormInput from '../../components/common/FormInput';
import Button from '../../components/common/Button';

/**
 * Expense Form Page
 * Used for both Creating (Add) and Editing expenses.
 * It determines mode based on whether an 'id' is present in the URL.
 */
export default function ExpenseFormPage() {
  const navigate = useNavigate();
  // Get ID from URL parameter (e.g., /expenses/edit/1)
  const { id } = useParams();

  // Boolean flag to check if we are in Edit mode
  const isEdit = !!id;

  // Form State
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0], // Default to today
    category: '',
    project: '',
    amount: '',
    description: '',
    attachment: null,
  });

  // State to track validation errors
  const [errors, setErrors] = useState({});

  /**
   * Universal change handler for all input fields.
   * Updates the corresponding field in state and clears any error for that field.
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  /**
   * Specific handler for File Inputs
   */
  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, attachment: e.target.files }));
  };

  /**
   * Form Submission Handler
   * Validates input and submits data.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // BASIC VALIDATION
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.project) newErrors.project = 'Project is required';
    if (!formData.amount) newErrors.amount = 'Amount is required';

    // If there are errors, set them and stop submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Success: Login to API would go here
    console.log('Submitting:', formData);

    // Redirect back to list
    navigate('/expenses');
  };

  return (
    <DashboardLayout>
      <div>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            {isEdit ? 'Edit Expense' : 'Add New Expense'}
          </h1>
        </div>

        <Card>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {/* Date Input */}
              <FormInput
                label="Date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                error={errors.date}
                required
              />

              {/* Category Dropdown */}
              <FormInput
                label="Category"
                name="category"
                type="select"
                value={formData.category}
                onChange={handleChange}
                error={errors.category}
                options={[
                  { value: 'Food', label: 'Food & Dining' },
                  { value: 'Transport', label: 'Transport' },
                  { value: 'Utilities', label: 'Utilities' },
                  { value: 'Entertainment', label: 'Entertainment' },
                  { value: 'Shopping', label: 'Shopping' },
                  { value: 'Healthcare', label: 'Healthcare' },
                ]}
                required
              />

              {/* Project Dropdown */}
              <FormInput
                label="Project"
                name="project"
                type="select"
                value={formData.project}
                onChange={handleChange}
                error={errors.project}
                options={[
                  { value: 'Personal', label: 'Personal' },
                  { value: 'Work', label: 'Work' },
                  { value: 'Home', label: 'Home' },
                  { value: 'Business', label: 'Business' },
                ]}
                required
              />

              {/* Amount Input */}
              <FormInput
                label="Amount"
                name="amount"
                type="number"
                value={formData.amount}
                onChange={handleChange}
                placeholder="0.00"
                step="0.01"
                error={errors.amount}
                required
              />
            </div>

            {/* Description Textarea */}
            <FormInput
              label="Description"
              name="description"
              type="textarea"
              value={formData.description}
              onChange={handleChange}
              placeholder="Add notes about this expense..."
              rows="4"
            />

            {/* File Upload */}
            <FormInput
              label="Attachment (Receipt/Bill)"
              name="attachment"
              type="file"
              onChange={handleFileChange}
              accept="image/*,.pdf"
            />

            {/* Action Buttons */}
            <div className="flex gap-4 mt-6 pt-6 border-t border-gray-200">
              <Button type="submit" variant="primary">
                {isEdit ? 'Update Expense' : 'Add Expense'}
              </Button>
              <Button
                type="button"
                variant="secondary"
                onClick={() => navigate('/expenses')}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </DashboardLayout>
  );
}
