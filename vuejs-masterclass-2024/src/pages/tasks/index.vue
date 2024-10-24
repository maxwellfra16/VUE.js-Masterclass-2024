<script setup lang="ts">
//import { supabase } from '@/lib/supabaseClient'
import { ref, h } from 'vue'
import type { Tables } from '../../../database/types'
import type { ColumnDef } from '@tanstack/vue-table'
import DataTable from '@/components/ui/data-table/DataTable.vue'
import { RouterLink } from 'vue-router'

const tasks = ref<Tables<'tasks'>[] | null>(null)
;(async () => {
  //   const { data, error } = await supabase.from('tasks').select()
  const data: Tables<'tasks'>[] = [
    {
      collaborators: ['Max', 'Matt'],
      created_at: '10/24/2024',
      description: 'You must succeed your training',
      due_date: '12/31/2024',
      id: 1,
      name: 'Complete VUE.js Training',
      project_id: 1,
      status: 'in-progress'
    },
    {
      collaborators: ['Nate', 'Brett'],
      created_at: '10/24/2024',
      description: 'You must fail your training',
      due_date: '12/31/2024',
      id: 2,
      name: 'Fail VUE.js Training',
      project_id: 2,
      status: 'in-progress'
    }
  ]

  //if (error) console.log(error)

  tasks.value = data
})()

const columns: ColumnDef<Tables<'tasks'>>[] = [
  {
    accessorKey: 'name',
    header: () => h('div', { class: 'text-left' }, 'Name'),
    cell: ({ row }) => {
      return h(
        RouterLink,
        {
          to: `/tasks/${row.original.id}`,
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
      return h('div', { class: 'text-left font-medium' }, row.getValue('status'))
    }
  },
  {
    accessorKey: 'due_date',
    header: () => h('div', { class: 'text-left' }, 'Due_Date'),
    cell: ({ row }) => {
      return h('div', { class: 'text-left font-medium' }, row.getValue('due_date'))
    }
  },
  {
    accessorKey: 'project_id',
    header: () => h('div', { class: 'text-left' }, 'Project'),
    cell: ({ row }) => {
      return h('div', { class: 'text-left font-medium' }, row.getValue('project_id'))
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
  <DataTable v-if="tasks" :columns="columns" :data="tasks" />
</template>
