'use strict';

import Vue from 'vue'
import Router from 'vue-router'
import Auth from '@/middlewares/Auth';
import Cache from '@/middlewares/Cache';
import Company from '@/middlewares/Company';
import Session from '@/middlewares/Session';

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.VUE_APP_BASE_URL,
    scrollBehavior() {
        return { x: 0, y: 0 }
    },
    routes: [
        {
            path: '',
            component: () => import('@/views/layouts/Main.vue'),
            children: [
                {
                    path: '/',
                    name: 'dashboard-index',
                    component: () => import('@/views/pages/dashboard/Index.vue'),
                    meta: {
                        title: 'Facturación | Portada',
                        middleware: [Cache, Session, Auth, Company]
                    }
                },

                {
                    path: '/client',
                    name: 'client-index',
                    component: () => import('@/views/pages/client/Index.vue'),
                    meta: {
                        title: 'Facturación | Clientes',
                        middleware: [Cache, Session, Auth, Company]
                    }
                },

                {
                    path: '/client/update/:id?',
                    name: 'client-update',
                    component: () => import('@/views/pages/client/update/Index.vue'),
                    meta: {
                        title: 'Facturación | Cliente',
                        middleware: [Cache, Session, Auth, Company]
                    }
                },

                {
                    path: '/company',
                    name: 'company-update',
                    component: () => import('@/views/pages/company/Update.vue'),
                    meta: {
                        title: 'Facturación | Empresa',
                        middleware: [Session, Auth]
                    }
                },

                {
                    path: '/configuration/cache/clear',
                    name: 'configuration-cache-clear',
                    component: () => import('@/views/pages/configuration/cache/Clear.vue'),
                    meta: {
                        title: 'Facturación | Caché',
                        middleware: [Cache, Session, Auth]
                    }
                },

                {
                    path: '/discount',
                    name: 'discount-index',
                    component: () => import('@/views/pages/discount/Index.vue'),
                    meta: {
                        title: 'Facturación | Descuentos',
                        middleware: [Cache, Session, Auth, Company]
                    }
                },

                {
                    path: '/discount/update/:id?',
                    name: 'discount-update',
                    component: () => import('@/views/pages/discount/update/Index.vue'),
                    meta: {
                        title: 'Facturación | Descuento',
                        middleware: [Cache, Session, Auth, Company],
                        parent: 'discount-index'
                    }
                },

                {
                    path: '/invoice',
                    name: 'invoice-index',
                    component: () => import('@/views/pages/invoice/Index.vue'),
                    meta: {
                        title: 'Facturación | Facturas',
                        middleware: [Cache, Session, Auth, Company]
                    }
                },

                {
                    path: '/invoice/update/:id?',
                    name: 'invoice-update',
                    component: () => import('@/views/pages/invoice/update/Index.vue'),
                    meta: {
                        title: 'Facturación | Factura',
                        middleware: [Cache, Session, Auth, Company]
                    }
                },

                {
                    path: '/invoice-recurring',
                    name: 'invoice-recurring-index',
                    component: () => import('@/views/pages/invoice-recurring/Index.vue'),
                    meta: {
                        title: 'Facturación | Recurrentes',
                        middleware: [Cache, Session, Auth, Company]
                    }
                },

                {
                    path: '/invoice-recurring/update/:id?',
                    name: 'invoice-recurring-update',
                    component: () => import('@/views/pages/invoice-recurring/update/Index.vue'),
                    meta: {
                        title: 'Facturación | Recurrente',
                        middleware: [Cache, Session, Auth, Company],
                        parent: 'invoice-recurring-index'
                    }
                },

                {
                    path: '/invoice-serie',
                    name: 'invoice-serie-index',
                    component: () => import('@/views/pages/invoice-serie/Index.vue'),
                    meta: {
                        title: 'Facturación | Series',
                        middleware: [Cache, Session, Auth, Company]
                    }
                },

                {
                    path: '/invoice-serie/update/:id?',
                    name: 'invoice-serie-update',
                    component: () => import('@/views/pages/invoice-serie/update/Index.vue'),
                    meta: {
                        title: 'Facturación | Serie',
                        middleware: [Cache, Session, Auth, Company],
                        parent: 'invoice-serie-index'
                    }
                },

                {
                    path: '/invoice-status',
                    name: 'invoice-status-index',
                    component: () => import('@/views/pages/invoice-status/Index.vue'),
                    meta: {
                        title: 'Facturación | Estados',
                        middleware: [Cache, Session, Auth, Company]
                    }
                },

                {
                    path: '/invoice-status/update/:id?',
                    name: 'invoice-status-update',
                    component: () => import('@/views/pages/invoice-status/update/Index.vue'),
                    meta: {
                        title: 'Facturación | Estado',
                        middleware: [Cache, Session, Auth, Company],
                        parent: 'invoice-status-index'
                    }
                },

                {
                    path: '/payment',
                    name: 'payment-index',
                    component: () => import('@/views/pages/payment/Index.vue'),
                    meta: {
                        title: 'Facturación | Pagos',
                        middleware: [Cache, Session, Auth, Company]
                    }
                },

                {
                    path: '/payment/update/:id?',
                    name: 'payment-update',
                    component: () => import('@/views/pages/payment/update/Index.vue'),
                    meta: {
                        title: 'Facturación | Pago',
                        middleware: [Cache, Session, Auth, Company],
                        parent: 'payment-index'
                    }
                },

                {
                    path: '/product',
                    name: 'product-index',
                    component: () => import('@/views/pages/product/Index.vue'),
                    meta: {
                        title: 'Facturación | Productos',
                        middleware: [Cache, Session, Auth, Company]
                    }
                },

                {
                    path: '/product/update/:id?',
                    name: 'product-update',
                    component: () => import('@/views/pages/product/update/Index.vue'),
                    meta: {
                        title: 'Facturación | Producto',
                        middleware: [Cache, Session, Auth, Company],
                        parent: 'product-index'
                    }
                },

                {
                    path: '/shipping',
                    name: 'shipping-index',
                    component: () => import('@/views/pages/shipping/Index.vue'),
                    meta: {
                        title: 'Facturación | Envíos',
                        middleware: [Cache, Session, Auth, Company]
                    }
                },

                {
                    path: '/shipping/update/:id?',
                    name: 'shipping-update',
                    component: () => import('@/views/pages/shipping/update/Index.vue'),
                    meta: {
                        title: 'Facturación | Envío',
                        middleware: [Cache, Session, Auth, Company],
                        parent: 'shipping-index'
                    }
                },

                {
                    path: '/tax',
                    name: 'tax-index',
                    component: () => import('@/views/pages/tax/Index.vue'),
                    meta: {
                        title: 'Facturación | Impuestos',
                        middleware: [Cache, Session, Auth, Company]
                    }
                },

                {
                    path: '/tax/update/:id?',
                    name: 'tax-update',
                    component: () => import('@/views/pages/tax/update/Index.vue'),
                    meta: {
                        title: 'Facturación | Impuesto',
                        middleware: [Cache, Session, Auth, Company],
                        parent: 'tax-index'
                    }
                },

                {
                    path: '/user/update',
                    name: 'user-update',
                    component: () => import('@/views/pages/user/update/Update.vue'),
                    meta: {
                        title: 'Facturación | Usuario',
                        middleware: [Cache, Session, Auth]
                    }
                }
            ],
        },
        {
            path: '',
            component: () => import('@/views/layouts/FullPage.vue'),
            children: [
                {
                    path: '/user/auth',
                    name: 'user-auth',
                    component: () => import('@/views/pages/user/auth/Auth.vue'),
                    meta: {
                        title: 'Facturación | Acceso',
                        middleware: [Cache]
                    }
                },

                {
                    path: '/user/signup',
                    name: 'user-signup',
                    component: () => import('@/views/pages/user/signup/Signup.vue'),
                    meta: {
                        title: 'Facturación | Alta',
                        middleware: [Cache]
                    }
                },

                {
                    path: '/user/confirm',
                    name: 'user-confirm-start',
                    component: () => import('@/views/pages/user/confirm/Start.vue'),
                    meta: {
                        title: 'Facturación | Confirmación',
                        middleware: [Cache]
                    }
                },

                {
                    path: '/user/confirm/:hash',
                    name: 'user-confirm-finish',
                    component: () => import('@/views/pages/user/confirm/Finish.vue'),
                    meta: {
                        title: 'Facturación | Confirmación',
                        middleware: [Cache, Session]
                    }
                },

                {
                    path: '/user/password/reset',
                    name: 'user-password-reset-start',
                    component: () => import('@/views/pages/user/password-reset/Start.vue'),
                    meta: {
                        title: 'Facturación | Contraseña',
                        middleware: [Cache]
                    }
                },

                {
                    path: '/user/password/reset/:hash',
                    name: 'user-password-reset-finish',
                    component: () => import('@/views/pages/user/password-reset/Finish.vue'),
                    meta: {
                        title: 'Facturación | Contraseña',
                        middleware: [Cache]
                    }
                },

                {
                    path: '/contact',
                    name: 'contact',
                    component: () => import('@/views/pages/contact/Index.vue'),
                    meta: {
                        title: 'Facturación | Contacto y Feedback'
                    }
                },

                {
                    path: '/cookie/unavailable',
                    name: 'cookie-unavailable',
                    component: () => import('@/views/pages/cookie/Unavailable.vue'),
                    meta: {
                        title: 'Facturación | Cookies'
                    }
                },

                {
                    path: '/info/roadmap',
                    name: 'info-roadmap',
                    component: () => import('@/views/pages/info/Roadmap.vue'),
                    meta: {
                        title: 'Facturación | Roadmap'
                    }
                },

                {
                    path: '/info/legal-privacity',
                    name: 'info-legal-privacity',
                    component: () => import('@/views/pages/info/LegalPrivacity.vue'),
                    meta: {
                        title: 'Facturación | Aviso Legal y Privacidad'
                    }
                },
            ]
        },
        {
            path: '*',
            name: 'error-404',
            component: () => import('@/views/pages/dashboard/404.vue'),
            meta: {
                title: 'Facturación | 404 - Not Found'
            }
        }
    ],
});

function nextFactory(context, middleware, index) {
    const subsequent = middleware[index];

    if (!subsequent) {
        return context.next;
    }

    return () => subsequent({ ...context, next: nextFactory(context, middleware, index + 1) });
}

router.beforeEach((to, from, next) => {
    if (to.meta && to.meta.title) {
        document.title = to.meta.title;
    }

    if (!to.meta.middleware) {
        return next();
    }

    const middleware = to.meta.middleware;
    const context = { to, from, next, router };

    return middleware[0]({ ...context, next: nextFactory(context, middleware, 1) });
});

export default router
