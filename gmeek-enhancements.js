// Gmeek博客增强功能脚本
// 创建左侧站点目录和右侧文章目录

document.addEventListener('DOMContentLoaded', function() {
    // 创建左侧站点目录
    function createSiteTOC() {
        // 跳过主页
        if (window.location.pathname === "/" || window.location.pathname.endsWith("index.html")) {
            return;
        }
        
        const toc = document.createElement("div");
        toc.id = "site-toc";
        toc.innerHTML = "<div class='site-toc-header'>📚 文章目录</div><div class='site-toc-content'></div>";
        document.body.appendChild(toc);
        
        // 获取文章数据
        fetch("/postList.json")
            .then(r => r.json())
            .then(data => {
                const content = toc.querySelector(".site-toc-content");
                Object.values(data).forEach(item => {
                    const div = document.createElement("div");
                    div.className = "site-toc-item";
                    div.innerHTML = `<a href="${item.postUrl}">${item.postTitle}</a>`;
                    content.appendChild(div);
                });
            })
            .catch(e => console.log("Site TOC data not available"));
    }

    // 创建右侧文章目录
    function createArticleTOC() {
        // 跳过主页
        if (window.location.pathname === "/" || window.location.pathname.endsWith("index.html")) {
            return;
        }
        
        const headers = document.querySelectorAll(".markdown-body h1, .markdown-body h2, .markdown-body h3, .markdown-body h4");
        if (headers.length < 2) return;
        
        const toc = document.createElement("div");
        toc.id = "article-toc";
        toc.innerHTML = "<div class='article-toc-header'>📝 本文目录</div><div class='article-toc-content'></div>";
        document.body.appendChild(toc);
        
        const content = toc.querySelector(".article-toc-content");
        headers.forEach((header, index) => {
            const id = "header-" + index;
            header.id = id;
            const level = parseInt(header.tagName.substring(1));
            const div = document.createElement("div");
            div.className = "article-toc-item";
            div.style.marginLeft = "" + ((level - 1) * 12) + "px";
            div.innerHTML = `<a href="#${id}">${header.textContent}</a>`;
            content.appendChild(div);
        });
        
        // 移动端切换按钮
        if (window.innerWidth <= 768) {
            const toggle = document.createElement("div");
            toggle.className = "toc-toggle";
            toggle.textContent = "📚 目录";
            toggle.onclick = () => toc.classList.toggle("show");
            document.body.appendChild(toggle);
        }
    }

    // 初始化功能
    createSiteTOC();
    createArticleTOC();

    // 响应式处理
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            const toggle = document.querySelector(".toc-toggle");
            if (toggle) toggle.remove();
            const toc = document.querySelector("#site-toc");
            if (toc) {
                toc.style.transform = "translateY(0)";
                toc.style.opacity = "1";
                toc.style.pointerEvents = "auto";
            }
        } else {
            createArticleTOC();
        }
    });

    // 平滑滚动
    document.addEventListener("click", e => {
        if (e.target.matches("a[href^='#']")) {
            e.preventDefault();
            const target = document.querySelector(e.target.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    });

    console.log("Gmeek enhancements loaded successfully!");
});