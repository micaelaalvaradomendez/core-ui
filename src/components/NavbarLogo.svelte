<script>

export let onLogoClick = null;

</script>

<div class="logo-container" on:click={() => onLogoClick ? onLogoClick() : console.warn('No se definió onLogoClick')} on:keydown={(e) => e.key === 'Enter' && onLogoClick && onLogoClick()}>
  <img src="./../images/logo.png" alt="Logo del Juzgado" class="logo" />
  <div class="logo-text">
    <h1>Portal del Juzgado</h1>
    <p>Justicia y Transparencia</p>
  </div>
</div>

<style>
  @import '../styles/navbar.css';
</style>