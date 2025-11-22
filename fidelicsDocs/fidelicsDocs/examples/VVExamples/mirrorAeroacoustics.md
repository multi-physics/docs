---
outline: deep
---
# 汽车后视镜气动声学
## 案例介绍
该案例为某汽车后视镜在风洞来流条件下的声学响应， 来流速度140km/h。
## 案例设置
案例采用高效的计算流程实施：首先进行一定步数的稳态计算，待流场趋于稳定，以该结果进行非稳态仿真，并逐步缩小时间步长，达到声学频率分辨要求。具体设置如下
### 1. 稳态阶段
- 最大迭代步数500
- 各松弛系数0.8
- KOmegaSST 湍流模型
### 2. 声学阶段
- 二阶时间格式，时间步长2e-5s，总时长0.2s
- WALE 湍流模型
- AWE 声学模型
## 计算结果
### 1. 稳态阶段
#### 流动形态
<center>
<img decoding="async" src="/images/tech/examples/validations/vel_side_69.png"  width="80%"/>  

   **Figure 1. 竖直切面流场形态.**

</center>
<center>
<img decoding="async" src="/images/tech/examples/validations/vel_top_69.png"   width="80%"/>  

**Figure 2. 横切面流场形态.**

</center>


### 2. 声学阶段
#### 声功率密度