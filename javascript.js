function enterHome() {
    // 隐藏封面图
    document.querySelector('.cover-image').style.opacity = 0;

    // 点击后文字消失
    document.querySelector('.cover-image').classList.add('clicked');

    // 显示主页内容并添加动画效果
    setTimeout(() => {
        document.querySelector('.cover-image').style.display = 'none'; // 隐藏封面图
        document.querySelector('#mainContent').classList.add('show'); // 显示主页内容
    }, 1000); // 等待1秒钟，确保过渡效果完成
}


document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('moveNav'); // 获取 moveNav 元素
    const navLinks = document.querySelectorAll('.navigation-bar a'); // 获取导航栏中的所有链接
    const rightNavLinks = document.querySelectorAll('.right-nav a'); // 获取右侧导航栏中的所有链接
    const rightNavIcons = document.querySelectorAll('.right-nav i'); // 获取右侧导航栏中的所有图标

    // 监听滚动事件
    window.addEventListener('scroll', function() {
        if (window.scrollY > 1) {  // 页面滚动超过1px时
            navbar.classList.add('scrolled'); // 添加 scrolled 类
            // 保持悬停效果，改变导航栏文字和图标颜色
            document.body.classList.add('scroll-active');
        } else {
            navbar.classList.remove('scrolled'); // 页面回到最上方时移除类
            // 恢复默认颜色
            document.body.classList.remove('scroll-active');
        }
    });
});
