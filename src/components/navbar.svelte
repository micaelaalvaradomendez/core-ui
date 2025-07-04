<script>
  // Props que permiten la configuración desde la app que consuma el componente
    export let navbarOptions = [];     // [{ label: 'Inicio', href: '/' }, ...]
    export let notifications = [];

    import NavbarLogo from './NavbarLogo.svelte';    
    import NavbarDrawer from './NavbarDrawer.svelte';

</script>

<nav class="navbar" class:scrolled={isScrolled}>
  <div class="navbar-container">
    <NavbarDrawer menuItems={navbarOptions} />
    <NavbarLogo />
    
    <div class="navbar-spacer"></div>
    
    <div class="navbar-options">
        <div class="navbar-center">
            <!-- Opciones del navbar -->
            {#each navbarOptions as option}
            <a class="navbar-option" href={option.href}>
                {option.label}
            </a>
            {/each}
        </div>
    </div>
  

  <div class="navbar-right">
    <!-- Notificaciones dinámicas -->
    <div class="navbar-notifications">
      <button aria-label="Notificaciones">
        {notifications.length}
      </button>
      {#if notifications.length > 0}
        <div class="notifications-dropdown">
          {#each notifications as notif}
            <div class="notification-item">
              {notif.message}
            </div>
          {/each}
        </div>
      {/if}
    </div>
  </div>
</nav>

<style>
  @import '../styles/navbar.css';
</style>