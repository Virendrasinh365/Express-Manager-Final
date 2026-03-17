import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../../components/layout/AuthLayout';
import FormInput from '../../components/common/FormInput';
import Button from '../../components/common/Button';
import { useAuth } from '../../context/AuthContext';

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      if (formData.email === 'admin@example.com') {
        login('admin');
      } else {
        login('user');
      }

      navigate('/dashboard');
    }, 1000);
  };

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit}>
        {error && <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">{error}</div>}

        <div className="mb-4 text-sm text-gray-500 bg-blue-50 p-3 rounded border border-blue-100">
          <p className="font-semibold">Demo Credentials:</p>
          <p>Admin: admin@example.com / any pass</p>
          <p>User: user@example.com / any pass</p>
        </div>

        <FormInput
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com"
          required
        />

        <FormInput
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="••••••••"
          required
        />

        <Button type="submit" variant="primary" fullWidth disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </Button>

        <div className="mt-6 text-center">
          <a href="#forgot" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            Forgot Password?
          </a>
        </div>
      </form>
    </AuthLayout>
  );
}
