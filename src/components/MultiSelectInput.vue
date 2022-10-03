<template>
  <div>
    <Multiselect mode="tags" :close-on-select="false" :searchable="true" :create-option="true" v-model="value"
      :options="options" @change="$emit('changeOptionSelect',value)" />
  </div>
</template>

<script>
import Multiselect from '@vueform/multiselect'

export default {
  components: {
    Multiselect,
  },
  props: ['options'],
  data () {
    return {
      value: null,
    }
  }
}
</script>

<style src="@vueform/multiselect/themes/default.css">

</style>