// Toggle menú responsive
const navToggle = document.getElementById('nav-toggle');
const navbar = document.querySelector('.navbar');
const content = document.getElementById("content");

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navbar.classList.toggle('nav-open');
  });
}

// Secciones dinámicas
const sections = {
  info1: `
    <section id="info1">
      <h2>Información 1</h2>
      <p>Esta es mi página web, con etiquetas, enlaces y un menú de navegación.</p>
      <button id="changeTextButton">Haz click para cambiar el texto</button>
    </section>
  `,
  info2: `
    <section id="info2">
      <h2>Información 2</h2>
      <p>Ejemplo de interactividad y diseño responsive con CSS y JavaScript.</p>
    </section>
  `,
  extra1: `
    <section id="extra1">
      <h2>Galería</h2>
      <p>Imágenes de proyectos y actividades destacadas.</p>
      <img src="https://images.unsplash.com/photo-1581092334441-3e04de8d70f0" alt="Proyecto 1" style="width:100%; max-width:400px; margin:1em 0;">
      <img src="https://images.unsplash.com/photo-1564866657316-9d3f3f1f4ff5" alt="Proyecto 2" style="width:100%; max-width:400px; margin:1em 0;">
    </section>
  `,
  extra2: `
    <section id="extra2">
      <h2>Habilidades</h2>
      <ul>
        <li>HTML, CSS, JavaScript</li>
        <li>Bases de datos y algoritmos</li>
        <li>Voleibol y trabajo en equipo</li>
      </ul>
    </section>
  `,
  services: `
    <section class="services">
      <h2><i class="fas fa-briefcase"></i> Mis Proyectos / Intereses</h2>
      <div class="service-cards">
        <div class="card">
          <i class="fas fa-code"></i>
          <h3>Desarrollo Web</h3>
          <p>Creación de páginas web modernas y responsivas usando HTML, CSS y JavaScript.</p>
        </div>
        <div class="card">
          <i class="fas fa-database"></i>
          <h3>Ingeniería en Sistemas</h3>
          <p>Proyectos académicos y prácticos relacionados con algoritmos, programación y bases de datos.</p>
        </div>
        <div class="card">
          <i class="fas fa-volleyball-ball"></i>
          <h3>Voleibol</h3>
          <p>Pasión por el deporte, trabajo en equipo y disciplina. Parte importante de mi vida.</p>
        </div>
      </div>
    </section>
  `,
  contacto: `
    <section class="contacto">
      <h2><i class="fas fa-id-card"></i> Contacto</h2>
      <p><strong>Nombre:</strong> Franier Andrés Fernández Fragozo</p>
      <p><i class="fas fa-phone"></i> <strong>Teléfono:</strong> 3216889096</p>
      <h3>Redes Sociales</h3>
      <ul>
        <li><a href="https://www.facebook.com/share/17G412BNJu/" target="_blank"><i class="fab fa-facebook"></i> Facebook</a></li>
        <li><a href="https://www.instagram.com/frann_3004?igsh=NHFwbGlmeDA1a3Fk" target="_blank"><i class="fab fa-instagram"></i> Instagram</a></li>
        <li><a href="https://x.com/Franierobocop?t=XPdXNZnn-l8OS04MyHvUBw&s=09" target="_blank"><i class="fab fa-x-twitter"></i> Twitter (X)</a></li>
      </ul>
      <a href="https://wa.me/573216889096" target="_blank" class="whatsapp-btn"><i class="fab fa-whatsapp"></i> Escríbeme por WhatsApp</a>
    </section>
  `
};

// Manejo de navegación
document.querySelectorAll(".nav-item").forEach(item => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const section = e.target.getAttribute("data-section");
    if (sections[section]) content.innerHTML = sections[section];

    // Botón dinámico en info1
    const changeBtn = document.getElementById("changeTextButton");
    if(changeBtn){
      changeBtn.addEventListener("click", () => {
        const introSection = document.getElementById("info1");
        introSection.innerHTML = `
          <h2>Texto cambiado ✅</h2>
          <p>El texto ha cambiado después de hacer click en el botón.</p>
        `;
      });
    }
  });
});
