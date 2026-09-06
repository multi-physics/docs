# 可压缩密度基求解
## 基本方程
## 离散方程
我们直接从离散动量方程入手：
$$
A\vec U = -\nabla p+\vec B_u
$$
以及离散的质量方程(需要检擦一下，扩展到ALE)：

$$
\frac{d (\rho V)}{d  t} + \sum\limits_i {\rho_{fi} {\vec U_{fi}} \cdot \vec S_i } =S_{mass}V
$$
对于可压缩方程，存在状态关系：
$$
\rho = f(p_{abs})=\frac{p_{abs}}{RT}=\frac{p+p_{ref}}{RT}=\psi ({p+p_{ref}})
$$
上述5个方程，五个自变量。
我们的目标是，对于某以步，需要将该方程求解至收敛

## 求解
首先保持$\psi $固定，则上述方程可简化为四个方程（变量为$\vec U$和$p$)

首先存在猜测的解，$\vec U^k$,$p^k$，我们需要求解新解$\vec U^{k+1}=\vec U^{k}+ d\vec U$以及$ p^{k+1}$,使得其满足:
$$
A\vec U^{k+1} = -\nabla p^{k+1}+\vec B_u
$$
$$
\frac{d (\rho V)}{d  t} + \sum\limits_i {\rho_{fi} {\vec U_{fi}}^{k+1} \cdot \vec S_i } =S_{mass}V
$$

对速度增量进行simpleC（或者simple)假设，并带入动量方程(此处存在近似，所以simple算法需要进行内循环)：
$$
D*d\vec U^{k+1} + A\vec U^{k} = -\nabla p^{k+1}+\vec B_u
$$
其中$D=diag(A)$或者$D=\sum(A,2)$(对行求和)   
则
$$
D*d\vec U^{k+1}  = -\nabla p^{k+1}+\vec B_u-A\vec U^{k} 
$$
则
$$
\vec U^{k+1}  = -\frac{1}{D}\nabla p^{k+1}+\frac{1}{D}（\vec B_u-A\vec U^{k})+U^{k}
$$
令
$$
\vec {HbyA}  = \frac{1}{D}（\vec B_u-A\vec U^{k})+U^{k}
$$
则
$$
\vec U^{k+1}  = -\frac{1}{D}\nabla p^{k+1}+\vec {HbyA}
$$
以及
$$
U_n  = -\frac{1}{D}\frac{\partial p^{k+1}}{\partial n}+HbyA_f
$$
其中
$HbyA_f$在内部面采样插值的方式得到，在边界上由于没有邻居单元的$\vec {HbyA}$,则需要特殊方式处理，见后面章节。   
带入质量方程则得到压力方程：
### 1. 不可压流体
由$\nabla \cdot \vec U^{k+1}  = 0$, 积分形式$\sum(U_nS ) = 0$
$$
\sum(\frac{1}{D}\frac{\partial p^{k+1}}{\partial n}S)  =sum(HbyA_fS)
$$
得到压力方程。
### 2. 可压缩流体
由$\frac{d (\rho)}{d  t}+\nabla \cdot(\rho \vec U^{k+1} ) = 0$ ， ALE积分形式$\frac{d (\rho V)}{d  t}+\sum(\rho_f U_nS )  = 0$ 

$$
-\frac{d (\rho V)}{d  t}+\sum(\frac{\rho_f}{D}\frac{\partial p^{k+1}}{\partial n}S)  =sum(\rho_f*HbyA_f*S)
$$
求解过程中，$rho_f$可以保持不变，则得到压力方程。
## $HbyA_f$ 边界处理