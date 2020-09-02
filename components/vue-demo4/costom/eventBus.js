// 自定义全局事件总线

// 定义事件
// $bus.on("add", function (data){
//   console.log("add",data)
// })
// 分发事件
// $bus.emit("add","add1")
// 解绑事件
// $bus.off("add")

// {
//   "add":[listenerFn1,listenerFn2,listenerFn3],
//   "delete":[listenerFn1]
// }

(function (window){
  let $bus = {}
  // 对象容器
  let containerListener = {}

  $bus.on = function (listenerName, listenerFn){
    let listeners = containerListener[listenerName]
    if(!listeners){
      containerListener[listenerName] = [listenerFn]
    }else{
      listeners.push(listenerFn)
    }
    console.log(containerListener)
  }

  $bus.emit = function (listenerName, data){
    let listeners = containerListener[listenerName]
    if(listeners &&　listeners.length>0){
      listeners.forEach(listener=>listener(data))
    }
  }

  $bus.off = function (listenerName){
    if(listenerName===undefined){  // 用户没有传参数
      containerListener = {} // 置空
    }else if(typeof listenerName === "string"){
      delete containerListener[listenerName]
    }else{
      alert("亲,可以不传或者传一个字符串!!")
    }
  }


  // 暴露
  window.$bus = $bus
})(window)