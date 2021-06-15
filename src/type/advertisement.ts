declare interface AdvertisementInvo {
  name: string;
  start_time: string;
  end_time: string;
  ad_status: string;
  page_num: number;
  page_size: number;
}
declare interface TableDataInvo {
  id: string;
  show: boolean;
  tv_id: number;
  name: string;
  ad_space_code: string;
  ad_space_name: string;
  file_id: string;
  file_name: string;
  file_url: string;
  mini_file_id: string;
  mini_file_name: string;
  mini_file_url: string;
  ad_status: string;
  operator: string;
  create_time: string;
  update_time: string;
}
