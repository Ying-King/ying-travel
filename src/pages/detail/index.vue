<template>
  <div>
    <loading v-show="!gallaryImgs.length"/>
    <detail-header/>
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :bannerImgs="gallaryImgs"
    />
    <detail-list :infoList="infoList" :list="list"/>
  </div>
</template>
<script>
  import DetailBanner from './components/banner';
  import DetailHeader from './components/header';
  import DetailList from './components/list';
  import Loading from 'common/loading';

  import axios from 'axios';
  import {detailInfoUrl, detailImgUrl, detailInfoParams, detailImgParams} from 'assets/js/config';

  export default {
    name: 'Detail',
    components: {
      DetailBanner,
      DetailHeader,
      DetailList,
      Loading
    },
    data() {
      return {
        sightName: '',
        bannerImg: '',
        gallaryImgs: [],
        infoList: {},
        list: {},
        id: ''
      };
    },
    methods: {
      getDetailInfo() {
        const id = this.$route.params.id;
        const spotid = id;
        axios.post(detailInfoUrl, { ...detailInfoParams, spotid }).then((res) => {
          res = res.data;
          this.infoList = res.data;
          this.sightName = res.data.spotname;
          this.list = res.data.shelfgroupinfo;
          console.log(res.data);
        });
        axios.post(detailImgUrl, { ...detailImgParams, id }).then((res) => {
          res = res.data.data.imgs;
          res.forEach((i) => { this.gallaryImgs.push(i.imgsizes[1].url); });
          this.bannerImg = this.gallaryImgs[0];
        });
      }
    },
    mounted() {
      this.getDetailInfo();
    }
  };

</script>
<style lang="scss" scoped>
  @import '~assets/scss/mixins';

</style>
