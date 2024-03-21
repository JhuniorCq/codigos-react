
import useGet from "../hooks/useGet";

const TablaUsuarios = () => {

  const {usuarios, loading, error} = useGet('https://jsonplaceholder.typicode.com/users');

  return (
    <>
      {
        loading ? <p>Cargando ...</p>: 
        error ? <p>Error ...</p>: 
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">WebSite</th>
            </tr>
          </thead>
          <tbody>                                                                                                                                                                                                                                                                                       
            {
              usuarios && usuarios.map(usuario => {
                return (
                  <tr key={usuario.id}>
                    <td scope="row">{usuario.id}</td>
                    <td>{usuario.name}</td>
                    <td>{usuario.email}</td>
                    <td>{usuario.website}</td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      }
    </>
  );
};

export default TablaUsuarios;
