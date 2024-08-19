import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'bungoma county',

  projectId: '2aq8olx0',
  dataset: 'tenders',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
