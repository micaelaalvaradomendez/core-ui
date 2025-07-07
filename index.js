// definicion de que es lo que vamos a exportar
// los css no se exportan, cuando se intala la dependcia se hace un import
//cuando se intale la dependencia estos son los elementos que va a poder usar el proyecto

export {default as navbar} from './src/components/navbar.svelte';
export {default as footer} from './src/components/footer.svelte';

// Exportar con mayúscula para Svelte (Navbar, Footer)
export { default as Navbar } from './src/components/navbar.svelte';
export { default as Footer } from './src/components/footer.svelte';
