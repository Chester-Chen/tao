<template>
  <div id="transfer">
    <top-bar :navbarTitle="navbarTitle" :isShow="isShow"></top-bar>
    <div>快递id：{{transferId}}</div>
    <!-- <div class="step" v-for="(item, index) in transferData.result.list" :key="index">
      <div class="step-status">
        <div class="step-line"></div>
        <div class="step-index">{{index + 1}}</div>
        <div class="step-main">
          <div class="step-title">{{item.datetime}}</div>
          <div class="step-content">{{item.remark}}</div>
        </div>
      </div>
    </div>-->

    <van-steps
      direction="vertical"
      :active="activeStatus"
      v-for="(item, index) in transferData.result.list"
      :key="index"
    >
      <van-step  id="item-step">
        <h3>{{item.remark}}</h3>
        <p>{{item.datetime}}</p>
      </van-step>
    </van-steps>
  </div>
</template>

<script type="text/javascript">
import Vue from "vue";
import TopBar from "@/components/TopBar";
import { Step, Steps } from "vant";


Vue.use(Step).use(Steps);

export default {
  data() {
    return {
      isShow: true,
      navbarTitle: "物流",
      transferId: null,
      activeStatus: this.getActiveStatus,
      transferData: {
        resultcode: "200" /* 老版状态码，新用户请忽略此字段 */,
        reason: "查询物流信息成功",
        result: {
          company: "EMS" /* 快递公司名字 */,
          com: "ems",
          no: "1186465887499" /* 快递单号 */,
          status:
            "1" /* 1表示此快递单的物流信息不会发生变化，此时您可缓存下来；0表示有变化的可能性 */,
          status_detail: "PENDING" /* 详细的状态信息*/,
          list: [
            {
              datetime: "2016-06-15 21:44:04" /* 物流事件发生的时间 */,
              remark: "离开郴州市 发往长沙市【郴州市】" /* 物流事件的描述 */
            },
            {
              datetime: "2016-06-15 21:46:45",
              remark:
                "郴州市邮政速递物流公司国际快件监管中心已收件（揽投员姓名：侯云,联系电话:）【郴州市】"
            },
            {
              datetime: "2016-06-16 12:04:00",
              remark: "离开长沙市 发往贵阳市（经转）【长沙市】"
            },
            {
              datetime: "2016-06-17 07:53:00",
              remark: "到达贵阳市处理中心（经转）【贵阳市】"
            },
            {
              datetime: "2016-06-18 07:40:00",
              remark: "离开贵阳市 发往毕节地区（经转）【贵阳市】"
            },
            {
              datetime: "2016-06-18 09:59:00",
              remark: "离开贵阳市 发往下一城市（经转）【贵阳市】"
            },
            {
              datetime: "2016-06-18 12:01:00",
              remark: "到达  纳雍县 处理中心【毕节地区】"
            },
            {
              datetime: "2016-06-18 17:34:00",
              remark: "离开纳雍县 发往纳雍县阳长邮政支局【毕节地区】"
            },
            {
              datetime: "2016-06-20 17:55:00",
              remark: "投递并签收，签收人：单位收发章 *【毕节地区】"
            }
          ]
        },
        error_code: 0 /* 错误码，0表示查询正常，其他表示查询不到物流信息或发生了其他错误 */
      }
    };
  },
  components: { TopBar },
  created() {
    // 根据id查询物流
    // this.$axios.get("/querymsg").then(response => {
    //   console.log(response.data);
    // });
    let id = this.$route.query.transferId;
    this.transferId = id;
    console.log("快递id：" + id);
  },
  methods: {},
  computed: {
    getActiveStatus() {
      return this.transferData.result.list.length - 1;
    }
  }
};
</script>

<style lang="scss" scoped>
#transfer {
  padding: 0 10px;
  text-align: left;
  /**穿透处理scss */
 ::v-deep .van-step:last-child .van-step__line {
    width: 1px;
}

  /*   .step {
    font-size: 14px;
    color: #999;
    .step-status {
      position: relative;
      .step-line {
        position: absolute;
        background: #ccc;
        height: 100%;
        // height: 58px;
        width: 1px;
        margin-left: 1rem;
      }
      .step-index {
        float: left;
        font-size: 14px;
        border: 1px solid lightgreen;
        border-radius: 50%;
        width: 1.5rem;
        height: 1.5rem;
        text-align: center;
        line-height: 1.5rem;
        position: absolute;
        left: 0;
        top: 0;
        margin-left: 0.2rem;
        z-index: 99;
        background-color: #fff;
      }
      .step-main {
        display: inline-block;
        padding-left: 40px;
        font-size: 1rem;

        .step-title {
          line-height: 1.5rem;
          font-weight: 500;
        }
        .step-content {
          line-height: 1rem;
          font-weight: 500;
          margin: 1rem 0;
        }
      }
    }
  } */
}
</style>
