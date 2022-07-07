<template>
  <div id="app">
    <HeaderPag></HeaderPag>
    <div>
      <!-- <div id="drawflow" class="#5e35b1 deep-purple darken-1 "></div>-->

      <div class="wrapper">
        <div class="col s4">
          <div
            class="drag-drawflow"
            draggable="true"
            ondragstart="drag(event)"
            data-node="facebook"
          >
            <i class="fab fa-facebook"></i><span> Facebook</span>
          </div>
        </div>
      </div>

      <div class="col-right">
        <div
          id="drawflow"
          ondrop="drop(event)"
          ondragover="allowDrop(event)"
        ></div>
      </div>

      <!--<RouterView/>-->
    </div>
    <FooterPag></FooterPag>
  </div>
</template>

<script>
import FooterPag from "./components/template/FooterPag.vue";
import HeaderPag from "./components/template/HeaderPag.vue";
//import Vue from 'vue';
//import Drawflow  from 'drawflow';
export default {
  name: "App",
  mounted() {
    var Drawflow = require("drawflow");
    // var styleDrawflow = require('drawflow/dist/drawflow.min.css');
    // var id = document.getElementById("drawflow");
    // const editor = new Drawflow(id);
    // console.log("inicio");
    // //this.editor = new Drawflow(id, Vue, this);
    // editor.reroute = true;
    // editor.reroute_fix_curvature = true;
    // editor.force_first_input = false;

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
              inputs: {},
              outputs: {output_1:{connections: [{node: "11", output: "input_1"}]}},
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
                input_1: { connections: [{ node: "7", input: "output_1" }] },
              },
              outputs: {
                output_1: { connections: [{}] },
              },
              pos_x: 1028,
              pos_y: 87,
            },
            3: {
              id: 3,
              name: "telegram",
              data: { channel: "channel_2" },
              class: "telegram",
              html: '\n <div class = "row"> <div class="col s4 ">telegram 3</div></div>\n',
              typenode: false,
              inputs: {
                input_1: { connections: [{ node: "7", input: "output_1" }] },
              },
              outputs: {},
              pos_x: 1032,
              pos_y: 184,
            },
            4: {
              id: 4,
              name: "email",
              data: {},
              class: "email",
              html: '\n <div class = "row"> <div class="col s4 ">email 4</div></div>\n',
              typenode: false,
              inputs: {
                input_1: { connections: [{ node: "5", input: "output_1" }] },
              },
              outputs: {},
              pos_x: 1033,
              pos_y: 439,
            },
            5: {
              id: 5,
              name: "template",
              data: { template: "Write your template" },
              class: "template",
              html: '\n <div class = "row"> <div class="col s4 ">template 5</div></div>\n',
              typenode: false,
              inputs: {
                input_1: { 
                  connections: [{ node: "6", input: "output_1" }] },
              },
              outputs: {
                output_1: {
                  connections: [
                    { node: "4", output: "input_1" },
                    { node: "11", output: "input_1" },
                  ],
                },
              },
              pos_x: 607,
              pos_y: 304,
            },
            6: {
              id: 6,
              name: "github",
              data: { name: "https://github.com/jerosoler/Drawflow" },
              class: "github",
              html: '\n <div class = "row"> <div class="col s4 ">github 6</div></div>\n',
              typenode: false,
              inputs: {},
              outputs: {
                output_1: { connections: [{ node: "5", output: "input_1" }] },
              },
              pos_x: 341,
              pos_y: 191,
            },
            7: {
              id: 7,
              name: "facebook",
              data: {},
              class: "facebook",
              html: '\n <div class = "row"> <div class="col s4 ">facebook 7</div></div>\n',
              typenode: false,
              inputs: {},
              outputs: {
                output_1: {
                  connections: [
                    { node: "2", output: "input_1" },
                    { node: "3", output: "input_1" },
                    { node: "11", output: "input_1" },
                  ],
                },
              },
              pos_x: 347,
              pos_y: 87,
            },
            11: {
              id: 11,
              name: "log",
              data: {},
              class: "log",
              html: '\n <div class = "row"> <div class="col s4 ">log 11</div></div>\n',
              typenode: false,
              inputs: {
                input_1: {
                  connections: [
                    { node: "5", input: "output_1" },
                    { node: "7", input: "output_1" },
                    { node: "1", input: "output_1" },
                    
                    
                  ],
                },
              },
              outputs: {},
              pos_x: 1031,
              pos_y: 363,
            },
          },
        },
        // Other: {
        //   data: {
        //     8: {
        //       id: 8,
        //       name: "personalized",
        //       data: {},
        //       class: "personalized",
        //       html: "\n            <div>\n              Personalized\n            </div>\n            ",
        //       typenode: false,
        //       inputs: {
        //         input_1: {
        //           connections: [
        //             { node: "12", input: "output_1" },
        //             { node: "12", input: "output_2" },
        //             { node: "12", input: "output_3" },
        //             { node: "12", input: "output_4" },
        //           ],
        //         },
        //       },
        //       outputs: {
        //         output_1: { connections: [{ node: "9", output: "input_1" }] },
        //       },
        //       pos_x: 764,
        //       pos_y: 227,
        //     },
        //     9: {
        //       id: 9,
        //       name: "dbclick",
        //       data: { name: "Hello World!!" },
        //       class: "dbclick",
        //       html: '\n            <div>\n            <div class="title-box"><i class="fas fa-mouse"></i> Db Click</div>\n              <div class="box dbclickbox" ondblclick="showpopup(event)">\n                Db Click here\n                <div class="modal" style="display:none">\n                  <div class="modal-content">\n                    <span class="close" onclick="closemodal(event)">&times;</span>\n                    Change your variable {name} !\n                    <input type="text" df-name>\n                  </div>\n\n                </div>\n              </div>\n            </div>\n            ',
        //       typenode: false,
        //       inputs: {
        //         input_1: { connections: [{ node: "8", input: "output_1" }] },
        //       },
        //       outputs: {
        //         output_1: { connections: [{ node: "12", output: "input_2" }] },
        //       },
        //       pos_x: 209,
        //       pos_y: 38,
        //     },
        //     12: {
        //       id: 12,
        //       name: "multiple",
        //       data: {},
        //       class: "multiple",
        //       html: '\n            <div>\n              <div class="box">\n                Multiple!\n              </div>\n            </div>\n            ',
        //       typenode: false,
        //       inputs: {
        //         input_1: { connections: [] },
        //         input_2: { connections: [{ node: "9", input: "output_1" }] },
        //         input_3: { connections: [] },
        //       },
        //       outputs: {
        //         output_1: { connections: [{ node: "8", output: "input_1" }] },
        //         output_2: { connections: [{ node: "8", output: "input_1" }] },
        //         output_3: { connections: [{ node: "8", output: "input_1" }] },
        //         output_4: { connections: [{ node: "8", output: "input_1" }] },
        //       },
        //       pos_x: 179,
        //       pos_y: 272,
        //     },
        //   },
        // },
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
          editor.addNode(
            "facebook",
            0,
            1,
            pos_x,
            pos_y,
            "facebook",
            {},
            facebook
          );
          break;
        case "slack":
          var slackchat = `
          <div>
            <div class="title-box"><i class="fab fa-slack"></i> Slack chat message</div>
          </div>
          `;
          editor.addNode("slack", 1, 0, pos_x, pos_y, "slack", {}, slackchat);
          break;
      }
    }
  },
  components: {
    FooterPag,
    HeaderPag,
  },
};
</script>
<style>
.altura {
  height: 700px;
}
#drawflow {
  display: block;
  position: relative;
  width: 100%;
  height: 800px;
}
</style>
