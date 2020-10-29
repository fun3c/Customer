import httpAxios from '@/utils/request'
export default {
    batchRemove(params){
        return httpAxios.post("******",params)
    }
}
//批量删除