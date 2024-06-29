function showTab(tabId) {
    // Ẩn tất cả các tab content
    var tabs = document.getElementsByClassName('tab-content');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = 'none';
    }

    // Hiển thị tab content được chọn
    document.getElementById(tabId).style.display = 'block';

    // Bỏ active cho tất cả các nút
    var buttons = document.getElementsByClassName('tab-button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }

    // Thêm active cho nút được chọn
    event.currentTarget.classList.add('active');
}

// Hiển thị tab đầu tiên mặc định
document.addEventListener('DOMContentLoaded', function() {
    showTab('tab-tra-truoc');
});
function showTabnet(tabnetId) {
    // Ẩn tất cả các tab content
    var tabNets = document.getElementsByClassName('tab-content-net');
    for (var i = 0; i < tabNets.length; i++) {
        tabNets[i].style.display = 'none';
    }

    // Hiển thị tab content được chọn
    document.getElementById(tabnetId).style.display = 'block';

    // Bỏ active cho tất cả các nút
    var buttonsNet = document.getElementsByClassName('tab-button-net');
    for (var i = 0; i < buttonsNet.length; i++) {
        buttonsNet[i].classList.remove('active');
    }

    // Thêm active cho nút được chọn
    event.currentTarget.classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
    showTabnet('tab-net');
});