# 三维曲面液膜流动求解
## 基本变量定义
- 定义曲面局部坐标系$(s_1,s_2,z)$   
- 液膜厚度$h=h(s_1,s_2)$     
- 液膜区域一点可以表示为$x_f=x(s_1,s_2)+z\vec n$, 其中 $0<z<h $， $\vec n$为曲面法向
- 认为液膜内速度$\vec u_s$沿着切向，无法向分量
- 液膜某一处的流量定义为$\vec q=\vec q(s_1,s_2)=\int_0^h{\vec u_s dz}$
## 基本方程
- 如果密度恒定，液膜厚度满足连续性方程
$$\frac {\partial h} {\partial t} + \nabla _s \cdot \vec q  = S $$
- 液膜速度满足动量方程(认为液膜厚度方向的速度梯度远大于沿着面内的速度梯度)
$$\rho {{\partial \vec u_s} \over {\partial t}} = \mu {{{\partial ^2}\vec u_s} \over {\partial {z^2}}} - {\nabla _s}p + \rho {\vec g_s}$$

## 求解
对动量方程沿着法向积分，其中阻尼部分
$$\int_0^h\mu {{{\partial ^2}\vec u_s} \over {\partial {z^2}}}dz={\left.\mu {{{\partial}\vec u_s} \over {\partial {z}}}\right|_{z = h}} -{\left.\mu {{{\partial}\vec u_s} \over {\partial {z}}}\right|_{z = 0}} $$
其中上表面阻力可有用户给出，比如外部气流场形成的阻力 $${\left.\mu {{{\partial}\vec u_s} \over {\partial {z}}}\right|_{z = h}}=\tau _h$$
而下表面的阻力,我们可以采取一定的近似手段，如果速度呈现线性分布，则
$${\left.\mu {{{\partial}\vec u_s} \over {\partial {z}}}\right|_{z = 0}} = \mu{{\vec q_s} \over {h^2}}$$
而如果呈现抛物线分布，则
$${\left.\mu {{{\partial}\vec u_s} \over {\partial {z}}}\right|_{z = 0}} = 0$$
一般地，我们不妨设置用户参数$k_f$
$${\left.\mu {{{\partial}\vec u_s} \over {\partial {z}}}\right|_{z = 0}} =k_f\mu{{\vec q_s} \over {h^2}}$$
则动量方程积分后
$$\rho {{\partial \vec q_s} \over {\partial t}} = \tau _h- k_f\mu{{\vec q_s} \over {h^2}}- {\nabla _s}p*h_s + \rho {\vec g_s}*h_s $$
最终形成关于$h$和$q_s$的方程
$$\frac {\partial h} {\partial t} + \nabla _s \cdot \vec q  = S $$
$$\rho {{\partial \vec q_s} \over {\partial t}} = \tau _h- k_f\mu{{\vec q_s} \over {h^2}}- {\nabla _s}p*h_s + \rho {\vec g_s}*h_s $$

变换
$$\frac {\partial h} {\partial t} + \nabla _ \cdot \vec q  = S $$
$$\rho {{\partial \vec q} \over {\partial t}}*h^2+ c{{\vec q}} = (\vec a h+ \vec b)*h^2$$