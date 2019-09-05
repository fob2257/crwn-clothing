import React from 'react';
import PropTypes from 'prop-types';

import './InputField.styles.scss';

const InputField = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  label,
  required = false,
}) => (
    <div className='group'>
      <input
        type={type}
        name={name}
        className='form-input'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
      {
        label && (
          <label className={`${value.length && 'shrink'} form-input-label`}>{label}</label>
        )
      }
    </div>
  );

InputField.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  required: PropTypes.bool,
};

InputField.defaultProps = {
  type: 'text',
  onChange: f => f,
  required: false,
};

export default InputField;
