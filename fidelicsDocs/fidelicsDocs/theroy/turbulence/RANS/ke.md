# 标准 k-ε 湍流模型（Standard k-ε Model）
## 1. 基本方程
$$
\frac{\partial (\rho k)}{\partial t} + \frac{\partial (\rho u_j k)}{\partial x_j} = 
\frac{\partial}{\partial x_j} \left[ \left( \mu + \frac{\mu_t}{\sigma_k} \right) \frac{\partial k}{\partial x_j} \right] + P_k - \rho \varepsilon
$$

$$
\frac{\partial (\rho \varepsilon)}{\partial t} + \frac{\partial (\rho u_j \varepsilon)}{\partial x_j} = 
\frac{\partial}{\partial x_j} \left[ \left( \mu + \frac{\mu_t}{\sigma_\varepsilon} \right) \frac{\partial \varepsilon}{\partial x_j} \right] + 
C_{1\varepsilon} \frac{\varepsilon}{k} P_k - C_{2\varepsilon} \rho \frac{\varepsilon^2}{k}
$$

## 2. 湍流粘性系数（Boussinesq 假设）
$$
\mu_t = \rho C_\mu \frac{k^2}{\varepsilon}
$$

## 3. 湍流生成项 P_k
$$
P_k = \mu_t \left( \frac{\partial u_i}{\partial x_j} + \frac{\partial u_j}{\partial x_i} \right) \frac{\partial u_i}{\partial x_j} 
= 2 \mu_t S_{ij} S_{ij}
$$

## 4. 模型常数
| 常数         | 推荐值       | 说明                              |
|--------------|--------------|-----------------------------------|
| $C_\mu$      | 0.09         |                                   |
| $C_{1\varepsilon}$ | 1.44    | 有时写作 1.45（Fluent 早期），现统一 1.44 |
| $C_{2\varepsilon}$ | 1.92    |                                   |
| $\sigma_k$   | 1.0          | k 的湍流 Prandtl 数               |
| $\sigma_\varepsilon$ | 1.3     | ε 的湍流 Prandtl 数               |

## 5. 壁面处理方式（高 Re 形式）
标准 k-ε 是**高雷诺数模型**，不积分到壁面，必须配合壁面函数（Wall Functions）：

| 变量   | 壁面边界条件                     | 说明                              |
|--------|----------------------------------|-----------------------------------|
| k      | $\frac{\partial k}{\partial n}=0$（零通量） | 或用壁面函数源项计算              |
| ε      | $\varepsilon = \frac{C_\mu^{3/4} k^{3/2}}{\kappa y}$ | 在第一个内节点计算，不设边界值    |
| u      | 使用对数律壁面函数（Log-law）    | 要求 30 ≤ y⁺ ≤ 300（最佳 30~100） |

## 6. 可选修正
| 修正项                  | 作用                               | 
|-------------------------|------------------------------------|
| Cattaneo 修正           | 修正 $C_{1\varepsilon}$ 随应变率变化 |
| 生成项上限限制          | $P_k \leq 10 \rho \varepsilon$      |
| 浮力产生项 $P_{kb}$     | 热浮力流动                         |
| 可压缩修正              | 高马赫数流动                       |

## 7. 优缺点总结
| 优点                                   | 缺点                                     |
|----------------------------------------|------------------------------------------|
| 数值鲁棒性极强                         | 近壁区必须用壁面函数                     |
| 计算量小、收敛快                       | 对强逆压梯度分离、曲率流预测较差         |
| 对自由剪切流（jet、wake、mixing layer）表现良好 | 对旋转、强 swirl 流动效果差              |
| 工业界使用最广泛的湍流模型             | 不适用于低 Re、近壁直接求解              |

## 8. 参考文献
- Launder, B. E., & Spalding, D. B. (1974). "The numerical computation of turbulent flows." *Computer Methods in Applied Mechanics and Engineering*, 3(2), 269–289.
- NASA Turbulence Modeling Resource ：https://turbmodels.larc.nasa.gov