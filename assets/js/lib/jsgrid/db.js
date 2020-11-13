
(function () {
    var SERVER_PATH = 'http://127.0.0.1:8000/'
    //用户数组
    var db1 = {

        loadData: function (filter) {
            return $.grep(this.clients, function (client) {
                return (!filter.编号 || client.编号.indexOf(filter.编号) > -1) &&
                    (filter.年龄 === undefined || client.年龄 === filter.年龄) &&
                    (!filter.性别 || client.性别 === filter.性别) &&
                    (!filter.学历 || client.学历 === filter.学历) &&
                    (!filter.退役时间 || client.退役时间.indexOf(filter.退役时间) > -1) &&
                    (!filter.退役方式 || client.退役方式 === filter.退役方式) &&
                    (!filter.目前从事工作 || client.目前从事工作 === filter.目前从事工作) &&
                    (!filter.姓名 || client.姓名 === filter.姓名) &&
                    (!filter.QQ || client.QQ === filter.QQ);
            });
        },

        insertItem: function (insertingClient) {
            this.clients.push(insertingClient);
        },

        updateItem: function (updatingClient) { },

        deleteItem: function (deletingClient) {
            var clientIndex = $.inArray(deletingClient, this.clients);
            this.clients.splice(clientIndex, 1);
        }

    };

    window.db1 = db1;
    db1.clients = [
        {
            "编号": "wwwOtto Clay",
            "年龄": 1,
            "性别": 6,
            "学历": "Ap #897-1459",
            "退役时间": "Ap #897-1459",
            "退役方式": "Ap #897-1459",
            "目前从事工作": "#897-1459",
            "姓名": "Ap #897-1459",
            "QQ": "Ap #897-1459",
        },
    ];
    console.log(db1.clients[0].目前从事工作)

    /**
 * 方法作用 用户信息展示
 * 请求接口 api/person/userdetails
 * @author chenmiao <github.com/Yidaaa-u>
 */
    $.ajax({
        type: "GET",
        cache: true,
        url: SERVER_PATH + "api/person/userdetails",
        data: {
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9hZG1pblwvbG9naW4iLCJpYXQiOjE2MDUxODM4MTIsImV4cCI6MTYwNTE4NzQxMiwibmJmIjoxNjA1MTgzODEyLCJqdGkiOiJDWGVSSENKYVJaQVNHdXl1Iiwic3ViIjo2LCJwcnYiOiJkZjg4M2RiOTdiZDA1ZWY4ZmY4NTA4MmQ2ODZjNDVlODMyZTU5M2E5In0.p9swXVobcdyyuQFU1EP44jshxUdZO_nHVI2ETf5rZX0",

        },
        dataType: 'json',
        async: false,
        success: function (data) {

            for (var i = 0; i < data.data.length; i++) {
                db1.clients[i] = [
                    {
                        "编号": "wwwOtto Clay",
                        "年龄": 1,
                        "性别": 6,
                        "学历": "Ap #897-1459",
                        "退役时间": "Ap #897-1459",
                        "退役方式": "Ap #897-1459",
                        "目前从事工作": "#897-1459",
                        "姓名": "Ap #897-1459",
                        "QQ": "Ap #897-1459",
                    },
                ];
                db1.clients[i].编号 = data.data[i].id,
                    db1.clients[i].年龄 = data.data[i].age,
                    db1.clients[i].性别 = data.data[i].gender,
                    db1.clients[i].学历 = data.data[i].education,
                    db1.clients[i].退役时间 = data.data[i].retiretime,
                    db1.clients[i].退役方式 = data.data[i].retiremode,
                    db1.clients[i].目前从事工作 = data.data[i].work,
                    db1.clients[i].姓名 = data.data[i].name,
                    db1.clients[i].QQ = data.data[i].qq

            }


            console.log("成功")
            console.log(data.data)


        },
        error: function (e) {
            alert('操作失败')
        }
    })

    /**
* 方法作用 用户信息搜索
* 请求接口 api/person/usersearch
* @author chenmiao <github.com/Yidaaa-u>
*/
    $("#searchc").click(function () {

        $.ajax({

            type: "GET",
            cache: true,
            url: SERVER_PATH + "api/person/usersearch",
            data: {
                name: $(".input-search").val(),
                token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9hZG1pblwvbG9naW4iLCJpYXQiOjE2MDUxODk0MzQsImV4cCI6MTYwNTE5MzAzNCwibmJmIjoxNjA1MTg5NDM0LCJqdGkiOiIwOWVtT2tINFRwVzdDVFNVIiwic3ViIjo2LCJwcnYiOiJkZjg4M2RiOTdiZDA1ZWY4ZmY4NTA4MmQ2ODZjNDVlODMyZTU5M2E5In0.KusHZ2YQBeZxDrVLmEStiJ_u6W2dBtGGh2aNBFerUHc",

            },
            dataType: 'json',
            async: false,
            success: function (data) {
                db1.clients.length = 0
                let headstr = `<th class="jsgrid-header-cell" style="width: 50px;">编号</th>
                <th class="jsgrid-header-cell" style="width: 50px;">年龄</th>
                <th class="jsgrid-header-cell" style="width: 50px;">性别</th>
                <th class="jsgrid-header-cell" style="width: 50px;">学历</th>
                <th class="jsgrid-header-cell" style="width: 50px;">退役时间</th>
                <th class="jsgrid-header-cell" style="width: 50px;">退役方式</th>
                <th class="jsgrid-header-cell" style="width: 50px;">目前从事工作</th>
                <th class="jsgrid-header-cell" style="width: 50px;">姓名</th>
                <th class="jsgrid-header-cell" style="width: 50px;">QQ</th>`
                $(".jsgrid-header-row").empty().append(headstr)
                let str = ``
                for (var i = 0; i < data.data.length; i++) {
                    str += `
                    <tr class="jsgrid-row">
                    <td class="jsgrid-cell" style="width: 50px;">${data.data[i].id}</td>
                    <td class="jsgrid-cell" style="width: 50px;">${data.data[i].age}</td>
                    <td class="jsgrid-cell" style="width: 50px;">${data.data[i].gender}</td>
                    <td class="jsgrid-cell" style="width: 50px;">${data.data[i].education}</td>
                    <td class="jsgrid-cell" style="width: 50px;">${data.data[i].retiretime}</td>
                    <td class="jsgrid-cell" style="width: 50px;">${data.data[i].retiremode}</td>
                    <td class="jsgrid-cell" style="width: 50px;">${data.data[i].work}</td>
                    <td class="jsgrid-cell" style="width: 50px;">${data.data[i].name}</td>
                    <td class="jsgrid-cell" style="width: 50px;">${data.data[i].qq}</td>
                    </tr>
                    `
                    $(".jsgrid-grid-body table tbody").empty().append(str)
                }

                console.log(db1.clients)
                console.log("成功")
                console.log(data.data)
            },
            error: function (e) {
                alert('操作失败')

            }
        })
    })

    //气质数组
    var db2 = {
        loadData: function (filter) {
            return $.grep(this.clients, function (client) {
                return (!filter.编号 || client.编号.indexOf(filter.编号) > -1) &&
                    // (filter.年龄 === undefined || client.年龄 === filter.年龄) &&
                    (!filter.姓名 || client.姓名 === filter.姓名) &&
                    (!filter.A总分 || client.A总分 === filter.A总分) &&
                    // (!filter.退役时间 || client.退役时间.indexOf(filter.退役时间) > -1) &&
                    (!filter.A总分 || client.B总分 === filter.A总分) &&
                    (!filter.B总分 || client.B总分 === filter.B总分) &&
                    (!filter.C总分 || client.C总分 === filter.C总分) &&
                    (!filter.D总分 || client.D总分 === filter.D总分);
            });
        },

        insertItem: function (insertingClient) {
            this.clients.push(insertingClient);
        },

        updateItem: function (updatingClient) { },

        deleteItem: function (deletingClient) {
            var clientIndex = $.inArray(deletingClient, this.clients);
            this.clients.splice(clientIndex, 1);
        }

    };

    window.db2 = db2;
    db2.clients = [{
        "编号": "wwwOtto Clay",
        "姓名": "Ap #897-1459",
        "A总分": "Ap #897-1459",
        "B总分": "Ap #897-1459",
        "C总分": "Ap #897-1459",
        "D总分": "Ap #897-1459",

    },
    ];

    /**
* 方法作用 气质展示
* 请求接口 api/admin/temperamentback
* @author chenmiao <github.com/Yidaaa-u>
*/
    $.ajax({
        type: "GET",
        cache: true,
        url: SERVER_PATH + "api/admin/temperamentback",
        data: {
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9hZG1pblwvbG9naW4iLCJpYXQiOjE2MDUxODM4MTIsImV4cCI6MTYwNTE4NzQxMiwibmJmIjoxNjA1MTgzODEyLCJqdGkiOiJDWGVSSENKYVJaQVNHdXl1Iiwic3ViIjo2LCJwcnYiOiJkZjg4M2RiOTdiZDA1ZWY4ZmY4NTA4MmQ2ODZjNDVlODMyZTU5M2E5In0.p9swXVobcdyyuQFU1EP44jshxUdZO_nHVI2ETf5rZX0",

        },
        dataType: 'json',
        async: false,
        success: function (data) {

            for (var i = 0; i < data.data.length; i++) {
                db2.clients[i] = [{
                    "编号": "wwwOtto Clay",
                    "姓名": "Ap #897-1459",
                    "A总分": "Ap #897-1459",
                    "B总分": "Ap #897-1459",
                    "C总分": "Ap #897-1459",
                    "D总分": "Ap #897-1459",

                },
                ];
                db2.clients[i].编号 = data.data[i].id,
                    db2.clients[i].姓名 = data.data[i].name,
                    db2.clients[i].A总分 = data.data[i].a,
                    db2.clients[i].B总分 = data.data[i].b,
                    db2.clients[i].C总分 = data.data[i].c,
                    db2.clients[i].D总分 = data.data[i].d
            }

            console.log("成功")
            console.log(data.data)
        },
        error: function (e) {
            alert('操作失败')
        }
    })

    /**
* 方法作用 气质搜索
* 请求接口 api/admin/temperamentselect
* @author chenmiao <github.com/Yidaaa-u>
*/
    $(".search").click(function () {

        $.ajax({

            type: "GET",
            cache: true,
            url: SERVER_PATH + "api/admin/temperamentselect",
            data: {
                name: $(".input-search").val(),
                token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9hZG1pblwvbG9naW4iLCJpYXQiOjE2MDUxODk0MzQsImV4cCI6MTYwNTE5MzAzNCwibmJmIjoxNjA1MTg5NDM0LCJqdGkiOiIwOWVtT2tINFRwVzdDVFNVIiwic3ViIjo2LCJwcnYiOiJkZjg4M2RiOTdiZDA1ZWY4ZmY4NTA4MmQ2ODZjNDVlODMyZTU5M2E5In0.KusHZ2YQBeZxDrVLmEStiJ_u6W2dBtGGh2aNBFerUHc",

            },
            dataType: 'json',
            async: false,
            success: function (data) {
                db1.clients.length = 0
                let headstr = `<th class="jsgrid-header-cell" style="width: 50px;">编号</th>
            <th class="jsgrid-header-cell" style="width: 50px;">性别</th>
            <th class="jsgrid-header-cell" style="width: 50px;">A总分</th>
            <th class="jsgrid-header-cell" style="width: 50px;">B总分</th>
            <th class="jsgrid-header-cell" style="width: 50px;">C总分</th>
            <th class="jsgrid-header-cell" style="width: 50px;">D总分</th>
           `
                $(".jsgrid-header-row").empty().append(headstr)
                let str = ``
                for (var i = 0; i < data.data.length; i++) {
                    str += `
                <tr class="jsgrid-row">
                <td class="jsgrid-cell" style="width: 50px;">${data.data[i].id}</td>
                <td class="jsgrid-cell" style="width: 50px;">${data.data[i].name}</td>
                <td class="jsgrid-cell" style="width: 50px;">${data.data[i].a}</td>
                <td class="jsgrid-cell" style="width: 50px;">${data.data[i].b}</td>
                <td class="jsgrid-cell" style="width: 50px;">${data.data[i].c}</td>
                <td class="jsgrid-cell" style="width: 50px;">${data.data[i].d}</td>
                </tr>
                `
                    $(".jsgrid-grid-body table tbody").empty().append(str)
                }

                console.log(db1.clients)
                console.log("成功")
                console.log(data.data)
            },
            error: function (e) {
                alert('操作失败')

            }
        })
    })


    //PDP测试
    var db3 = {

        loadData: function (filter) {
            return $.grep(this.clients, function (client) {
                return (!filter.编号 || client.编号.indexOf(filter.编号) > -1) &&
                    // (filter.年龄 === undefined || client.年龄 === filter.年龄) &&
                    (!filter.姓名 || client.姓名 === filter.姓名) &&
                    (!filter.A总分 || client.A总分 === filter.A总分) &&
                    // (!filter.退役时间 || client.退役时间.indexOf(filter.退役时间) > -1) &&
                    (!filter.A总分 || client.B总分 === filter.A总分) &&
                    (!filter.B总分 || client.B总分 === filter.B总分) &&
                    (!filter.C总分 || client.C总分 === filter.C总分) &&
                    (!filter.D总分 || client.D总分 === filter.D总分);
            });
        },

        insertItem: function (insertingClient) {
            this.clients.push(insertingClient);
        },

        updateItem: function (updatingClient) { },

        deleteItem: function (deletingClient) {
            var clientIndex = $.inArray(deletingClient, this.clients);
            this.clients.splice(clientIndex, 1);
        }

    };

    window.db3 = db3;

    db3.clients = [{
        "编号": "wwwOtto Clay",
        "姓名": "Ap #897-1459",
        "老虎分数": "Ap #897-1459",
        "孔雀分数": "Ap #897-1459",
        "考拉分数": "Ap #897-1459",
        "猫头鹰分数": "Ap #897-1459",
        "变色龙分数": "Ap #897-1459",
    },
    ];


    /**
* 方法作用 PDP展示
* 请求接口 api/admin/pdpback
* @author chenmiao <github.com/Yidaaa-u>
*/
    $.ajax({
        type: "GET",
        cache: true,
        url: SERVER_PATH + "api/admin/pdpback",
        data: {
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9hZG1pblwvbG9naW4iLCJpYXQiOjE2MDUxODM4MTIsImV4cCI6MTYwNTE4NzQxMiwibmJmIjoxNjA1MTgzODEyLCJqdGkiOiJDWGVSSENKYVJaQVNHdXl1Iiwic3ViIjo2LCJwcnYiOiJkZjg4M2RiOTdiZDA1ZWY4ZmY4NTA4MmQ2ODZjNDVlODMyZTU5M2E5In0.p9swXVobcdyyuQFU1EP44jshxUdZO_nHVI2ETf5rZX0",

        },
        dataType: 'json',
        async: false,
        success: function (data) {

            for (var i = 0; i < data.data.length; i++) {
                db3.clients[i] = [{
                    "编号": "wwwOtto Clay",
                    "姓名": "Ap #897-1459",
                    "老虎分数": "Ap #897-1459",
                    "孔雀分数": "Ap #897-1459",
                    "考拉分数": "Ap #897-1459",
                    "猫头鹰分数": "Ap #897-1459",
                    "变色龙分数": "Ap #897-1459",
                },
                ];
                db3.clients[i].编号 = data.data[i].id,
                    db3.clients[i].姓名 = data.data[i].name,
                    db3.clients[i].老虎分数 = data.data[i].tiger,
                    db3.clients[i].孔雀分数 = data.data[i].peacock,
                    db3.clients[i].考拉分数 = data.data[i].koala,
                    db3.clients[i].猫头鹰分数 = data.data[i].owl,
                    db3.clients[i].变色龙分数 = data.data[i].chameleon
            }

            console.log("成功")
            console.log(data.data)
        },
        error: function (e) {
            alert('操作失败')
        }
    })

    /**
    * 方法作用 气质搜索
    * 请求接口 api/admin/pdpselect
    * @author chenmiao <github.com/Yidaaa-u>
    */
    $(".search").click(function () {

        $.ajax({

            type: "GET",
            cache: true,
            url: SERVER_PATH + "api/admin/pdpselect",
            data: {
                name: $(".input-search").val(),
                token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9hZG1pblwvbG9naW4iLCJpYXQiOjE2MDUxODk0MzQsImV4cCI6MTYwNTE5MzAzNCwibmJmIjoxNjA1MTg5NDM0LCJqdGkiOiIwOWVtT2tINFRwVzdDVFNVIiwic3ViIjo2LCJwcnYiOiJkZjg4M2RiOTdiZDA1ZWY4ZmY4NTA4MmQ2ODZjNDVlODMyZTU5M2E5In0.KusHZ2YQBeZxDrVLmEStiJ_u6W2dBtGGh2aNBFerUHc",

            },
            dataType: 'json',
            async: false,
            success: function (data) {
                db1.clients.length = 0
                let headstr = `<th class="jsgrid-header-cell" style="width: 50px;">编号</th>
        <th class="jsgrid-header-cell" style="width: 50px;">性别</th>
        <th class="jsgrid-header-cell" style="width: 50px;">老虎分数</th>
        <th class="jsgrid-header-cell" style="width: 50px;">孔雀分数</th>
        <th class="jsgrid-header-cell" style="width: 50px;">考拉分数</th>
        <th class="jsgrid-header-cell" style="width: 50px;">猫头鹰分数</th>
        <th class="jsgrid-header-cell" style="width: 50px;">变色龙分数</th>
       `
                $(".jsgrid-header-row").empty().append(headstr)
                let str = ``
                for (var i = 0; i < data.data.length; i++) {
                    str += `
            <tr class="jsgrid-row">
            <td class="jsgrid-cell" style="width: 50px;">${data.data[i].id}</td>
            <td class="jsgrid-cell" style="width: 50px;">${data.data[i].name}</td>
            <td class="jsgrid-cell" style="width: 50px;">${data.data[i].tiger}</td>
            <td class="jsgrid-cell" style="width: 50px;">${data.data[i].peacock}</td>
            <td class="jsgrid-cell" style="width: 50px;">${data.data[i].koala}</td>
            <td class="jsgrid-cell" style="width: 50px;">${data.data[i].owl}</td>
            <td class="jsgrid-cell" style="width: 50px;">${data.data[i].chameleon}</td>
            </tr>
            `
                    $(".jsgrid-grid-body table tbody").empty().append(str)
                }

                console.log(db1.clients)
                console.log("成功")
                console.log(data.data)
            },
            error: function (e) {
                alert('操作失败')

            }
        })
    })

    //霍兰德测试
    var db4 = {

        loadData: function (filter) {
            return $.grep(this.clients, function (client) {
                return (!filter.编号 || client.编号.indexOf(filter.编号) > -1) &&
                    // (filter.年龄 === undefined || client.年龄 === filter.年龄) &&
                    (!filter.姓名 || client.姓名 === filter.姓名) &&
                    (!filter.A总分 || client.A总分 === filter.A总分) &&
                    // (!filter.退役时间 || client.退役时间.indexOf(filter.退役时间) > -1) &&
                    (!filter.A总分 || client.B总分 === filter.A总分) &&
                    (!filter.B总分 || client.B总分 === filter.B总分) &&
                    (!filter.C总分 || client.C总分 === filter.C总分) &&
                    (!filter.D总分 || client.D总分 === filter.D总分);
            });
        },

        insertItem: function (insertingClient) {
            this.clients.push(insertingClient);
        },

        updateItem: function (updatingClient) { },

        deleteItem: function (deletingClient) {
            var clientIndex = $.inArray(deletingClient, this.clients);
            this.clients.splice(clientIndex, 1);
        }

    };
    window.db4 = db4;
    db4.clients = [{
        "编号": "wwwOtto Clay",
        "姓名": "Ap #897-1459",
        "第一项": "Ap #897-1459",
        "第二项": "Ap #897-1459",
        "第三项": "Ap #897-1459",

    },
    ];
    /**
* 方法作用 霍兰德展示
* 请求接口 api/admin/hollandback
* @author chenmiao <github.com/Yidaaa-u>
*/
    $.ajax({
        type: "GET",
        cache: true,
        url: SERVER_PATH + "api/admin/hollandback",
        data: {
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9hZG1pblwvbG9naW4iLCJpYXQiOjE2MDUxODM4MTIsImV4cCI6MTYwNTE4NzQxMiwibmJmIjoxNjA1MTgzODEyLCJqdGkiOiJDWGVSSENKYVJaQVNHdXl1Iiwic3ViIjo2LCJwcnYiOiJkZjg4M2RiOTdiZDA1ZWY4ZmY4NTA4MmQ2ODZjNDVlODMyZTU5M2E5In0.p9swXVobcdyyuQFU1EP44jshxUdZO_nHVI2ETf5rZX0",

        },
        dataType: 'json',
        async: false,
        success: function (data) {
            for (var i = 0; i < data.data.length; i++) {
                db4.clients[i] = [{
                    "编号": "wwwOtto Clay",
                    "姓名": "Ap #897-1459",
                    "第一项": "Ap #897-1459",
                    "第二项": "Ap #897-1459",
                    "第三项": "Ap #897-1459",
                },
                ];
                db4.clients[i].编号 = data.data[i].id,
                    db4.clients[i].姓名 = data.data[i].name,
                    db4.clients[i].第一项 = data.data[i].first,
                    db4.clients[i].第二项 = data.data[i].second,
                    db4.clients[i].第三项 = data.data[i].third

            }
            console.log("成功")
        },
        error: function (e) {
            alert('操作失败')
        }
    })

    /**
    * 方法作用 气质搜索
    * 请求接口 api/admin/hollandselect
    * @author chenmiao <github.com/Yidaaa-u>
    */
    $(".search").click(function () {
        $.ajax({
            type: "GET",
            cache: true,
            url: SERVER_PATH + "api/admin/hollandselect",
            data: {
                name: $(".input-search").val(),
                token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9hZG1pblwvbG9naW4iLCJpYXQiOjE2MDUxODk0MzQsImV4cCI6MTYwNTE5MzAzNCwibmJmIjoxNjA1MTg5NDM0LCJqdGkiOiIwOWVtT2tINFRwVzdDVFNVIiwic3ViIjo2LCJwcnYiOiJkZjg4M2RiOTdiZDA1ZWY4ZmY4NTA4MmQ2ODZjNDVlODMyZTU5M2E5In0.KusHZ2YQBeZxDrVLmEStiJ_u6W2dBtGGh2aNBFerUHc",

            },
            dataType: 'json',
            async: false,
            success: function (data) {
                db1.clients.length = 0
                let headstr = `<th class="jsgrid-header-cell" style="width: 50px;">编号</th>
    <th class="jsgrid-header-cell" style="width: 50px;">性别</th>
    <th class="jsgrid-header-cell" style="width: 50px;">第一项</th>
    <th class="jsgrid-header-cell" style="width: 50px;">第二项</th>
    <th class="jsgrid-header-cell" style="width: 50px;">第三项</th>
   `
                $(".jsgrid-header-row").empty().append(headstr)
                let str = ``
                for (var i = 0; i < data.data.length; i++) {
                    str += `
        <tr class="jsgrid-row">
        <td class="jsgrid-cell" style="width: 50px;">${data.data[i].id}</td>
        <td class="jsgrid-cell" style="width: 50px;">${data.data[i].name}</td>
        <td class="jsgrid-cell" style="width: 50px;">${data.data[i].first}</td>
        <td class="jsgrid-cell" style="width: 50px;">${data.data[i].second}</td>
        <td class="jsgrid-cell" style="width: 50px;">${data.data[i].third}</td>
        </tr>
        `
                    $(".jsgrid-grid-body table tbody").empty().append(str)
                }
                console.log("成功")
            },
            error: function (e) {
                alert('操作失败')

            }
        })
    })

}());

