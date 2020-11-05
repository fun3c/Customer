import httpAxios from '@/utils/request'
export default {
    terminateTask(params){
        return httpAxios.post("******",params)
    }
}
//强制终止任务