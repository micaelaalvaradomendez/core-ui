<script>
    export let footerLinks = []; // permite que el que importe el footer le defina los enlaces utiles
</script>

<footer class="footer">
  <div class="footer-container">
    <div class="footer-content">
      <div class="footer-section">
        <h3>Portal del Juzgado</h3>
        <p>Comprometidos con la justicia y la transparencia en todos nuestros procesos.</p>
      </div>
      <div class="footer-section">
        <h4>Enlaces Útiles</h4>
        <ul class="footer-links">
          {#each footerLinks as link}
            <li>
              <a class="footer-link" href={link.path}>
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>
      <div class="footer-section">
        <h4>Contacto</h4>
        <div class="contact-info">
          <p>📍 Av. San Martín 1234, Ushuaia</p>
          <p>📞 (02901) 123-456</p>
          <p>✉️ info@juzgado.gov.ar</p>
        </div>
      </div>
      <div class="footer-section">
        <h4>Horarios de Atención</h4>
        <div class="schedule">
          <p>Lunes a Viernes: 8:00 - 16:00</p>
          <p>Sábados: 9:00 - 13:00</p>
          <p>Domingos: Cerrado</p>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2024 Portal del Juzgado. Todos los derechos reservados.</p>
    </div>
  </div>
</footer>

<style>
  @import '../styles/footer.css';
</style>
