// Temporary component to test refactored react components

<template>
  <!-- uncomment below to preview styles -->
  <!-- <div class="playground"> -->
  <div>
    <h1 :class="className">{{title}}</h1>
    <TypeLink :type="TypeLinkProps.type" v-on:typeLinkClick="handleTypeLinkClick" />
    <MarkdownContent :class="MarkdownContentProps.className" :markdown="MarkdownContentProps.markdown" />
    <FieldDoc :field="FieldDocProps.field" v-on:typeLinkClick="handleTypeLinkClick"/>
    <SchemaDoc :schema="SchemaDocProps.schema"/>
  </div>
</template>
<script>
import TypeLink from './TypeLink'
import MarkdownContent from './MarkdownContent'
import FieldDoc from './FieldDoc'
import SchemaDoc from './SchemaDoc'
import {schema} from '../mocks/graphql/schema'
export default {
  name: 'ComponentWrapper',
  props: {
    title: {
      type: String
    },
    className: {
      type: String
    },
  },
  components: {
    TypeLink,
    MarkdownContent,
    FieldDoc,
    SchemaDoc
  },
  data () {
    return {
      MarkdownContentProps: {
        markdown: '### I am marked downnn',
        className: 'markdown-component'
      },
      TypeLinkProps: {
        type: {
          name: 'String'
        }
      },
      FieldDocProps: {
        field: {
          navStack: [
            {
              initialNav: {
                name: 'Schema',
                title: 'Documentation Explorer',
              }
            }
          ],
          description: '### field description',
          type: {
            name: 'field name'
          },
          args: [
            {
              name: 'Address',
              description: '### args description',
              type: {
                name: 'String'
              }
            },
            {
              name: 'TestField',
              description: '### TestField description',
              type: {
                name: 'String'
              }
            }
          ]
        }
      },
      SchemaDocProps: {
        schema
      }
    }
  },
  methods: {
    handleTypeLinkClick: function (e, ...args) {
      e.preventDefault()
      console.log('handleTypeLinkClick args', e, args)
    },
    handleFieldDocClick: function (args) {
      console.log('handleFieldDocClick args', args)
    },
    handleClickTypeOrField: function (typeOrField) {
      console.log('handleClickTypeOrField', typeOrField)
    }
  }
}
</script>
<style lang="stylus" scoped>
</style>
