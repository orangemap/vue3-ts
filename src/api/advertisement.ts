import { Post, Get, Delete, Put, Patch } from "@/utils/request";
/**
 * @description 广告管理分页查询列表
 * @api http://api-center-bigdata.huan.tv/project/577/interface/api/10629
 */
export const searchPageListApi = (params: any) => {
  return Patch("/advertisement/listPage", { params });
};
/**
 * @description 广告管理保存
 * @api http://api-center-bigdata.huan.tv/project/577/interface/api/10625
 */
export const advertisementSaveApi = (params: any) =>
  Post("/advertisement/save", params);
/**
 * @description 广告位删除
 * @api http://api-center-bigdata.huan.tv/project/577/interface/api/10621
 */
export const advertisementDelApi = (params: any) =>
  Delete(`/advertisement/remove?id=${params}`);
/**
 * @description 广告管理更新
 * @api http://api-center-bigdata.huan.tv/project/577/interface/api/10637
 */
export const advertisementUpdateApi = (params: any) =>
  Put("/advertisement/update", params);
/**
 * @description 广告管理发布
 * @api http://api-center-bigdata.huan.tv/project/577/interface/api/10641
 */
export const advertisementPublishApi = (params: any) =>
  Put("/advertisement/publish", params);
/**
 * @description 广告已发布前端接口
 * @api http://api-center-bigdata.huan.tv/project/577/interface/api/10645
 */
export const queryStatus = () => Get("/advertisement/publishList");
