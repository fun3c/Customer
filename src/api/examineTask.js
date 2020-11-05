import httpAxios from '@/utils/request'
export default {
    examineTask(params){
        return httpAxios.post("******",params)
    }
}
//查看任务