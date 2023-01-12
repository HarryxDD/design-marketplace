"use strict";
exports.__esModule = true;
var react_1 = require("@chakra-ui/react");
var react_2 = require("react");
var Navigation_1 = require("components/layouts/Navigation");
var Footer_1 = require("../../components/layouts/Footer");
var react_router_1 = require("react-router");
var app_1 = require("constants/app");
var Layout = function (_a) {
    var children = _a.children;
    var location = react_router_1.useLocation();
    var isUploadPage = location.pathname === '/create/new' ? true : false;
    return (react_2["default"].createElement("div", null,
        location.pathname !== app_1.PAGES.SIGNIN &&
            location.pathname !== app_1.PAGES.SIGNUP && react_2["default"].createElement(Navigation_1["default"], null),
        react_2["default"].createElement(react_1.Box, null, children),
        !isUploadPage && react_2["default"].createElement(Footer_1.Footer, null)));
};
exports["default"] = Layout;
