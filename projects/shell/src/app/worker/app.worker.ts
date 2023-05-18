/// <reference lib="webworker" />

  import { HierarchicLayout } from "yfiles";

// / import { GraphWorkerUtil } from '../util/graph-util';
// import { encodeSearchString } from 'sharedlib';
addEventListener('message', ({ data }) => {
  let hlayout = new HierarchicLayout();
// const xyz = bun.GraphWorkerUtil;
// xyz.setLicense("qwqwqw");
  // graphUtil.setLicense("qwqwqw");
  // encodeSearchString();
  // const multiPageLayout = new MultiPageLayout({
  //   coreLayout: hlayout,
  //   maximumPageSize: new YDimension(112, 200),
  //   createProxyReferenceNodes: false
  // });
  // per.person("qwqwqw");
  // const abc = <any>self['hlayout'];

  postMessage({'a': 'b'});
});



