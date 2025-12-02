# k-ω SST 湍流模型
SST模型由mentor提出，后续经过改进，经典版本包括SST1994和SST2003,Fidelics默认支持这两个版本
## 1. 基本方程

$$
\frac{\partial (\rho k)}{\partial t} + \frac{\partial (\rho u_j k)}{\partial x_j} = P_k - \beta^* \rho \omega k + \frac{\partial}{\partial x_j} \left[ (\mu + \sigma_k \mu_t) \frac{\partial k}{\partial x_j} \right]
$$

$$
\frac{\partial (\rho \omega)}{\partial t} + \frac{\partial (\rho u_j \omega)}{\partial x_j} = \gamma \frac{\rho}{\mu_t} P_k - \beta \rho \omega^2 + \frac{\partial}{\partial x_j} \left[ (\mu + \sigma_\omega \mu_t) \frac{\partial \omega}{\partial x_j} \right] + 2(1-F_1)\rho \sigma_{\omega 2} \frac{1}{\omega} \frac{\partial k}{\partial x_j} \frac{\partial \omega}{\partial x_j}
$$

## 2. 湍流粘性系数
- SST 1994
$$
\mu_t = \frac{\rho a_1 k}{\max(a_1 \omega, \Omega F_2)}
$$
- SST 2003
$$
\mu_t = \frac{\rho a_1 k}{\max(a_1 \omega, S F_2)}
$$
其中：
- $S = \sqrt{2 S_{ij} S_{ij}}$ 是应变率张量的模，$S_{ij}={1 \over 2}\left( {{{\partial {u_i}} \over {\partial {x_j}}} + {{\partial {u_j}} \over {\partial {x_i}}}} \right)$
- $\Omega = \sqrt{2 W_{ij} W_{ij}}$ 是涡量的模，$W_{ij}={1 \over 2}\left( {{{\partial {u_i}} \over {\partial {x_j}}} - {{\partial {u_j}} \over {\partial {x_i}}}} \right)$
- $F_1$, $F_2$ 是第一、第二混合函数（见下文）

## 3. 产生项
- SST 1994(限制适用于k方程)
$$
P_k = \min(P_k, 20 \beta^* \rho k \omega)
$$
- SST 2003(限制适用于k和omega方程)

$$
P_k = \min(P_k, 10 \beta^* \rho k \omega)
$$

## 4. 混合函数（Blending Functions）

### 第一混合函数 F₁
$$
F_1 = \tanh\left( \arg_1^4 \right)
$$
$$
\arg_1 = \min\left[ \max\left( \frac{\sqrt{k}}{0.09 \omega y}, \frac{500 \mu}{\rho y^2 \omega} \right), \frac{4 \rho \sigma_{\omega 2} k}{CD_{k\omega} y^2} \right]
$$
- SST 1994
$$
CD_{k\omega} = \max\left( 2 \rho \sigma_{\omega 2} \frac{1}{\omega} \frac{\partial k}{\partial x_j} \frac{\partial \omega}{\partial x_j}, 10^{-20} \right)
$$
- SST 2003
$$
CD_{k\omega} = \max\left( 2 \rho \sigma_{\omega 2} \frac{1}{\omega} \frac{\partial k}{\partial x_j} \frac{\partial \omega}{\partial x_j}, 10^{-10} \right)
$$
$y$ 为到最近壁面的距离。

### 第二混合函数 F₂
$$
F_2 = \tanh\left( \arg_2^2 \right), \quad \arg_2 = \max\left( \frac{2\sqrt{k}}{0.09 \omega y}, \frac{500 \mu}{\rho y^2 \omega} \right)
$$

## 5. 模型常数（通过 F₁ 混合得到）
实际计算时所有常数通过以下方式混合：
$$
\phi = F_1 \phi_1 + (1-F_1) \phi_2
$$
其中 $\phi$ 代表 $\sigma_k, \sigma_\omega, \beta,\gamma$ 等。而$\gamma$ 通过下式确定
$\gamma = \beta / \beta^* - \kappa^2 / (\sigma_\omega \sqrt{\beta^*})$


## 6. 壁面边界条件
- 壁面处 k = 0
- 壁面处 ω（粗糙度修正版常用）：
  $$
  \omega = \frac{6\mu}{\beta_1 \rho (\Delta y_1)^2} \quad (\text{光滑壁面，第一个网格点距离 } \Delta y_1)
  $$
  或更常用的高精度形式（Menter推荐）：
  $$
  \omega_w = \begin{cases}
  6\mu/(\beta_1 \rho y^2) & y^+ < 7 \\
  \text{粗糙壁面公式或混合} & y^+ \geq 7
  \end{cases}
  $$

## 7. 常数数值汇总表

| 参数         | 值(SST 1994)          |值(SST 2003)          |
|--------------|-------------|-------------|
| $\beta^*$    | 0.09        | 同(1994)       |
| $a_1$        | 0.31        | 同(1994)       |
| $\kappa$     | 0.41        | 同(1994)       |
| $\beta_1$    | 0.075       | 同(1994)       |
| $\beta_2$    | 0.0828      | 同(1994)       |
| $\sigma_{k1}$| 0.85        | 同(1994)       |
| $\sigma_{k2}$| 1.0         | 同(1994)       |
| $\sigma_{\omega1}$| 0.5    | 同(1994)       |
| $\sigma_{\omega2}$| 0.856  | 同(1994)       |
| $\gamma_1$| $ \beta_1 / \beta^* - \sigma_{\omega1} \kappa^2 / ( \sqrt{\beta^*})$ |5/9|
| $\gamma_2$| $ \beta_2 / \beta^* - \sigma_{\omega2} \kappa^2 / (\sqrt{\beta^*})$  |0.44|

# 参考文献
- Menter, F. R., "Two-Equation Eddy-Viscosity Turbulence Models for Engineering Applications," AIAA Journal, Vol. 32, No. 8, August 1994, pp. 1598-1605, https://doi.org/10.2514/3.12149.
- Menter, F. R., Kuntz, M., and Langtry, R., "Ten Years of Industrial Experience with the SST Turbulence Model," Turbulence, Heat and Mass Transfer 4, ed: K. Hanjalic, Y. Nagano, and M. Tummers, Begell House, Inc., 2003, pp. 625 - 632.