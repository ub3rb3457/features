<template>
	<slot/>
</template>

<script>
  import { useFeatureFlags } from '@/features/useFeatureFlags'

	export default {
    props: {
      flags: {
        type: [Object, Array],
        required: true
      }
    },
    setup(props) {
      useFeatureFlags(props.flags)
    }
  }
</script>