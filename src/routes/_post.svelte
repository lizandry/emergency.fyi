<script>
  export let post;

</script>

<li cell p="6 sm3" shadow="3" bg="white">
  <h3>
    <a rel='prefetch' href='{post.url}'>{post.title}</a>
  </h3>
  {#each post.tags as tag}
    <span chip mr="2" mb="2" href="/?tag={tag}" class="">{tag}</span>
  {/each}
  <p>{post.description}</p>
</li>
