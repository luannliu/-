(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/tsp-video/tsp-video-list/video-v"],{

/***/ 91:
/*!****************************************************************************!*\
  !*** F:/前端/new/短视频模板 - 副本/components/tsp-video/tsp-video-list/video-v.vue ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _video_v_vue_vue_type_template_id_e52043e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video-v.vue?vue&type=template&id=e52043e8& */ 92);
/* harmony import */ var _video_v_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video-v.vue?vue&type=script&lang=js& */ 94);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _video_v_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _video_v_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _video_v_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./video-v.vue?vue&type=style&index=0&lang=css& */ 96);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _video_v_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _video_v_vue_vue_type_template_id_e52043e8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _video_v_vue_vue_type_template_id_e52043e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _video_v_vue_vue_type_template_id_e52043e8___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/tsp-video/tsp-video-list/video-v.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 92:
/*!***********************************************************************************************************!*\
  !*** F:/前端/new/短视频模板 - 副本/components/tsp-video/tsp-video-list/video-v.vue?vue&type=template&id=e52043e8& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_v_vue_vue_type_template_id_e52043e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./video-v.vue?vue&type=template&id=e52043e8& */ 93);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_v_vue_vue_type_template_id_e52043e8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_v_vue_vue_type_template_id_e52043e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_v_vue_vue_type_template_id_e52043e8___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_v_vue_vue_type_template_id_e52043e8___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 93:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/前端/new/短视频模板 - 副本/components/tsp-video/tsp-video-list/video-v.vue?vue&type=template&id=e52043e8& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var l0 = _vm.contentShow
    ? _vm.__map(_vm.vodList, function (item, index) {
        var $orig = _vm.__get_orig(item)
        var g0 = _vm.totalPlayList.length
        return {
          $orig: $orig,
          g0: g0,
        }
      })
    : null
  var g1 = _vm.contentShow
    ? _vm.vodList.length > 0 && _vm.beforeVodInfo.sliderShow
    : null
  var m0 =
    _vm.contentShow && g1 && _vm.sliderDrag
      ? _vm.formatSeconds(_vm.sliderTime)
      : null
  var m1 =
    _vm.contentShow && g1 && _vm.sliderDrag
      ? _vm.formatSeconds(_vm.videoTime)
      : null
  var g2 =
    _vm.contentShow && g1
      ? _vm.vodList.length > 0 && _vm.beforeVodInfo.sliderShow
      : null
  var g3 =
    _vm.contentShow && g1
      ? _vm.vodList.length > 0 && _vm.beforeVodInfo.loadingShow
      : null
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l0: l0,
        g1: g1,
        m0: m0,
        m1: m1,
        g2: g2,
        g3: g3,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 94:
/*!*****************************************************************************************************!*\
  !*** F:/前端/new/短视频模板 - 副本/components/tsp-video/tsp-video-list/video-v.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_v_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./video-v.vue?vue&type=script&lang=js& */ 95);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_v_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_v_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_v_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_v_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_v_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 95:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/前端/new/短视频模板 - 副本/components/tsp-video/tsp-video-list/video-v.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var videoMenu = function videoMenu() {
  __webpack_require__.e(/*! require.ensure | components/tsp-video/tsp-menu/tsp-menu-v */ "components/tsp-video/tsp-menu/tsp-menu-v").then((function () {
    return resolve(__webpack_require__(/*! ../tsp-menu/tsp-menu-v.vue */ 119));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
/* 
lodData 上拉加载回调
refreshData 下拉加载回调
*/
var _default = {
  components: {
    videoMenu: videoMenu
  },
  props: {
    /* 是否开启下拉刷新 */
    loadOpen: {
      type: Boolean,
      default: true
    },
    /* tabBar栏 0系统tabBar栏 1自定义tabBar栏 */
    tabBarShow: {
      type: Number,
      default: 0
    },
    /* 自定义底部栏的高度 */
    tabBarHeight: {
      type: Number,
      default: 50
    },
    /* 进度条离底部的距离 px*/
    speedBottom: {
      type: Number,
      default: 0
    },
    /* 初始加载完成是否自动播放 */
    autoplay: {
      type: Boolean,
      default: true
    },
    /* 是否循环播放 */
    loopPlay: {
      type: Boolean,
      default: true
    },
    /* 是否开启自动播放 */
    nextPlay: {
      type: Boolean,
      default: false
    },
    /* 视频总数量，有值才能滑动加载到最后一个视频 */
    totalvod: {
      type: Number,
      default: 0
    },
    /* 是否开启双击点赞 */
    doubleOpen: {
      type: Boolean,
      default: true
    },
    /* 双击点赞屏幕是否显示桃心 */
    doubleHeart: {
      type: Boolean,
      default: true
    },
    /* 多个tab视频时需传入不同的类型 */
    swId: {
      type: String,
      default: ''
    },
    /* 是否有显示 statusBarHeight 状态栏适配 */
    showBarHeight: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      videoStyle: {},
      screenWidth: 0,
      //屏幕的宽度
      screenHeight: 0,
      //屏幕的高度
      videoCtx: null,
      vodIndex: 0,
      // 当前视频下标
      currentIndex: 0,
      //定位播放的下标
      contentShow: false,
      loadShow: false,
      autoplayVideo: true,
      // 初始加载完成是否自动播放
      //当前播放的视频数组
      vodList: [
        /* {
        	vodUrl:"https://outin-9cc4a7aedd2a11eaabb800163e1a65b6.oss-cn-shanghai.aliyuncs.com/customerTrans/43121ec9955a1ce95146d379f15ea9bd/566eafe2-17b52f0f17b-0007-0f29-cc2-eb217.mp4",
        	coverImg:'/static/image/cover1.jpg', //视频封面
        	coverShow:false, //是否显示视频封面，vue 小程序端不播放会显示视频，可以不用显示封面，App不播放不会显示视频，就需要封面了
        	vodPaly:true, //是否播放、暂停视频
        	vodShow:true, //是否显示视频
        	object_fit:'contain', //视频的显示类型
        	pauseShow:false, //是否显示暂停图标
        	loadingShow:false, //是否显示loading加载动画
        	fabulousShow:false,//是否点赞
        	followReally:false, //是否关注
        	sliderShow:true, //是否显示进度条
        	rotateImgShow:true, //是否显示旋转头像
        } */
      ],
      totalPlayList: [],
      finalList: [],
      changeIndex: 0,
      //current 下标
      beforeVodInfo: {},
      //当前播放视频对象
      vodCurIndex: 0,
      //当前播放视频对象下标
      circular: true,
      durationNum: 300,
      showShade: false,
      //显示遮罩swiper
      openSpot: false,
      shadeNum: 0,
      bufferTime: null,
      //缓冲视频显示加载动画防抖
      sliderProgress: 0,
      //进度条滑动层宽度
      sliderTime: 0,
      //显示滑动进度条时变化的时间
      videoTime: 0,
      //视频时长 时间
      endTime: 0,
      //滑动进度条最终的时间
      sliderDrag: false,
      //是否在拖动进度
      brightSlider: false,
      //是否显示光亮的进度条
      sliderEndTime: null,
      //滑动结束隐藏光亮进度条时间延迟
      bufferNum: null,
      //显示loading加载进度的时间条件
      bufferShow: false,
      //显示loading加载进度的条件
      playOpen: false,
      //视频播放失败，是否重播视频的条件
      failTime: null,
      //视频播放失败，重播视频的时间
      repeatTime: null,
      palyCartoon: false,
      //是否播放旋转头像
      shakePlay: false,
      //是否有防抖视频播放
      touchClientY: 0,
      //触碰的坐标
      moveClientY: 0,
      //移动的坐标
      moveOpacity: false,
      //是否透明
      refreshShow: false,
      //是否显示下拉刷新
      refreshOpacity: 0,
      //下拉刷新的透明度
      refreshclientY: 0,
      //下拉刷新的坐标
      refreshOpen: false,
      //下拉刷新的触发条件
      playErrTime: null,
      interceptIndex: [],
      loadTime: null,
      beginLoad: 0,
      loadStart: false,
      muteSetup: false,
      //是否设置为静音
      /* 双击点赞部分 */
      lastTapDiffTime: 0,
      //上次点击时间
      lastTapTimeoutFunc: null,
      //单击事件事件函数
      likeList: [],
      //双击点赞显示的桃心数据
      likeId: 1,
      doubleOutTime: null,
      clearDoubleTime: null,
      tailPlay: false
    };
  },
  created: function created() {
    var deviceInfo = uni.getSystemInfoSync();
    var topBarHeight = this.showBarHeight ? deviceInfo.statusBarHeight : 0; //statusBarHeight 状态栏高度
    this.videoStyle.statusBarHeight = topBarHeight + 'px';
    this.videoStyle.width = deviceInfo.screenWidth + 'px';
    this.screenWidth = deviceInfo.screenWidth; //屏幕的宽度
    this.screenHeight = deviceInfo.screenHeight; //屏幕的高度
    if (this.tabBarShow == 1) {
      //减去自定义底部栏的高度
      this.videoStyle.height = deviceInfo.screenHeight - topBarHeight - this.tabBarHeight + 'px';
    } else {
      this.videoStyle.height = deviceInfo.windowHeight - topBarHeight + 'px';
    }
  },
  watch: {
    vodCurIndex: function vodCurIndex(newIndex, oldIndex) {
      var _this = this;
      /* 上一个视频处理 */
      if (oldIndex >= 0) {
        var oldObj = null;
        this.vodList.filter(function (item, index) {
          if (oldIndex == item.videoIndex) {
            item.coverOpacity = item.coverShow ? true : false; //是否显示封面
            item.vodPaly = false;
            item.pauseShow = false;
            item.loadingShow = false;
            uni.createVideoContext('myVideo' + index + _this.swId, _this).pause();
          }
        });
      }
    }
  },
  methods: {
    /* 初始加载视频 */initVod: function initVod(dataList, index) {
      this.autoplayVideo = this.autoplay;
      if (index) {
        this.durationNum = 0;
      }
      var playIndex = index ? index : 0;
      /* 拼接参数数据 */
      dataList.filter(function (item, i) {
        item.videoIndex = i;
        item.vodPaly = i == playIndex ? true : false; //是否播放、暂停视频
        item.pauseShow = false; //是否显示暂停图标
        item.loadingShow = false; //是否显示loading加载动画
        item.coverOpacity = item.coverShow ? true : false; //是否显示封面
      });

      dataList.sort(function (a, b) {
        return a.videoIndex - b.videoIndex;
      });
      this.totalPlayList = dataList;
      this.contentShow = dataList.length > 0 ? true : false;
      this.loadShow = dataList.length > 0 ? true : false;
      if (this.totalPlayList.length >= 3) {
        this.vodList = [{}, {}, {}];
      } else {
        this.vodList = dataList;
      }
      this.getPlayVod(playIndex, 'initialLoad');
    },
    /* 选择指定视频下标播放 */scrollToVod: function scrollToVod(playIndex) {
      this.durationNum = 0;
      this.getPlayVod(playIndex, null);
    },
    /* 根据指定下标播放 */getPlayVod: function getPlayVod(playIndex, uType) {
      var _this2 = this;
      var currentNum = 0;
      this.vodCurIndex = playIndex;
      setTimeout(function () {
        if (_this2.totalPlayList.length >= 3) {
          var amount = _this2.totalPlayList.length; //总视频数量
          var showVod = amount % 3;
          var starIdx = playIndex - 1 < 0 ? 0 : playIndex - 1;
          var endIdx = playIndex + 2;
          var endNum = amount - showVod;
          if (playIndex == 0 || playIndex + 1 >= endNum) {
            _this2.circular = false; //第一个视频和最后视频禁止循环滑动
            var resultList = [];
            if (playIndex == 0) {
              resultList = JSON.parse(JSON.stringify(_this2.totalPlayList.slice(starIdx, playIndex + 3)));
            } else {
              resultList = JSON.parse(JSON.stringify(_this2.totalPlayList.slice(endNum - 3, endNum)));
            }
            _this2.setSliceList(resultList); /* 截取的视频数据对3求余数赋值 */
            /* 如果总视频数量对3求余数不为0，则追加剩余视频数据 */
            if (playIndex != 0) {
              var arrList = JSON.parse(JSON.stringify(_this2.totalPlayList.slice(endNum, amount)));
              arrList.filter(function (item) {
                _this2.vodList.push(item);
              });
              if (_this2.totalPlayList.length >= _this2.totalvod) {
                _this2.loadShow = false;
              }
            }
          } else {
            _this2.circular = true;
            var _resultList = JSON.parse(JSON.stringify(_this2.totalPlayList.slice(starIdx, endIdx)));
            _this2.setSliceList(_resultList); /* 截取的视频数据对3求余数赋值 */
          }
        } else {
          _this2.circular = false; //第一个视频和最后视频禁止循环滑动
        }

        _this2.getVodInfo();
        _this2.vodList.filter(function (item, index) {
          if (_this2.vodCurIndex == item.videoIndex) {
            currentNum = index;
          }
        });
        /* 到底加载数据 */
        if (_this2.vodCurIndex + 1 >= _this2.totalPlayList.length - _this2.totalPlayList.length % 3 && _this2.totalPlayList.length >= 3) {
          _this2.loadStart = true;
          clearTimeout(_this2.loadTime);
          _this2.loadTime = setTimeout(function () {
            _this2.beginLoad = _this2.totalPlayList.length;
            if (_this2.vodCurIndex + 1 == _this2.beginLoad) {
              _this2.vodList[0].videoIndex = _this2.beginLoad;
              _this2.tailPlay = true;
            }
            _this2.$emit('lodData');
          }, 300);
        }
        if (playIndex > 0) {
          //开启定位播放
          _this2.currentIndex = currentNum;
        }
        _this2.changeIndex = currentNum;
        _this2.vodIndex = currentNum;
      }, 100);
      setTimeout(function () {
        _this2.durationNum = 300;
        if (uType == 'initialLoad') {
          if (_this2.autoplayVideo) {
            _this2.swiperPlay(currentNum);
          } else {
            _this2.beforeVodInfo.vodPaly = false;
            _this2.beforeVodInfo.pauseShow = true;
          }
        } else {
          _this2.swiperPlay(currentNum);
        }
      }, 200);
    },
    /* 赋值截取的数据 */setSliceList: function setSliceList(resData) {
      var _this3 = this;
      resData.filter(function (item) {
        if (item.videoIndex % 3 == 0) {
          _this3.vodList[0] = item;
        } else if (item.videoIndex % 3 == 1) {
          _this3.vodList[1] = item;
        } else if (item.videoIndex % 3 == 2) {
          _this3.vodList[2] = item;
        }
      });
    },
    /* 到底加载方法 */lodingData: function lodingData(dataList) {
      var _this4 = this;
      var num = this.totalPlayList.length; //获取视频数据的长度
      if (dataList && dataList.length == 0) return;
      dataList.filter(function (item, i) {
        item.videoIndex = num + i;
        item.vodPaly = false; //是否播放、暂停视频
        item.pauseShow = false; //是否显示暂停图标
        item.loadingShow = false; //是否显示loading加载动画
        item.coverOpacity = item.coverShow ? true : false; //是否显示封面
      });

      this.totalPlayList = this.totalPlayList.concat(dataList); //拼接数据
      this.$nextTick(function () {
        /* 截取要播放的视频列表 */
        _this4.getVodSliceList();
        setTimeout(function () {
          /* 截取的视频数据对3求余数赋值 */
          _this4.finalList.filter(function (item) {
            if (item.videoIndex != _this4.vodCurIndex) {
              if (item.videoIndex % 3 == 0) {
                _this4.vodList[0] = item;
              } else if (item.videoIndex % 3 == 1) {
                _this4.vodList[1] = item;
              } else if (item.videoIndex % 3 == 2) {
                _this4.vodList[2] = item;
              }
            }
          });
          var appendNum = _this4.totalvod - _this4.totalvod % 3;
          /* 如果总视频数量对3求余数不为0，则追加剩余视频数据 */
          if (_this4.vodCurIndex != 0 && _this4.vodList.length == 3 && _this4.vodCurIndex + 1 >= appendNum && _this4.totalvod > 0) {
            var arrList = _this4.totalPlayList.slice(_this4.vodCurIndex + 1, _this4.totalPlayList.length);
            arrList.filter(function (item) {
              _this4.vodList.push(item);
            });
          }
          _this4.$nextTick(function () {
            _this4.circular = true;
          });
          if (_this4.vodCurIndex + 1 == _this4.beginLoad) {
            _this4.vodList[0].videoIndex = _this4.beginLoad;
            _this4.tailPlay = true;
          }
        }, 100);
      });
    },
    /* 重新加载 */refreshSquare: function refreshSquare(dataList, index) {
      var _this5 = this;
      var playIndex = index ? index : 0;
      this.resetData(); /* 重置状态数据 */
      this.refreshShow = false; //隐藏下拉刷新
      this.refreshOpen = false; //下拉刷新的触发条件
      this.vodCurIndex = 0;
      this.currentIndex = 0;
      this.vodList = [];
      this.totalPlayList = [];
      setTimeout(function () {
        _this5.initVod(dataList, playIndex); //初始加载视频
      }, 100);
    },
    /* 静音设置 */muteVideo: function muteVideo(val) {
      this.muteSetup = val;
    },
    /* onShow播放视频 */showPlay: function showPlay() {
      if (this.vodIndex != null && this.contentShow && !this.beforeVodInfo.vodPaly) {
        this.videoPlay(this.vodIndex);
      }
    },
    /* onHide暂停视频 */hidePause: function hidePause() {
      if (this.vodIndex != null && this.contentShow && this.beforeVodInfo.vodPaly) {
        this.videoPause(this.vodIndex);
      }
      this.brightSlider = false; //隐藏光亮的进度条
    },
    /* 点击暂停、播放视频 */playSpot: function playSpot(index) {
      if (this.beforeVodInfo.vodPaly) {
        //暂停
        this.videoPause(index);
        this.beforeVodInfo.pauseShow = true; //显示暂停图标
      } else {
        //播放
        this.videoPlay(index);
        this.beforeVodInfo.pauseShow = false; //关闭暂停图标
      }
    },
    /* 播放视频 */videoPlay: function videoPlay(index) {
      var _this6 = this;
      this.openSpot = true;
      this.getVodInfo(); //获取当前视频播放对象
      this.showShade = false; //是否显示遮罩swiper
      this.beforeVodInfo.vodPaly = true;
      this.beforeVodInfo.pauseShow = false; //关闭暂停图标
      this.brightSlider = false; //隐藏光亮的进度条
      this.loadStart = false;
      this.$nextTick(function () {
        _this6.moveOpacity = false;
        uni.createVideoContext('myVideo' + index + _this6.swId, _this6).play();
      });
    },
    /* 暂停视频 */videoPause: function videoPause(index) {
      var _this7 = this;
      this.getVodInfo(); //获取当前视频播放对象
      clearTimeout(this.sliderEndTime);
      this.beforeVodInfo.vodPaly = false;
      if (this.vodIndex == index && this.beforeVodInfo.sliderShow) {
        this.brightSlider = true; //显示光亮的进度条
      }

      this.$nextTick(function () {
        uni.createVideoContext('myVideo' + index + _this7.swId, _this7).pause();
      });
    },
    changeSwiper: function changeSwiper(ev) {
      var curIndex = ev.detail.current;
      var videoIndex = this.vodList[curIndex].videoIndex;
      this.moveOpacity = true;
      this.shadeNum++;
      this.openSpot = false;
      this.autoplayVideo = true;
      var vodTotal = this.totalPlayList.length % 3;
      if ((videoIndex == 0 || videoIndex + 1 == this.totalPlayList.length - vodTotal) && this.shadeNum > 1) {
        this.showShade = true; //是否显示遮罩swiper
      }

      this.changeIndex = curIndex;
      this.currentIndex = curIndex;
      /* 截取要播放的视频列表 */
      this.vodCurIndex = videoIndex; //当前视频下标
      this.getVodSliceList();
      this.getVodInfo(); //获取当前视频播放对象
    },
    /* 要播放视频的下标 */swiperVod: function swiperVod(ev) {
      var _this8 = this;
      var curIndex = ev.detail.current;
      if (this.openSpot) return;
      this.resetData(); /* 重置状态数据 */
      this.moveOpacity = false;
      this.shadeNum = 0;
      this.showShade = false; //是否显示遮罩swiper
      this.setSliceList(this.finalList); /* 截取的视频数据对3求余数赋值 */
      var endNum = this.totalPlayList.length - this.totalPlayList.length % 3;
      var endPlay = false;
      if (this.vodCurIndex == 0 || this.vodCurIndex + 1 >= endNum) {
        this.circular = false;
        var appendNum = this.totalvod - this.totalvod % 3;
        /* 如果总视频数量对3求余数不为0，则追加剩余视频数据 */
        if (this.vodCurIndex != 0 && this.vodList.length == 3 && this.vodCurIndex + 1 >= appendNum && this.totalvod > 0) {
          var oldIndex = this.vodCurIndex;
          var arrList = this.totalPlayList.slice(this.vodCurIndex + 1, this.totalPlayList.length);
          arrList.filter(function (item) {
            _this8.vodList.push(item);
          });
          /* endPlay = true
          this.againLocatePlay() // 重新定位播放 */
        }
      } else {
        var loadNum = this.beginLoad - this.beginLoad % 3;
        /* 由于从外面指定的播放下标为当前数据的末端，比如10条数据，进来播放下标为8，然后又追加了余数剩下的视频，
        因为是末端所以又触发了分页加载数据，所以不删除多余的视频 */
        if (this.beginLoad > 0 && this.vodCurIndex + 1 >= loadNum && this.vodCurIndex + 1 <= this.beginLoad) {
          // console.log('不删除多余的视频')
          if (this.vodCurIndex + 1 == this.beginLoad) {
            this.vodList[0].videoIndex = this.beginLoad;
            this.tailPlay = true;
          }
        } else {
          if (this.vodList.length > 3) {
            this.vodList.length = 3;
            // this.againLocatePlay() // 重新定位播放
          }
        }

        this.$nextTick(function () {
          _this8.circular = true;
        });
      }
      if (this.totalvod > 0) {
        this.loadShow = this.totalPlayList.length >= this.totalvod ? false : true;
      }
      /* 如果总视频数量对3求余数不为0，则追加剩余视频数据，有分页加载后重新定位要播放的视频下标 */
      if (this.vodCurIndex + 1 != this.beginLoad && this.tailPlay && !endPlay) {
        this.tailPlay = false;
        this.durationNum = 0;
        var currentNum = 0;
        this.$nextTick(function () {
          _this8.vodList.filter(function (item, index) {
            if (item.videoIndex == _this8.beginLoad) {
              currentNum = index;
            }
          });
          _this8.currentIndex = currentNum; //定位播放
          _this8.changeIndex = currentNum;
          setTimeout(function () {
            _this8.durationNum = 300;
            _this8.beginLoad = 0;
          }, 100);
        });
      }
      if (!endPlay) {
        this.vodIndex = this.changeIndex;
        this.swiperPlay(this.vodIndex);
        this.$emit('swiperChange', this.vodList[this.vodIndex]);
      }
      /* 到底加载数据 */
      if (this.vodCurIndex + 1 >= this.totalPlayList.length - this.totalPlayList.length % 3 && !this.loadStart) {
        clearTimeout(this.loadTime);
        this.loadTime = setTimeout(function () {
          _this8.$emit('lodData');
        }, 300);
      }
    },
    /* 重新定位播放 */againLocatePlay: function againLocatePlay() {
      var _this9 = this;
      var currentNum = 0;
      this.vodList.filter(function (item, index) {
        if (_this9.vodCurIndex == item.videoIndex) {
          currentNum = index;
        }
      });
      this.currentIndex = currentNum;
      this.vodIndex = currentNum;
      setTimeout(function () {
        _this9.swiperPlay(_this9.vodIndex);
        _this9.durationNum = 300;
      }, 100);
    },
    /* 获取当前视频播放对象 */getVodInfo: function getVodInfo() {
      var _this10 = this;
      this.vodList.filter(function (item) {
        if (_this10.vodCurIndex == item.videoIndex) {
          _this10.beforeVodInfo = item;
        }
      });
    },
    /* 截取要播放的视频列表 */getVodSliceList: function getVodSliceList(load) {
      var _this11 = this;
      var videoIndex = this.vodList[this.changeIndex].videoIndex;
      var starIdx = videoIndex - 1 < 0 ? 0 : load ? videoIndex : videoIndex - 1;
      var endIdx = videoIndex == 0 ? 3 : videoIndex + 2;
      var resultList = JSON.parse(JSON.stringify(this.totalPlayList.slice(starIdx, endIdx)));
      resultList.filter(function (item) {
        if (item.videoIndex % 3 == 0) {
          _this11.vodList[0].videoIndex = item.videoIndex;
        } else if (item.videoIndex % 3 == 1) {
          _this11.vodList[1].videoIndex = item.videoIndex;
        } else if (item.videoIndex % 3 == 2) {
          _this11.vodList[2].videoIndex = item.videoIndex;
        }
      });
      this.finalList = resultList;
      // console.log(resultList)
    },
    /* swiper播放视频 */swiperPlay: function swiperPlay(newIndex) {
      this.playOpen = false;
      clearInterval(this.failTime);
      clearInterval(this.repeatTime);
      this.muteVideo(false);
      /* 播放新视频 */
      if (uni.createVideoContext('myVideo' + newIndex + this.swId, this)) {
        this.shakePlay = false;
        this.videoPlay(newIndex);
      }
      this.$refs['menuRef' + newIndex + ''][0].likeeffect = null; //重置点赞的显示动画条件
    },
    /* 当开始/继续播放时 */startPlay: function startPlay(index) {
      if (this.vodIndex == index) {
        this.playOpen = false;
        if (this.beforeVodInfo.rotateImgShow) {
          this.palyCartoon = true; //开启旋转头像动画 
        }

        clearInterval(this.failTime);
        clearInterval(this.repeatTime);
      }
    },
    /* 视频出现缓冲 */bufferVod: function bufferVod(index) {
      if (this.vodList.length > 0 && this.changeIndex == this.vodIndex && !this.bufferShow && this.beforeVodInfo.vodPaly) {
        this.playOpen = true;
        this.scheduleLoad();
      }
    },
    /* 视频播放失败 */errVod: function errVod(index) {
      var _this12 = this;
      clearTimeout(this.playErrTime);
      this.playErrTime = setTimeout(function () {
        if (_this12.vodList.length > 0 && _this12.changeIndex == _this12.vodIndex && !_this12.bufferShow && _this12.beforeVodInfo.vodPaly) {
          _this12.playOpen = true;
          _this12.palyCartoon = false;
          _this12.scheduleLoad();
        }
      }, 300);
    },
    /* 播放进度变化时触发 */timeupdateVod: function timeupdateVod(ev, index) {
      if (this.vodIndex != index) return false;
      this.beforeVodInfo.coverOpacity = false; //隐藏视频封面
      if (!this.sliderDrag) {
        //判断拖拽完成后才触发更新，避免播放是拖拽冲突失效
        this.videoTime = ev.detail.duration; //视频时间
        this.sliderTime = ev.detail.currentTime; //已播放时间
        this.sliderProgress = ev.detail.currentTime / ev.detail.duration * this.screenWidth; //播放进度
      }
      /* 关闭加载动画 */
      if (this.vodList.length > 0) {
        this.bufferNum = ev.detail.currentTime;
        this.bufferShow = false;
        this.beforeVodInfo.loadingShow = false;
        clearTimeout(this.bufferTime);
        clearInterval(this.failTime);
        clearInterval(this.repeatTime);
      }
    },
    /* 显示进度加载动画 */scheduleLoad: function scheduleLoad() {
      var _this13 = this;
      if (!this.bufferShow) {
        this.bufferShow = true;
        this.bufferTime = setTimeout(function () {
          _this13.beforeVodInfo.loadingShow = true;
          if (_this13.playOpen) {
            _this13.vodLoad();
          }
        }, 2500);
      }
    },
    /* 重新播放视频 */vodLoad: function vodLoad() {
      var _this14 = this;
      /* 视频播放失败，重新播放视频 */
      if (this.playOpen) {
        this.playOpen = false;
        if (this.sliderTime == 0) {
          uni.createVideoContext('myVideo' + this.vodIndex + this.swId, this).stop();
        }
        this.failTime = setTimeout(function () {
          _this14.playOpen = true;
          _this14.bufferShow = false;
          _this14.videoPlay(_this14.vodIndex);
        }, 1000);
      }
    },
    /* 视频播放结束 */endedVod: function endedVod(index) {
      var _this15 = this;
      if (this.vodIndex == index && this.nextPlay && this.vodCurIndex + 1 < this.totalPlayList.length) {
        if (this.vodIndex < 2) {
          this.vodIndex += 1;
        } else {
          this.vodIndex = 0;
        }
        this.$nextTick(function () {
          _this15.currentIndex = _this15.vodIndex;
          _this15.$forceUpdate();
        });
      }
    },
    // 根据秒获取时间
    formatSeconds: function formatSeconds(a) {
      var hh = parseInt(a / 3600);
      var mm = parseInt((a - hh * 3600) / 60);
      if (mm < 10) mm = "0" + mm;
      var ss = parseInt((a - hh * 3600) % 60);
      if (ss < 10) ss = "0" + ss;
      if (hh < 10) hh = hh == 0 ? '' : "0".concat(hh, ":");
      var length = hh + mm + ":" + ss;
      if (a >= 0) {
        return length;
      } else {
        return "00:00";
      }
    },
    /* 进度条滑动 */touchmoveSlider: function touchmoveSlider(event) {
      var objclientX = event.changedTouches[0].clientX;
      this.sliderDrag = true; //是否在拖动进度
      if (objclientX >= 0 && objclientX <= this.screenWidth - 2) {
        clearTimeout(this.sliderEndTime);
        this.brightSlider = true; //显示光亮的进度条
        this.sliderProgress = objclientX;
        var num = this.sliderProgress / (this.screenWidth - 2);
        this.sliderTime = num * this.videoTime; //滑动期间显示的时间
        this.endTime = num * this.videoTime; //最终滑动的时间
      }
    },
    /* 进度条滑动结束 */touchendSlider: function touchendSlider() {
      var _this16 = this;
      this.sliderDrag = false;
      var videoCtx = uni.createVideoContext('myVideo' + this.vodIndex + this.swId, this);
      videoCtx.seek(this.endTime);
      videoCtx.play();
      this.beforeVodInfo.vodPaly = true; //开启播放
      this.beforeVodInfo.pauseShow = false; //关闭暂停图标
      this.sliderEndTime = setTimeout(function () {
        _this16.brightSlider = false; //隐藏光亮的进度条
      }, 2000);
    },
    /* 触碰的坐标 */vodViewStart: function vodViewStart(e) {
      this.touchClientY = e.changedTouches[0].clientY;
    },
    /* 上下滑动的坐标 */vodViewMove: function vodViewMove(e) {
      this.moveClientY = e.changedTouches[0].clientY - this.touchClientY;

      /* 是否透明进度条 */
      if (this.moveClientY > 0 || this.moveClientY < 0) {
        this.moveOpacity = true;
      } else {
        this.moveOpacity = false;
      }
      /* 显示下拉刷新 */
      if (this.loadOpen && this.vodCurIndex == 0 && !this.refreshOpen) {
        if (this.moveClientY > 10) {
          this.refreshShow = true; //显示下拉刷新
          if (this.moveClientY > 10 && this.moveClientY <= 60 && this.refreshShow) {
            this.refreshOpacity = this.moveClientY / 60;
            this.refreshclientY = this.moveClientY / 2;
          }
        } else {
          this.refreshShow = false;
        }
      }
    },
    /* 滑动结束的坐标 */vodViewEnd: function vodViewEnd(e) {
      var _this17 = this;
      this.moveClientY = e.changedTouches[0].clientY - this.touchClientY;

      /* 是否透明进度条 */
      this.moveOpacity = false;
      /* 隐藏下拉刷新 */
      if (this.loadOpen && this.vodCurIndex == 0 && this.refreshShow) {
        /* 未达到刷新条件回弹隐藏 */
        if (this.moveClientY > 1 && this.moveClientY < 60 && !this.refreshOpen) {
          this.refreshOpacity = 0;
          this.refreshclientY = 0;
          setTimeout(function () {
            _this17.refreshShow = false;
          }, 300);
        } else {
          /* 达到刷新条件 */
          if (this.refreshOpen) return;
          this.refreshOpen = true;
          this.$emit('refreshData');
        }
      }
    },
    /* 重置状态数据 */resetData: function resetData() {
      this.sliderProgress = 0; //进度条滑动层宽度
      this.sliderTime = 0; //显示滑动进度条时变化的时间
      this.videoTime = 0; //视频时长 时间
      this.endTime = 0; //滑动进度条最终的时间
      this.bufferNum = null; //显示loading加载进度的时间条件
      this.bufferShow = false; //显示loading加载进度的条件
      this.sliderDrag = false; //是否在拖动进度
      this.brightSlider = false; //是否显示光亮的进度条
      this.sliderEndTime = null; //滑动结束隐藏光亮进度条时间延迟
    },
    // 单击或双击
    handClick: function handClick(event, index) {
      var _this18 = this;
      if (!this.doubleOpen) {
        //没有开启双击
        this.playSpot(index);
        return false;
      }
      // 当前时间
      var curTime = new Date().getTime();
      // 上次点击时间
      var lastTime = this.lastTapDiffTime;
      // 更新上次点击时间
      this.lastTapDiffTime = curTime;
      // 两次点击间隔小于300ms, 认为是双击
      var diff = curTime - lastTime;
      if (diff < 300) {
        // 执行方法
        // 成功触发双击事件时，取消单击事件的执行
        clearTimeout(this.lastTapTimeoutFunc);
        if (!this.vodList[this.vodIndex].fabulousShow) {
          this.$refs['menuRef' + this.vodIndex + ''][0].fabulousBtn(index); //视频点赞
        }

        if (!this.doubleHeart) return; //双击点赞屏幕是否显示桃心
        if (this.doubleOutTime) return;
        this.doubleOutTime = setTimeout(function () {
          var topY = event.changedTouches[0].clientY;
          var leftX = event.changedTouches[0].clientX;
          var rotateList = ['0deg', '15deg', '-15deg'];
          var rNum = Math.floor(Math.random() * 3);
          var likeObj = {
            id: _this18.likeId++,
            width: _this18.pxToRpx(95) + 'rpx',
            height: _this18.pxToRpx(95) + 'rpx',
            top: _this18.pxToRpx(topY) - _this18.pxToRpx(140) + 'rpx',
            left: _this18.pxToRpx(leftX) - _this18.pxToRpx(95 / 2) + 'rpx',
            rotate: rotateList[rNum],
            className: '',
            isShow: true
          };
          _this18.likeList.push(likeObj);
          _this18.doubleAddClass(likeObj.id);
          _this18.doubleOutTime = null;
          clearTimeout(_this18.clearDoubleTime);
          _this18.clearDoubleTime = setTimeout(function () {
            _this18.likeList = [];
          }, 1500);
          _this18.$emit('doubleClick', _this18.vodList[_this18.vodIndex]);
        }, 50);
      } else {
        // 单击事件延时300毫秒执行
        this.lastTapTimeoutFunc = setTimeout(function () {
          // 执行方法
          _this18.playSpot(index);
        }, 300);
      }
    },
    /* px转换rpx */pxToRpx: function pxToRpx(px) {
      return 750 * Number.parseInt(px) / this.screenWidth;
    },
    /* 双击点赞添加移除动画 */doubleAddClass: function doubleAddClass(id) {
      var _this19 = this;
      setTimeout(function () {
        _this19.likeList.filter(function (item, index) {
          if (item.id == id) {
            _this19.likeList[index].className = 'doubleImageRemove';
          }
        });
        setTimeout(function () {
          _this19.likeList.filter(function (item, index) {
            if (item.id == id) {
              item.isShow = false;
            }
          });
        }, 400);
      }, 500);
    },
    /* 长按当前视频回调 */longpress: function longpress(item) {
      this.$emit('longpress', item);
    },
    /* 添加视频 */addVodData: function addVodData(dataList, index) {
      var _this20 = this;
      if (index >= 0) {
        var sId = this.vodList[this.changeIndex].tsId; //获取当前播放视频的id
        dataList.filter(function (item, i) {
          item.vodPaly = false; //是否播放、暂停视频
          item.pauseShow = false; //是否显示暂停图标
          item.loadingShow = false; //是否显示loading加载动画
          item.coverOpacity = item.coverShow ? true : false; //是否显示封面
          _this20.totalPlayList.splice(index + 1, 0, item);
        });
        this.totalPlayList.filter(function (item, idx) {
          item.videoIndex = idx;
        });
        /*  获取当前播放视频的下标 */
        var currNum = 0;
        this.totalPlayList.filter(function (item, idx) {
          if (sId == item.tsId) {
            currNum = idx;
          }
        });
        this.vodCurIndex = currNum;
        this.vodList[this.changeIndex].videoIndex = currNum;
        this.getFilterData(sId); //截取、筛选数据
      } else {
        this.lodingData(dataList); //追加在数组后面
      }
    },
    /* 删除视频 */removeVodData: function removeVodData(IdList) {
      var _this21 = this;
      var sId = this.vodList[this.changeIndex].tsId; //获取当前播放视频的id
      var newList = this.totalPlayList.filter(function (item) {
        return !IdList.some(function (ele) {
          return ele === item.tsId;
        });
      });
      newList.filter(function (item, idx) {
        item.videoIndex = idx;
      });
      this.totalPlayList = newList;
      if (!newList.length) {
        //如果视频全部删除掉
        this.vodList = [];
        this.loadShow = false;
        this.$emit('removeAllData', this.vodList);
        return false;
      }
      this.beginLoad = this.totalPlayList.length;
      setTimeout(function () {
        if (_this21.totalPlayList.length <= 3) {
          //数据少于等于3条的时候
          _this21.vodList = [];
          _this21.contentShow = false;
          setTimeout(function () {
            _this21.currentIndex = 0;
            _this21.circular = false; //禁止循环滑动
            _this21.changeIndex = 0;
            _this21.vodIndex = 0;
            _this21.vodCurIndex = 0;
            _this21.vodList = newList;
            _this21.$nextTick(function () {
              _this21.contentShow = true;
              setTimeout(function () {
                _this21.swiperPlay(_this21.vodIndex);
              }, 50);
            });
          }, 50);
          return false;
        }
        if (_this21.vodCurIndex >= newList.length - 1) {
          //数据少于当前播放的下标
          var endNum = _this21.totalPlayList.length - _this21.totalPlayList.length % 3;
          _this21.vodCurIndex = endNum - 1 < 0 ? 0 : endNum - 1;
          _this21.vodList[_this21.changeIndex].videoIndex = _this21.vodCurIndex;
          _this21.getFilterData(sId, 1); //截取、筛选数据
          return false;
        }
        /* 正常数据删除 */
        /*  获取当前播放视频的下标 */
        var currNum = 0;
        var currExist = false;
        _this21.totalPlayList.filter(function (item, idx) {
          if (sId == item.tsId) {
            currNum = idx;
            currExist = true;
          }
        });
        if (currExist) {
          //没有删除当前播放的视频
          _this21.vodCurIndex = currNum;
          _this21.vodList[_this21.changeIndex].videoIndex = currNum;
          _this21.getFilterData(sId, 1); //截取、筛选数据
        } else {
          //有删除当前播放的视频
          if (_this21.vodCurIndex >= newList.length - 1) {
            _this21.vodCurIndex = newList.length - 1;
          }
          _this21.vodList[_this21.changeIndex].videoIndex = _this21.vodCurIndex;
          var cId = _this21.totalPlayList[_this21.vodCurIndex].tsId; //获取当前播放下标视频的id
          _this21.getFilterData(cId, 1); //截取、筛选数据
        }
      }, 30);
    },
    /* 截取、筛选数据 */getFilterData: function getFilterData(sId, play) {
      var _this22 = this;
      /* 截取要播放的视频列表 */
      this.getVodSliceList();
      if (play) {
        this.contentShow = false;
      }
      setTimeout(function () {
        /* 截取的视频数据对3求余数赋值 */
        if (play) {
          _this22.finalList.filter(function (item) {
            if (item.videoIndex % 3 == 0) {
              _this22.$set(_this22.vodList, 0, item);
            } else if (item.videoIndex % 3 == 1) {
              _this22.$set(_this22.vodList, 1, item);
            } else if (item.videoIndex % 3 == 2) {
              _this22.$set(_this22.vodList, 2, item);
            }
          });
        } else {
          _this22.finalList.filter(function (item) {
            if (item.sId != sId) {
              if (item.videoIndex % 3 == 0) {
                _this22.$set(_this22.vodList, 0, item);
              } else if (item.videoIndex % 3 == 1) {
                _this22.$set(_this22.vodList, 1, item);
              } else if (item.videoIndex % 3 == 2) {
                _this22.$set(_this22.vodList, 2, item);
              }
            }
          });
        }
        var appendNum = _this22.totalPlayList.length - _this22.totalPlayList.length % 3;
        /* 如果总视频数量对3求余数不为0，则追加剩余视频数据 */
        if (_this22.vodCurIndex != 0 && _this22.vodList.length == 3 && _this22.vodCurIndex + 1 >= appendNum) {
          var arrList = _this22.totalPlayList.slice(_this22.vodCurIndex + 1, _this22.totalPlayList.length);
          arrList.filter(function (item) {
            _this22.vodList.push(item);
          });
        }
        if (play) {
          _this22.durationNum = 0;
          _this22.contentShow = true;
        }
        _this22.$nextTick(function () {
          var endNum = _this22.totalPlayList.length - _this22.totalPlayList.length % 3;
          if (_this22.vodCurIndex == 0 || _this22.vodCurIndex + 1 >= endNum) {
            _this22.circular = false;
          } else {
            _this22.circular = true;
          }
          if (play) {
            var currentNum = 0;
            _this22.vodList.filter(function (item, index) {
              if (item.tsId == sId) {
                currentNum = index;
              }
            });
            console.log('=========>', currentNum);
            _this22.currentIndex = currentNum;
            _this22.vodIndex = currentNum;
            setTimeout(function () {
              _this22.swiperPlay(_this22.vodIndex);
              _this22.durationNum = 300;
              /* 到底加载数据 */
              if (_this22.vodCurIndex + 1 >= _this22.totalPlayList.length - _this22.totalPlayList.length % 3 && !_this22.loadStart) {
                clearTimeout(_this22.loadTime);
                _this22.loadTime = setTimeout(function () {
                  _this22.$emit('lodData');
                }, 300);
              }
            }, 100);
          }
        });
      }, 50);
    },
    /* 点赞关注操作 */handleInfo: function handleInfo(obj) {
      var _this23 = this;
      this.totalPlayList.filter(function (item, index) {
        if (item.videoIndex == obj.videoIndex) {
          _this23.$set(_this23.totalPlayList, index, obj);
        }
      });
      this.vodList.filter(function (item, index) {
        if (item.videoIndex == obj.videoIndex) {
          _this23.$set(_this23.vodList, index, obj);
        }
      });
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 96:
/*!*************************************************************************************************************!*\
  !*** F:/前端/new/短视频模板 - 副本/components/tsp-video/tsp-video-list/video-v.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_v_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./video-v.vue?vue&type=style&index=0&lang=css& */ 97);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_v_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_v_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_v_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_v_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_video_v_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 97:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/前端/new/短视频模板 - 副本/components/tsp-video/tsp-video-list/video-v.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/components/tsp-video/tsp-video-list/video-v.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/tsp-video/tsp-video-list/video-v-create-component',
    {
        'components/tsp-video/tsp-video-list/video-v-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(91))
        })
    },
    [['components/tsp-video/tsp-video-list/video-v-create-component']]
]);
