---
outline: deep
---
# 非稳态计算 <Badge type="info" text="default" />
对于非稳态问题，一般可以写成如下动力学形式（这里的"动"和"力"是抽象意义的，凡是随着时间变化的都可以视为运动，凡是驱动这种变化的，都可以视为力）：
$$
\frac{d \phi}{d  t}  = RHS
$$
## 离散误差
数值计算时，时间步是离散而非连续的，对应上述方程也是离散意义的，所谓n阶精度格式，是指其离散产生的累计全局误差满足：
$${\rm{GE}} = O\left( {\Delta {t^n}} \right)$$
全局误差由单个时间步的误差累计而来，而单个时间步的误差比全局误差高一个精度，局部截断误差（Local Trunction Error,L.T.E)为：
$${\rm{L}}.{\rm{T}}.{\rm{E}} = O\left( {\Delta {t^{n + 1}}} \right) = C{\left( {\frac{{{d^{n + 1}}\phi }}{{d{t^{n + 1}}}}} \right)_{t = {t_0}}}\Delta {t^{n + 1}}$$
## 一般化离散

一般地，对于n时刻的离散(此时n时刻为未知的），我们可以将离散的RHS写作如下形式：
$$ RHS = \sum\limits_i {{\alpha _i}f\left( {{\phi ^{n - i}}} \right)} $$
将离散的$\frac{d \phi}{d  t}$写成如下形式，其中${\delta _i}$代表与时间步、体积等其他相关的量的组合，${\beta _i}$则代表这个离散的常数项：
$$ \frac{{d\phi }}{{dt}} = \sum\limits_i {{\beta _i}{\delta _i}{\phi ^{n - i}}} $$
其中${{\alpha _i}}$和${{\beta _i}}$按照不同的格式，存在不同的组合。不为0的${{\alpha _i}}$对应的i均大于0代表过去时刻的值，是已知的，而小于或者等于0的情形，则是未知时刻的值。

## 显式离散
如果$RHS = \sum\limits_i {{\alpha _i}f\left( {{\phi ^{n - i}}} \right)}$中，不为0的${{\alpha _i}}$对应的i均大于0，则为显示格式，代表RHS只依赖过去时刻的值
显式方式有RK1(等同于显式Euler），RKn，SSP-RKn，显式AB(Adams-Bashforth)。
### 显式RK1(或者显式Euler)
$${{{\phi ^n} - {\phi ^{n - 1}}} \over {\Delta t}} = RHS\left( {{\phi ^{n-1}}} \right)$$
对应的系数组合为${{\beta}}=\{\beta _{0}=1.0，\beta _{1}=-1 \}$，${{\alpha}}=\{\alpha _{1}=1.0 \}$
### 显示RKn <Badge type="tip" text="^1.9.0" />
待补充
### 显示SSP-RKn
待补充
## 隐式离散
如果$RHS = \sum\limits_i {{\alpha _i}f\left( {{\phi ^{n - i}}} \right)}$中，不为0的${{\alpha _i}}$对应的i存在小于或者等于0的情形，则为隐式格式，代表RHS依赖未知时刻的值。
隐式有BDF1(等同于隐式Euler)，BDF2,BDFk，CrackNicolson等等
### 隐式BDF1(或者隐式Euler)
BDF1(Backward Differencing)
$${{{\phi ^n} - {\phi ^{n - 1}}} \over {\Delta t}} = RHS\left( {{\phi ^n}} \right)$$
对应的系数组合为${{\beta}}=\{\beta _{0}=1.0，\beta _{1}=-1 \}$，${{\alpha}}=\{\alpha _0=1.0 \}$
### 隐式BDF2
离散形式如下，其为L-Stable类型。
$${{3{\phi ^n} - 4{\phi ^{n - 1}} + {\phi ^{n - 2}}} \over {\Delta t}} = RHS\left( {{\phi ^n}} \right)$$
本质上是用穿过${\phi ^n},{\phi ^{n - 1}},{\phi ^{n - 2}}$三个点的二次函数给出$\phi(t)$在点$t=t_n$的时间导数：
$$ {\left( {{{{d}\phi } \over {d{t}}}} \right)_{t = {t_n}}}={{3{\phi ^n} - 4{\phi ^{n - 1}} + {\phi ^{n - 2}}} \over {\Delta t}}$$
对应的系数组合为${{\beta}}=\{\beta _{0}=1.0，\beta _{1}=-1 \}$，${{\alpha}}=\{\alpha _0=1.0 \}$
### 隐式BDFk

### 隐式CrackNicolson
离散形式如下，其为A-Stable类型
$${{{\phi ^n} - {\phi ^{n - 1}}} \over {\Delta t}} = {1 \over 2}\left( {RHS\left( {{\phi ^n}} \right) + RHS\left( {{\phi ^{n - 1}}} \right)} \right)$$

对应的系数组合为${{\beta}}=\{\beta _{0}=1.0，\beta _{1}=-1 \}$，${{\alpha}}=\{\alpha _0=0.5, \alpha _1=0.5  \}$