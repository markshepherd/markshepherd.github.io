(this.webpackJsonpCovidStats=this.webpackJsonpCovidStats||[]).push([[0],{121:function(e,t,a){e.exports=a(249)},126:function(e,t,a){},127:function(e,t,a){},152:function(e,t,a){},153:function(e,t,a){},246:function(e,t,a){},247:function(e,t,a){},249:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(10),l=a.n(i),o=(a(126),a(11)),r=a(12),c=a(16),h=a(17),d=a(300),u=a(292),m=a(298),p=a(77),f=a(5),v=a(297),g=a(278),C=a(279),b=a(280),k=a(281),y=a(282),S=a(106),E=a.n(S),D=function(){function e(){Object(o.a)(this,e),this.enabled=!0,this.selectCount={},this.counts={}}return Object(r.a)(e,[{key:"enable",value:function(e){this.enabled=e}},{key:"reportEvent",value:function(e,t,a){this.enabled&&gtag("event",e,{event_category:t||"engagement",event_label:a,transport_type:"beacon"})}},{key:"reportOutboundLink",value:function(e){this.reportEvent("click","outbound",e)}},{key:"itemSelected",value:function(e){var t=this.selectCount[e]||0;t+=1,this.selectCount[e]=t,1===t?this.reportEvent("table_select_1",null,e):5===t&&this.reportEvent("table_select_5",null,e)}},{key:"countableEvent",value:function(e){this.counts[e]=(this.counts[e]||0)+1,1===this.counts[e]?this.reportEvent("".concat(e,"_1")):5===this.counts[e]&&this.reportEvent("".concat(e,"_5"))}},{key:"hideShowDatasetClicked",value:function(){this.countableEvent("hideshow_dataset_click")}},{key:"dateSliderUsed",value:function(){this.countableEvent("date_slider_click")}},{key:"linearLogToggleClicked",value:function(){this.countableEvent("linlog_click")}},{key:"arrowClicked",value:function(){this.countableEvent("arrow_click")}},{key:"menuSelection",value:function(){this.countableEvent("menu_selection")}},{key:"aboutDialogOpened",value:function(){this.countableEvent("about_dialog")}}]),e}();D.instance||(D.instance=new D);var w=D.instance,O=(a(127),function(e){Object(h.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={backgroundColor:"#ffffffee"},e.handleCloseButton=function(){e.props.onCloseButton()},e.noop=function(e){return w.aboutDialogOpened(),e},e}return Object(r.a)(a,[{key:"render",value:function(){return n.a.createElement(v.a,{onClose:this.handleCloseButton,open:this.noop(this.props.open),"aria-labelledby":"customized-dialog-title",PaperProps:{style:{backgroundColor:this.props.transparent?"#ffffff44":"#ffffffee"}}},n.a.createElement(g.a,{class:"dialogTitle",disableTypography:!0,id:"customized-dialog-title",onClose:this.handleCloseButton},n.a.createElement("div",{className:"titleContainer"},n.a.createElement(p.a,{className:"title",variant:"h6"},"Covid-19 Statistics for U.S. States & Counties"),n.a.createElement("div",{className:"closeButton"},n.a.createElement(C.a,{onClick:this.handleCloseButton},n.a.createElement(E.a,null))))),n.a.createElement(b.a,{dividers:!0},this.props.children),n.a.createElement(k.a,null,n.a.createElement(y.a,{autoFocus:!0,onClick:this.handleCloseButton,color:"primary"},"OK")))}}]),a}(n.a.Component)),x=a(66),I=function(){function e(t,a){Object(o.a)(this,e),this.callback=a,this.readDataFile(t)}return Object(r.a)(e,[{key:"addToSeries",value:function(e,t){e.deaths+=t.deaths,e.cases+=t.cases;var a=e.timeline[t.date];a?(a.deaths+=t.deaths,a.cases+=t.cases,a.cumulativeCases+=t.cumulativeCases,a.cumulativeDeaths+=t.cumulativeDeaths):(a={date:t.date,cases:t.cases,deaths:t.deaths,cumulativeCases:t.cumulativeCases,cumulativeDeaths:t.cumulativeDeaths},e.timeline[t.date]=a)}},{key:"optimizeSeries",value:function(e){for(var t=Object.keys(e.timeline).sort(),a=[],s=0;s<t.length;s+=1)a.push(e.timeline[t[s]]);e.timeline=a}},{key:"receivedDataFile",value:function(t){for(var a,s,n,i,l,o,r={timeline:[],cases:0,deaths:0},c={},h="2020-01-01",d=t.split(/[\n\r]+/),u=[],m=0;m<d.length;m+=1)6===(o=d[m].split(/,/)).length&&"date"!==o[0]&&u.push(o);u.sort((function(e,t){return e[2]>t[2]?1:e[2]<t[2]?-1:e[1]>t[1]?1:e[1]<t[1]?-1:e[0]>t[0]?1:e[0]<t[0]?-1:0}));for(var p=0;p<u.length;p+=1){var f=(o=u[p])[0],v=o[1],g=o[2],C=parseInt(o[4],10),b=parseInt(o[5],10);v===n&&g===i||(n=v,i=g,a=0,s=0);var k=a,y=s;a=C,s=b,f>h&&(h=f);var S={date:f,cases:C-=k,deaths:b-=y,cumulativeCases:a,cumulativeDeaths:s};this.addToSeries(r,S),(l=c[g])||(l={series:{timeline:[],cases:0,deaths:0},countiesData:{}},c[g]=l),this.addToSeries(l.series,S);var E=l.countiesData[v];E||(E={timeline:[],cases:0,deaths:0},l.countiesData[v]=E),this.addToSeries(E,S)}for(var D in c)for(var w in(l=c[D]).countiesData[e.allCounties]=l.series,delete l.series,l.countiesData)this.optimizeSeries(l.countiesData[w]);this.optimizeSeries(r),c[e.allStates]={countiesData:Object(x.a)({},e.allCounties,r)},this.callback(c,h)}},{key:"readDataFile",value:function(e){var t=this,a=new XMLHttpRequest;a.onreadystatechange=function(){if(a.readyState===XMLHttpRequest.DONE){var e=a.status;0===e||e>=200&&e<400?t.receivedDataFile(a.responseText):alert("Couldn't fetch data file: status",e)}},a.open("GET",e),a.send()}}]),e}();I.allCounties=" All counties",I.allStates=" All states";var L=function(){function e(t,a){Object(o.a)(this,e),this.callback=a,this.readDataFile(t)}return Object(r.a)(e,[{key:"receivedDataFile",value:function(e){for(var t,a=e.split(/[\n\r]+/),s=[],n=0;n<a.length;n+=1)8===(t=a[n].split(/,/)).length&&"REGION"!==t[0]&&s.push(t);s.sort((function(e,t){return e[4]>t[4]?1:e[4]<t[4]?-1:e[5]>t[5]?1:e[5]<t[5]?-1:0}));for(var i={},l=0,o=0,r=0;r<s.length;r+=1){var c=(t=s[r])[4],h=i[c];h||(h={},i[c]=h);var d=t[5].replace(/ (Parish|County|Municipality)$/,""),u=parseInt(t[6]),m=parseInt(t[7]);"All"===d&&(d=I.allCounties,l+=u,o+=m),h[d]={population:u,annualDeaths:parseInt(t[7])}}i[I.allStates]=Object(x.a)({},I.allCounties,{population:l,annualDeaths:o}),this.callback(i)}},{key:"readDataFile",value:function(e){var t=this,a=new XMLHttpRequest;a.onreadystatechange=function(){if(a.readyState===XMLHttpRequest.DONE){var e=a.status;0===e||e>=200&&e<400?t.receivedDataFile(a.responseText):alert("Couldn't fetch data file: status",e)}},a.open("GET",e),a.send()}}]),e}(),N=a(107),M=a.n(N),T=function(e){Object(h.a)(a,e);var t=Object(c.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return n.a.createElement(v.a,{open:this.props.open,PaperProps:{style:{backgroundColor:"transparent",boxShadow:"none"}}},n.a.createElement(b.a,null,n.a.createElement(M.a,{type:"TailSpin",color:"#00BFFF",height:80,width:80}),n.a.createElement(p.a,{variant:"body2"},"Fetching data...")))}}]),a}(n.a.Component),j=a(283),A=function(e){Object(h.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).handleClick=function(t){w.reportOutboundLink(e.props.href),e.props.onClick&&e.props.onClick(t)},e}return Object(r.a)(a,[{key:"render",value:function(){return n.a.createElement(j.a,{target:this.props.target,href:this.props.href,onClick:this.handleClick},this.props.children)}}]),a}(n.a.Component),R=a(284),B=a(294),_=a(299),P=(a(152),function(e){Object(h.a)(a,e);var t=Object(c.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).select=function(e){s.setState({selection:e}),s.props.onSelected(e)},s.handleDownClick=function(e){var t=s.findSelectedIndex();t<s.props.list.length-1&&(t+=1),s.select(s.props.list[t].name),w.arrowClicked()},s.handleUpClick=function(e){var t=s.findSelectedIndex();t>0&&(t-=1),s.select(s.props.list[t].name),w.arrowClicked()},s.handleSelectChanged=function(e){s.select(e.currentTarget.textContent),w.menuSelection()},s.componentDidMount=function(){s.props.onSelected(s.state.selection)},s.componentDidUpdate=function(e,t,a){s.listsEqual(e.list,s.props.list)||s.select(s.props.list[0].name)},s.state={selection:s.props.list.length>0?s.props.list[0].name:""},s}return Object(r.a)(a,[{key:"listsEqual",value:function(e,t){return e.length===t.length&&(0===e.length||e[0].name===t[0].name)}},{key:"findSelectedIndex",value:function(){for(var e=0;e<this.props.list.length;e+=1)if(this.props.list[e].name===this.state.selection)return e}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(R.a,null,n.a.createElement(B.a,{className:"regionMenu",labelId:"demo-simple-select-label",id:"demo-simple-select",value:this.state.selection,onChange:this.handleSelectChanged},this.props.list.map((function(e){return n.a.createElement(_.a,{key:e.name,value:e.name},e.name)})))))}}]),a}(n.a.Component)),V=a(31),H=a(286),F=a(287),U=a(288),Y=a(289),z=a(290),W=a(291),q=function(){function e(){Object(o.a)(this,e)}return Object(r.a)(e,null,[{key:"sortArray",value:function(e,t,a,s){for(var n=[],i=0;i<e.length;i+=1)n.push(Object.assign({},e[i]));return a?n.sort((function(e,a){return s?e[t]-a[t]:a[t]-e[t]})):n.sort((function(e,a){return e[t]<a[t]?s?-1:1:e[t]>a[t]?s?1:-1:0})),n}},{key:"findIndex",value:function(e,t){for(var a=0;a<e.length;a+=1)if(e[a].name===t)return a;return-1}},{key:"listsEqual",value:function(e,t){return e.length===t.length&&(0===e.length||e[0].name===t[0].name)}},{key:"findDateIndex",value:function(e,t){return t.findIndex((function(t){return t===e}))}},{key:"trimToStartDate",value:function(t,a,s){if(!a||!a.timeline||0===a.timeline.length)return a;for(var n=0;n<a.timeline.length;n+=1)if(t<=a.timeline[n].date){var i=Object.assign({},a);i.timeline=a.timeline.slice(n);for(var l=e.findDateIndex(t,s),o=e.findDateIndex(i.timeline[0].date,s);l<o;)o-=1,i.timeline.unshift({date:s[o],cases:0,deaths:0});return i}return a}},{key:"findMin",value:function(e){for(var t=Number.POSITIVE_INFINITY,a=0;a<e.length;a+=1)t=Math.min(t,e[a]);return t}},{key:"findMax",value:function(e){for(var t=Number.NEGATIVE_INFINITY,a=0;a<e.length;a+=1)t=Math.max(t,e[a]);return t}},{key:"stateAbbreviation",value:function(t){return e.stateAbbreviations[t.toLowerCase()]||t.substring(0,2).toUpperCase()}}]),e}();q.stateAbbreviations={alabama:"AL",alaska:"AK",arizona:"AZ",arkansas:"AR",california:"CA",colorado:"CO",connecticut:"CT",delaware:"DE","district of columbia":"DC",florida:"FL",georgia:"GA",hawaii:"HI",idaho:"ID",illinois:"IL",indiana:"IN",iowa:"IA",kansas:"KS",kentucky:"KY",louisiana:"LA",maine:"ME",maryland:"MD",massachusetts:"MA",michigan:"MI",minnesota:"MN",mississippi:"MS",missouri:"MO",montana:"MT",nebraska:"NE",nevada:"NV","new hampshire":"NH","new jersey":"NJ","new mexico":"NM","new york":"NY","north carolina":"NC","north dakota":"ND",ohio:"OH",oklahoma:"OK",oregon:"OR",pennsylvania:"PA","rhode island":"RI","south carolina":"SC","south dakota":"SD",tennessee:"TN",texas:"TX",utah:"UT",vermont:"VT",virginia:"VA",washington:"WA","west virginia":"WV",wisconsin:"WI",wyoming:"WY","puerto rico":"PR"};a(153);var G={height:"0px",padding:"0px"},X=function(e){Object(h.a)(a,e);var t=Object(c.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).selectedIndex=q.findIndex(s.props.list,s.props.selection),s.selectedIndex<0&&(s.selectedIndex=0),s.state={selection:s.props.list[s.selectedIndex].name,list:s.createSortedList("cases",!1),sortBy:"cases",sortAscending:!1},s.handleCellClick=s.handleCellClick.bind(Object(V.a)(s)),s.select=s.select.bind(Object(V.a)(s)),s.handleNextClick=s.handleNextClick.bind(Object(V.a)(s)),s.handlePrevClick=s.handlePrevClick.bind(Object(V.a)(s)),s.toggleSort=s.toggleSort.bind(Object(V.a)(s)),s.selectedRef=n.a.createRef(),s.tableContainerRef=n.a.createRef(),s}return Object(r.a)(a,[{key:"sortArray",value:function(e,t,a,s){for(var n=[],i=0;i<e.length;i+=1)n.push(Object.assign({},e[i]));return a?n.sort((function(e,a){return s?e[t]-a[t]:a[t]-e[t]})):n.sort((function(e,a){return e[t]<a[t]?s?-1:1:e[t]>a[t]?s?1:-1:0})),n}},{key:"select",value:function(e){this.setState({selection:e}),this.props.onSelected(e)}},{key:"handleCellClick",value:function(e,t){w.itemSelected(this.props.title,t),this.select(t)}},{key:"findSelectedIndex",value:function(){for(var e=0;e<this.state.list.length;e+=1)if(this.state.list[e].name===this.state.selection)return e}},{key:"handleNextClick",value:function(e){var t=this.findSelectedIndex();t<this.state.list.length-1&&(t+=1),this.select(this.state.list[t].name),w.arrowClicked()}},{key:"handlePrevClick",value:function(e){var t=this.findSelectedIndex();t>0&&(t-=1),this.select(this.state.list[t].name),w.arrowClicked()}},{key:"toggleSort",value:function(){"cases"===this.state.sortBy?this.setState({sortBy:"name",sortAscending:!0}):this.setState({sortBy:"cases",sortAscending:!1})}},{key:"createSortedList",value:function(e,t){return"cases"===e?this.sortArray(this.props.list,"cases",!0,t):this.sortArray(this.props.list,"name",!1,t)}},{key:"ensureSelectionVisible",value:function(){var e=this.tableContainerRef.current,t=this.selectedRef.current;if(t){var a=e.scrollHeight-e.scrollTopMax;t.offsetTop+t.offsetHeight<e.scrollTop+a&&t.offsetTop-t.offsetHeight>e.scrollTop||(this.selectedRef.current.scrollIntoView(),e.scrollTop<t.offsetTop+100&&e.scrollTop!==e.scrollTopMax&&this.tableContainerRef.current.scrollBy(0,-100))}}},{key:"listsEqual",value:function(e,t){if(e.length!==t.length)return!1;for(var a=0;a<e.length;a+=1)if(e[a].name!==t[a].name||e[a].cases!==t[a].cases)return!1;return!0}},{key:"componentDidUpdate",value:function(e,t,a){var s=!this.listsEqual(e.list,this.props.list);(t.sortBy!==this.state.sortBy||t.sortAscending!==this.state.sortAscending||s)&&this.setState({list:this.createSortedList(this.state.sortBy,this.state.sortAscending)}),s&&(this.selectedIndex=0,this.select(this.state.list[this.selectedIndex].name)),this.ensureSelectionVisible()}},{key:"componentDidMount",value:function(){this.props.onSelected(this.state.selection)}},{key:"render",value:function(){var e=this,t="tableContainer ".concat(this.props.extra);return n.a.createElement("div",{className:"tableRoot"},n.a.createElement("div",{className:"forwardBackButtons"},n.a.createElement(j.a,{href:"#",onClick:this.handlePrevClick},"\u25c0"),"\xa0",n.a.createElement(j.a,{href:"#",onClick:this.handleNextClick},"\u25b6")),n.a.createElement(H.a,{ref:this.tableContainerRef,className:t},n.a.createElement(F.a,{stickyHeader:!0,style:G,size:"small"},n.a.createElement(U.a,null,n.a.createElement(Y.a,null,n.a.createElement(z.a,{style:G,onClick:this.toggleSort,align:"left"},this.props.title,"name"===this.state.sortBy?"\u25b2":""),n.a.createElement(z.a,{style:G,onClick:this.toggleSort,align:"right"},"cases"===this.state.sortBy?"\u25bc":"","Cases"))),n.a.createElement(W.a,null,this.state.list.map((function(t){var a=t.name===e.state.selection;return n.a.createElement(Y.a,{ref:a?e.selectedRef:null,selected:a,key:t.name,onClick:e.props.itemClick},n.a.createElement(z.a,{style:G,align:"left",onClick:function(a){return e.handleCellClick(a,t.name)}},t.name),n.a.createElement(z.a,{style:G,align:"right",onClick:function(a){return e.handleCellClick(a,t.name)}},t.cases))}))))))}}]),a}(n.a.Component),K=a(108),J=a(295),$=function(){function e(){Object(o.a)(this,e),this.settings={}}return Object(r.a)(e,[{key:"rewriteWindowLocation",value:function(){var e=this.settings,t=window.location.toString().split(/\?/)[0],a="?";for(var s in e.state&&(a="&",t+="?state=".concat(encodeURIComponent(e.state)),e.county&&(t+="&county=".concat(encodeURIComponent(e.county)))),this.settings)"state"!==s&&"county"!==s&&void 0!==this.settings[s]&&(t+="".concat(a).concat(s,"=").concat(this.settings[s]),a="&");window.history.replaceState("xxx","yyy",t)}},{key:"update",value:function(e,t,a){var s=this;this.settings[e]=t===a?void 0:t,this.timerId&&clearTimeout(this.timerId),this.timerId=setTimeout((function(){s.rewriteWindowLocation()}),1e3)}}]),e}();$.instance||($.instance=new $);var Z=$.instance,Q=(a(246),[["#009688","#52c7b8"],["#8bc34a","#bef67a"],["#673ab7","#9a67ea"],["#2196f3","#6ec6ff"],["#00bcd4","#62efff"],["#4caf50","#80e27e"],["#f44336","#ff7961"],["#e91e63","#ff6090"],["#9c27b0","#d05ce3"],["#3f51b5","#757de8"],["#03a9f4","#67daff"]]),ee=function(e){Object(h.a)(a,e);var t=Object(c.a)(a);function a(e){var s;Object(o.a)(this,a),(s=t.call(this,e)).isHidden={0:!1,1:!1,2:!1,3:!1,4:!1,5:!1},s.handleLogChanged=function(){w.linearLogToggleClicked();var e="logarithmic"===s.state.type?"linear":"logarithmic";s.setState({type:e}),Z.update("type",e,"linear")},s.handleCumulativeChanged=function(e){s.setState({cumulative:e.target.checked}),Z.update("cumulative",e.target.checked,!1)},s.handlePer100000Changed=function(e){s.setState({per100000:e.target.checked}),Z.update("per100000",e.target.checked,!1)},s.handleChartClick=function(){setTimeout((function(){for(var e=0;e<s.datasets.length;e+=1){var t=!s.chartRef.current.chartInstance.isDatasetVisible(e);t!==s.isHidden[s.datasets[e].myId]&&(w.hideShowDatasetClicked(),s.isHidden[s.datasets[e].myId]=t)}}),200)},s.handleSliderChanged=function(e,t){s.setState({movingAverageDays:t,smooth:1!==t}),Z.update("days",t,1)},s.handleSmoothChanged=function(e){s.setState({movingAverageDays:5,smooth:e.target.checked}),Z.update("days",1,1)},s.handleCompareButton=function(e){if(!(s.state.lockedSeries.length>=11)){for(var t=0;t<s.state.lockedSeries.length;t+=1){if(s.state.lockedSeries[t].label===s.props.label)return}s.state.lockedSeries.push({label:s.props.label,series:s.props.series}),s.setState({lockedSeries:s.state.lockedSeries})}},s.handleResetCompareButton=function(e){s.setState({lockedSeries:[]})},s.handleCasesDeathsButton=function(e){s.setState({showCases:!s.state.showCases})},s.chartRef=n.a.createRef();var i=parseInt(s.props.params.get("days")||"1");return s.state={type:s.props.params.get("type")||"linear",movingAverageDays:i,cumulative:"true"===s.props.params.get("cumulative"),per100000:"true"===s.props.params.get("per100000"),smooth:i>1,lockedSeries:[],showCases:!0},s.datasets=[],Z.update("type",s.state.type,"linear"),Z.update("cumulative",s.state.cumulative,!1),Z.update("per100000",s.state.per100000,!1),Z.update("days",s.state.movingAverageDays,1),s.defaultSliderValue=s.state.movingAverageDays,s}return Object(r.a)(a,[{key:"calcMovingAverage",value:function(e,t){var a,s=Math.floor(this.state.movingAverageDays/2),n=[];for(a=0;a<s;a+=1)n.push(e[a]);for(a=s;a<e.length;a+=1){for(var i=0,l=0;l<t;l+=1){i+=e[Math.min(e.length-1,a+s-l)]}var o=i/t;n.push(o<1?o:Math.floor(o))}return n}},{key:"currentSeriesLocked",value:function(){for(var e=0;e<this.state.lockedSeries.length;e+=1)if(this.state.lockedSeries[e].label===this.props.label)return!0;return!1}},{key:"createChartDataOneTrack",value:function(e,t,a,s){var n=[],i=[],l=[],o=[],r=[],c=[],h=q.trimToStartDate(this.props.startDate,e,this.props.dateList),d=!1,u=e.population;this.state.per100000&&!u&&(u=1e5,d=!0);for(var m=this.state.per100000?1e5/u:1,p=0;p<h.timeline.length;p+=1){var f=h.timeline[p];i.push(f.date.replace(/2020-/,"")),l.push(Math.round(f.cases*m*10)/10),o.push(Math.round(f.deaths*m*10)/10),r.push(Math.round(f.cumulativeCases*m*10)/10),c.push(Math.round(f.cumulativeDeaths*m*10)/10)}var v=this.state.per100000?" per 100k":"",g=["Cumulative cases".concat(v),"Cumulative deaths".concat(v),"Daily cases".concat(v),"Cases".concat(v," ").concat(this.state.movingAverageDays,"-day avg"),"Daily deaths".concat(v),"Deaths".concat(v," ").concat(this.state.movingAverageDays,"-day avg")],C=0===this.state.lockedSeries.length||this.state.showCases,b=0===this.state.lockedSeries.length||!this.state.showCases,k=s?"#000000":"#aaaaaa",y=function(e){return d?"Population data not available.":g[e]+": "+(t||"??")},S=function(e,t){return d?"#ff0000":a[e]+t};return this.state.cumulative?(C&&n.push({myId:0,label:y(0),backgroundColor:k,borderColor:S(0,"b0"),borderWidth:2,fill:!1,hidden:this.isHidden[0],data:r}),b&&n.push({myId:1,label:y(1),backgroundColor:k,borderColor:S(1,"80"),borderWidth:2,fill:!1,hidden:this.isHidden[1],data:c})):this.state.smooth?(C&&n.push({myId:0,label:y(3),backgroundColor:k,borderColor:S(0,"50"),borderWidth:4,fill:!1,hidden:this.isHidden[0],data:this.calcMovingAverage(l,this.state.movingAverageDays),origData:l}),b&&n.push({myId:1,label:y(5),backgroundColor:k,borderColor:S(1,"50"),borderWidth:4,fill:!1,hidden:this.isHidden[1],data:this.calcMovingAverage(o,this.state.movingAverageDays),origData:o}),C&&!this.isHidden[0]&&(this.minY=Math.max(void 0===this.minY?Number.MAX_VALUE:this.minY,q.findMin(l)),this.maxY=Math.max(void 0===this.maxY?Number.MIN_VALUE:this.maxY,q.findMax(l))),b&&!this.isHidden[1]&&(this.minY=Math.max(void 0===this.minY?Number.MAX_VALUE:this.minY,q.findMin(o)),this.maxY=Math.max(void 0===this.maxY?Number.MIN_VALUE:this.maxY,q.findMax(o)))):(C&&n.push({myId:0,label:y(2),backgroundColor:k,borderColor:S(0,"b0"),borderWidth:2,fill:!1,hidden:this.isHidden[0],data:l}),b&&n.push({myId:1,label:y(4),backgroundColor:k,borderColor:S(1,"80"),borderWidth:2,fill:!1,hidden:this.isHidden[1],data:o})),{labels:i,datasets:n}}},{key:"createChartData",value:function(){this.minY=void 0,this.maxY=void 0;for(var e=this.currentSeriesLocked()?{datasets:[]}:this.createChartDataOneTrack(this.props.series,this.props.label,0===this.state.lockedSeries.length?Q[0]:["#000000","#888888"]),t=0;t<this.state.lockedSeries.length;t+=1){var a=this.state.lockedSeries[t],s=this.createChartDataOneTrack(a.series,a.label,Q[t],a.label===this.props.label);e.datasets=e.datasets.concat(s.datasets),e.labels=s.labels}return this.datasets=e.datasets,e}},{key:"render",value:function(){var e=this.props.series&&this.createChartData(),t={animation:{duration:0},responsive:!0,maintainAspectRatio:!0,aspectRatio:1.5,onClick:this.handleChartClick,legend:{position:this.props.small?"bottom":"top"},title:{display:""!==this.props.title,text:0!==this.state.lockedSeries.length?"Comparing ...":this.props.title,fontSize:"16"},layout:{padding:{left:0,right:0,top:20,bottom:85}},scales:{xAxes:[{display:!0}],yAxes:[{display:!0,type:this.state.type,ticks:{suggestedMin:this.minY,suggestedMax:this.maxY,callback:function(e,t,a){return e}}}]}},a=this.props.small?"start":void 0,s=this.props.small?"medium":"small";return n.a.createElement("div",{className:"chartRoot"},n.a.createElement("div",{className:this.props.small?"smallChartControls":"bigChartControls"},n.a.createElement(u.a,{labelPlacement:a,className:"log",control:n.a.createElement(J.a,{size:s,color:"default",checked:"logarithmic"===this.state.type}),label:"Log",onChange:this.handleLogChanged}),n.a.createElement(u.a,{labelPlacement:a,className:"cumulative",control:n.a.createElement(J.a,{size:s,color:"default",checked:this.state.cumulative}),label:"Cumulative",onChange:this.handleCumulativeChanged}),n.a.createElement(u.a,{labelPlacement:a,className:"per100000",control:n.a.createElement(J.a,{size:s,color:"default",checked:this.state.per100000}),label:"Per 100k",onChange:this.handlePer100000Changed}),this.props.small&&n.a.createElement(j.a,{className:"appTitle",onClick:this.props.onTitleClick},n.a.createElement(p.a,{variant:"h6"},this.props.appTitle)),this.props.small&&n.a.createElement(p.a,{variant:"subtitle2",className:"updateDate"},"Updated ",this.props.updateDate),this.props.small&&n.a.createElement(u.a,{labelPlacement:a,className:"smooth",control:n.a.createElement(J.a,{size:"medium",color:"default"}),value:this.state.smooth,label:"Smooth",disabled:this.state.cumulative,onChange:this.handleSmoothChanged}),!this.props.small&&n.a.createElement(p.a,{className:"label",disabled:this.state.cumulative},"Smooth"),!this.props.small&&n.a.createElement(m.a,{className:"slider",disabled:this.state.cumulative,min:1,max:9,step:2,track:"inverted",defaultValue:this.defaultSliderValue,onChange:this.handleSliderChanged}),this.props.children),this.props.series&&n.a.createElement(K.a,{ref:this.chartRef,options:t,data:e}),n.a.createElement("div",{className:this.props.small?"smallCompareButton":"bigCompareButton"},n.a.createElement(y.a,{size:"small",variant:"outlined",onClick:this.handleCompareButton,disabled:this.currentSeriesLocked()||this.state.lockedSeries.length>=11},'Compare\xa0\xa0"',this.props.label.trim(),'""'),"\xa0",n.a.createElement(y.a,{size:"small",variant:"outlined",onClick:this.handleCasesDeathsButton,disabled:0===this.state.lockedSeries.length},"Cases/Deaths"),"\xa0",n.a.createElement(y.a,{size:"small",variant:"outlined",onClick:this.handleResetCompareButton,disabled:0===this.state.lockedSeries.length},"Reset")))}}]),a}(n.a.Component),te=(a(247),"7.0.0".split(/\./)[0].toString()),ae=window.location.toString().match(/(localhost|covid-test|192\.168)/);w.enable(!ae);var se=Object(f.a)((function(e){return{tooltip:{backgroundColor:e.palette.common.white,color:"rgba(0, 0, 0, 0.87)",boxShadow:e.shadows[1],fontSize:15}}}))(d.a),ne=function(e){var t=e.children,a=e.value,i=e.open,l=Object(s.useRef)(null);return Object(s.useEffect)((function(){l.current&&l.current.update()})),n.a.createElement(se,{open:i,title:a,placement:"top",PopperProps:{popperRef:l}},t)},ie=function(e){Object(h.a)(a,e);var t=Object(c.a)(a);function a(e){var s;Object(o.a)(this,a),(s=t.call(this,e)).calcStatesList=function(e){for(var t=[],a=Object.keys(e).sort(),s=0;s<a.length;s+=1){var n=a[s],i=e[n];t.push({name:n,cases:i.countiesData[I.allCounties].cases})}return t},s.calcCountiesList=function(e,t){for(var a=e[t],s=[],n=Object.keys(a.countiesData).sort(),i=0;i<n.length;i+=1){var l=n[i],o=a.countiesData[l];s.push({name:l,cases:o.cases})}return s},s.handleStateSelected=function(e){s.setState({selectedState:e,selectedCounty:I.allCounties}),Z.update("state",e,I.allStates),Z.update("county",I.allCounties,I.allCounties)},s.handleCountySelected=function(e){s.setState({selectedCounty:e}),Z.update("county",e,I.allCounties)},s.handleSliderChanged=function(e,t){s.setState({startDate:s.state.dateList[t]}),s.state.aboutOpen&&s.setState({aboutTransparent:!0})},s.handleSliderCommited=function(e,t){w.dateSliderUsed(),s.state.aboutOpen&&s.setState({aboutTransparent:!1})},s.handleStateSelectChanged=function(e){s.handleStateSelected(e.currentTarget.textContent)},s.handleCountySelectChanged=function(e){s.handleCountySelected(e.currentTarget.textContent)},s.handleCountyDownClick=function(e){var t=s.findSelectedCountyIndex();t<s.countiesList.length-1&&(t+=1),s.handleCountySelected(s.countiesList[t].name),w.arrowClicked()},s.handleCountyUpClick=function(e){var t=s.findSelectedCountyIndex();t>0&&(t-=1),s.handleCountySelected(s.countiesList[t].name),w.arrowClicked()},s.handleStateDownClick=function(e){var t=s.findSelectedStateIndex();t<s.state.statesList.length-1&&(t+=1),s.handleStateSelected(s.state.statesList[t].name),w.arrowClicked()},s.handleStateUpClick=function(e){var t=s.findSelectedStateIndex();t>0&&(t-=1),s.handleStateSelected(s.state.statesList[t].name),w.arrowClicked()},s.handleAboutCloseButton=function(e){s.setState({aboutOpen:!1})},s.handleTitleClick=function(e){s.setState({aboutOpen:!0})},s.mql=window.matchMedia("(max-width: 999px)"),s.sliderRef=n.a.createRef(),s.stateMenuRef=n.a.createRef(),s.countyMenuRef=n.a.createRef(),s.aboutRef=n.a.createRef(),s.params=new URLSearchParams(window.location.search);var i=s.params.get("county")||I.allCounties,l=s.params.get("state")||I.allStates;return s.state={aboutOpen:!1,dateList:void 0,isLoading:!0,latestDate:void 0,selectedCounty:i,selectedState:l,small:s.mql.matches,startDate:"2020-03-01",statesData:void 0,statesList:void 0,aboutTransparent:!1,generalData:void 0,gotData:!1},s}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.covidData=new I("https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-counties.csv",(function(t,a){var s=t[I.allStates].countiesData[I.allCounties].timeline;e.setState({dateList:s.map((function(e){return e.date})),statesData:t,statesList:e.calcStatesList(t),latestDate:a})})),this.mql.addListener((function(){e.setState({small:e.mql.matches})}));this.generalData=new L("co-est2019-alldata-trimmed.csv",(function(t){e.setState({generalData:t})}))}},{key:"findSelectedCountyIndex",value:function(){for(var e=0;e<this.countiesList.length;e+=1)if(this.countiesList[e].name===this.state.selectedCounty)return e}},{key:"findSelectedStateIndex",value:function(){for(var e=0;e<this.state.statesList.length;e+=1)if(this.state.statesList[e].name===this.state.selectedState)return e}},{key:"componentDidUpdate",value:function(e,t,a){if(this.state.statesData&&this.state.generalData&&!this.state.gotData)for(var s in this.setState({gotData:!0,isLoading:!1}),this.state.generalData){var n=this.state.generalData[s];for(var i in n){var l=n[i],o=this.state.statesData[s];if(o){var r=o.countiesData[i];if(r)for(var c in l)r[c]=l[c]}}}}},{key:"render",value:function(){var e=this,t=n.a.createElement(n.a.Fragment,null,this.state.dateList&&n.a.createElement("div",{className:"dateControl"},n.a.createElement(u.a,{className:"dateFormControl",label:"Start\xa0date\xa0\xa0",labelPlacement:"start",control:n.a.createElement(m.a,{ref:this.sliderRef,min:0,max:this.state.dateList.length-1,track:"inverted",defaultValue:q.findDateIndex("2020-03-01",this.state.dateList),onChange:this.handleSliderChanged,onChangeCommitted:this.handleSliderCommited,valueLabelDisplay:"auto",valueLabelFormat:function(t){return e.state.dateList[t]},ValueLabelComponent:ne})})),n.a.createElement("div",{className:"notesText"},n.a.createElement("p",null,"Created by Mark Shepherd. ","Data provided by the ",n.a.createElement(A,{target:"_blank",href:"https://github.com/nytimes/covid-19-data"}," New York Times"),". Source code is ",n.a.createElement(A,{target:"_blank",href:"https://github.com/markshepherd/CovidStats"}," here"),".")),n.a.createElement("div",{className:"lastRow"},n.a.createElement(A,{target:"_blank",href:"https://twitter.com/MarkEShepherd"},n.a.createElement("img",{className:"socialIconT",align:"right",alt:"Go to Mark's Twitter",src:"Twitter_Social_Icon_Circle_Color.svg"})),n.a.createElement("br",null),n.a.createElement(A,{target:"_blank",href:"https://larkdales.com"},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 52 52",className:"socialIconH",align:"right",alt:"Visit the Larkdales"},n.a.createElement("path",{d:"M26.451.526C12.155.526.565 12.116.565 26.412s11.59 25.886 25.886 25.886 25.886-11.59 25.886-25.886S40.748.526 26.451.526zM40.005 27.14h-2.689v9.918c0 .718-.026 1.299-1.014 1.299h-6.574V28.41h-6.554v9.947h-6.263c-1.295 0-1.326-.581-1.326-1.299V27.14h-2.689c-.96 0-1.206-.56-.547-1.244l12.903-12.915a1.659 1.659 0 012.399 0l12.902 12.915c.659.684.413 1.244-.548 1.244z"}))),n.a.createElement(A,{target:"_blank",href:"https://facebook.com/mark.e.shepherd"},n.a.createElement("img",{className:"socialIconF",align:"right",alt:"Visit Mark on Facebook",src:"FB_logo_RGB-Black_1024.svg"})),n.a.createElement(A,{target:"_blank",href:"mailto:markcharts591@gmail.com"},n.a.createElement("img",{className:"socialIconE",align:"right",alt:"Send email to Mark",src:"email-seeklogo.svg"})),n.a.createElement(p.a,{variant:"caption"},ae?"DEV":"PROD"," ",te,", ","4/20/2020, 2:46:43 PM"))),a=this.state.small?"":this.state.selectedCounty===I.allCounties?this.state.selectedState+","+this.state.selectedCounty:this.state.selectedState+", "+this.state.selectedCounty+" County",s=this.state.selectedCounty+(this.state.selectedCounty===I.allCounties?"":" County")+", "+(this.state.selectedState===I.allStates?I.allStates:q.stateAbbreviation(this.state.selectedState));return this.state.statesData&&this.state.selectedState&&(this.countiesList=this.calcCountiesList(this.state.statesData,this.state.selectedState)),n.a.createElement("div",{className:"app"},!this.state.small&&n.a.createElement("div",{className:"header"},n.a.createElement("span",{className:"myheader"},"Covid-19 Statistics by U.S. State and County"),n.a.createElement("br",null),"Updated ",this.state.latestDate),!this.state.small&&this.state.statesList&&n.a.createElement("div",{className:"state"},n.a.createElement(X,{extra:"color1",title:"State",list:this.state.statesList,selection:this.state.selectedState,onSelected:this.handleStateSelected})),!this.state.small&&this.state.statesData&&this.state.selectedState&&n.a.createElement("div",{className:"county"},n.a.createElement(X,{extra:"color2",title:"County",list:this.countiesList,selection:this.state.selectedCounty,onSelected:this.handleCountySelected})),this.state.selectedCounty&&this.state.statesData&&this.state.gotData&&n.a.createElement("div",{className:"chart"},n.a.createElement(ee,{params:this.params,small:this.state.small,appTitle:"Covid-19 by US State/County",onTitleClick:this.handleTitleClick,updateDate:this.state.latestDate,title:a,startDate:this.state.startDate,dateList:this.state.dateList,label:s,series:this.state.statesData[this.state.selectedState].countiesData[this.state.selectedCounty]},this.state.small&&this.state.selectedState&&this.state.statesData&&n.a.createElement("div",{className:"stateSelector"},n.a.createElement(P,{selection:this.state.selectedState,ref:this.stateMenuRef,list:this.state.statesList,onSelected:this.handleStateSelected})),this.state.small&&this.state.selectedCounty&&this.state.statesData&&n.a.createElement("div",{className:"countySelector"},n.a.createElement(P,{selection:this.state.selectedCounty,ref:this.countyMenuRef,list:this.countiesList,onSelected:this.handleCountySelected})))),!this.state.small&&n.a.createElement("div",{className:"notes notesContainer"},t),this.state.isLoading&&n.a.createElement(T,{open:this.state.isLoading}),this.state.aboutOpen&&n.a.createElement(O,{transparent:this.state.aboutTransparent,open:this.state.aboutOpen,onCloseButton:this.handleAboutCloseButton},n.a.createElement("div",{className:"notesContainer"},t)))}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(248);var le=a(293),oe=a(111),re=Object(oe.a)({typography:{fontSize:12}});l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(le.a,{theme:re},n.a.createElement(ie,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[121,1,2]]]);
//# sourceMappingURL=main.6cb916ae.chunk.js.map