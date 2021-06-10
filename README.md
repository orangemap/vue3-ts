

# 项目依赖:
- Node 版本: v14.16.0
- Vue 3.0
- Element Plus
- 依赖 `package-shared` 项目

# 域名
## 测试环境
- 地址: http://link-lift.join-test.cnsta.cn
- 账户: xu@huan.tv
- 密码: 123456

## 正式环境
- 地址: http://106.14.22.97
- 账户: renangang@huan.tv
- 密码: 123456

# 开发
## 准备阶段
1. 在项目根目录添加 `.env.local`文件
```env
API_HOST=http://106.14.18.159:9091
```

2. 修改.env配置
```env
# 项目标题
TITLE=Link Lift
# 本地开发 端口
PORT=4100
# 阿里字体图标 Iconfont
ICON_URL=//at.alicdn.com/t/font_2350317_qle15014g79.css
````

3. 在项目同级克隆 `package-shared` 项目并安装依赖
```bash
cd ../

git clone git@gitlab-bigdata.huan.tv:FE/packages-shared.git

yarn 
``` 

## 运行

```bash
yarn 

yarn dev
```

本地测试账户：
- xu@huan.tv
- 密码：123456

# 组件文档地址：
- [vue3](https://v3.cn.vuejs.org/)
- [element-plus](https://element-plus.org/#/zh-CN/component/installation)
- [iconfont](https://www.iconfont.cn/manage/index?spm=a313x.7781069.1998910419.12&manage_type=myprojects&projectId=2350317&keyword=&project_type=&page=)
- [拖拽组件](https://github.com/SortableJS/vue.draggable.next)
