const InputField = ({
  type = "text",
  value,
  onChange,
  placeholder = "",
  className = "",
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className={className}
    {...props}
  />
);

export default InputField;
