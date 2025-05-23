import TooltipWrapper from "./TooltipWrapper";
import EffectProperty from "@/enums/EffectProperty"
import { ClockIcon, CurrencyDollarIcon, FireIcon} from "@heroicons/react/16/solid";

interface PropertyIconProps {
  effectProperty: EffectProperty;
  tooltipText?: string;
}

const getIcon = (prop: EffectProperty) => {
  const className = "w-5 h-5 inline justify-center"
  switch (prop) {
    case (EffectProperty.Magnitude):
      return <FireIcon className={className} />;
    case (EffectProperty.Duration):
      return <ClockIcon className={className} />;
    case (EffectProperty.Value):
      return <CurrencyDollarIcon className={className} />;
  }
}

const PropertyIcon: React.FC<PropertyIconProps> = ({ effectProperty, tooltipText}) => (

  <TooltipWrapper text={tooltipText ?? effectProperty}>
    {getIcon(effectProperty)}
  </TooltipWrapper>
);

export default PropertyIcon;