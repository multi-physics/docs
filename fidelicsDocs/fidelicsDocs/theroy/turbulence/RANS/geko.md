# GEKO
GEKO模型是Generalized K-ω 模型的简称。
## 基本方程（Basic Equations）

$$
\frac{\partial (\rho k)}{\partial t} + \frac{\partial (\rho U_j k)}{\partial x_j} = \tilde{P}_k - C_\mu \rho k \omega + \frac{\partial}{\partial x_j} \left[ \left( \mu + \frac{\tilde{\mu}_t}{\sigma_k} \right) \frac{\partial k}{\partial x_j} \right] \tag{A1}
$$

$$
\frac{\partial (\rho \omega)}{\partial t} + \frac{\partial (\rho U_j \omega)}{\partial x_j} = C_{\omega1} P_\omega - C_{\omega2} F_{\rm MIX} \rho \omega^2 + F_{\rm NW} CD + \frac{\partial}{\partial x_j} \left[ \left( \mu + \frac{\tilde{\mu}_t}{\sigma_\omega} \right) \frac{\partial \omega}{\partial x_j} \right] \tag{A2}
$$

## 核心定义

$$
\tilde{\mu}_t = \mu_t = \rho \nu_t = \rho \frac{k}{\max\left( \omega, C_{\rm Realize} \frac{S}{\sigma_{\rm Realize}} \right)} \tag{A3}$$

$$
P_k = \mu_t S^2, \quad \text{where} \quad S = \sqrt{2 S_{ij} S_{ij}}, \quad S_{ij} = \frac{1}{2} \left( \frac{\partial U_i}{\partial x_j} + \frac{\partial U_j}{\partial x_i} \right) \tag{A4}$$

$$
P_\omega = \frac{\rho}{\tilde{\mu}_t + 0.001 \mu} P_k \tag{A5}$$

$$
\tau_{ij} = -\rho \overline{u_i'u_j} = \mu_t 2 S_{ij} \tag{A6}
$$

$$
CD = \rho \frac{2}{\sigma_\omega} \frac{1}{\omega} \frac{\partial k}{\partial x_j} \frac{\partial \omega}{\partial x_j} \tag{A7}
$$

> 注意：严格的应力张量表达式为：
> $$
> \tau_{ij} = -\rho \overline{u_i'u_j} = \mu_t \left( 2 S_{ij} - \frac{2}{3} \frac{\partial u_k}{\partial x_k} \delta_{ij} \right) - \frac{2}{3} \rho k \delta_{ij} \tag{A7'}
> $$

## 混合函数与校准函数（Blending & Calibration Functions）

$$
L_T = \frac{\sqrt{k}}{C_\mu \omega}, \quad \tilde{k} = \max(k, CFb_{\rm Lam} \cdot \omega)

x_{\rm blend} = CFb_{\rm Turb} \frac{L_T}{L_y}, \quad F_{\rm blend} = \tanh(x_{\rm blend}^4) \tag{A8}
$$
$$
F_{\rm SEP} = (1 + f_D) \psi, \quad \psi = C_\psi \cdot (C_{\rm SEP} - 1.0) \cdot F_{\rm blend}, \quad C_\psi = 0.2454 C_{\rm SEP}^{0.803} \tag{A9}
$$
$$
f_D = \frac{1}{1 + (y^+ / A^+)^2}, \quad y^+ = \frac{1}{\kappa} \frac{(k/\omega)}{\nu} \tag{A10}
$$
$$
F_{\rm NW} = \begin{cases} 
1 & \text{if } CD > 0 \\
C_{\rm NW} - (C_{c1} + C_{c2} C_{\rm NW}) f_D F_{\rm Lim} & \text{if } CD \leq 0 
\end{cases} \tag{A11}
$$
$$
F_{\rm Lim} = \frac{\text{Destr}}{\max(\text{Destr}, 2.0 \cdot CD)}, \quad \text{Destr} = C_\omega F_{\rm MIX} \rho \omega^2 \tag{A12}
$$
$$
F_{\rm MIX} = F_{\rm SEP} + C_{\rm MIX} + 0.13 C_{\rm JET} (F_{\rm JET} - 1.0) (1 - F_{\rm blend}) \tag{A13}
$$
$$
x_{\rm JET} = 4.0 \left( \frac{S \omega - 0.9}{0.15} - \frac{1}{2} \right), \quad S_{\rm OO} = \min \left( S, \frac{\Omega}{0.3 \omega} \right), \quad F_{\rm JET} = \frac{1}{2} (1 + \tanh(x_{\rm JET})) \tag{A14}
$$
## 限幅器（Limiters）
$$
\tilde{P}_k = \min(P_k, C_{Pk_{\rm lim}} \rho \epsilon) \tag{A15}
$$
$$
\nu_t = \min \left( \frac{k}{\omega}, C_{\rm Realize} \frac{k}{S} \right) = \frac{k}{\max\left( \omega, C_{\rm Realize} \frac{S}{\sigma_{\rm Realize}} \right)} \tag{A16}
$$
$$
\sigma_k = \tilde{\sigma}_k [1 + (C_{\rm SEP}-1) \cdot 0.25 \cdot F_{\rm blend}], 

\sigma_\omega = \tilde{\sigma}_\omega [1 + (C_{\rm SEP}-1) \cdot F_{\rm blend}] \tag{A17}
$$
$$
C_{\omega1} = \frac{1}{C_\mu} \left( C_{\omega2} - \kappa^2 C_\mu^{1/2} \frac{1}{\tilde{\sigma}_\omega} \right) \tag{A18}
$$
## 模型常数表

| 参数             | 值                  | 备注                     |
|------------------|---------------------|--------------------------|
| $C_\mu$            | 0.09                |                          |
| $C_{\omega2}   $   | 0.083               |                          |
| $\tilde{\sigma}_k $| 1.0                 |                          |
|$ \tilde{\sigma}_\omega$ | 1.17            |                          |
| $C_{\rm Realize}$  | 0.577               | ≈ $\frac{1}{\sqrt{3}}    $             |

| 参数       | κ   | CFb_Turb | CFb_Lam     | A⁺  | $C_{c1}$ | $C_{c2}$ |
|------------|-----|----------|-------------|-----|--------|--------|
| 值         | 0.41| 2.0      | 1, (25.)    | 15  | 1.7    | 1.4    |

| 参数       | $C_{\rm SEP}$ | $C_{\rm MIX}$ | $C_{\rm NW}$ | $C_{\rm JET}$ | 
|------------|-------------|-------------|------------|-------------|
| GEKO-1.75  | 1.75        | 0.00        | 0.5        | 1.0         |

| 参数  范围|
|---------------------|
|    0.7  ≤ $ C_{\rm SEP} $ ≤ 2.5 |
|    -2.0 ≤ $ C_{\rm NW}  $ ≤ 2.0 |
|    -0.2 ≤ $ C_{\rm MIX} $ ≤ 1.0 |
|    0.0  ≤ $ C_{\rm JET} $ ≤ 1.2  |

## 参考文献
- Generalized k − ω (GEKO) Two-Equation Turbulence Model，AIAA-J
