(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[162],{3948:function(e,r,t){"use strict";t.d(r,{Z:function(){return styles_ThemeProvider_ThemeProvider}});var n=t(3428),o=t(791),u=t(2265);let i=u.createContext(null);function useTheme(){let e=u.useContext(i);return e}let s="function"==typeof Symbol&&Symbol.for;var l=s?Symbol.for("mui.nested"):"__THEME_NESTED__",a=t(7437);function mergeOuterLocalTheme(e,r){if("function"==typeof r){let t=r(e);return t}return(0,n.Z)({},e,r)}var ThemeProvider_ThemeProvider=function(e){let{children:r,theme:t}=e,n=useTheme(),o=u.useMemo(()=>{let e=null===n?t:mergeOuterLocalTheme(n,t);return null!=e&&(e[l]=null!==n),e},[t,n]);return(0,a.jsx)(i.Provider,{value:o,children:r})},d=t(6375),m=t(4809);let c={};function useThemeScoping(e,r,t,o=!1){return u.useMemo(()=>{let u=e&&r[e]||r;if("function"==typeof t){let i=t(u),s=e?(0,n.Z)({},r,{[e]:i}):i;return o?()=>s:s}return e?(0,n.Z)({},r,{[e]:t}):(0,n.Z)({},r,t)},[e,r,t,o])}var esm_ThemeProvider_ThemeProvider=function(e){let{children:r,theme:t,themeId:n}=e,o=(0,m.Z)(c),u=useTheme()||c,i=useThemeScoping(n,o,t),s=useThemeScoping(n,u,t,!0);return(0,a.jsx)(ThemeProvider_ThemeProvider,{theme:s,children:(0,a.jsx)(d.T.Provider,{value:i,children:r})})},h=t(3469);let p=["theme"];function styles_ThemeProvider_ThemeProvider(e){let{theme:r}=e,t=(0,o.Z)(e,p),u=r[h.Z];return(0,a.jsx)(esm_ThemeProvider_ThemeProvider,(0,n.Z)({},t,{themeId:u?h.Z:void 0,theme:u||r}))}},6435:function(e,r,t){Promise.resolve().then(t.bind(t,8975))},8975:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return Template}});var n=t(7437),o=t(3948),u=t(725);function Template(e){let{children:r}=e;return(0,n.jsx)(o.Z,{theme:u.Z,children:r})}},725:function(e,r,t){"use strict";var n=t(606);(0,n.Z)({});let o=(0,n.Z)({palette:{primary:{main:"#FE9015"},secondary:{main:"#000000"},background:{blue:"#E7EEF4",grey:"#414141"},text:{primary:"#000000",secondary:"rgba(0,0,0,0.6)",disabled:"rgba(0,0,0,0.38)"}},typography:{fontFamily:"Inter"},components:{MuiAppBar:{styleOverrides:{root:{borderRadius:"unset"}}},MuiPaper:{styleOverrides:{root:{borderRadius:14}}},MuiButton:{styleOverrides:{root:{textTransform:"unset"}}},MuiOutlinedInput:{variants:[{props:{size:"small"},style:e=>{let{theme:r}=e;return{input:{padding:"".concat(r.spacing(1)," ").concat(r.spacing(3))}}}}],styleOverrides:{root:e=>{let{theme:r}=e;return{background:r.palette.background.paper,"&:focus":{background:r.palette.background.default},"&:hover":{border:"none"}}}}},MuiDrawer:{styleOverrides:{paper:{borderRadius:"unset"}}}}});r.Z=o}},function(e){e.O(0,[883,971,472,744],function(){return e(e.s=6435)}),_N_E=e.O()}]);