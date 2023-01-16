import styled from 'styled-components';

type InputProps = {
  type: string;
  value: string;
  onChange: (e: React.SyntheticEvent) => void;
  placeholder: string;
};

const Input = ({
  type,
  value,
  onChange,
  placeholder,
}: InputProps) => {
  return (
    <TextInput
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

const TextInput = styled.input`
  display: block;
  min-width: 50%;
  min-height: 25px;
  padding-block: 0;
  margin-inline: auto;
  margin-block-end: 1em;
  border-radius: 4px;
`;

export default Input;