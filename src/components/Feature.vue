<template>
	<slot v-if="enabled"></slot>
	<slot v-if="enabled" name="on"></slot>
	<slot v-if="!enabled" name="off"></slot>
</template>

<script>
	import { useFeature } from '@/features/useFeature'
  
	export default {
    props: {
      name: {
        type: String,
        required: true
      }
    },
    setup(props) {
      const { enabled } = useFeature(props.name)


      return { enabled }
    }
  }
</script>