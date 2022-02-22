
function KiemTraRong(value) {
    if (value.trim() === '') {
        return true;
    }
    return false;
}
function getEle(id) {
    return document.getElementById(id);
}
function KiemTra(event) 
{
    event.preventDefault();
    //Lấy dữ liệu từ người dùng nhập vào   
    var queries = getEle('queries').value;
    var suggestion = getEle('suggestion').value;
    var complaints = getEle('complaints').value;
    var loi = 0;
    var checkbox = getEle('checkbox');
    //Kiểm tra Validation
    if(KiemTraDauVaoRong('queries', queries) == true) 
    {
        loi++;
    }
    if(KiemTraDauVaoRong('suggestion', suggestion) == true) 
    {   
        loi++;
    }
    if(KiemTraDauVaoRong('complaints', complaints) == true) 
    {   
        loi++;
    }
    if(checkbox.checked == true) {
        var hideform = getEle('hideform');
        hideform.innerHTML = `
        <span><i style="font-size: 40px; color: #61c241;" class="fa fa-check"></i></span>
        <p>
            Information about comments has been recorded. Sincerely thank you for your comments, we will receive your comments immediately after reading!
        </p>
        `;
        hideform.style.color = '#696969';
        hideform.style.fontSize = '16px';
        hideform.style.letterSpacing = '1px';
        return;
    } else {
        var alert = getEle('alert');
        alert.innerHTML = `
        <p style="color: red;">
            You must agree to the restaurants policy
            <span>
                <i class="fa fa-exclamation-triangle"></i>
            </span>
        </p>
        
        `;
        alert
    }
}

function KiemTraDauVaoRong(ID, value) {
        if(KiemTraRong(value) == true) {
            getEle(ID).style.borderColor = 'red';
        } else {
            getEle(ID).style.borderColor = 'green';
        }
}
