import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Building, Save, Edit } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/button';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@company.com',
    phone: '+1 (555) 123-4567',
    position: 'Sales Manager',
    department: 'Sales & Marketing',
    company: 'TechCorp Solutions',
    address: '123 Business Ave, Suite 100',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    bio: 'Experienced sales manager with over 8 years in B2B sales and team leadership. Passionate about driving revenue growth and building strong customer relationships.'
  });

  const handleInputChange = (field, value) => {
    setProfile(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    // Here you would typically save to a backend
    console.log('Saving profile:', profile);
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  const handleCancel = () => {
    // Reset to original values or fetch from backend
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
          <p className="text-muted-foreground">
            Manage your account settings and personal information
          </p>
        </div>
        <div className="flex items-center space-x-2 mt-4 sm:mt-0">
          {!isEditing ? (
            <Button onClick={() => setIsEditing(true)}>
              <Edit className="mr-2 h-4 w-4" />
              Edit Profile
            </Button>
          ) : (
            <div className="flex space-x-2">
              <Button variant="outline" onClick={handleCancel}>
                Cancel
              </Button>
              <Button onClick={handleSave}>
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </div>
          )}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Profile Picture and Basic Info */}
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Profile Picture</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="h-16 w-16 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold">{profile.firstName} {profile.lastName}</h3>
            <p className="text-muted-foreground">{profile.position}</p>
            <p className="text-sm text-muted-foreground">{profile.department}</p>
            {isEditing && (
              <Button variant="outline" size="sm" className="mt-4">
                Change Photo
              </Button>
            )}
          </CardContent>
        </Card>

        {/* Personal Information */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-sm font-medium mb-2 block">First Name</label>
                {isEditing ? (
                  <Input
                    value={profile.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                  />
                ) : (
                  <p className="p-2 bg-muted rounded-md">{profile.firstName}</p>
                )}
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Last Name</label>
                {isEditing ? (
                  <Input
                    value={profile.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                  />
                ) : (
                  <p className="p-2 bg-muted rounded-md">{profile.lastName}</p>
                )}
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                {isEditing ? (
                  <Input
                    type="email"
                    value={profile.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                ) : (
                  <p className="p-2 bg-muted rounded-md flex items-center">
                    <Mail className="mr-2 h-4 w-4" />
                    {profile.email}
                  </p>
                )}
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Phone</label>
                {isEditing ? (
                  <Input
                    value={profile.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                  />
                ) : (
                  <p className="p-2 bg-muted rounded-md flex items-center">
                    <Phone className="mr-2 h-4 w-4" />
                    {profile.phone}
                  </p>
                )}
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Position</label>
                {isEditing ? (
                  <Input
                    value={profile.position}
                    onChange={(e) => handleInputChange('position', e.target.value)}
                  />
                ) : (
                  <p className="p-2 bg-muted rounded-md">{profile.position}</p>
                )}
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Department</label>
                {isEditing ? (
                  <Input
                    value={profile.department}
                    onChange={(e) => handleInputChange('department', e.target.value)}
                  />
                ) : (
                  <p className="p-2 bg-muted rounded-md">{profile.department}</p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Company Information */}
        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle>Company & Address</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-sm font-medium mb-2 block">Company</label>
                {isEditing ? (
                  <Input
                    value={profile.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                  />
                ) : (
                  <p className="p-2 bg-muted rounded-md flex items-center">
                    <Building className="mr-2 h-4 w-4" />
                    {profile.company}
                  </p>
                )}
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Address</label>
                {isEditing ? (
                  <Input
                    value={profile.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                  />
                ) : (
                  <p className="p-2 bg-muted rounded-md flex items-center">
                    <MapPin className="mr-2 h-4 w-4" />
                    {profile.address}
                  </p>
                )}
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">City</label>
                {isEditing ? (
                  <Input
                    value={profile.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                  />
                ) : (
                  <p className="p-2 bg-muted rounded-md">{profile.city}</p>
                )}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">State</label>
                  {isEditing ? (
                    <Input
                      value={profile.state}
                      onChange={(e) => handleInputChange('state', e.target.value)}
                    />
                  ) : (
                    <p className="p-2 bg-muted rounded-md">{profile.state}</p>
                  )}
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">ZIP Code</label>
                  {isEditing ? (
                    <Input
                      value={profile.zipCode}
                      onChange={(e) => handleInputChange('zipCode', e.target.value)}
                    />
                  ) : (
                    <p className="p-2 bg-muted rounded-md">{profile.zipCode}</p>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bio */}
        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle>Bio</CardTitle>
          </CardHeader>
          <CardContent>
            {isEditing ? (
              <textarea
                className="w-full min-h-[100px] p-3 border border-input rounded-md bg-background resize-none focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                value={profile.bio}
                onChange={(e) => handleInputChange('bio', e.target.value)}
                placeholder="Tell us about yourself..."
              />
            ) : (
              <p className="p-3 bg-muted rounded-md">{profile.bio}</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;

