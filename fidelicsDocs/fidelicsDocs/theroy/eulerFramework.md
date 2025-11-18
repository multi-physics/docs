# 欧拉（Eulerian）描述

欧拉框架关注**固定空间点** (x, y, z, t) 处的流体物理量随时间的变化。流场被看作速度场、压力场、密度场等在空间和时间上的函数。

**核心思想**：  
“在空间中钉一根探针，记录经过此点的流体性质随时间的变化”。

所有物理量都是位置 x 和时间 t 的函数：
- 速度：
   $$\mathbf{v} = \mathbf{v}(\mathbf{x}, t)$$
- 密度：
   $$\rho = \rho(\mathbf{x}, t)$$
- 压力：
   $$p = p(\mathbf{x}, t)$$

**任意物理量 Φ 的全微分（物质导数）必须显式写出对流项**：
$$
\boxed{\frac{\mathrm{D}\Phi}{\mathrm{D}t} = \frac{\partial\Phi}{\partial t} + \mathbf{v}\cdot\nabla\Phi}
\tag{1}
$$

**典型控制方程（守恒形式，欧拉框架）**：

1. 质量守恒（连续方程）  
   $$\frac{\partial\rho}{\partial t} + \nabla\cdot(\rho\mathbf{v}) = 0$$

2. 动量守恒（N-S 方程，守恒形式）  
   $$\frac{\partial(\rho\mathbf{v})}{\partial t} + \nabla\cdot(\rho\mathbf{v}\mathbf{v}) = -\nabla p + \nabla\cdot\boldsymbol{\tau} + \rho\mathbf{f}$$

3. 能量守恒（总能形式）  
   $$\frac{\partial(\rho E)}{\partial t} + \nabla\cdot[(\rho E + p)\mathbf{v}] = \nabla\cdot(\boldsymbol{\tau}\cdot\mathbf{v}) + \rho(\mathbf{f}\cdot\mathbf{v} + q)$$

这些方程直接对应有限体积法的守恒离散形式，是目前绝大多数 CFD 软件（OpenFOAM、Fluent、CFX、STAR-CCM+ 等）的理论基础。

