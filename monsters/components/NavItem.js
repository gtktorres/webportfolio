"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _link = _interopRequireDefault(require("next/link"));
require("../styles/globals.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var NavItem = function NavItem(_ref) {
  var text = _ref.text,
    href = _ref.href,
    active = _ref.active;
  return /*#__PURE__*/React.createElement(_link["default"], {
    href: href,
    className: "nav__item ".concat(active ? "active" : "")
  }, text);
};
var _default = NavItem;
exports["default"] = _default;