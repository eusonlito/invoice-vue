'use strict';

export default {
    prepare(list) {
        return list.slice(0).map(item => this.itemKey(item))
            .filter(item => !isNaN(item.date_key))
            .sort((a, b) => (a.date_at > b.date_at) ? 1 : -1);
    },

    dateString() {
        const date = new Date();

        return '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-01 00:00:00';
    },

    itemKey(item) {
        if (item.date_key) {
            return item;
        }

        const date = item.date_at.split('-');

        item.date_key = new Date(date[0] + '-' + ('0' + parseInt(date[1])).slice(-2) + '-01 00:00:00');
        item.date_key_month = ('0' + parseInt(date[1])).slice(-2);
        item.date_key_year = date[0] + '/' + item.date_key_month;

        return item;
    },

    fillY(date, x, year) {
        let y = [],
            startAt = new Date(date),
            endAt = new Date();

        startAt.setMonth(date.getMonth() + 1);

        while (startAt <= endAt) {
            let month = startAt.getMonth(),
                monthString = ('0' + (parseInt(month) + 1)).slice(-2),
                key = year ? (startAt.getFullYear() + '/' + monthString) : monthString;

            y.push(key);

            x.forEach(item => {
                item.data.set(key, 0);
            });

            startAt.setMonth(month + 1);
        }

        return y;
    }
}