<script setup lang="ts">
//import { supabase } from '@/lib/supabaseClient'
import type { Tables } from '../../../database/types'
import type { ColumnDef } from '@tanstack/vue-table'
import DataTable from '@/components/ui/data-table/DataTable.vue'
import { RouterLink } from 'vue-router'

const projects = ref<Tables<'projects'>[] | null>(null)
;(async () => {
  //const { data, error } = await supabase.from('projects').select()
  const data: Tables<'projects'>[] = [
    {
      collaborators: ['Max', 'Matt'],
      created_at: '10/24/2024',
      id: 1,
      name: 'Complete Vue Training',
      slug: 'succeedvuetraining',
      status: 'in-progress'
    },
    {
      collaborators: ['Nate', 'Brett'],
      created_at: '10/24/2024',
      id: 2,
      name: 'Fail VUE.js Training',
      slug: 'failvuetraining',
      status: 'in-progress'
    }
  ]

  projects.value = data

  console.log('projects: ', projects.value)
})()

const columns: ColumnDef<Tables<'projects'>>[] = [
  {
    accessorKey: 'name',
    header: () => h('div', { class: 'text-left' }, 'Name'),
    cell: ({ row }) => {
      return h(
        RouterLink,
        {
          to: `/projects/${row.original.slug}`,
          class: 'text-left font-medium hover:bg-muted block w-full'
        },
        () => row.getValue('name')
      )
    }
  },
  {
    accessorKey: 'status',
    header: () => h('div', { class: 'text-left' }, 'Status'),
    cell: ({ row }) => {
      return h('div', { class: 'text-left, font-medium' }, row.getValue('status'))
    }
  },
  {
    accessorKey: 'collaborators',
    header: () => h('div', { class: 'text-left' }, 'Collaborators'),
    cell: ({ row }) => {
      return h(
        'div',
        { class: 'text-left font-medium' },
        (row.getValue('collaborators') as string[]).join(', ')
      )
    }
  }
]
</script>

<template>
  <DataTable v-if="projects" :columns="columns" :data="projects" />
</template>
