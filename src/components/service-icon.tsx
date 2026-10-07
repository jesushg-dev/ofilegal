import {
  Briefcase,
  FileText,
  Gavel,
  Landmark,
  Stamp,
  Users,
  type LucideIcon,
} from "lucide-react";

import type { ServiceIconName } from "@/features/cms/types";

const ICONS: Record<ServiceIconName, LucideIcon> = {
  stamp: Stamp,
  contract: FileText,
  briefcase: Briefcase,
  labor: Users,
  ngo: Landmark,
  gavel: Gavel,
};

export function ServiceIcon({ name }: { name: ServiceIconName }) {
  const Icon = ICONS[name];
  return <Icon className="size-6" />;
}
