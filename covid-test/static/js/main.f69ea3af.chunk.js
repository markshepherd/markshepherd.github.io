(this.webpackJsonpCovidStats=this.webpackJsonpCovidStats||[]).push([[0],{195:function(e,t,a){},196:function(e,t,a){},198:function(e,t,a){"use strict";a.r(t);var s=a(0),i=a.n(s),n=a(12),l=a.n(n),r=(a(97),a(13)),c=a(14),o=a(11),d=a(26),h=a(27),u=a(230),m=a(233),v=a(5),f=a(221),g=a(223),p=a(224),C=a(225),b=a(226),k=a(227),y=a(228),S=function(){function e(){Object(r.a)(this,e),this.enabled=!0,this.selectCount={},this.counts={hideshow_dataset_click:0,date_slider_click:0,linlog_click:0,arrow_click:0}}return Object(c.a)(e,[{key:"enable",value:function(e){this.enabled=e}},{key:"reportEvent",value:function(e,t,a){this.enabled&&gtag("event",e,{event_category:t||"engagement",event_label:a,transport_type:"beacon"})}},{key:"reportOutboundLink",value:function(e){this.reportEvent("click","outbound",e)}},{key:"itemSelected",value:function(e){var t=this.selectCount[e]||0;t+=1,this.selectCount[e]=t,1===t?this.reportEvent("table_select_1",null,e):5===t&&this.reportEvent("table_select_5",null,e)}},{key:"countableEvent",value:function(e){this.counts[e]+=1,1===this.counts[e]?this.reportEvent("".concat(e,"_1")):5===this.counts[e]&&this.reportEvent("".concat(e,"_5"))}},{key:"hideShowDatasetClicked",value:function(){this.countableEvent("hideshow_dataset_click")}},{key:"dateSliderUsed",value:function(){this.countableEvent("date_slider_click")}},{key:"linearLogToggleClicked",value:function(){this.countableEvent("linlog_click")}},{key:"arrowClicked",value:function(){this.countableEvent("arrow_click")}}]),e}();S.instance||(S.instance=new S);var E=S.instance,D=(a(98),{height:"0px",padding:"0px"}),x=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).selectedIndex=0,s.state={selection:s.props.list[s.selectedIndex].name,list:s.createSortedList("cases",!1),sortBy:"cases",sortAscending:!1},s.handleCellClick=s.handleCellClick.bind(Object(o.a)(s)),s.select=s.select.bind(Object(o.a)(s)),s.handleNextClick=s.handleNextClick.bind(Object(o.a)(s)),s.handlePrevClick=s.handlePrevClick.bind(Object(o.a)(s)),s.toggleSort=s.toggleSort.bind(Object(o.a)(s)),s.selectedRef=i.a.createRef(),s.tableContainerRef=i.a.createRef(),s}return Object(c.a)(a,[{key:"sortArray",value:function(e,t,a,s){for(var i=[],n=0;n<e.length;n+=1)i.push(Object.assign({},e[n]));return a?i.sort((function(e,a){return s?e[t]-a[t]:a[t]-e[t]})):i.sort((function(e,a){return e[t]<a[t]?s?-1:1:e[t]>a[t]?s?1:-1:0})),i}},{key:"select",value:function(e){this.setState({selection:e}),this.props.onSelected(e)}},{key:"handleCellClick",value:function(e,t){E.itemSelected(this.props.title,t),this.select(t)}},{key:"findSelectedIndex",value:function(){for(var e=0;e<this.state.list.length;e+=1)if(this.state.list[e].name===this.state.selection)return e}},{key:"handleNextClick",value:function(e){var t=this.findSelectedIndex();t<this.state.list.length-1&&(t+=1),this.select(this.state.list[t].name),E.arrowClicked()}},{key:"handlePrevClick",value:function(e){var t=this.findSelectedIndex();t>0&&(t-=1),this.select(this.state.list[t].name),E.arrowClicked()}},{key:"toggleSort",value:function(){"cases"===this.state.sortBy?this.setState({sortBy:"name",sortAscending:!0}):this.setState({sortBy:"cases",sortAscending:!1})}},{key:"createSortedList",value:function(e,t){return"cases"===e?this.sortArray(this.props.list,"cases",!0,t):this.sortArray(this.props.list,"name",!1,t)}},{key:"ensureSelectionVisible",value:function(){var e=this.tableContainerRef.current,t=this.selectedRef.current;if(t){var a=e.scrollHeight-e.scrollTopMax;t.offsetTop+t.offsetHeight<e.scrollTop+a&&t.offsetTop-t.offsetHeight>e.scrollTop||(this.selectedRef.current.scrollIntoView(),e.scrollTop<t.offsetTop+100&&e.scrollTop!==e.scrollTopMax&&this.tableContainerRef.current.scrollBy(0,-100))}}},{key:"listsEqual",value:function(e,t){return e.length===t.length&&(0===e.length||e[0].name===t[0].name)}},{key:"componentDidUpdate",value:function(e,t,a){var s=!this.listsEqual(e.list,this.props.list);(t.sortBy!==this.state.sortBy||t.sortAscending!==this.state.sortAscending||s)&&this.setState({list:this.createSortedList(this.state.sortBy,this.state.sortAscending)}),s&&(this.selectedIndex=0,this.select(this.state.list[this.selectedIndex].name)),this.ensureSelectionVisible()}},{key:"componentDidMount",value:function(){this.props.onSelected(this.state.selection)}},{key:"render",value:function(){var e=this,t="tableContainer ".concat(this.props.extra);return i.a.createElement("div",{className:"tableRoot"},i.a.createElement("div",{className:"forwardBackButtons"},i.a.createElement(f.a,{href:"#",onClick:this.handlePrevClick},"\u25c0"),"\xa0",i.a.createElement(f.a,{href:"#",onClick:this.handleNextClick},"\u25b6")),i.a.createElement(g.a,{ref:this.tableContainerRef,className:t},i.a.createElement(p.a,{stickyHeader:!0,style:D,size:"small"},i.a.createElement(C.a,null,i.a.createElement(b.a,null,i.a.createElement(k.a,{style:D,onClick:this.toggleSort,align:"left"},this.props.title,"name"===this.state.sortBy?"\u25b2":""),i.a.createElement(k.a,{style:D,onClick:this.toggleSort,align:"right"},"cases"===this.state.sortBy?"\u25bc":"","Cases"))),i.a.createElement(y.a,null,this.state.list.map((function(t){var a=t.name===e.state.selection;return i.a.createElement(b.a,{ref:a?e.selectedRef:null,selected:a,key:t.name,onClick:e.props.itemClick},i.a.createElement(k.a,{style:D,align:"left",onClick:function(a){return e.handleCellClick(a,t.name)}},t.name),i.a.createElement(k.a,{style:D,align:"right",onClick:function(a){return e.handleCellClick(a,t.name)}},t.cases))}))))))}}]),a}(i.a.Component),O=a(84),w=a(234),j=a(229),L=a(231),I=a(232),N=(a(195),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).isHidden={0:!1,1:!1,2:!1,3:!1,4:!1,5:!1},s.handleLinearClick=function(){E.linearLogToggleClicked(),s.setState({type:"linear"})},s.handleLogClick=function(){E.linearLogToggleClicked(),s.setState({type:"logarithmic"})},s.handleCumulativeChange=function(e){s.setState({cumulative:e.target.checked})},s.handleChartClick=function(){setTimeout((function(){for(var e=0;e<s.datasets.length;e+=1){var t=!s.chartRef.current.chartInstance.isDatasetVisible(e);t!==s.isHidden[s.datasets[e].myId]&&(E.hideShowDatasetClicked(),s.isHidden[s.datasets[e].myId]=t)}}),200)},s.handleSliderChanged=function(e,t){s.setState({movingAverageDays:t,smooth:1!==t})},s.chartRef=i.a.createRef(),s.state={type:"linear",movingAverageDays:1,cumulative:!1,smooth:!1},s.datasets=[],s}return Object(c.a)(a,[{key:"calcMovingAverage",value:function(e,t){var a,s=Math.floor(this.state.movingAverageDays/2),i=[];for(a=0;a<s;a+=1)i.push(e[a]);for(a=s;a<e.length;a+=1){for(var n=0,l=0;l<t;l+=1){n+=e[Math.min(e.length-1,a+s-l)]}i.push(n/t)}return i}},{key:"findMin",value:function(e){for(var t=Number.POSITIVE_INFINITY,a=0;a<e.length;a+=1)t=Math.min(t,e[a]);return t}},{key:"findMax",value:function(e){for(var t=Number.NEGATIVE_INFINITY,a=0;a<e.length;a+=1)t=Math.max(t,e[a]);return t}},{key:"createChartData",value:function(e,t,a){for(var s=[],i=[],n=[],l=[],r=[],c=0;c<e.timeline.length;c+=1){var o=e.timeline[c];s.push(o.date.replace(/2020-/,"")),i.push(o.cases),n.push(o.deaths),l.push(o.cumulativeCases),r.push(o.cumulativeDeaths)}var d=["Cumulative Cases","Cumulative Deaths","Daily New Cases","Daily New Cases ".concat(this.state.movingAverageDays,"-day Average"),"Daily Deaths","Daily Deaths ".concat(this.state.movingAverageDays,"-day Average")];return this.minY=void 0,this.maxY=void 0,t?this.datasets=[{myId:0,label:d[0],backgroundColor:"#333333",borderColor:"rgba(75,75,192,0.5)",borderWidth:2,fill:!1,hidden:this.isHidden[0],data:l},{myId:1,label:d[1],backgroundColor:"#333333",borderColor:"rgba(75,150,75,0.5)",borderWidth:2,fill:!1,hidden:this.isHidden[1],data:r}]:a?(this.datasets=[{myId:3,label:d[3],backgroundColor:"#aaaaaa",borderColor:"rgba(75,75,192,0.3)",borderWidth:4,fill:!1,hidden:this.isHidden[3],data:this.calcMovingAverage(i,this.state.movingAverageDays),origData:i},{myId:5,label:d[5],borderColor:"rgba(75,150,75,0.3)",borderWidth:4,fill:!1,hidden:this.isHidden[5],data:this.calcMovingAverage(n,this.state.movingAverageDays),origData:n}],this.isHidden[3]||this.isHidden[5]||(this.minY=Math.min(this.findMin(i),this.findMin(n)),this.maxY=Math.max(this.findMax(i),this.findMax(n)))):this.datasets=[{myId:2,label:d[2],backgroundColor:"#aaaaaa",borderColor:"rgba(75,75,192,0.7)",borderWidth:2,fill:!1,hidden:this.isHidden[2],data:i},{myId:4,label:d[4],backgroundColor:"#aaaaaa",borderColor:"rgba(75,150,75,0.7)",borderWidth:2,fill:!1,hidden:this.isHidden[4],data:n}],{labels:s,datasets:this.datasets}}},{key:"render",value:function(){var e=this.props.series&&this.createChartData(this.props.series,this.state.cumulative,this.state.smooth),t={animation:{duration:0},responsive:!0,maintainAspectRatio:!0,onClick:this.handleChartClick,legend:{position:"top"},title:{display:!0,text:this.props.title,fontSize:"16"},scales:{xAxes:[{display:!0}],yAxes:[{display:!0,type:this.state.type,ticks:{suggestedMin:this.minY,suggestedMax:this.maxY,callback:function(e,t,a){return e}}}]}};return i.a.createElement("div",{className:"chartRoot"},i.a.createElement("div",{className:"chartControls"},i.a.createElement("div",{className:"linlog"},i.a.createElement(w.a,{value:this.state.type,onChange:this.handleRadioChange},i.a.createElement(j.a,{control:i.a.createElement(L.a,{color:"default",size:"small"}),className:"radio",value:"linear",label:"Linear",onClick:this.handleLinearClick}),i.a.createElement(j.a,{control:i.a.createElement(L.a,{color:"default",size:"small"}),className:"radio",value:"logarithmic",label:"Log",onClick:this.handleLogClick}))),i.a.createElement(j.a,{className:"checkbox",control:i.a.createElement(I.a,{size:"small",color:"default"}),value:this.state.cumulative,label:"Cumulative",onChange:this.handleCumulativeChange}),i.a.createElement("span",{className:"label",disabled:this.state.cumulative},"Smoothing:"),i.a.createElement(m.a,{className:"slider",disabled:this.state.cumulative,min:1,max:5,step:2,track:"inverted",defaultValue:1,onChange:this.handleSliderChanged})),this.props.series&&i.a.createElement(O.a,{ref:this.chartRef,options:t,data:e}))}}]),a}(i.a.Component)),_=a(86),T=function(){function e(t,a){Object(r.a)(this,e),this.callback=a,this.readBigDataFile(t)}return Object(c.a)(e,[{key:"addToSeries",value:function(e,t){e.deaths+=t.deaths,e.cases+=t.cases;var a=e.timeline[t.date];a?(a.deaths+=t.deaths,a.cases+=t.cases,a.cumulativeCases+=t.cumulativeCases,a.cumulativeDeaths+=t.cumulativeDeaths):(a={date:t.date,cases:t.cases,deaths:t.deaths,cumulativeCases:t.cumulativeCases,cumulativeDeaths:t.cumulativeDeaths},e.timeline[t.date]=a)}},{key:"optimizeSeries",value:function(e){for(var t=Object.keys(e.timeline).sort(),a=[],s=0;s<t.length;s+=1)a.push(e.timeline[t[s]]);e.timeline=a}},{key:"receivedBigDataFile",value:function(t){for(var a,s,i,n,l,r,c={timeline:[],cases:0,deaths:0},o={},d=t.split(/[\n\r]+/),h=[],u=0;u<d.length;u+=1)6===(r=d[u].split(/,/)).length&&"date"!==r[0]&&h.push(r);h.sort((function(e,t){return e[2]>t[2]?1:e[2]<t[2]?-1:e[1]>t[1]?1:e[1]<t[1]?-1:e[0]>t[0]?1:e[0]<t[0]?-1:0}));for(var m=0;m<h.length;m+=1){var v=(r=h[m])[0],f=r[1],g=r[2],p=parseInt(r[4],10),C=parseInt(r[5],10);f===i&&g===n||(i=f,n=g,a=0,s=0);var b=a,k=s;a=p,s=C;var y={date:v,cases:p-=b,deaths:C-=k,cumulativeCases:a,cumulativeDeaths:s};this.addToSeries(c,y),(l=o[g])||(l={series:{timeline:[],cases:0,deaths:0},countiesData:{}},o[g]=l),this.addToSeries(l.series,y);var S=l.countiesData[f];S||(S={timeline:[],cases:0,deaths:0},l.countiesData[f]=S),this.addToSeries(S,y)}for(var E in o)for(var D in(l=o[E]).countiesData[e.allCounties]=l.series,delete l.series,l.countiesData)this.optimizeSeries(l.countiesData[D]);this.optimizeSeries(c),o[e.allStates]={countiesData:Object(_.a)({},e.allCounties,c)},this.callback(o)}},{key:"readBigDataFile",value:function(e){var t=this,a=new XMLHttpRequest;a.onreadystatechange=function(){if(a.readyState===XMLHttpRequest.DONE){var e=a.status;0===e||e>=200&&e<400?t.receivedBigDataFile(a.responseText):alert("Couldn't fetch data file: status",e)}},a.open("GET",e),a.send()}}]),e}();T.allCounties=" All counties",T.allStates=" All states";var M=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(r.a)(this,a);for(var s=arguments.length,i=new Array(s),n=0;n<s;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).handleClick=function(){E.reportOutboundLink(e.props.href)},e}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement(f.a,{target:this.props.target,href:this.props.href,onClick:this.handleClick},this.props.children)}}]),a}(i.a.Component);a(196);E.enable(!0);var A=Object(v.a)((function(e){return{tooltip:{backgroundColor:e.palette.common.white,color:"rgba(0, 0, 0, 0.87)",boxShadow:e.shadows[1],fontSize:15}}}))(u.a),R=function(e){var t=e.children,a=e.value,n=e.open,l=Object(s.useRef)(null);return Object(s.useEffect)((function(){l.current&&l.current.update()})),i.a.createElement(A,{open:n,title:a,placement:"top",PopperProps:{popperRef:l}},t)},B=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(r.a)(this,a),console.log(window.outerHeight,window.innerHeight),(s=t.call(this,e)).sliderRef=i.a.createRef(),s.calcStatesList=s.calcStatesList.bind(Object(o.a)(s)),s.calcCountiesList=s.calcCountiesList.bind(Object(o.a)(s)),s.handleStateSelected=s.handleStateSelected.bind(Object(o.a)(s)),s.handleCountySelected=s.handleCountySelected.bind(Object(o.a)(s)),s.handleSliderChanged=s.handleSliderChanged.bind(Object(o.a)(s)),s.handleSliderCommited=s.handleSliderCommited.bind(Object(o.a)(s)),s.trimToStartDate=s.trimToStartDate.bind(Object(o.a)(s)),s.mql=window.matchMedia("(max-width: 1199px)"),s.mql.addListener((function(){s.setState({small:s.mql.matches})})),s.state={startDate:"2020-03-01",small:s.mql.matches},s}return Object(c.a)(a,[{key:"calcStatesList",value:function(e){for(var t=[],a=Object.keys(e).sort(),s=0;s<a.length;s+=1){var i=a[s],n=e[i];t.push({name:i,cases:n.countiesData[T.allCounties].cases})}return t}},{key:"calcCountiesList",value:function(e,t){for(var a=e[t],s=[],i=Object.keys(a.countiesData).sort(),n=0;n<i.length;n+=1){var l=i[n],r=a.countiesData[l];s.push({name:l,cases:r.cases})}return s}},{key:"componentDidMount",value:function(){var e=this;this.covidData=new T("".concat("","us-counties-").concat("4-12-20",".csv"),(function(t){var a=t[T.allStates].countiesData[T.allCounties].timeline;e.setState({dateList:a.map((function(e){return e.date})),statesData:t,statesList:e.calcStatesList(t)})}))}},{key:"handleStateSelected",value:function(e){this.setState({selectedState:e})}},{key:"handleCountySelected",value:function(e){this.setState({selectedCounty:e})}},{key:"handleSliderChanged",value:function(e,t){this.setState({startDate:this.state.dateList[t]})}},{key:"handleSliderCommited",value:function(e,t){E.dateSliderUsed()}},{key:"findDateIndex",value:function(e){return this.state.dateList.findIndex((function(t){return t===e}))}},{key:"trimToStartDate",value:function(e,t){if(!t||!t.timeline||0===t.timeline.length)return t;for(var a=0;a<t.timeline.length;a+=1)if(e<=t.timeline[a].date){var s=Object.assign({},t);s.timeline=t.timeline.slice(a);for(var i=this.findDateIndex(e),n=this.findDateIndex(s.timeline[0].date);i<n;)n-=1,s.timeline.unshift({date:this.state.dateList[n],cases:0,deaths:0});return s}return t}},{key:"render",value:function(){var e=this;console.log("render",this.state.small);var t=this.state.selectedCounty===T.allCounties?this.state.selectedState+","+this.state.selectedCounty:this.state.selectedState+", "+this.state.selectedCounty+" county";return i.a.createElement("div",{className:"app"},!this.state.small&&i.a.createElement("div",{className:"header"},i.a.createElement("span",{className:"myheader"},"Covid-19 Statistics by U.S. State and County"),i.a.createElement("br",null),"Last updated ","Apr 12, 2020","."),!this.state.small&&this.state.statesList&&i.a.createElement("div",{className:"state"},i.a.createElement(x,{extra:"color1",title:"State",list:this.state.statesList,onSelected:this.handleStateSelected})),!this.state.small&&this.state.selectedState&&i.a.createElement("div",{className:"county"},i.a.createElement(x,{extra:"color2",title:"County",list:this.calcCountiesList(this.state.statesData,this.state.selectedState),onSelected:this.handleCountySelected})),this.state.selectedCounty&&i.a.createElement("div",{className:"chart"},i.a.createElement(N,{title:t,series:this.trimToStartDate(this.state.startDate,this.state.statesData[this.state.selectedState].countiesData[this.state.selectedCounty])})),!this.state.small&&i.a.createElement("div",{className:"notes"},i.a.createElement("div",{className:"notesText"},i.a.createElement("p",null,"Created by",i.a.createElement(M,{target:"_blank",href:"mailto:markcharts591@gmail.com"}," Mark Shepherd"),". Data provided by the ",i.a.createElement(M,{target:"_blank",href:"https://github.com/nytimes/covid-19-data"}," New York Times"),". Source code is ",i.a.createElement(M,{target:"_blank",href:"https://github.com/markshepherd/CovidStats"}," here"),".")),i.a.createElement("div",{className:"socialIcons"},i.a.createElement(M,{target:"_blank",href:"https://twitter.com/MarkEShepherd"},i.a.createElement("img",{className:"socialIcon",align:"right",alt:"Go to Mark's Twitter",src:"".concat("","Twitter_Social_Icon_Circle_Color.svg")})),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(M,{target:"_blank",href:"https://larkdales.com"},i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 52 52",className:"socialIcon",align:"right",alt:"Visit the Larkdales"},i.a.createElement("path",{d:"M26.451.526C12.155.526.565 12.116.565 26.412s11.59 25.886 25.886 25.886 25.886-11.59 25.886-25.886S40.748.526 26.451.526zM40.005 27.14h-2.689v9.918c0 .718-.026 1.299-1.014 1.299h-6.574V28.41h-6.554v9.947h-6.263c-1.295 0-1.326-.581-1.326-1.299V27.14h-2.689c-.96 0-1.206-.56-.547-1.244l12.903-12.915a1.659 1.659 0 012.399 0l12.902 12.915c.659.684.413 1.244-.548 1.244z"})))),i.a.createElement("div",{className:"dateControl"},i.a.createElement("span",null,"Choose starting date of graph..."),this.state.dateList&&i.a.createElement(m.a,{ref:this.sliderRef,min:0,max:this.state.dateList.length-1,track:"inverted",defaultValue:this.findDateIndex("2020-03-01"),onChange:this.handleSliderChanged,onChangeCommitted:this.handleSliderCommited,valueLabelDisplay:"auto",valueLabelFormat:function(t){return e.state.dateList[t]},ValueLabelComponent:R}))))}}]),a}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(197);l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},92:function(e,t,a){e.exports=a(198)},97:function(e,t,a){},98:function(e,t,a){}},[[92,1,2]]]);
//# sourceMappingURL=main.f69ea3af.chunk.js.map