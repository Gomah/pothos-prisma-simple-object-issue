import SchemaBuilder from '@pothos/core';
import PrismaPlugin from '@pothos/plugin-prisma';
import SimpleObjectsPlugin from '@pothos/plugin-simple-objects';
import type PrismaTypes from '../prisma/generated';
import { db } from './db';

export const builder = new SchemaBuilder<{ PrismaTypes: PrismaTypes }>({
  plugins: [SimpleObjectsPlugin, PrismaPlugin],
  prisma: {
    client: db,
  },
});
