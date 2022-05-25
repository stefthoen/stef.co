<script lang="ts">
  import Heading from '$lib/Heading.svelte';
  export let title;
  export let url;
  export let imageSrc;
</script>

<div class="mb-12">
  <a href={url}><Heading heading="h3">{title}</Heading></a>
  <a href={url}><img class="mb-6" src={imageSrc} /></a>
  <div><slot></slot></div>
</div>
