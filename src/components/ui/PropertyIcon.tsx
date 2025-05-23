import { getBasePath } from "@/utils/basePath";
import TooltipWrapper from "./TooltipWrapper";
import EffectProperty from "@/enums/EffectProperty"
import Image from "next/image";

const magnitudeIconPath = `${getBasePath()}/images/magnitudeIcon.png`;
const durationIconPath = `${getBasePath()}/images/durationIcon.png`;
const valueIconPath = `${getBasePath()}/images/valueIcon.png`;

interface PropertyIconProps {
  effectProperty: EffectProperty;
  tooltipText?: string;
  className?: string;
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

const PropertyIcon: React.FC<PropertyIconProps> = ({ effectProperty, tooltipText, className }) => (
  <TooltipWrapper text={tooltipText ?? effectProperty}>
    <Image src={getPath(effectProperty)} alt={`${EffectProperty} Icon`} width={20} height={20} className={`inline ${className}`} />
  </TooltipWrapper>
);

export default PropertyIcon;