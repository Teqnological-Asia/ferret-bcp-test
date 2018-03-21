import React from 'react';

const LoginError = ({errors}) => (
  <div className="p-container_panel_alert">
    <p>
      {errors.map((error, key) => (
        <span key={key}>{error}</span>
      ))}
    </p>
  </div>
)

export default LoginError;