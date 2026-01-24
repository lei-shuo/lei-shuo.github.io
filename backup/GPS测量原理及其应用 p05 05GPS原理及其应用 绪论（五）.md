## 目录
- 上节课内容回顾：第一代卫星导航TRANSIT系统的缺陷 [原片 @ 00:00](https://www.bilibili.com/video/BV1ia4y1s7sj_p5?t=0)
- 课程教学说明 [原片 @ 06:55](https://www.bilibili.com/video/BV1ia4y1s7sj_p5?t=415)
- 多普勒计数的原理详解 [原片 @ 12:30](https://www.bilibili.com/video/BV1ia4y1s7sj_p5?t=750)
- 美国GPS相关政策的重要性 [原片 @ 19:27](https://www.bilibili.com/video/BV1ia4y1s7sj_p5?t=1167)
- GPS系统的产生与发展历程 [原片 @ 11:51](https://www.bilibili.com/video/BV1ia4y1s7sj_p5?t=711)

---

## 上节课内容回顾：第一代卫星导航TRANSIT系统的缺陷 [原片 @ 00:00](https://www.bilibili.com/video/BV1ia4y1s7sj_p5?t=0)
### 核心内容
本次课程首先回顾上节课关于第一代卫星导航TRANSIT系统的内容，重点讲解该系统被淘汰的核心原因：
1. **定位效率与精度问题**
   - 单次定位需要约10分钟的长时间观测，无法满足高动态用户（如运动中的潜艇、车辆）的实时定位需求
   - 用户在定位过程中位置会持续变化，需要通过航速规算到参考点，进一步放大定位误差
2. **系统设计的局限性**
   - 仅部署6颗卫星，且所有卫星使用相同频率的信号，用户无法同时接收多颗卫星信号，只能依赖单颗卫星过境时的观测，因此无法作为独立导航系统使用
   - 中低纬度区域卫星过境的平均间隔约1.5小时，用户等待时间长；相邻轨道卫星信号还可能互相干扰，需临时关闭其中一颗卫星信号
3. **定位原理的固有局限**
   - 依赖多普勒定位积分原理，需要卫星从地平线一侧运动到另一侧的长时间段观测，来保证几何精度，进一步拉长了定位时间
   - 低轨道卫星还会带来轨道维护、信号遮挡等额外问题

### 对应截图
*![](/static/screenshots/screenshot_000_9c47acce-a4db-41a9-adaf-8d4210a5914e.jpg)
*![](/static/screenshots/screenshot_001_bab2b1ba-8ba8-4caa-a5e2-bc3a06adc5ef.jpg)
*![](/static/screenshots/screenshot_002_18e98dfe-5fa3-456d-aae9-2401ef402bc4.jpg)
*![](/static/screenshots/screenshot_003_decb0d35-a989-45f1-9e5f-2121dc8e10b7.jpg)
*![](/static/screenshots/screenshot_004_c46fc3b4-1279-4f2b-b296-14c39eb91da0.jpg)

---

## 课程教学说明 [原片 @ 06:55](https://www.bilibili.com/video/BV1ia4y1s7sj_p5?t=415)
### 核心内容
老师针对课程中的教学逻辑问题进行说明，帮助学员理解课程学习思路：
1. **教学顺序的矛盾与应对**
   - 教学需要兼顾**循序渐进**和**系统性**，但两者存在天然冲突：若提前讲解后续概念会缺乏前置知识铺垫，按章节顺序授课则会出现提前涉及未解释的名词
   - 解决方案：不强行提前解释所有后续概念，建议学员在课程全部学完后再整体梳理，届时未理解的内容会自然清晰
2. **学生问题的层次区分**
   - 老师会区分学生问题的层次：
     - 基础问题：本应理解但未掌握，可能是听课不认真或基础不足
     - 深入问题：涉及后续未讲解的概念，属于正常思考的结果，会说明后续讲解或简单介绍
     - 创新问题：超出课程设计的思考，是高水平思考的体现

### 对应截图
*![](/static/screenshots/screenshot_005_909f317e-0425-4922-8b1e-236bc39a76a9.jpg)
*![](/static/screenshots/screenshot_006_e9bdf0e4-587f-4a2c-ac27-6398d40d2704.jpg)
*![](/static/screenshots/screenshot_007_efca02db-a650-4659-8b0f-b313e17adb08.jpg)

---

## 多普勒计数的原理详解 [原片 @ 12:30](https://www.bilibili.com/video/BV1ia4y1s7sj_p5?t=750)
### 核心内容
针对学员提问，详细讲解多普勒计数的定义、计算逻辑与实际应用：
1. **定义与数学表达**
   - 多普勒计数是接收器输出的某一时间段（$T1$到$T2$）内的多普勒测量累计值，公式为：
     $$N=\int_{T1}^{T2}(F0-F2)dt$$
   - 其中$F0$是接收器自身产生的固定频率，$F2$是接收的卫星信号频率（因多普勒效应会随相对运动变化）
2. **几何意义与实际计算**
   - 几何意义：该积分代表$F0-F2$随时间变化曲线与时间轴围成的面积
   - 实际计算：将$T1$到$T2$的时间段分成足够小的等分间隔$\Delta t$，在每个小间隔内将$F2$视为常数，计算每个小间隔的面积$(F0-F2)\times\Delta t$，再将所有小面积求和，通过数字电路实现该计算
3. **频率参数示例**
   - 以TRANSIT系统为例：$F0=400kHz$，卫星发射频率$Fs=399.968kHz$，二者固定差值为32kHz；设计时保证$F0$始终大于$F2$，以适配多普勒效应带来的频率变化

### 对应截图
*![](/static/screenshots/screenshot_008_da0ff656-5d74-48f4-b5f9-c6dcac79e270.jpg)
*![](/static/screenshots/screenshot_009_cd096f13-71cc-4978-bec9-76ead7ef2c71.jpg)
*![](/static/screenshots/screenshot_010_3d108901-d7df-4504-adfb-20e281ec58b3.jpg)

---

## 美国GPS相关政策的重要性 [原片 @ 19:27](https://www.bilibili.com/video/BV1ia4y1s7sj_p5?t=1167)
### 核心内容
老师强调了解美国GPS相关政策对研究、项目方向的关键指导作用：
1. **政策对方向的约束与指导**
   - 无论是企业、单位还是个人，在选择研究项目、产业方向时，都需要匹配行业核心政策，避免项目因不符合政策导向被淘汰（类比环保政策下高污染、高能耗项目会被淘汰的例子）
2. **GPS政策的特殊性**
   - GPS作为美国主导的全球导航系统，其政策会直接影响系统的开放程度、精度等级、服务范围等，相关研究和应用必须符合政策导向，才能保证项目的可行性和长期价值

### 对应截图
*![](/static/screenshots/screenshot_011_3a03b4cc-0928-4f79-b31b-79fb4b07e30f.jpg)
*![](/static/screenshots/screenshot_012_d11a3998-8793-4097-bf7e-24f102023236.jpg)

---

## GPS系统的产生与发展历程 [原片 @ 11:51](https://www.bilibili.com/video/BV1ia4y1s7sj_p5?t=711)
### 核心内容
讲解GPS系统从技术储备、项目启动到成熟应用的完整历程：
1. **前期技术储备（1960-1970年代）**
   - 美国海军Timation计划、空军621B计划为GPS提供核心技术基础
   - 1967年、1969年分别发射Timation-1、Timation-2卫星，搭载石英钟
   - 1974年发射NTS-1（Navigation Technology Satellite 1），首次搭载2台铷钟
   - 1977年发射NTS-2，首次搭载铯钟
2. **项目启动与工程推进**
   - 1973年，美国国防部成立联合工作办公室（JPO-Joint Program Office），综合TRANSIT、Timation、621B等方案的优点，提出NAVSTAR/GPS项目方案
   - 1973年12月17日，NAVSTAR/GPS项目正式获批
   - 1978年2月22日，第一颗GPS试验卫星发射成功，标志工程研制阶段启动
   - 1989年2月14日，第一颗GPS工作卫星发射成功，系统进入生产作业阶段
3. **实战验证与系统成熟**
   - 1991年，GPS在海湾战争中首次大规模用于实战
   - 1993年12月8日，宣布系统具备初步工作能力（IOC-Initial Operational Capability）
   - 1995年4月27日，宣布系统具备完全工作能力（FOC-Full Operational Capability）

### 对应截图
*![](/static/screenshots/screenshot_013_ff9f6cb7-0141-4cf4-b72c-148fa9702132.jpg)
*![](/static/screenshots/screenshot_014_482367c3-3d2e-4b61-b7aa-5ef23ba106fe.jpg)
*![](/static/screenshots/screenshot_015_007aea12-cffe-4a21-8aa3-ae51eb10351b.jpg)
*![](/static/screenshots/screenshot_016_24dc24a8-71f2-4fb0-b4f5-bcf6c218bec0.jpg)
*![](/static/screenshots/screenshot_017_74240302-62d0-4014-956f-c6881663c0a1.jpg)

---

## AI总结
本课程首先回顾了第一代卫星导航TRANSIT系统的核心缺陷，明确其被GPS取代的本质原因；随后老师说明课程教学的逻辑矛盾与应对方式，帮助学员建立科学的课程学习思路；接着从数学定义、几何意义、实际计算三个维度详解了多普勒计数的原理；之后强调了美国GPS相关政策对研究和项目方向的指导价值；最后完整梳理了GPS系统从技术储备、项目启动到成熟应用的发展历程，展现了GPS如何通过整合前代技术优点，成为全球通用的卫星导航系统。