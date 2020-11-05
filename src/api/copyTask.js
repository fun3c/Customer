import httpAxios from '@/utils/request'
export default {
    copyTask(params){
        return httpAxios.post("******",params)
    }
}
//复制任务