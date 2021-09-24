// {"ast":null,"code":"var _jsxFileName = \"D:\\\\giorgos\\\\programming\\\\webdevP\\\\fb-clone\\\\my-app\\\\src\\\\components\\\\utils\\\\ProtectedRoute.tsx\";\nimport React from \"react\";\nimport { Route, Redirect } from \"react-router-dom\";\nimport { jsxDEV as _jsxDEV } from \"react/jsx-dev-runtime\";\n\nconst ProtectedRoute = ({\n  isAuth,\n  component: Component,\n  children,\n  ...rest\n}) => {\n  return /*#__PURE__*/_jsxDEV(Route, { ...rest,\n    render: props => {\n      if (isAuth()) {\n        console.log(children);\n        return children;\n      } else {\n        return /*#__PURE__*/_jsxDEV(Redirect, {\n          to: {\n            pathname: \"/\",\n            state: {\n              from: props.location\n            }\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 13\n        }, this);\n      }\n    }\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 5\n  }

const App: React.FC = () => {
  return <div>Hello </div>;
};

export default App;
