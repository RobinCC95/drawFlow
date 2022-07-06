<template>
    <div >
        <h1>graficar nodos</h1>
        <div id="drawflow"></div>
        <button @click="iniciarGrafica">iniciarGrafica</button>
    </div>
</template>

<script>
import Drawflow from '../../node_modules/drawflow/dist/drawflow.js';

export default {
    name: 'GraficarNodos',
    data() {
        return {
            valor: 'Hola mundo',
            contador : 0,
        }
    },
    methods: {
        imprimir() {
            console.log(this.valor);
            
        },
        count(){
            this.contador++;
        },
        iniciarGrafica(){
            var id = document.getElementById("drawflow");
            const editor = new Drawflow(id);
            editor.start();
        },
    },
}
</script>

<style>
</style>