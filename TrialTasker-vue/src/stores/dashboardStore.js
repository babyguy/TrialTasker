import { defineStore } from "pinia";
import axios from "axios";

export const useDashboardStore = defineStore('dashboard', {
    state: () => ({
        usersForWeekStore: [],
        usersSessionsStore: [],
        errorsStore: [],
        messagesStore: [],
    }),
    getters: {
        usersForWeek: (state) => state.usersForWeekStore,
        usersSessions: (state) => state.usersSessionsStore,
        errors: (state) => state.errorsStore,
        messages: (state) => state.messagesStore,
    },
    actions: {
        /* get users for week */
        async getUsersForWeek() {
            await axios.get('/api/dashboard/users-week')
                .then(response => {
                    this.usersForWeekStore = response.data;
                })
                .catch(error => {
                    this.errorsStore.push(error);
                });
        },
        /* get users sessions */
        async getUsersSessions() {
            await axios.get('/api/dashboard/sessions')
                .then(response => {
                    this.usersSessionsStore = response.data;
                })
                .catch(error => {
                    this.errorsStore.push(error);
                });
        },
    }
});