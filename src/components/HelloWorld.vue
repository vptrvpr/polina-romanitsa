<template>
  <div class="hello">
    <h1 style="margin-top: 30px">{{ msg }}</h1>
    <h4>
      Готова ублажать и любить за ваши деньги
    </h4>

    <div>
      <h3>О себе:</h3>
      <h5>...</h5>
    </div>

    <div>
      <h3>Характеристики</h3>
      <div class="row mt-2">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <v-simple-table>
            <template v-slot:default>
              <tbody>
              <tr>
                <td style="font-size: 20px">Рост</td>
                <td style="font-size: 20px">&mdash;</td>
              </tr>
              <tr>
                <td style="font-size: 20px">Вес</td>
                <td style="font-size: 20px">&mdash;</td>
              </tr>
              </tbody>
            </template>
          </v-simple-table>
        </div>
        <div class="col-md-3"></div>
      </div>
    </div>

    <div>
      <h3>Цена</h3>
      <div class="row mt-2">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <v-simple-table>
            <template v-slot:default>
              <tbody>
              <tr>
                <td style="font-size: 20px">Неделя</td>
                <td style="font-size: 20px">250 000 руб.</td>
              </tr>
              </tbody>
            </template>
          </v-simple-table>
        </div>
        <div class="col-md-3"></div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
</style>
