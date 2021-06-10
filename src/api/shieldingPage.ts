import { Post,Get,Delete} from '@/utils/request'
/**
 * @description 屏蔽页分页查找
 * @api http://api-center-bigdata.huan.tv/project/577/interface/api/10809
 */
export const searchShieldingPageList = (params:any) => {
    const {pageNum,pageSize,status} =params
    return Get(`/shield/listPage?pageNum=${pageNum}&pageSize=${pageSize}&status=${status}`)
}
/**
 * @description 屏蔽页新增或更新
 * @api http://api-center-bigdata.huan.tv/project/577/interface/api/10805
 */
export const shieldingPageCreate =(params:any) => Post('/shield/saveOrUpdate', params)
/**
 * @description 屏蔽页开启/关闭
 * @api http://api-center-bigdata.huan.tv/project/577/interface/api/10813
 */
 export const shieldPushStatus =(params:any) => {
    const {id,status} =params
     return Get(`/shield/pushStatus?id=${id}&status=${status}`)
 }
/**
 * @description 屏蔽页信息删除
 * @api http://api-center-bigdata.huan.tv/project/577/interface/api/10817
 */
export const deleteShieldingPageList= (params:any) => Delete(`/shield/remove?id=${params}`)