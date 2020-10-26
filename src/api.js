//登录
let login=this.$axios.post('localhost/DCustomer/doLogin',{
    params: {
       username:'',
       password:''
    }
 })
.then(res => {
  console.log('数据是:', res);
})
.catch((e) => {
  console.log('获取数据失败');
});
//注册
let regist=this.$axios.post('localhost/DCustomer/doRegist',{
    params: {
       username:'',
       password:''
    }
 })
.then(res => {
  console.log('数据是:', res);
})
.catch((e) => {
  console.log('获取数据失败');
});
//查询
//删除