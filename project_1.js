(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"project_1_atlas_1", frames: [[730,301,288,181],[1020,301,288,181],[139,340,115,153],[256,340,115,153],[0,340,137,153],[373,340,108,65],[483,340,108,65],[2018,0,15,49],[730,0,642,299],[1374,0,642,231],[0,0,728,338],[1374,233,576,228]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_14 = function() {
	this.initialize(ss["project_1_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["project_1_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["project_1_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["project_1_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["project_1_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["project_1_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["project_1_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["project_1_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["project_1_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["project_1_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["project_1_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["project_1_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



// stage content:
(lib.project_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Дверная_Ручка
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AATAAQAAAIgGAGQgFAFgIAAQgHAAgFgFQgGgGAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHg");
	this.shape.setTransform(222,568.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_1.setTransform(222,568.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Каркас_Дома_Окон
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(166.5,440.5,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(189.7,459.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Цвет_Окон_Каркас
	this.instance_2 = new lib.CachedBmp_4();
	this.instance_2.setTransform(189.7,459.6,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_3();
	this.instance_3.setTransform(189.7,459.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// Цвет_Дома
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("A8WNIIAA6PMA4tAAAIAAaPg");
	this.shape_2.setTransform(348.5,525);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Кресло
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#333333").ss(1,1,1).p("AiPiaQAfABAegCQgaCbDTACQBUAfhTB7Qh8gCh8ACQAAicABiag");
	this.shape_3.setTransform(377.2189,502.75);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Цвет_Кресло
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#333333").ss(1,1,1).p("AiPiaQAfABAegCQgaCbDTACQBUAfhTB7Qh8gCh8ACQAAicABiag");
	this.shape_4.setTransform(377.2189,502.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AiQCcQAAicABiaQAfABAegCQgaCbDTACQBUAfhTB7Qh8gCh8ACg");
	this.shape_5.setTransform(377.2189,502.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// Телевизор
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#333333").ss(1,1,1).p("Alch7IK5AAIAAD3Iq5AAg");
	this.shape_6.setTransform(446.475,476.775);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// Цвет_Телевизор
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#333333").ss(1,1,1).p("Alch7IK5AAIAAD3Iq5AAg");
	this.shape_7.setTransform(446.475,476.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00CCFF").s().p("AlcB8IAAj3IK5AAIAAD3g");
	this.shape_8.setTransform(446.475,476.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).wait(1));

	// Ручки_Дверь_2_Этаж
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#333333").ss(1,1,1).p("AgGAAQAAAIAEAFQAEAGgHAAQgIAAgFgGQgGgFAAgIQAAgHAGgGQAFgFAIAAQAHAAgEAFQgEAGAAAHgAAZAAQAAAIgGAFQgFAGgIAAQgHAAACgGQAEgHAAgHQAAgIgEgEQgCgFAHAAQAIAAAFAFQAGAGAAAHg");
	this.shape_9.setTransform(352.3,494.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	// Стол_Стул
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("ABthAIAAiDIidAAIAACDIjdAAIAACsIAABYAgwBBICdAAIAAArIAABYAgwBsICdAAIChAAIAABYAgwBsIAABYAgwBBIAAArAkNBsIDdAAABthAIAACBAgwhAIAACBABthAIChAAIAACs");
	this.shape_10.setTransform(302.05,498.725);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	// Цвет_Стол_Стул
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AkNBWIAAirIDcAAIAACBICeAAIAAiBIChAAIAACrg");
	this.shape_11.setTransform(302.05,500.85);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666666").s().p("AhOCDIAAiDIAAiCICdAAIAACCIAACDg");
	this.shape_12.setTransform(305.025,492.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11}]}).wait(1));

	// МиниШкаф
	this.instance_4 = new lib.CachedBmp_6();
	this.instance_4.setTransform(475.7,575.85,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_7();
	this.instance_5.setTransform(500,579.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(1));

	// Цвет_МиниШкаф
	this.instance_6 = new lib.CachedBmp_8();
	this.instance_6.setTransform(475.7,575.85,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_7();
	this.instance_7.setTransform(500,579.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).wait(1));

	// Подушка_на_кровати
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(1,1,1).p("AA5AAQAAAMgRAJQgRAIgXAAQgWAAgRgIQgRgJAAgMQAAgLARgIQARgJAWAAQAXAAARAJQARAIAAALg");
	this.shape_13.setTransform(181,496.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CCCCCC").s().p("AgnAVQgRgJAAgMQAAgLARgJQAQgIAXAAQAXAAARAIQARAJAAALQAAAMgRAJQgRAIgXAAQgXAAgQgIg");
	this.shape_14.setTransform(181,496.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13}]}).wait(1));

	// Кровать
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(1,1,1).p("AlWBsIAAAqAlWBsIAAiPIKtAAIAACPIAAAqAFXhBIAAAeAFXBsIqtAAAlWiVIAABy");
	this.shape_15.setTransform(209.625,503.35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("AlWBHIAAiOIKtAAIAACOg");
	this.shape_16.setTransform(209.625,506.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15}]}).wait(1));

	// Стул
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(1,1,1).p("ABPAhIAAj6ABPAhIidAAIAAC5ABPAhIAAC5");
	this.shape_17.setTransform(344.55,586.25);

	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(1));

	// Стол
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1,1,1).p("AAAiPIACEpAj+iZIH9AA");
	this.shape_18.setTransform(311.15,592.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(1));

	// Шкаф_Прихожая
	this.instance_8 = new lib.CachedBmp_10();
	this.instance_8.setTransform(166.5,531.95,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_11();
	this.instance_9.setTransform(173.9,531.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8}]}).wait(1));

	// Цвет_Шкаф
	this.instance_10 = new lib.CachedBmp_12();
	this.instance_10.setTransform(166.5,531.95,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_11();
	this.instance_11.setTransform(173.9,531.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10}]}).wait(1));

	// Лестница
	this.instance_12 = new lib.CachedBmp_13();
	this.instance_12.setTransform(386.4,517.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

	// Цвет_Лестница
	this.instance_13 = new lib.CachedBmp_14();
	this.instance_13.setTransform(386.4,517.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1));

	// Цвет_Крыши_Каркас
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(1,1,1).p("A8WKyMA4tAAAI8X1jg");
	this.shape_19.setTransform(348.5,372.025);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#4A4A4A").s().p("A8WKyIcW1jIcXVjg");
	this.shape_20.setTransform(348.5,372.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19}]}).wait(1));

	// Цвет_2_этаж_лево
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(1,1,1).p("AOfmCI88AAIAAMFIc8AAg");
	this.shape_21.setTransform(259.65,479.675);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFF99").s().p("AudGDIAAsFIc7AAIAAMFg");
	this.shape_22.setTransform(259.65,479.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21}]}).wait(1));

	// Цвет_2_этаж_право
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(1,1,1).p("AAmGDIbxAAIAAsFI7xAAIAAMFI88AA");
	this.shape_23.setTransform(348.5,479.675);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFF99").s().p("At4GDIAAsFIbxAAIAAMFg");
	this.shape_24.setTransform(441.15,479.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23}]}).wait(1));

	// Обои_1_этаж
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(1,1,1).p("A8WHFMA4tAAAIAAgKIAAt/Mg4tAAAIAAN/MA4oAAA");
	this.shape_25.setTransform(348.5,563.675);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFCC").s().p("AcSHAMg4oAAAIAAt/MA4tAAAIAAN/g");
	this.shape_26.setTransform(348.5,563.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25}]}).wait(1));

	// Каркас_Дома_Крыши_Пол
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(1,1,1).p("A8WiVIAAMEIAAOBIAAAKMA4tAAAIAAuLIAAsEAAmiVIAAMEIbxAAAAmiVIbxAAA8WiVIcW1kIcXVkA8WiVIc8AAA8WXwMA4oAAAA8WJvIc8AA");
	this.shape_27.setTransform(348.5,456.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_27).wait(1));

	// Небо
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0099FF").s().p("EhvyAuGMAAAhcLMDfkAAAMAAABcLg");
	this.shape_28.setTransform(685.5,289.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_28).wait(1));

	// Трава_Земля
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#006633").s().p("Ehs5AMvIAA5dMDZyAAAIAAZdg");
	this.shape_29.setTransform(668,650.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_29).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(610.1,354.1,790.9,377.9);
// library properties:
lib.properties = {
	id: 'FCEA8896B8048D4A8D25F878A3737A5A',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/project_1_atlas_1.png", id:"project_1_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['FCEA8896B8048D4A8D25F878A3737A5A'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;