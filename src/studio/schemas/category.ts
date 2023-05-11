import {defineField, defineType} from 'sanity'
import {TbCategory} from 'react-icons/tb'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: TbCategory,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
})
