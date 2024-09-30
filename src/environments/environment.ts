export const environment = {
    url: 'http://localhost:8000/',
    urlUsuarios: 'http://localhost:8080/',
    documentsEndpoints: {
        documents: 'document',

    },
    usuariosEndpoints: {
        usuarios: 'api/v1/users/',
        endpoints: {
            register: 'create',
            login: 'login',
            forgotPassoword: 'change-password'
        }

    }
}
