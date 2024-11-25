<template>
	<view class="page">
		<view :style="{height:videoStyle.statusBarHeight}"></view>
		<view class="contentBox" v-if="contentShow" :style="{width:videoStyle.width,height:videoStyle.height}">
			<swiper :style="{width:videoStyle.width,height:videoStyle.height}" vertical :circular="circular"
				:duration="durationNum" @change="changeSwiper" @animationfinish="swiperVod" class="swiperBox"
				:current="currentIndex">
				<swiper-item v-for="(item,index) in vodList" :key="index" class="box">
					<view :style="{opacity:shadeNum > 2 ?'0':'1',width:videoStyle.width,height:videoStyle.height}">
						<view class="vodPlayer">
							<video :style="{width:videoStyle.width,height:videoStyle.height}" :src="item.vodUrl"
								:controls="false" :enable-progress-gesture="false" :show-loading="false"
								:show-play-btn="false" :show-center-play-btn="false" :show-fullscreen-btn="false"
								:vslide-gesture-in-fullscreen="false" :show-progress="false"
								:object-fit="item.object_fit" :http-cache="true" :loop="loopPlay"
								:muted="(index == vodIndex && !muteSetup) ? false : true" :id="'myVideo'+index+swId"
								@play="startPlay(index)" @waiting="bufferVod(index)"
								@timeupdate="timeupdateVod($event,index)" @error="errVod(index)"
								@ended="endedVod(index)">
							</video>
						</view>
						<!-- 视频封面 -->
						<view class="vodPause-img" v-if="item.coverShow">
							<image :src="item.coverImg" :mode="item.object_fit == 'cover'?'aspectFill':'widthFix'"
								class="cover-img"
								:style="{opacity:item.coverOpacity?1:0,width:videoStyle.width,height:item.object_fit == 'cover'?videoStyle.height:0}">
							</image>
						</view>
						<!-- 暂停图标 -->
						<view class="vodPause-img" v-if="item.pauseShow">
							<image src="/static/icon/vod-play.png" class="vodPauseImage"></image>
						</view>
						<view @click="handClick($event,index)" @longpress="longpress(item)" class="vodPlayView"
							:style="videoStyle" @touchstart="vodViewStart($event)" @touchmove="vodViewMove($event)"
							@touchend="vodViewEnd($event)"></view>
						<!-- 底部标题、右侧操作栏 -->
						<videoMenu :ref="'menuRef'+index" :vodIndex="vodIndex" :vodCurIndex="vodCurIndex" :item="item"
							:discussNum="totalPlayList.length" :index="index" :sliderDrag="sliderDrag"
							:moveOpacity="moveOpacity" :palyCartoon="palyCartoon" @handleInfo="handleInfo"></videoMenu>
					</view>
					<!-- 底层app图标 -->
					<view class="vodLayer">
						<image src="/static/icon/sound.png" mode="" class="vodLayer-img"></image>
					</view>
				</swiper-item>
			</swiper>
			<!-- 遮罩层，防止滑动过快 -->
			<swiper class="shade-swiper"
				:style="{width:videoStyle.width,height:videoStyle.height,pointerEvents:showShade?'auto':'none',opacity:showShade?'1':'0'}"
				vertical>
				<swiper-item v-for="(item,index) in 1" :key="index" class="box">
					<!-- 底层图标 -->
					<view class="vodLayer">
						<image src="/static/icon/sound.png" mode="" class="vodLayer-img"></image>
					</view>
				</swiper-item>
			</swiper>
			<!-- 底部加载动画 -->
			<view class="pullup" v-if="loadShow">
				<view style="width: 32rpx;height: 32rpx;margin-right: 30rpx;">
					<view class="k-ball7a" style="width: 20rpx;height: 20rpx;"></view>
					<view class="k-ball7b" style="width: 20rpx;height: 20rpx;"></view>
					<view class="k-ball7c" style="width: 20rpx;height: 20rpx;"></view>
					<view class="k-ball7d" style="width: 20rpx;height: 20rpx;"></view>
				</view>
			</view>
			<view class="flooter" :style="{opacity:moveOpacity ? 0 : 1,bottom:speedBottom+'px'}"
				v-if="vodList.length > 0 && beforeVodInfo.sliderShow">
				<!-- 滑动进度条显示时间 -->
				<view class="sliderData" v-if="sliderDrag">
					<view class="slider-text">
						<text>{{formatSeconds(sliderTime)}}</text>
						<text style="font-size: 30rpx;margin: 0 10rpx;">/</text>
						<text style="opacity: 0.5;">{{formatSeconds(videoTime)}}</text>
					</view>
				</view>
				<!-- 进度条 -->
				<view class="sliderBox" :style="{opacity:shadeNum > 2 ?'0':'1'}" @touchmove.stop="touchmoveSlider"
					@touchstart.stop="touchmoveSlider" @touchend.stop="touchendSlider"
					v-if="vodList.length > 0 && beforeVodInfo.sliderShow">
					<view class="slider-item" :style="{height: brightSlider?'18px':'2px'}">
						<!-- 底层 -->
						<view class="slider-box" :class="[brightSlider?'slider-box-active':'']"></view>
						<!-- 滑块 -->
						<!-- <view class="slider-block" :class="[brightSlider?'slider-block-active':'']" :style="{transform:`translateX(${sliderProgress}px)`}"></view> -->
						<!-- 滑动层 -->
						<view class="slider-load" :class="[brightSlider?'slider-load-active':'']"
							:style="{transform: `translateX(${sliderProgress > 0 ? sliderProgress - screenWidth : -screenWidth}px)`}">
						</view>
					</view>
				</view>
				<view v-else :style="{width:screenWidth+'px',height:'18px'}"></view>
				<!-- loading加载动画进度 -->
				<view class="loadSlider" v-if="vodList.length > 0 && beforeVodInfo.loadingShow">
					<view :style="{opacity:brightSlider ? 0 : 1}">
						<view class="loading-slider" ref="loadSlider" :style="{width:screenWidth+'px'}"></view>
					</view>
				</view>
			</view>
		</view>
		<!-- 刷新 -->
		<view class="refresh" v-if="refreshShow">
			<view style="height: 140rpx;"></view>
			<!--  :style="{opacity:refreshOpacity,transform: 'translateY('+refreshclientY+'px)'}" -->
			<view class="refreshBox" :style="{opacity:refreshOpacity}">
				<view style="width: 32rpx;height: 32rpx;"></view>
				<view>下拉刷新内容</view>
				<view style="width: 32rpx;height: 32rpx;margin-right: 30rpx;">
					<view class="k-ball7a k-paused" style="width: 20rpx;height: 20rpx;"
						:class="[refreshOpen?'k-running':'']"></view>
					<view class="k-ball7b k-paused" style="width: 20rpx;height: 20rpx;"
						:class="[refreshOpen?'k-running':'']"></view>
					<view class="k-ball7c k-paused" style="width: 20rpx;height: 20rpx;"
						:class="[refreshOpen?'k-running':'']"></view>
					<view class="k-ball7d k-paused" style="width: 20rpx;height: 20rpx;"
						:class="[refreshOpen?'k-running':'']"></view>
				</view>
			</view>
		</view>
		<!-- 点赞桃心 -->
		<view class="doubleImage" v-for="(item,index) in likeList" :key="index" :ref="item.id+'Ref'"
			:class="[item.className]" :style="{width: item.width,height:item.height,top:item.top,left:item.left}">
			<image src="/static/icon/selectTaoxin.png" v-if="item.isShow"
				:style="{width: item.width,height:item.height,transform: `rotate(${item.rotate})`}" />
		</view>
	</view>
</template>
<script>
	import videoMenu from '../tsp-menu/tsp-menu-v.vue'
	/* 
 lodData 上拉加载回调
 refreshData 下拉加载回调
 */
	export default {
		components: {
			videoMenu
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
			},
		},
		data() {
			return {
				videoStyle: {},
				screenWidth: 0, //屏幕的宽度
				screenHeight: 0, //屏幕的高度
				videoCtx: null,
				vodIndex: 0, // 当前视频下标
				currentIndex: 0, //定位播放的下标
				contentShow: false,
				loadShow: false,
				autoplayVideo: true, // 初始加载完成是否自动播放
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
				changeIndex: 0, //current 下标
				beforeVodInfo: {}, //当前播放视频对象
				vodCurIndex: 0, //当前播放视频对象下标
				circular: true,
				durationNum: 300,
				showShade: false, //显示遮罩swiper
				openSpot: false,
				shadeNum: 0,
				bufferTime: null, //缓冲视频显示加载动画防抖
				sliderProgress: 0, //进度条滑动层宽度
				sliderTime: 0, //显示滑动进度条时变化的时间
				videoTime: 0, //视频时长 时间
				endTime: 0, //滑动进度条最终的时间
				sliderDrag: false, //是否在拖动进度
				brightSlider: false, //是否显示光亮的进度条
				sliderEndTime: null, //滑动结束隐藏光亮进度条时间延迟
				bufferNum: null, //显示loading加载进度的时间条件
				bufferShow: false, //显示loading加载进度的条件
				playOpen: false, //视频播放失败，是否重播视频的条件
				failTime: null, //视频播放失败，重播视频的时间
				repeatTime: null,
				palyCartoon: false, //是否播放旋转头像
				shakePlay: false, //是否有防抖视频播放
				touchClientY: 0, //触碰的坐标
				moveClientY: 0, //移动的坐标
				moveOpacity: false, //是否透明
				refreshShow: false, //是否显示下拉刷新
				refreshOpacity: 0, //下拉刷新的透明度
				refreshclientY: 0, //下拉刷新的坐标
				refreshOpen: false, //下拉刷新的触发条件
				playErrTime: null,
				interceptIndex: [],
				loadTime: null,
				beginLoad: 0,
				loadStart: false,
				muteSetup: false, //是否设置为静音
				/* 双击点赞部分 */
				lastTapDiffTime: 0, //上次点击时间
				lastTapTimeoutFunc: null, //单击事件事件函数
				likeList: [], //双击点赞显示的桃心数据
				likeId: 1,
				doubleOutTime: null,
				clearDoubleTime: null,
				tailPlay: false
			}
		},
		created() {
			const deviceInfo = uni.getSystemInfoSync()
			let topBarHeight = this.showBarHeight ? deviceInfo.statusBarHeight : 0; //statusBarHeight 状态栏高度
			this.videoStyle.statusBarHeight = topBarHeight + 'px';
			this.videoStyle.width = deviceInfo.screenWidth + 'px';
			this.screenWidth = deviceInfo.screenWidth //屏幕的宽度
			this.screenHeight = deviceInfo.screenHeight //屏幕的高度
			if (this.tabBarShow == 1) { //减去自定义底部栏的高度
				this.videoStyle.height = (deviceInfo.screenHeight - topBarHeight - this.tabBarHeight) + 'px';
			} else {
				this.videoStyle.height = deviceInfo.windowHeight - topBarHeight + 'px';
			}
		},
		watch: {
			vodCurIndex(newIndex, oldIndex) {
				/* 上一个视频处理 */
				if (oldIndex >= 0) {
					let oldObj = null
					this.vodList.filter((item, index) => {
						if (oldIndex == item.videoIndex) {
							item.coverOpacity = item.coverShow ? true : false //是否显示封面
							item.vodPaly = false;
							item.pauseShow = false;
							item.loadingShow = false;
							uni.createVideoContext('myVideo' + index + this.swId, this).pause();
						}
					})
				}
			}
		},
		methods: {
			/* 初始加载视频 */
			initVod(dataList, index) {
				this.autoplayVideo = this.autoplay
				if (index) {
					this.durationNum = 0
				}
				let playIndex = index ? index : 0
				/* 拼接参数数据 */
				dataList.filter((item, i) => {
					item.videoIndex = i
					item.vodPaly = (i == playIndex ? true : false); //是否播放、暂停视频
					item.pauseShow = false //是否显示暂停图标
					item.loadingShow = false //是否显示loading加载动画
					item.coverOpacity = item.coverShow ? true : false //是否显示封面
				})
				dataList.sort((a, b) => {
					return a.videoIndex - b.videoIndex
				})
				this.totalPlayList = dataList;
				this.contentShow = dataList.length > 0 ? true : false
				this.loadShow = dataList.length > 0 ? true : false
				if (this.totalPlayList.length >= 3) {
					this.vodList = [{}, {}, {}]
				} else {
					this.vodList = dataList
				}
				this.getPlayVod(playIndex, 'initialLoad')
			},
			/* 选择指定视频下标播放 */
			scrollToVod(playIndex) {
				this.durationNum = 0
				this.getPlayVod(playIndex, null)
			},
			/* 根据指定下标播放 */
			getPlayVod(playIndex, uType) {
				let currentNum = 0
				this.vodCurIndex = playIndex
				setTimeout(() => {
					if (this.totalPlayList.length >= 3) {
						let amount = this.totalPlayList.length; //总视频数量
						let showVod = amount % 3
						let starIdx = playIndex - 1 < 0 ? 0 : playIndex - 1
						let endIdx = playIndex + 2
						let endNum = amount - showVod

						if (playIndex == 0 || (playIndex + 1) >= endNum) {
							this.circular = false //第一个视频和最后视频禁止循环滑动
							let resultList = []
							if (playIndex == 0) {
								resultList = JSON.parse(JSON.stringify(this.totalPlayList.slice(starIdx,
									playIndex + 3)))
							} else {
								resultList = JSON.parse(JSON.stringify(this.totalPlayList.slice(endNum - 3,
									endNum)))
							}
							this.setSliceList(resultList) /* 截取的视频数据对3求余数赋值 */
							/* 如果总视频数量对3求余数不为0，则追加剩余视频数据 */
							if (playIndex != 0) {
								let arrList = JSON.parse(JSON.stringify(this.totalPlayList.slice(endNum, amount)))
								arrList.filter(item => {
									this.vodList.push(item)
								})
								if (this.totalPlayList.length >= this.totalvod) {
									this.loadShow = false
								}
							}
						} else {
							this.circular = true
							let resultList = JSON.parse(JSON.stringify(this.totalPlayList.slice(starIdx, endIdx)))
							this.setSliceList(resultList) /* 截取的视频数据对3求余数赋值 */
						}
					} else {
						this.circular = false //第一个视频和最后视频禁止循环滑动
					}
					this.getVodInfo();
					this.vodList.filter((item, index) => {
						if (this.vodCurIndex == item.videoIndex) {
							currentNum = index
						}
					})
					/* 到底加载数据 */
					if ((this.vodCurIndex + 1) >= this.totalPlayList.length - this.totalPlayList.length % 3 && this
						.totalPlayList.length >= 3) {
						this.loadStart = true
						clearTimeout(this.loadTime)
						this.loadTime = setTimeout(() => {
							this.beginLoad = this.totalPlayList.length
							if ((this.vodCurIndex + 1) == this.beginLoad) {
								this.vodList[0].videoIndex = this.beginLoad
								this.tailPlay = true
							}
							this.$emit('lodData')
						}, 300)
					}
					if (playIndex > 0) { //开启定位播放
						this.currentIndex = currentNum
					}
					this.changeIndex = currentNum
					this.vodIndex = currentNum
				}, 100)
				setTimeout(() => {
					this.durationNum = 300
					if (uType == 'initialLoad') {
						if (this.autoplayVideo) {
							this.swiperPlay(currentNum);
						} else {
							this.beforeVodInfo.vodPaly = false;
							this.beforeVodInfo.pauseShow = true;
						}
					} else {
						this.swiperPlay(currentNum);
					}
				}, 200)
			},
			/* 赋值截取的数据 */
			setSliceList(resData) {
				resData.filter(item => {
					if (item.videoIndex % 3 == 0) {
						this.vodList[0] = item
					} else if (item.videoIndex % 3 == 1) {
						this.vodList[1] = item
					} else if (item.videoIndex % 3 == 2) {
						this.vodList[2] = item
					}
				})
			},
			/* 到底加载方法 */
			lodingData(dataList) {
				let num = this.totalPlayList.length; //获取视频数据的长度
				if (dataList && dataList.length == 0) return
				dataList.filter((item, i) => {
					item.videoIndex = num + i
					item.vodPaly = false //是否播放、暂停视频
					item.pauseShow = false //是否显示暂停图标
					item.loadingShow = false //是否显示loading加载动画
					item.coverOpacity = item.coverShow ? true : false //是否显示封面
				})
				this.totalPlayList = this.totalPlayList.concat(dataList); //拼接数据
				this.$nextTick(() => {
					/* 截取要播放的视频列表 */
					this.getVodSliceList()
					setTimeout(() => {
						/* 截取的视频数据对3求余数赋值 */
						this.finalList.filter(item => {
							if (item.videoIndex != this.vodCurIndex) {
								if (item.videoIndex % 3 == 0) {
									this.vodList[0] = item
								} else if (item.videoIndex % 3 == 1) {
									this.vodList[1] = item
								} else if (item.videoIndex % 3 == 2) {
									this.vodList[2] = item
								}
							}
						})
						let appendNum = this.totalvod - (this.totalvod % 3)
						/* 如果总视频数量对3求余数不为0，则追加剩余视频数据 */
						if (this.vodCurIndex != 0 && this.vodList.length == 3 && (this.vodCurIndex + 1) >=
							appendNum && this.totalvod > 0) {
							let arrList = this.totalPlayList.slice(this.vodCurIndex + 1, this.totalPlayList
								.length)
							arrList.filter(item => {
								this.vodList.push(item)
							})
						}
						this.$nextTick(() => {
							this.circular = true
						})
						if ((this.vodCurIndex + 1) == this.beginLoad) {
							this.vodList[0].videoIndex = this.beginLoad
							this.tailPlay = true
						}
					}, 100)
				})
			},
			/* 重新加载 */
			refreshSquare(dataList, index) {
				let playIndex = index ? index : 0
				this.resetData(); /* 重置状态数据 */
				this.refreshShow = false; //隐藏下拉刷新
				this.refreshOpen = false; //下拉刷新的触发条件
				this.vodCurIndex = 0
				this.currentIndex = 0
				this.vodList = []
				this.totalPlayList = []
				setTimeout(() => {
					this.initVod(dataList, playIndex); //初始加载视频
				}, 100)
			},
			/* 静音设置 */
			muteVideo(val) {
				this.muteSetup = val
			},
			/* onShow播放视频 */
			showPlay() {
				if (this.vodIndex != null && this.contentShow && !this.beforeVodInfo.vodPaly) {
					this.videoPlay(this.vodIndex);
				}
			},
			/* onHide暂停视频 */
			hidePause() {
				if (this.vodIndex != null && this.contentShow && this.beforeVodInfo.vodPaly) {
					this.videoPause(this.vodIndex);
				}
				this.brightSlider = false; //隐藏光亮的进度条
			},
			/* 点击暂停、播放视频 */
			playSpot(index) {
				if (this.beforeVodInfo.vodPaly) { //暂停
					this.videoPause(index)
					this.beforeVodInfo.pauseShow = true; //显示暂停图标
				} else { //播放
					this.videoPlay(index)
					this.beforeVodInfo.pauseShow = false; //关闭暂停图标
				}
			},
			/* 播放视频 */
			videoPlay(index) {
				this.openSpot = true
				this.getVodInfo() //获取当前视频播放对象
				this.showShade = false //是否显示遮罩swiper
				this.beforeVodInfo.vodPaly = true;
				this.beforeVodInfo.pauseShow = false; //关闭暂停图标
				this.brightSlider = false; //隐藏光亮的进度条
				this.loadStart = false
				this.$nextTick(() => {
					this.moveOpacity = false
					uni.createVideoContext('myVideo' + index + this.swId, this).play();
				})
			},
			/* 暂停视频 */
			videoPause(index) {
				this.getVodInfo() //获取当前视频播放对象
				clearTimeout(this.sliderEndTime)
				this.beforeVodInfo.vodPaly = false;
				if (this.vodIndex == index && this.beforeVodInfo.sliderShow) {
					this.brightSlider = true; //显示光亮的进度条
				}
				this.$nextTick(() => {
					uni.createVideoContext('myVideo' + index + this.swId, this).pause();
				})
			},
			changeSwiper(ev) {
				let curIndex = ev.detail.current
				let videoIndex = this.vodList[curIndex].videoIndex
				this.moveOpacity = true
				this.shadeNum++
				this.openSpot = false
				this.autoplayVideo = true
				let vodTotal = this.totalPlayList.length % 3
				if ((videoIndex == 0 || (videoIndex + 1) == this.totalPlayList.length - vodTotal) && this.shadeNum > 1) {
					this.showShade = true //是否显示遮罩swiper
				}
				this.changeIndex = curIndex
				this.currentIndex = curIndex
				/* 截取要播放的视频列表 */
				this.vodCurIndex = videoIndex //当前视频下标
				this.getVodSliceList()
				this.getVodInfo() //获取当前视频播放对象
			},
			/* 要播放视频的下标 */
			swiperVod(ev) {
				let curIndex = ev.detail.current
				if (this.openSpot) return
				this.resetData(); /* 重置状态数据 */
				this.moveOpacity = false
				this.shadeNum = 0
				this.showShade = false //是否显示遮罩swiper
				this.setSliceList(this.finalList) /* 截取的视频数据对3求余数赋值 */
				let endNum = this.totalPlayList.length - (this.totalPlayList.length % 3)
				let endPlay = false
				if (this.vodCurIndex == 0 || (this.vodCurIndex + 1) >= endNum) {
					this.circular = false
					let appendNum = this.totalvod - (this.totalvod % 3)
					/* 如果总视频数量对3求余数不为0，则追加剩余视频数据 */
					if (this.vodCurIndex != 0 && this.vodList.length == 3 && (this.vodCurIndex + 1) >= appendNum && this
						.totalvod > 0) {
						let oldIndex = this.vodCurIndex
						let arrList = this.totalPlayList.slice(this.vodCurIndex + 1, this.totalPlayList.length)
						arrList.filter(item => {
							this.vodList.push(item)
						})
						/* endPlay = true
						this.againLocatePlay() // 重新定位播放 */
					}

				} else {
					let loadNum = this.beginLoad - (this.beginLoad % 3)
					/* 由于从外面指定的播放下标为当前数据的末端，比如10条数据，进来播放下标为8，然后又追加了余数剩下的视频，
					因为是末端所以又触发了分页加载数据，所以不删除多余的视频 */
					if (this.beginLoad > 0 && (this.vodCurIndex + 1) >= loadNum && (this.vodCurIndex + 1) <= this
						.beginLoad) {
						// console.log('不删除多余的视频')
						if ((this.vodCurIndex + 1) == this.beginLoad) {
							this.vodList[0].videoIndex = this.beginLoad
							this.tailPlay = true
						}
					} else {
						if (this.vodList.length > 3) {
							this.vodList.length = 3
							// this.againLocatePlay() // 重新定位播放
						}
					}
					this.$nextTick(() => {
						this.circular = true
					})
				}
				if (this.totalvod > 0) {
					this.loadShow = this.totalPlayList.length >= this.totalvod ? false : true
				}
				/* 如果总视频数量对3求余数不为0，则追加剩余视频数据，有分页加载后重新定位要播放的视频下标 */
				if ((this.vodCurIndex + 1) != this.beginLoad && this.tailPlay && !endPlay) {
					this.tailPlay = false
					this.durationNum = 0
					let currentNum = 0
					this.$nextTick(() => {
						this.vodList.filter((item, index) => {
							if (item.videoIndex == this.beginLoad) {
								currentNum = index
							}
						})
						this.currentIndex = currentNum //定位播放
						this.changeIndex = currentNum
						setTimeout(() => {
							this.durationNum = 300
							this.beginLoad = 0
						}, 100)
					})
				}
				if (!endPlay) {
					this.vodIndex = this.changeIndex
					this.swiperPlay(this.vodIndex);
					this.$emit('swiperChange', this.vodList[this.vodIndex])
				}
				/* 到底加载数据 */
				if ((this.vodCurIndex + 1) >= this.totalPlayList.length - this.totalPlayList.length % 3 && !this
					.loadStart) {
					clearTimeout(this.loadTime)
					this.loadTime = setTimeout(() => {
						this.$emit('lodData')
					}, 300)
				}
			},
			/* 重新定位播放 */
			againLocatePlay() {
				let currentNum = 0
				this.vodList.filter((item, index) => {
					if (this.vodCurIndex == item.videoIndex) {
						currentNum = index
					}
				})
				this.currentIndex = currentNum
				this.vodIndex = currentNum
				setTimeout(() => {
					this.swiperPlay(this.vodIndex);
					this.durationNum = 300
				}, 100)
			},
			/* 获取当前视频播放对象 */
			getVodInfo() {
				this.vodList.filter(item => {
					if (this.vodCurIndex == item.videoIndex) {
						this.beforeVodInfo = item
					}
				})
			},
			/* 截取要播放的视频列表 */
			getVodSliceList(load) {
				let videoIndex = this.vodList[this.changeIndex].videoIndex
				let starIdx = videoIndex - 1 < 0 ? 0 : (load ? videoIndex : videoIndex - 1)
				let endIdx = videoIndex == 0 ? 3 : videoIndex + 2
				let resultList = JSON.parse(JSON.stringify(this.totalPlayList.slice(starIdx, endIdx)))
				resultList.filter(item => {
					if (item.videoIndex % 3 == 0) {
						this.vodList[0].videoIndex = item.videoIndex
					} else if (item.videoIndex % 3 == 1) {
						this.vodList[1].videoIndex = item.videoIndex
					} else if (item.videoIndex % 3 == 2) {
						this.vodList[2].videoIndex = item.videoIndex
					}
				})
				this.finalList = resultList
				// console.log(resultList)
			},
			/* swiper播放视频 */
			swiperPlay(newIndex) {
				this.playOpen = false;
				clearInterval(this.failTime)
				clearInterval(this.repeatTime)
				this.muteVideo(false)
				/* 播放新视频 */
				if (uni.createVideoContext('myVideo' + newIndex + this.swId, this)) {
					this.shakePlay = false
					this.videoPlay(newIndex);
				}
				this.$refs['menuRef' + newIndex + ''][0].likeeffect = null; //重置点赞的显示动画条件
			},
			/* 当开始/继续播放时 */
			startPlay(index) {
				if (this.vodIndex == index) {
					this.playOpen = false;
					if (this.beforeVodInfo.rotateImgShow) {
						this.palyCartoon = true; //开启旋转头像动画 
					}
					clearInterval(this.failTime)
					clearInterval(this.repeatTime)
				}
			},
			/* 视频出现缓冲 */
			bufferVod(index) {
				if (this.vodList.length > 0 && this.changeIndex == this.vodIndex && !this.bufferShow && this.beforeVodInfo
					.vodPaly) {
					this.playOpen = true;
					this.scheduleLoad()
				}
			},
			/* 视频播放失败 */
			errVod(index) {
				clearTimeout(this.playErrTime)
				this.playErrTime = setTimeout(() => {
					if (this.vodList.length > 0 && this.changeIndex == this.vodIndex && !this.bufferShow && this
						.beforeVodInfo.vodPaly) {
						this.playOpen = true;
						this.palyCartoon = false
						this.scheduleLoad()
					}
				}, 300)
			},
			/* 播放进度变化时触发 */
			timeupdateVod(ev, index) {
				if (this.vodIndex != index) return false
				this.beforeVodInfo.coverOpacity = false; //隐藏视频封面
				if (!this.sliderDrag) { //判断拖拽完成后才触发更新，避免播放是拖拽冲突失效
					this.videoTime = ev.detail.duration; //视频时间
					this.sliderTime = ev.detail.currentTime; //已播放时间
					this.sliderProgress = (ev.detail.currentTime / ev.detail.duration) * this.screenWidth; //播放进度
				}
				/* 关闭加载动画 */
				if (this.vodList.length > 0) {
					this.bufferNum = ev.detail.currentTime
					this.bufferShow = false;
					this.beforeVodInfo.loadingShow = false;
					clearTimeout(this.bufferTime)
					clearInterval(this.failTime)
					clearInterval(this.repeatTime)
				}
			},
			/* 显示进度加载动画 */
			scheduleLoad() {
				if (!this.bufferShow) {
					this.bufferShow = true;
					this.bufferTime = setTimeout(() => {
						this.beforeVodInfo.loadingShow = true
						if (this.playOpen) {
							this.vodLoad();
						}
					}, 2500)
				}
			},
			/* 重新播放视频 */
			vodLoad() {
				/* 视频播放失败，重新播放视频 */
				if (this.playOpen) {
					this.playOpen = false;
					if (this.sliderTime == 0) {
						uni.createVideoContext('myVideo' + this.vodIndex + this.swId, this).stop()
					}
					this.failTime = setTimeout(() => {
						this.playOpen = true;
						this.bufferShow = false;
						this.videoPlay(this.vodIndex)
					}, 1000)
				}
			},
			/* 视频播放结束 */
			endedVod(index) {
				if (this.vodIndex == index && this.nextPlay && (this.vodCurIndex + 1) < this.totalPlayList.length) {
					if (this.vodIndex < 2) {
						this.vodIndex += 1
					} else {
						this.vodIndex = 0
					}
					this.$nextTick(() => {
						this.currentIndex = this.vodIndex
						this.$forceUpdate();
					})
				}
			},
			// 根据秒获取时间
			formatSeconds(a) {
				let hh = parseInt(a / 3600);
				let mm = parseInt((a - hh * 3600) / 60);
				if (mm < 10) mm = "0" + mm;
				let ss = parseInt((a - hh * 3600) % 60);
				if (ss < 10) ss = "0" + ss;
				if (hh < 10) hh = hh == 0 ? '' : `0${hh}:`;
				let length = hh + mm + ":" + ss;
				if (a >= 0) {
					return length;
				} else {
					return "00:00";
				}
			},
			/* 进度条滑动 */
			touchmoveSlider(event) {
				// #ifndef APP-NVUE
				let objclientX = event.changedTouches[0].clientX
				// #endif

				// #ifdef APP-NVUE
				let objclientX = event.changedTouches[0].screenX
				// #endif
				this.sliderDrag = true; //是否在拖动进度
				if (objclientX >= 0 && objclientX <= (this.screenWidth - 2)) {
					clearTimeout(this.sliderEndTime)
					this.brightSlider = true; //显示光亮的进度条
					this.sliderProgress = objclientX
					let num = this.sliderProgress / (this.screenWidth - 2)
					this.sliderTime = num * this.videoTime; //滑动期间显示的时间
					this.endTime = num * this.videoTime; //最终滑动的时间
				}
			},
			/* 进度条滑动结束 */
			touchendSlider() {
				this.sliderDrag = false;
				let videoCtx = uni.createVideoContext('myVideo' + this.vodIndex + this.swId, this)
				videoCtx.seek(this.endTime);
				videoCtx.play();
				this.beforeVodInfo.vodPaly = true; //开启播放
				this.beforeVodInfo.pauseShow = false; //关闭暂停图标
				this.sliderEndTime = setTimeout(() => {
					this.brightSlider = false; //隐藏光亮的进度条
				}, 2000)
			},
			/* 触碰的坐标 */
			vodViewStart(e) {
				// #ifndef APP-NVUE
				this.touchClientY = e.changedTouches[0].clientY
				// #endif
				// #ifdef APP-NVUE
				this.touchClientY = e.changedTouches[0].screenY
				// #endif
			},
			/* 上下滑动的坐标 */
			vodViewMove(e) {
				// #ifndef APP-NVUE
				this.moveClientY = e.changedTouches[0].clientY - this.touchClientY
				// #endif
				// #ifdef APP-NVUE
				this.moveClientY = e.changedTouches[0].screenY - this.touchClientY
				// #endif
				/* 是否透明进度条 */
				if (this.moveClientY > 0 || this.moveClientY < 0) {
					this.moveOpacity = true
				} else {
					this.moveOpacity = false
				}
				/* 显示下拉刷新 */
				if (this.loadOpen && this.vodCurIndex == 0 && !this.refreshOpen) {
					if (this.moveClientY > 10) {
						this.refreshShow = true; //显示下拉刷新
						if (this.moveClientY > 10 && this.moveClientY <= 60 && this.refreshShow) {
							this.refreshOpacity = (this.moveClientY / 60)
							this.refreshclientY = (this.moveClientY / 2)
						}
					} else {
						this.refreshShow = false
					}
				}
			},
			/* 滑动结束的坐标 */
			vodViewEnd(e) {
				// #ifndef APP-NVUE
				this.moveClientY = e.changedTouches[0].clientY - this.touchClientY
				// #endif
				// #ifdef APP-NVUE
				this.moveClientY = e.changedTouches[0].screenY - this.touchClientY
				// #endif
				/* 是否透明进度条 */
				this.moveOpacity = false
				/* 隐藏下拉刷新 */
				if (this.loadOpen && this.vodCurIndex == 0 && this.refreshShow) {
					/* 未达到刷新条件回弹隐藏 */
					if (this.moveClientY > 1 && this.moveClientY < 60 && !this.refreshOpen) {
						this.refreshOpacity = 0
						this.refreshclientY = 0
						setTimeout(() => {
							this.refreshShow = false
						}, 300)
					} else {
						/* 达到刷新条件 */
						if (this.refreshOpen) return
						this.refreshOpen = true;
						this.$emit('refreshData')
					}
				}
			},
			/* 重置状态数据 */
			resetData() {
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
			handClick(event, index) {
				if (!this.doubleOpen) { //没有开启双击
					this.playSpot(index)
					return false
				}
				// 当前时间
				const curTime = new Date().getTime();
				// 上次点击时间
				const lastTime = this.lastTapDiffTime;
				// 更新上次点击时间
				this.lastTapDiffTime = curTime;
				// 两次点击间隔小于300ms, 认为是双击
				const diff = curTime - lastTime;
				if (diff < 300) {
					// 执行方法
					// 成功触发双击事件时，取消单击事件的执行
					clearTimeout(this.lastTapTimeoutFunc);
					if (!this.vodList[this.vodIndex].fabulousShow) {
						this.$refs['menuRef' + this.vodIndex + ''][0].fabulousBtn(index); //视频点赞
					}
					if (!this.doubleHeart) return //双击点赞屏幕是否显示桃心
					if (this.doubleOutTime) return
					this.doubleOutTime = setTimeout(() => {
						// #ifndef APP-NVUE
						let topY = event.changedTouches[0].clientY
						let leftX = event.changedTouches[0].clientX
						// #endif
						// #ifdef APP-NVUE
						let topY = event.changedTouches[0].screenY
						let leftX = event.changedTouches[0].screenX
						// #endif
						let rotateList = ['0deg', '15deg', '-15deg']
						let rNum = Math.floor(Math.random() * 3)
						let likeObj = {
							id: this.likeId++,
							width: this.pxToRpx(95) + 'rpx',
							height: this.pxToRpx(95) + 'rpx',
							top: this.pxToRpx(topY) - this.pxToRpx(140) + 'rpx',
							left: this.pxToRpx(leftX) - this.pxToRpx(95 / 2) + 'rpx',
							rotate: rotateList[rNum],
							className: '',
							isShow: true
						}
						this.likeList.push(likeObj)
						this.doubleAddClass(likeObj.id)
						this.doubleOutTime = null
						clearTimeout(this.clearDoubleTime)
						this.clearDoubleTime = setTimeout(() => {
							this.likeList = []
						}, 1500)
						this.$emit('doubleClick', this.vodList[this.vodIndex])
					}, 50)
				} else {
					// 单击事件延时300毫秒执行
					this.lastTapTimeoutFunc = setTimeout(() => {
						// 执行方法
						this.playSpot(index)
					}, 300);
				}
			},
			/* px转换rpx */
			pxToRpx(px) {
				return (750 * Number.parseInt(px)) / this.screenWidth
			},
			/* 双击点赞添加移除动画 */
			doubleAddClass(id) {
				setTimeout(() => {
					this.likeList.filter((item, index) => {
						if (item.id == id) {
							this.likeList[index].className = 'doubleImageRemove'
						}
					})
					setTimeout(() => {
						this.likeList.filter((item, index) => {
							if (item.id == id) {
								item.isShow = false
							}
						})
					}, 400)
				}, 500)
			},
			/* 长按当前视频回调 */
			longpress(item) {
				this.$emit('longpress', item)
			},
			/* 添加视频 */
			addVodData(dataList, index) {
				if (index >= 0) {
					let sId = this.vodList[this.changeIndex].tsId //获取当前播放视频的id
					dataList.filter((item, i) => {
						item.vodPaly = false //是否播放、暂停视频
						item.pauseShow = false //是否显示暂停图标
						item.loadingShow = false //是否显示loading加载动画
						item.coverOpacity = item.coverShow ? true : false //是否显示封面
						this.totalPlayList.splice(index + 1, 0, item);
					})
					this.totalPlayList.filter((item, idx) => {
						item.videoIndex = idx
					})
					/*  获取当前播放视频的下标 */
					let currNum = 0
					this.totalPlayList.filter((item, idx) => {
						if (sId == item.tsId) {
							currNum = idx
						}
					})
					this.vodCurIndex = currNum
					this.vodList[this.changeIndex].videoIndex = currNum
					this.getFilterData(sId); //截取、筛选数据
				} else {
					this.lodingData(dataList); //追加在数组后面
				}
			},
			/* 删除视频 */
			removeVodData(IdList) {
				let sId = this.vodList[this.changeIndex].tsId //获取当前播放视频的id
				let newList = this.totalPlayList.filter(item => !IdList.some(ele => ele === item.tsId))
				newList.filter((item, idx) => {
					item.videoIndex = idx
				})
				this.totalPlayList = newList
				if (!newList.length) { //如果视频全部删除掉
					this.vodList = []
					this.loadShow = false
					this.$emit('removeAllData', this.vodList)
					return false
				}
				this.beginLoad = this.totalPlayList.length
				setTimeout(() => {
					if (this.totalPlayList.length <= 3) { //数据少于等于3条的时候
						this.vodList = []
						this.contentShow = false
						setTimeout(() => {
							this.currentIndex = 0
							this.circular = false //禁止循环滑动
							this.changeIndex = 0
							this.vodIndex = 0
							this.vodCurIndex = 0
							this.vodList = newList
							this.$nextTick(() => {
								this.contentShow = true
								setTimeout(() => {
									this.swiperPlay(this.vodIndex);
								}, 50)
							})
						}, 50)
						return false;
					}
					if (this.vodCurIndex >= newList.length - 1) { //数据少于当前播放的下标
						let endNum = this.totalPlayList.length - (this.totalPlayList.length % 3)
						this.vodCurIndex = endNum - 1 < 0 ? 0 : endNum - 1
						this.vodList[this.changeIndex].videoIndex = this.vodCurIndex
						this.getFilterData(sId, 1); //截取、筛选数据
						return false;
					}
					/* 正常数据删除 */
					/*  获取当前播放视频的下标 */
					let currNum = 0
					let currExist = false
					this.totalPlayList.filter((item, idx) => {
						if (sId == item.tsId) {
							currNum = idx
							currExist = true
						}
					})
					if (currExist) { //没有删除当前播放的视频
						this.vodCurIndex = currNum
						this.vodList[this.changeIndex].videoIndex = currNum
						this.getFilterData(sId, 1); //截取、筛选数据
					} else { //有删除当前播放的视频
						if (this.vodCurIndex >= newList.length - 1) {
							this.vodCurIndex = newList.length - 1
						}
						this.vodList[this.changeIndex].videoIndex = this.vodCurIndex
						let cId = this.totalPlayList[this.vodCurIndex].tsId //获取当前播放下标视频的id
						this.getFilterData(cId, 1); //截取、筛选数据
					}
				}, 30)
			},
			/* 截取、筛选数据 */
			getFilterData(sId, play) {
				/* 截取要播放的视频列表 */
				this.getVodSliceList()
				if (play) {
					this.contentShow = false
				}
				setTimeout(() => {
					/* 截取的视频数据对3求余数赋值 */
					if (play) {
						this.finalList.filter(item => {
							if (item.videoIndex % 3 == 0) {
								this.$set(this.vodList, 0, item)
							} else if (item.videoIndex % 3 == 1) {
								this.$set(this.vodList, 1, item)
							} else if (item.videoIndex % 3 == 2) {
								this.$set(this.vodList, 2, item)
							}
						})
					} else {
						this.finalList.filter(item => {
							if (item.sId != sId) {
								if (item.videoIndex % 3 == 0) {
									this.$set(this.vodList, 0, item)
								} else if (item.videoIndex % 3 == 1) {
									this.$set(this.vodList, 1, item)
								} else if (item.videoIndex % 3 == 2) {
									this.$set(this.vodList, 2, item)
								}
							}
						})
					}
					let appendNum = this.totalPlayList.length - (this.totalPlayList.length % 3)
					/* 如果总视频数量对3求余数不为0，则追加剩余视频数据 */
					if (this.vodCurIndex != 0 && this.vodList.length == 3 && (this.vodCurIndex + 1) >= appendNum) {
						let arrList = this.totalPlayList.slice(this.vodCurIndex + 1, this.totalPlayList.length)
						arrList.filter(item => {
							this.vodList.push(item)
						})
					}
					if (play) {
						this.durationNum = 0
						this.contentShow = true
					}
					this.$nextTick(() => {
						let endNum = this.totalPlayList.length - (this.totalPlayList.length % 3)
						if (this.vodCurIndex == 0 || (this.vodCurIndex + 1) >= endNum) {
							this.circular = false
						} else {
							this.circular = true
						}
						if (play) {
							let currentNum = 0
							this.vodList.filter((item, index) => {
								if (item.tsId == sId) {
									currentNum = index
								}
							})
							console.log('=========>', currentNum)
							this.currentIndex = currentNum
							this.vodIndex = currentNum
							setTimeout(() => {
								this.swiperPlay(this.vodIndex);
								this.durationNum = 300
								/* 到底加载数据 */
								if ((this.vodCurIndex + 1) >= this.totalPlayList.length - this
									.totalPlayList.length % 3 && !this.loadStart) {
									clearTimeout(this.loadTime)
									this.loadTime = setTimeout(() => {
										this.$emit('lodData')
									}, 300)
								}
							}, 100)
						}
					})
				}, 50)
			},
			/* 点赞关注操作 */
			handleInfo(obj) {
				this.totalPlayList.filter((item, index) => {
					if (item.videoIndex == obj.videoIndex) {
						this.$set(this.totalPlayList, index, obj)
					}
				})
				this.vodList.filter((item, index) => {
					if (item.videoIndex == obj.videoIndex) {
						this.$set(this.vodList, index, obj)
					}
				})
			},
		}
	}
</script>

<style>
	.page {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.contentBox {
		position: relative;
	}

	.shade-swiper {
		position: absolute;
		pointer-events: none;
		opacity: 0;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 99;
	}

	.swiperBox {
		position: relative;
		z-index: 2;
	}

	.box {
		position: relative;
	}

	.vodLayer {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
		background-color: #000000;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.vodLayer-img {
		width: 150rpx;
		height: 150rpx;
		opacity: 0.8;
	}

	.cover-img {
		width: 750rpx;
		height: auto;
	}

	.vodPlayer {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 2;
		width: 100%;
		height: 100%;
	}

	.vodPlayView {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.1);
		z-index: 7;
	}

	.vodPause-img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.1);
		z-index: 4;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}

	.vodPauseImage {
		width: 134rpx;
		height: 134rpx;
		opacity: 0.35;
		animation: vodPauseName 0.1s linear forwards;
	}

	@keyframes vodPauseName {
		0% {
			transform: scale(2);
			opacity: 0;
		}

		100% {
			transform: scale(1);
			opacity: 0.35;
		}
	}

	/* loading动画 */
	.loadingView {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 100;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #000000;
	}

	.k-ball7a {
		border: 0;
		margin: 0;
		width: 25rpx;
		height: 25rpx;
		position: absolute;
		border-radius: 50%;
		animation: k-loadingO 2s ease infinite;
		background: #4CD964;
		animation-delay: -1.5s
	}

	.k-ball7b {
		border: 0;
		margin: 0;
		width: 25rpx;
		height: 25rpx;
		position: absolute;
		border-radius: 50%;
		animation: k-loadingO 2s ease infinite;
		background: #F63D3A;
		animation-delay: -1s
	}

	.k-ball7c {
		border: 0;
		margin: 0;
		width: 25rpx;
		height: 25rpx;
		position: absolute;
		border-radius: 50%;
		animation: k-loadingO 2s ease infinite;
		background: #FDA543;
		animation-delay: -0.5s
	}

	.k-ball7d {
		border: 0;
		margin: 0;
		width: 25rpx;
		height: 25rpx;
		position: absolute;
		border-radius: 50%;
		animation: k-loadingO 2s ease infinite;
		background: #5C6BC0
	}

	.k-paused {
		animation-play-state: paused;
	}

	.k-running {
		animation-play-state: running;
	}

	@keyframes k-loadingO {

		0%,
		100% {
			transform: translate(0)
		}

		25% {
			transform: translate(160%)
		}

		50% {
			transform: translate(160%, 160%)
		}

		75% {
			transform: translate(0, 160%)
		}
	}

	/* 进度条 */
	.flooter {
		position: absolute;
		bottom: 0;
		left: 0;
		z-index: 1100;
		transition: all 0.3s linear;
	}

	.sliderBox {
		position: relative;
		min-height: 18px;
		width: 750rpx;
	}

	.slider-item {
		width: 750rpx;
		min-height: 2px;
		position: absolute;
		left: 0;
		bottom: 0;
		overflow: hidden;
	}

	.slider-box {
		height: 2px;
		background-color: #C8C7CC;
		opacity: 0.2;
		border-radius: 2px;
	}

	.slider-block {
		position: absolute;
		width: 5px;
		height: 5px;
		border-radius: 5px;
		background-color: #FFFFFF;
		top: -1px;
		left: 0;
		z-index: 3;
		opacity: 0.5;
	}

	.slider-load {
		position: absolute;
		width: 100%;
		bottom: 0;
		height: 2px;
		background-color: #FFFFFF;
		opacity: 0.4;
		z-index: 3;
		border-radius: 2px;
		transition: all 0.02s linear;
	}

	.slider-box-active {
		position: absolute;
		width: 100%;
		bottom: 0;
		height: 7px;
		background-color: #C8C7CC;
		opacity: 0.4;
		border-radius: 7px;
		transition: height 0.2s linear;
	}

	.slider-block-active {
		position: absolute;
		top: 8px;
		width: 15px;
		height: 15px;
		border-radius: 15px;
		opacity: 1;
		left: -3px;
		background-color: #FFFFFF;
	}

	.slider-load-active {
		width: 100%;
		opacity: 1;
		height: 7px;
		border-radius: 7px;
		transition: height 0.2s linear;
	}

	.sliderData {
		width: 750rpx;
		height: 200rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		color: #FFFFFF;
		font-size: 50rpx;
		font-weight: bold;
	}

	.slider-text {
		flex-direction: row;
		display: flex;
		align-items: center;
	}

	/* 下拉刷新 */
	.refresh {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 15;
	}

	.refreshBox {
		height: 100rpx;
		color: #FFFFFF;
		font-size: 33rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: 0 30rpx;
		/* transform: translateY(-30px); */
		transition: all 0.01s linear;
		opacity: 0;
	}

	.pullup {
		position: absolute;
		left: 0;
		bottom: 0;
		z-index: 1;
		height: 200rpx;
		opacity: 1;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.loadSlider {
		position: absolute;
		bottom: 0px;
		width: 750rpx;
		height: 2px;
		align-items: center;
	}

	.loading-slider {
		width: 750rpx;
		height: 2px;
		background-color: #FFFFFF;
		opacity: 0.6;
		animation: sliderName 0.4s linear infinite;
	}

	@keyframes sliderName {
		0% {
			opacity: 0.9;
			transform: scale(0.4);
		}

		100% {
			opacity: 0.1;
			transform: scale(1);
		}
	}

	.doubleImage {
		pointer-events: none;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 20;
		/* width: 170rpx;
		height: 170rpx; */
		animation: doubleName 0.3s linear forwards;
		transform: scale(0);
		opacity: 0;
	}

	@keyframes doubleName {
		0% {
			transform: scale(1.6);
			opacity: 0.8;
		}

		50% {
			transform: scale(1);
			opacity: 1;
		}

		75% {
			transform: scale(1.02);
			opacity: 1;
		}

		100% {
			transform: scale(1);
			opacity: 1;
		}
	}

	.doubleImageRemove {
		animation: doubleRemove 0.4s linear forwards;
	}

	@keyframes doubleRemove {
		0% {
			transform: scale(1) translateY(0rpx);
			opacity: 1;
		}

		50% {
			transform: scale(1.35) translateY(-50rpx);
			opacity: 1;
		}

		100% {
			transform: scale(1.8) translateY(-100rpx);
			opacity: 0;
		}
	}
</style>