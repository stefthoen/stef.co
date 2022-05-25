<script lang="ts">
  import Heading from '$lib/Heading.svelte';
</script>

<footer class="mt-24 py-12 bg-brown text-white">
  <div class="container mx-auto md:flex md:space-x-6">
    <div class="md:basis-1/3">
      <Heading heading="h3">Post Adress</Heading>
      <ul>
        <li>4 Frétoy</li>
        <li>71550 Cussy-en-Morvan</li>
        <li>France</li>
      </ul>
    </div>
    <div class="md:basis-1/3">
      <Heading heading="h3">Contact</Heading>
      <ul>
        <li><a href="https://twitter.com/stefthoen">Twitter</a></li>
        <li><a href="https://www.linkedin.com/in/stefthoen/">LinkedIn</a></li>
        <li><a href="mailto:hi@stef.co">hi@stef.co</a></li>
      </ul>
    </div>
    <div class="md:basis-1/3">
      <Heading heading="h3">Administration</Heading>
      <ul>
        <li>Siret: 81448255000013</li>
        <li>Bank: NL47 ASNB 0708 3314 67</li>
        <li>TVA: FR08814482550</li>
      </ul>
    </div>
  </div>
</footer>
