
// 获取元素
const imageContainer = document.querySelector('.image-switch-container');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const typingContainer = document.querySelector('.typing-container');  
const bubble = document.querySelector('.bubble');
const bubbleTextElements = document.querySelectorAll('.bubble-text');

// 初始显示第一张图片
let currentImage = image1;
image1.classList.add('visible');

// 初始颜色状态
let isRed = true;  
let isGreen = true;  

// 定义图片切换函数
const switchImages = () => {
    // 切换图片
    if (currentImage === image1) {
        image1.classList.remove('visible');
        image2.classList.add('visible');
        currentImage = image2;
    } else {
        image2.classList.remove('visible');
        image1.classList.add('visible');
        currentImage = image1;
    }

    // 切换打字机的字的颜色
    if (isRed) {
        typingContainer.style.color = 'blue';  // 切换为蓝色
        isRed = false;
    } else {
        typingContainer.style.color = 'red';  // 切换回红色
        isRed = true;
    }

    // 切换气泡框的颜色
    if (isGreen) {
        bubble.style.backgroundColor = 'lightgray';  // 切换为浅白色
        isGreen = false;
    } else {
        bubble.style.backgroundColor = 'lightgreen';  // 切换回浅绿色
        isGreen = true;
    }

    // 气泡框中文字颜色保持黑色
    bubbleTextElements.forEach(element => {
        element.style.color = 'black';
    });
};

// 监听点击事件
imageContainer.addEventListener('click', switchImages);


// 打字机
const typingText = document.getElementById('typing-text');
const messages = ["Welcome To My Blog", "Click Anywhere"];

let currentMessageIndex = 0;
let currentCharacterIndex = 0;
let typingSpeed = 70;
let deletingSpeed = 30;
let isDeleting = false;
let isPaused = false;
let pauseTime = 600;

function typeEffect() {
    const currentMessage = messages[currentMessageIndex];
    
    if (isPaused) {
        setTimeout(() => {
            isPaused = false;
            typeEffect();
        }, pauseTime);
        return;
    }

    if (isDeleting) {
        typingText.textContent = currentMessage.substring(0, currentCharacterIndex);
        currentCharacterIndex--;

        if (currentCharacterIndex === 0) {
            isPaused = true;
            isDeleting = false; // 切换回打字模式
            currentMessageIndex = (currentMessageIndex + 1) % messages.length;
        }
    } else {
        typingText.textContent = currentMessage.substring(0, currentCharacterIndex);
        currentCharacterIndex++;

        if (currentCharacterIndex === currentMessage.length+1) { // 修正判断条件
            isPaused = true;
            isDeleting = true; // 开始删除
        }
    }

    setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
}

function startTypingEffect() {
    currentMessageIndex = 0;
    currentCharacterIndex = 0;
    isDeleting = false;
    isPaused = false;
    typeEffect();
}

startTypingEffect();



window.onload = function () {
    // 隐藏加载动画
    const loadingElement = document.getElementById('loading');
    loadingElement.style.display = 'none';  // 页面加载完后隐藏加载动画

    // 获取所有气泡文字元素
    const bubbleTextElements = document.querySelectorAll('.bubble-text');

    // 气泡框文字内容
    const texts = [
        "多么诡异又神奇的世界。我得用心维护，让它一直保持这样。",
        "还只是个玩偶的时候，我就很想上战场了。现在机会来了，我唯一的机会。",
        "微风轻抚着我，真是惬意。这种感觉我好不舍得。我也不会放弃。"
    ];

    let currentIndex = 0; // 当前显示的文字的索引
    let textInterval;

    // 隐藏所有文字
    function hideAllTexts() {
        bubbleTextElements.forEach(element => {a
            element.classList.remove('active'); 
        });
    }

    // 显示当前文字
    function showText(index) {
        hideAllTexts();
        bubbleTextElements[index].classList.add('active'); 
    }

    // 启动文字切换功能
    function startTextCycle() {
        textInterval = setInterval(() => {
            showText(currentIndex);
            currentIndex = (currentIndex + 1) % texts.length; // 循环切换
        }, 5000); // 每5秒切换一次
    }

    // 初始化
    bubbleTextElements.forEach((element, index) => {
        element.textContent = texts[index];
    });

    showText(currentIndex); // 显示第一个文字
    startTextCycle(); // 开始文字切换
};




