# 边界条件设定

## Navier-Stokes动量方程（守恒形式，含体积力）

在三维惯性坐标系中，欧拉框架下任意物质属性$\phi$可以写成如下控制方程(我们采用守恒型，以支持最一般的情况)：
$$
\frac{\partial \phi}{\partial t} + \nabla \cdot (\vec U \phi) = RHS
$$
其中$\vec U$为流体的速度
## 时间偏导数的重新理解
上述方程中的时间偏导数的意义是，固定空间位置进行的求导，这一点对于欧拉求解发非常重要，因为我们可以将物质属性的变化率分解为固定到空间(网格)的变化率和对流引起的变化率的叠加（这就是物质导数的意义）。   
但是当参考系本身发生变化时，比如MRF或者动网格，如果我们需要继续在单元上计算其时间偏导，由于单元本身是运动的，则会与惯性系的计算结果引起额外的差别，该差别如下：
$$
(\frac{\partial (\phi)}{\partial t})_{I}= (\frac{\partial (\phi)}{\partial t})_{e}-\vec U_e \cdot \nabla(\phi);
$$
其中$\vec U_e$为随体单元的速度。
则定义在单元随体坐标系上的一般化的NS方程为：
$$
(\frac{\partial (\phi)}{\partial t})_{e} -\vec U_e \cdot \nabla(\phi)+ \nabla \cdot (\vec U \phi) = RHS
$$
或者
$$
(\frac{\partial (\phi)}{\partial t})_{e} + \phi \nabla \cdot \vec U_e+ \nabla \cdot (\vec U-\vec U_e) \phi) = RHS
$$
上述方程为一般意义上的随体微分方程
## 有限体积随体积分离散
考虑到
$$
(\frac{\partial (\Omega \phi)}{\partial t})_{e}=\Omega (\frac{\partial ( \phi)}{\partial t})_{e}+\phi(\frac{\partial (\Omega  )}{\partial t})_{e}
=\Omega (\frac{\partial ( \phi)}{\partial t})_{e}+\phi(\frac{\partial (\Omega  )}{\partial t})_{e}
$$
同时考虑到
$$
(\frac{\partial (\Omega  )}{\partial t})_{e}=\oint {\vec U_e\cdot d\vec S}\equiv=\Omega \nabla \cdot \vec U_e
$$
则：
$$
(\frac{\partial (\Omega \phi)}{\partial t})_{e}=\Omega ((\frac{\partial ( \phi)}{\partial t})_{e}+\nabla \cdot \vec U_e)
$$
则随体积分方程为：
$$
(\frac{\partial (\Omega \phi)}{\partial t})_{e}+ \oint{ \phi (\vec U-\vec U_e) \cdot d\vec S }= RHS
$$

## 随体单元上的动量方程
将$\phi=\rho \vec U$代入
$$
(\frac{\partial (\Omega \rho \vec U)}{\partial t})_{e}+ \oint{ \rho \vec U (\vec U-\vec U_e) \cdot d\vec S }= \Omega( -\nabla p + \nabla \cdot \boldsymbol{\tau} + \vec f)
$$

## 动量方程的边界条件：
为了推导不同边界的条件，我们先定义速度在随体坐标系中的导数（速度可以为相对速度或者绝对速度），将其称为随体加速度
### 随体加速度计算
我们定义
$$
\vec a_e=(\frac{\partial (\vec U)}{\partial t})_{e}
$$
是流体速度在随体坐标系中加速度，，当U为相对系中的速度时，对于某些运动规律，我们很容易得到其加速度，但是绝对系中的速度，我们容易知道其在绝对系中的加速度$a_I$.我们一般采用如下方式进行转换：     

对于任意矢量，其在不同的坐标系中的导数存在如下关系，[参考这里给出的结论，本质上是坐标基的变化。](https://openfoamwiki.net/index.php/See_the_MRF_development) $(\frac{d\vec A}{d t})_{I}= (\frac{d\vec A}{d t})_{e}+\vec \omega \times \vec A_I$
则
$$
\vec a_e=(\frac{\partial (\vec U)}{\partial t})_{e}=\vec a_I-\vec \omega \times \vec U
$$
将动量方程沿着法向投影，对流项考虑不可穿透性，为0，并忽略粘性项，则得到压力的法向梯度为：
$$
\frac{\partial p}{\partial n}=  f_n-\rho a_{e}
$$
### 无滑移壁面   
对于无滑移壁面，物质点随着单元运行，若采用相对速度，则$\vec a_e=\vec 0$, 若采用绝对速度，$\vec a_e=\vec a_I-\vec \omega \times \vec U$,其中$\vec a_I=\vec a_I (U)$可以按照给定的壁面速度计算出来。   
-  比如做圆周运动的壁面，采用惯性坐标系以及相对速度计算，壁面速度$(\omega \times \vec r)$,对应加速度为$\vec a_e=-{\omega}^2\vec r$，体积力为0，则压力法向梯度为${\omega}^2\vec r$
-  比如做圆周运动的壁面，比如MRF**相对速度**计算，则壁面速度为0，则壁面加速度和科式加速度为0，但离心力不为0，$\vec f=-{\omega \times (\omega \times \vec r)}={\omega}^2\vec r$，.可得到压力法向梯度为${\omega}^2\vec r$. 若离心力处理为势，则压力法向梯度为0，但势的梯度会补偿回来，真实压力的梯度依然是正确的。
-  比如做圆周运动的壁面，比如MRF**绝对速度**计算（无离心力和科式力），则体积力附加加速度为$-{\omega \times (\omega \times \vec r)}$[(参考这里的推导，在相对系中采用绝对速度的方程，其中多出来的$-\omega \times \vec U=-{\omega \times (\omega \times \vec r)}$=${\omega}^2\vec r$)](https://openfoamwiki.net/index.php/See_the_MRF_development)，同时壁面的绝对速度在绝对系加速度为$a_I=-{\omega}^2\vec r$。则
$$
\frac{\partial p}{\partial n}=  f_n-\rho a_{e}=f_n- a_{I}+\vec \omega \times \vec U={\omega}^2\vec r-(-{\omega}^2\vec r)-{\omega}^2\vec r={\omega}^2\vec r
$$
-  再比如静止的流体，如果我们采用MRF**相对速度**计算，则壁面速度不为零，与旋转系相反得速度， 则壁面加速度为$\vec a_e=-{\omega}^2\vec r$，同时离心力加速度为$\vec f=-{\omega \times (\omega \times \vec r)}={\omega}^2\vec r$，科式加速度为$\vec f=-2{\omega \times (-\omega \times \vec r)}=-2{\omega}^2\vec r$。三者之和为0,是符合预期得。
-  再比如静止得流体，如果我们采用MRF**绝对速度**计算（无离心力和科式力），则壁面速度为零,则体积力附加加速度为0。同时绝对速度在绝对坐标系中的加速度$\vec a_{I}=0$. $\vec a_{e}=\vec a_{I}-\vec \omega \times \vec U=\vec 0-\vec 0=\vec 0$。

### 出口边界
对于出口边界，一般会给定压力边界，对于速度，我们在随体坐标系中给定0梯度(需要进一步论证)，当回流发生时，我们限制其法向速度为0，并将压力改为梯度边界，此梯度计算方式于壁面类似
- 采用绝对速度，附加加速度为$a_n=-\vec \omega \times \vec U$. 可以看出附加加速度和wxU相互抵消了。而a_I需要某种方式获得，对于充分发展的流动，我们可以认为为0.
$$
\frac{\partial p}{\partial n}=  \rho (a_n-a_{e})=\rho (a_n- a_{I}+\vec \omega \times \vec U)=-\rho a_{I}
$$
- 采用相对速度，附加加速度为$a_n=-2\vec \omega \times \vec U$。 需要引入科式力，//TODO 但是目前我们没有把这部分整合到snForce里面
$$
\frac{\partial p}{\partial n}=  -2\rho (\vec \omega \times \vec U-a_{e})
$$