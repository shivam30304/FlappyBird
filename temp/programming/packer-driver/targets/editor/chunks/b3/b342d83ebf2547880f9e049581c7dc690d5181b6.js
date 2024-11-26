System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, ERigidBody2DType, find, Label, Node, RigidBody2D, Vec3, GameCtrl, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, StopResume;

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
      ERigidBody2DType = _cc.ERigidBody2DType;
      find = _cc.find;
      Label = _cc.Label;
      Node = _cc.Node;
      RigidBody2D = _cc.RigidBody2D;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      GameCtrl = _unresolved_2.GameCtrl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1c3efml+/VPc7OFiM+dLS7w", "StopResume", undefined);

      __checkObsolete__(['_decorator', 'Component', 'ERigidBody2DType', 'find', 'Label', 'Node', 'RigidBody2D', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("StopResume", StopResume = (_dec = ccclass('StopResume'), _dec2 = property({
        type: Label,
        tooltip: 'Resume'
      }), _dec3 = property({
        type: Label,
        tooltip: 'Pause'
      }), _dec(_class = (_class2 = class StopResume extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "resume", _descriptor, this);

          _initializerDefineProperty(this, "pause", _descriptor2, this);

          this.touchStartCallback = null;
          this.TextLocation = new Vec3(-150, 0, 0);
          this.game = void 0;
        }

        onLoad() {
          this.game = find('GameCtrl').getComponent(_crd && GameCtrl === void 0 ? (_reportPossibleCrUseOfGameCtrl({
            error: Error()
          }), GameCtrl) : GameCtrl);
          this.resume.node.setPosition(this.TextLocation);
          this.pause.node.setPosition(this.TextLocation);
          this.pause.string = 'Press P to Pause';
          this.resume.string = 'Press R to Resume';
          this.resume.node.active = false;
          this.pause.node.active = true;
        }

        resumeGame() {
          this.game.changeSpeed(-2);
          this.resume.node.active = false;
          this.pause.node.active = true;
          this.game.bird.getComponent(RigidBody2D).type = ERigidBody2DType.Dynamic;
          this.game.node.on(Node.EventType.TOUCH_START, this.game.enableTouch, this.game);
        }

        pauseGame() {
          this.game.changeSpeed(-1);
          this.resume.node.active = true;
          this.pause.node.active = false;
          this.game.bird.getComponent(RigidBody2D).type = ERigidBody2DType.Static;
          this.game.node.off(Node.EventType.TOUCH_START, this.touchStartCallback, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "resume", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pause", [_dec3], {
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
//# sourceMappingURL=b342d83ebf2547880f9e049581c7dc690d5181b6.js.map