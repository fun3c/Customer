import httpAxios from '@/utils/request'
export default {
    queryNote(url,params){
        return httpAxios.post(url,params)
    }
}
//查询短信模板信息