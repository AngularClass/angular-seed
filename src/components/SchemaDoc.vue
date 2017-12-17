<template>
  <div>
    <MarkdownContent
      class="doc-type-description"
      markdown="'A GraphQL schema provides a root type for each kind of operation.'"
    />
    <div class="doc-category">
      <div class="doc-category-title">
        root types
      </div>
      <div class="doc-category-item">
        <span class="keyword">query:</span>
        <TypeLink :type="queryType" v-on:typeLinkClick="handleTypeLinkClick" />
      </div>
      {{mutationType}}
      <div class="doc-category-item">
        <span class="keyword">mutation:</span>
        <TypeLink :type="mutationType" v-on:typeLinkClick="handleTypeLinkClick" />
      </div>
      {{subscriptionType}}
      <div class="doc-category-item">
        <span class="keyword">subscription:</span>
        <TypeLink :type="subscriptionType" v-on:typeLinkClick="handleTypeLinkClick" />
      </div>
    </div>
  </div>
</template>
<script>
  import TypeLink from './TypeLink'
  import MarkdownContent from './MarkdownContent'
  export default {
    name: 'SchemaDoc',
    props: {
      schema: {
        type: Object
      }
    },
    computed: {
      queryType: function () {
        return this.schema.getQueryType()
      },
      mutationType: function () {
        return this.schema.getMutationType()
      },
      subscriptionType: function () {
        console.log('this.schema', this.schema)
        return this.schema.getSubscriptionType()
      }
    },
    components: {
      TypeLink,
      MarkdownContent
    },
    methods: {
      handleClick: function () {
        this.$emit('schemaDocClick')
      },
      handleTypeLinkClick: (e, type) => {
        e.preventDefault()
        console.log('typelinkclicked type', type)
      }
    },
    created () {
      console.log('this.schema', this.schema)
    }
  }
</script>
<style lang='stylus' scoped>
</style>