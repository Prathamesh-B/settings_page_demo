const SelectField = ({
  value,
  onChange,
  children,
  className = "",
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  children: React.ReactNode;
}) => (
  <select value={value} onChange={onChange} className={className} {...props}>
    {children}
  </select>
);

export default SelectField;
