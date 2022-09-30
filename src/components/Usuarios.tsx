export const Usuarios = () => {

    useEffect(() => {
        //llamado de la API
        reqRespApi.get('/users')
        .then(resp=> {
                console.log(resp);
        })
        .catch(err => console.log(err))
        }, [])
    

    return (
        <>
            <h3>Usuarios</h3>
            <table className = "table">
                <thead>
                    <tr>
                        <th>
                            Avatar
                        </th>
                        <th>
                            Nombre
                        </th>
                        <th>
                            email
                        </th>
                    </tr>
                </thead>
            </table>
        </>
    )
}