<script>
  let isOpen = false;
    
  function toggleDrawer() {
    isOpen = !isOpen;
  }
  
  function handleNavigation(path) {
    goto(path);
    isOpen = false;
  }
  
  function closeDrawer() {
    isOpen = false;
  }
  
  $: currentPath = $page.url.pathname;
</script>

<div class="drawer-container">
  <button class="menu-button" on:click={toggleDrawer} aria-label="Abrir menú">
    <div class="hamburger" class:open={isOpen}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </button>
  
  {#if isOpen}
    <div class="overlay" on:click={closeDrawer} on:keydown={(e) => e.key === 'Escape' && closeDrawer()}></div>
    <div class="drawer" class:open={isOpen}>
      <div class="drawer-header">
        <h2>Menú</h2>
        <button class="close-button" on:click={closeDrawer} aria-label="Cerrar menú">
          ✕
        </button>
      </div>
      
      <nav class="drawer-nav">
        <ul class="drawer-list">
          {#each menuItems as item}
            <li class="drawer-item">
              <button 
                class="drawer-link" 
                class:active={currentPath === item.path}
                on:click={() => handleNavigation(item.path)}
              >
                {item.label}
              </button>
            </li>
          {/each}
        </ul>
      </nav>
    </div>
  {/if}
</div>

<style>
    @import '../styles/navbar.css';
</style>