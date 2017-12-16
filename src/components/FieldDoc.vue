<template>
  <div>
    <MarkdownContent
      :className="'doc-type-description'"
      :markdown="field.description || 'No Description'"
    />
    <MarkdownContent :if="field.deprecationReason && field.deprecationReason" :className="'doc-deprecation'" :markdown="field.deprecationReason" />
    <div class="doc-category">
      <div class="doc-category-title">
        type
      </div>
      <TypeLink :type="field.type" v-on:typeLinkClick="handleClick" />
    </div>
    <div class="doc-category">
        <div class="doc-category-title">
          arguments
        </div>
        <div v-for="arg in field.args" :key="arg.name" class="doc-category-item">
          <Argument :showDefaultValue="true" :arg="arg" />
          <MarkdownContent
            :className="'doc-value-description'"
            :markdown="arg.description"
          />
        </div>
      </div>
  </div>
</template>
<script>
import Argument from './Argument'
import MarkdownContent from './MarkdownContent'
import TypeLink from './TypeLink'
export default {
  name: 'FieldDoc',
  props: {
    field: {
      type: Object,
      required: true
    }
  },
  components: {
    Argument,
    MarkdownContent,
    TypeLink
  },
  methods: {
    handleClick: function (...args) {
      this.$emit('fieldDocClick', args)
    }
  }
}
</script>
<style lang="stylus" scoped>

</style>
