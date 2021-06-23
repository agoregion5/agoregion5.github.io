function changeFrameSrc(code) {
    var frame = document.getElementById('egpFrame');
    var url = "http://process.gprocurement.go.th/egp2procmainWeb/jsp/public_announ_search.jsp?homeflag=S&deptsubid=%CA%D3%B9%D1%A1%A7%D2%B9%CD%D1%C2%A1%D2%C3%C0%D2%A4%205&announcetype=" + code;
    frame.src = url;
    frame.contentWindow.location.reload();
}

function urlBySelected() {
    var code = document.getElementById('announceType').value;
    changeFrameSrc(code);
}