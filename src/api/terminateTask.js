import httpAxios from '@/utils/request'
export default {
    terminateTask(params){
        return httpAxios.post("******",params)
    }
}
//终止任务