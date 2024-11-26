System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, Node, UITransform, Vec3, Canvas, GameCtrl, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, Ground;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameCtrl(extras) {
    _reporterNs.report("GameCtrl", "./GameCtrl", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
      Canvas = _cc.Canvas;
    }, function (_unresolved_2) {
      GameCtrl = _unresolved_2.GameCtrl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fdaa9Gpf/tJHYBzWrd1UHMY", "Ground", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'Node', 'UITransform', 'Vec3', 'Canvas']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Ground", Ground = (_dec = ccclass('Ground'), _dec2 = property({
        type: Node,
        tooltip: 'Ground 1 is here'
      }), _dec3 = property({
        type: Node,
        tooltip: 'Ground 1 is here'
      }), _dec4 = property({
        type: Node,
        tooltip: 'Ground 1 is here'
      }), _dec(_class = (_class2 = class Ground extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "ground1", _descriptor, this);

          _initializerDefineProperty(this, "ground2", _descriptor2, this);

          _initializerDefineProperty(this, "ground3", _descriptor3, this);

          // Create ground width variables
          this.groundWidth1 = void 0;
          this.groundWidth2 = void 0;
          this.groundWidth3 = void 0;
          this.tempStartLocation1 = new Vec3();
          this.tempStartLocation2 = new Vec3();
          this.tempStartLocation3 = new Vec3();
          this.gameCtrlSpeed = new (_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
            error: Error()
          }), GameCtrl) : GameCtrl)();
          this.gameSpeed = void 0;
        }

        onLoad() {
          this.startUp();
        }

        startUp() {
          this.groundWidth1 = this.ground1.getComponent(UITransform).width;
          this.groundWidth2 = this.ground2.getComponent(UITransform).width;
          this.groundWidth3 = this.ground3.getComponent(UITransform).width;
          this.tempStartLocation1.x = 0;
          this.tempStartLocation2.x = this.groundWidth1;
          this.tempStartLocation3.x = this.groundWidth1 + this.groundWidth2;
          this.ground1.setPosition(this.tempStartLocation1);
          this.ground2.setPosition(this.tempStartLocation2);
          this.ground3.setPosition(this.tempStartLocation3);
        }

        update(deltaTime) {
          this.gameSpeed = this.gameCtrlSpeed.speed;
          this.tempStartLocation1 = this.ground1.position;
          this.tempStartLocation2 = this.ground2.position;
          this.tempStartLocation3 = this.ground3.position;
          this.tempStartLocation1.x -= this.gameSpeed * deltaTime;
          this.tempStartLocation2.x -= this.gameSpeed * deltaTime;
          this.tempStartLocation3.x -= this.gameSpeed * deltaTime;
          const scene = director.getScene();
          const canvas = scene.getComponentInChildren(Canvas);

          if (this.tempStartLocation1.x <= 0 - this.groundWidth1) {
            this.tempStartLocation1.x = canvas.getComponent(UITransform).width;
          }

          if (this.tempStartLocation2.x <= 0 - this.groundWidth2) {
            this.tempStartLocation2.x = canvas.getComponent(UITransform).width;
          }

          if (this.tempStartLocation3.x <= 0 - this.groundWidth3) {
            this.tempStartLocation3.x = canvas.getComponent(UITransform).width;
          }

          this.ground1.setPosition(this.tempStartLocation1);
          this.ground2.setPosition(this.tempStartLocation2);
          this.ground3.setPosition(this.tempStartLocation3);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ground1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "ground2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "ground3", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8fea67f6b25d69d0d821cb3a60e4df71ab998211.js.map