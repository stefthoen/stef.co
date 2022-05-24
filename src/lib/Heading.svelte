<script>
  export let heading;
</script>
{#if heading === 'h1'}
  <h1 class="my-6 uppercase text-4xl text-center font-bold tracking-widest"><slot></slot></h1>
{:else if heading === 'h2'}
  <h2 class="mb-4 uppercase text-3xl text-center font-bold tracking-widest"><slot></slot></h2>
{:else if heading === 'h3'}
  <h3 class="mb-4 uppercase text-xl text-center font-bold tracking-widest"><slot></slot></h3>
{/if}
