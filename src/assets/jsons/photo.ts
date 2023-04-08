const list = {
  title: '绘画/视频',
  list: [
    {
      title: 'midjourney',
      subtitle:
        'AI绘画工具，只要输入想到的文字，就能通过人工智能产出相对应的图片，耗时只有大约一分钟。',
      image: '/src/assets/image/photo/1.png',
      charge: '新用户免费20次',
      url: 'https://www.midjourney.com/'
    },
    {
      title: 'wombo.art',
      subtitle: '输入你所想描述的关键字就能自动生成一副富有创意的艺术作品。',
      image: '/src/assets/image/photo/2.png',
      charge: '',
      url: 'https://app.wombo.art/'
    },
    {
      title: 'DALL·E 2',
      subtitle:
        'OpenAI的图像领域开创性模型。只需输入简短的文字 prompt，DALL-E 2 就可以生成全新的图像，这些图像以语义上十分合理的方式将不同且不相关的对象组合起来',
      image: '/src/assets/image/photo/3.png',
      charge: '排队申请',
      url: 'https://openai.com/dall-e-2/'
    },
    {
      title: 'Google Colab',
      subtitle:
        '稳定扩散是一个文本到图像的潜在扩散模型，由CompVis、Stability AI和LAION的研究人员和工程师创建。它是在来自LAION-5B数据库子集的512x512张图像上训练的。',
      image: '/src/assets/image/photo/4.png',
      charge: '',
      url: 'https://colab.research.google.com/github/huggingface/notebooks/blob/main/diffusers/stable_diffusion.ipynb#scrollTo=Ylscg48YYxfF'
    },
    {
      title: 'artbreeder',
      subtitle:
        'Artbreeder 的目标是成为一种新型的创意工具，通过使协作和探索更容易来赋予用户创造力。',
      image: '/src/assets/image/photo/5.png',
      charge: '',
      url: 'https://www.artbreeder.com/create/collage'
    },
    {
      title: 'Dream Studio',
      subtitle:
        'DreamStudio 基于AI人工智能的在线绘图工具,输入描述词即可生成你所需要的画面!',
      image: '/src/assets/image/photo/6.png',
      charge: '200点数',
      url: 'https://beta.dreamstudio.ai/generate'
    },
    {
      title: 'Night Cafe',
      subtitle:
        'NightCafe Creator 是一款 AI 艺术生成器应用程序，具有多种 AI 艺术生成方法。使用神经风格迁移，您可以将您的照片变成杰作。',
      image: '/src/assets/image/photo/7.png',
      charge: '',
      url: 'https://creator.nightcafe.studio/'
    },
    {
      title: 'starry AI',
      subtitle:
        'StarryAI是一款AI绘画生成器，只需描述您想看到的内容即可生成艺术，我们的人工智能将您的文字转化为艺术。',
      image: '/src/assets/image/photo/8.jpg',
      charge: '',
      url: 'https://starryai.com/'
    },
    {
      title: 'CogVideo 生成视频',
      subtitle:
        'CogVideo是目前最大的通用领域文本到视频生成预训练模型，含94亿参数。CogVideo将预训练文本到图像生成模型（CogView2）有效地利用到文本到视频生成模型，并使用了多帧率分层训练策略。',
      image: '/src/assets/image/photo/9.png',
      charge: '',
      url: 'https://models.aminer.cn/cogvideo/'
    },
    {
      title: 'PS插件-绘画生成图片',
      subtitle:
        '使用 AI 将简单的笔触变成逼真的风景图像。快速创建背景，或加快您的概念探索，这样您就可以花更多时间来形象化想法。',
      image: '/src/assets/image/photo/10.png',
      charge: '',
      url: 'https://www.nvidia.com/en-us/studio/canvas/'
    },
    {
      title: 'elbo',
      subtitle:
        '今天的人工智能有能力创造艺术、写诗、进行有意义的对话甚至作曲🥁',
      image: '/src/assets/image/photo/11.png',
      charge: '',
      url: 'https://art.elbo.ai/'
    },
    {
      title: 'deep Dream Generator',
      subtitle: '了解卷积神经网络可以通过过度处理图像和增强特征来生成什么。',
      image: '/src/assets/image/photo/12.png',
      charge: '',
      url: 'https://deepdreamgenerator.com/'
    },
    {
      title: 'Big Sleep',
      subtitle:
        '结合了 OpenAI 的CLIP和来自BigGAN的生成器！这个存储库包含了他的工作，因此拥有 GPU 的任何人都可以轻松访问它。',
      image: '/src/assets/image/photo/13.png',
      charge: '',
      url: 'https://github.com/lucidrains/big-sleep/'
    },
    {
      title: 'craiyon',
      subtitle: '来自文本的免费在线 AI 图像生成器,原 DALL·E mini。',
      image: '/src/assets/image/photo/14.png',
      charge: '',
      url: 'https://www.craiyon.com/'
    },
    {
      title: 'novel AI',
      subtitle:
        '在 AI 的驱动下，轻松构建独特的故事、激动人心的故事、诱人的浪漫故事，或者只是胡闹。什么都可以！',
      image: '/src/assets/image/photo/15.png',
      charge: '',
      url: 'https://novelai.net/'
    },
    {
      title: 'Sd-Outpainting',
      subtitle: '在无限画布上使用 Stable Diffusion 进行 Outpainting。',
      image: '/src/assets/image/photo/16.png',
      charge: '',
      url: 'https://github.com/lkwq007/stablediffusion-infinity'
    },
    {
      title: 'TyPaint',
      subtitle:
        '一款APP，只需键入您想看到的内容，即可与 AI 共同创作艺术品。 TyPaint 将您的文字变成图像。与他人分享您的作品。',
      image: '/src/assets/image/photo/17.png',
      charge: '',
      url: 'https://apps.apple.com/us/app/typaint-you-type-ai-paints/id1624024392'
    },
    {
      title: 'PicSo',
      subtitle: '创建你的AI女孩。',
      image: '/src/assets/image/photo/18.png',
      charge: '新用户每天免费10次',
      url: 'https://picso.ai/'
    }
  ]
}

export default list
