<!DOCTYPE html>
<html lang="zh-CN">

<head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/images/logos/64x64.ico" type="image/x-icon">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>航空汽车声学仿真 | Fidelics</title>
    <link href="../css/tailwind.css" rel="stylesheet">

      <!-- 社交分享缩略图 -->
    <meta property="og:title" content="航空汽车声学仿真 | Fidelics">
    <meta property="og:description" content="高精度声场分析，宽频噪声预测，声源定位，降噪优化">
    <meta property="og:image" content="https://fidelics.cn/images/logos/favicon.jpg">
    <meta property="og:image:width" content="512">
    <meta property="og:image:height" content="512">
    <meta property="og:type" content="website">


      <!-- 微信分享（复用签名） -->
    <script src="https://res.wx.qq.com/open/js/jweixin-1.6.0.js"></script>
  <script src="https://fidelics.cn/js/wechatShare.js"></script>
  <script>

    initWx('航空汽车声学仿真 | Fidelics', '高精度声场分析，宽频噪声预测，声源定位，降噪优化','https://fidelics.cn/images/logos/111.png');
  </script>


    <style>
        .glass {
            @apply bg-slate-800/30 backdrop-blur-sm border border-slate-700;
        }

        .gradient-text {
            @apply bg-gradient-to-r bg-clip-text text-transparent;
        }
    </style>
</head>


<body class="bg-slate-950 text-white">

    <?php include '../header.html'; ?>

    <!-- Hero -->
    <section class="pt-32 pb-20 px-6 relative overflow-hidden">
        <div class="max-w-6xl mx-auto text-center">
            <h1 class="text-5xl md:text-6xl font-bold mb-6">
                <span class="gradient-text from-cyan-400 to-blue-500">航空汽车声学仿真</span>
            </h1>
            <p class="text-xl text-gray-300 mb-8">宽频噪声预测 · 声源定位 · 降噪优化</p>
            <div class="flex justify-center space-x-4">
                <a href="#demo"
                    class="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-semibold hover:scale-105 transition">查看演示</a>
                <a href="#contact"
                    class="px-6 py-3 border border-cyan-500 rounded-full font-semibold hover:bg-cyan-500/20 transition">联系我们</a>
            </div>
        </div>
    </section>

    <!-- 核心能力 -->
    <section class="py-16 px-6">
        <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12 gradient-text from-purple-400 to-pink-500">核心技术能力</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="glass p-6 rounded-xl text-center">
                    <h3 class="text-xl font-bold text-cyan-300 mb-2">宽频噪声建模</h3>
                    <p class="text-gray-400 text-sm">支持 1Hz–20kHz 全频段，捕捉湍流、喷流、结构振动噪声</p>
                </div>
                <div class="glass p-6 rounded-xl text-center">
                    <h3 class="text-xl font-bold text-purple-300 mb-2">FW-H 声比拟</h3>
                    <p class="text-gray-400 text-sm">高精度远场声传播，兼容动网格与旋转声源</p>
                </div>
                <div class="glass p-6 rounded-xl text-center">
                    <h3 class="text-xl font-bold text-emerald-300 mb-2">声源定位与降噪</h3>
                    <p class="text-gray-400 text-sm">波束成形 + AI 优化，定位噪声源并提出结构/气动改进</p>
                </div>
            </div>
        </div>
    </section>

    <!-- 应用场景 -->
    <section class="py-16 px-6 bg-slate-900/50">
        <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12 gradient-text from-orange-400 to-red-500">典型应用场景</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="glass p-6 rounded-xl">
                    <h3 class="text-lg font-semibold text-orange-300 mb-2">航空发动机喷流噪声</h3>
                    <p class="text-gray-400 text-sm">超声速喷流 + FW-H 远场传播，预测机场噪声符合 ICAO 标准</p>
                </div>
                <div class="glass p-6 rounded-xl">
                    <h3 class="text-lg font-semibold text-orange-300 mb-2">汽车通过噪声</h3>
                    <p class="text-gray-400 text-sm">外流场 + 轮胎/侧镜噪声，优化 A 柱与后视镜造型</p>
                </div>
                <div class="glass p-6 rounded-xl">
                    <h3 class="text-lg font-semibold text-orange-300 mb-2">无人机螺旋桨啸叫</h3>
                    <p class="text-gray-400 text-sm">旋转动网格 + 宽频建模，降噪 6dB</p>
                </div>
                <div class="glass p-6 rounded-xl">
                    <h3 class="text-lg font-semibold text-orange-300 mb-2">风电叶片气动噪声</h3>
                    <p class="text-gray-400 text-sm">尾缘噪声 + 锯齿优化，降低 3–5dB</p>
                </div>
            </div>
        </div>
    </section>

    <!-- 演示视频 / 案例 -->
    <section id="demo" class="py-16 px-6">
        <div class="max-w-6xl mx-auto text-center">
            <h2 class="text-3xl font-bold mb-12 gradient-text from-teal-400 to-cyan-500">技术演示</h2>

            <div class="aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
                <video controls poster="aeroacoustics/images/pressure_top_282.png" class="w-full">
                <source src="aeroacoustics/videos/basic_acoutsics.mp4" type="video/mp4">
                您的浏览器不支持视频播放。
                </video>
            </div>
            <p class="text-gray-400 mt-6">多波源激励声波传播</p>
            
            <div class="aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
                <video controls poster="aeroacoustics/images/pressure_top_1386.png" class="w-full">
                <source src="aeroacoustics/videos/fidelics_acoustics.mp4" type="video/mp4">
                您的浏览器不支持视频播放。
                </video>
            </div>
            <p class="text-gray-400 mt-6">汽车后视镜噪声分析</p>

        

        </div>
    </section>

    <!-- 联系我们 -->
    <section id="contact" class="py-16 px-6 bg-slate-900/50">
        <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-3xl font-bold mb-8 gradient-text from-indigo-400 to-purple-500">获取专属声学方案</h2>
            <form class="space-y-4 max-w-md mx-auto">
                <input type="text" placeholder="您的姓名"
                    class="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 focus:border-indigo-500 outline-none">
                <input type="email" placeholder="企业邮箱"
                    class="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 focus:border-indigo-500 outline-none">
                <textarea placeholder="噪声问题描述（可选）" rows="3"
                    class="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 focus:border-indigo-500 outline-none"></textarea>
                <button type="submit"
                    class="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-semibold hover:scale-105 transition">
                    提交需求
                </button>
            </form>
        </div>
    </section>  
</body>

</html>