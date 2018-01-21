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
        <span class="keyword">query</span>
        :
        <TypeLink type="queryType" @click="handleClick" />
      </div>
      {{mutationType &&
        <div class="doc-category-item">
          <span class="keyword">mutation</span>
          :
          <TypeLink type={mutationType} @click="handleClick" />
        </div>}}
      {{subscriptionType &&
        <div class="doc-category-item">
          <span class="keyword">subscription</span>
          :
          <TypeLink
            type="subscriptionType"
            @click="handleClick"
          />
        </div>}}
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
      queryType: () => this.schema.getQueryType(),
      mutationType: () => this.schema.getMutationType && this.schema.getMutationType(),
      subscriptionType: () => this.schema.getSubscriptionType && this.schema.getSubscriptionType()
    },
    components: {
      TypeLink,
      MarkdownContent
    },
    methods: {
      handleClick: function () {
        this.$emit('schemaDocClick')
      }
    }
  }
</script>
<style lang='stylus' scoped>
</style>