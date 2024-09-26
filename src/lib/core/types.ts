import { z } from 'zod';

export const WindowData = z.object({
  id: z.number().positive(),
  high: z
    .number({ required_error: 'Introdusca el alto.' })
    .positive({ message: 'El alto debe ser mayor a 0.' }),
  width: z
    .number({ required_error: 'Introdusca el ancho.' })
    .positive({ message: 'El ancho debe ser mayor a 0.' }),
  sheets: z.number().min(2).max(5),
  notes: z.string().optional(),
});

export type WindowData = z.infer<typeof WindowData>;

export interface ProjectSettings {
  units: 'm' | 'cm' | 'mm';
}

export interface ProjectData {
  windows: WindowData[];
  settings: ProjectSettings;
}
