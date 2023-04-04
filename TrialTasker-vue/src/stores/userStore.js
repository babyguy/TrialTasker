import { defineStore } from "pinia";
import axios from "axios";
import router from "../router";

export const useUserStore = defineStore('users', {
    state: () => ({
        usersStoreOnline: [],
        usersStoreAll: [],
        usersStore: [],
        userStore: {},  
        errorsStore: [],
        messagesStore: [],
    }),
    getters: {
        usersOnline: (state) => state.usersStoreOnline,
        usersAll: (state) => state.usersStoreAll,
        users: (state) => state.usersStore,
        user: (state) => state.userStore,
        errors: (state) => state.errorsStore,
        messages: (state) => state.messagesStore,
    },
    actions: {
        /* get all users with paginate */
        async getUsers() {
            await axios.get('/api/users')
            .then(response => {
                this.usersStore = response.data;
                console.log(response.data)
            });
        },
        /* get all users */
        async getUsersAll() {
            await axios.get('/api/users/all')
            .then(response => {
                this.usersStoreAll = response.data;
            });
        },

        /* get users page */
        async getUsersPage(page) {
            await axios.get(page)
            .then(response => {
                this.usersStore = response.data;
            });
        },
        /* get user */
        async getUser(id) {
            await axios.get('/api/users/' + id)
            .then(response => {
                this.userStore = response.data;
            });
        },
        /* create user */
        async createUser(user) {
            await axios.post('/api/users', user)
            .then(response => {
                this.messagesStore = response.data;
                this.getUsers();
                router.push({ name: 'UserDashboard' });
                
            })
            .catch(error => {
                this.errorsStore = error.response.data.errors
            });
        },
        /* update user */
        async updateUser(user) {
            await axios.put('/api/users/' + user.id, user)
            .then(response => {
                this.messagesStore = response.data;
                this.getUsers();
                router.push({ name: 'UserDashboard' });
            })
            .catch(error => {
                this.errorsStore = error.response.data.errors;
            });
        },
        /* delete user */
        async deleteUser(id) {
            await axios.delete('/api/users/' + id)
            .then(response => {
                this.messagesStore = response.data;
                this.getUsers();
            });
        },
    },
});
