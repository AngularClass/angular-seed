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
      <TypeLink :type="field.type" :onClick="onClickType" />
    </div>
    <div :if="field.args">
      <div class="doc-category">
          <div class="doc-category-title">
            arguments
          </div>
          <div :for="arg in field.args">
            <div :key="arg.name" class="doc-category-item">
              <div>
                <Argument :arg="arg" :onClickType="this.props.onClickType" />
              </div>
              <MarkdownContent
                :className="'doc-value-description'"
                :markdown="arg.description"
              />
            </div>
          </div>
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
    },
    onClickType: {
      type: Function
    }
  },
  components: {
    Argument,
    MarkdownContent,
    TypeLink
  },
  data () {
    return {}
  },
  created () {
    console.log('field', this.field.args)
  }
}
</script>
<style lang="stylus" scoped>

</style>
