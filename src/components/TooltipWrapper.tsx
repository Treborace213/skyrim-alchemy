interface TooltipWrapperProps {
  children: React.ReactNode;
  text: string;
}

const TooltipWrapper: React.FC<TooltipWrapperProps> = ({ children, text }) => {
  return (
    <div className="relative group inline-block">
      {children}

      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-menu text-sm py-1 px-2 rounded">
        {text}
      </div>
    </div>
  );
};

export default TooltipWrapper;