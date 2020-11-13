

(function ($) {
    var A,B,C,D;
    var tiger,peacock,Koala,owl,chameleon;
    var hld_R,hld_A,hld_I,hld_S,hld_E,hld_C;


    $.ajax({
        url: "http://127.0.0.1:8000/api/admin/temaverage",
        type: 'get',
        async:false,
        dataType: 'json',
        success: function (data) {
            A = data.data.A;
            B = data.data.B;

            C = data.data.C;
            D = data.data.D;
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
        url: "http://127.0.0.1:8000/api/admin/pdpaverage",
        type: 'get',
        async:false,
        dataType: 'json',
        success: function (data) {
            tiger = data.data.tiger;
            peacock = data.data.peacock;
            Koala = data.data.Koala;
            owl = data.data.owl;
            chameleon = data.data.chameleon;

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
        url: "http://127.0.0.1:8000/api/admin/hollandaverage",
        type: 'get',
        async:false,
        dataType: 'json',
        success: function (data) {
            hld_R = data.data.R;
            hld_A = data.data.A;
            hld_I = data.data.I;
            hld_S = data.data.S;
            hld_E = data.data.E;
            hld_C = data.data.C;

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


    "use strict";
    /*----------------------------- 饼图*/


    var data = {
        labels: ['R', 'A', 'I','S','E','C'],
        series: [{
                value: hld_R,
                className: "bg-facebook"
    },
            {
                value: hld_A,
                className: "bg-twitter"
    },
            {
                value: hld_I,
                className: "bg-youtube"
    },{
                value: hld_S,
                className: "bg-douyin"
            },{
                value: hld_E,
                className: "bg-bilibili"
            },{
                value: hld_C,
                className: "bg-kuaishou"
            }]
        //        colors: ["#333", "#222", "#111"]
    };

    var options = {
        labelInterpolationFnc: function (value) {
            return value[0]
        }
    };

    var responsiveOptions = [
  ['screen and (min-width: 400px)', {
            chartPadding: 30,
            labelOffset: 100,
            labelDirection: 'explode',
            labelInterpolationFnc: function (value) {
                return value;
            }
  }],
  ['screen and (min-width: 1024px)', {
            labelOffset: 80,
            chartPadding: 20
  }]
];

    new Chartist.Pie('#piecharts', data, options, responsiveOptions);


    /*---------------------------------- 柱状图*/

    var data = {
        labels: ['A', 'B', 'C', 'D'],
        series: [[A, B, C, D]]
    };

    var options = {
        seriesBarDistance: 10
    };

    var responsiveOptions = [
  ['screen and (max-width: 400px)', {
            seriesBarDistance: 5,
            axisX: {
                labelInterpolationFnc: function (value) {
                    return value[0];
                }
            }
  }]
];

    new Chartist.Bar('#colcharts', data, options, responsiveOptions);


    var data2 = {
        labels: ['老虎', '孔雀', '考拉', '猫头鹰', '变色龙'],
        series: [
            [tiger, peacock, Koala, owl,chameleon]
        ]
    };

    var options2 = {
        seriesBarDistance: 10
    };

    var responsiveOptions2 = [
  ['screen and (max-width: 400px)', {
            seriesBarDistance: 5,
            axisX: {
                labelInterpolationFnc: function (value) {
                    return value[0];
                }
            }
  }]
];
    new Chartist.Bar('#colchartss', data2, options2, responsiveOptions2);
})(jQuery);








