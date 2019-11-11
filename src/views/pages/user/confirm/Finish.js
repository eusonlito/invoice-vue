'use strict';

import user from '@/store/user'

export default {
    data() {
        return {
            message: 'Esperando confirmación...',
            button: 'Volver al acceso'
        }
    },

    created() {
        return user.dispatch('confirmFinish', this.$route.params.hash).then(() => {
            this.message = 'Yeah! Tu cuenta ha sido confirmada :)';

            if (user.state.user) {
                this.button = 'Acceder al Panel';
            }
        }).catch(() => {
            this.message = 'mmm... parece que algo ha ido mal. Has copiado correctamente el enlace del correo?'
        });
    },

    methods: {
        auth() {
            this.$router.push({ name: user.state.user ? 'dashboard-index' : 'user-auth' });
        }
    }
}
