# 星球发行 Tier 产品化 Demo

> Vercel Project: `star-release-tier`  
> Production Demo: `https://star-release-tier.vercel.app`  
> Source Root: `02-star-release/prototype-tier`  
> Product: 星球发行（Managed Distribution）  
> Commercial Baseline: `02-star-release/commercial-model-v1.1.md`

## Demo 目标

把 Basic / Professional / Plus 从商业模型变成真实产品体验，同时严格保持 v1.1 的商业边界：

- 星球发行是合作发行，不改造成订阅会员；
- Basic / Professional / Plus 是合作等级，不是用户付费购买的会员；
- Tier 决定合作深度，Quota 决定资源边界，Service Case / SLA 决定服务方式；
- 分成政策与 Tier 解耦；
- 超额优先通过清理、扩容、归档治理，不通过“用得多就升级”；
- 历史 DSP 在线内容与平台托管容量分开治理；
- 艺人容量首期仅展示观察，不作为硬阻断条件。

## 当前 Demo 结构

### 登录前

- `index.html`：官网首页 / Tier 总体叙事；
- `plans.html`：Basic / Professional / Plus 对外说明、容量与服务差异、扩容与历史内容政策。

### 登录后

- `app.html`：工作台首页，展示当前等级、剩余年度发行额度和待处理事项；
- `app-plan.html`：合作方案，展示当前权益、使用量，并进入扩容流程；
- `app-albums.html`：专辑列表 + 创建发行前 Quota Gate；80% 提醒、100% / 超额阻断、扩容入口、Professional 批量能力差异；
- `app-artists.html`：艺人列表 + 活跃主要艺人观察指标；Basic 5 / Professional 100 仅展示观察，不硬阻断；
- `capacity.html`：扩容选购、数量、订单确认、Demo 支付、生效与订单记录；购买后额度同步回合作方案 / 首页 / 专辑列表；
- `service-center.html`：统一 Service Case，覆盖改单、下架、版权、财务和发行异常，并按 Tier 展示不同响应方式；
- `app-shell.css` / `app-shell.js`：复用现有星球发行登录后框架、左侧菜单与图标体系，并共享 Demo Tier / Capacity 状态。

右上角 Basic / Professional / Plus 切换仅用于 Demo 验证不同账户视角，真实用户不能自行切换合作等级。

## 当前已落实的 v1.1 决策

1. 新合作用户从 Basic 开始；
2. 存量用户首期临时 Professional，后续经 Shadow Tiering 迁移；
3. Professional 由持续合作表现与年度评估确认，不提供公开购买；
4. Plus 采用邀请 / 评审制；
5. Basic：500 首托管 + 100 首年度新增；
6. Professional：50,000 首托管 + 3,000 首年度新增；
7. 年度 Release：Basic 50 / Professional 1,000；
8. ISRC / UPC 随发行额度提供，不作为主要独立收费商品；
9. 活跃主要艺人容量首期只观察，不硬阻断；
10. Basic / Professional 超额可以购买曲库托管和年度发行扩容；
11. 存量降级客户提供 6 个月过渡期；
12. 已上线 DSP 内容原则上不因 Tier 降级直接下架；
13. Service Case 统一替代分散在微信 / 邮件中的人工事务；
14. SLA 仅承诺看见侧首次响应与处理动作，不承诺 DSP 最终完成时间；
15. Tier 不自动对应不同分成比例；
16. 创建发行前检查年度 Track、Release 与托管容量；
17. 接近额度允许继续但提示，真正超额才阻断新增提交；
18. 扩容购买只增加 Quota，不改变 Tier。

## 当前交互闭环

```text
专辑列表
  ↓ 创建专辑
额度预检查
  ├─ 额度充足 → 继续创建
  ├─ ≥80% → 提醒但允许继续
  └─ 超额 → 阻断新增提交 → 去扩容
                              ↓
                         选择扩容包
                              ↓
                         确认订单 / Demo 支付
                              ↓
                          扩容即时生效
                              ↓
                 合作方案 / 首页 / 专辑列表同步新额度
```

艺人容量单独保持 Shadow Measurement：达到 Basic 5 / Professional 100 候选值仍可新增，不参与当前发行阻断。

## 下一步

1. 把创建专辑从当前 Quota Gate 继续延伸到完整发行编辑 / 提交页；
2. 增加真实的 Quota reservation / 提交成功后的 Usage Meter 变化；
3. 补 Basic 存量降级 6 个月过渡期完整状态；
4. 把扩容 Demo 接到真实 Order / Payment 领域；
5. 补 Plus 专属运营和特殊项目工作台；
6. 补年度 Tier Review 的后台 / 运营视角，而不是把内部评级公式直接暴露给用户；
7. 继续对照真实星球发行页面，把 Tier 状态嵌入视频、版税和合同等已有流程。
