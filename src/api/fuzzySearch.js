import httpAxios from '@/utils/request'
export default {
    fuzzySearch(params){
        return httpAxios.post("******",params)
    }
}
//模糊查询