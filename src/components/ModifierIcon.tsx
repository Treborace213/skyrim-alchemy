import TooltipWrapper from "./TooltipWrapper";

interface ModifierIconProps {
  iconPath: string;
  label: string;
  multiplier: number;
}

const ModifierIcon: React.FC<ModifierIconProps> = ({ iconPath, label, multiplier }) => (
  <TooltipWrapper text={`${label} Multiplier`}>
    <span className="space-x-1.25">
      <img src={iconPath} alt={`${label} Icon`} className="w-5 h-5 inline" />
      <span className="inline">x{multiplier}</span>
    </span>
  </TooltipWrapper>
);

export default ModifierIcon;