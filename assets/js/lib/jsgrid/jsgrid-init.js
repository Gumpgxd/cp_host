        $(function() {

            $("#jsGrid").jsGrid({
                height: "100%",
                width: "100%",
                filtering: false,
                paging: true,
                autoload: true,
                pageSize: 15,
                pageButtonCount: 5,
                deleteConfirm: "是否要删除此用户数据?",
                controller: db1,
                fields: [
                    { name: "编号", type: "text", width: 50 },
                    { name: "年龄", type: "text", width: 50 },
                    { name: "性别", type: "text", width: 50 },
                    { name: "学历", type: "text", width: 50 },
                    { name: "退役时间", type: "text", width: 50 },
                    { name: "退役方式", type: "text", width: 50 },
                    { name: "目前从事工作", type: "text", width: 50 },
                    { name: "姓名", type: "text", width: 50 },
                    { name: "QQ", type: "text", width: 50 },
                ]
            });







            $("#Tem-jsGrid").jsGrid({
                height: "100%",
                width: "100%",
                filtering: false,
                editing: true,
                paging: true,
                autoload: true,
                pageSize: 15,
                pageButtonCount: 5,
                deleteConfirm: "是否要删除此用户数据?",
                controller: db2,
                fields: [
                    { name: "编号", type: "text", width: 50 },
                    { name: "姓名", type: "text", width: 50 },
                    { name: "A总分", type: "text", width: 50 },
                    { name: "B总分", type: "text", width: 50 },
                    { name: "C总分", type: "text", width: 50 },
                    { name: "D总分", type: "text", width: 50 },
                ]
            });






            $("#PDP-jsGrid").jsGrid({
                height: "100%",
                width: "100%",
                filtering: false,
                paging: true,
                autoload: true,
                pageSize: 15,
                pageButtonCount: 5,
                deleteConfirm: "是否要删除此用户数据?",
                controller: db3,
                fields: [
                    { name: "编号", type: "text", width: 50 },
                    { name: "姓名", type: "text", width: 50 },
                    { name: "老虎分数", type: "text", width: 50 },
                    { name: "孔雀分数", type: "text", width: 50 },
                    { name: "考拉分数", type: "text", width: 50 },
                    { name: "猫头鹰分数", type: "text", width: 50 },
                    { name: "变色龙分数", type: "text", width: 50 },
                ]
            });




            $("#hld-jsGrid").jsGrid({
                height: "100%",
                width: "100%",
                filtering: false,
                paging: true,
                autoload: true,
                pageSize: 15,
                pageButtonCount: 5,
                // deleteConfirm: "是否要删除此用户数据?",
                controller: db4,
                fields: [
                    { name: "编号", type: "text", width: 50 },
                    { name: "姓名", type: "text", width: 50 },
                    { name: "第一项", type: "text", width: 50 },
                    { name: "第二项", type: "text", width: 50 },
                    { name: "第三项", type: "text", width: 50 },
                ]
            });

        });