// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 获取视频元素
    const video = document.getElementById('culture-video');
    // 获取控制按钮
    const playPauseBtn = document.getElementById('play-pause-btn');
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    
    // 播放/暂停功能
    playPauseBtn.addEventListener('click', function() {
        if (video.paused) {
            video.play();
            playPauseBtn.textContent = '暂停';
        } else {
            video.pause();
            playPauseBtn.textContent = '播放';
        }
    });
    
    // 全屏功能
    fullscreenBtn.addEventListener('click', function() {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) { /* Safari */
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) { /* IE11 */
            video.msRequestFullscreen();
        }
    });
    
    // 视频结束时重置播放按钮文本
    video.addEventListener('ended', function() {
        playPauseBtn.textContent = '播放';
    });
    
    // 添加传统文化元素的动画效果
    const elements = document.querySelectorAll('.element');
    elements.forEach(function(element, index) {
        // 设置延迟出现的动画
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        element.style.transitionDelay = (index * 0.2) + 's';
        
        setTimeout(function() {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 500);
    });
    
    // 添加页面滚动效果
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 添加传统纹样背景动画
    const container = document.querySelector('.container');
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        document.body.style.backgroundPosition = `0 ${scrollPosition * 0.1}px`;
    });
});