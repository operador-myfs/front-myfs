export const environment = {
    url: '/documents/',
    urlUsuarios: '/cognito/',
    documentsEndpoints: {
        documents: 'document',
        operators: 'operators',
        signed: '/authenticate',
        transfer: 'transfer',

    },
    usuariosEndpoints: {
        usuarios: 'api/v1/users/',
        endpoints: {
            register: 'create',
            login: 'login',
            forgotPassoword: 'change-password'
        }

    },
    govCarpeta: {
        getOperators:'operators'
    }
}
