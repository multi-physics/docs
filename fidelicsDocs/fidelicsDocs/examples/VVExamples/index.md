---
outline: deep
---
# Fidelics V&V 验证
## 前言
### CAE软件验证的必要性和重要性
工程辅助设计软件(CAE) 已经广泛应用于工程设计、研究、工况评估，用于理解与流动有关的的各类物理过程，如燃烧、湍流等。但是实际中，大部分应用人员非CAE算法专家，经常把CAE工具当作一个黑匣子使用，似乎默认了所有软件得到的结果是正确的，但事实上恰恰相反，目前CAE软件还不能当作黑匣子使用，特别是一些未经充分验证的软件，或者功能不完备的软件，将其用于实际工业设计中的风险特别大，最后花费了代价，可能并不能有效指导实际产品，因此对CAE软件进行合理的验证很有必要，也关乎到CAE产品真正价值的发挥。
### V&V 验证简介
CAE软件的验证可以分为验证(Validation)和确认(Verification), 简称V&V。Verification 的主要内涵为确认物理模型到数值算法以及程序实现的过程是正确无误的，这类验证应该先于Validation进行。Validation的主要内涵为验证数学模型是否能够正确刻画对应的物理现象，这类验证涉及到的范围不简单是某一个软件本身，而是涵盖了模型提出、软件开发和用户应用三个方面。模型提出在一定的假设等前提条件下论证了其模型的合理性，软件开发过程则需要在Verification基础上进一步通过设定的理论问题或者实际有实验数据的案例验证模型是否恰当。而在实际应用中，特别是在计算一些实际问题时，一般也应该进行相关的案例验证，以确保模型对于所研究问题是适当的。
### 验证策略
TODO: 待补充
### 可持续性验证
TODO: 待补充
## 基准案例
### 边界层
边界层是流动现象中非常常见的一类特征，其具有尺度小、非线性强但是影响重要的几个特点，几乎所有粘性流动都存在边界层的影子。考察边界层的解析能力，对于关注粘性边界层特征的场景非常重要，如物体的阻力、涉及到分离流动的重要场景。
1. [层流边界层](/examples/VVExamples/boundaryLayer#层流边界层)
2. [层流热边界层](/examples/VVExamples/boundaryLayer#层流热边界层)
3. [湍流边界层](/examples/VVExamples/boundaryLayer#湍流边界层)
### 管流
本案例依然在验证边界层的解析能力，但是与平板边界层有两点不同，其一是本案例为内流，而平板边界层为外流；其二是本案例有一个守恒关系，即管流压降和壁面阻力成正相关，因此可以通过该案例进一步验证粘性力和压力耦合是否正确解析。
1. [层流管流](/examples/VVExamples/pipeFlow#层流管流)
2. [湍流管流](/examples/VVExamples/pipeFlow#湍流管流)
### 分离流
分离流典型出现于流动逆压扩张过程或者钝体尾部，工程领域很多场合如各类飞行器大攻角飞行、发动机喘振工况、以及很多不具备气动外形的部件均可能存在分离流动，而且分离流动目前还没有得到很好的理论和数值算法解决，是目前流体力学领域和计算流体力学领域的重要问题，具有重要的学术价值和工程价值。我们这里选择经典的圆柱和方块进行案例验证。
1.	[圆柱绕流](/examples/VVExamples/cylinderFlow)
2.	方块绕流
###	非稳态流动
1.	[圆柱绕流](/examples/VVExamples/unsteadyCylinderFlow)
## 场景案例
1.	[翼型外流场](/examples/VVExamples/NACA0012)
2.	[汽车外流场](/examples/VVExamples/carExternalFlow)
3.	[跨音速叶珊](/examples/VVExamples/casecade1055)
4.	[核燃料组件](/examples/VVExamples/nuclearRod)
## 	多物理场耦合案例
1.	[圆柱强迫振荡](/examples/VVExamples/cylinderFSI#强迫振荡)
2.	[圆柱自激振荡](/examples/VVExamples/cylinderFSI#自激振荡)
3.	[圆柱-梁自激振荡](/examples/VVExamples/cylinderFSI#圆柱-梁自激振荡)
4.  [汽车后视镜声学](/examples/VVExamples/mirrorAeroacoustics)
5.	[共轭传热](/examples/VVExamples/CHTFlow)

备注：所有内容均为原创，保留所有著作权，未经许可，本文档禁止任何形式的转载、借鉴。