<template>
  <div>
    <loading v-show="!hotCities.length"/>
    <city-header />
    <city-search :cities="cities"/>
    <city-list
      :cities="cities"
      :hot="hotCities"
      :letter="letter"
      @change="handleLetterChange"
    />
    <city-alphabet
      :cities="cities"
      @change="handleLetterChange"
    />
  </div>
</template>
<script>
  import CityHeader from './components/header';
  import CitySearch from './components/search';
  import CityList from './components/list';
  import CityAlphabet from './components/alphabet';
  import Loading from 'common/loading';

  import axios from 'axios';

  export default {
    name: 'City',
    components: {
      CityHeader,
      CitySearch,
      CityList,
      CityAlphabet,
      Loading
    },
    data() {
      return {
        cities: {},
        hotCities: [],
        letter: ''
      };
    },
    methods: {
      getCityInfo() {
        axios.get('https://ying-king.github.io/data-mock/ying-travel/city.json').then(this.handleGetCityInfoSucc);
      },
      handleGetCityInfoSucc(res) {
        res = res.data;
        if (res.ret && res.data) {
          const data = res.data;
          this.cities = data.cities;
          this.hotCities = data.hotCities;
        }
        console.log(res);
      },
      handleLetterChange(letter) {
        this.letter = letter;
      }
    },
    mounted() {
      this.getCityInfo();
    }
  };

</script>
<style lang="scss" scoped>
  @import '~assets/scss/mixins';

</style>
