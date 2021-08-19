$(document).ready(function(){
    var entries =[
        {label : 'HTML'},
        {label : 'CSS'},
        {label : 'JavaScript'},
        {label : 'Python'},
        {label : 'Jquery'},
        {label : 'SQL'},
        {label : 'C++'},
        {label : 'C'},
        {label : 'React.JS'},
        {label : 'GitHub'},
        {label : 'Git'},
        {label : 'Linux'}
    ];
    var settings = {
        entries : entries,
        width: 580,
        height: 380,
        radius: '70%',
        radiusMin:75,
        bgDraw: true,
        bgColor: '#fff',
        opacityOver:1.00,
        opacityOut: 0.2,
        opacitySpeed: 20,
        fov: 800,
        speed: 1.8,
        fontFamily: 'Impact, Haettenschweiler, Arial Narrow Bold, sans-serif',
        fontSize: '40',
        fontColor: 'crimson',
        fontWeidht:'normal',
        fontStyle:'normal',
        fontSretch: 'normal',
        fontToUppercase: true
    };
    $('#TagCloud').svg3DTagCloud(settings);
})