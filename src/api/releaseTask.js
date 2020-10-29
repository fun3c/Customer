import httpAxios from '@/utils/request'
export default {
    releaseTask(params){
        return httpAxios.post("******",params)
    }
}
//发布任务