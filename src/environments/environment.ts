export const environment = {
    url: 'https://ocrf9nzqde.execute-api.us-east-1.amazonaws.com/prod/documents/',
    urlUsuarios: 'https://ocrf9nzqde.execute-api.us-east-1.amazonaws.com/prod/cognito/',
    documentsEndpoints: {
        documents: 'document',
        operators: 'operators',
        signed: 'authenticate',

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
