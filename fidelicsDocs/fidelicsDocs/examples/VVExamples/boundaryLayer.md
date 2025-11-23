---
outline: deep
---
<!-- 让表格居中显示的风格 -->
<style>
.center 
{
  width: auto;
  display: table;
  margin-left: auto;
  margin-right: auto;
}
</style>
# 边界层验证
边界层是流动现象中非常常见的一类特征，其具有尺度小、非线性强但是影响重要的几个特点，几乎所有粘性流动都存在边界层的影子。考察边界层的解析能力，对于关注粘性边界层特征的场景非常重要，如物体的阻力、涉及到分离流动的重要场景。
## 层流边界层
[获取该案例](/examples/VVExamples/boundaryLayer.md)   
本案例的主要参数如表格 1所示。

<div class="center">
<p align="center"><strong>表格 1  层流边界层主要参数</strong></p>


| 速度                  | 动力粘度                | 壁面 y⁺     |
|:---------------------:|:-----------------------:|:-----------:|
| 10 m/s                | 1.5×10⁻⁵ Pa·s           | 1           |

</div>
案例收敛情况如Figure.2所示，收敛残差最终为1e-14，接近机器0。


<div align="center">

![收敛残差](/images/tech/examples/validations/image002.png){width=70%}

**Figure 2. 收敛残差**

</div>
该案例的速度分布图 3所示，符合定性预期，其表面摩擦系数与理论值完全符合，如图 4所示。
<div style="text-align: center;">
  <img src="/images/tech/examples/validations/image003.png" width="37%" style="display: inline-block;margin-right: 3%;" alt="横向速度">
  <img src="/images/tech/examples/validations/image004.png" width="48%" style="display: inline-block;" alt="纵向速度">
</div>

<div style="text-align: center; margin-top: 10px;">
  <strong>Figure 3. 近壁面速度分布，横向速度（左侧）与纵向速度（右侧）。</strong>
</div>


<div align="center">

![壁面摩擦系数分布](/images/tech/examples/validations/image005.png){width=70%}

**Figure 4. 壁面摩擦系数分布**

</div>

## 层流热边界层
[获取该案例](/examples/VVExamples/boundaryLayer.md)   
热边界层主要考察Fidelics求解器对传热的边界层解析能力，可对热对流和热传导两方面进行考察。

<div align="center">

![热边界层示意图](/images/tech/examples/validations/image006.jpg){width=70%}

**Figure 5. 热边界层示意图**

</div>

<div class="center">
<p align="center"><strong>表格 2  案例主要参数</strong></p>


| 速度                  | 动力粘度                | 壁面 y⁺     |温度     |普朗特数    |
|:---------------------:|:-----------------------:|:-----------:|:-----------:|:-----------:|
| 10 m/s                | 1.5×10⁻⁵ Pa·s           | 1           | 300           | 0.71           |

</div>

## 湍流边界层
[获取该案例](/examples/VVExamples/boundaryLayer.md)   
本案例的主要参数如表格 3所示，同时该案例Fidelics的计算结果与商业软件进行了比对，湍流模型都采用了一阶迎风格式，对流项CFX采用了High Resolution选项，Fidelics和Fluent采用二阶格式。

<div class="center">
<p align="center"><strong>表格 3  湍流边界层案例主要参数</strong></p>


| 速度                  | 动力粘度                | 壁面 y⁺     |湍流强度|
|:---------------------:|:-----------------------:|:-----------:|:-----------:|
| 10 m/s                | 1.5×10⁻⁵ Pa·s           | 1           | 1%          |

</div>

本案例的收敛残差如Figure.6所示，收敛状况良好，残差接近机器0。
<div align="center">

![湍流边界层收敛图](/images/tech/examples/validations/image007.png){width=70%}

**Figure 6. 湍流边界层收敛图**

</div>

下图为湍动能分布对比，与商业软件Fluent和CFX对比符合良好，湍动能分布体现了对于湍流模型的各项算法实现正确。

<div style="text-align: center;">
  <img src="/images/tech/examples/validations/image008.png" width="70%" style="display: inline-block;" alt="CFX">
  <img src="/images/tech/examples/validations/image009.png" width="70%" style="display: inline-block;" alt="Fluent">
  <img src="/images/tech/examples/validations/image010.png" width="70%" style="display: inline-block;" alt="Fidelics">
</div>

<div style="text-align: center; margin-top: 10px;">
  <strong>Figure 7. 湍动能分布对比，CFX(上)，Fluent(中)，Fidelics(下)。</strong>
</div>

Figure.8为湍流壁面摩擦系数，由于该案例没有理论解，其摩擦系数分布充分发展后的湍流，为半经验情况，尤其在前缘误差较大，并不能说明算法实施有问题。从对比来看，本软件和Fluent都能与半经验解渐近符合，进一步说明在湍流边界层上，该软件有着正确的解析能力。
<div align="center">

![壁面摩擦系数对比](/images/tech/examples/validations/image011.png){width=70%}

**Figure 8. 壁面摩擦系数对比，Fluent与Fidelics均与经验理论值渐近符合，CFX软件误差较大**

</div>