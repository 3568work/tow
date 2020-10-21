// 共享数据源的增删改查处理
//添加数据
const ADD_COMMON="ADD_COMMON"
function addCommon(shopName,shopJiage,shopCount){
return {
type:ADD_COMMON,
payload:{
    shopName,shopJiage,shopCount
}
}
}