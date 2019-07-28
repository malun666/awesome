function generateTreeHtml(arr, rootId) {
  let treeHtml = '';
  let getHtmlFn = (arrNodes, pId) => {
    // 获取所有的子节点
    let childrenNode = arrNodes.filter(item => item.pId === pId);
    if(childrenNode && childrenNode.length > 0) {
      let tempHtml = `<ul>`;
      childrenNode.forEach(child => {
        // 拼接当前节点，并拼接自己的子节点
        tempHtml += `<li>${child.name} ${getHtmlFn(arr, child.id)}</li>`;
      })
      tempHtml += `</ul>`;
      return tempHtml;
    } 
    return '';
  }
  treeHtml = getHtmlFn(arr, rootId);
  return treeHtml;
}

let tr = generateTreeHtml([
  {id: 1, pId: 0, name: '北京1'},
  {id: 2, pId: 0, name: '北京2'},
  {id: 3, pId: 0, name: '北京3'},
  {id: 4, pId: 0, name: '北京4'},
  {id: 5, pId: 1, name: '北京5'},
  {id: 6, pId: 2, name: '北京6'},
  {id: 7, pId: 3, name: '北京7'},
  {id: 8, pId: 4, name: '北京8'},
  {id: 9, pId: 5, name: '北京9'},
  {id: 10, pId: 6, name: '北京10'},
  {id: 11, pId: 7, name: '北京11'},
  {id: 12, pId: 7, name: '北京12'},
  {id: 13, pId: 9, name: '北京13'},
  {id: 14, pId: 10, name: '北京14'},
], 0);
console.log(tr)