<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.ico';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/png" href="{favicon}" />
	<meta name="title" content="Revista Digital IPS" />
	<meta name="description" content="Accede a todos los números previos, lee los resúmenes informativos o descarga las ediciones completas en formato PDF." />
</svelte:head>
{@render children()}
