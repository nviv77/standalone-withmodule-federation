/// <reference lib="webworker" />

  //import { HierarchicLayout } from "yfiles";
  import { formatDate, getLocaleCurrencySymbol } from '@angular/common';
import GraphWorkerUtil from './graph-util';

// import keyBy from 'lodash/keyBy';


addEventListener('message', ({ data }) => {
   const xyz = getLocaleCurrencySymbol("en");
 // const abc = keyBy;
 const graph = new GraphWorkerUtil();

  postMessage({'a': 'b'});
});



