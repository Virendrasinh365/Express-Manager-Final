import React, { useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import Card from '../../components/common/Card';
import FormInput from '../../components/common/FormInput';
import Button from '../../components/common/Button';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    mobile: '9876543210',
    city: 'Rajkot',
  });

  const [passwords, setPasswords] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords(prev => ({ ...prev, [name]: value }));
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    alert('Profile updated successfully!');
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    alert('Password changed successfully!');
    setPasswords({ oldPassword: '', newPassword: '', confirmPassword: '' });
  };

  return (
    <DashboardLayout>
      <div>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">My Profile</h1>
          <p className="text-gray-600 mt-2">Manage your account settings</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-0 border-b border-gray-200 mb-6 bg-white rounded-t-lg">
          <button
            onClick={() => setActiveTab('profile')}
            className={`px-6 py-3 font-medium text-sm transition-all border-b-2 ${
              activeTab === 'profile'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-600 hover:text-gray-800'
            }`}
          >
            👤 Profile Information
          </button>
          <button
            onClick={() => setActiveTab('password')}
            className={`px-6 py-3 font-medium text-sm transition-all border-b-2 ${
              activeTab === 'password'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-600 hover:text-gray-800'
            }`}
          >
            🔐 Change Password
          </button>
        </div>

        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <Card>
            <form onSubmit={handleProfileSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormInput
                  label="Full Name"
                  name="name"
                  value={profile.name}
                  onChange={handleProfileChange}
                />
                <FormInput
                  label="Email Address"
                  name="email"
                  type="email"
                  value={profile.email}
                  onChange={handleProfileChange}
                />
                <FormInput
                  label="Mobile Number"
                  name="mobile"
                  value={profile.mobile}
                  onChange={handleProfileChange}
                />
                <FormInput
                  label="City"
                  name="city"
                  value={profile.city}
                  onChange={handleProfileChange}
                />
              </div>
              <div className="flex gap-4 mt-6 pt-6 border-t border-gray-200">
                <Button type="submit" variant="primary">Save Changes</Button>
                <Button type="button" variant="secondary">Cancel</Button>
              </div>
            </form>
          </Card>
        )}

        {/* Password Tab */}
        {activeTab === 'password' && (
          <Card>
            <form onSubmit={handlePasswordSubmit}>
              <FormInput
                label="Current Password"
                name="oldPassword"
                type="password"
                value={passwords.oldPassword}
                onChange={handlePasswordChange}
                placeholder="Enter your current password"
                required
              />
              <FormInput
                label="New Password"
                name="newPassword"
                type="password"
                value={passwords.newPassword}
                onChange={handlePasswordChange}
                placeholder="Enter new password"
                required
              />
              <FormInput
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                value={passwords.confirmPassword}
                onChange={handlePasswordChange}
                placeholder="Confirm new password"
                required
              />
              <div className="flex gap-4 mt-6 pt-6 border-t border-gray-200">
                <Button type="submit" variant="primary">Change Password</Button>
                <Button type="button" variant="secondary">Cancel</Button>
              </div>
            </form>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
}
