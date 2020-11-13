$.ajax({
    url: "http://127.0.0.1:8000/api/admin/allnum",
    type: 'get',
    async:false,
    dataType: 'json',
    success: function (data) {
        let str = `<div >${data.data.allNumber}</div>`;
        $("#allNUmber").empty().append(str);
        if (data.code === 200) {
            console.log(data);
        } else if (data.code === 100) {
            alert(100)
            console.log(data);
        }else if (data.code === 422) {
            alert(422)
            console.log(data.data);
        }
    },
    error: function (data) {
        console.log('失败');
        console.log(data.code + 'code');
    }
})

$.ajax({
    url: "http://127.0.0.1:8000/api/admin/temnum",
    type: 'get',
    async:false,
    dataType: 'json',
    success: function (data) {
        let str = `<div >${data.data.temNumber}</div>`;
        $("#temNumber").empty().append(str);
        if (data.code === 200) {
            console.log(data);
        } else if (data.code === 100) {
            alert(100)
            console.log(data);
        }else if (data.code === 422) {
            alert(422)
            console.log(data.data);
        }
    },
    error: function (data) {
        console.log('失败');
        console.log(data.code + 'code');
    }
})

$.ajax({
    url: "http://127.0.0.1:8000/api/admin/pdpnum",
    type: 'get',
    async:false,
    dataType: 'json',
    success: function (data) {
        let str = `<div >${data.data.pdpNumber}</div>`;
        $("#pdpNumber").empty().append(str);
        if (data.code === 200) {
            console.log(data);
        } else if (data.code === 100) {
            alert(100)
            console.log(data);
        }else if (data.code === 422) {
            alert(422)
            console.log(data.data);
        }
    },
    error: function (data) {
        console.log('失败');
        console.log(data.code + 'code');
    }
})

$.ajax({
    url: "http://127.0.0.1:8000/api/admin/hollandnum",
    type: 'get',
    async:false,
    dataType: 'json',
    success: function (data) {
        let str = `<div >${data.data.hollandNumber}</div>`;
        $("#hollandNumber").empty().append(str);
        if (data.code === 200) {
            console.log(data);
        } else if (data.code === 100) {
            alert(100)
            console.log(data);
        }else if (data.code === 422) {
            alert(422)
            console.log(data.data);
        }
    },
    error: function (data) {
        console.log('失败');
        console.log(data.code + 'code');
    }
})