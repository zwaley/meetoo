// 题库数据
const questions = [
    {
        question: "在学术会议上，你会如何与异性同事交流？",
        options: [
            { text: "保持专业距离，只谈学术问题", type: "justice" },
            { text: "适当开玩笑活跃气氛", type: "neutral" },
            { text: "偶尔会有一些轻微的身体接触", type: "reminder" },
            { text: "主动邀请私下继续讨论", type: "suspicious" },
            { text: "经常夸赞对方的外貌", type: "harasser" }
        ]
    },
    {
        question: "如果你是导师，学生向你求助时你会？",
        options: [
            { text: "在办公室开门接待，专业指导", type: "justice" },
            { text: "约在咖啡厅等公共场所讨论", type: "neutral" },
            { text: "建议晚上到家里详细讨论", type: "suspicious" },
            { text: "要求学生做一些与学术无关的私人事务", type: "harasser" }
        ]
    },
    {
        question: "在社交媒体上，你如何与学生/同事互动？",
        options: [
            { text: "只发布学术相关内容，保持专业", type: "justice" },
            { text: "偶尔点赞，但不过多互动", type: "neutral" },
            { text: "会主动评论和私信，但内容健康", type: "reminder" },
            { text: "经常私信聊天，分享个人生活", type: "suspicious" },
            { text: "频繁评论对方照片，发送暧昧信息", type: "harasser" }
        ]
    },
    {
        question: "参加学校聚餐时，你的行为是？",
        options: [
            { text: "正常社交，尊重每个人的边界", type: "justice" },
            { text: "开心聊天，但注意分寸", type: "neutral" },
            { text: "喝酒后变得过分亲密", type: "suspicious" },
            { text: "故意安排坐在异性身边，有身体接触", type: "harasser" }
        ]
    },
    {
        question: "对于权力关系（如师生、上下级），你的态度是？",
        options: [
            { text: "严格遵守职业道德，绝不滥用权力", type: "justice" },
            { text: "偶尔利用便利，但不过分", type: "neutral" },
            { text: "认为权力可以带来一些'特权'", type: "suspicious" },
            { text: "经常暗示权力交换，威胁利诱", type: "harasser" }
        ]
    },
    {
        question: "听到性骚扰传言时，你会？",
        options: [
            { text: "认真对待，支持受害者举报", type: "justice" },
            { text: "保持中立，不传播小道消息", type: "neutral" },
            { text: "会私下了解情况，但不确定该怎么办", type: "reminder" },
            { text: "觉得可能是误会，为当事人辩护", type: "suspicious" },
            { text: "认为是小题大做，受害者太敏感", type: "harasser" }
        ]
    },
    {
        question: "在办公室独处时，你会？",
        options: [
            { text: "保持门开着，行为得体", type: "justice" },
            { text: "正常工作，但会注意避嫌", type: "neutral" },
            { text: "关门聊一些私人话题", type: "suspicious" },
            { text: "故意制造身体接触的机会", type: "harasser" }
        ]
    },
    {
        question: "对于'Me Too'运动，你的看法是？",
        options: [
            { text: "完全支持，这是必要的社会进步", type: "justice" },
            { text: "理解意义，但担心被误用", type: "neutral" },
            { text: "认为有些过激，影响正常交往", type: "suspicious" },
            { text: "觉得是小题大做，破坏和谐", type: "harasser" }
        ]
    },
    {
        question: "在学术指导过程中，你认为合适的师生距离是？",
        options: [
            { text: "始终保持专业关系，公事公办", type: "justice" },
            { text: "可以适当关心学生生活，但有界限", type: "neutral" },
            { text: "建立亦师亦友的亲密关系", type: "suspicious" },
            { text: "学生应该对导师言听计从，包括私人要求", type: "harasser" }
        ]
    },
    {
        question: "如果有异性同事/学生主动示好，你会？",
        options: [
            { text: "礼貌拒绝，保持职业边界", type: "justice" },
            { text: "感到困扰，但不知如何处理", type: "neutral" },
            { text: "会保持友好，但尽量避免单独相处", type: "reminder" },
            { text: "暗自高兴，觉得是自己魅力所致", type: "suspicious" },
            { text: "认为这是理所当然，甚至主动回应", type: "harasser" }
        ]
    },
    {
        question: "在评价学生作业或工作时，你会？",
        options: [
            { text: "客观公正，只评价学术表现", type: "justice" },
            { text: "主要看学术，偶尔会受个人喜好影响", type: "neutral" },
            { text: "对喜欢的学生会格外宽松", type: "suspicious" },
            { text: "明确表示好成绩需要'额外努力'", type: "harasser" }
        ]
    },
    {
        question: "参加学术会议的酒会时，你的行为是？",
        options: [
            { text: "适度社交，注意言行举止", type: "justice" },
            { text: "放松一些，但不会失态", type: "neutral" },
            { text: "借酒劲说一些平时不敢说的话", type: "suspicious" },
            { text: "故意灌醉他人，制造'机会'", type: "harasser" }
        ]
    },
    {
        question: "对于校园恋情，你的态度是？",
        options: [
            { text: "师生恋绝对不可以，同事恋情需谨慎", type: "justice" },
            { text: "理解感情难控制，但要处理得当", type: "neutral" },
            { text: "觉得只要双方愿意就没问题", type: "suspicious" },
            { text: "认为权力关系让恋情更刺激", type: "harasser" }
        ]
    }
];

// 结果类型定义
const results = {
    justice: {
        title: "🛡️ 正义守护者",
        description: "你是校园中的正义使者！严格遵守职业道德，尊重他人边界，积极维护校园安全环境。你的存在让校园变得更加安全和谐。",
        icon: "🛡️"
    },
    neutral: {
        title: "⚖️ 理性中立者",
        description: "你是一个理性的人，大多数时候能够把握分寸，但偶尔可能缺乏敏感度。建议多关注他人感受，提高边界意识。",
        icon: "⚖️"
    },
    reminder: {
        title: "💡 需要提醒者",
        description: "你的行为总体还算正常，但在某些情况下可能会无意中越界。建议加强学习相关知识，提高敏感度，避免无意中给他人造成困扰。",
        icon: "💡"
    },
    suspicious: {
        title: "⚠️ 潜在风险者",
        description: "警告！你的一些行为和想法存在风险倾向。建议反思自己的行为模式，学习尊重他人边界，避免给他人造成不适。",
        icon: "⚠️"
    },
    harasser: {
        title: "🚨 涉嫌骚扰者",
        description: "严重警告！你的行为模式高度符合性骚扰者特征。请立即反思并改正你的行为，尊重他人，遵守法律法规。如果这只是测试，请不要在现实中有类似行为！",
        icon: "🚨"
    }
};

// 游戏状态
let currentQuestionIndex = 0;
let selectedQuestions = [];
let answers = [];

// DOM 元素
const startScreen = document.getElementById('start-screen');
const questionScreen = document.getElementById('question-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const shareBtn = document.getElementById('share-btn');
const progressBar = document.getElementById('progress');
const questionNumber = document.getElementById('question-number');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const resultIcon = document.getElementById('result-icon');
const resultTitle = document.getElementById('result-title');
const resultDescription = document.getElementById('result-description');

// 初始化游戏
function initGame() {
    currentQuestionIndex = 0;
    answers = [];
    selectedQuestions = getRandomQuestions(5);
    showScreen('start');
}

// 随机选择问题
function getRandomQuestions(count) {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// 显示指定屏幕
function showScreen(screenName) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    switch(screenName) {
        case 'start':
            startScreen.classList.add('active');
            break;
        case 'question':
            questionScreen.classList.add('active');
            break;
        case 'result':
            resultScreen.classList.add('active');
            break;
    }
}

// 开始测试
function startQuiz() {
    showScreen('question');
    showQuestion();
}

// 显示当前问题
function showQuestion() {
    const question = selectedQuestions[currentQuestionIndex];
    
    // 更新进度条
    const progress = ((currentQuestionIndex + 1) / selectedQuestions.length) * 100;
    progressBar.style.width = progress + '%';
    
    // 更新问题信息
    questionNumber.textContent = `问题 ${currentQuestionIndex + 1}/${selectedQuestions.length}`;
    questionText.textContent = question.question;
    
    // 清空并重新创建选项
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option.text;
        optionElement.addEventListener('click', () => selectOption(option, optionElement));
        optionsContainer.appendChild(optionElement);
    });
}

// 选择选项
function selectOption(option, element) {
    // 移除其他选项的选中状态
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // 标记当前选项为选中
    element.classList.add('selected');
    
    // 保存答案
    answers[currentQuestionIndex] = option.type;
    
    // 延迟跳转到下一题
    setTimeout(() => {
        nextQuestion();
    }, 500);
}

// 下一题
function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < selectedQuestions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// 显示结果
function showResult() {
    const resultType = calculateResult();
    const result = results[resultType];
    
    resultIcon.textContent = result.icon;
    resultTitle.textContent = result.title;
    resultDescription.textContent = result.description;
    
    showScreen('result');
}

// 计算结果
function calculateResult() {
    const counts = {
        justice: 0,
        neutral: 0,
        reminder: 0,
        suspicious: 0,
        harasser: 0
    };
    
    answers.forEach(answer => {
        counts[answer]++;
    });
    
    // 找出得分最高的类型
    let maxCount = 0;
    let resultType = 'neutral';
    
    for (const [type, count] of Object.entries(counts)) {
        if (count > maxCount) {
            maxCount = count;
            resultType = type;
        }
    }
    
    // 如果neutral和其他类型得分相同，进行细化判断
    if (resultType === 'neutral' && counts.neutral === maxCount) {
        if (counts.suspicious > 0 || counts.harasser > 0) {
            resultType = 'reminder';
        }
    }
    
    return resultType;
}

// 分享结果
function shareResult() {
    const resultType = calculateResult();
    const result = results[resultType];
    
    if (navigator.share) {
        navigator.share({
            title: '校园角色测试结果',
            text: `我在校园角色测试中获得了：${result.title}！快来测试看看你是什么角色吧！https://zwaley.github.io/meetoo/`,
            url: 'https://zwaley.github.io/meetoo/'
        });
    } else {
        // 复制到剪贴板
        const shareText = `我在校园角色测试中获得了：${result.title}！${result.description} 快来测试：https://zwaley.github.io/meetoo/`;
        navigator.clipboard.writeText(shareText).then(() => {
            alert('结果已复制到剪贴板！');
        }).catch(() => {
            alert('分享功能暂不可用，请手动复制结果。');
        });
    }
}

// 事件监听器
startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', initGame);
shareBtn.addEventListener('click', shareResult);

// 初始化游戏
initGame();