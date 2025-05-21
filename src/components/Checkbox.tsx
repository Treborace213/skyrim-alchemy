type CheckboxProps = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
}) => {
  const handleToggle = () => {
    onChange(!checked);
  };

  return (
    <label
      onClick={handleToggle}
      className={`inline-flex items-center gap-2 cursor-pointer`}
    >
      <span>{label}</span>
      <div
        className={`w-6 h-6 border-2 rounded-sm flex items-center justify-center
        ${checked ? "bg-bg-tint" : "bg-menu"}
        transition-colors duration-300`}
      >
        {checked && (
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
    </label>
  );
};

export default Checkbox;