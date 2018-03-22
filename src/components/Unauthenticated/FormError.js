import React from 'react';

const FormError = ({errors}) => (
  <div className="p-container_panel_alert">
    <p>
      {errors.map((error, key) => (
        <span key={key}>{error}</span>
      ))}
    </p>
  </div>
)

export default FormError;