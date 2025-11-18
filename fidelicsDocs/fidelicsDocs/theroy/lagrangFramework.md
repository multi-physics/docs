# 拉格朗日（Lagrangian）描述

拉格朗日框架跟踪**每一个确定的流体质点**（标记为 a）随时间运动的完整历史。质点 a 在初始时刻的位置记为 $\mathbf{X}(a)$，当前时刻的位置为 $\mathbf{x}(a, t)$。

**核心思想**：  
“给每个流体微团贴上永久标签，跟着它一起走，记录它经历的所有变化”。

运动学关系：
$$
\mathbf{x} = \mathbf{x}(\mathbf{X}, t),\qquad \mathbf{v}(\mathbf{X}, t) = \frac{\partial\mathbf{x}(\mathbf{X}, t)}{\partial t}\Bigg|_{\mathbf{X}}
$$

**关键优势**：随同质点运动的时间导数就是普通的偏导数，无需对流项：
$$
\boxed{\frac{\mathrm{D}\Phi}{\mathrm{D}t} = \frac{\partial\Phi}{\partial t}\Bigg|_{\mathbf{X}}}
\tag{2}
$$

**典型控制方程**：

1. 质量守恒（天然满足，或写成密度随物质导数变化）  
   $$\frac{\mathrm{D}\rho}{\mathrm{D}t} + \rho\nabla\cdot\mathbf{v} = 0$$

2. 动量方程（直接用物质加速度）  
   $$\rho\frac{\mathrm{D}\mathbf{v}}{\mathrm{D}t} = -\nabla p + \nabla\cdot\boldsymbol{\tau} + \rho\mathbf{f}$$

3. 能量方程（内能或温度形式）  
   $$\rho\frac{\mathrm{D}e}{\mathrm{D}t} = -p\nabla\cdot\mathbf{v} + \boldsymbol{\tau}:\nabla\mathbf{v} + \rho q$$

这些形式在光滑粒子流体动力学（SPH）、移动粒子半隐式法（MPS）、物质点法（MPM）等无网格拉格朗日方法中直接使用。

## 小结

- 欧拉框架：固定空间网格，方程含有显式对流项 → 适合固定边界问题，是传统 CFD 主流。
- 拉格朗日框架：随流体运动，时间导数无对流项 → 天然适应大变形、自由表面、多相界面追踪问题，是粒子类方法的理论基础。