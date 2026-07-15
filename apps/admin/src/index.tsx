import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>B2B Procurement Platform — Admin Dashboard</h1>
      <p>Manage vendors, approve RFQs, and monitor purchase orders.</p>
    </div>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
