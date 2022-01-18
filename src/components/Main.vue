<template>
  <div id="content">
    <div class="inp">
      <div>
        <canvas id = "canvas" width="500" height="500" @click="clickCanvas"/>
      </div>
      <div>
        <table  id = "numbers-table" class="background">
          <tr class="numbers">
            <td>X:</td>
            <td>
              <table id = "x-table">
                <tr>
                  <td>
                    <label>
                      <input name = "xCheckbox" class="defaultBox" v-model="param_x" type="checkbox" value="-5" checked :disabled="hasAdditionalX">
                      <p>
                        -5
                      </p>
                    </label>
                  </td>
                  <td>
                    <label>
                      <input name = "xCheckbox" v-model="param_x"  type="checkbox" value="-4" :disabled="hasAdditionalX">
                      <p>
                        -4
                      </p>
                    </label>
                  </td>
                  <td>
                    <label>
                      <input name = "xCheckbox" v-model="param_x" type="checkbox" value="-3" :disabled="hasAdditionalX">
                      <p>
                        -3
                      </p>
                    </label>
                  </td>
                  <td>
                    <label>
                      <input name = "xCheckbox" v-model="param_x" type="checkbox" value="-2" :disabled="hasAdditionalX">
                      <p>
                        -2
                      </p>
                    </label>
                  </td>
                  <td>
                    <label>
                      <input name = "xCheckbox" v-model="param_x" type="checkbox" value="-1" :disabled="hasAdditionalX">
                      <p>
                        -1
                      </p>
                    </label>
                  </td>
                  <td>
                    <label>
                      <input name = "xCheckbox" v-model="param_x"  type="checkbox" value="0" :disabled="hasAdditionalX">
                      <p>
                        0
                      </p>
                    </label>
                  </td>
                  <td>
                    <label>
                      <input name = "xCheckbox" v-model="param_x"  type="checkbox" value="1" :disabled="hasAdditionalX">
                      <p>
                        1
                      </p>
                    </label>
                  </td>
                  <td>
                    <label>
                      <input name = "xCheckbox" v-model="param_x"  type="checkbox" value="2" :disabled="hasAdditionalX">
                      <p>
                        2
                      </p>
                    </label>
                  </td>
                  <td>
                    <label>
                      <input name = "xCheckbox" v-model="param_x" type="checkbox" value="3" :disabled="hasAdditionalX">
                      <p>
                        3
                      </p>
                    </label>
                  </td>
                  <td colspan = "2">
                    <button class="button" @click="undoX">
                      снять выделение
                    </button>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td>Y:</td>
            <td>
              <input type="text" id="inputY" name="y" v-model="param_y" maxlength="17" autocomplete="off" placeholder="Введите число: (-5; 5)">
            </td>
          </tr>
          <tr class="numbers">
            <td>R:</td>
            <td>
              <table id="r-table">
                <tr>
                  <td>
                    <label>
                      <input name="rCheckbox" v-model="param_r" type="checkbox" value="-5" :disabled="hasAdditionalR">
                      <p>-5</p>
                    </label>
                  </td>
                  <td>
                    <label>
                      <input name="rCheckbox" v-model="param_r" type="checkbox" value="-4" :disabled="hasAdditionalR">
                      <p>-4</p>
                    </label>
                  </td>
                  <td>
                    <label>
                      <input name="rCheckbox" v-model="param_r" type="checkbox" value="-3" :disabled="hasAdditionalR">
                      <p>-3</p>
                    </label>
                  </td>
                  <td>
                    <label>
                      <input name="rCheckbox" v-model="param_r" type="checkbox" value="-2" :disabled="hasAdditionalR">
                      <p>-2</p>
                    </label>
                  </td>
                  <td>
                    <label>
                      <input name="rCheckbox" v-model="param_r" type="checkbox" value="-1" :disabled="hasAdditionalR">
                      <p>-1</p>
                    </label>
                  </td>
                  <td>
                    <label>
                      <input name="rCheckbox" v-model="param_r" type="checkbox" value="0" :disabled="hasAdditionalR">
                      <p>0</p>
                    </label>
                  </td>
                  <td>
                    <label>
                      <input name="rCheckbox" v-model="param_r" class="defaultBox" type="checkbox" value="1" :disabled="hasAdditionalR">
                      <p>1</p>
                    </label>
                  </td>
                  <td>
                    <label>
                      <input name="rCheckbox" v-model="param_r" type="checkbox" value="2" :disabled="hasAdditionalR">
                      <p>2</p>
                    </label>
                  </td>
                  <td>
                    <label>
                      <input name="rCheckbox" v-model="param_r" type="checkbox" value="3" :disabled="hasAdditionalR">
                      <p>3</p>
                    </label>
                  </td>
                  <td colspan = "3" class="tr-for-buttons">
                    <button class="button" @click="undoR">
                      снять выделение
                    </button>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <button class="button" id = "submit" @click="submit">
                Проверить
              </button>
            </td>
            <td colspan="2">
              <button class="button" id="clear" @click="clearAll">
                Отчистить
              </button>
            </td>
            <td colspan="2">
              <button class="button-logout" name="logout" @click="logout">
                Выйти
              </button>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="res">
      <table id = "resultTable">
        <thead>
        <tr>
          <th>X</th>
          <th>Y</th>
          <th>R</th>
          <th>Result</th>
        </tr>
        </thead>
        <tbody id = "resultTBody">
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
export default {
  name: "Main",
  data(){
    return{
      param_x: [-5],
      param_y: "",
      param_r: [1]
    }
  },
  watch:{
    param_r(val){
      if (val.length > 0 && !isNaN(val[0]) && parseFloat(val[0]) > 0 && parseFloat(val[0]) <= 3){
        this.changeDots(val);
      }
    }
  },

  methods:{
    submit(event){
      if (this.checkR(this.param_r) || this.checkX(this.param_x) || this.checkY(this.param_y)){
        this.submitForm(event, this.param_x[0], this.param_y, this.param_r[0]);
      }
    },
    undoX(){
      this.param_x = [];
    },
    undoR(){
      this.param_r = [];
    },
    drawCoordinates(context) {
      context.font = "12px Times New Roman";
      context.strokeStyle = "#FFFFFF"
      context.beginPath();
      context.lineWidth = 2;
      context.moveTo(0, context.canvas.height / 2);
      context.lineTo(context.canvas.width, context.canvas.height / 2);

      context.stroke();
      context.beginPath();
      context.moveTo(context.canvas.width, context.canvas.height / 2)
      context.lineTo(context.canvas.width - 6, context.canvas.height / 2 - 6);
      context.lineTo(context.canvas.width - 6, context.canvas.height / 2 + 6);
      context.fill();
      context.fillText("X", context.canvas.width - 10, context.canvas.height / 2 + 15, 20);


      context.beginPath();
      context.lineWidth = 2;
      context.moveTo(context.canvas.width / 2, context.canvas.height);
      context.lineTo(context.canvas.width / 2, 0);

      context.stroke();
      context.beginPath();
      context.moveTo(context.canvas.width / 2, 0)
      context.lineTo(context.canvas.width / 2 + 6, 6);
      context.lineTo(context.canvas.width / 2 - 6, 6);
      context.fill();
      context.fillText("Y", context.canvas.width / 2 + 15, 10, 20);

    },
    drawChar(context) {
      let x = context.canvas.width / 2;
      let y = context.canvas.height / 2;
      let step = (context.canvas.height / 2 - (context.canvas.height / 2) / 7) / 2;
      context.fillStyle = "#3DAEFFFF";

// Рисуем треугольник
      context.beginPath();
      context.moveTo(x, y);
      context.lineTo(x +2*step, y);
      context.lineTo(x, y  + step);
      context.fill();

// Рисуем квадрат
      context.beginPath();
      context.moveTo(x, y);
      context.lineTo(x -  step, y);
      context.lineTo(x -  step, y +2 *step);
      context.lineTo(x, y +2* step);
      context.fill();

// Рисуем сектор
      context.beginPath();
      context.moveTo(x, y);
      context.arc(x, y,2 *step, 0,  -Math.PI / 2, true);
      context.fill();

    },
    drawText(context) {

      context.fillStyle = "#FFFFFF";
      let R_val = ["-R", "-R/2", " R/2", "R"];
      let step = (context.canvas.height / 2 - (context.canvas.height / 2) / 7) / 2;
      let x = context.canvas.width / 2;
      let y = context.canvas.height / 2;


      // Рисуем по оси x
      let count = 0;
      this.drawCoordinates(context);
      context.font = "12px Times New Roman";


      for (let i = -2; i <= 2; i++) {
        if (i !== 0) {

          context.fillText(R_val[count], x + i * step, y - 6, 100);

          context.beginPath();
          context.lineWidth = 2;
          context.moveTo(x + i * step, y + 6);
          context.lineTo(x + i * step, y - 6);
          context.stroke();
          count++;
        }
      }
      count = 3;

      for (let i = -2; i <= 2; i++) {
        if (i !== 0) {

          context.fillText(R_val[count], x + 6, y + i * step, 100);
          context.beginPath();
          context.lineWidth = 2;
          context.moveTo(x + 6, y + i * step);
          context.lineTo(x - 6, y + i * step);
          context.stroke();
          count--;
        }
      }
    },

    draw() {
      let canvas = document.getElementById('canvas');
      let context = canvas.getContext('2d');
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);

      this.drawChar(context);
      this.drawText(context);
      this.drawCoordinates(context);

    },

    changeDots(nR){

      if (nR == null ){
        return;
      }

      let table = document.getElementById("resultTable");



      let row = table.rows;


      let canvas = document.getElementById('canvas');
      let context = canvas.getContext('2d');
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);
      this.draw();

      if(table !== undefined){
        for (let i = 0; i +1 < row.length ; ++i){

          let nX = parseFloat(row[i +1].cells[0].innerText);
          let nY = parseFloat(row[i +1].cells[1].innerText);

          let realX = nX*0.856/(nR)*250+250;
          let realY =250 - nY*0.856/(nR)*250;
          let style = this.checkHit(nX, nY, nR);
          this.drawDot(realX,realY, style);

        }
      }
    },

    drawAll(nX,nY, nR){
      let realX = nX*0.856/(nR)*250+250;
      let realY =250 - nY*0.856/(nR)*250;
      let style = this.checkHit(nX, nY, nR);
      this.drawDot(realX,realY, style);
    },

    drawDot(X, Y, color){
      let canvas = document.getElementById('canvas');
      let context = canvas.getContext('2d');
      context.fillStyle = color;
      context.beginPath();
      context.arc(X, Y, 6,0, 2*Math.PI);
      context.fill();
    },

    checkHit(x, y, r){
      let hit = (x>= 0 && y <= 0 && -r/2 >= y - x/2)|| (x<=0 && x >= -r/2 && y <=0 && y >= -r)||(x>=0 && y >= 0 && (x*x + y*y <= r*r));
      if (hit){
        return "green";
      }else{
        return "red";
      }
    },


    getPoints() {
      const userDetails = JSON.parse(localStorage.getItem("userDetails"));

      this.axios.get("http://localhost:8081/points", {
        headers: {"Authorization": "Bearer " + userDetails.accessToken}
      }).then(response => {

        if (response.data.length > 0) {
          $('tbody').html('');
          response.data.forEach(e => {
            let tr = '<tr><td>' + e.x + '</td><td>' + e.y + '</td><td>' + e.r +'</td><td>' + e.answer + '</td></tr>';
            $('tbody').append(tr);
            this.drawAll(e.x, e.y, e.r);
          });
        }
      }).catch(error => {
        alert(error.message);
        if (error.response.status == 401 || error.response.status == 403) {
          this.invalidateTokenAndGoToAuthPage();
        }
      })
    },

    submitForm(event, X, Y , R) {
      event.preventDefault();

      const userDetails = JSON.parse(localStorage.getItem("userDetails"));

      if (userDetails) {
        this.axios.post("http://localhost:8081/points", {
              x: X,
              y: Y,
              r: R
            },
            {
              headers: {"Authorization": "Bearer " + userDetails.accessToken}
            }).then(() => {
          this.getPoints();
        }).catch(error => {
          if (error.response.status == 401 || error.response.status == 403) {
            this.invalidateTokenAndGoToAuthPage();
          }
        })
      } else this.invalidateTokenAndGoToAuthPage();
    },
    invalidateTokenAndGoToAuthPage() {
      localStorage.removeItem("userDetails");
      this.$router.push({name: "auth"});
    },

    checkX(x){
      return  (x.length > 0 && !isNaN(x[0]) && parseFloat(x[0]) >= -5 && parseFloat(x[0]) <= 3)

    },

    checkY(y){
      if (!isNaN(y) && parseFloat(y) > -3 && parseFloat(y) < 3){
        return true;
      } else {
        alert("Выберите Y в правильном диапазоне");
        return false;
      }


    },

    checkR(r){
      if (r.length > 0 && !isNaN(r[0]) && parseFloat(r[0]) > 0 && parseFloat(r[0]) <= 3){
        return true;
      } else {
        alert("Выберите Y в правильном диапазоне");
        return false;
      }
    },

    clearAll(){

      const userDetails = JSON.parse(localStorage.getItem("userDetails"));
      this.draw();
      if (userDetails) {

        this.axios.delete("http://localhost:8081/points",
            {
              headers: {"Authorization": "Bearer " + userDetails.accessToken}
            }).then(() => {
          $('tbody tr').remove();


        }).catch(error => {
          if (error.response.status == 401 || error.response.status == 403) {
            this.invalidateTokenAndGoToAuthPage();
          }
        })
      } else this.invalidateTokenAndGoToAuthPage();
    },

    clickCanvas(e){

      if (this.param_r[0] == null && this.param_r[0]< 0 ){
        alert("Невозможности определения координат точки. Введите радиус в правильном диапазоне!");
        return;
      }
      let x = ((e.offsetX - 250)/250* this.param_r[0])/0.856;
      let y = ((250 -e.offsetY )/250 * this.param_r[0])/0.856;
      this.submitForm(event, x, y, this.param_r[0]);
    },

    logout(event) {
      event.preventDefault();
      localStorage.removeItem("userDetails");
      this.$router.push( "auth");
    }

  },

  computed:{
    hasAdditionalX(){
      return this.param_x.length > 0
    },
    hasAdditionalR() {
      return this.param_r.length > 0
    }
  },




  mounted() {
    this.draw();
    this.getPoints();



  }




}
</script>

<style scoped>
.res{

  float: right;

}

.inp{

  float: left;
  margin-left: 30px;
  margin-top: 20px;
}

#resultTable tr{

  color: white;

}

#resultTable tr th {

  border: 2px solid white;

}

#resultTable body tr td{
  text-align: center;

  border: 2px solid white;
}

</style>