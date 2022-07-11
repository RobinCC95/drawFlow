<template>
  <div id="app">
    <HeaderPag></HeaderPag>
    <!-- <div class="container altura"> -->
    <div class="row">
      <div class="col s12">
      <div class="wrapper">
        <div class="column">
          <div
            class="drag-drawflow"
            draggable="true"
            ondragstart="drag(event)"
            data-node="facebook"
          >
            <i class="fab fa-facebook"></i><span> Facebook</span>
          </div>
        </div>

        <div class="col-right">
          <div class="menu">
            <ul>
              <li>programa 1</li>
              <li>programa 2</li>
            </ul>
          </div>
        </div>
        <div
          id="drawflow"
          ondrop="drop(event)"
          ondragover="allowDrop(event)"
        ></div>
      </div>
    </div>
    </div>
    <div class="col s4 center">
      <a class="btn-floating pulse"><i class="material-icons">save</i></a>
      <a class="btn-floating pulse"><i class="material-icons">delete</i></a>
    </div>
  </div>
  <!-- <RouterView/> -->
  <FooterPag></FooterPag>
  <!-- </div> -->
</template>

<script>
import FooterPag from "./components/template/FooterPag.vue";
import HeaderPag from "./components/template/HeaderPag.vue";
var Drawflow = require("drawflow");
// var mobile_item_selec = '';
export default {
  name: "App",
  mounted() {
    var id = document.getElementById("drawflow");
    const editor = new Drawflow(id);
    editor.reroute = true;

    const dataToImport = {
      drawflow: {
        Home: {
          data: {
            1: {
              id: 1,
              name: "for",
              data: {},
              class: "for",
              html: `<div class="for">for</div>`,
              typenode: false,
              outputs: {
                outputs_1: {
                  connections: [
                    {
                      node: 2,
                      output: "input_1",
                    },
                  ],
                },
              },
              inputs: {},
              pos_x: 50,
              pos_y: 50,
            },
            2: {
              id: 2,
              name: "numero",
              data: {},
              class: "numero",
              html: `<div class="numero">numero</div>`,
              typenode: false,
              inputs: {
                inputs_1: {
                  connections: [
                    {
                      node: 1,
                      input: "output_1",
                    },
                  ],
                },
              },
              outputs: {},
              pos_x: 300,
              pos_y: 50,
            },
          },
        },
      },
    };

    editor.start();
    editor.import(dataToImport);

    // Events!
    editor.on("nodeCreated", function (id) {
      console.log("Node created " + id);
    });

    editor.on("nodeRemoved", function (id) {
      console.log("Node removed " + id);
    });

    editor.on("nodeSelected", function (id) {
      console.log("Node selected " + id);
    });

    editor.on("moduleCreated", function (name) {
      console.log("Module Created " + name);
    });

    editor.on("moduleChanged", function (name) {
      console.log("Module Changed " + name);
    });

    editor.on("connectionCreated", function (connection) {
      console.log("Connection created");
      console.log(connection);
    });

    editor.on("connectionRemoved", function (connection) {
      console.log("Connection removed");
      console.log(connection);
    });

    editor.on("nodeMoved", function (id) {
      console.log("Node moved " + id);
    });

    editor.on("addReroute", function (id) {
      console.log("Reroute added " + id);
    });

    editor.on("removeReroute", function (id) {
      console.log("Reroute removed " + id);
    });
  },
  methods: {},
  components: {
    FooterPag,
    HeaderPag,
  },
};
</script>

<style>
.altura {
  height: 500px;
}
.wrapper {
  width: 100%;
  height: calc(100vh - 67px);
  display: flex;
}
.drag-drawflow {
  line-height: 50px;
  border-bottom: 1px solid var(--border-color);
  padding-left: 20px;
  cursor: move;
  user-select: none;
}

#drawflow {
  position: relative;
  width: calc(100vw - 301px);
  height: calc(100% - 50px);
  top: 40px;
  background: var(--background-color);
  background-size: 25px 25px;
  background-image: linear-gradient(to right, #f1f1f1 1px, transparent 1px),
    linear-gradient(to bottom, #f1f1f1 1px, transparent 1px);
}
.column {
  overflow: auto;
  width: 300px;
  height: 100%;
  border-right: 1px solid var(--border-color);
}
.drag-drawflow {
  line-height: 50px;
  border-bottom: 1px solid var(--border-color);
  padding-left: 20px;
  cursor: move;
  user-select: none;
}
.menu {
  position: absolute;
  height: 40px;
  display: block;
  background: white;
  width: 100%;
}
.menu ul {
  padding: 0px;
  margin: 0px;
  line-height: 40px;
}

.menu ul li {
  display: inline-block;
  margin-left: 10px;
  border-right: 1px solid var(--border-color);
  padding-right: 10px;
  line-height: 40px;
  cursor: pointer;
}

.menu ul li.selected {
  font-weight: bold;
}
</style>  
