# GPS原理及其应用 绪论（七）笔记

## 目录
- 无法进行连续定位的原因及引发问题
- 全球定位系统（GPS）的产生与发展
- 美国政府的GPS政策演变
- AI总结

---

## 无法进行连续定位的原因及引发问题 *Content-[00:00-01:40]
- 无法连续定位的核心原因
  - 卫星数量不足、不同卫星采用相同频率信号，导致定位连续性受影响 *![](/static/screenshots/screenshot_000_43449c0f-700c-458d-847a-7185e533fb8d.jpg)
- 引发的实际问题
  - 中低纬度地区，两次卫星通过的平均间隔约1.5小时，定位间隔过长
  - 相邻轨道卫星信号易相互干扰，极端情况下需关闭其中一颗卫星信号以保障定位 *![](/static/screenshots/screenshot_001_7686084a-32ae-4399-bf54-fca059f33d22.jpg)

---

## 全球定位系统（GPS）的产生与发展 *Content-[01:40-03:00]
### GPS系统基本概况
- 由美国建立，全称为**NAVigation Satellite Timing And Ranging Global Positioning System（NAVSTAR GPS）**，设计卫星星座包含24颗GPS卫星 *![](/static/screenshots/screenshot_002_d7c70d9e-1cb4-4c8f-8a64-0629b68c7279.jpg)

### 前期技术准备
- 依托两大计划：美国海军Timation计划、美国空军621B计划，为GPS的技术框架奠定基础 *![](/static/screenshots/screenshot_003_7535168d-b1e8-4316-bbe7-1beaa0226a55.jpg)

### 关键试验卫星技术突破
- 1967年、1969年分别发射Timation-1、Timation-2，搭载石英钟完成基础试验
- 1974年发射NTS-1（Navigation Technology Satellite 1），首次搭载2台铷原子钟，提升时间精度
- 1977年发射NTS-2，首次搭载铯钟，进一步优化卫星计时性能 *![](/static/screenshots/screenshot_004_a98e7d17-32fd-49b9-acaa-6a11543544ab.jpg)

### 正式项目方案确定
- 1973年美国国防部成立联合工作办公室（JPO-Joint Program Office），综合TRANSIT、Timation和621B等方案的技术优点，正式提出NAVSTAR/GPS项目方案 *![](/static/screenshots/screenshot_005_c6b48038-e94e-4e8f-984a-6a31ca5acd16.jpg)

---

## 美国政府的GPS政策演变 *Content-[03:00-03:40]
### 早期AS（反电子欺骗）技术
- 背景：P码（PIMA）技术公开后，敌方可生成P码，为保障军方定位安全，在P码基础上加密W码生成Y码，仅特许用户可使用
- 影响：属于防卫性措施，防止战时敌方假信号干扰，但增加了非特许用户的定位数据处理难度，无法使用高精度的P码测距 *![](/static/screenshots/screenshot_006_5978f2b1-fc45-4b9e-87a3-9fd6918a64d4.jpg)

### SS（选择可用性）政策的取消
- 政策调整背景
  1. 国际形势变化：冷战结束，原军事对抗需求减弱
  2. 经济发展需求：GPS产业成为美国经济新增长点，SS政策限制产业发展，遭到民用用户与厂商反对
  3. 技术突破：差分GPS系统可大幅削弱SS政策的精度限制，非特许用户也能获得高精度定位
  4. 国际竞争：俄罗斯格洛纳斯（GLONASS）系统不实施SS政策，定位精度更高，GPS面临用户流失风险
- 实施调整：1996年美国以总统特别指令形式宣布计划取消SS，2000年5月2日正式取消，此后SS与PPS（精密定位服务）的差异大幅模糊 *![](/static/screenshots/screenshot_007_d7b4c23a-c191-4aee-b308-a305e390841a.jpg)

### GPS现代化计划
- 核心措施
  1. 从Block IIR卫星开始，在L2频段调制民用L2-C码，非特许用户可使用双频率信号消除电离层延迟 *![](/static/screenshots/screenshot_008_03a6e013-2def-4eaa-b7aa-e12fd0631763.jpg)
  2. 从Block IIR-M卫星开始，新增第三民用频率L5，L5码的性能接近军用Y码，进一步提升民用定位精度
  3. 分离军用M码，增强军方信号的抗干扰能力，缩短定位初始化时间，提升军方用户使用稳定性
  4. 具备特定区域干扰敌方使用GPS的能力
- 目标：保障美国军方用户的安全使用，同时巩固GPS在全球民用卫星导航市场的领导地位 *![](/static/screenshots/screenshot_009_b6e67f97-3d78-4b4d-864c-b4ddba09266c.jpg)

---

## AI总结
本笔记系统梳理了GPS发展历程中的核心节点与美国GPS政策的演变逻辑：首先分析了早期卫星导航无法连续定位的技术缺陷及衍生问题；接着从技术准备、试验卫星到项目立项，完整呈现了GPS系统的诞生过程；最后重点讲解美国GPS政策从早期反电子欺骗的AS技术、限制民用精度的SS政策，到取消SS并推进GPS现代化的调整过程，政策变化既回应了军事安全需求，也适配了民用产业发展与国际竞争态势，体现了卫星导航技术在军事、经济领域的双重战略价值。