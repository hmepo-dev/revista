<script lang="ts">
	import { listaRevistas } from '$lib/data/revistas';
</script>

<svelte:head>
    <title>Revista Digital IPS | Catálogo</title>
    <meta name="description" content="Accede a todos los números previos, lee los resúmenes informativos o descarga las ediciones completas en formato PDF." />
</svelte:head>

<div class="min-h-screen bg-slate-950 text-slate-100 font-sans">
	<!-- Navbar / Encabezado -->
	<header class="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
			<div class="flex items-center space-x-3">
				<span class="text-2xl font-black tracking-wider text-emerald-400">IPS</span>
				<span class="text-sm font-semibold tracking-widest text-slate-400 uppercase"
					>Revista Digital</span
				>
			</div>
			<!--
			<nav class="flex space-x-4">
				<a href="#catalogo" class="text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors">Catálogo</a>
				<a href="#sobre-nosotros" class="text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors">Acerca de</a>
			</nav>
            -->
		</div>
	</header>

	<!-- Hero Section / Presentación -->
	<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 text-center">
		<h1
			class="text-4xl sm:text-6xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight"
		>
			Explora nuestras publicaciones desde la <span
				class="text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]">Web</span
			>
		</h1>
		<p class="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
			Accede a todos los números previos, lee los resúmenes informativos o descarga las ediciones
			completas en formato PDF.
		</p>
	</section>

	<!-- Catálogo de Revistas -->
	<main id="catalogo" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
		<div class="flex items-center justify-between border-b border-slate-800 pb-4 mb-8">
			<h2 class="text-xl font-bold tracking-tight text-white">Ediciones Disponibles</h2>
			<span
				class="text-xs font-semibold bg-slate-800 text-slate-300 px-2.5 py-1 rounded-full uppercase tracking-wider"
			>
				{listaRevistas.length} Publicaciones
			</span>
		</div>

		<!-- Cuadrícula / Grid Adaptable -->
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			{#each listaRevistas as revista (revista.id)}
				<article
					class="bg-slate-900 border border-slate-800/60 rounded-2xl overflow-hidden flex flex-col sm:flex-row hover:border-slate-700 hover:shadow-[0_4px_30px_rgba(0,0,0,0.4)] transition-all duration-300 group"
				>
					<!-- Contenedor de la Portada -->
					<div class="sm:w-2/5 h-64 sm:h-auto relative overflow-hidden bg-slate-800 shrink-0">
						<img
							src={revista.portada}
							alt={revista.titulo}
							class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
						/>
						<div
							class="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent sm:hidden"
						></div>
					</div>

					<!-- Contenido de la Revista -->
					<div class="p-6 sm:p-8 flex flex-col justify-between grow">
						<div>
							<span class="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-2"
								>{revista.fecha}</span
							>
							<h3
								class="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors line-clamp-2"
							>
								{revista.titulo}
							</h3>
							<p class="mt-3 text-sm text-slate-400 leading-relaxed line-clamp-4">
								{revista.resumen}
							</p>
						</div>

						<!-- Botones de Acción -->
						<div class="mt-6 pt-4 border-t border-slate-800/80 flex items-center space-x-3">
							<a
								href={revista.pdfUrl}
								target="_blank"
								rel="external"
								class="flex-1 text-center bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm px-4 py-2.5 rounded-xl transition-colors duration-200 shadow-lg shadow-emerald-500/10"
							>
								Abrir Revista
							</a>
						</div>
					</div>
				</article>
			{/each}
		</div>
	</main>
</div>
