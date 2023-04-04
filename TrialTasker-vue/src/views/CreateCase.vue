<template>
    <main>
        <div class='title'>
            <RouterLink :to="{ name: 'CasosActivos' }" class="title">
                <button class='atras'>Atras</button>
            </RouterLink>

            <h1>Crear Caso</h1>
            <div></div>
        </div>
        <section>
            <div class="izquierda">
                <div class="selects">

                    <label for="">Etapa actual:</label>
                    <select name="" id="">
                        <option value="">seleccione la etapa actual</option>
                        <option value="">Indagación</option>
                        <option value="">Imputación</option>
                        <option value="">Acusación</option>
                        <option value="">Preparatoria</option>
                        <option value="">Audiencias orales</option>
                        <option value="">Apelaciones</option>
                        <option value="">Condena</option>
                    </select>
                    <input type="text" placeholder="Radicado" v-model="form.case_radicate">
                </div>
                <div class="selects">

                </div>

                <h2>Datos del cliente</h2>
                <input type="text" placeholder="Nombre" v-model="form.case_name">
                <input type="text" placeholder="Cedula">
                <input type="text" placeholder="Telefono">
                <input type="text" placeholder="Lugar de expedicion">
                <input type="text" placeholder="Direccion">
                <input type="email" placeholder="Correo">

                <h2>Datos contacto del cliente</h2>
                <input type="text" placeholder="Nombre">
                <input type="text" placeholder="Telefono">
                <input type="text" placeholder="Direccion">

                <div class="selects">
                    <h2>Accion</h2>
                    <div class="btnaccion">
                        <button class="defensor btna">Defensor</button>
                        <button class="representante btna">Representante</button>
                    </div>

                    <div class="infodefensor">
                        <div class="info">
                            <h2>Victimas</h2>
                            <input type="text" placeholder="Nombre">
                            <input type="number" placeholder="Cedula">
                            <input type="email" placeholder="Correo">
                            <input type="text" placeholder="Direccion">
                            <input type="number" placeholder="Edad">
                            <input type="text" placeholder="Notas">
                        </div>
                        <div class="info">
                            <h2>Representante</h2>
                            <input type="text" placeholder="Nombre">
                            <input type="number" placeholder="Telefono">
                            <input type="email" placeholder="Correo">
                            <input type="text" placeholder="Direccion">
                        </div>
                    </div>

                </div>
            </div>
            <div class="derecha">
                <h2>Informacion del fiscal</h2>
                <input type="text" placeholder="Nombre">
                <input type="text" placeholder="Telefono">
                <input type="number" placeholder="Numero de fiscal">
                <input type="text" placeholder="Notas">
                <input type="email" placeholder="Correo">
                <input type="date" placeholder="fecha" class="fecha">

                <h2>Informacion juez preliminar</h2>
                <input type="number" placeholder="Numero de despacho">
                <input type="number" placeholder="Numero de juez">
                <input type="text" placeholder="Nombre">
                <input type="email" placeholder="Correo">
                <input type="text" placeholder="Direccion">
                <input type="text" placeholder="Notas">
                <input type="date" placeholder="fecha" class="fecha">
            </div>
        </section>
        <button class="enviar">
            <RouterLink :to="{ name: 'CasosActivos' }" class="btnenviar">
                Enviar
            </RouterLink>

        </button>

    </main>
</template>

<script setup>
import { ref } from 'vue';
import { routeLocationKey } from 'vue-router';

const cases = useCaseStore();
// Mandar informacion al backend
const caseForm = ref({
    id: '',
    case_name: '',
    case_status: 1,
    case_person_id: '',
    case_user_id: '',
})

function createCase() {
    caseForm.value = {
        id: route.params.id,
    }
}

</script>



<style scoped>
.title {
    display: flex;
    justify-content: space-between;
    background-color: var(--verde);
    color: white;
    border-radius: 8px;
    text-decoration: none;
    padding: 10px;
}

main {
    color: #473800;
    background-color: var(--my-hover-ligth);
    height: auto;
    border-radius: 15px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

button {
    font-size: 20px;
}

section {
    display: flex;
    justify-content: center;
    gap: 5%;
}

.izquierda {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    width: 45%;
}

.derecha {
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;

}

input {
    height: 30px;
    width: 100%;
    border-radius: 7px;
    border: 1px var(--verde) solid;
    cursor: pointer;
    padding-left: 10px;


}

.selects {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

select {
    border-radius: 5px;
    border: none;
    background-color: white;
}

.atras {
    border: none;
    border-radius: 5px;
    width: 50px;
    background-color: var(--verde);
    color: white;
    cursor: pointer;
}

.enviar {
    width: 100%;
    display: flex;
    justify-content: center;
    border: none;
    background-color: var(--my-hover-ligth);

}

.btnenviar {
    background-color: var(--verde);
    border-radius: 7px;
    height: 30px;
    width: 200px;
    cursor: pointer;
    color: white;
    text-decoration: none;
    padding: 5px;
}

.btnaccion {
    display: flex;
    justify-content: center;
    gap: 20px;
    width: 100%;
}

.infodefensor {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5%;
}

.info {
    width: 45%;
    display: flex;
    gap: 10px;
    flex-direction: column;

}

.btna {
    background-color: var(--verde);
    border: none;
    border-radius: 7px;
    height: 30px;
    width: 45%;
    cursor: pointer;
    color: white;
}
</style>