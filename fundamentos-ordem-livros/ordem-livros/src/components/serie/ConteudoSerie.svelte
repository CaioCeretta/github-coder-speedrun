<script lang="ts">
	export let serie: any = null
</script>

{#if serie}
	<div class="flex flex-col gap-5">
		<h1 class="text-3xl font-black">{serie.titulo}</h1>
		<a
			href="/autores/{serie.autor.id}"
			class="text-sm text-zinc-400 -mt-4"
			>{serie.autor.nome}</a
		>
		<img
			src={serie.imagem}
			alt="Imagem da série"
			class="h-96 object-cover"
		/>
		<p class="text-lg text-zinc-400 text-justify">
			{serie.descricao}
		</p>

		<h2 class="">Lista de Livros</h2>

		{#each serie.livros as livro}
			<div>
				{livro.titulo}
			</div>
		{/each}
	</div>
{/if}
