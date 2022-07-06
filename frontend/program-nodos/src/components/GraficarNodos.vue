<template>
    <div >
        <h1>graficar nodos</h1>
        <div id="drawflow" class="#5e35b1 deep-purple darken-1">aqui</div>
        <button @click="iniciarGrafica">iniciarGrafica</button>
    </div>
</template>

<script>
import Drawflow  from 'drawflow';
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
            console.log(editor);
            editor.start();
        },
    },
}
</script>

<style>
</style>