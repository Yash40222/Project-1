// src/components/PageWrapper.js
import React from 'react';
import './PageWrapper.css'; // we’ll make this

function PageWrapper({ children }) {
  return (
    <div className="page-wrapper fade-in">
      {children}
    </div>
  );
}

export default PageWrapper;
