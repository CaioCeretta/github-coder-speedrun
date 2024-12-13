<script>
  import Menu from "./Menu.svelte";
  import MenuItem from "./MenuItem.svelte";
</script>

<aside
  class="w-72 flex self-start flex-col gap-10
  p-5 border border-zinc-800 rounded-md
  "
>
  <Menu titulo="Navegação">
    <MenuItem link="/" texto="Início" />
    <MenuItem link="/autores" texto="Autores" />
    <MenuItem texto="Personagens" link="/" />
    <MenuItem texto="Séries" link="/" />
  </Menu>

  <Menu titulo="Principais Autores">
    <MenuItem texto="J.K. Rowling" link="/autores/j-k-rowling" />
    <MenuItem texto="J.R.R Tolkien" link="/autores/tolkien" />
    <MenuItem texto="George R.R. Martin" link="/autores/george-martin" />
  </Menu>
  <Menu titulo="Outras Categorias">
    <MenuItem texto="Últimas Notícias" />
    <MenuItem texto="Séries Populares" />
    <MenuItem texto="Facebook" />
    <MenuItem texto="Instagram" />
    <MenuItem texto="Youtube" />
  </Menu>
</aside>
