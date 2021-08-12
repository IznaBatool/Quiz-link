<template>
  <div>
    <div v-if="leftpanel === 'display-candidates'">
      <DisplayCandidates />
    </div>
    <div v-else-if="leftpanel === 'generate-link'">
      <GenerateLink />
    </div>
  </div>
</template>

<script>
import DisplayCandidates from "@/components/DisplayCandidates.vue"
import GenerateLink from "@/components/GenerateLink.vue"

export default {
  components: {
    DisplayCandidates,
    GenerateLink,
  },
  props: {
    leftpanel: {
      type: String,
      required: true,
    }
  }
}

</script>