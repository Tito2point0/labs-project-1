
import React from 'react';
import { Link } from 'react-router-dom';

const HeaderContent = () => {
  return (
    <div>
      {/* ...existing code... */}
      <Link to="/profile">Profile</Link> {/* Add this link */}
      {/* ...existing code... */}
    </div>
  );
};

export default HeaderContent;