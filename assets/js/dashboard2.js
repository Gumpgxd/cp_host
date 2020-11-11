
(function ($) {
    "use strict";
    /*----------------------------- 饼图*/


    var data = {
        labels: ['第一项', '第二项', '第三项'],
        series: [{
                value: 30,
                className: "bg-facebook"
    },
            {
                value: 30,
                className: "bg-twitter"
    },
            {
                value: 40,
                className: "bg-youtube"
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
        labels: ['A总分', 'B总分', 'C总分', 'D总分'],
        series: [[5, 4, 3, 7]]
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
            [5, 4, 3, 7, 5]
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








