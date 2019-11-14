'use strict';

export default [
    {
        name: 'Inicio',
        icon: 'HomeIcon',
        slug: 'dashboard',
        url: { name: 'dashboard-index' }
    },
    {
        name: 'Facturas',
        icon: 'InboxIcon',
        slug: 'invoice',
        submenu: [
            {
                url: { name: 'invoice-index' },
                name: 'Listar',
                slug: 'invoice-index'
            },
            {
                url: { name: 'invoice-update' },
                name: 'Crear',
                slug: 'invoice-update'
            },
            {
                url: { name: 'invoice-status-index' },
                name: 'Estados',
                slug: 'invoice-status-index'
            },
            {
                url: { name: 'invoice-configuration-update' },
                name: 'Configuración',
                slug: 'invoice-configuration-update'
            },
            {
                url: { name: 'invoice-configuration-css' },
                name: 'Diseño de PDF',
                slug: 'invoice-configuration-css'
            }
        ]
    },
    {
        name: 'Clientes',
        icon: 'UsersIcon',
        slug: 'client',
        submenu: [
            {
                url: { name: 'client-index' },
                name: 'Listar',
                slug: 'client-index'
            },
            {
                url: { name: 'client-update' },
                name: 'Crear',
                slug: 'client-update'
            }
        ]
    },
    {
        name: 'Empresa',
        icon: 'BriefcaseIcon',
        slug: 'company',
        submenu: [
            {
                url: { name: 'company-update' },
                name: 'Editar Datos',
                slug: 'company-update'
            },

            {
                url: { name: 'discount-index' },
                name: 'Descuentos',
                slug: 'discount-index'
            },

            {
                url: { name: 'payment-index' },
                name: 'Pagos',
                slug: 'payment-index'
            },

            {
                url: { name: 'product-index' },
                name: 'Productos',
                slug: 'product-index'
            },

            {
                url: { name: 'shipping-index' },
                name: 'Envíos',
                slug: 'shipping-index'
            },

            {
                url: { name: 'tax-index' },
                name: 'Impuestos',
                slug: 'tax-index'
            }
        ]
    },
]
