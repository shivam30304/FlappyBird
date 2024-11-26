System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCInteger, Component, Node, input, Input, KeyCode, director, Contact2DType, Collider2D, Ground, Results, Bird, BirdAudio, StopResume, PipePool, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, GameCtrl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGround(extras) {
    _reporterNs.report("Ground", "./Ground", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResults(extras) {
    _reporterNs.report("Results", "./Results", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBird(extras) {
    _reporterNs.report("Bird", "./Bird", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBirdAudio(extras) {
    _reporterNs.report("BirdAudio", "./BirdAudio", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStopResume(extras) {
    _reporterNs.report("StopResume", "./StopResume", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPipePool(extras) {
    _reporterNs.report("PipePool", "./PipePool", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCInteger = _cc.CCInteger;
      Component = _cc.Component;
      Node = _cc.Node;
      input = _cc.input;
      Input = _cc.Input;
      KeyCode = _cc.KeyCode;
      director = _cc.director;
      Contact2DType = _cc.Contact2DType;
      Collider2D = _cc.Collider2D;
    }, function (_unresolved_2) {
      Ground = _unresolved_2.Ground;
    }, function (_unresolved_3) {
      Results = _unresolved_3.Results;
    }, function (_unresolved_4) {
      Bird = _unresolved_4.Bird;
    }, function (_unresolved_5) {
      BirdAudio = _unresolved_5.BirdAudio;
    }, function (_unresolved_6) {
      StopResume = _unresolved_6.StopResume;
    }, function (_unresolved_7) {
      PipePool = _unresolved_7.PipePool;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3a412bIqjNL6JJ4hQWXU5tB", "GameCtrl", undefined);

      __checkObsolete__(['_decorator', 'CCInteger', 'Component', 'Node', 'input', 'Input', 'EventKeyboard', 'KeyCode', 'director', 'pipeline', 'Contact2DType', 'Collider2D', 'IPhysics2DContact']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameCtrl", GameCtrl = (_dec = ccclass('GameCtrl'), _dec2 = property({
        type: _crd && Ground === void 0 ? (_reportPossibleCrUseOfGround({
          error: Error()
        }), Ground) : Ground,
        tooltip: 'this is ground'
      }), _dec3 = property({
        type: _crd && Results === void 0 ? (_reportPossibleCrUseOfResults({
          error: Error()
        }), Results) : Results,
        tooltip: 'results go here'
      }), _dec4 = property({
        type: _crd && StopResume === void 0 ? (_reportPossibleCrUseOfStopResume({
          error: Error()
        }), StopResume) : StopResume,
        tooltip: 'stop resume'
      }), _dec5 = property({
        type: _crd && Bird === void 0 ? (_reportPossibleCrUseOfBird({
          error: Error()
        }), Bird) : Bird
      }), _dec6 = property({
        type: _crd && PipePool === void 0 ? (_reportPossibleCrUseOfPipePool({
          error: Error()
        }), PipePool) : PipePool
      }), _dec7 = property({
        type: _crd && BirdAudio === void 0 ? (_reportPossibleCrUseOfBirdAudio({
          error: Error()
        }), BirdAudio) : BirdAudio
      }), _dec8 = property({
        type: CCInteger
      }), _dec9 = property({
        type: CCInteger
      }), _dec(_class = (_class2 = class GameCtrl extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "ground", _descriptor, this);

          _initializerDefineProperty(this, "result", _descriptor2, this);

          _initializerDefineProperty(this, "stopResume", _descriptor3, this);

          _initializerDefineProperty(this, "bird", _descriptor4, this);

          _initializerDefineProperty(this, "pipeQueue", _descriptor5, this);

          _initializerDefineProperty(this, "clip", _descriptor6, this);

          _initializerDefineProperty(this, "speed", _descriptor7, this);

          _initializerDefineProperty(this, "pipeSpeed", _descriptor8, this);

          this.iniSpeed = void 0;
          this.iniPipeSpeed = void 0;
          this.isOver = void 0;
        }

        onLoad() {
          this.initListener();
          this.result.resetScore();
          this.isOver = true;
          director.pause();
          this.iniSpeed = this.speed;
          this.iniPipeSpeed = this.pipeSpeed;
        }

        enableTouch() {
          if (this.isOver == true) {
            this.resetGame();
            this.bird.resetBird();
            this.startGame();
          }

          if (this.isOver == false) {
            this.bird.fly();
            this.clip.onAudioQueue(0);
          }
        }

        initListener() {
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          this.node.on(Node.EventType.TOUCH_START, this.enableTouch, this);
        }

        onKeyDown(event) {
          switch (event.keyCode) {
            case KeyCode.KEY_P:
              this.stopResume.pauseGame();
              break;

            case KeyCode.KEY_R:
              this.stopResume.resumeGame();
              break;
          }
        }

        startGame() {
          this.result.hideResults();
          director.resume();
        }

        gameOver() {
          this.result.showResults();
          this.isOver = true;
          this.clip.onAudioQueue(3);
          director.pause();
        }

        resetGame() {
          this.result.resetScore();
          this.pipeQueue.reset();
          this.isOver = false;
          this.startGame();
        }

        passPipe() {
          this.result.addScore();
          this.clip.onAudioQueue(1);
        }

        createPipe() {
          this.pipeQueue.addPool();
        }

        contactGroundPipe() {
          let collider = this.bird.getComponent(Collider2D);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }
        }

        onBeginContact(selfcollider, otherCollider, contact) {
          this.bird.hitSomething = true;
          this.clip.onAudioQueue(2);
        }

        birdStruck() {
          this.contactGroundPipe();

          if (this.bird.hitSomething == true) {
            this.gameOver();
          }
        }

        update() {
          if (this.isOver == false) {
            this.birdStruck();
          }
        }

        changeSpeed(num) {
          if (num == -1) {
            this.speed = 0;
            this.pipeSpeed = 0;
          } else if (num == -2) {
            this.speed = this.iniSpeed;
            this.pipeSpeed = this.iniPipeSpeed;
          } else {
            this.speed = this.iniSpeed + num * 20;
            this.pipeSpeed = this.iniPipeSpeed + num * 20;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ground", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "result", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "stopResume", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "bird", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "pipeQueue", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "clip", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "speed", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 200;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "pipeSpeed", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 200;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c839f9d11d71e93eba8baacaac8019836de717a4.js.map