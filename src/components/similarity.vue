<template>
  <div class="container-io">
    <div class="input-container">
      <div class="inputarea">
        <textarea
          class="area"
          id="my-textarea"
          v-model="value"
          :placeholder="valueplaceholder"
        >
        </textarea>
      </div>
      <div class="button-container">
        <button class="inputbtn" v-on:click="sendData(value)">Submit</button>
        <button class="inputbtn" v-on:click="getimage()">Original</button>
      </div>
    </div>
    <div class="output-container" :id="plotid">
      <!-- <div class="inputarea"> -->
      <VueApexCharts
        width="200%"
        height="100%"
        type="heatmap"
        :options="chartOptions"
        :series="series"
      ></VueApexCharts>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import VueApexCharts from "vue-apexcharts";

export default {
  name: "HelloWorld",
  props: ["plotid"],
  components: {
    VueApexCharts,
  },
  data: function () {
    return {
      count: 0,
      image: "",
      value: "",

      valueplaceholder:
        "Local Environments Similarity calculator for AuNPs. For more info: Solvent-mediated interactions at the interface of AuNPs.\n\n" +
        "Add .pdb text here.\n" +
        "Make sure that the residue in which you want to calculate the similarity is" +
        " named RAD and the solvent is named WAT.",
        
      chartOptions: {
        chart: {

        },
        xaxis: {
          position: "bottom",
          labels: {},
          axisBorder: {
            show: false,
          },
        },
        colors: ["#008FFB"],
        dataLabels: {
          enabled: false,
        },
        plotOptions: {
          heatmap: {
            colorScale: {
              inverse: true,
            },
          },
        },
      },
      series: [
        {
          data: [],
          name: "",
        },
      ],
    };
  },
  methods: {
    createHeat(datares) {
      var series = [];
      for (var i = datares.z.length - 1; i > -1; i--) {
        //let text = datares.x[i]
        // var newser = {
        //   name: text,
        //   data: datares.z[i],
        // };
        let name = datares.x[i];
        let dataobject = [];
        for (var j = 0; j < datares.z[i].length; j++) {
          dataobject.push({
            x: datares.x[j],
            y: datares.z[i][j],
          });
        }

        var newser = {
          name: name,
          data: dataobject,
        };
        series.push(newser);
      }
      this.series = series;
    },
    sendData(value) {
      axios
        .post("https://similarity-python-api.herokuapp.com/api/compute_matrix", {
          pdb: value,
        })
        .then((response) => {
          this.createHeat(response.data);
        })
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.status);
            console.log(error.response.headers);
            alert(
              "Something went wrong while calculating the descriptors! Check the PDB file formatting."
            );
          }
        }).finally(this.value="");
    },
    getimage() {
      axios
        .get("https://similarity-python-api.herokuapp.com/api/retrieve_matrix")
        .then((response) => {
          this.createHeat(response.data);
        })
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.status);
            console.log(error.response.headers);
            alert("EWEEE");
          }
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
.container-io {
  background: transparent;
  display: flex;
  align-content: flex-start;
  justify-content: space-evenly;
  align-content: center;
  height: 600px;
  width: auto;
}
.area {
  display: flex;
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  resize: none;
  box-sizing: border-box;
  justify-content: center;
  border-radius: 2%;
  background: auto;
}
.inputarea {
  display: flex;
  justify-content: center;
  align-content: center;
  border-color: #000;
  border-radius: 2%;
  border-width: 3px;
  border-style: solid;
  width: 70%;
  height: 70%;
  background: auto;
  padding: 0;
  margin: 0;
}
.input-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 600px;
  background: transparent;
  z-index: 1;
}
.inputbtn {
  height: 30px;
  width: 100px;
  margin-top: 20px;
}
.output-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 600px;
  background: transparent;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

textarea::-webkit-scrollbar {
  width: 0.5em;
}

textarea::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

textarea::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}

.svg-container {
  height: 90px !important;
}

.button-container {
  display: flex;
  flex-direction: row;
  margin: center;
  align-content: space-between;
}
</style>
