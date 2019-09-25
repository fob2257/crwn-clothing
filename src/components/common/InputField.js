import React from 'react';
import PropTypes from 'prop-types';

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
} from './InputField.styles';

const InputField = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  label,
  required = false,
}) => (
    <GroupContainer>
      <FormInputContainer
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
          <FormInputLabel className={`${value.length && 'shrink'}`}>{label}</FormInputLabel>
        )
      }
    </GroupContainer>
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
