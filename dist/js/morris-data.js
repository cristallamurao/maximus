$(function () {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2010 Q1',
            Installation: 2666,
            Service: null,
            Measurement: 2647
        }, {
            period: '2010 Q2',
            Installation: 2778,
            Service: 2294,
            Measurement: 2441
        }, {
            period: '2010 Q3',
            Installation: 4912,
            Service: 1969,
            Measurement: 2501
        }, {
            period: '2010 Q4',
            Installation: 3767,
            Service: 3597,
            Measurement: 5689
        }, {
            period: '2011 Q1',
            Installation: 6810,
            Service: 1914,
            Measurement: 2293
        }, {
            period: '2011 Q2',
            Installation: 5670,
            Service: 4293,
            Measurement: 1881
        }, {
            period: '2011 Q3',
            Installation: 4820,
            Service: 3795,
            Measurement: 1588
        }, {
            period: '2011 Q4',
            Installation: 15073,
            Service: 5967,
            Measurement: 5175
        }, {
            period: '2012 Q1',
            Installation: 10687,
            Service: 4460,
            Measurement: 2028
        }, {
            period: '2012 Q2',
            Installation: 8432,
            Service: 5713,
            Measurement: 1791
        }],
        xkey: 'period',
        ykeys: ['Installation', 'Service', 'Measurement'],
        labels: ['Installation', 'Service', 'Measurement'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

});
