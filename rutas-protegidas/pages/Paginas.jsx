

// Este archivo contendrá a múltiples COMPONENTES, en donde cada uno simulará una VISTA (pública o privada)

// Para acceder a estas RUTA NO se necesita una AUTENTICACIÓN y tampoco un PERMISO
export const Landing = () => <h2>Landing Page (Public)</h2>;

// Para acceder a estas 2 RUTAS se necesita una AUTENTICACIÓN
    //Este Home es el Home de un Usuario Autentificado
export const HomeUser = () => <h2>Home Page (Private)</h2>;

export const Dashboard = () => <h2>Dashboard Page (Private)</h2>;

// Para acceder a estas 2 RUTAS se necesita una AUTENTICACIÓN y aparte un PERMISO
export const Analytics = () => <h2>Analytics (Private, permission: 'analize')</h2>;

export const Admin = () => <h2>Admin (Private, permission: 'admin')</h2>;
