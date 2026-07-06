// 这个js文件适用于page6_meiru的邮箱表单页面

// 重置表单的函数
function resetForm() {
    if (confirm("入力内容をリセットするの？")) {
        document.getElementById("mailform").reset();
        alert("入力内容がリセットされた。");
    }
}

// 发送邮件后显示消息的函数
function sendMessage() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    // 这是一个小彩蛋！
    if (name === "mima") {
        document.getElementById("mailform").reset();
        open("page_mima.html");
    }
    else {
        alert("メッセージを送信しました！\n" + name + "さん、返信は" + email + "に送られますので、お待ちください！");
    }
}

// 这是一个键盘事件的小彩蛋！
// 在name输入框输入“mima”后回车会清空表格并跳转到彩蛋页面
// window.event似乎已弃用？这里使用了新标准来实现
function checkMima(e) {
    if (e.key === "Enter") {
        if (document.getElementById("name").value == "mima") {
            document.getElementById("mailform").reset();
            open("page_mima.html");
        }
    }
}

// 彩蛋页面中的鼠标事件
function $(id) {
    return document.getElementById(id);
}

// 鼠标悬停时改变文本
function mouseover() {
    $("answer1").textContent = "私が本当の未麻だよ！(＾▽＾)";
    $("page6").textContent = "戻るよ！(・∀・)";
}

// 鼠标离开时恢复文本
function mouseout() {
    $("answer1").textContent = "「あなた、誰なの？」";
    $("page6").textContent = "「あなた、誰なの？」";
}