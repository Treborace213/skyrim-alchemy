import { getBasePath } from "@/utils/basePath";
import TooltipWrapper from "./TooltipWrapper";
import EffectProperty from "@/enums/EffectProperty"

const magnitudeIconPath = `${getBasePath()}/images/magnitudeIcon.png`;
const durationIconPath = `${getBasePath()}/images/durationIcon.png`;
const valueIconPath = `${getBasePath()}/images/valueIcon.png`;

interface PropertyIconProps {
  effectProperty: EffectProperty;
  seperatorText?: string;
  magnitude: number;
  tooltipText: string;
}

const getPath = (property: EffectProperty) => {
  switch (property) {
    case (EffectProperty.Magnitude):
      return magnitudeIconPath;
    case (EffectProperty.Duration):
      return durationIconPath;
    case (EffectProperty.Value):
      return valueIconPath;
  }
}

const PropertyIcon: React.FC<PropertyIconProps> = ({ effectProperty, magnitude, seperatorText, tooltipText }) => (
  <TooltipWrapper text={tooltipText}>
    <span className="space-x-1.25">
      <img src={getPath(effectProperty)} alt={`${EffectProperty} Icon`} className="w-5 h-5 inline" />
      <span className="inline">{seperatorText}{magnitude}</span>
    </span>
  </TooltipWrapper>
);

export default PropertyIcon;