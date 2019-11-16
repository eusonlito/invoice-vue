'use strict';

import Vue from 'vue'
import Router from 'vue-router'
import Auth from '@/middlewares/Auth';
import Company from '@/middlewares/Company';
import LocalStorage from '@/middlewares/LocalStorage';
import Session from '@/middlewares/Session';

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
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
                        middleware: [Session, Auth, Company]
                    }
                },

                {
                    path: '/client',
                    name: 'client-index',
                    component: () => import('@/views/pages/client/Index.vue'),
                    meta: {
                        middleware: [Session, Auth, Company]
                    }
                },

                {
                    path: '/client/update/:id?',
                    name: 'client-update',
                    component: () => import('@/views/pages/client/update/Index.vue'),
                    meta: {
                        middleware: [Session, Auth, Company]
                    }
                },

                {
                    path: '/company',
                    name: 'company-update',
                    component: () => import('@/views/pages/company/Update.vue'),
                    meta: {
                        middleware: [Session, Auth]
                    }
                },

                {
                    path: '/discount',
                    name: 'discount-index',
                    component: () => import('@/views/pages/discount/Index.vue'),
                    meta: {
                        middleware: [Session, Auth, Company]
                    }
                },

                {
                    path: '/discount/update/:id?',
                    name: 'discount-update',
                    component: () => import('@/views/pages/discount/update/Index.vue'),
                    meta: {
                        middleware: [Session, Auth, Company],
                        parent: 'discount-index'
                    }
                },

                {
                    path: '/invoice',
                    name: 'invoice-index',
                    component: () => import('@/views/pages/invoice/Index.vue'),
                    meta: {
                        middleware: [Session, Auth, Company]
                    }
                },

                {
                    path: '/invoice/update/:id?',
                    name: 'invoice-update',
                    component: () => import('@/views/pages/invoice/update/Index.vue'),
                    meta: {
                        middleware: [Session, Auth, Company]
                    }
                },

                {
                    path: '/invoice-serie',
                    name: 'invoice-serie-index',
                    component: () => import('@/views/pages/invoice-serie/Index.vue'),
                    meta: {
                        middleware: [Session, Auth, Company]
                    }
                },

                {
                    path: '/invoice-serie/update/:id?',
                    name: 'invoice-serie-update',
                    component: () => import('@/views/pages/invoice-serie/update/Index.vue'),
                    meta: {
                        middleware: [Session, Auth, Company],
                        parent: 'invoice-serie-index'
                    }
                },

                {
                    path: '/invoice-status',
                    name: 'invoice-status-index',
                    component: () => import('@/views/pages/invoice-status/Index.vue'),
                    meta: {
                        middleware: [Session, Auth, Company]
                    }
                },

                {
                    path: '/invoice-status/update/:id?',
                    name: 'invoice-status-update',
                    component: () => import('@/views/pages/invoice-status/update/Index.vue'),
                    meta: {
                        middleware: [Session, Auth, Company],
                        parent: 'invoice-status-index'
                    }
                },

                {
                    path: '/payment',
                    name: 'payment-index',
                    component: () => import('@/views/pages/payment/Index.vue'),
                    meta: {
                        middleware: [Session, Auth, Company]
                    }
                },

                {
                    path: '/payment/update/:id?',
                    name: 'payment-update',
                    component: () => import('@/views/pages/payment/update/Index.vue'),
                    meta: {
                        middleware: [Session, Auth, Company],
                        parent: 'payment-index'
                    }
                },

                {
                    path: '/shipping',
                    name: 'shipping-index',
                    component: () => import('@/views/pages/shipping/Index.vue'),
                    meta: {
                        middleware: [Session, Auth, Company]
                    }
                },

                {
                    path: '/product',
                    name: 'product-index',
                    component: () => import('@/views/pages/product/Index.vue'),
                    meta: {
                        middleware: [Session, Auth, Company]
                    }
                },

                {
                    path: '/product/update/:id?',
                    name: 'product-update',
                    component: () => import('@/views/pages/product/update/Index.vue'),
                    meta: {
                        middleware: [Session, Auth, Company],
                        parent: 'product-index'
                    }
                },

                {
                    path: '/shipping/update/:id?',
                    name: 'shipping-update',
                    component: () => import('@/views/pages/shipping/update/Index.vue'),
                    meta: {
                        middleware: [Session, Auth, Company],
                        parent: 'shipping-index'
                    }
                },

                {
                    path: '/tax',
                    name: 'tax-index',
                    component: () => import('@/views/pages/tax/Index.vue'),
                    meta: {
                        middleware: [Session, Auth, Company]
                    }
                },

                {
                    path: '/tax/update/:id?',
                    name: 'tax-update',
                    component: () => import('@/views/pages/tax/update/Index.vue'),
                    meta: {
                        middleware: [Session, Auth, Company],
                        parent: 'tax-index'
                    }
                },

                {
                    path: '/user/update',
                    name: 'user-update',
                    component: () => import('@/views/pages/user/update/Update.vue'),
                    meta: {
                        middleware: [Session, Auth]
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
                    meta: { middleware: [LocalStorage] }
                },

                {
                    path: '/user/signup',
                    name: 'user-signup',
                    component: () => import('@/views/pages/user/signup/Signup.vue'),
                    meta: { middleware: [LocalStorage] }
                },

                {
                    path: '/user/confirm',
                    name: 'user-confirm-start',
                    component: () => import('@/views/pages/user/confirm/Start.vue'),
                    meta: { middleware: [LocalStorage] }
                },

                {
                    path: '/user/confirm/:hash',
                    name: 'user-confirm-finish',
                    component: () => import('@/views/pages/user/confirm/Finish.vue'),
                    meta: { middleware: [LocalStorage, Session] }
                },

                {
                    path: '/user/password/reset',
                    name: 'user-password-reset-start',
                    component: () => import('@/views/pages/user/password-reset/Start.vue'),
                    meta: { middleware: [LocalStorage] }
                },

                {
                    path: '/user/password/reset/:hash',
                    name: 'user-password-reset-finish',
                    component: () => import('@/views/pages/user/password-reset/Finish.vue'),
                    meta: { middleware: [LocalStorage] }
                },

                {
                    path: '/cookie/unavailable',
                    name: 'cookie-unavailable',
                    component: () => import('@/views/pages/cookie/Unavailable.vue')
                },

                {
                    path: '/info/roadmap',
                    name: 'info-roadmap',
                    component: () => import('@/views/pages/info/Roadmap.vue')
                },

                {
                    path: '/info/legal-privacity',
                    name: 'info-legal-privacity',
                    component: () => import('@/views/pages/info/LegalPrivacity.vue')
                },
            ]
        },
        {
            path: '*',
            name: 'error-404',
            component: () => import('@/views/pages/dashboard/404.vue')
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
    if (!to.meta.middleware) {
        return next();
    }

    const middleware = to.meta.middleware;
    const context = { to, from, next, router };

    return middleware[0]({ ...context, next: nextFactory(context, middleware, 1) });
});

export default router
