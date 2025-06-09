import DevLens from '@/app/components/Icons/DevLens';
import StyleSpy from '@/app/components/Icons/StyleSpy';
import SpeedBoost from '@/app/components/Icons/SpeedBoost';
import JsonWizard from '@/app/components/Icons/JsonWizard'; 
import TabMasterPro from '@/app/components/Icons/TabMasterPro';
import ViewPortBuddy from '@/app/components/Icons/ViewPortBuddy'; 
import MarkupNotes from '@/app/components/Icons/MarkupNotes';
import GridGuides from '@/app/components/Icons/GridGuides';
import PalletePicker from '@/app/components/Icons/PalletePicker'; 
import LinkChecker from '@/app/components/Icons/LinkChecker';
import DomSnapshot from '@/app/components/Icons/DomSnapshot'; 
import ConsolePlus from '@/app/components/Icons/ConsolePlus';

export const iconMap = {
  DevLens: DevLens,
  StyleSpy: StyleSpy,
  SpeedBoost: SpeedBoost,
  JsonWizard: JsonWizard, 
  TabMasterPro: TabMasterPro,
  ViewPortBuddy: ViewPortBuddy, 
  MarkupNotes: MarkupNotes,
  GridGuides: GridGuides,
  PalletePicker: PalletePicker, 
  LinkChecker: LinkChecker,
  DomSnapshot: DomSnapshot, 
  ConsolePlus: ConsolePlus,
};

export type IconComponentName = keyof typeof iconMap;