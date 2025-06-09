import { IconComponentName } from "../utils/iconMap";

export interface Extension {
  id: number;
  title: string;
  description: string;
  isOn: boolean;
  icon: IconComponentName | string;
}