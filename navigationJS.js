document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('moveNav'); // 获取 moveNav 元素
    const navLinks = document.querySelectorAll('.navigation-bar a'); 
    const rightNavLinks = document.querySelectorAll('.right-nav a'); 
    const rightNavIcons = document.querySelectorAll('.right-nav i'); 

    // 监听滚动事件
    window.addEventListener('scroll', function() {
        if (window.scrollY > 1) {  // 页面滚动超过1px时
            navbar.classList.add('scrolled'); 
           
            document.body.classList.add('scroll-active');
        } else {
            navbar.classList.remove('scrolled'); // 页面回到最上方时移除类
            // 恢复默认颜色
            document.body.classList.remove('scroll-active');
        }
    });
});

window.onload = function () {
    const loadingElement = document.getElementById('loading');
    loadingElement.style.display = 'none';  // 页面加载完后隐藏加载动画
};
