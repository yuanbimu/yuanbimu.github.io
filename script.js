document.addEventListener('DOMContentLoaded', () => {
    
    // 导航栏滚动效果 (滚动时背景变白)
    const nav = document.querySelector('.glass-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = "rgba(255, 255, 255, 0.95)";
            nav.style.padding = "10px 0";
            nav.style.boxShadow = "0 5px 20px rgba(0,0,0,0.05)";
        } else {
            nav.style.background = "rgba(255, 255, 255, 0.75)";
            nav.style.padding = "15px 0";
            nav.style.boxShadow = "none";
        }
    });

    // 简单的入场动画
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });
});

// 粉丝数格式化函数
function formatToWan(number) {
    if (number >= 10000) {
        return (number / 10000).toFixed(2) + 'w';
    }
    return number;
}

// Bilibili 粉丝数获取
async function fetchFansCount() {
    try {
        // 方案1：使用第三方 API（如 holodex.net）
        // const response = await fetch('https://api.holodex.net/v2/channels/UC3821157');
        
        // 方案2：使用自建 JSON 文件
        const response = await fetch('./bilibili-stats.json');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);

        // 获取粉丝数
        const fansCount = data.follower || data.data?.follower || 0;

        // 格式化
        const formattedFansCount = formatToWan(fansCount);

        // 更新 HTML 元素
        const fansElement = document.getElementById('fans-count');
        if (fansElement) {
            fansElement.innerText = formattedFansCount;
        }
    } 
    catch (error) {
        console.error('获取 B站 粉丝数失败:', error);
        const fansElement = document.getElementById('fans-count');
        if (fansElement) {
            fansElement.innerText = '获取失败';
        }
    }
}

// 页面加载完成后获取粉丝数
document.addEventListener('DOMContentLoaded', () => {
    fetchFansCount();
    // 每5分钟刷新一次
    setInterval(fetchFansCount, 300000);
});