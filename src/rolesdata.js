const rolesdata = [
    {
        rol: 'admin',
        permiso: {
            update: true,
            delete: true,
            add: true,
            consult: true
        }
    },
    {
        rol: 'customer',
        permiso: {
            update: false,
            delete: false,
            add: false,
            consult: true
        }
    },
    {
        rol: 'editor',
        permiso: {
            update: true,
            delete: false,
            add: false,
            consult: true
        }
    },    
]

export default rolesdata;