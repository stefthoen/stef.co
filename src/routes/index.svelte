<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
  import Block from '$lib/Block.svelte';
  import Heading from '$lib/Heading.svelte';
</script>

<svelte:head>
	<title>Stef.co</title>
	<meta name="description" content="Stef.co - Full-stack webdeveloper" />
</svelte:head>

<Block>
  <div class="container mx-auto">
    <Heading heading="h1">Stef Thoen</Heading>
    <p class="mb-4 text-xl">Ik ben een freelance full-stack developer met een achtergrond in Informatica en Filosofie. Ik werk vanuit Frankrijk voor Nederlandse klanten.</p>
    <div class="md:flex md:space-x-4 text-lg">
      <p class="md:basis-1/2">Oktober 2013 vertrok ik met mijn vrouw en <a href="http://joepdezoeperd.nl">Joep de Zoeperd</a> en ben ik door Europa gaan zwerven als digitale nomade.</p>
      <p class="md:basis-1/2">Wij zijn gestrand in de Morvan in Frankrijk, waar we twee jaar hebben gewoond in een <a href="https://www.paprikapatterns.com/building-home-mounting-yurt/">yurt</a>. Zomer 2017 hebben we een <a href="http://peuapeu.nl"> oude boerderij gekocht die we aan het opknappen zijn</a>.</p>
    </div>
  </div>
</Block>

<Block>
  <div class="container mx-auto">
    <Heading heading="h2">Wat doe ik?</Heading>
    <ul class="md:flex md:space-x-6">
      <li class="mb-4 md:mb-0 md:basis-1/3">
        <Heading heading="h3">Ontwerp</Heading>
        <p>Ik onderzoek, schets en bouw prototypes. Ik zorg voor een overzichtelijk en doeltreffend ontwerp, een website waar bezoekers graag naar terugkomen.</p>
      </li>
      <li class="mb-4 md:mb-0 md:basis-1/3">
        <Heading heading="h3">Bouw</Heading>
        <p>Responsive websites en webapps gebouwd met een sterke focus op performance. Razendsnel waardoor je bezoeker snel vindt wat hij zoekt.</p>
      </li>
      <li class="mb-4 md:mb-0 md:basis-1/3">
        <Heading heading="h3">Service</Heading>
        <p>Na oplevering voer ik onderhoud uit, host ik je website, installeer updates en &apos;tweak&apos; de website voor optimale veiligheid en conversie.</p>
      </li>
    </ul>
  </div>
</Block>

<Block>
  <div class="container mx-auto">
    <Heading heading="h2">Wat maak ik?</Heading>
    <p>Ik bouw responsive websites op maat. Dit gaat van een simpele one-page tot complete webshops. HTML, CSS en JavaScript kennen voor mij geen geheimen. WordPress is mijn CMS naar keuze, maar ik heb ervaring met een boel andere back-end talen en frameworks.</p>
    <p>Hieronder volgt een greep uit mijn meest recente werk. Wil je meer zien <a href="mailto:hi@stef.co">neem dan contact op</a>.</p>
  </div>
</Block>

<Block>
  <div class="container mx-auto">
    <Heading heading="h2">Waar kan ik je mee helpen?</Heading>
    <p>Denk je dat ik je ergens bij kan helpen? Of je nu een simpele website nodig hebt, of je een creatief communicatiebureau hebt en een vaste dev&apos;er nodig hebt om je designs te bouwen: Stuur mij een e-mail op <a href="mailto:hi@stef.co">hi@stef.co</a>.</p>
  </div>
</Block>
