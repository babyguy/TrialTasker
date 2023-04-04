import { defineStore } from "pinia";
import axios from "axios";
import router from "../router";

export const usePersonStore = defineStore('persons', {
    state: () => ({
        personsAllStore: [],
        personsStore: [],
        personStore: {},
        errorsStore: [],
        messagesStore: [],
    }),
    getters: {
        personsAll: (state) => state.personsAllStore,
        persons: (state) => state.personsStore,
        person: (state) => state.personStore,
        errors: (state) => state.errorsStore,
        messages: (state) => state.messagesStore,
    },
    actions: {
        /* get all persons with paginate */
        async getPersons() {
            await axios.get('/api/persons')
            .then(response => {
                console.log(this.personsStore = response.data);
            });
        },
        /* get all persons */
        async getPersonsAll() {
            await axios.get('/api/persons/all')
            .then(response => {
                this.personsAllStore = response.data;
            });
        },

        /* get persons page */
        async getPersonsPage(page) {
            await axios.get(page)
            .then(response => {
                this.personsStore = response.data;
            });
        },
        /* get person */
        async getPerson(id) {
            await axios.get('/api/persons/' + id)
            .then(response => {
                this.personStore = response.data;
            });
        },
        /* create person */
        async createPerson(person) {
            await axios.post('/api/persons', person)
            .then(response => {
                this.messagesStore = response.data;
                this.getPersons();
                router.push({ name: 'PersonDashboard' });
            })
            .catch(error => {
                this.errorsStore = error.response.data.errors
            });
        },
        /* update person */
        async updatePerson(person) {
            await axios.put('/api/persons/' + person.id, person)
            .then(response => {
                this.messagesStore = response.data;
                this.getPersons();
                router.push({ name: 'PersonDashboard' });
            })
            .catch(error => {
                this.errorsStore = error.response.data.errors
            });
        },
        /* delete person */
        async deletePerson(id) {
            await axios.delete('/api/persons/' + id)
            .then(response => {
                this.messagesStore = response.data;
                this.getPersons();
            });
        },
    }
}); 