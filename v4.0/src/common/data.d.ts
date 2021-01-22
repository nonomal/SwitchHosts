export type HostsObjectType = {
  id: string;
  title: string;
  content: string;
  on: boolean;
  where: 'local' | 'remote' | 'group' | 'folder';
  folder_mode: 0 | 1 | 2; // 0: 默认; 1: 单选; 2: 多选
  folder_open?: boolean;
  url?: string;
  last_refresh?: string;
  refresh_interval?: number;
  include?: string[];
  children?: HostsObjectType[];
  [key: string]: any;
}

export type HostsDataType = {
  list: HostsObjectType[];
  version: [number, number, number, number];
}