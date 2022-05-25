<script>
  export let heading;
  let clazz;
  export { clazz as class };
</script>

{#if heading === 'h1'}
  <h1 class={`mb-12 uppercase text-4xl font-bold tracking-widest ${clazz}`}><slot></slot></h1>
{:else if heading === 'h2'}
  <h2 class={`mb-8 uppercase text-3xl font-bold tracking-widest ${clazz}`}><slot></slot></h2>
{:else if heading === 'h3'}
  <h3 class={`mb-4 uppercase text-xl font-bold tracking-widest ${clazz}`}><slot></slot></h3>
{/if}
