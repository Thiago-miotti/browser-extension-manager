import DevLens from '@/app/components/Icons/DevLens';
import StyleSpy from '@/app/components/Icons/StyleSpy';
import SpeedBoost from '@/app/components/Icons/SpeedBoost';
import JSONWizard from '@/app/components/Icons/JsonWizard'; 
import TabMasterPro from '@/app/components/Icons/TabMasterPro';
import ViewportBuddy from '@/app/components/Icons/ViewPortBuddy'; 
import MarkupNotes from '@/app/components/Icons/MarkupNotes';
import GridGuides from '@/app/components/Icons/GridGuides';
import PalettePicker from '@/app/components/Icons/PalletePicker';
import LinkChecker from '@/app/components/Icons/LinkChecker';
import DOMSnapshot from '@/app/components/Icons/DomSnapshot';
import ConsolePlus from '@/app/components/Icons/ConsolePlus';

export type IconComponentName =
  | 'DevLens'
  | 'StyleSpy'
  | 'SpeedBoost'
  | 'JSONWizard'
  | 'TabMasterPro'
  | 'ViewportBuddy'
  | 'MarkupNotes'
  | 'GridGuides'
  | 'PalettePicker'
  | 'LinkChecker'
  | 'DOMSnapshot'
  | 'ConsolePlus';

export const iconMap: Record<IconComponentName, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  DevLens: DevLens,
  StyleSpy: StyleSpy,
  SpeedBoost: SpeedBoost,
  JSONWizard: JSONWizard, 
  TabMasterPro: TabMasterPro,
  ViewportBuddy: ViewportBuddy,
  MarkupNotes: MarkupNotes,
  GridGuides: GridGuides,
  PalettePicker: PalettePicker,
  LinkChecker: LinkChecker,
  DOMSnapshot: DOMSnapshot,
  ConsolePlus: ConsolePlus,
};