
function KiemTraRong(value) {
    if (value.trim() === '') {
        return true;
    }
    return false;
}
function KiemTraEmail(value) {
    var regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexEmail.test(value.trim());
}
function KiemTraSoDT(value) {
    var regexSdt = /^\d+$/;
    if (regexSdt.test(value) && value.length >= 10 ) {
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
    var name = getEle('name').value;
    var textarea = getEle('textarea').value;
    var email = getEle('email').value;
    var sdt = getEle('sdt').value;
    var loi = 0;
    var checkbox = getEle('checkbox');
    //Kiểm tra Validation
    if(KiemTraDauVaoRong('name', name) == true) 
    {
        loi++;
    }
    if(KiemTraDauVaoRong('textarea', textarea) == true) 
    {   
        loi++;
    }
    if(KiemTraEmail(email)) {
        getEle('email').style.borderColor = 'green';
    } else {
        getEle('email').style.borderColor = 'red';
        loi++;
    }

    if(KiemTraSoDT(sdt)) {
        getEle('sdt').style.borderColor = 'green';
    } else {
        getEle('sdt').style.borderColor = 'red';
        loi++;
    }
    if(checkbox.checked == true) {
        var hideform = getEle('hideform');
        hideform.innerHTML = `
        <span><i style="font-size: 40px; color: #61c241;" class="fa fa-check"></i></span>
        <p>
            Information has been received, we will contact you soon. Best regards!
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



/**
function KiemTraRong(value) {
    if (value.trim() === '') {
        return true;
    }
    return false;
}
function KiemTraEmail(value) {
    var regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexEmail.test(value.trim());
}
function KiemTraSoDT(value) {
    var regexSdt = /^\d+$/;
    if (regexSdt.test(value) && value.length >= 10 ) {
        return true;
    }
    return false;
}

function getEle(id) {
    return document.getElementById(id);
}

function KiemTraDauVaoRong(ID, value) {
    if(KiemTraRong(value) == true) {
        getEle(ID).style.borderColor = 'red';
    } else {
        getEle(ID).style.borderColor = 'green';
    }
}

function KiemTra() {
    console.log(1);
    var checkbox = document.getElementById('checkbox');
    if(checkbox.checked == false) {
        return false;
    }
    return true;
    
}
*/
