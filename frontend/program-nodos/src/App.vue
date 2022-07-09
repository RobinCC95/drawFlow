<template>
  <div id="app">
    <HeaderPag></HeaderPag>
    <div class="container">
      <!-- <div id="drawflow" class="#5e35b1 deep-purple darken-1 "></div>-->

      
      <!-- <div class="row">
        <div class="col s2">
          <div
            class="drag-drawflow"
            draggable="true"
            ondragstart="drag(event)"
            data-node="facebook"
          >
            <i class="fab fa-facebook"></i><span> Facebook</span>
          </div>

          <div
            class="drag-drawflow"
            draggable="true"
            ondragstart="drag(event)"
            data-node="slack"
          >
            <i class="fab fa-slack"></i><span> Slack recive message</span>
          </div>
        </div>
        <div class="col s10 #c5cae9 indigo lighten-4">
          <div
            id="drawflow"
            ondrop="drop(event)"
            ondragover="allowDrop(event)"
          ></div>

          <div class="btn-export" onclick="Swal.fire({ title: 'Export',
        html: '<pre><code>'+JSON.stringify(editor.export(), null,4)+'</code></pre>'
        })">Export</div>
        <div class="btn-clear" onclick="clearModuleSelected()">Clear</div>
        <div class="btn-lock">
          <i id="lock" class="fas fa-lock" onclick="editor.editor_mode='fixed'; changeMode('lock');"></i>
          <i id="unlock" class="fas fa-lock-open" onclick="editor.editor_mode='edit'; changeMode('unlock');" style="display:none;"></i>
        </div>
        <div class="bar-zoom">
          <i class="fas fa-search-minus" onclick="editor.zoom_out()"></i>
          <i class="fas fa-search" onclick="editor.zoom_reset()"></i>
          <i class="fas fa-search-plus" onclick="editor.zoom_in()"></i>
        </div>
        </div>
      </div> -->

 

      <!--<RouterView/>-->
    </div>
    <FooterPag></FooterPag>
  </div>
</template>

<!-- <script>
import FooterPag from "./components/template/FooterPag.vue";
import HeaderPag from "./components/template/HeaderPag.vue";
var Drawflow = require("drawflow");
export default {
  name: "App",
  mounted() {
    // var Drawflow = require("drawflow");
    var id = document.getElementById("drawflow");
    const editor = new Drawflow(id);
    editor.reroute = true;
    const dataToImport = {
      drawflow: {
        Home: {
          data: {
            1: {
              id: 1,
              name: "welcome",
              data: {},
              class: "welcome",
              html: '\n <div class = "row"> <div class="col s4 ">welcome 1</div></div>\n',
              typenode: false,
              inputs: {
                input_1: {
                  connections: [{ node: "3", input: "output_1" }],
                },
              },
              outputs: {
                output_1: {
                  connections: [{ node: "2", output: "input_1" }],
                },
              },
              pos_x: 50,
              pos_y: 50,
            },
            2: {
              id: 2,
              name: "slack",
              data: {},
              class: "slack",
              html: '\n <div class = "row"> <div class="col s4 ">slak 2</div></div>\n',
              typenode: false,
              inputs: {
                input_1: { connections: [{ node: "1", input: "output_1" }] },
              },
              outputs: {
                output_1: {
                  connections: [{ node: "3", output: "input_1" }],
                },
              },
              pos_x: 600,
              pos_y: 50,
            },
            3: {
              id: 3,
              name: "telegram",
              data: { channel: "channel_2" },
              class: "telegram",
              html: '\n <div class = "row"> <div class="col s4 ">telegram 3</div></div>\n',
              typenode: false,
              inputs: {
                input_1: { connections: [{ node: "2", input: "output_1" }] },
              },
              outputs: {
                output_1: {
                  connections: [{ node: "1", output: "input_1" }],
                },
              },
              pos_x: 150,
              pos_y: 400,
            },
          },
        },
      },
    };
    editor.start();
    editor.import(dataToImport);

    var elements = document.getElementsByClassName("drag-drawflow");
    for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener("touchend", drop, false);
      elements[i].addEventListener("touchmove", positionMobile, false);
      elements[i].addEventListener("touchstart", drag, false);
    }
    var mobile_item_selec = "";
    var mobile_last_move = null;

    function positionMobile(ev) {
      mobile_last_move = ev;
    }

    function drag(ev) {
      if (ev.type === "touchstart") {
        mobile_item_selec = ev.target
          .closest(".drag-drawflow")
          .getAttribute("data-node");
      } else {
        ev.dataTransfer.setData("node", ev.target.getAttribute("data-node"));
      }
    }
    
    function drop(ev) {
      if (ev.type === "touchend") {
        var parentdrawflow = document
          .elementFromPoint(
            mobile_last_move.touches[0].clientX,
            mobile_last_move.touches[0].clientY
          )
          .closest("#drawflow");
        if (parentdrawflow != null) {
          addNodeToDrawFlow(
            mobile_item_selec,
            mobile_last_move.touches[0].clientX,
            mobile_last_move.touches[0].clientY
          );
        }
        mobile_item_selec = "";
      } else {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("node");
        addNodeToDrawFlow(data, ev.clientX, ev.clientY);
      }
    }

    function addNodeToDrawFlow(name, pos_x, pos_y) {
      if (editor.editor_mode === "fixed") {
        return false;
      }
      pos_x =
        pos_x *
          (editor.precanvas.clientWidth /
            (editor.precanvas.clientWidth * editor.zoom)) -
        editor.precanvas.getBoundingClientRect().x *
          (editor.precanvas.clientWidth /
            (editor.precanvas.clientWidth * editor.zoom));
      pos_y =
        pos_y *
          (editor.precanvas.clientHeight /
            (editor.precanvas.clientHeight * editor.zoom)) -
        editor.precanvas.getBoundingClientRect().y *
          (editor.precanvas.clientHeight /
            (editor.precanvas.clientHeight * editor.zoom));
      switch (name) {
        case "facebook":
          var facebook = `
        <div>
          <div class="title-box"><i class="fab fa-facebook"></i> Facebook Message</div>
        </div>
        `;
          editor.addNode("facebook",0,1,pos_x,pos_y,"facebook",{},facebook);
          break;
        case "slack":
          var slackchat = `
          <div>
            <div class="title-box"><i class="fab fa-slack"></i> Slack chat message</div>
          </div>
          `;
          editor.addNode("slack", 1, 0, pos_x, pos_y, "slack", {}, slackchat);
          break;
        default:
      }
    }
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
  },
  methods:{
  },
  components: {
    FooterPag,
    HeaderPag,
  },
};
</script>
<style>
.altura {
  height: 410px;
}
#drawflow {
  display: block;
  position: relative;
  width: 100%;
  height: 800px;
}
</style> -->
