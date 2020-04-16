(this.webpackJsonpCovidStats=this.webpackJsonpCovidStats||[]).push([[0],{121:function(e,t,a){e.exports=a(249)},126:function(e,t,a){},127:function(e,t,a){},152:function(e,t,a){},153:function(e,t,a){},246:function(e,t,a){},247:function(e,t,a){},249:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(10),l=a.n(i),o=(a(126),a(14)),r=a(15),c=a(16),h=a(17),d=a(300),u=a(292),m=a(299),p=a(76),f=a(5),v=a(297),g=a(278),C=a(279),b=a(280),y=a(281),k=a(282),S=a(105),E=a.n(S),D=function(){function e(){Object(o.a)(this,e),this.enabled=!0,this.selectCount={},this.counts={hideshow_dataset_click:0,date_slider_click:0,linlog_click:0,arrow_click:0}}return Object(r.a)(e,[{key:"enable",value:function(e){this.enabled=e}},{key:"reportEvent",value:function(e,t,a){this.enabled&&gtag("event",e,{event_category:t||"engagement",event_label:a,transport_type:"beacon"})}},{key:"reportOutboundLink",value:function(e){this.reportEvent("click","outbound",e)}},{key:"itemSelected",value:function(e){var t=this.selectCount[e]||0;t+=1,this.selectCount[e]=t,1===t?this.reportEvent("table_select_1",null,e):5===t&&this.reportEvent("table_select_5",null,e)}},{key:"countableEvent",value:function(e){this.counts[e]+=1,1===this.counts[e]?this.reportEvent("".concat(e,"_1")):5===this.counts[e]&&this.reportEvent("".concat(e,"_5"))}},{key:"hideShowDatasetClicked",value:function(){this.countableEvent("hideshow_dataset_click")}},{key:"dateSliderUsed",value:function(){this.countableEvent("date_slider_click")}},{key:"linearLogToggleClicked",value:function(){this.countableEvent("linlog_click")}},{key:"arrowClicked",value:function(){this.countableEvent("arrow_click")}},{key:"menuSelection",value:function(){this.countableEvent("menu_selection")}},{key:"aboutDialogOpened",value:function(){this.countableEvent("about_dialog")}}]),e}();D.instance||(D.instance=new D);var x=D.instance,O=(a(127),function(e){Object(h.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).handleCloseButton=function(){e.props.onCloseButton()},e.noop=function(e){return x.aboutDialogOpened(),e},e}return Object(r.a)(a,[{key:"render",value:function(){return n.a.createElement(v.a,{onClose:this.handleCloseButton,open:this.noop(this.props.open),"aria-labelledby":"customized-dialog-title",PaperProps:{style:{backgroundColor:"#ffffffee"}}},n.a.createElement(g.a,{class:"dialogTitle",disableTypography:!0,id:"customized-dialog-title",onClose:this.handleCloseButton},n.a.createElement(p.a,{variant:"h6"},"Covid-19 Statistics for U.S. States & Counties"),n.a.createElement("div",{className:"closeButton"},n.a.createElement(C.a,{onClick:this.handleCloseButton},n.a.createElement(E.a,null)))),n.a.createElement(b.a,{dividers:!0},this.props.children),n.a.createElement(y.a,null,n.a.createElement(k.a,{autoFocus:!0,onClick:this.handleCloseButton,color:"primary"},"OK")))}}]),a}(n.a.Component)),w=a(106),L=function(){function e(t,a){Object(o.a)(this,e),this.callback=a,this.readBigDataFile(t)}return Object(r.a)(e,[{key:"addToSeries",value:function(e,t){e.deaths+=t.deaths,e.cases+=t.cases;var a=e.timeline[t.date];a?(a.deaths+=t.deaths,a.cases+=t.cases,a.cumulativeCases+=t.cumulativeCases,a.cumulativeDeaths+=t.cumulativeDeaths):(a={date:t.date,cases:t.cases,deaths:t.deaths,cumulativeCases:t.cumulativeCases,cumulativeDeaths:t.cumulativeDeaths},e.timeline[t.date]=a)}},{key:"optimizeSeries",value:function(e){for(var t=Object.keys(e.timeline).sort(),a=[],s=0;s<t.length;s+=1)a.push(e.timeline[t[s]]);e.timeline=a}},{key:"receivedBigDataFile",value:function(t){for(var a,s,n,i,l,o,r={timeline:[],cases:0,deaths:0},c={},h="2020-01-01",d=t.split(/[\n\r]+/),u=[],m=0;m<d.length;m+=1)6===(o=d[m].split(/,/)).length&&"date"!==o[0]&&u.push(o);u.sort((function(e,t){return e[2]>t[2]?1:e[2]<t[2]?-1:e[1]>t[1]?1:e[1]<t[1]?-1:e[0]>t[0]?1:e[0]<t[0]?-1:0}));for(var p=0;p<u.length;p+=1){var f=(o=u[p])[0],v=o[1],g=o[2],C=parseInt(o[4],10),b=parseInt(o[5],10);v===n&&g===i||(n=v,i=g,a=0,s=0);var y=a,k=s;a=C,s=b,f>h&&(h=f);var S={date:f,cases:C-=y,deaths:b-=k,cumulativeCases:a,cumulativeDeaths:s};this.addToSeries(r,S),(l=c[g])||(l={series:{timeline:[],cases:0,deaths:0},countiesData:{}},c[g]=l),this.addToSeries(l.series,S);var E=l.countiesData[v];E||(E={timeline:[],cases:0,deaths:0},l.countiesData[v]=E),this.addToSeries(E,S)}for(var D in c)for(var x in(l=c[D]).countiesData[e.allCounties]=l.series,delete l.series,l.countiesData)this.optimizeSeries(l.countiesData[x]);this.optimizeSeries(r),c[e.allStates]={countiesData:Object(w.a)({},e.allCounties,r)},this.callback(c,h)}},{key:"readBigDataFile",value:function(e){var t=this,a=new XMLHttpRequest;a.onreadystatechange=function(){if(a.readyState===XMLHttpRequest.DONE){var e=a.status;0===e||e>=200&&e<400?t.receivedBigDataFile(a.responseText):alert("Couldn't fetch data file: status",e)}},a.open("GET",e),a.send()}}]),e}();L.allCounties=" All counties",L.allStates=" All states";var j=a(107),I=a.n(j),N=function(e){Object(h.a)(a,e);var t=Object(c.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return n.a.createElement(v.a,{open:this.props.open,PaperProps:{style:{backgroundColor:"transparent",boxShadow:"none"}}},n.a.createElement(b.a,null,n.a.createElement(I.a,{type:"TailSpin",color:"#00BFFF",height:80,width:80}),n.a.createElement(p.a,{variant:"body2"},"Fetching data...")))}}]),a}(n.a.Component),T=a(283),M=function(e){Object(h.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).handleClick=function(){x.reportOutboundLink(e.props.href)},e}return Object(r.a)(a,[{key:"render",value:function(){return n.a.createElement(T.a,{target:this.props.target,href:this.props.href,onClick:this.handleClick},this.props.children)}}]),a}(n.a.Component),_=a(284),A=a(294),R=a(298),B=(a(152),function(e){Object(h.a)(a,e);var t=Object(c.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).select=function(e){s.setState({selection:e}),s.props.onSelected(e)},s.handleDownClick=function(e){var t=s.findSelectedIndex();t<s.props.list.length-1&&(t+=1),s.select(s.props.list[t].name),x.arrowClicked()},s.handleUpClick=function(e){var t=s.findSelectedIndex();t>0&&(t-=1),s.select(s.props.list[t].name),x.arrowClicked()},s.handleSelectChanged=function(e){s.select(e.currentTarget.textContent),x.menuSelection()},s.componentDidMount=function(){s.props.onSelected(s.state.selection)},s.componentDidUpdate=function(e,t,a){s.listsEqual(e.list,s.props.list)||s.select(s.props.list[0].name)},s.state={selection:s.props.list.length>0?s.props.list[0].name:""},s}return Object(r.a)(a,[{key:"listsEqual",value:function(e,t){return e.length===t.length&&(0===e.length||e[0].name===t[0].name)}},{key:"findSelectedIndex",value:function(){for(var e=0;e<this.props.list.length;e+=1)if(this.props.list[e].name===this.state.selection)return e}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(_.a,null,n.a.createElement(A.a,{className:"regionMenu",labelId:"demo-simple-select-label",id:"demo-simple-select",value:this.state.selection,onChange:this.handleSelectChanged},this.props.list.map((function(e){return n.a.createElement(R.a,{key:e.name,value:e.name},e.name)})))))}}]),a}(n.a.Component)),H=a(31),P=a(286),z=a(287),F=a(288),V=a(289),U=a(290),q=a(291),Y=(a(153),{height:"0px",padding:"0px"}),W=function(e){Object(h.a)(a,e);var t=Object(c.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).selectedIndex=0,s.state={selection:s.props.list[s.selectedIndex].name,list:s.createSortedList("cases",!1),sortBy:"cases",sortAscending:!1},s.handleCellClick=s.handleCellClick.bind(Object(H.a)(s)),s.select=s.select.bind(Object(H.a)(s)),s.handleNextClick=s.handleNextClick.bind(Object(H.a)(s)),s.handlePrevClick=s.handlePrevClick.bind(Object(H.a)(s)),s.toggleSort=s.toggleSort.bind(Object(H.a)(s)),s.selectedRef=n.a.createRef(),s.tableContainerRef=n.a.createRef(),s}return Object(r.a)(a,[{key:"sortArray",value:function(e,t,a,s){for(var n=[],i=0;i<e.length;i+=1)n.push(Object.assign({},e[i]));return a?n.sort((function(e,a){return s?e[t]-a[t]:a[t]-e[t]})):n.sort((function(e,a){return e[t]<a[t]?s?-1:1:e[t]>a[t]?s?1:-1:0})),n}},{key:"select",value:function(e){this.setState({selection:e}),this.props.onSelected(e)}},{key:"handleCellClick",value:function(e,t){x.itemSelected(this.props.title,t),this.select(t)}},{key:"findSelectedIndex",value:function(){for(var e=0;e<this.state.list.length;e+=1)if(this.state.list[e].name===this.state.selection)return e}},{key:"handleNextClick",value:function(e){var t=this.findSelectedIndex();t<this.state.list.length-1&&(t+=1),this.select(this.state.list[t].name),x.arrowClicked()}},{key:"handlePrevClick",value:function(e){var t=this.findSelectedIndex();t>0&&(t-=1),this.select(this.state.list[t].name),x.arrowClicked()}},{key:"toggleSort",value:function(){"cases"===this.state.sortBy?this.setState({sortBy:"name",sortAscending:!0}):this.setState({sortBy:"cases",sortAscending:!1})}},{key:"createSortedList",value:function(e,t){return"cases"===e?this.sortArray(this.props.list,"cases",!0,t):this.sortArray(this.props.list,"name",!1,t)}},{key:"ensureSelectionVisible",value:function(){var e=this.tableContainerRef.current,t=this.selectedRef.current;if(t){var a=e.scrollHeight-e.scrollTopMax;t.offsetTop+t.offsetHeight<e.scrollTop+a&&t.offsetTop-t.offsetHeight>e.scrollTop||(this.selectedRef.current.scrollIntoView(),e.scrollTop<t.offsetTop+100&&e.scrollTop!==e.scrollTopMax&&this.tableContainerRef.current.scrollBy(0,-100))}}},{key:"listsEqual",value:function(e,t){return e.length===t.length&&(0===e.length||e[0].name===t[0].name)}},{key:"componentDidUpdate",value:function(e,t,a){var s=!this.listsEqual(e.list,this.props.list);(t.sortBy!==this.state.sortBy||t.sortAscending!==this.state.sortAscending||s)&&this.setState({list:this.createSortedList(this.state.sortBy,this.state.sortAscending)}),s&&(this.selectedIndex=0,this.select(this.state.list[this.selectedIndex].name)),this.ensureSelectionVisible()}},{key:"componentDidMount",value:function(){this.props.onSelected(this.state.selection)}},{key:"render",value:function(){var e=this,t="tableContainer ".concat(this.props.extra);return n.a.createElement("div",{className:"tableRoot"},n.a.createElement("div",{className:"forwardBackButtons"},n.a.createElement(T.a,{href:"#",onClick:this.handlePrevClick},"\u25c0"),"\xa0",n.a.createElement(T.a,{href:"#",onClick:this.handleNextClick},"\u25b6")),n.a.createElement(P.a,{ref:this.tableContainerRef,className:t},n.a.createElement(z.a,{stickyHeader:!0,style:Y,size:"small"},n.a.createElement(F.a,null,n.a.createElement(V.a,null,n.a.createElement(U.a,{style:Y,onClick:this.toggleSort,align:"left"},this.props.title,"name"===this.state.sortBy?"\u25b2":""),n.a.createElement(U.a,{style:Y,onClick:this.toggleSort,align:"right"},"cases"===this.state.sortBy?"\u25bc":"","Cases"))),n.a.createElement(q.a,null,this.state.list.map((function(t){var a=t.name===e.state.selection;return n.a.createElement(V.a,{ref:a?e.selectedRef:null,selected:a,key:t.name,onClick:e.props.itemClick},n.a.createElement(U.a,{style:Y,align:"left",onClick:function(a){return e.handleCellClick(a,t.name)}},t.name),n.a.createElement(U.a,{style:Y,align:"right",onClick:function(a){return e.handleCellClick(a,t.name)}},t.cases))}))))))}}]),a}(n.a.Component),G=a(108),J=a(296),X=(a(246),function(e){Object(h.a)(a,e);var t=Object(c.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).isHidden={0:!1,1:!1,2:!1,3:!1,4:!1,5:!1},s.handleLogChanged=function(){x.linearLogToggleClicked(),s.setState({type:"logarithmic"===s.state.type?"linear":"logarithmic"})},s.handleCumulativeChanged=function(e){s.setState({cumulative:e.target.checked})},s.handleChartClick=function(){setTimeout((function(){for(var e=0;e<s.datasets.length;e+=1){var t=!s.chartRef.current.chartInstance.isDatasetVisible(e);t!==s.isHidden[s.datasets[e].myId]&&(x.hideShowDatasetClicked(),s.isHidden[s.datasets[e].myId]=t)}}),200)},s.handleSliderChanged=function(e,t){s.setState({movingAverageDays:t,smooth:1!==t})},s.handleSmoothChanged=function(e){s.setState({movingAverageDays:5,smooth:e.target.checked})},s.chartRef=n.a.createRef(),s.state={type:"linear",movingAverageDays:1,cumulative:!1,smooth:!1},s.datasets=[],s}return Object(r.a)(a,[{key:"calcMovingAverage",value:function(e,t){var a,s=Math.floor(this.state.movingAverageDays/2),n=[];for(a=0;a<s;a+=1)n.push(e[a]);for(a=s;a<e.length;a+=1){for(var i=0,l=0;l<t;l+=1){i+=e[Math.min(e.length-1,a+s-l)]}n.push(i/t)}return n}},{key:"findMin",value:function(e){for(var t=Number.POSITIVE_INFINITY,a=0;a<e.length;a+=1)t=Math.min(t,e[a]);return t}},{key:"findMax",value:function(e){for(var t=Number.NEGATIVE_INFINITY,a=0;a<e.length;a+=1)t=Math.max(t,e[a]);return t}},{key:"createChartData",value:function(e,t,a){for(var s=[],n=[],i=[],l=[],o=[],r=0;r<e.timeline.length;r+=1){var c=e.timeline[r];s.push(c.date.replace(/2020-/,"")),n.push(c.cases),i.push(c.deaths),l.push(c.cumulativeCases),o.push(c.cumulativeDeaths)}var h=["Cumulative Cases","Cumulative Deaths","Daily New Cases","Daily New Cases ".concat(this.state.movingAverageDays,"-day Average"),"Daily Deaths","Daily Deaths ".concat(this.state.movingAverageDays,"-day Average")];return this.minY=void 0,this.maxY=void 0,t?this.datasets=[{myId:0,label:h[0],backgroundColor:"#333333",borderColor:"rgba(75,75,192,0.5)",borderWidth:2,fill:!1,hidden:this.isHidden[0],data:l},{myId:1,label:h[1],backgroundColor:"#333333",borderColor:"rgba(75,150,75,0.5)",borderWidth:2,fill:!1,hidden:this.isHidden[1],data:o}]:a?(this.datasets=[{myId:3,label:h[3],backgroundColor:"#aaaaaa",borderColor:"rgba(75,75,192,0.3)",borderWidth:4,fill:!1,hidden:this.isHidden[3],data:this.calcMovingAverage(n,this.state.movingAverageDays),origData:n},{myId:5,label:h[5],borderColor:"rgba(75,150,75,0.3)",borderWidth:4,fill:!1,hidden:this.isHidden[5],data:this.calcMovingAverage(i,this.state.movingAverageDays),origData:i}],this.isHidden[3]||this.isHidden[5]||(this.minY=Math.min(this.findMin(n),this.findMin(i)),this.maxY=Math.max(this.findMax(n),this.findMax(i)))):this.datasets=[{myId:2,label:h[2],backgroundColor:"#aaaaaa",borderColor:"rgba(75,75,192,0.7)",borderWidth:2,fill:!1,hidden:this.isHidden[2],data:n},{myId:4,label:h[4],backgroundColor:"#aaaaaa",borderColor:"rgba(75,150,75,0.7)",borderWidth:2,fill:!1,hidden:this.isHidden[4],data:i}],{labels:s,datasets:this.datasets}}},{key:"render",value:function(){var e=this.props.series&&this.createChartData(this.props.series,this.state.cumulative,this.state.smooth),t={animation:{duration:0},responsive:!0,maintainAspectRatio:!0,aspectRatio:1.5,onClick:this.handleChartClick,legend:{position:this.props.small?"bottom":"top"},title:{display:""!==this.props.title,text:this.props.title,fontSize:"16"},layout:this.props.small?{padding:{left:0,right:0,top:0,bottom:65}}:void 0,scales:{xAxes:[{display:!0}],yAxes:[{display:!0,type:this.state.type,ticks:{suggestedMin:this.minY,suggestedMax:this.maxY,callback:function(e,t,a){return e}}}]}},a=this.props.small?"start":void 0,s=this.props.small?"medium":"small";return n.a.createElement("div",{className:"chartRoot"},n.a.createElement("div",{className:this.props.small?"smallChartControls":"bigChartControls"},n.a.createElement(u.a,{labelPlacement:a,className:"log",control:n.a.createElement(J.a,{size:s,color:"default"}),value:"logarithmic"===this.state.type,label:"Log",onChange:this.handleLogChanged}),n.a.createElement(u.a,{labelPlacement:a,className:"cumulative",control:n.a.createElement(J.a,{size:s,color:"default"}),value:this.state.cumulative,label:"Cumulative",onChange:this.handleCumulativeChanged}),this.props.small&&n.a.createElement(T.a,{className:"appTitle",onClick:this.props.onTitleClick},n.a.createElement(p.a,{variant:"h6"},this.props.appTitle)),this.props.small&&n.a.createElement(p.a,{variant:"subtitle2",className:"updateDate"},"Updated ",this.props.updateDate),this.props.small&&n.a.createElement(u.a,{labelPlacement:a,className:"smooth",control:n.a.createElement(J.a,{size:"medium",color:"default"}),value:this.state.smooth,label:"Smooth",disabled:this.state.cumulative,onChange:this.handleSmoothChanged}),!this.props.small&&n.a.createElement(p.a,{className:"label",disabled:this.state.cumulative},"Smooth"),!this.props.small&&n.a.createElement(m.a,{className:"slider",disabled:this.state.cumulative,min:1,max:5,step:2,track:"inverted",defaultValue:1,onChange:this.handleSliderChanged}),this.props.children),this.props.series&&n.a.createElement(G.a,{ref:this.chartRef,options:t,data:e}))}}]),a}(n.a.Component)),K=(a(247),window.location.toString().match(/(localhost|covid-test)/));x.enable(!K);var $=Object(f.a)((function(e){return{tooltip:{backgroundColor:e.palette.common.white,color:"rgba(0, 0, 0, 0.87)",boxShadow:e.shadows[1],fontSize:15}}}))(d.a),Q=function(e){var t=e.children,a=e.value,i=e.open,l=Object(s.useRef)(null);return Object(s.useEffect)((function(){l.current&&l.current.update()})),n.a.createElement($,{open:i,title:a,placement:"top",PopperProps:{popperRef:l}},t)},Z=function(e){Object(h.a)(a,e);var t=Object(c.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).calcStatesList=function(e){for(var t=[],a=Object.keys(e).sort(),s=0;s<a.length;s+=1){var n=a[s],i=e[n];t.push({name:n,cases:i.countiesData[L.allCounties].cases})}return t},s.calcCountiesList=function(e,t){for(var a=e[t],s=[],n=Object.keys(a.countiesData).sort(),i=0;i<n.length;i+=1){var l=n[i],o=a.countiesData[l];s.push({name:l,cases:o.cases})}return s},s.handleStateSelected=function(e){s.setState({selectedState:e})},s.handleCountySelected=function(e){s.setState({selectedCounty:e})},s.handleSliderChanged=function(e,t){s.setState({startDate:s.state.dateList[t]})},s.handleSliderCommited=function(e,t){x.dateSliderUsed()},s.handleStateSelectChanged=function(e){s.handleStateSelected(e.currentTarget.textContent)},s.handleCountySelectChanged=function(e){s.handleCountySelected(e.currentTarget.textContent)},s.trimToStartDate=function(e,t){if(!t||!t.timeline||0===t.timeline.length)return t;for(var a=0;a<t.timeline.length;a+=1)if(e<=t.timeline[a].date){var n=Object.assign({},t);n.timeline=t.timeline.slice(a);for(var i=s.findDateIndex(e),l=s.findDateIndex(n.timeline[0].date);i<l;)l-=1,n.timeline.unshift({date:s.state.dateList[l],cases:0,deaths:0});return n}return t},s.handleCountyDownClick=function(e){var t=s.findSelectedCountyIndex();t<s.countiesList.length-1&&(t+=1),s.handleCountySelected(s.countiesList[t].name),x.arrowClicked()},s.handleCountyUpClick=function(e){var t=s.findSelectedCountyIndex();t>0&&(t-=1),s.handleCountySelected(s.countiesList[t].name),x.arrowClicked()},s.handleStateDownClick=function(e){var t=s.findSelectedStateIndex();t<s.state.statesList.length-1&&(t+=1),s.handleStateSelected(s.state.statesList[t].name),x.arrowClicked()},s.handleStateUpClick=function(e){var t=s.findSelectedStateIndex();t>0&&(t-=1),s.handleStateSelected(s.state.statesList[t].name),x.arrowClicked()},s.handleAboutCloseButton=function(e){s.setState({aboutOpen:!1})},s.handleTitleClick=function(e){s.setState({aboutOpen:!0})},s.mql=window.matchMedia("(max-width: 999px)"),s.sliderRef=n.a.createRef(),s.stateMenuRef=n.a.createRef(),s.countyMenuRef=n.a.createRef(),s.state={aboutOpen:!1,dateList:void 0,isLoading:!0,latestDate:void 0,selectedCounty:L.allCounties,selectedState:L.allStates,small:s.mql.matches,startDate:"2020-03-01",statesData:void 0,statesList:void 0},s}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.covidData=new L("https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-counties.csv",(function(t,a){var s=t[L.allStates].countiesData[L.allCounties].timeline;e.setState({dateList:s.map((function(e){return e.date})),statesData:t,statesList:e.calcStatesList(t),latestDate:a,isLoading:!1})})),this.mql.addListener((function(){e.setState({small:e.mql.matches})}))}},{key:"findDateIndex",value:function(e){return this.state.dateList.findIndex((function(t){return t===e}))}},{key:"findSelectedCountyIndex",value:function(){for(var e=0;e<this.countiesList.length;e+=1)if(this.countiesList[e].name===this.state.selectedCounty)return e}},{key:"findSelectedStateIndex",value:function(){for(var e=0;e<this.state.statesList.length;e+=1)if(this.state.statesList[e].name===this.state.selectedState)return e}},{key:"render",value:function(){var e=this,t=n.a.createElement(n.a.Fragment,null,this.state.dateList&&n.a.createElement("div",{className:"dateControl"},n.a.createElement(u.a,{className:"dateFormControl",label:"Start\xa0date\xa0\xa0",labelPlacement:"start",control:n.a.createElement(m.a,{ref:this.sliderRef,min:0,max:this.state.dateList.length-1,track:"inverted",defaultValue:this.findDateIndex("2020-03-01"),onChange:this.handleSliderChanged,onChangeCommitted:this.handleSliderCommited,valueLabelDisplay:"auto",valueLabelFormat:function(t){return e.state.dateList[t]},ValueLabelComponent:Q})})),n.a.createElement("div",{className:"notesText"},n.a.createElement("p",null,"Created by",n.a.createElement(M,{target:"_blank",href:"mailto:markcharts591@gmail.com"}," Mark Shepherd"),". Data provided by the ",n.a.createElement(M,{target:"_blank",href:"https://github.com/nytimes/covid-19-data"}," New York Times"),". Source code is ",n.a.createElement(M,{target:"_blank",href:"https://github.com/markshepherd/CovidStats"}," here"),".")),n.a.createElement("div",{className:"lastRow"},n.a.createElement(M,{target:"_blank",href:"https://twitter.com/MarkEShepherd"},n.a.createElement("img",{className:"socialIconT",align:"right",alt:"Go to Mark's Twitter",src:"Twitter_Social_Icon_Circle_Color.svg"})),n.a.createElement("br",null),n.a.createElement(M,{target:"_blank",href:"https://larkdales.com"},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 52 52",className:"socialIconH",align:"right",alt:"Visit the Larkdales"},n.a.createElement("path",{d:"M26.451.526C12.155.526.565 12.116.565 26.412s11.59 25.886 25.886 25.886 25.886-11.59 25.886-25.886S40.748.526 26.451.526zM40.005 27.14h-2.689v9.918c0 .718-.026 1.299-1.014 1.299h-6.574V28.41h-6.554v9.947h-6.263c-1.295 0-1.326-.581-1.326-1.299V27.14h-2.689c-.96 0-1.206-.56-.547-1.244l12.903-12.915a1.659 1.659 0 012.399 0l12.902 12.915c.659.684.413 1.244-.548 1.244z"}))),n.a.createElement(p.a,{variant:"caption"},K?"DEV ":"","Version ","0.7.0",", ","4/16/2020, 3:52:53 PM"))),a=this.state.small?"":this.state.selectedCounty===L.allCounties?this.state.selectedState+","+this.state.selectedCounty:this.state.selectedState+", "+this.state.selectedCounty+" county";return this.state.statesData&&this.state.selectedState&&(this.countiesList=this.calcCountiesList(this.state.statesData,this.state.selectedState)),n.a.createElement("div",{className:"app"},!this.state.small&&n.a.createElement("div",{className:"header"},n.a.createElement("span",{className:"myheader"},"Covid-19 Statistics by U.S. State and County"),n.a.createElement("br",null),"Updated ",this.state.latestDate),!this.state.small&&this.state.statesList&&n.a.createElement("div",{className:"state"},n.a.createElement(W,{extra:"color1",title:"State",list:this.state.statesList,onSelected:this.handleStateSelected})),!this.state.small&&this.state.statesData&&this.state.selectedState&&n.a.createElement("div",{className:"county"},n.a.createElement(W,{extra:"color2",title:"County",list:this.countiesList,onSelected:this.handleCountySelected})),this.state.selectedCounty&&this.state.statesData&&n.a.createElement("div",{className:"chart"},n.a.createElement(X,{small:this.state.small,appTitle:"Covid-19 by US State/County",onTitleClick:this.handleTitleClick,updateDate:this.state.latestDate,title:a,series:this.trimToStartDate(this.state.startDate,this.state.statesData[this.state.selectedState].countiesData[this.state.selectedCounty])},this.state.small&&this.state.selectedState&&this.state.statesData&&n.a.createElement("div",{className:"stateSelector"},n.a.createElement(B,{ref:this.stateMenuRef,list:this.state.statesList,onSelected:this.handleStateSelected})),this.state.small&&this.state.selectedCounty&&this.state.statesData&&n.a.createElement("div",{className:"countySelector"},n.a.createElement(B,{ref:this.countyMenuRef,list:this.countiesList,onSelected:this.handleCountySelected})))),!this.state.small&&n.a.createElement("div",{className:"notes notesContainer"},t),this.state.isLoading&&n.a.createElement(N,{open:this.state.isLoading}),this.state.aboutOpen&&n.a.createElement(O,{open:this.state.aboutOpen,onCloseButton:this.handleAboutCloseButton},n.a.createElement("div",{className:"notesContainer"},t)))}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(248);var ee=a(293),te=a(111),ae=Object(te.a)({typography:{fontSize:12}});l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(ee.a,{theme:ae},n.a.createElement(Z,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[121,1,2]]]);
//# sourceMappingURL=main.7501287e.chunk.js.map