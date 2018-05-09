import Tabs from './Tabs.js'
const tab = new Tabs({
 element: '#tab-demo',
 tabs: '#tab-demo .tabs-nav li',
 panels: '#tab-demo .tabs-content div',
 activeIndex: 1,
});

tab.events.on('change', (o) => {
	//销毁事件后不再出现
  console.log(o);
});

setTimeout(()=>{
	tab.destroy();
}, 3000)
