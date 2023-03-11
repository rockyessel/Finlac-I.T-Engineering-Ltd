import React from 'react';

const FormInput = ({ label, type  }: { label: string, text?: string}) => {
  const [value, setValue] = React.useState<string>('');
  const onChange = (event: any) => {
    setValue(event.target.value);
  };

  return (
    <div className='FormInput'>
      <label>{label}</label>
      <input title={label} type={type} value={value} onChange={onChange} />
    </div>
  );
};

export default FormInput;
