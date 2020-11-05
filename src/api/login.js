import httpAxios from '@/utils/request'
export default {
    login(params){
        return httpAxios.post("******",params).then(res => {
            console.log('数据是:', res);
          })
          .catch((e) => {
            console.log('获取数据失败');
          });
    }
}
//登录