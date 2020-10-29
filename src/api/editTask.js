import httpAxios from '@/utils/request'
export default {
    editTask(params){
        return httpAxios.post("******",params)
    }
}
//编辑任务