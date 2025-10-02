import React, { useEffect, useState } from 'react';
import { getUserProfile } from '../../services/userService';
import { useParams } from 'react-router';

const UserProfile = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getUserProfile(id).then(setProfile).catch(console.error);
  }, [id]);

  if (!profile) return <div>Loading...</div>;

  return (
    <div className="card">
      <h2 className="font-bold">{profile.user?.name || profile.name}</h2>
      <div className="small">Email: {profile.user?.email || profile.email}</div>
    </div>
  );
};

export default UserProfile;
