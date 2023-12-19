'use client';

import { FileType } from '@/typings';
import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<FileType>[] = [
  {
    accessorKey: 'filename',
    header: 'Filename',
  },
  {
    accessorKey: 'timestamp',
    header: 'Date added',
  },
];
