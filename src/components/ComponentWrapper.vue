// Temporary component to test refactored react components

<template>
  <div>
    <h1 :class="className">{{title}}</h1>
    <TypeLink :type="TypeLinkProps.type" :onClick="TypeLinkProps.onClick" />
    <MarkdownContent :class="MarkdownContentProps.className" :markdown="MarkdownContentProps.markdown" />
    <FieldDoc :field="FieldDocProps.field" :onClickType="handleClickTypeOrField"/>
  </div>
</template>
<script>
import TypeLink from './TypeLink'
import MarkdownContent from './MarkdownContent'
import FieldDoc from './FieldDoc'
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
    FieldDoc
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
        },
        onClick: this.handleClick
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
        },
        onClickType: {}
      }
    }
  },
  methods: {
    handleClick: (component) => {
      console.log('handleClick for', component)
    },
    handleClickTypeOrField: (typeOrField) => {
      console.log('handleClickTypeOrField', typeOrField)
    }
  }
}
</script>
<style lang="stylus" scoped>
</style>
