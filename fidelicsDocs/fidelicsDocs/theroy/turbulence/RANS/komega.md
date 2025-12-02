# Wilcox k-ω 模型

## 1. 基本方程
$$
\frac{\partial (\rho k)}{\partial t} + \frac{\partial (\rho u_j k)}{\partial x_j} = 
P_k - \beta^* \rho \omega k + 
\frac{\partial}{\partial x_j} \left[ (\mu + \sigma^* \mu_t) \frac{\partial k}{\partial x_j} \right]
$$

$$
\frac{\partial (\rho \omega)}{\partial t} + \frac{\partial (\rho u_j \omega)}{\partial x_j} = 
\alpha \frac{\rho}{\mu_t} P_k - \beta \rho \omega^2 + 
\frac{\partial}{\partial x_j} \left[ (\mu + \sigma \mu_t) \frac{\partial \omega}{\partial x_j} \right] + 
\underbrace{2(1 - F_1) \rho \sigma_{d} \frac{1}{\omega} \frac{\partial k}{\partial x_j} \frac{\partial \omega}{\partial x_j}}_{\text{交叉扩散项（Cross-diffusion term）}}
$$


## 2. 湍流粘性系数
$$
\mu_t = \rho \frac{k}{\omega} \quad
$$

## 3. 生成项
$$
P_k = \tau_{ij} \frac{\partial u_i}{\partial x_j} = \mu_t \left( \frac{\partial u_i}{\partial x_j} + \frac{\partial u_j}{\partial x_i} \right) \frac{\partial u_i}{\partial x_j} 
\quad \left( \text{对于不可压缩流，等价地 } P_k = \mu_t S^2 \right)
$$

## 5. 交叉扩散混合函数 F₁（仅用于交叉扩散项开关）
$$
F_1 = \tanh \left( \left[ \min \left( \max \left( \frac{\sqrt{k}}{\beta^* \omega y}, \frac{500 \nu}{y^2 \omega} \right), \frac{4 \rho \sigma_{d2} k}{CD_{k\omega} y^2} \right) \right]^4 \right)
$$
$$
CD_{k\omega} = \max \left( 2 \rho \sigma_{d2} \frac{1}{\omega} \frac{\partial k}{\partial x_j} \frac{\partial \omega}{\partial x_j}, 10^{-10} \right)
$$
y 为到最近壁面的距离。

## 6. 模型常数（2006/2008 最终版）

| 参数          | 数值          | 说明                                      |
|---------------|---------------|-------------------------------------------|
| $\beta^*$     | 0.09          | 固定（全场相同）                          |
| $\alpha$      | 5/9 ≈ 0.5556  |                                           |
| $\beta$       | 0.075         | = $\beta_0 \cdot \beta_0^*$               |
| $\sigma$      | 0.5           | 湍流扩散系数（ω 方程）                    |
| $\sigma^*$    | 0.6           | 湍流扩散系数（k 方程）                    |
| $\sigma_{d1}$ | 0.0           | 内层交叉扩散系数（关闭）                  |
| $\sigma_{d2}$ | 0.125         | 外层交叉扩散系数（仅自由剪切层开启）      |
| $\kappa$      | 0.41          | 仅用于对数律验证，不参与闭合              |

> 注意：2006 版将 $\beta^* = 9/100$ 精确保持为 0.09，$\beta = 3/40 = 0.075$，不再随低 Re 修正。

## 8. 壁面边界条件
- k 壁面：$ k = 0 $
- ω 壁面（光滑壁面，推荐高精度形式）：
  $$
  \omega = \frac{6\nu}{\beta y_1^2} \quad \text{(第一个网格点处，适用于 y⁺ ≤ 2.5)}
  $$
  更精确的混合形式（Wilcox 推荐）：
  $$
  \omega^+ = \begin{cases}
  6 / (\beta y^{+2}) & y^+ \le 7 \\
  2\sqrt{ (S_{xy}^+)^2 + (S_{xz}^+)^2 + \cdots } & y^+ > 7 \quad \text{(粗糙或强逆压梯度时)}
  \end{cases}
  $$

## 9. 适用范围与特点
- 对自由剪切层（jet、wake、mixing layer）传播率极准（优于 SST）
- 对逆压梯度分离预测偏弱（不如 SST）
- 对壁面距离 y 极其敏感（自由流中 ω → 0 极慢）
- 推荐与 SST 联合使用（SST 就是在此基础上改造而来）

## 参考文献
- Wilcox, D. C. (2006). *Turbulence Modeling for CFD* (3rd ed.). DCW Industries. Chapter 5.
- Wilcox, D. C. (2008). “Formulation of the k-ω Turbulence Model Revisited,” AIAA Journal, 46(11).